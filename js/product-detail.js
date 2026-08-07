

document.addEventListener('DOMContentLoaded', function() {

    // ================= ALL PRODUCT DATA =================
    // weight: product weight in grams (g). Placeholder 0 — replace with actual weight for domestic shipping calculation.
    const allProducts = {
        // Whitening Products
        'WH-001': {
            name: "Dermagene Exchanger",
            category: "Whitening series",
            brand: "Mabel Labs Professional Series",
            price: "RM 699.00 / Box",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/dermagene.png",
            shortDesc: "SLC24A5 Activity Brightening Technology",
            benefits: [
                "Supports brightening",
                "Improves uneven skin tone",
                "Antioxidant protection",
                "Enhances skin radiance"
            ],
            fullDesc: "Advanced brightening injectable formulated with plant stem cells, Alpha Arbutin and Vitamin C to support brighter, more even looking skin and overall skin radiance.",
            ingredients: [
                "Leontopodium Alpinum",
                "Extract Stem Cells",
                "Alpha Arbutin",
                "Ascorbic Acid (Vitamin C)"
            ],
            // ✅ FIXED: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Intramuscular (IM)",
            suitableFor: [
                
"Adults aged 18 and above",
"Individuals who are not pregnant or breastfeeding",
"Individuals with a healthy cardiovascular system",
"Individuals without chronic diseases",
"Individuals with no known allergies to the ingredients",
"Individuals with no history of drug addiction",
"Individuals with normal blood pressure",
"Individuals without G6PD deficiency",
"Individuals with healthy kidney function"

            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place away from direct sunlight. Do not freeze.",
            packing: "2 x 2ml Prefilled Syringes Per Box.",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'WH-002': {
            name: "EXO-THERAPY III Brightening Complex",
            category: "Whitening series",
            brand: "Gluta Therapy",
            price: "RM 8500.00 / Box",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/TherapyGluta.jpeg",
            shortDesc: "EXO-THERAPY III Brightening Complex",
            benefits: [
                "Brightens and whitens skin",
                "Improves skin elasticity",
                "Supports anti aging",
                "Antioxidants protection"
            ],
            fullDesc: "A premium anti-aging and skin brightening IV therapy combining glutathione amino acids, CoQ10 and EXO-THERAPY III for comprehensive skin vitality and antioxidant support.",
            ingredients: [
                "EXO-THERAPY III",
                "L-Glutathione",
                "Histidine, L-Cysteine",
                "Coenzyme Q10, L-Valine"
            ],
            // ✅ FIXED: Protocol as Single STRING
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Intravenous (IV)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place. Avoid direct sunlight. Do not freeze.",
            packing: "3 x SCF III & 9 x SLC24A5 (1000mg) + mixer ",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'WH-003': {
            name: "Royal Booster Injection",
            category: "Whitening series",
            brand: "Mabel Labs Professional Series",
            price: "RM 350.00 / Box",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/Royalbooster.jpeg",
            shortDesc: "Power Vitamin C & Glutathione Brightening Complex",
            benefits: [
                "Brightens skin effectively",
                "Improves uneven skin tone",
                "Enhances skin radiance",
                "Supports collagen synthesis",
                "Antioxidant protection",
                "Improves hydration"
            ],
            fullDesc: "A clinically-inspired whitening injection with high-strength Vitamin C, Glutathione and Collagen to support brighter skin, improve tone and enhance radiance.",
            ingredients: [
                "Glutathione (900mg)",
                "Vitamin C (1500mg)",
                "Collagen",
                "Vitamin B12",
                "Vitamin B Complex",
                "Skin Protein"
            ],
            // ✅ FIXED: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Intramuscular (IM)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place. Avoid direct sunlight. Do not freeze.",
            packing: "1 x 2mL Prefilled Syringe Per Box",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'WH-004': {
            name: "Viscera Skin Booster",
            category: "Whitening series",
            brand: "Mabel Labs Professional Series",
            price: "RM 350.00 / Box",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/Viscera.jpeg",
            shortDesc: "Premier Duo Phyto Stemcell Therapy",
            benefits: [
                "Brightens and evens skin tone",
                "Rejuvenates and hydrates skin",
                "Improves skin elasticity",
                "Reduces appearance of pigmentation",
                "Promotes youthful skin",
                "Antioxidants protection"
            ],
            fullDesc: "A complete skin rejuvenation booster with glutathione, phyto stem cell therapy and advanced brightening ingredients for hydration, firmness and luminous skin.",
            ingredients: [
                "Glutathione",
                "Vitamin C Booster",
                "Vitamin B Complex",
                "Phyto Stem Cell Therapy",
                "Flavonoids Extract",
                "Kojic Acid, Taurine",
                "Tranexamic Acid",
                "Hyaluronic Acid",
                "Collagen Solution"
            ],
            // ✅ FIXED: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Intramuscular (IM) / Intravenous (IV)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a dry, clean and well-ventilated place at room temperature.",
            packing: "2 x 2 mL Prefilled Syringes Per Box",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },

        'WH-005': {
            name: "Marine Pearl Hydrolysed HA",
            category: "Whitening series",
            brand: "29 NEXENTURY",
            price: "RM 2200.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/Marinepearl.jpeg",
            shortDesc: "Professional Aesthetic Injectable",
            benefits: [
                "Hydration",
                "Elasticity",
                "Smoother texture",
                "Brighter complexion",
                "Collagen support"
            ],
            fullDesc: "Professional formulation supporting hydration, elasticity and brighter-looking skin.",
            ingredients: [
                "Hydrolysed Pearl (750mg)",
                "Hydrolysed Jellyfish Extract (1000mg)",
                "LMWHA (500mg)"
                
            ],
            // ✅ FIXED: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Intramuscular (IM)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)",
                 "Hypersensitivity to hyaluronic acid",
                 "Hypersensitivity to pearl-derived ingredients",
                 "Hypersensitivity to jellyfish-derived ingredients",
                 
            ],
            storage: "Store in a cool, dry place away from direct sunlight.",
            packing: "1 syringe (3ml) / Box.",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'WH-006': {
            name: "Yumi Kojic Acid",
            category: "Whitening series",
            brand: "29 NEXENTURY",
            price: "RM 3000.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/YumiKojicasid.jpg",
            shortDesc: "Professional Aesthetic Injectable",
            benefits: [
                "Brightens complexion",
                "Reduces hyperpigmentation",
                "Improves skin clarity",
                "Even skin tone"
                
                
            ],
            fullDesc: "Professional Kojic Acid formulation for brighter and more even-looking skin.",
            ingredients: [
                "Kojic Acid (5000mg)",
                "Isotonic Saline Solution (5ml)" 
            ],
            // ✅ FIXED: Protocol as single string
            protocol: " As recommended by qualified healthcare professional.",
            routeOfAdmin: "Intramuscular (IM) / Intravenous (IV)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)",
                 "Hypersensitivity to Kojic Acid"
            ],
            storage: "Store in a dry, clean and well-ventilated place at room temperature.",
            packing: "10 Vials + 10 Saline / Box",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },

        'WH-007': {
            name: "Royal Ultra Booster",
            category: "Whitening series",
            brand: "Mabel Labs Professional Series",
            price: "RM 390.00 / Box",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/Royalultrabooster.jpeg",
            shortDesc: "Premium Stem Cell & Antioxidant Infusion Complex",
            benefits: [
                "Brightens and evens skin tone",
                "Powerful Antioxidant",
                "Skin rejuvenation",
                "Improves radiance",
                "Supports skin vitality",
                "Premium IV brightening therapy"
            ],
            fullDesc: "Advanced brightening injectable formulated with plant stem cells, Alpha Arbutin and Vitamin C to support brighter, more even looking skin and overall skin radiance.",
            ingredients: [
                "Cyto-6 Plants Stem Cell",
                "DualNA Melanin Inhabit Factor",
                "DualNA Glutathione",
                "DualNA Ascorbic Acid ",
                "DualNA White Elements ",
                "DualNA Alpha Lipoic Acid ",
                "DualNA Multivitamins ",
            ],
            // ✅ FIXED: Protocol as single string
            protocol: " As recommended by qualified healthcare professional.",
            routeOfAdmin: "Intravenous (IV)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place away from direct sunlight. Do not freeze.",
            packing: "1 Ampoule (10ml) /Box .",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'WH-008': {
            name: "SLC24A5 Inhibitor III + SCF III",
            category: "Whitening series",
            brand: "29 NEXENTURY",
            price: "RM 25000.00 / Box",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/SLC24A4.jpeg",
            shortDesc: "Professional Aesthetic Solution",
            benefits: [
                "Brighter complexion",
                "Skin rejuvenation",
                "Improves firmness"
            ],
            fullDesc: "Advanced Swiss formulation supporting brightening and skin rejuvenation.",
            ingredients: [
                "Leontopodium 500mcg + 500mcg",
                "Cereus grandiflorus 5000mcg",
                "Annona muricata 2000mcg"
            ],
            // ✅ FIXED: ProtocAL AS A STRING
            protocol: "As recommended by qualified healthcare professional.",
            routeOfAdmin: "Intravenous (IV)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)",
                 "Plant hypersensitivity"
            ],
            storage: "Store in a cool, dry place away from direct sunlight. Do not freeze.",
            packing: "3 X SCF III & 9 SLC III (10 ml) / Briefcase",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'WH-009': {
            name: "Fairplus III Capsules",
            category: "Whitening series",
            brand: "29 NEXENTURY",
            price: "RM 800.00 / Box",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/fairpluscapsules.jpeg",
            shortDesc: "Whitening Supplement",
            benefits: [
                "Brighter skin",
                "Antioxidant support",
                "Overall wellness"
                
            ],
            fullDesc: "Premium antioxidant supplement supporting healthy skin and overall wellness.",
            ingredients: [
                "Vitamin C",
                "L-Glutathione",
                "L-Cystine",
                "Vitamin E"
            ],
            // ✅ FIXED: Protocol as single string 
            protocol: "As recommended by qualified healthcare professional.",
            routeOfAdmin: "Taken Orally",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)",
                 "G6PD deficiency",
                 "Kidney disorders"
            ],
            storage: "Store in a cool, dry place away from direct sunlight. Do not freeze.",
            packing: "60 Capsules /Box",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'WH-010': {
            name: "Complexion Exchanger",
            category: "Whitening series",
            brand: "Mabel Labs Professional Series",
            price: "RM 15000.00 / Box",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/Complexionexchanger2.jpeg",
            shortDesc: "SLC24A5 Activity Brightening Technology",
            benefits: [
                "Supports brightening",
                "Improves uneven skin tone",
                "Antioxidant protection",
                "Enhances skin radiance"
            ],
            fullDesc: "Advanced brightening injectable formulated with plant stem cells, Alpha Arbutin and Vitamin C to support brighter, more even looking skin and overall skin radiance.",
            ingredients: [
                "Selenicereus Grandiflorus extracts (5000mg)",
                "Annona Muricata extracts (3000mg)",
                "Peptide GDF-101 UWE-S 600mcg",
                "Edelweiss Stem Extract (250mcg)",
                "Edelweiss Flower Extract (250mcg)"
            ],
            // ✅ FIXED: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Intravenous (IV)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place away from direct sunlight. Do not freeze.",
            packing: "Each box contains 4 ampoules of Cyto-6 SFC (10ml/amp) and 6 ampoules of NCKX'5 Exchanger (10ml/amp). Total 10 ampoules per box.",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'WH-011': {
            name: "HD BLC02W5",
            category: " Stem Cell Therapy",
            brand: "Mabel Labs Professional Series",
            price: "RM 2000.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/BLC02W5.jpeg",
            shortDesc: "Intravenous whitening therapy formulated to support brighter, healthier-looking skin while promoting overall skin rejuvenation.",
            benefits: [
                "Supports brighter and more even-looking skin tone",
                "Improves appearance of dull and tired-looking skin",
                "Reduces appearance of pigmentation and uneven complexion",
                "Supports healthier-looking skin texture",
                "Improves skin radiance and luminosity",
                "Provides antioxidant protection against oxidative stress",
                "Improves appearance of post-acne marks and skin imperfections",
                "Supports overall skin rejuvenation and wellness"
            ],
            fullDesc: "HD BLC02W5 Whitening Therapy is an intravenous formulation developed to support brighter, healthier-looking skin while promoting overall skin rejuvenation. The formulation combines skin-brightening agents, antioxidants and supportive nutrients that work together to help improve skin tone, reduce the appearance of pigmentation and promote a more radiant complexion",
            ingredients: [
                "BLCO2W5 Inhibitor (2000 mg)",
                "Melanin Inhibitor Factor (2500mg)",
                "Reduced L-Glutathione (500mg)",
                "Kojic Acid Q10 (500mg)",
                "Multivitamin (250mg)"
            ],
            protocol: "As recommended by qualified healthcare professional .",
            routeOfAdmin: " Intravenous (IM) ",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.Avoid from sunlight",
            packing: "1 x HD BLCO2W5 Vial , 1 x Multivitamin vial, 1 x Kojic Acid Q10 Vial",
            shelfLife: "Refer to the expiry date printed pn the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },

        //WELLNESS
        'HC-001': {
            name: "GHK-Cu 50mg",
            category: "Anti-Aging & Regeneration",
            brand: "Pure Pharma",
            price: "RM 259.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/GHKCU50MG.jpeg",
            shortDesc: "Copper peptide 50mg for next level skin & tissue rejuvenation. Stimulates collagen, accelerates repair, and reduces fine lines.",
            benefits: [
                "Stimulates collagen & elastin production",
                "Accelerates skin repair & healing",
                "Reduces fine lines & wrinkles",
                "Enhances skin texture & tone",
                "Supports hair growth",
                "Powerful antioxidant & anti-inflammatory",
                "Rejuvenates at the cellular level"
            ],
            fullDesc: "GHK-Cu (Copper Peptide) is a naturally occurring peptide that plays a key role in skin regeneration, healing and anti-aging. Clinically studied for its ability to repair, protect and revive at the cellular level. Levels of GHK-Cu decline with age, making supplementation essential for maintaining youthful skin and tissue health.",
            ingredients: [
                "GHK-Cu 50mg (Lyophilized Powder)",
                "Tripeptide Glycyl-L-Histidyl-L-Lysine (GHK)",
                "Copper (II) Ions"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Subcutaneous (SC) / Intramuscular (IM)",
            suitableFor: [
                 "Adults aged 18 and above",
                 "Individuals who are not pregnant or breastfeeding",
                 "Individuals with a healthy cardiovascular system",
                 "Individuals without chronic diseases",
                 "Individuals with no known allergies to the ingredients",
                  "Individuals with no history of drug addiction",
                  "Individuals with normal blood pressure",
                 "Individuals without G6PD deficiency",
                 "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "1 vial(50mg) / Box.",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'HC-002': {
            name: "GHK-Cu 100mg",
            category: "Anti-Aging & Regeneration",
            brand: "Pure Pharma",
            price: "RM 399.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/GHKCU.jpeg",
            shortDesc: "Copper peptide 100mg for next level skin & tissue rejuvenation. Stimulates collagen, accelerates repair, and reduces fine lines.",
            benefits: [
                "Stimulates collagen & elastin production",
                "Accelerates skin repair & healing",
                "Reduces fine lines & wrinkles",
                "Enhances skin texture & tone",
                "Supports hair growth",
                "Powerful antioxidant & anti-inflammatory",
                "Rejuvenates at the cellular level"
            ],
            fullDesc: "GHK-Cu (Copper Peptide) is a naturally occurring peptide that plays a key role in skin regeneration, healing and anti-aging. Clinically studied for its ability to repair, protect and revive at the cellular level. Levels of GHK-Cu decline with age, making supplementation essential for maintaining youthful skin and tissue health.",
            ingredients: [
                "GHK-Cu 100mg (Lyophilized Powder)",
                "Tripeptide Glycyl-L-Histidyl-L-Lysine (GHK)",
                "Copper (II) Ions"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Subcutaneous (SC) / Intramuscular (IM)",
            suitableFor: [
                 "Adults aged 18 and above",
                 "Individuals who are not pregnant or breastfeeding",
                 "Individuals with a healthy cardiovascular system",
                 "Individuals without chronic diseases",
                 "Individuals with no known allergies to the ingredients",
                  "Individuals with no history of drug addiction",
                  "Individuals with normal blood pressure",
                 "Individuals without G6PD deficiency",
                 "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "1 vial(100mg) / Box.",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
       
        },
        'HC-003': {
        name: "NAD+",
        category: "Anti-Aging & Regeneration",
        brand: "OEM",
        price: "RM 650.00",          // Single pen price
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
        priceOld: null,               // No discount for 1 unit
       bulkPricing: {
    "5 pens": {
        normalPrice: "RM 3,150.00",
        discountedPrice: "RM 2,999.00",
        discount: "Save RM 151.00"
    },
    "10 pens": {
        normalPrice: "RM 6,300.00",
        discountedPrice: "RM 5,800.00",
        discount: "Save RM 500.00"
    }
},
    status: "In Stock",
    image: "images/products/NAD.jpeg",
    shortDesc: "Cellular energy. Youth renewed. Replenish, restore, and reignite your cells.",
            benefits: [
                "Cellular Energy Boost",
                "Anti-Aging & Repair",
                "Immune Support",
                "Brain & Focus Support",
                "Metabolic Health"
            ],
            fullDesc:"NAD+ is a vital coenzyme found in every cell of the body. As we age, our natural levels decline — leading to low energy, slower repair, and visible signs of aging. Replenish. Restore. Reignite your cells.",
            ingredients: [
                "Nicotinamide adenine dinucleotide"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: " Intramuscular (IM) ",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "3ml/Pen.",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        
        //ANTI AGING PRODUCTS
        'AA-001': {
            name: "GHK-Cu 50mg",
            category: "Anti-Aging & Regeneration",
            brand: "Pure Pharma",
            price: "RM 259.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/GHKCU50MG.jpeg",
            shortDesc: "Copper peptide 50mg for next level skin & tissue rejuvenation. Stimulates collagen, accelerates repair, and reduces fine lines.",
            benefits: [
                "Stimulates collagen & elastin production",
                "Accelerates skin repair & healing",
                "Reduces fine lines & wrinkles",
                "Enhances skin texture & tone",
                "Supports hair growth",
                "Powerful antioxidant & anti-inflammatory",
                "Rejuvenates at the cellular level"
            ],
            fullDesc: "GHK-Cu (Copper Peptide) is a naturally occurring peptide that plays a key role in skin regeneration, healing and anti-aging. Clinically studied for its ability to repair, protect and revive at the cellular level. Levels of GHK-Cu decline with age, making supplementation essential for maintaining youthful skin and tissue health.",
            ingredients: [
                "GHK-Cu 50mg (Lyophilized Powder)",
                "Tripeptide Glycyl-L-Histidyl-L-Lysine (GHK)",
                "Copper (II) Ions"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Subcutaneous (SC) / Intramuscular (IM)",
            suitableFor: [
                 "Adults aged 18 and above",
                 "Individuals who are not pregnant or breastfeeding",
                 "Individuals with a healthy cardiovascular system",
                 "Individuals without chronic diseases",
                 "Individuals with no known allergies to the ingredients",
                  "Individuals with no history of drug addiction",
                  "Individuals with normal blood pressure",
                 "Individuals without G6PD deficiency",
                 "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "1 vial(50mg) / Box.",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'AA-002': {
             name: "GHK-Cu 100mg",
            category: "Anti-Aging & Regeneration",
            brand: "Pure Pharma",
            price: "RM 399.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/GHKCU.jpeg",
            shortDesc: "Copper peptide 100mg for next level skin & tissue rejuvenation. Stimulates collagen, accelerates repair, and reduces fine lines.",
            benefits: [
                "Stimulates collagen & elastin production",
                "Accelerates skin repair & healing",
                "Reduces fine lines & wrinkles",
                "Enhances skin texture & tone",
                "Supports hair growth",
                "Powerful antioxidant & anti-inflammatory",
                "Rejuvenates at the cellular level"
            ],
            fullDesc: "GHK-Cu (Copper Peptide) is a naturally occurring peptide that plays a key role in skin regeneration, healing and anti-aging. Clinically studied for its ability to repair, protect and revive at the cellular level. Levels of GHK-Cu decline with age, making supplementation essential for maintaining youthful skin and tissue health.",
            ingredients: [
                "GHK-Cu 100mg (Lyophilized Powder)",
                "Tripeptide Glycyl-L-Histidyl-L-Lysine (GHK)",
                "Copper (II) Ions"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Subcutaneous (SC) / Intramuscular (IM)",
            suitableFor: [
                 "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "1 vial(100mg) / Box.",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
       'AA-003': {
        name: "NAD+",
        category: "Anti-Aging & Regeneration",
        brand: "OEM",
        price: "RM 650.00",          // Single pen price
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
        priceOld: null,               // No discount for 1 unit
       bulkPricing: {
    "5 pens": {
        normalPrice: "RM 3,150.00",
        discountedPrice: "RM 2,999.00",
        discount: "Save RM 151.00"
    },
    "10 pens": {
        normalPrice: "RM 6,300.00",
        discountedPrice: "RM 5,800.00",
        discount: "Save RM 500.00"
    }
},
    status: "In Stock",
    image: "images/products/NAD.jpeg",
    shortDesc: "Cellular energy. Youth renewed. Replenish, restore, and reignite your cells.",
            benefits: [
                "Cellular Energy Boost",
                "Anti-Aging & Repair",
                "Immune Support",
                "Brain & Focus Support",
                "Metabolic Health"
            ],
            fullDesc:"NAD+ is a vital coenzyme found in every cell of the body. As we age, our natural levels decline — leading to low energy, slower repair, and visible signs of aging. Replenish. Restore. Reignite your cells.",
            ingredients: [
                "Nicotinamide adenine dinucleotide"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Intramuscular (IM)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "3ml/Pen.",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'AA-004': {
            name: "Exosome Therapy",
            category: "Anti-Aging & Regeneration",
            brand: "Gluta Therapy",
            price: "RM 8500.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/exosome.jpeg",
            shortDesc: "Advanced regenerative therapy using naturally occurring extracellular vesicles for cellular repair, tissue regeneration, and anti-aging.",
            benefits: [
            "Accelerates tissue renewal and regeneration",
            "Enhances immune modulation",
            "Inhibits inflammation",
            "Prevents fine lines, wrinkles, and crow's feet",
            "Enhances skin elasticity and firmness",
             "Stimulates cellular regeneration",
            "Promotes collagen and elastin synthesis",
            "Reduces pigmentation and brightens skin",
            "Hydrates skin for ideal complexion",
            "Promotes hair follicle cell proliferation",
            "Slows down the progression of aging"
    ],
            fullDesc: "Exosomes are naturally occurring extracellular vesicles, typically 30 to 150 nm in size, that serve as crucial mediators of intercellular communication. These nanoscale carriers load and deliver specific biological information including DNA, mRNA, miRNA, and functional proteins to target cells. With a lipid bilayer membrane identical to the cell membrane, exosomes ensure secure transport and protected delivery of signaling molecules. Through these bioactive components, exosomes actively regulate the surrounding microenvironment, orchestrate cell-to-cell communication, and optimize cellular activity. Exosome therapy has shown promising results in tissue renewal, immune modulation, inflammation inhibition, and neural repair, making it a revolutionary foundation in regenerative medicine.",
            ingredients: [
                "Leontopodium Alpinum",
                "Extract Stem Cells",
                "Alpha Arbutin",
                "Ascorbic Acid (Vitamin C)"
    ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: " Intravenus (IV))",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "SLC III (9 Ampoules) & SCF III (3 Ampoules)",
            shelfLife: "Refer to expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'AA-005': {
            name: "NCKX5 Exchanger Stem Cell Booster",
            category: "Anti-Aging & Regeneration",
            brand: "Mabel Labs Professional Series",
            price: "RM 599.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/NCKX5.jpeg",
            shortDesc: "Melanin Inhibitor Booster. Advanced brightening, cellular renewal, and visible transformation for radiant, even-toned skin.",
            benefits: [
                "Inhibits melanin production and prevents dark spots",
                "Brightens dull skin and evens out skin tone",
                "Reduces pigmentation, freckles & sunspots",
                "Improves skin texture and overall clarity",
                "Deep hydration for smoother, plumper, healthier skin",
                "Supports skin regeneration and long-term radiance"
            ],
            fullDesc: "NCKX5 Exchanger is a premium skin booster designed to inhibit melanin production, even out skin tone, and restore your skin's natural radiance from within. Formulated with advanced stem cell technology and premium ingredients, it delivers visible transformation for dull, uneven, and tired-looking skin.",
            ingredients: [
                "Licorice Glabra Roots Extract",
                "Fistula Flower Stem Cell (100 mcg)",
                "Alpha Arbutin (100 mcg)",
                "Vitamin E (100 mcg)"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Intramuscular (IM)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "2 Syringes / Box (1.1 ml per syringe)",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'AA-006': {
            name: "Deer Placenta",
            category: "Anti-Aging & Regeneration",
            brand: "29 Nexentury",
            price: "RM 4500.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/deerplacenta.png",
            shortDesc: "Pure Swiss Sika deer placenta extract. 20:1 concentration. Supports cellular regeneration, anti-aging, and overall vitality.",
            benefits: [
                "Cellular regeneration & anti-aging",
                "Reduces wrinkles, dark spots & pores",
                "Deep hydration & skin firming",
                "Boosts energy, stamina & immunity",
                "Hormonal balance & vitality",
                "Joint flexibility & blood circulation"
            ],
            fullDesc: "Sika Deer Placenta Solution is a 100% pure and natural extract derived from the finest Switzerland Sika deer placenta. Produced via a unique centrifuge process and freeze-dried at low temperatures to preserve vital bioactive elements. Concentrated at a 20:1 ratio (1000mg of active material from 20,000mg of fresh placenta). Rich in amino acids, adhesive polysaccharides, gonadotropin, vitamins E & B, and essential minerals including calcium, phosphorus, iron, zinc, and copper. Sika deer placenta closely resembles human placenta biochemically, making it exceptionally nourishing and safe.",
            ingredients: [
                "Sika Deer Placental Extract 1000mg",
                "Equivalent to 20g (20,000mg) fresh placenta",
                "Amino Acids",
                "Adhesive Polysaccharides",
                "Gonadotropin",
                "Vitamin E & B Complex",
                "Hyaluronic Acid",
                "Insulin-like Growth Factor-1 (IGF-1)",
                "Calcium, Phosphorus, Iron, Zinc, Copper"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional.",
            routeOfAdmin: " Intravenous (IV)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"   
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place away from direct sunlight.",
            packing: "10 ampoules (2ml)/box.",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'AA-007': {
            name: "Sheep Placenta",
            category: "Anti-Aging & Regeneration",
            brand: "29 Nexentury",
            price: "RM 3500.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/Sheepplacenta.jpeg",
            shortDesc: "Pure Swiss sheep placenta extract. 20:1 concentration. Promotes skin firmness, elasticity, and cellular rejuvenation.",
            benefits: [
                "Slows the aging process at the cellular level",
                "Restores skin firmness, elasticity, and radiance",
                "Reduces fine lines, wrinkles, and pigmentation",
                "Balances hormones and boosts energy",
                "Promotes wound healing and reduces scarring",
                "Enhances mental clarity and physical stamina"
            ],
            fullDesc: "High concentration Sheep Placenta Solution is 100% pure and natural used for rejuvenating your body cells and good health. Our Sheep Placenta is extracted from the sheep placenta of healthy and fine quality Switzerland sheep. It contains rich amino acids, adhesive polysaccharides, gonadotropin, Vitamin E and B series, ferment (malic acid and hydracid), yolk vitelline, lecithinum, and various minerals like calcium, phosphorus, iron, zinc, copper, etc.",
            ingredients: [
                " 1000mg equivalent to 20 grams (20,000mg) fresh placenta",
                
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional.",
            routeOfAdmin: " Intravenous (IV)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place. Avoid direct sunlight",
            packing: "10 ampoules(each 2 ml) / Box.",
            shelfLife: "Refer to the expiry date printed on the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'AA-008': {
            name: "Peach Ceramide Stem Cell Solution",
            category: "Anti-Aging & Regeneration",
            brand: "29 Nexentury",
            price: "RM 9000.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/peachceramide.png",
            shortDesc: "Advanced stem cell therapy that upregulates UGCG genes to naturally restore skin ceramides for smoother, younger-looking skin.",
            benefits: [
                "Upregulates UGCG genes for natural ceramide synthesis",
                "Restores skin's moisture barrier and prevents dryness",
                "Reduces fine lines, wrinkles, and roughness",
                "Promotes smoother, softer, and more radiant skin",
                "Supports natural collagen for firmer skin",
                "Improves skin tone, clarity, and texture",
                "Deeply hydrates for a fresh and balanced feel"
            ],
            fullDesc: "Peach Ceramide Stem Cell Solution is a breakthrough in anti-aging science. It upregulates the UGCG gene to promote natural ceramide synthesis in the skin. Extracted from the stem cells of peach ceramide (the reddish blood vessel-like structures at the heart of the peach), each ampoule contains the equivalent of approximately 1000 fresh peaches. Clinically validated by Japanese medical research, this therapy delivers essential nutrients to the skin, restoring declining ceramide levels and providing fast, safe, and effective skin smoothening results.",
            ingredients: [
                "Prunus persica (Peach) Extract 1000mg",
                "Peach Ceramide 3 Stem Cell 2500mg",
                "Peach Ceramide 6 II Stem Cell 2500mg",
                "Equivalent to approximately 1000 fresh peaches per ampoule"
            ],
            protocol: "As recommended by qualified healthcare professional .",
            routeOfAdmin: "Intravenous (IV)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.Avoid from sunlight",
            packing: "10 ampoules (10ml) / Box",
            shelfLife: "Refer to the expiry date printed pn the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        // SLIMMING
        'SL-001': {
        name: "RETRA - PURE ",
        category: "⚡ Slimming",
        brand: "Pure Pharma",
        price: "RM 450.00",                          // ← NEED PRICE
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
        status: "In Stock",
        image: "images/products/Retra.jpeg",
        shortDesc: "Next-Generation Triple-Hormone Peptide for Advanced Weight Management & Metabolic Optimization",
      benefits: [
        "Promotes significant and sustained weight loss",
        "Reduces appetite and food cravings",
        "Improves blood sugar control and insulin sensitivity",
        "Enhances fat metabolism and energy expenditure",
        "Supports lean muscle preservation",
        "Overall metabolic health improvement"
    ],
    fullDesc: "Retatrutide is a revolutionary peptide designed as a triple agonist that targets three important receptors involved in appetite regulation and energy balance: GLP-1, GIP, and Glucagon. By activating these pathways simultaneously, Retatrutide helps reduce appetite, increase satiety, improve glucose metabolism, and promote significant weight loss. This next-generation peptide offers a synergistic effect for comprehensive metabolic health optimization.",
    ingredients: [
        "Retatrutide 30mg (Lyophilized Powder)",
        "Mannitol",
        "Sodium Phosphate",
        "Bacteriostatic Water (for reconstitution)"
    ],

    // ADD DOSAGE OPTIONS FOR RETRA-PURE 30
    dosageOptions: [
        {
            dose: "10mg",
            price: "Rm450.00",
            description: "Standard maintenance dose",
            badge: "Most Popular"
        },
        {
            dose: "30mg",
            price: "Rm 900.00",
            description: "Advanced dose for optimal results",
            badge: "Advanced"
        }
    ],
    protocol: "As recommended by qualified healthcare professional",
    routeOfAdmin: "Subcutaneous (SC) / Intramuscular (IM)",
    suitableFor: [
        "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
    ],
    notSuitableFor: [
        "Individuals under 18 years of age",
        "Pregnant or breastfeeding women",
        "Individuals with a history of medullary thyroid carcinoma (MTC)",
        "Individuals with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)",
        "Individuals with known allergies to any ingredients"
    ],
    storage: "Store refrigerated at 2°C - 8°C. Do not freeze.",
    packing: "1 Vial (30mg) / Box",
    shelfLife: "Refer to the expiry date printed on the packaging.",
    disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
}, 
'SL-002': {
    name: "Mounjaro",
    category: "Slimming ",
    brand: "Mabel Labs Professional Series",
    price: "RM 500.00", // Default price
    // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
    weight: 0,
    status: "In Stock",
    image: "images/products/Mounjaro.jpeg",
    shortDesc: "Dual GIP and GLP-1 receptor agonist for improved blood glucose control and weight management. Available in multiple dosages.",
    benefits: [
        "Supports improved blood glucose control",
        "Dual GIP/GLP-1 receptor activation",
        "Stimulates glucose-dependent insulin secretion",
        "Reduces inappropriate glucagon secretion",
        "Slows gastric emptying",
        "May reduce appetite",
        "Once-weekly administration"
    ],
    fullDesc: "Mounjaro® ATEOS contains tirzepatide, a dual GIP and GLP-1 receptor agonist that supports glucose-dependent insulin secretion, regulates glucagon, and slows gastric emptying. Treatment typically begins with 2.5 mg once weekly for four weeks before escalation to 5 mg or higher as clinically appropriate. Available in 2.5mg, 5mg, and 7.5mg dosages.",
    ingredients: [
        "Tirzepatide (GLP-1/GIP Receptor Agonist)",
        "Bacteriostatic Water (for reconstitution)",
        "Mannitol",
        "Sodium Phosphate",
        "Hydrochloric acid and/or Sodium hydroxide (pH adjustment)"
    ],
    dosageOptions: [
        {
            dose: "2.5mg",
            price: "RM 500.00",
            description: "Starting dose for beginners",
            badge: "Starter Dose"
        },
        {
            dose: "5mg",
            price: "RM 660.00",
            description: "Standard maintenance dose",
            badge: "Most Popular"
        },
        {
            dose: "7.5mg",
            price: "RM 760.00",
            description: "Advanced dose for optimal results",
            badge: "Advanced"
        }
    ],
    protocol: "Administered by trained healthcare professional. Dosage adjusted gradually based on individual response and tolerance. Start low and increase as tolerated.",
    routeOfAdmin: "Intramuscular (IM)",
    suitableFor: [
        "Adults aged 18 and above",
        "Individuals who are not pregnant or breastfeeding",
        "Individuals with a healthy cardiovascular system",
        "Individuals without chronic diseases",
        "Individuals with no known allergies to the ingredients",
        "Individuals with no history of drug addiction",
        "Individuals with normal blood pressure",
        "Individuals without G6PD deficiency",
        "Individuals with healthy kidney function"
    ],
    notSuitableFor: [
        "Individuals under 18 years of age",
        "Pregnant or breastfeeding women",
        "Individuals with history of medullary thyroid carcinoma",
        "Individuals with severe gastrointestinal disorders",
        "Individuals with known allergies to any ingredients"
    ],
    storage: "Store refrigerated at 2°C - 8°C. Do not freeze. Protect from sunlight.",
    packing: "2 single-dose ATEOS autoinjectors per box. Each device contains 0.5mL solution with fixed concealed needle. Prefilled, single-use, Japanese original packaging.",
    shelfLife: "Refer to the expiry date printed on the packaging.",
    disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
},


// STEMCELL THERAPY
        
        'SC-001': {
            name: "NCKX5 Exchanger Stemcell Booster",
            category: "Anti-Aging & Regeneration",
            brand: "Mabel Labs Professional Series",
            price: "RM 599.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/NCKX5.jpeg",
            shortDesc: "Melanin Inhibitor Booster.Advanced brightening, cellular renewal, and visible transformation for radiant, even-toned skin.",
            benefits: [
                "Inhibits melanin production and prevents dark spots",
                "Brightens dull skin and evens out skin tone",
                "Reduces pigmentation, freckles & sunspots",
                "Improves skin texture and overall clarity",
                "Deep hydration for smoother, plumper and healthier skin",
                "Supports skin regeneration and long-term radiance"
            ],
            fullDesc: "NCKX5 Exchanger is a premium skin booster designed to inhibit melanin production, even out skin tone and restore your skin's natural radiance from within. Formulated with advanced stem cell technology and premium ingredients, it delivers visible transformation for dull, uneven and tired-looking skin.",
            ingredients: [
                "Licorice Glabra Roots Extract",
                "Fistula Flower Stem Cell (100 mcg)",
                "Alpha Arbutin (100 mcg)",
                "Vitamin E (100 mcg)"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Intramuscular (IM)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "2 Syringes (1.1 ml per syringe) / Box ",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        
        // SUPPLEMENTS
        'SU-001': {
            name: "NCKX5 Gluta-Caps",
            category: "Supplements",
            brand: "Mabel Labs Professional Series",
            price: "RM 249.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/GlutaCaps.jpeg",
            shortDesc: "Premium Skin Rejuvenation with Gluthathione.",
            benefits: [
                "Removes harmful toxins from the body",
                "Promotes even and radiant skin tone",
                "Protects skin from free radical damage",
                "Supports overall skin health and youthfulness",
            ],
            fullDesc: "L-Glutathione Capsules is an advanced skin rejuvenation supplement that combines the potent powers of L-Glutathione, Astaxanthin, Vitamin C, and Pearl Extract to deliver radiant, youthful skin. L-Glutathione and Astaxanthin work synergistically to detoxify, protect, and rejuvenate the skin, while Pearl Extract is known for its natural ability to brighten and even out skin tone. Ideal for those seeking a comprehensive skin health supplement, this premium formula is formulated from Japan to ensure the highest quality and efficacy.",
            ingredients: [
                "L-Glutathione",
                "Astaxanthin",
                "Vitamin C",
                "Pearl Extract"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Taken Orally",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "30 capsules / Box",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'SU-002': {
            name: "Fairplus III",
            category: "Supplements",
            brand: "29 Nexentury",
            price: "RM 800.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/fairpluscapsules.jpeg",
            shortDesc: "Premium skin brightening and rejuvenation supplement formulated in New Zealand. Helps block melanin production, promotes lighter skin cells, and restores radiance.",
            benefits: [
                "Blocks melanin production by interrupting Tyrosinase activation",
                "Promotes new, lighter skin cells to the surface",
                "Provides organic, plant-based UV protection",
                "Sloughs off dead, pigmented cells for faster whitening effects",
                "Helps regain energy and strength",
                "Supports healthy skin cell regeneration",
                "Detoxifies from within for clearer, radiant skin"
            ],
            fullDesc:"Fairplus III Capsules is a premium skin-whitening supplement, formulated in New Zealand and manufactured in Malaysia to the highest quality standards. Infused with L-Glutathione, Vitamin C, Vitamin E, and L-Cystine, it helps detoxify the body, brighten skin tone, and reduce pigmentation and blemishes. Clinically tested and rigorously tested in-house, this supplement nourishes your skin from within, leaving it visibly brighter, smoother, and more youthful.",
            ingredients: [
                "L-Glutathione",
                "Ascorbic Acid (Vitamin C)",
                "Vitamin E",
                "Opaque White Vege Capsules (enhanced absorption)"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Taken Orally",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "60 Capsules/Box",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'SU-003': {
            name: "D-Cell Capsules",
            category: "Supplements",
            brand: "29 Nexentury",
            price: "RM 800.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/Dcell.jpeg",
            shortDesc:  "Premium health supplement formulated with deer placenta, L-glutathione, and sodium hyaluronate to improve skin texture, elasticity, and overall vitality.",
            benefits: [
                "Slows the aging process",
                "Improves nutrient absorption capacity of skin cells",
                "Enhances skin rejuvenation and regeneration",
                "Hydrates skin and improves elasticity",
                "Improves skin texture and health",
                "Supports joint health and mobility",
                "Provides powerful antioxidant protection"
            ],
            fullDesc:  "D-Cell Capsule is specially designed for those who wish to improve skin texture, elasticity, and tone. It is nourishing and completely safe to consume. The vegetable-based capsules are easily absorbed by the body, effectively delaying aging while enhancing skin vitality. Formulated with deer placenta concentrate, L-glutathione, and sodium hyaluronate, D-Cell Capsules offer powerful antioxidant and anti-aging properties to improve skin health and overall wellness. Manufactured in New Zealand under GMP certification and TGA standards, ensuring the highest quality and efficacy.",
            ingredients: [
                "Deer (Dama dama) Placenta Concentrate Powder — 100 mg",
                "L-Glutathione (Reduced Form) — 100 mg",
                "Sodium Hyaluronate — 25 mg",
                "Opaque Vege Capsules (Halal Certified)"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "Taken Orally ",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "30 capsules/bottle",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        'SU-004': {
            name: "SCF Qiora Stemcell juice",
            category: "Anti-Aging & Regeneration",
            brand: "OEM",
            price: "RM 599.00",
            // Weight in grams (g) — used later for domestic shipping calculation. Replace 0 with the actual product weight.
            weight: 0,
            status: "In Stock",
            image: "images/products/NCKX5.jpeg",
            shortDesc: "Melanin Inhibitor Booster. Advanced brightening, cellular renewal, and visible transformation for radiant, even-toned skin.",
            benefits: [
                "Inhibits melanin production and prevents dark spots",
                "Brightens dull skin and evens out skin tone",
                "Reduces pigmentation, freckles & sunspots",
                "Improves skin texture and overall clarity",
                "Deep hydration for smoother, plumper, healthier skin",
                "Supports skin regeneration and long-term radiance"
            ],
            fullDesc: "NCKX5 Exchanger is a premium skin booster designed to inhibit melanin production, even out skin tone, and restore your skin's natural radiance from within. Formulated with advanced stem cell technology and premium ingredients, it delivers visible transformation for dull, uneven, and tired-looking skin.",
            ingredients: [
                "Licorice Glabra Roots Extract",
                "Fistula Flower Stem Cell (100 mcg)",
                "Alpha Arbutin (100 mcg)",
                "Vitamin E (100 mcg)"
            ],
            // ✅ Already correct: Protocol as single string
            protocol: "As recommended by qualified healthcare professional",
            routeOfAdmin: "IM (Intramuscular) (Professional use)",
            suitableFor: [
                "Adults aged 18 and above",
                "Individuals who are not pregnant or breastfeeding",
                "Individuals with a healthy cardiovascular system",
                "Individuals without chronic diseases",
                "Individuals with no known allergies to the ingredients",
                "Individuals with no history of drug addiction",
                "Individuals with normal blood pressure",
                "Individuals without G6PD deficiency",
                "Individuals with healthy kidney function"
            ],
            notSuitableFor: [
                 "Individuals under 18 years of age",
                 "Pregnant or breastfeeding women",
                 "Individuals with cardiovascular conditions",
                 "Individuals with chronic diseases",
                 "Individuals with known allergies to any ingredients",
                 "Individuals with a history of drug addiction",
                 "Individuals with high blood pressure (hypertension)"
            ],
            storage: "Store in a cool, dry place.",
            packing: "2 Syringes / Box (1.1 ml per syringe)",
            shelfLife: "Refer to expiry date of the packaging.",
            disclaimer: "The information provided on this website is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment. Mabellabs products are intended for professional aesthetic and wellness applications only. Individual results may vary and are dependent on professional assessment, treatment protocol, and individual conditions. No statement on this website should be construed as a claim to diagnose, treat, cure, or prevent any disease or medical condition. Healthcare professionals are solely responsible for determining the suitability and appropriate use of any Mabellabs product in accordance with applicable laws, regulations, and accepted clinical practice. By accessing this website, you acknowledge and accept the terms of this Medical Disclaimer."
        },
        
    };
    
    

    // ================= GET PRODUCT FROM URL =================
    function getProductFromURL() {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        return productId;
    }

   // ================= RENDER PRODUCT DETAIL ================= 
function renderProductDetail(productId) {
    const product = allProducts[productId];
    
    if (!product) {
        document.getElementById('productDetailMain').innerHTML = `
            <div style="text-align: center; padding: 60px 20px; grid-column: 1 / -1;">
                <h2 style="color: #7A210C;">Product Not Found</h2>
                <p style="color: #666;">The product you're looking for doesn't exist.</p>
                <a href="products.html" class="btn" style="margin-top: 20px; display: inline-block;">← Back to Products</a>
            </div>
        `;
        return;
    }

    // ===== RENDER MAIN SECTION =====
    let mainHtml = `
        <div class="product-image-container">
            ${product.image && product.image.startsWith('images/') ? `
                <img src="${product.image}" alt="${product.name}" class="product-detail-img">
            ` : `
                <div class="product-image-placeholder">
                    <span>${product.image || '📷'}</span>
                    <p>${product.name}</p>
                    <small style="color: #bbb; font-size: 12px;">(Add image here)</small>
                </div>
            `}
        </div>
        <div class="product-info-container">
            <span class="product-badge-category">${product.category}</span>
            <h1 class="product-name">${product.name}</h1>
            <p class="product-short-desc">${product.shortDesc}</p>

            <div class="product-meta-info">
                <div class="meta-item">
                    <span class="meta-label">Brand:</span>
                    <span class="meta-value">${product.brand}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Status:</span>
                    <span class="meta-value status-available">${product.status}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Price:</span>
                    <span class="meta-value price" id="productPrice">${product.price}</span>
                </div>
            </div>

           <!-- ✅ DOSAGE SELECTOR - FOR MOUNJARO (SL-002) AND RETRA (SL-001) -->
        ${(productId === 'SL-001' || productId === 'SL-002') && product.dosageOptions ? `
        <div class="dosage-selector">
            <h4>💊 Select Your Dosage</h4>
            <div class="dosage-options">
                ${product.dosageOptions.map((option, index) => `
                    <button class="dosage-option ${index === 0 ? 'active' : ''}" 
                            data-price="${option.price}" 
                            data-dose="${option.dose}"
                            onclick="selectDosage(this, '${option.price}', '${option.dose}')">
                        <span class="dose-name">${option.dose}</span>
                        <span class="dose-price">${option.price}</span>
                        ${option.badge ? `<span class="dose-badge">${option.badge}</span>` : ''}
                        <span class="dose-desc">${option.description}</span>
                    </button>
                `).join('')}
            </div>
        </div>
        ` : ''}

        <!-- Bulk Pricing Display -->
        ${product.bulkPricing && product.bulkPricing["5 pens"] ? `
        <div class="bulk-pricing">
            <h4>📦 Bulk Pricing</h4>
            <div class="price-grid">
                <div class="price-card single">
                    <span class="qty">1</span>
                    <span class="price">RM 650.00</span>
                    <span class="per">/pen</span>
                </div>
                <div class="price-card bulk">
                    <span class="bulk-badge">⭐ BEST DEAL</span>
                    <div class="bulk-row">
                        <span class="qty">5</span>
                        <span class="old">${product.bulkPricing["5 pens"].normalPrice}</span>
                        <span class="arrow">→</span>
                        <span class="new">${product.bulkPricing["5 pens"].discountedPrice}</span>
                    </div>
                    <div class="bulk-footer">
                        <span class="save">💰 ${product.bulkPricing["5 pens"].discount}</span>
                        <span class="per-unit">≈ RM 599.80/pen</span>
                    </div>
                </div>
            </div>
        </div>
        ` : ''}

        <div class="product-action-buttons">
            <a href="contact.html" class="btn-primary">📩 Request Quotation</a>
            <a href="distributor.html" class="btn-secondary">🤝 Become Distributor</a>
        </div>
    </div>
`;
document.getElementById('productDetailMain').innerHTML = mainHtml;

    // ===== RENDER TABS =====
    let tabsHtml = `
        <div class="tab-nav">
            <button class="tab-btn active" data-tab="overview">📋 Overview</button>
            <button class="tab-btn" data-tab="ingredients">🧪 Ingredients</button>
            <button class="tab-btn" data-tab="protocol">📖 Protocol</button>
            <button class="tab-btn" data-tab="suitability">👤 Suitability</button>
            <button class="tab-btn" data-tab="storage">📦 Storage & Packing</button>
            <button class="tab-btn" data-tab="disclaimer">⚠️ Disclaimer</button>
        </div>
        <div class="tab-content">

            <!-- Overview -->
            <div class="tab-panel active" id="tab-overview">
                <h3>📋 Overview</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Product Name</label>
                        <p>${product.name}</p>
                    </div>
                    <div class="info-item">
                        <label>Category</label>
                        <p>${product.category}</p>
                    </div>
                    <div class="info-item">
                        <label>Brand</label>
                        <p>${product.brand}</p>
                    </div>
                    <div class="info-item">
                        <label>Price</label>
                        <p id="overviewPrice">${product.price}</p>
                    </div>
                    <div class="info-item full-width">
                        <label>Key Benefits</label>
                        <ul>
                            ${product.benefits.map(b => `<li>${b}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="info-item full-width">
                        <label>Description</label>
                        <p>${product.fullDesc}</p>
                    </div>
                </div>
            </div>

            <!-- Ingredients -->
            <div class="tab-panel" id="tab-ingredients">
                <h3>🧪 Main Ingredients</h3>
                <div class="ingredients-simple-list">
                    <ul>
                        ${product.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <!-- Protocol -->
            <div class="tab-panel" id="tab-protocol">
                <h3>📖 Recommended Protocol</h3>
                <div class="protocol-single-box">
                    <p>${product.protocol}</p>
                </div>
                <div class="protocol-extra">
                    <h4>💉 Route of Administration</h4>
                    <p>${product.routeOfAdmin}</p>
                </div>
            </div>

            <!-- Suitability -->
            <div class="tab-panel" id="tab-suitability">
                <h3>👤 Who is it suitable for?</h3>
                <div class="suitability-grid">
                    <div class="suitability-item suitable">
                        <span>✅</span>
                        <div>
                            <h4>Suitable For</h4>
                            <ul>
                                ${product.suitableFor.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="suitability-item not-suitable">
                        <span>❌</span>
                        <div>
                            <h4>Not Suitable For</h4>
                            <ul>
                                ${product.notSuitableFor.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Storage -->
            <div class="tab-panel" id="tab-storage">
                <h3>📦 Storage & Packing</h3>
                <div class="storage-grid">
                    <div class="storage-item">
                        <span class="storage-icon">🌡️</span>
                        <div>
                            <h4>Storage Conditions</h4>
                            <p>${product.storage}</p>
                        </div>
                    </div>
                    <div class="storage-item">
                        <span class="storage-icon">📦</span>
                        <div>
                            <h4>Packing Details</h4>
                            <p>${product.packing}</p>
                        </div>
                    </div>
                    <div class="storage-item">
                        <span class="storage-icon">⏰</span>
                        <div>
                            <h4>Shelf Life</h4>
                            <p>${product.shelfLife}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Disclaimer -->
            <div class="tab-panel" id="tab-disclaimer">
                <h3>⚠️ Disclaimer</h3>
                <div class="disclaimer-content">
                    <div class="disclaimer-box">
                        <span>⚠️</span>
                        <div>
                            <h4>Medical Disclaimer</h4>
                            <p>${product.disclaimer}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;
    document.getElementById('productTabs').innerHTML = tabsHtml;

    // Re-initialize tab functionality
    initTabs();
}

    // ================= TAB FUNCTIONALITY =================
    function initTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanels = document.querySelectorAll('.tab-panel');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                tabPanels.forEach(p => p.classList.remove('active'));

                const tabId = this.dataset.tab;
                const targetPanel = document.getElementById('tab-' + tabId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

   // ================= DOSAGE SELECTOR FUNCTION =================
window.selectDosage = function(element, price, dose) {
    // Remove active class from all dosage options
    document.querySelectorAll('.dosage-option').forEach(opt => {
        opt.classList.remove('active');
    });
    
    // Add active class to selected option
    element.classList.add('active');
    
    // Update the price display
    const priceDisplay = document.getElementById('productPrice');
    const overviewPrice = document.getElementById('overviewPrice');
    
    if (priceDisplay) {
        priceDisplay.textContent = price;
    }
    
    if (overviewPrice) {
        overviewPrice.textContent = price;
    }
    
    console.log(`✅ Selected: ${dose} - ${price}`);
};

// Make selectDosage available globally
window.selectDosage = selectDosage;

    // ================= LOAD PRODUCT =================
    const productId = getProductFromURL();
    if (productId) {
        renderProductDetail(productId);
    } else {
        // If no ID, show message
        document.getElementById('productDetailMain').innerHTML = `
            <div style="text-align: center; padding: 60px 20px; grid-column: 1 / -1;">
                <h2 style="color: #7A210C;">Select a Product</h2>
                <p style="color: #666;">Please select a product from the products page.</p>
                <a href="products.html" class="btn" style="margin-top: 20px; display: inline-block;">← Back to Products</a>
            </div>
        `;
    }

    // ================= BACK BUTTON =================
document.getElementById('backToProducts').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Check if there's a stored category in sessionStorage
    const lastCategory = sessionStorage.getItem('lastCategory');
    
    if (lastCategory) {
        // Go back to products page with the category hash
        window.location.href = 'products.html#' + lastCategory;
    } else {
        // Fallback: go back to products page
        window.location.href = 'products.html';
    }
});

    console.log('✅ Product detail page loaded!');
});