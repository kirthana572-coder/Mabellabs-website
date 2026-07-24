// ================= BRANDS PAGE =================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ brands.js loaded!');

    // ================= BRAND DATA =================
    const brandData = {
        mabellabs: {
            name: "🏷️ Mabel Labs Professional Series",
            description: "Premium aesthetic and wellness products trusted by professionals",
            products: [
                { name: "Dermagene Exchanger", sku: "WH-001", price: "RM 699.00", priceOld: null, rating: 5, reviews: 24, badge: "Best Seller", badgeClass: "gold", icon: "🧴", image: "images/products/dermagene.png", desc: "SLC24A5 Activity Brightening Technology" },
                { name: "Royal Booster Injection", sku: "WH-003", price: "RM 350.00", priceOld: null, rating: 5, reviews: 31, badge: null, badgeClass: null, icon: "🧴", image: "images/products/Royalbooster.jpeg", desc: "Power Vitamin C & Glutathione Complex" },
               { name: "Viscera Skin Booster", sku: "WH-004", price: "RM 350.00", priceOld: null, rating: 4, reviews: 12, badge: "Limited", badgeClass: "blue", icon: "🧴", image: "images/products/Viscera.jpeg", desc: "Premier Phyto Stemcell Therapy" },
                { name: "Royal Ultra Booster", sku: "WH-007", price: "RM 390.00", priceOld: null, rating: 5, reviews: 27, badge: "Best Seller", badgeClass: "gold", icon: "🧴", image: "images/products/Royalultrabooster.jpeg", desc: "Premier Stem Cell & Antioxidant Infusion" },
                { name: "SLC24A5 Inhibitor III + SCF III", sku: "WH-008", price: "RM 25,000.00", priceOld: null, rating: 5, reviews: 8, badge: "Premium", badgeClass: "blue", icon: "🧬", image: "images/products/SLC24A4.jpeg", desc: "Advanced Swiss brightening therapy" },
                { name: "Fairplus III Capsules", sku: "WH-009", price: "RM 800.00", priceOld: null, rating: 4, reviews: 30, badge: null, badgeClass: null, icon: "💊", image: "images/products/fairpluscapsules.jpeg", desc: "Premium antioxidant supplement" },
                { name: "NCKX5 Exchanger", sku: "AA-005", price: "RM 599.00", priceOld: null, rating: 4, reviews: 33, badge: "Limited", badgeClass: "blue", icon: "✨", image: "images/products/NCKX5.jpeg", desc: "Advanced exosome regeneration" },
                 { name: "NCKX5 Gluta-Caps", sku: "SU-001", price: "RM 249.00", priceOld: "RM 109.00", rating: 5, reviews: 34, badge: "Best Seller", badgeClass: "gold", icon: "💊", image: "images/products/GlutaCaps.jpeg", desc: "Glutathione capsules" },
                 { name: "Complexion Exchanger", sku: "WH-010", price: "RM 15000.00", priceOld: null, rating: 4, reviews: 30, badge: null, badgeClass: null, icon: "💊", image: "images/products/Complexionexchanger2.jpeg", desc: "Premium antioxidant supplement" },
                 { name: "HD BLC02W5", sku: "WH-011", price: "RM 249.00", priceOld: "RM 299.00", rating: 4, reviews: 16, badge: "New", badgeClass: "green", icon: "🧬", image: "images/products/BLC02W5.jpeg", desc: "Cellular regeneration" },
                
            ]
        },
        nexentury: {
            name: "🌟 29 Nexentury",
            description: "Innovative skin solutions for modern aesthetics",
            products: [
                { name: "Marine Pearl Hydrolysed HA", sku: "WH-005", price: "RM 2,200.00", priceOld: null, rating: 5, reviews: 15, badge: "New", badgeClass: "green", icon: "🧴", image: "images/products/Marinepearl.jpeg", desc: "Marine-based hydration & brightening" },
                { name: "Yumi Kojic Acid", sku: "WH-006", price: "RM 3,000.00", priceOld: null, rating: 4, reviews: 22, badge: "Best Seller", badgeClass: "gold", icon: "🧴", image: "images/products/Yumikojicasid.jpg", desc: "Professional Kojic Acid brightening" },
                { name: "SLC24A5 Inhibitor III + SCF III", sku: "WH-008", price: "RM 25,000.00", priceOld: null, rating: 5, reviews: 8, badge: "Premium", badgeClass: "blue", icon: "🧬", image: "images/products/SLC24A4.jpeg", desc: "Advanced Swiss brightening therapy" },
                { name: "Deer Placenta", sku: "AA-006", price: "RM 4500.00", priceOld: null, rating: 4, reviews: 33, badge: "Limited", badgeClass: "blue", icon: "✨", image: "images/products/deerplacenta.png", desc: "Advanced exosome regeneration" },
                { name: "Sheep Placenta", sku: "AA-007", price: "RM 3500.00", priceOld: null, rating: 4, reviews: 33, badge: "Limited", badgeClass: "blue", icon: "✨", image: "images/products/Sheepplacenta.jpeg", desc: "Advanced exosome regeneration" },
                { name: "Peach Ceramide Stem cell Solution", sku: "AA-008", price: "RM 9000.00", priceOld: null, rating: 4, reviews: 33, badge: "Limited", badgeClass: "blue", icon: "✨", image: "images/products/peachceramide.png", desc: "Advanced exosome regeneration" },
                { name: "Fairplus III", sku: "SU-002", price: "RM 800.00", priceOld: "RM 89.00", rating: 4, reviews: 21, badge: "New", badgeClass: "green", icon: "💊", image: "images/products/fairpluscapsules.jpeg", desc: "Health supplement" },
                { name: "Dcell Capsules", sku: "SU-003", price: "RM 800.00", priceOld: null, rating: 5, reviews: 27, badge: null, badgeClass: null, icon: "💊", image: "images/products/Dcell.jpeg", desc: "Nutritional support" },
                { name: "Retra - Pure ", sku: "SL-001", price: "RM 450.00", priceOld: "RM 350.00", rating: 5, reviews: 12, badge: "New", badgeClass: "green", icon: "💉", image: "images/products/Retra.jpeg", desc: "Next-Generation Triple-Hormone Peptide" },
                { name: "Mounjaro", sku: "SL-002", price: "RM 500.00", priceOld: "RM 350.00", rating: 5, reviews: 12, badge: "New", badgeClass: "green", icon: "💉", image: "images/products/Mounjaro.jpeg", desc: "Next-Generation Triple-Hormone Peptide" }
            
            ]
        },
        purepharma: {
            name: "🔬 Pure Pharma",
            description: "Pharmaceutical grade peptides for anti-aging and regeneration",
            products: [
                { name: "GHK-Cu 50mg", sku: "AA-001", price: "RM 259.00", priceOld: null, rating: 5, reviews: 42, badge: "Best Seller", badgeClass: "gold", icon: "✨", image: "images/products/GHKCU50MG.jpeg", desc: "Copper peptide anti-aging" },
                { name: "GHK-Cu 100mg", sku: "AA-002", price: "RM 399.00", priceOld: null, rating: 5, reviews: 35, badge: "New", badgeClass: "green", icon: "✨", image: "images/products/GHKCU.jpeg", desc: "High potency copper peptide" },
            ]
        },
        glutatherapy: {
            name: "💉 Gluta Therapy",
            description: "Advanced brightening and anti-aging therapy solutions",
            products: [
                 { name: "EXO-THERAPY III Brightening Complex", sku: "WH-002", price: "RM 8500.00", priceOld: null, rating: 4, reviews: 18, badge: "New", badgeClass: "green", icon: "🧴", image: "images/products/TherapyGluta.jpeg", desc: "EXO-THERAPY III Brightening Complex" },
                { name: "Exosome Therapy", sku: "AA-004", price: "RM 8500.00", priceOld: null, rating: 4, reviews: 33, badge: "Limited", badgeClass: "blue", icon: "✨", image: "images/products/exosome.jpeg", desc: "Advanced exosome regeneration" },
                
                
            ]
        },
        oem: {
            name: "⚙️ OEM",
            description: "Custom manufacturing solutions for your brand",
            products: [
                { name: "NAD+", sku: "AA-003", price: "RM 650.00", priceOld: null, rating: 5, reviews: 15, badge: null, badgeClass: null, icon: "✨", image: "images/products/NAD.jpeg", desc: "Cellular energy & regeneration" },
                
            ]
        }
    };

    // ================= DOM ELEMENTS =================
    const brandsSection = document.getElementById('brandsSection');
    const brandProductsDisplay = document.getElementById('brandProductsDisplay');
    const brandProductsGrid = document.getElementById('brandProductsGrid');
    const brandDisplayTitle = document.getElementById('brandDisplayTitle');
    const brandDisplayDesc = document.getElementById('brandDisplayDesc');
    const backToBrandsBtn = document.getElementById('backToBrandsBtn');

    // ================= UPDATE PRODUCT COUNTS =================
    function updateProductCounts() {
        Object.keys(brandData).forEach(brandKey => {
            const countElement = document.getElementById('count-' + brandKey);
            if (countElement) {
                const count = brandData[brandKey].products.length;
                countElement.textContent = count + ' Product' + (count > 1 ? 's' : '');
            }
        });
    }

    // ================= RENDER BRAND PRODUCTS =================
    function renderBrandProducts(brandKey) {
    const brand = brandData[brandKey];
    if (!brand) {
        console.log('❌ Brand not found:', brandKey);
        return;
    }

    brandDisplayTitle.textContent = brand.name;
    brandDisplayDesc.textContent = brand.description;

    let html = '';
    brand.products.forEach(p => {
        html += `
            <div class="brand-product-card">
                <div class="product-image">
                    ${p.image ? `<img src="${p.image}" alt="${p.name}" class="product-img">` : `<span>${p.icon}</span>`}
                </div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <p class="product-desc">${p.desc}</p>
                    <div class="product-price">${p.price}</div>
                    <a href="product-detail.html?id=${p.sku}" class="product-btn">View Details →</a>
                </div>
            </div>
        `;
    });

    brandProductsGrid.innerHTML = html;
    brandsSection.style.display = 'none';
    brandProductsDisplay.style.display = 'block';
    brandProductsDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log('✅ Products rendered for brand:', brandKey);
}

    // ================= BRAND CARD CLICK =================
    document.querySelectorAll('.brand-card').forEach(card => {
        card.addEventListener('click', function() {
            const brand = this.dataset.brand;
            console.log('🖱️ Brand clicked:', brand);
            renderBrandProducts(brand);
        });
    });

    // ================= BACK BUTTON =================
    backToBrandsBtn.addEventListener('click', function() {
        brandProductsDisplay.style.display = 'none';
        brandsSection.style.display = 'block';
        brandsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // ================= INIT =================
    updateProductCounts();

    console.log('✅ Brands page ready!');
});