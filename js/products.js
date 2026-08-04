// ================= PRODUCTS PAGE INTERACTIONS =================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ products.js loaded!');

    // ================= PRODUCT DATA =================
    const productData = {
        whitening: {
            name: "✨ Skin Brightening & Whitening",
            description: "Advanced skin brightening and whitening solutions for radiant, even-toned skin",
            products: [
                { name: "Dermagene Exchanger", sku: "WH-001", price: "RM 699.00", priceOld: null, rating: 5, reviews: 24, badge: "In Stock", badgeClass: "gold", icon: "🧴", image: "images/products/dermagene.png", desc: "SLC24A5 Activity Brightening Technology" },
                { name: "EXO-THERAPY III Brightening Complex", sku: "WH-002", price: "RM 8500.00", priceOld: null, rating: 4, reviews: 18, badge: "In Stock", badgeClass: "gold", icon: "🧴", image: "images/products/TherapyGluta.jpeg", desc: "EXO-THERAPY III Brightening Complex" },
                { name: "Royal Booster Injection", sku: "WH-003", price: "RM 350.00", priceOld: null, rating: 5, reviews: 31, badge: "In Stock", badgeClass: "gold", icon: "🧴", image: "images/products/Royalbooster.jpeg", desc: "Power Vitamin C & Glutathione Complex" },
                { name: "Viscera Skin Booster", sku: "WH-004", price: "RM 350.00", priceOld: null, rating: 4, reviews: 12, badge: "In Stock", badgeClass: "blue", icon: "🧴", image: "images/products/Viscera.jpeg", desc: "Premier Phyto Stemcell Therapy" },
                { name: "Marine Pearl Hydrolysed HA", sku: "WH-005", price: "RM 2,200.00", priceOld: null, rating: 5, reviews: 15, badge: "In Stock", badgeClass: "green", icon: "🧴", image: "images/products/Marinepearl.jpeg", desc: "Marine-based hydration & brightening" },
                { name: "Yumi Kojic Acid", sku: "WH-006", price: "RM 3,000.00", priceOld: null, rating: 4, reviews: 22, badge: "In Stock", badgeClass: "gold", icon: "🧴", image: "images/products/Yumikojicasid.jpg", desc: "Professional Kojic Acid brightening" },
                { name: "Royal Ultra Booster", sku: "WH-007", price: "RM 390.00", priceOld: null, rating: 5, reviews: 27, badge: "In Stock", badgeClass: "gold", icon: "🧴", image: "images/products/Royalultrabooster.jpeg", desc: "Premier Stem Cell & Antioxidant Infusion" },
                { name: "SLC24A5 Inhibitor III + SCF III", sku: "WH-008", price: "RM 25,000.00", priceOld: null, rating: 5, reviews: 8, badge: "In Stock", badgeClass: "blue", icon: "🧬", image: "images/products/SLC24A4.jpeg", desc: "Advanced Swiss brightening therapy" },
                { name: "Fairplus III Capsules", sku: "WH-009", price: "RM 800.00", priceOld: null, rating: 4, reviews: 30, badge: "In Stock", badgeClass:"gold", icon: "💊", image: "images/products/fairpluscapsules.jpeg", desc: "Premium antioxidant supplement" },
                { name: "Complexion Exchanger", sku: "WH-010", price: "RM 15000.00", priceOld: null, rating: 4, reviews: 30, badge: "In Stock", badgeClass: "gold", icon: "💊", image: "images/products/Complexionexchanger2.jpeg", desc: "Premium antioxidant supplement" },
                { name: "HD BLC02W5", sku: "WH-011", price: "RM 2000.00", priceOld: null, rating: 4, reviews: 16, badge: "In Stock", badgeClass: "green", icon: "🧬", image: "images/products/BLC02W5.jpeg", desc: "Cellular regeneration" },
            ]
        },
        antiaging: {
            name: "🌟 Anti-Aging & Regeneration",
            description: "Premium anti-aging and skin regeneration solutions for youthful vitality",
            products: [
                { name: "GHK-Cu 50mg", sku: "AA-001", price: "RM 259.00", priceOld: null, rating: 5, reviews: 42, badge: "In Stock", badgeClass: "gold", icon: "✨", image: "images/products/GHKCU50MG.jpeg", desc: "Copper peptide anti-aging" },
                { name: "GHK-Cu 100mg", sku: "AA-002", price: "RM 399.00", priceOld: null, rating: 5, reviews: 35, badge: "In Stock", badgeClass: "green", icon: "✨", image: "images/products/GHKCU.jpeg", desc: "High potency copper peptide" },
                { name: "NAD+", sku: "AA-003", price: "RM 650.00", priceOld: null, rating: 5, reviews: 15, badge: "In Stock", badgeClass: "gold", icon: "✨", image: "images/products/NAD.jpeg", desc: "Cellular energy & regeneration" },
                { name: "Exosome Therapy", sku: "AA-004", price: "RM 8500.00", priceOld: null, rating: 4, reviews: 33, badge: "In Stock", badgeClass: "blue", icon: "✨", image: "images/products/exosome.jpeg", desc: "Advanced exosome regeneration" },
                { name: "NCKX5 Exchanger Stem Cell Booster", sku: "AA-005", price: "RM 599.00", priceOld: null, rating: 4, reviews: 33, badge: "In Stock", badgeClass: "blue", icon: "✨", image: "images/products/NCKX5.jpeg", desc: "Advanced exosome regeneration" },
                { name: "Deer Placenta", sku: "AA-006", price: "RM 4500.00", priceOld: null, rating: 4, reviews: 33, badge: "In Stock", badgeClass: "blue", icon: "✨", image: "images/products/deerplacenta.png", desc: "Advanced exosome regeneration" },
                { name: "Sheep Placenta", sku: "AA-007", price: "RM 3500.00", priceOld: null, rating: 4, reviews: 33, badge: "In Stock", badgeClass: "blue", icon: "✨", image: "images/products/Sheepplacenta.jpeg", desc: "Advanced exosome regeneration" },
                { name: "Peach Ceramide Stem cell Solution", sku: "AA-008", price: "RM 9000.00", priceOld: null, rating: 4, reviews: 33, badge: "In Stock", badgeClass: "blue", icon: "✨", image: "images/products/peachceramide.png", desc: "Advanced exosome regeneration" }
            ]
        },
        stemcell: {
            name: "🧬 Stem Cell Therapy",
            description: "Advanced regenerative and cellular therapy solutions",
            products: [
                { name: "NCKX5 Exchanger", sku: "SC-001", price: "RM 599.00", priceOld: null, rating: 5, reviews: 22, badge: "In Stock", badgeClass: "gold", icon: "🧬", image: "images/products/NCKX5.jpeg", desc: "Stem cell rejuvenation" },
                { name: "Stem Cell Juice", sku: "SC-002", price: "RM 279.00", priceOld: null, rating: 4, reviews: 19, badge: "Coming Soon", badgeClass: "blue", icon: "🧬", image: "images/products/comingsoon.jpg", desc: "Coming Soon / Available" },
                { name: "SLC III", sku: "SC-003", price: "RM 279.00", priceOld: null, rating: 4, reviews: 19, badge: "Coming Soon", badgeClass: "blue", icon: "🧬", image: "images/products/comingsoon.jpg", desc: "Coming Soon / Available" }
            ]
        },
        slimming: {
            name: "⚡ Fat Loss & Metabolic Health",
            description: "Effective weight management and metabolic health solutions",
            products: [
                { name: "Retra - Pure", sku: "SL-001", price: "RM 450.00", priceOld: null, rating: 5, reviews: 12, badge: "In Stock", badgeClass: "green", icon: "💉", image: "images/products/Retra.jpeg", desc: "Next-Generation Triple-Hormone Peptide", dosageOptions: [
                    { dosage: "10mg", price: 450.00, sku: "SL-001A" },
                    { dosage: "30mg", price: 900.00, sku: "SL-001B" }
                ]},
                { name: "Mounjaro", sku: "SL-002", price: "RM 500.00", priceOld: null, rating: 5, reviews: 12, badge: "In Stock", badgeClass: "green", icon: "💉", image: "images/products/Mounjaro.jpeg", desc: "Next-Generation Triple-Hormone Peptide", dosageOptions: [
                    { dosage: "2.5mg", price: 500.00, sku: "SL-002A", badge: "STARTER DOSE" },
                    { dosage: "5mg", price: 660.00, sku: "SL-002B", badge: "MOST POPULAR" },
                    { dosage: "7.5mg", price: 760.00, sku: "SL-002C", badge: "ADVANCED" }
                ]}
            ]
        },
        wellness: {
            name: "🌿 Wellness",
            description: "Holistic wellness and health supplements",
            products: [
                { name: "GHK-Cu 50mg", sku: "HC-001", price: "RM 259.00", priceOld: null, rating: 5, reviews: 34, badge: "In Stock", badgeClass: "gold", icon: "💇", image: "images/products/GHKCU50MG.jpEg", desc: "Copper peptide hair therapy" },
                { name: "GHK-Cu 100mg", sku: "HC-002", price: "RM 159.00", priceOld: null, rating: 4, reviews: 21, badge: "In Stock", badgeClass: "green", icon: "💇", image: "images/products/GHKCU.jpeg", desc: "Advanced hair growth formula" },
                { name: "NAD+", sku: "HC-003", price: "RM 650.00", priceOld: null, rating: 4, reviews: 27, badge: "In Stock", badgeClass: "gold", icon: "💇", image: "images/products/NAD.jpeg", desc: "Scalp rejuvenation" },
                
            ]
        },
        supplements: {
            name: "💊 Supplements",
            description: "Premium nutritional and health supplements",
            products: [
                { name: "NCKX5 Gluta-Caps", sku: "SU-001", price: "RM 249.00", priceOld: null, rating: 5, reviews: 34, badge: "In Stock", badgeClass: "gold", icon: "💊", image: "images/products/GlutaCaps.jpeg", desc: "Glutathione capsules" },
                { name: "Fairplus III", sku: "SU-002", price: "RM 800.00", priceOld: null, rating: 4, reviews: 21, badge: "In Stock", badgeClass: "green", icon: "💊", image: "images/products/fairpluscapsules.jpeg", desc: "Health supplement" },
                { name: "Dcell Capsules", sku: "SU-003", price: "RM 800.00", priceOld: null, rating: 5, reviews: 27, badge: "In Stock", badgeClass: "gold", icon: "💊", image: "images/products/Dcell.jpeg", desc: "Nutritional support" },
                { name: "Qiora Stemcell Juice", sku: "SU-004", price: "RM 79.00", priceOld: null, rating: 4, reviews: 15, badge: "Coming Soon", badgeClass: "blue", icon: "💊", image: "images/products/comingsoon.jpg", desc: "Daily supplement" }
            ]
        }
    };

    // ================= DOM ELEMENTS =================
    const categorySection = document.getElementById('categorySection');
    const productsDisplay = document.getElementById('productsDisplay');
    const productsGrid = document.getElementById('productsGrid');
    const displayTitle = document.getElementById('displayTitle');
    const displayDesc = document.getElementById('displayDesc');
    const backBtn = document.getElementById('backBtn');

    console.log('Elements found:', {
        categorySection: !!categorySection,
        productsDisplay: !!productsDisplay,
        productsGrid: !!productsGrid
    });

    // ================= RENDER PRODUCTS =================

    function formatDosagePrice(price) {
        if (typeof price === 'number') return `RM ${price.toFixed(2)}`;
        return price;
    }

    function renderProducts(categoryKey) {
        console.log('🖱️ Rendering category:', categoryKey);
        const category = productData[categoryKey];
        if (!category) {
            console.log('❌ Category not found:', categoryKey);
            return;
        }

        displayTitle.textContent = category.name;
        displayDesc.textContent = category.description;

        let html = '';
        category.products.forEach((p, index) => {
            let stars = '';
            for (let i = 0; i < 5; i++) stars += i < p.rating ? '★' : '☆';

            const hasDosage = p.dosageOptions && p.dosageOptions.length > 0;
            const defaultDosage = hasDosage ? p.dosageOptions[0] : null;
            const displayPrice = hasDosage ? formatDosagePrice(defaultDosage.price) : p.price;

            let priceHtml = `<span class="price">${displayPrice}</span>`;
            if (p.priceOld) priceHtml += ` <span class="price-old">${p.priceOld}</span>`;
            let badgeHtml = p.badge ? `<span class="product-badge ${p.badgeClass}">${p.badge}</span>` : '';

            const isComingSoon = p.badge === 'Coming Soon';

            let dosageHtml = '';
            if (hasDosage) {
                dosageHtml = `
                    <div class="dosage-options">
                        ${p.dosageOptions.map((opt, i) => `
                            <button type="button"
                                    class="dosage-btn${i === 0 ? ' active' : ''}"
                                    data-sku="${opt.sku}"
                                    data-price="${formatDosagePrice(opt.price)}"
                                    data-dosage="${opt.dosage}">
                                <span class="dosage-label">${opt.dosage}</span>
                                ${opt.badge ? `<span class="dosage-option-badge">${opt.badge}</span>` : ''}
                            </button>
                        `).join('')}
                    </div>
                `;
            }

            let addToCartHTML = '';
            if (!isComingSoon) {
                if (hasDosage) {
                    addToCartHTML = `
                        <button class="add-to-cart-btn"
                                data-selected-sku="${defaultDosage.sku}"
                                onclick="addToCartFromCard(this)">
                            🛒 Add to Cart
                        </button>
                    `;
                } else {
                    addToCartHTML = `
                        <button class="add-to-cart-btn" onclick="addToCart('${p.sku}')">
                            🛒 Add to Cart
                        </button>
                    `;
                }
            }

            html += `
                <div class="product-card">
                    <div class="product-image">
                        ${badgeHtml}
                        ${p.image ? `<img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">` : `<span class="product-icon">${p.icon}</span>`}
                    </div>
                    <div class="product-info">
                        <h3>${p.name}</h3>
                        <div class="product-rating">
                            <span class="stars">${stars}</span>
                            <span class="rating-count">(${p.reviews})</span>
                        </div>
                        <p class="product-description">${p.desc}</p>
                        <div class="product-meta">
                            <span class="product-code">${p.sku}</span>
                            <span class="product-status available">In Stock</span>
                        </div>
                        <div class="product-price">${priceHtml}</div>
                        ${dosageHtml}

                        ${addToCartHTML}
                        
                        <a href="product-detail.html?id=${p.sku}" class="product-btn">View Details →</a>
                    </div>
                </div>
            `;
        });

        productsGrid.innerHTML = html;

        productsGrid.querySelectorAll('.dosage-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                selectDosage(this);
            });
        });
        productsDisplay.style.display = 'block';
        categorySection.style.display = 'none';
        productsDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log('✅ Products rendered for:', categoryKey);
    }

    // ================= CATEGORY CARD CLICK =================
    const categoryCards = document.querySelectorAll('.category-card');
    console.log('📦 Category cards found:', categoryCards.length);

    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            console.log('🖱️ Category clicked:', category);
            
            // ✅ Store the category in sessionStorage
            sessionStorage.setItem('lastCategory', category);
            
            renderProducts(category);
        });
    });

    // ================= BACK BUTTON =================
    backBtn.addEventListener('click', function() {
        console.log('⬅️ Back button clicked');
        productsDisplay.style.display = 'none';
        categorySection.style.display = 'block';
        categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // ================= CHECK URL HASH ON PAGE LOAD =================
    window.addEventListener('load', function() {
        const hash = window.location.hash.replace('#', '');
        console.log('🔗 URL Hash:', hash);
        if (hash && productData[hash]) {
            const categoryCard = document.querySelector(`.category-card[data-category="${hash}"]`);
            if (categoryCard) {
                setTimeout(function() {
                    categoryCard.click();
                }, 500);
            }
        }
    });

    // ================= SEARCH FUNCTIONALITY =================

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');

    // Get all products for search
    function getAllProducts() {
        const allProducts = [];
        Object.keys(productData).forEach(categoryKey => {
            const category = productData[categoryKey];
            category.products.forEach(product => {
                allProducts.push({
                    ...product,
                    categoryName: category.name,
                    categoryKey: categoryKey
                });
            });
        });
        return allProducts;
    }

    // Search function
    function performSearch(query) {
        if (!query || query.trim() === '') {
            searchResults.classList.remove('active');
            return;
        }

        const allProducts = getAllProducts();
        const searchTerm = query.toLowerCase().trim();
        
        const results = allProducts.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) ||
                   product.desc.toLowerCase().includes(searchTerm) ||
                   product.sku.toLowerCase().includes(searchTerm) ||
                   product.categoryName.toLowerCase().includes(searchTerm);
        });

        displaySearchResults(results, searchTerm);
    }

    // Display search results
    function displaySearchResults(results, searchTerm) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <span>🔍</span>
                    No products found for "<strong>${searchTerm}</strong>"
                </div>
            `;
            searchResults.classList.add('active');
            return;
        }

        let html = '';
        results.slice(0, 10).forEach(product => {
            let highlightedName = product.name;
            const index = product.name.toLowerCase().indexOf(searchTerm);
            if (index !== -1) {
                highlightedName = product.name.slice(0, index) + 
                    '<strong>' + product.name.slice(index, index + searchTerm.length) + '</strong>' + 
                    product.name.slice(index + searchTerm.length);
            }

            html += `
                <a href="product-detail.html?id=${product.sku}" class="result-item">
                    ${product.image ? `<img src="${product.image}" alt="${product.name}" class="result-image" style="width:40px;height:40px;object-fit:cover;border-radius:6px;">` : `<span class="result-icon">${product.icon || '📦'}</span>`}
                    <div class="result-info">
                        <h4>${highlightedName}</h4>
                        <span class="result-category">${product.categoryName}</span>
                    </div>
                    <span class="result-price">${product.price}</span>
                </a>
            `;
        });

        if (results.length > 10) {
            html += `
                <div style="padding: 12px 20px; text-align: center; color: #999; font-size: 13px; border-top: 1px solid #f0f0f0;">
                    + ${results.length - 10} more results
                </div>
            `;
        }

        searchResults.innerHTML = html;
        searchResults.classList.add('active');
    }

    // Event listeners for search
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });

        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (searchResults.classList.contains('active')) {
                    const firstResult = searchResults.querySelector('.result-item');
                    if (firstResult) {
                        window.location.href = firstResult.href;
                    }
                }
            }
        });
    }

    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResults.classList.remove('active');
        }
    });

    // Search button click
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
    }

    // Make renderProducts available globally
    window.renderProducts = renderProducts;

    // ================= DOSAGE SELECTION =================

    window.selectDosage = function (btn) {
        const card = btn.closest('.product-card');
        card.querySelectorAll('.dosage-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const priceEl = card.querySelector('.product-price .price');
        if (priceEl) priceEl.textContent = btn.dataset.price;

        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.dataset.selectedSku = btn.dataset.sku;
            addBtn.disabled = false;
        }
    };

    window.addToCartFromCard = function (btn) {
        const sku = btn.dataset.selectedSku;
        if (!sku) {
            btn.disabled = true;
            return;
        }
        addToCart(sku);
    };

    console.log('✅ Products page ready!');
});