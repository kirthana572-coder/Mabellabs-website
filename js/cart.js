// ================= CART SYSTEM =================
// NOTE: Firebase is initialized in auth.js

// ================= CART FUNCTIONS =================

// Add product to cart
window.addToCart = function(productId, productName, productPrice, productImage) {
    // Check if user is logged in
    const user = firebase.auth().currentUser;
    
    if (!user) {
        // Save the product details to add after login
        localStorage.setItem('pendingProduct', JSON.stringify({
            productId: productId,
            productName: productName,
            productPrice: productPrice,
            productImage: productImage
        }));
        localStorage.setItem('redirectAfterLogin', 'cart.html');
        
        alert('Please log in or create an account to add items to your cart.');
        window.location.href = 'login.html';
        return;
    }
    
    // User is logged in - add to cart
    addToCartFirestore(user.uid, productId, productName, productPrice, productImage);
};

// Add to Firestore
async function addToCartFirestore(uid, productId, productName, productPrice, productImage) {
    try {
        const cartRef = firebase.firestore().collection('users').doc(uid).collection('cart');
        
        // Check if product already exists in cart
        const existingDoc = await cartRef.doc(productId).get();
        
        if (existingDoc.exists) {
            // Update quantity
            const currentQty = existingDoc.data().quantity || 1;
            await cartRef.doc(productId).update({
                quantity: currentQty + 1,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        } else {
            // Add new product
            await cartRef.doc(productId).set({
                productId: productId,
                productName: productName,
                productPrice: productPrice,
                productImage: productImage || '',
                quantity: 1,
                addedAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
        
        alert('✅ Product added to cart successfully!');
        console.log('✅ Product added to cart:', productName);
        
        // Update cart count in navigation
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
            navCart.innerHTML = `<a href="#" onclick="goToCart()">🛒 Cart (${count})</a>`;
        }
    } catch (error) {
        console.error('❌ Error updating cart count:', error);
    }
}

// ================= LOAD CART PAGE =================

window.loadCart = async function() {
    console.log('🛒 Loading cart...');
    
    const user = firebase.auth().currentUser;
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
                        <h3>${item.productName}</h3>
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

window.updateQuantity = async function(productId, change) {
    const user = firebase.auth().currentUser;
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

window.removeFromCart = async function(productId) {
    if (!confirm('Remove this item from your cart?')) return;
    
    const user = firebase.auth().currentUser;
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

// ================= CHECKOUT =================

window.checkout = function() {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert('Please log in to checkout.');
        window.location.href = 'login.html';
        return;
    }
    
    alert('🛒 Checkout functionality coming soon!');
    // window.location.href = 'checkout.html';
};

// ================= NAVIGATION UPDATE - ADD CART COUNT =================

// Listen for auth state changes
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        updateCartCount(user.uid);
    } else {
        const navCart = document.getElementById('navCart');
        if (navCart) {
            navCart.innerHTML = '<a href="#" onclick="goToCart()">🛒 Cart</a>';
        }
    }
});

// Make loadCart available globally
window.loadCart = loadCart;

console.log('✅ Cart system ready!');