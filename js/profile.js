// ================= PROFILE PAGE =================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Profile page loaded!');

    // Listen for auth state changes to get the logged-in user
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('👤 User logged in:', user.email);
            loadUserProfile(user);
        }
    });
});

// ================= LOAD USER PROFILE =================

function loadUserProfile(user) {
    console.log('📄 Loading profile for UID:', user.uid);
    
    // Display basic info from Firebase Auth
    const displayName = user.displayName || '';
    const email = user.email || '';
    
    document.getElementById('displayName').textContent = displayName || 'User';
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('profileEmail').value = email;
    document.getElementById('profileName').value = displayName;
    
    // Set avatar initial
    const initial = displayName ? displayName.charAt(0).toUpperCase() : 'U';
    document.getElementById('avatarInitial').textContent = initial;

    // Load from Firestore
    db.collection('users').doc(user.uid).get()
        .then((doc) => {
            if (doc.exists) {
                const data = doc.data();
                console.log('📄 Firestore data loaded:', data);
                
                // Load avatar if photoURL exists
                if (data.photoURL) {
                    const avatar = document.getElementById('avatarDisplay');
                    if (avatar) {
                        avatar.innerHTML = `<img src="${data.photoURL}" alt="Profile" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
                    }
                }

                // Fill all fields
                document.getElementById('profileName').value = data.fullname || displayName;
                document.getElementById('profilePhone').value = data.phone || '';
                document.getElementById('profileAddress').value = data.address || '';
                
                // Update display name
                if (data.fullname) {
                    document.getElementById('displayName').textContent = data.fullname;
                    document.getElementById('avatarInitial').textContent = data.fullname.charAt(0).toUpperCase();
                }
                
                // Member since
                if (data.createdAt) {
                    const date = data.createdAt.toDate ? data.createdAt.toDate() : new Date(data.createdAt);
                    const formatted = date.toLocaleDateString('en-MY', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    document.getElementById('profileMemberSince').value = formatted;
                    document.getElementById('displayMemberSince').textContent = 'Member since: ' + formatted;
                }
            } else {
                console.log('📄 No Firestore document found, creating...');
                createUserProfile(user);
            }
        })
        .catch((error) => {
            console.error('❌ Firestore error:', error);
            // Still show basic info from Auth
        });
}

// ================= CREATE USER PROFILE =================

function createUserProfile(user) {
    const userData = {
        uid: user.uid,
        fullname: user.displayName || '',
        email: user.email || '',
        phone: '',
        address: '',
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection('users').doc(user.uid).set(userData)
        .then(() => {
            console.log('✅ User profile created in Firestore');
            document.getElementById('profileName').value = userData.fullname;
            document.getElementById('profilePhone').value = '';
            document.getElementById('profileAddress').value = '';
        })
        .catch((error) => {
            console.error('❌ Error creating profile:', error);
        });
}

// ================= EDIT MODE =================

const editBtn = document.getElementById('editBtn');
const cancelBtn = document.getElementById('cancelBtn');
const formActions = document.getElementById('formActions');

if (editBtn) {
    editBtn.addEventListener('click', function() {
        document.getElementById('profileName').disabled = false;
        document.getElementById('profilePhone').disabled = false;
        document.getElementById('profileAddress').disabled = false;
        
        formActions.style.display = 'flex';
        this.style.display = 'none';
        showMessage('You can now edit your profile.', 'success');
    });
}

if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
        document.getElementById('profileName').disabled = true;
        document.getElementById('profilePhone').disabled = true;
        document.getElementById('profileAddress').disabled = true;
        
        formActions.style.display = 'none';
        editBtn.style.display = 'inline-block';
        
        const user = firebase.auth().currentUser;
        if (user) loadUserProfile(user);
        showMessage('Changes cancelled.', 'success');
    });
}

// ================= UPDATE PROFILE =================

const profileForm = document.getElementById('profileForm');
if (profileForm) {
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const user = firebase.auth().currentUser;
        if (!user) {
            showMessage('Please login first.', 'error');
            return;
        }

        const fullname = document.getElementById('profileName').value.trim();
        const phone = document.getElementById('profilePhone').value.trim();
        const address = document.getElementById('profileAddress').value.trim();

        if (!fullname) {
            showMessage('Full name is required.', 'error');
            return;
        }

        const btn = this.querySelector('.btn-save');
        btn.textContent = 'Saving...';
        btn.disabled = true;

        // Update Firestore
        db.collection('users').doc(user.uid).update({
            fullname: fullname,
            phone: phone,
            address: address,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            // Update Firebase Auth display name
            return user.updateProfile({ displayName: fullname });
        })
        .then(() => {
            // Update UI immediately
            document.getElementById('displayName').textContent = fullname;
            document.getElementById('avatarInitial').textContent = fullname.charAt(0).toUpperCase();
            document.getElementById('profileName').value = fullname;
            document.getElementById('profilePhone').value = phone;
            document.getElementById('profileAddress').value = address;
            
            // Disable editing
            document.getElementById('profileName').disabled = true;
            document.getElementById('profilePhone').disabled = true;
            document.getElementById('profileAddress').disabled = true;
            formActions.style.display = 'none';
            editBtn.style.display = 'inline-block';
            
            showMessage('✅ Your profile has been updated successfully.', 'success');
            btn.textContent = '💾 Save Changes';
            btn.disabled = false;
        })
        .catch((error) => {
            console.error('❌ Update error:', error);
            showMessage('Error updating: ' + error.message, 'error');
            btn.textContent = '💾 Save Changes';
            btn.disabled = false;
        });
    });
}

// ================================================================
// ✅ NEW: PASSWORD VALIDATION FUNCTION
// Checks password against requirements and updates UI
// ================================================================

function validateNewPassword(password) {
    // Define password requirements
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    };
    
    // Get requirement elements
    const reqLength = document.getElementById('pwd-req-length');
    const reqUppercase = document.getElementById('pwd-req-uppercase');
    const reqLowercase = document.getElementById('pwd-req-lowercase');
    const reqNumber = document.getElementById('pwd-req-number');
    const reqSpecial = document.getElementById('pwd-req-special');
    
    // Update each requirement with valid/invalid class and emoji
    if (reqLength) {
        reqLength.className = requirements.length ? 'valid' : 'invalid';
        reqLength.textContent = requirements.length ? '✅ At least 8 characters' : '❌ At least 8 characters';
    }
    if (reqUppercase) {
        reqUppercase.className = requirements.uppercase ? 'valid' : 'invalid';
        reqUppercase.textContent = requirements.uppercase ? '✅ At least 1 uppercase letter' : '❌ At least 1 uppercase letter';
    }
    if (reqLowercase) {
        reqLowercase.className = requirements.lowercase ? 'valid' : 'invalid';
        reqLowercase.textContent = requirements.lowercase ? '✅ At least 1 lowercase letter' : '❌ At least 1 lowercase letter';
    }
    if (reqNumber) {
        reqNumber.className = requirements.number ? 'valid' : 'invalid';
        reqNumber.textContent = requirements.number ? '✅ At least 1 number' : '❌ At least 1 number';
    }
    if (reqSpecial) {
        reqSpecial.className = requirements.special ? 'valid' : 'invalid';
        reqSpecial.textContent = requirements.special ? '✅ At least 1 special character' : '❌ At least 1 special character';
    }
    
    // Return true if all requirements are met
    return Object.values(requirements).every(Boolean);
}

// ================================================================
// ✅ NEW: TOGGLE PASSWORD VISIBILITY FUNCTION
// Toggles between showing and hiding password text
// ================================================================

function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    // Find the toggle icon inside the same wrapper
    const icon = field.parentElement.querySelector('.toggle-password-icon');
    
    if (field.type === 'password') {
        // Show password
        field.type = 'text';
        if (icon) {
            // Change to eye-off icon (crossed eye)
            icon.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
            `;
        }
    } else {
        // Hide password
        field.type = 'password';
        if (icon) {
            // Change to eye icon
            icon.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                </svg>
            `;
        }
    }
}

// ================================================================
// ✅ NEW: MAKE TOGGLE FUNCTION AVAILABLE GLOBALLY
// Required for onclick in HTML
// ================================================================

window.togglePasswordVisibility = togglePasswordVisibility;

// ================= CHANGE PASSWORD =================

const changePasswordBtn = document.getElementById('changePasswordBtn');
const cancelPasswordBtn = document.getElementById('cancelPasswordBtn');
const passwordFormContainer = document.getElementById('passwordFormContainer');
const updatePasswordBtn = document.getElementById('updatePasswordBtn');
const passwordMessage = document.getElementById('passwordMessage');

// ================================================================
// ✅ UPDATED: Change Password Button Click
// Opens form and resets requirement indicators
// ================================================================

if (changePasswordBtn) {
    changePasswordBtn.addEventListener('click', function() {
        passwordFormContainer.style.display = 'block';
        this.style.display = 'none';
        passwordMessage.textContent = '';
        passwordMessage.className = 'password-message';
        passwordMessage.style.display = 'none';
        
        // Clear previous values
        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmNewPassword').value = '';
        
        // ================================================================
        // ✅ NEW: Reset password requirements to default state
        // ================================================================
        const reqs = ['pwd-req-length', 'pwd-req-uppercase', 'pwd-req-lowercase', 'pwd-req-number', 'pwd-req-special'];
        reqs.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.className = '';
                // Remove emoji prefix and show clean text
                el.textContent = el.textContent.replace(/[✅❌] /, '');
            }
        });
    });
}

if (cancelPasswordBtn) {
    cancelPasswordBtn.addEventListener('click', function() {
        passwordFormContainer.style.display = 'none';
        changePasswordBtn.style.display = 'inline-block';
        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmNewPassword').value = '';
        passwordMessage.textContent = '';
        passwordMessage.className = 'password-message';
        passwordMessage.style.display = 'none';
    });
}

// ================================================================
// ✅ NEW: Real-time password validation on input
// Updates requirements as user types
// ================================================================

const newPasswordField = document.getElementById('newPassword');
if (newPasswordField) {
    newPasswordField.addEventListener('input', function() {
        validateNewPassword(this.value);
    });
}

// ================================================================
// ✅ UPDATED: Password Change Form Submit
// Includes password requirements validation
// ================================================================

const passwordChangeForm = document.getElementById('passwordChangeForm');

if (passwordChangeForm) {
    passwordChangeForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmNewPassword = document.getElementById('confirmNewPassword').value;

        if (!currentPassword || !newPassword || !confirmNewPassword) {
            showPasswordMessage('Please fill in all fields.', 'error');
            return;
        }

        // ================================================================
        // ✅ NEW: Check password requirements before submitting
        // ================================================================
        if (!validateNewPassword(newPassword)) {
            showPasswordMessage('Please meet all password requirements.', 'error');
            return;
        }

        if (newPassword.length < 8) {
            showPasswordMessage('Password must be at least 8 characters.', 'error');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            showPasswordMessage('New passwords do not match.', 'error');
            return;
        }

        const user = firebase.auth().currentUser;
        if (!user) {
            showPasswordMessage('You must be logged in to change your password.', 'error');
            return;
        }

        const btn = updatePasswordBtn;
        btn.textContent = 'Updating...';
        btn.disabled = true;

        // Re-authenticate user before changing password
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        user.reauthenticateWithCredential(credential)
            .then(() => user.updatePassword(newPassword))
            .then(() => {
                showPasswordMessage('✅ Password updated successfully!', 'success');
                passwordFormContainer.style.display = 'none';
                changePasswordBtn.style.display = 'inline-block';
                passwordChangeForm.reset();
                btn.textContent = 'Update Password';
                btn.disabled = false;
            })
            .catch((error) => {
                let message = error.message;
                if (
                    error.code === 'auth/invalid-credential' ||
                    error.code === 'auth/wrong-password'
                ) {
                    message = 'Current password is incorrect. Please try again.';
                } else if (error.code === 'auth/too-many-requests') {
                    message = 'Too many failed attempts. Please wait before trying again.';
                } else if (error.code === 'auth/requires-recent-login') {
                    message = 'Session expired. Please log out and log in again before changing your password.';
                }
                showPasswordMessage('❌ ' + message, 'error');
                btn.textContent = 'Update Password';
                btn.disabled = false;
            });
    });
}

// ================= PROFILE FORGOT PASSWORD LINK =================

const profileForgotPasswordLink = document.getElementById('profileForgotPasswordLink');

if (profileForgotPasswordLink) {
    profileForgotPasswordLink.addEventListener('click', async function (e) {
        e.preventDefault();

        const user = firebase.auth().currentUser;
        if (!user || !user.email) {
            showPasswordMessage('❌ Could not detect your email. Please log out and try again.', 'error');
            return;
        }

        const confirmed = confirm(`Send a password reset link to:\n${user.email}\n\nCheck your inbox (and spam folder) after clicking OK.`);
        if (!confirmed) return;

        this.textContent = 'Sending...';
        this.style.pointerEvents = 'none';

        try {
            await firebase.auth().sendPasswordResetEmail(user.email);
            showPasswordMessage(`📧 Reset link sent to ${user.email}. Check your inbox and spam folder.`, 'success');
        } catch (error) {
            let message = error.message;
            if (error.code === 'auth/too-many-requests') {
                message = 'Too many requests. Please wait a moment before trying again.';
            }
            showPasswordMessage('❌ ' + message, 'error');
        } finally {
            this.textContent = 'Forgot your current password? Send me a reset link';
            this.style.pointerEvents = 'auto';
        }
    });
}

function showPasswordMessage(message, type) {
    passwordMessage.textContent = message;
    passwordMessage.className = 'password-message ' + type;
    passwordMessage.style.display = 'block';
}

// ================= SHOW MESSAGE =================

function showMessage(message, type) {
    const msgDiv = document.getElementById('profileMessage');
    if (!msgDiv) return;
    
    msgDiv.textContent = message;
    msgDiv.className = 'profile-message show ' + type;
    setTimeout(() => {
        msgDiv.classList.remove('show');
    }, 5000);
}

// ================= PROFILE PHOTO =================

const changePhotoBtn = document.getElementById('changePhotoBtn');
const photoInput = document.getElementById('photoInput');

if (changePhotoBtn) {
    changePhotoBtn.addEventListener('click', function() {
        photoInput.click();
    });
}

if (photoInput) {
    photoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const user = firebase.auth().currentUser;
                if (!user) {
                    showMessage('❌ Error: You must be logged in to update your profile photo.', 'error');
                    return;
                }
                
                const avatar = document.getElementById('avatarDisplay');
                if (avatar) {
                    avatar.innerHTML = `<img src="${event.target.result}" alt="Profile" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
                }

                // Save Base64 to Firestore
                db.collection('users').doc(user.uid).update({
                    photoURL: event.target.result,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(() => {
                    showMessage('✅ Profile photo updated successfully!', 'success');
                    
                    // Update header navigation avatar dynamically
                    const navProfile = document.getElementById('navProfile');
                    if (navProfile) {
                        const avatarLink = navProfile.querySelector('a');
                        if (avatarLink) {
                            avatarLink.innerHTML = `<span class="avatar-icon" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:#7A210C;color:white;font-weight:600;font-size:14px;text-transform:uppercase;overflow:hidden;"><img src="${event.target.result}" alt="" style="width:100%;height:100%;object-fit:cover;"></span>`;
                        }
                    }
                })
                .catch(error => {
                    console.error('Error saving photoURL to Firestore:', error);
                    showMessage('❌ Error saving profile photo to database.', 'error');
                });
            };
            reader.readAsDataURL(file);
        }
    });
}

console.log('✅ Profile page ready!');