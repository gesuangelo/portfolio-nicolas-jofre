// Portfolio Data - High-quality placeholder images from Unsplash
const portfolioItems = [
    {
        id: 1,
        title: "Ethereal Brand Identity",
        category: "branding",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
        description: "Identity visual completa para marca de cosmética natural",
        height: "h-80"
    },
    {
        id: 2,
        title: "Minimalist Tech Logo",
        category: "logo",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
        description: "Diseño de logotipo para startup tecnológica",
        height: "h-64"
    },
    {
        id: 3,
        title: "Urban Portraiture",
        category: "photography",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
        description: "Serie de retratos urbanos en blanco y negro",
        height: "h-96"
    },
    {
        id: 4,
        title: "Artisan Coffee Brand",
        category: "branding",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
        description: "Branding para cafetería artesanal",
        height: "h-72"
    },
    {
        id: 5,
        title: "Geometric Logo Series",
        category: "logo",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
        description: "Colección de logotipos geométricos",
        height: "h-64"
    },
    {
        id: 6,
        title: "Fashion Editorial",
        category: "photography",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
        description: "Fotografía de moda para revista digital",
        height: "h-96"
    },
    {
        id: 7,
        title: "Luxury Spa Identity",
        category: "branding",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
        description: "Identidad de marca para spa de lujo",
        height: "h-80"
    },
    {
        id: 8,
        title: "Monogram Collection",
        category: "logo",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
        description: "Serie de monogramas personalizados",
        height: "h-64"
    },
    {
        id: 9,
        title: "Nature Photography",
        category: "photography",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        description: "Capturas de paisajes naturales",
        height: "h-72"
    },
    {
        id: 10,
        title: "Sustainable Fashion",
        category: "branding",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
        description: "Branding para marca de moda sostenible",
        height: "h-88"
    },
    {
        id: 11,
        title: "Modern Restaurant Logo",
        category: "logo",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        description: "Logotipo para restaurante contemporáneo",
        height: "h-64"
    },
    {
        id: 12,
        title: "Product Photography",
        category: "photography",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
        description: "Fotografía de producto para e-commerce",
        height: "h-72"
    }
];

// DOM Elements
const portfolioGrid = document.getElementById('portfolio-grid');
const categoryBtns = document.querySelectorAll('.category-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Lightbox Elements
let lightbox, lightboxImg, lightboxTitle, lightboxClose;

// Initialize Portfolio
function initPortfolio() {
    createLightbox();
    if (portfolioGrid) {
        renderPortfolio('all');
    }
    setupCategoryFilter();
    setupMobileMenu();
}

// Create Lightbox DOM structure
function createLightbox() {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'fixed inset-0 z-[100] bg-stone-950/95 flex flex-col items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-500 backdrop-blur-xl';
    
    lightbox.innerHTML = `
        <button id="lightbox-close" class="absolute top-6 right-6 text-white hover:text-stone-400 transition-colors p-2">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <div class="max-w-5xl w-full flex flex-col items-center gap-6">
            <div class="relative w-full aspect-video md:aspect-auto max-h-[70vh] flex items-center justify-center overflow-hidden rounded-lg">
                <img id="lightbox-img" src="" alt="" class="max-w-full max-h-full object-contain shadow-2xl">
            </div>
            <div class="text-center">
                <h3 id="lightbox-title" class="font-serif text-2xl md:text-3xl text-white mb-2 tracking-tight"></h3>
                <p id="lightbox-desc" class="text-stone-400 text-sm md:text-base max-w-xl mx-auto"></p>
            </div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    lightboxImg = document.getElementById('lightbox-img');
    lightboxTitle = document.getElementById('lightbox-title');
    lightboxDesc = document.getElementById('lightbox-desc');
    lightboxClose = document.getElementById('lightbox-close');
    
    // Close events
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

function openLightbox(item) {
    lightboxImg.src = item.image.replace('w=800', 'w=1600'); // Higher res
    lightboxTitle.innerText = item.title;
    lightboxDesc.innerText = item.description;
    
    lightbox.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'auto';
    // Clear src after fade out to avoid flash
    setTimeout(() => { lightboxImg.src = ''; }, 500);
}

// Render Portfolio Items
function renderPortfolio(category) {
    const filteredItems = category === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === category);
    
    portfolioGrid.innerHTML = '';
    
    filteredItems.forEach((item, index) => {
        const itemElement = createPortfolioItem(item, index);
        portfolioGrid.appendChild(itemElement);
        
        // Add click listener for lightbox
        itemElement.addEventListener('click', () => openLightbox(item));
    });
    
    // Trigger animation for new items
    setTimeout(() => {
        document.querySelectorAll('.masonry-item').forEach((item, i) => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }, 50);
}

// Create Portfolio Item Element
function createPortfolioItem(item, index) {
    const div = document.createElement('div');
    div.className = `masonry-item portfolio-item opacity-0 transform translate-y-4 transition-all duration-500`;
    div.style.transitionDelay = `${index * 50}ms`;
    div.setAttribute('data-category', item.category);
    
    const categoryNames = {
        'branding': 'Branding',
        'logo': 'Logo Design',
        'photography': 'Fotografía'
    };
    
    div.innerHTML = `
        <div class="relative group cursor-pointer ${item.height}">
            <img 
                src="${item.image}" 
                alt="${item.title}" 
                class="w-full h-full object-cover"
                loading="lazy"
            >
            <div class="portfolio-overlay absolute inset-0 bg-stone-950/80 flex flex-col justify-end p-6 md:p-8">
                <span class="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-3">
                    ${categoryNames[item.category]}
                </span>
                <h3 class="font-serif text-xl text-stone-100 mb-2">${item.title}</h3>
                <p class="text-xs text-stone-500 leading-relaxed">${item.description}</p>
            </div>
        </div>
    `;
    
    return div;
}

// Setup Category Filter
function setupCategoryFilter() {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get category and filter
            const category = btn.getAttribute('data-category');
            renderPortfolio(category);
        });
    });
}

// Setup Mobile Menu
function setupMobileMenu() {
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}
