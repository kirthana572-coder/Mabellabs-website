// ================================================================
// CHECKOUT PAGE
// ================================================================

let cartItems = [];
let subtotal = 0;
let shippingFee = 8.00;
let total = 0;
let selectedPayment = null;

// ================================================================
// GO TO CHECKOUT - Called from Cart page
// ================================================================

window.goToCheckout = function() {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert('Please log in to proceed to checkout.');
        localStorage.setItem('redirectAfterLogin', 'checkout.html');
        window.location.href = 'login.html';
        return;
    }
    
    // Check if cart has items
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

// ================================================================
// LOAD CHECKOUT
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🛒 Checkout page loaded');
    
    // Check if user is logged in
    const user = firebase.auth().currentUser;
    if (!user) {
        localStorage.setItem('redirectAfterLogin', 'checkout.html');
        alert('Please log in to proceed to checkout.');
        window.location.href = 'login.html';
        return;
    }
    
    // Load user profile data
    loadUserProfile(user);
    
    // Load cart items
    loadCheckoutItems(user);
    
    // Setup event listeners
    setupEventListeners();
});

// ================================================================
// LOAD USER PROFILE
// ================================================================

async function loadUserProfile(user) {
    try {
        const doc = await firebase.firestore().collection('users').doc(user.uid).get();
        if (doc.exists) {
            const data = doc.data();
            document.getElementById('checkoutName').value = data.fullname || user.displayName || '';
            document.getElementById('checkoutEmail').value = user.email || '';
            document.getElementById('checkoutPhone').value = data.phone || '';
            document.getElementById('checkoutAddress1').value = data.address || '';
        }
    } catch (error) {
        console.error('Error loading profile:', error);
    }
}

// ================================================================
// LOAD CHECKOUT ITEMS
// ================================================================

async function loadCheckoutItems(user) {
    const container = document.getElementById('orderItems');
    
    try {
        const cartRef = firebase.firestore().collection('users').doc(user.uid).collection('cart');
        const snapshot = await cartRef.get();
        
        if (snapshot.empty) {
            container.innerHTML = `
                <div class="empty-cart-checkout">
                    <div class="empty-icon">🛒</div>
                    <h2>Your cart is empty</h2>
                    <p>Add some products to your cart before checking out.</p>
                    <a href="products.html" class="btn">Browse Products</a>
                </div>
            `;
            document.getElementById('proceedBtn').disabled = true;
            return;
        }
        
        cartItems = [];
        subtotal = 0;
        let html = '';
        
        snapshot.forEach(doc => {
            const item = doc.data();
            cartItems.push(item);
            const itemSubtotal = item.productPrice * item.quantity;
            subtotal += itemSubtotal;
            
            html += `
                <div class="order-item">
                    <div class="order-item-image">
                        <img src="${item.productImage || 'images/products/placeholder.jpg'}" alt="${item.productName}">
                    </div>
                    <div class="order-item-details">
                        <div class="order-item-name">${item.productName}</div>
                        <div class="order-item-meta">Qty: ${item.quantity}</div>
                    </div>
                    <div class="order-item-price">RM ${itemSubtotal.toFixed(2)}</div>
                </div>
            `;
        });
        
        container.innerHTML = html;
        updateTotals();
        
    } catch (error) {
        console.error('Error loading cart:', error);
        alert('Error loading your cart. Please try again.');
    }
}

// ================================================================
// UPDATE TOTALS
// ================================================================

function updateTotals() {
    total = subtotal + shippingFee;
    
    document.getElementById('summarySubtotal').textContent = `RM ${subtotal.toFixed(2)}`;
    document.getElementById('summaryShipping').textContent = `RM ${shippingFee.toFixed(2)}`;
    document.getElementById('summaryTotal').textContent = `RM ${total.toFixed(2)}`;
}

// ================================================================
// SETUP EVENT LISTENERS
// ================================================================

function setupEventListeners() {
    // Delivery method change
    document.querySelectorAll('input[name="deliveryMethod"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const fee = parseFloat(this.closest('.delivery-option').dataset.fee);
            shippingFee = fee;
            updateTotals();
            
            // Update selected visual
            document.querySelectorAll('.delivery-option').forEach(opt => {
                opt.classList.toggle('selected', opt.querySelector('input').checked);
            });
        });
    });
    
    // Payment method selection
    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', function() {
            selectedPayment = this.value;
            
            // Update selected visual
            document.querySelectorAll('.payment-option').forEach(opt => {
                opt.classList.toggle('selected', opt.querySelector('input').checked);
            });
            
            validateCheckout();
        });
    });
    
    // Terms checkboxes
    document.querySelectorAll('.terms-checkbox input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', validateCheckout);
    });
    
    // Real-time validation on input
    document.querySelectorAll('#checkoutForm input, #checkoutForm select').forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
        field.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    // Proceed button click
    document.getElementById('proceedBtn').addEventListener('click', proceedToPayment);
}

// ================================================================
// FIELD VALIDATION
// ================================================================

function validateField(field) {
    const id = field.id;
    const errorEl = document.getElementById(id + 'Error');
    
    if (!errorEl) return;
    
    let isValid = true;
    let errorMessage = '';
    
    switch (id) {
        case 'checkoutName':
            isValid = field.value.trim().length >= 2;
            errorMessage = 'Please enter your full name.';
            break;
        case 'checkoutEmail':
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
            errorMessage = 'Please enter a valid email address.';
            break;
        case 'checkoutPhone':
            isValid = /^[0-9]{10,12}$/.test(field.value.trim().replace(/\s/g, ''));
            errorMessage = 'Please enter a valid phone number (10-12 digits).';
            break;
        case 'checkoutAddress1':
            isValid = field.value.trim().length >= 5;
            errorMessage = 'Please enter your address.';
            break;
        case 'checkoutCity':
            isValid = field.value.trim().length >= 2;
            errorMessage = 'Please enter your city.';
            break;
        case 'checkoutState':
            isValid = field.value !== '';
            errorMessage = 'Please select your state.';
            break;
        case 'checkoutPostcode':
            isValid = /^[0-9]{5}$/.test(field.value.trim());
            errorMessage = 'Please enter a valid 5-digit postcode.';
            break;
        default:
            return;
    }
    
    if (!isValid) {
        field.classList.add('error');
        errorEl.textContent = errorMessage;
        errorEl.classList.add('show');
    } else {
        field.classList.remove('error');
        errorEl.classList.remove('show');
    }
    
    validateCheckout();
}

// ================================================================
// VALIDATE CHECKOUT
// ================================================================

function validateCheckout() {
    const errors = [];
    const fields = [
        { id: 'checkoutName', label: 'Full Name' },
        { id: 'checkoutEmail', label: 'Email Address' },
        { id: 'checkoutPhone', label: 'Phone Number' },
        { id: 'checkoutAddress1', label: 'Address' },
        { id: 'checkoutCity', label: 'City' },
        { id: 'checkoutState', label: 'State' },
        { id: 'checkoutPostcode', label: 'Postcode' }
    ];
    
    // Check all required fields
    fields.forEach(f => {
        const el = document.getElementById(f.id);
        if (el && el.value.trim() === '') {
            errors.push(f.label);
            el.classList.add('error');
        }
    });
    
    // Check delivery method
    const deliverySelected = document.querySelector('input[name="deliveryMethod"]:checked');
    if (!deliverySelected) {
        errors.push('Delivery Method');
    }
    
    // Check payment method
    const paymentSelected = document.querySelector('input[name="paymentMethod"]:checked');
    if (!paymentSelected) {
        errors.push('Payment Method');
    }
    
    // Check terms
    const termsChecked = document.getElementById('termsAgree').checked;
    const privacyChecked = document.getElementById('privacyAgree').checked;
    const refundChecked = document.getElementById('refundAgree').checked;
    
    if (!termsChecked || !privacyChecked || !refundChecked) {
        document.getElementById('termsError').classList.add('show');
        errors.push('Terms & Conditions');
    } else {
        document.getElementById('termsError').classList.remove('show');
    }
    
    // Enable/disable proceed button
    const proceedBtn = document.getElementById('proceedBtn');
    if (errors.length === 0) {
        proceedBtn.disabled = false;
    } else {
        proceedBtn.disabled = true;
    }
}

// ================================================================
// PROCEED TO PAYMENT
// ================================================================

async function proceedToPayment() {
    const btn = document.getElementById('proceedBtn');
    const placeholder = document.getElementById('paymentPlaceholder');
    
    // Disable button and show loading
    btn.disabled = true;
    btn.classList.add('loading');
    btn.textContent = 'Processing...';
    
    try {
        const user = firebase.auth().currentUser;
        if (!user) {
            alert('Please log in to proceed.');
            window.location.href = 'login.html';
            return;
        }
        
        // Get shipping details
        const shippingData = {
            fullName: document.getElementById('checkoutName').value.trim(),
            email: document.getElementById('checkoutEmail').value.trim(),
            phone: document.getElementById('checkoutPhone').value.trim(),
            address1: document.getElementById('checkoutAddress1').value.trim(),
            address2: document.getElementById('checkoutAddress2').value.trim(),
            city: document.getElementById('checkoutCity').value.trim(),
            state: document.getElementById('checkoutState').value,
            postcode: document.getElementById('checkoutPostcode').value.trim(),
            country: 'Malaysia'
        };
        
        // Get delivery method
        const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked');
        const deliveryLabel = deliveryMethod.closest('.delivery-option').querySelector('.delivery-name').textContent.trim();
        const deliveryFee = parseFloat(deliveryMethod.closest('.delivery-option').dataset.fee);
        
        // Get payment method
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        const paymentLabel = paymentMethod.closest('.payment-option').querySelector('.payment-name').textContent.trim();
        
        // Delivery notes
        const deliveryNotes = document.getElementById('deliveryNotes').value.trim();
        
        // ================================================================
        // CREATE ORDER IN FIRESTORE
        // ================================================================
        const orderData = {
            userId: user.uid,
            shipping: shippingData,
            items: cartItems,
            subtotal: subtotal,
            shippingFee: deliveryFee,
            total: total,
            deliveryMethod: deliveryLabel,
            paymentMethod: paymentLabel,
            paymentMethodType: selectedPayment,
            deliveryNotes: deliveryNotes,
            orderStatus: 'Pending',
            paymentStatus: 'Pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        const orderRef = await firebase.firestore().collection('orders').add(orderData);
        console.log('📦 Order created:', orderRef.id);
        
        // ================================================================
        // CLEAR CART
        // ================================================================
        const cartRef = firebase.firestore().collection('users').doc(user.uid).collection('cart');
        const snapshot = await cartRef.get();
        snapshot.forEach(doc => doc.ref.delete());
        
        // ================================================================
        // SHOW PAYMENT PLACEHOLDER
        // ================================================================
        btn.style.display = 'none';
        placeholder.style.display = 'block';
        placeholder.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 60px; margin-bottom: 15px;">✅</div>
                <h3 style="color: #28a745; margin-bottom: 5px;">Order #${orderRef.id} created successfully!</h3>
                <p style="color: #666; margin-bottom: 5px;">Your order has been placed.</p>
                <p style="font-size: 18px; font-weight: 700; color: #7A210C; margin: 15px 0;">
                    Total: RM ${total.toFixed(2)}
                </p>
                <p style="color: #999; font-size: 14px; margin-bottom: 20px;">
                    Payment gateway integration will be available soon.
                </p>
                <button onclick="window.location.href='index.html'" style="padding: 12px 40px; background: #7A210C; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 16px; font-weight: 600; font-family: 'Poppins', sans-serif; transition: all 0.3s ease;">
                    Return to Home
                </button>
            </div>
        `;
        
    } catch (error) {
        console.error('❌ Checkout error:', error);
        alert('Error processing your order: ' + error.message);
        btn.disabled = false;
        btn.classList.remove('loading');
        btn.textContent = '💳 Proceed to Payment';
    }
}

// ================================================================
// ✅ ADDED: Fallback checkout function for cart.html
// ================================================================

window.checkout = window.goToCheckout;