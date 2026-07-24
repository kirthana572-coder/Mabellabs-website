// ================= PRODUCT CARD INTERACTIONS =================

// Add click feedback to product cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        // Get product name
        const productName = this.querySelector('h3').textContent;
        
        // Add a subtle click effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // Log the interaction
        console.log(`📦 Product viewed: ${productName}`);
        
        // You can replace this with:
        // - Opening a product detail page
        // - Showing a modal
        // - Adding to cart
    });
});

// Add hover effect enhancement
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Optional: Play a subtle animation
        const h3 = this.querySelector('h3');
        h3.style.color = '#B5482D';
        h3.style.transition = 'color 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        const h3 = this.querySelector('h3');
        h3.style.color = '#7A210C';
    });
});