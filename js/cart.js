// ================= CART SYSTEM =================
// NOTE: Firebase is initialized in auth.js

// ================= CART FUNCTIONS =================

// Add product to cart (SKU only — price fetched from Firestore)
window.addToCart = function (productSku) {
    const user = getAuthUser();

    if (!user) {
        localStorage.setItem('pendingProduct', JSON.stringify({ productSku: productSku }));
        localStorage.setItem('redirectAfterLogin', 'cart.html');

        alert('Please log in or create an account to add items to your cart.');
        window.location.href = 'login.html';
        return;
    }

    addToCartFirestore(user.uid, productSku);
};

// Fetch product details from Firestore and add to cart
async function addToCartFirestore(uid, productSku) {
    try {
        const productDoc = await firebase.firestore().collection('products').doc(productSku).get();

        if (!productDoc.exists) {
            alert('This product is not available yet. Please try again later.');
            return;
        }

        const data = productDoc.data();
        const productName = data.productName || data.name || 'Product';
        const productPrice = typeof data.price === 'number'
            ? data.price
            : parseFloat(String(data.price).replace(/[RM,\s]/g, ''));
        const productImage = data.productImage || data.image || '';
        const dosage = data.dosage || '';

        if (isNaN(productPrice)) {
            alert('Unable to retrieve product price. Please try again later.');
            return;
        }

        const cartRef = firebase.firestore().collection('users').doc(uid).collection('cart');
        const existingDoc = await cartRef.doc(productSku).get();

        if (existingDoc.exists) {
            const currentQty = existingDoc.data().quantity || 1;
            await cartRef.doc(productSku).update({
                quantity: currentQty + 1,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        } else {
            await cartRef.doc(productSku).set({
                productId: productSku,
                productName: productName,
                productPrice: productPrice,
                productImage: productImage,
                dosage: dosage,
                quantity: 1,
                addedAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        }

        alert('✅ Product added to cart successfully!');
        console.log('✅ Product added to cart:', productName, dosage ? `(${dosage})` : '');

        updateCartCount(uid);

    } catch (error) {
        console.error('❌ Error adding to cart:', error);
        alert('❌ Error adding to cart: ' + error.message);
    }
}

// ================= UPDATE CART COUNT =================

async function updateCartCount(uid) {
    try {
        const cartRef = firebase.firestore().collection('users').doc(uid).collection('cart');
        const snapshot = await cartRef.get();
        const count = snapshot.size;

        const navCart = document.getElementById('navCart');
        if (navCart) {
            navCart.innerHTML = `<a href="#" onclick="goToCart()">Cart (${count})</a>`;
        }
    } catch (error) {
        console.error('❌ Error updating cart count:', error);
    }
}

// ================= LOAD CART PAGE =================

window.loadCart = async function () {
    console.log(' Loading cart...');

    // currentUser can be null if Firebase hasn't resolved the session yet.
    // Always call loadCart from inside onAuthStateChanged to avoid this.
    const user = getAuthUser();
    console.log('👤 Current user:', user ? user.email : 'No user');

    if (!user) {
        console.log('❌ No user logged in - redirecting to login');
        localStorage.setItem('redirectAfterLogin', 'cart.html');
        alert('Please log in to view your cart.');
        window.location.href = 'login.html';
        return;
    }


    const cartContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const emptyMessage = document.getElementById('emptyCartMessage');

    if (!cartContainer) {
        console.error('❌ cartContainer element not found!');
        return;
    }

    try {
        const cartRef = firebase.firestore().collection('users').doc(user.uid).collection('cart');
        const snapshot = await cartRef.get();

        console.log('📄 Cart items found:', snapshot.size);

        if (snapshot.empty) {
            cartContainer.innerHTML = '';
            if (emptyMessage) emptyMessage.style.display = 'block';
            if (cartTotal) cartTotal.textContent = 'RM 0.00';
            return;
        }

        if (emptyMessage) emptyMessage.style.display = 'none';

        let total = 0;
        let html = '';

        snapshot.forEach(doc => {
            const item = doc.data();
            const subtotal = item.productPrice * item.quantity;
            total += subtotal;

            html += `
                <div class="cart-item" data-product-id="${item.productId}">
                    <div class="cart-item-image">
                        <img src="${item.productImage || 'images/products/placeholder.jpg'}" alt="${item.productName}" onerror="this.src='images/products/placeholder.jpg'">
                    </div>
                    <div class="cart-item-details">
                        <h3>${item.productName}${item.dosage ? ` <span class="cart-item-dosage">(${item.dosage})</span>` : ''}</h3>
                        <p class="cart-item-price">RM ${item.productPrice.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity('${item.productId}', -1)">−</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity('${item.productId}', 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart('${item.productId}')">🗑️</button>
                    </div>
                    <div class="cart-item-subtotal">
                        RM ${subtotal.toFixed(2)}
                    </div>
                </div>
            `;
        });

        cartContainer.innerHTML = html;
        if (cartTotal) cartTotal.textContent = `RM ${total.toFixed(2)}`;

        // Update cart count
        updateCartCount(user.uid);

    } catch (error) {
        console.error('❌ Error loading cart:', error);
        alert('Error loading cart: ' + error.message);
    }
};

// ================= UPDATE QUANTITY =================

window.updateQuantity = async function (productId, change) {
    const user = getAuthUser();
    if (!user) return;

    try {
        const cartRef = firebase.firestore().collection('users').doc(user.uid).collection('cart').doc(productId);
        const doc = await cartRef.get();

        if (doc.exists) {
            const currentQty = doc.data().quantity || 1;
            const newQty = currentQty + change;

            if (newQty <= 0) {
                await removeFromCart(productId);
            } else {
                await cartRef.update({
                    quantity: newQty,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            }

            // Reload cart
            loadCart();
        }
    } catch (error) {
        console.error('❌ Error updating quantity:', error);
    }
};

// ================= REMOVE FROM CART =================

window.removeFromCart = async function (productId) {
    if (!confirm('Remove this item from your cart?')) return;

    const user = getAuthUser();
    if (!user) return;

    try {
        await firebase.firestore().collection('users').doc(user.uid).collection('cart').doc(productId).delete();
        console.log('✅ Item removed from cart');
        loadCart();
    } catch (error) {
        console.error('❌ Error removing item:', error);
        alert('Error removing item: ' + error.message);
    }
};

/// ================================================================
// GO TO CHECKOUT
// ================================================================

window.goToCheckout = function () {
    const proceed = (user) => {
        if (!user) {
            alert('Please log in to proceed to checkout.');
            localStorage.setItem('redirectAfterLogin', 'checkout.html');
            window.location.href = 'login.html';
            return;
        }

        firebase.firestore().collection('users').doc(user.uid).collection('cart').get()
            .then(snapshot => {
                if (snapshot.empty) {
                    alert('Your cart is empty. Please add items before checking out.');
                    window.location.href = 'products.html';
                    return;
                }
                window.location.href = 'checkout.html';
            })
            .catch(error => {
                console.error('Error checking cart:', error);
                window.location.href = 'checkout.html';
            });
    };

    const user = getAuthUser();
    if (user) {
        proceed(user);
    } else {
        whenAuthReady(proceed);
    }
};

// ================= NAVIGATION UPDATE - ADD CART COUNT =================

// Listen for auth state changes
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        updateCartCount(user.uid);
    } else {
        const navCart = document.getElementById('navCart');
        if (navCart) {
            navCart.innerHTML = '<a href="#" onclick="goToCart()"> Cart</a>';
        }
    }
});

// Make loadCart available globally
window.loadCart = loadCart;

console.log('✅ Cart system ready!');