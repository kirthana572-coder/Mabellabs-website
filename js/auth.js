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

function renderNavbarComponent() {
    const header = document.querySelector('header');
    if (!header) return;

    let currentPage = window.location.pathname.split('/').pop();
    if (!currentPage || currentPage === '/') {
        currentPage = 'index.html';
    }

    header.innerHTML = `
        <div class="container">
            <div class="logo" style="cursor: pointer;" onclick="window.location.href='index.html'">
                <img src="images/mabellabs.png" alt="MABELLABS Malaysia">
                <span class="company-name">Mabellabs Malaysia</span>
            </div>
            <nav>
                <ul id="mainNav">
                    <li><a href="index.html"${currentPage === 'index.html' ? ' class="active"' : ''}>Home</a></li>
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="products.html"${currentPage === 'products.html' || currentPage === 'product-detail.html' ? ' class="active"' : ''}>Products</a></li>
                    <li><a href="brands.html"${currentPage === 'brands.html' ? ' class="active"' : ''}>Brands</a></li>
                    <li><a href="faq.html"${currentPage === 'faq.html' ? ' class="active"' : ''}>FAQ</a></li>
                    <li><a href="distributor.html"${currentPage === 'distributor.html' ? ' class="active"' : ''}>Become Distributor</a></li>
                    <li><a href="contact.html"${currentPage === 'contact.html' ? ' class="active"' : ''}>Contact</a></li>
                </ul>
            </nav>
        </div>
    `;
}

function normalizeNavbar() {
    renderNavbarComponent();

    const navUl = document.querySelector('#mainNav') || document.querySelector('header nav ul') || document.querySelector('nav ul');
    if (!navUl) {
        console.error('❌ Could not find navigation ul');
        return;
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Remove existing dynamic items to avoid duplicates
    const existingIds = ['navCart', 'navProfile', 'navLogout', 'navLogin', 'navRegister'];
    existingIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
    });

    // Cart
    const liCart = document.createElement('li');
    liCart.id = 'navCart';
    liCart.innerHTML = `<a href="#" onclick="goToCart()">🛒 Cart</a>`;
    if (currentPage === 'cart.html') {
        liCart.querySelector('a').classList.add('active');
    }
    navUl.appendChild(liCart);

    // Profile
    const liProfile = document.createElement('li');
    liProfile.id = 'navProfile';
    liProfile.style.display = 'none';
    const profileActive = currentPage === 'profile.html' ? ' class="active"' : '';
    liProfile.innerHTML = `<a href="profile.html"${profileActive}>👤 My Profile</a>`;
    navUl.appendChild(liProfile);

    // Logout
    const liLogout = document.createElement('li');
    liLogout.id = 'navLogout';
    liLogout.style.display = 'none';
    liLogout.innerHTML = `<a href="#" onclick="logout()">🚪 Logout</a>`;
    navUl.appendChild(liLogout);

    // Login
    const liLogin = document.createElement('li');
    liLogin.id = 'navLogin';
    liLogin.style.display = 'none';
    const loginActive = currentPage === 'login.html' ? ' class="active"' : '';
    liLogin.innerHTML = `<a href="login.html"${loginActive}>Login</a>`;
    navUl.appendChild(liLogin);

    // Register
    const liRegister = document.createElement('li');
    liRegister.id = 'navRegister';
    liRegister.style.display = 'none';
    const registerActive = currentPage === 'register.html' ? ' class="active"' : '';
    liRegister.innerHTML = `<a href="register.html"${registerActive}>Register</a>`;
    navUl.appendChild(liRegister);

    console.log('✅ Navigation normalized');
}

document.addEventListener('DOMContentLoaded', normalizeNavbar);

// ================= NAVIGATION UPDATE =================

function updateNavigation(user) {
    const navLogin = document.getElementById('navLogin');
    const navRegister = document.getElementById('navRegister');
    const navProfile = document.getElementById('navProfile');
    const navLogout = document.getElementById('navLogout');
    const navCart = document.getElementById('navCart');

    if (user) {
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

            db.collection('users').doc(user.uid).get().then(doc => {
                if (doc.exists && doc.data().photoURL) {
                    const avatarLink = navProfile.querySelector('a');
                    if (avatarLink) {
                        avatarLink.innerHTML = `<span class="avatar-icon" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:#7A210C;color:white;font-weight:600;font-size:14px;text-transform:uppercase;overflow:hidden;"><img src="${doc.data().photoURL}" alt="" style="width:100%;height:100%;object-fit:cover;"></span>`;
                    }
                }
            }).catch(err => console.log('Firestore avatar error:', err));
        }
        if (navLogout) {
            navLogout.style.display = 'inline-block';
            const logoutLink = navLogout.querySelector('a');
            if (logoutLink) {
                logoutLink.onclick = function (e) {
                    e.preventDefault();
                    logout();
                };
            }
        }
        if (navCart) {
            navCart.innerHTML = '<a href="#" onclick="goToCart()">🛒 Cart</a>';
        }

        console.log('👤 Navigation: Logged in as', user.displayName || user.email);
    } else {
        if (navLogin) navLogin.style.display = 'inline-block';
        if (navRegister) navRegister.style.display = 'inline-block';
        if (navProfile) {
            navProfile.style.display = 'inline-block';
            const avatarLink = navProfile.querySelector('a');
            if (avatarLink) {
                avatarLink.innerHTML = `<span class="avatar-icon" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:#ddd;color:#999;font-weight:600;font-size:14px;">👤</span>`;
                avatarLink.href = '#';
                avatarLink.onclick = function (e) {
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

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => handleAuthState(user));
    } else {
        handleAuthState(user);
    }
});

function handleAuthState(user) {
    if (user) {
        const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
        const loginTimestamp = localStorage.getItem('loginTimestamp');
        const now = Date.now();

        if (loginTimestamp) {
            const elapsed = now - parseInt(loginTimestamp, 10);
            if (elapsed > oneWeekMs) {
                console.log('⏰ Session expired (exceeded 1 week). Logging out...');
                localStorage.removeItem('loginTimestamp');
                localStorage.removeItem('currentUser');
                firebase.auth().signOut().then(() => {
                    alert('Your session has expired. Please log in again.');
                    window.location.href = 'login.html';
                });
                return;
            }
        } else {
            localStorage.setItem('loginTimestamp', now.toString());
        }

        localStorage.setItem('currentUser', JSON.stringify({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName
        }));

    } else {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('loginTimestamp');

        const protectedPages = ['profile.html', 'cart.html', 'checkout.html'];
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (protectedPages.includes(currentPage)) {
            localStorage.setItem('redirectAfterLogin', currentPage);
            alert('Please log in to access this page.');
            window.location.href = 'login.html';
            return;
        }
    }

    normalizeNavbar();
    updateNavigation(user);
}

// ================= GO TO CART =================

window.goToCart = function () {
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

window.checkAuth = function () {
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

document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    if (!registerForm) return;

    const passwordField = document.getElementById('regPassword');
    if (passwordField) {
        passwordField.addEventListener('input', function () {
            validatePassword(this.value);
        });
    }

    registerForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const fullname = document.getElementById('regFullName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

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

            await user.updateProfile({ displayName: fullname });

            await db.collection('users').doc(user.uid).set({
                uid: user.uid,
                fullname: fullname,
                email: email,
                phone: phone,
                address: '',
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            localStorage.setItem('loginTimestamp', Date.now().toString());

            alert('✅ Registration successful! Welcome to MABELLABS Malaysia.');
            window.location.href = 'index.html';

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

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    const rememberMe = document.getElementById('rememberMe');
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail && rememberMe) {
        document.getElementById('loginEmail').value = savedEmail;
        rememberMe.checked = true;
    }

    loginForm.addEventListener('submit', async function (e) {
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

            if (rememberMe && rememberMe.checked) {
                localStorage.setItem('rememberedEmail', email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }

            localStorage.setItem('loginTimestamp', Date.now().toString());

            updateNavigation(user);

            alert('✅ Login successful! Welcome back!');

            const redirectUrl = localStorage.getItem('redirectAfterLogin');
            setTimeout(() => {
                if (redirectUrl) {
                    localStorage.removeItem('redirectAfterLogin');
                    window.location.href = redirectUrl;
                } else {
                    window.location.href = 'profile.html';
                }
            }, 1500);

        } catch (error) {
            console.error('Login error:', error);
            let message = error.message;
            if (
                error.code === 'auth/user-not-found' ||
                error.code === 'auth/wrong-password' ||
                error.code === 'auth/invalid-login-credentials'
            ) {
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

document.addEventListener('DOMContentLoaded', function () {
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeModal = document.getElementById('closeModal');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    if (forgotPasswordLink && forgotPasswordModal) {
        forgotPasswordLink.addEventListener('click', function (e) {
            e.preventDefault();
            forgotPasswordModal.style.display = 'flex';
        });
    }

    if (closeModal && forgotPasswordModal) {
        closeModal.addEventListener('click', function () {
            forgotPasswordModal.style.display = 'none';
        });
    }

    if (forgotPasswordModal) {
        forgotPasswordModal.addEventListener('click', function (e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', async function (e) {
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

window.logout = function () {
    if (confirm('Are you sure you want to logout?')) {
        firebase.auth().signOut()
            .then(() => {
                console.log('✅ User signed out');
                localStorage.removeItem('currentUser');
                localStorage.removeItem('loginTimestamp');
                localStorage.removeItem('redirectAfterLogin');
                updateNavigation(null);
                window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('❌ Sign out error:', error);
            });
    }
};

console.log('✅ Auth system ready!');