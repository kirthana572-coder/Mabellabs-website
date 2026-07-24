// ================= FIREBASE CONFIGURATION =================

const firebaseConfig = {
  apiKey: "AIzaSyB71t7T8tAiOGnqkp5Rqi9S5SD06J-xjvc",
  authDomain: "mabellabs-website.firebaseapp.com",
  projectId: "mabellabs-website",
  storageBucket: "mabellabs-website.firebasestorage.app",
  messagingSenderId: "1015322852411",
  appId: "1:1015322852411:web:2f9d39a6590109a27f301e"
};

// Initialize Firebase (ONLY ONCE)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

console.log('✅ Firebase initialized!');

// ================= USER STATE =================

let currentUser = null;

// ================= HELPER FUNCTIONS =================

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.type = field.type === 'password' ? 'text' : 'password';
}
window.togglePassword = togglePassword;

function validatePassword(password) {
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    };
    
    const reqLength = document.getElementById('req-length');
    const reqUppercase = document.getElementById('req-uppercase');
    const reqLowercase = document.getElementById('req-lowercase');
    const reqNumber = document.getElementById('req-number');
    const reqSpecial = document.getElementById('req-special');
    
    if (reqLength) {
        reqLength.className = requirements.length ? 'valid' : 'invalid';
        reqLength.textContent = requirements.length ? '✓ At least 8 characters' : '✗ At least 8 characters';
    }
    if (reqUppercase) {
        reqUppercase.className = requirements.uppercase ? 'valid' : 'invalid';
        reqUppercase.textContent = requirements.uppercase ? '✓ At least 1 uppercase letter' : '✗ At least 1 uppercase letter';
    }
    if (reqLowercase) {
        reqLowercase.className = requirements.lowercase ? 'valid' : 'invalid';
        reqLowercase.textContent = requirements.lowercase ? '✓ At least 1 lowercase letter' : '✗ At least 1 lowercase letter';
    }
    if (reqNumber) {
        reqNumber.className = requirements.number ? 'valid' : 'invalid';
        reqNumber.textContent = requirements.number ? '✓ At least 1 number' : '✗ At least 1 number';
    }
    if (reqSpecial) {
        reqSpecial.className = requirements.special ? 'valid' : 'invalid';
        reqSpecial.textContent = requirements.special ? '✓ At least 1 special character' : '✗ At least 1 special character';
    }
    
    return Object.values(requirements).every(Boolean);
}

// ================= NAVIGATION UPDATE =================

function updateNavigation(user) {
    const navLogin = document.getElementById('navLogin');
    const navRegister = document.getElementById('navRegister');
    const navProfile = document.getElementById('navProfile');
    const navLogout = document.getElementById('navLogout');
    const navCart = document.getElementById('navCart');
    
    if (user) {
        // User is logged in
        if (navLogin) navLogin.style.display = 'none';
        if (navRegister) navRegister.style.display = 'none';
        if (navProfile) {
            navProfile.style.display = 'inline-block';
            const displayName = user.displayName || user.email || 'U';
            const initial = displayName.charAt(0).toUpperCase();
            const avatarLink = navProfile.querySelector('a');
            if (avatarLink) {
                avatarLink.innerHTML = `<span class="avatar-icon" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:#7A210C;color:white;font-weight:600;font-size:14px;text-transform:uppercase;">${initial}</span>`;
                avatarLink.href = 'profile.html';
                avatarLink.onclick = null;
            }
        }
        if (navLogout) {
            navLogout.style.display = 'inline-block';
            const logoutLink = navLogout.querySelector('a');
            if (logoutLink) {
                logoutLink.onclick = function(e) {
                    e.preventDefault();
                    logout();
                };
            }
        }
        if (navCart) {
            navCart.innerHTML = '<a href="cart.html">🛒 Cart</a>';
        }
        
        console.log('👤 Navigation: Logged in as', user.displayName || user.email);
    } else {
        // User is logged out
        if (navLogin) navLogin.style.display = 'inline-block';
        if (navRegister) navRegister.style.display = 'inline-block';
        if (navProfile) {
            navProfile.style.display = 'inline-block';
            const avatarLink = navProfile.querySelector('a');
            if (avatarLink) {
                avatarLink.innerHTML = `<span class="avatar-icon" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:#ddd;color:#999;font-weight:600;font-size:14px;">👤</span>`;
                avatarLink.href = '#';
                avatarLink.onclick = function(e) {
                    e.preventDefault();
                    alert('Please log in to access your profile.');
                    window.location.href = 'login.html';
                };
            }
        }
        if (navLogout) {
            navLogout.style.display = 'none';
        }
        if (navCart) {
            navCart.innerHTML = '<a href="#" onclick="goToCart()">🛒 Cart</a>';
        }
        
        console.log('👤 Navigation: Logged out');
    }
}

// ================= AUTH STATE LISTENER =================

firebase.auth().onAuthStateChanged((user) => {
    currentUser = user;
    updateNavigation(user);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName
        }));
    } else {
        localStorage.removeItem('currentUser');
    }
});

// ================= GO TO CART =================

window.goToCart = function() {
    const user = firebase.auth().currentUser;
    if (user) {
        window.location.href = 'cart.html';
    } else {
        alert('Please log in to access your cart.');
        localStorage.setItem('redirectAfterLogin', 'cart.html');
        window.location.href = 'login.html';
    }
};

// ================= PROTECTED PAGE CHECK =================

window.checkAuth = function() {
    const user = firebase.auth().currentUser;
    if (!user) {
        const currentPage = window.location.pathname.split('/').pop();
        localStorage.setItem('redirectAfterLogin', currentPage);
        alert('Please log in to access this page.');
        window.location.href = 'login.html';
        return false;
    }
    return true;
};

// ================= REGISTER =================

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (!registerForm) return;

    // Password validation on input
    const passwordField = document.getElementById('regPassword');
    if (passwordField) {
        passwordField.addEventListener('input', function() {
            validatePassword(this.value);
        });
    }

    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const fullname = document.getElementById('regFullName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

        // Validation
        if (!fullname || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (!validatePassword(password)) {
            alert('Please meet all password requirements');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const btn = document.getElementById('registerBtn');
        btn.textContent = 'Creating account...';
        btn.disabled = true;

        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // Update display name
            await user.updateProfile({ displayName: fullname });

            // Save to Firestore using UID as document ID
            await db.collection('users').doc(user.uid).set({
                uid: user.uid,
                fullname: fullname,
                email: email,
                phone: phone,
                address: '',
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            // Sign out (user must login after registration)
            await firebase.auth().signOut();

            alert('✅ Registration successful! Please login to continue.');
            window.location.href = 'login.html';

        } catch (error) {
            console.error('Registration error:', error);
            let message = error.message;
            if (error.code === 'auth/email-already-in-use') {
                message = 'This email is already registered. Please login.';
            } else if (error.code === 'auth/network-request-failed') {
                message = 'Network error. Please check your internet connection.';
            }
            alert('❌ ' + message);
        } finally {
            btn.textContent = 'Create Account';
            btn.disabled = false;
        }
    });
});

// ================= LOGIN =================

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    // Remember Me
    const rememberMe = document.getElementById('rememberMe');
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail && rememberMe) {
        document.getElementById('loginEmail').value = savedEmail;
        rememberMe.checked = true;
    }

    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;

        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        const btn = document.getElementById('loginBtn');
        btn.textContent = 'Logging in...';
        btn.disabled = true;

        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // Save "Remember Me" email
            if (rememberMe && rememberMe.checked) {
                localStorage.setItem('rememberedEmail', email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }

            // Update navigation immediately
            updateNavigation(user);

            alert('✅ Login successful! Welcome back!');

            // Check redirect URL
            const redirectUrl = localStorage.getItem('redirectAfterLogin');
            setTimeout(() => {
                if (redirectUrl) {
                    localStorage.removeItem('redirectAfterLogin');
                    window.location.href = redirectUrl;
                } else {
                    window.location.href = 'index.html';
                }
            }, 1500);

        } catch (error) {
            console.error('Login error:', error);
            let message = error.message;
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                message = 'Invalid email or password. Please try again.';
            } else if (error.code === 'auth/too-many-requests') {
                message = 'Too many failed attempts. Please try again later.';
            } else if (error.code === 'auth/network-request-failed') {
                message = 'Network error. Please check your internet connection.';
            }
            alert('❌ ' + message);
        } finally {
            btn.textContent = 'Login';
            btn.disabled = false;
        }
    });
});

// ================= FORGOT PASSWORD =================

document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeModal = document.getElementById('closeModal');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    if (forgotPasswordLink && forgotPasswordModal) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            forgotPasswordModal.style.display = 'flex';
        });
    }

    if (closeModal && forgotPasswordModal) {
        closeModal.addEventListener('click', function() {
            forgotPasswordModal.style.display = 'none';
        });
    }

    if (forgotPasswordModal) {
        forgotPasswordModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const email = document.getElementById('resetEmail').value.trim();

            if (!email) {
                alert('Please enter your email address');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }

            const btn = forgotPasswordForm.querySelector('.auth-btn');
            btn.textContent = 'Sending...';
            btn.disabled = true;

            try {
                await firebase.auth().sendPasswordResetEmail(email);
                alert('✅ A password reset link has been sent to your email.');
                forgotPasswordModal.style.display = 'none';
                forgotPasswordForm.reset();
            } catch (error) {
                console.error('Password reset error:', error);
                let message = error.message;
                if (error.code === 'auth/user-not-found') {
                    message = 'No account found with this email address.';
                } else if (error.code === 'auth/invalid-email') {
                    message = 'Invalid email address. Please enter a valid email.';
                }
                alert('❌ ' + message);
            } finally {
                btn.textContent = 'Send Reset Link';
                btn.disabled = false;
            }
        });
    }
});

// ================= LOGOUT =================

window.logout = function() {
    if (confirm('Are you sure you want to logout?')) {
        firebase.auth().signOut()
            .then(() => {
                console.log('✅ User signed out');
                localStorage.removeItem('currentUser');
                localStorage.removeItem('redirectAfterLogin');
                updateNavigation(null);
                window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('❌ Sign out error:', error);
            });
    }
};

// ================= PROTECT PAGES =================

document.addEventListener('DOMContentLoaded', function() {
    const protectedPages = ['profile.html', 'cart.html', 'checkout.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        const user = firebase.auth().currentUser;
        if (!user) {
            localStorage.setItem('redirectAfterLogin', currentPage);
            alert('Please log in to access this page.');
            window.location.href = 'login.html';
        }
    }
});

console.log('✅ Auth system ready!');