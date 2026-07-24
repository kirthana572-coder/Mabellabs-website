// ================= PROFILE PAGE =================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Profile page loaded!');

    // Check login status
    const user = firebase.auth().currentUser;
    
    if (!user) {
        alert('Please log in to access your profile.');
        localStorage.setItem('redirectAfterLogin', 'profile.html');
        window.location.href = 'login.html';
        return;
    }

    console.log('👤 User logged in:', user.email);
    loadUserProfile(user);
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

// ================= CHANGE PASSWORD =================

const changePasswordBtn = document.getElementById('changePasswordBtn');
const cancelPasswordBtn = document.getElementById('cancelPasswordBtn');
const passwordFormContainer = document.getElementById('passwordFormContainer');
const updatePasswordBtn = document.getElementById('updatePasswordBtn');
const passwordMessage = document.getElementById('passwordMessage');

if (changePasswordBtn) {
    changePasswordBtn.addEventListener('click', function() {
        passwordFormContainer.style.display = 'block';
        this.style.display = 'none';
        passwordMessage.textContent = '';
        passwordMessage.className = 'password-message';
        passwordMessage.style.display = 'none';
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

if (updatePasswordBtn) {
    updatePasswordBtn.addEventListener('click', function() {
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmNewPassword = document.getElementById('confirmNewPassword').value;

        if (!currentPassword || !newPassword || !confirmNewPassword) {
            showPasswordMessage('Please fill in all fields.', 'error');
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
        if (!user) return;

        const btn = updatePasswordBtn;
        btn.textContent = 'Updating...';
        btn.disabled = true;

        const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        user.reauthenticateWithCredential(credential)
            .then(() => user.updatePassword(newPassword))
            .then(() => {
                showPasswordMessage('✅ Password updated successfully!', 'success');
                passwordFormContainer.style.display = 'none';
                changePasswordBtn.style.display = 'inline-block';
                document.getElementById('currentPassword').value = '';
                document.getElementById('newPassword').value = '';
                document.getElementById('confirmNewPassword').value = '';
                btn.textContent = '✅ Update Password';
                btn.disabled = false;
            })
            .catch((error) => {
                let message = error.message;
                if (error.code === 'auth/wrong-password') {
                    message = 'Current password is incorrect.';
                }
                showPasswordMessage('❌ ' + message, 'error');
                btn.textContent = '✅ Update Password';
                btn.disabled = false;
            });
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
                const avatar = document.querySelector('.avatar-circle');
                if (avatar) {
                    avatar.innerHTML = `<img src="${event.target.result}" alt="Profile" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
                    showMessage('Profile photo updated!', 'success');
                }
            };
            reader.readAsDataURL(file);
        }
    });
}

console.log('✅ Profile page ready!');