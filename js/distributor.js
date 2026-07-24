// ================= DISTRIBUTOR FORM =================

document.addEventListener('DOMContentLoaded', function() {

    const termsCheckbox = document.getElementById('termsCheckbox');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('distributorForm');

    // Terms Checkbox
    termsCheckbox.addEventListener('change', function() {
        if (this.checked) {
            submitBtn.disabled = false;
            submitBtn.classList.add('active');
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.remove('active');
        }
    });

    // Form Submission
    form.addEventListener('submit', function(e) {
        if (!termsCheckbox.checked) {
            e.preventDefault();
            alert('Please agree to the Terms & Conditions before submitting.');
            return;
        }
        console.log('📋 Distributor Application submitted!');
    });

    // Scroll to Terms
    window.scrollToTerms = function() {
        const termsBox = document.getElementById('termsContent');
        if (termsBox) {
            termsBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    console.log('✅ Distributor page loaded!');
});