const portfolioItems = [
    {
        id: 1,
        title: "Identidad para estudio de interiores",
        category: "branding",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1000&q=80",
        description: "Sistema visual completo orientado a posicionamiento premium.",
        height: "h-80"
    },
    {
        id: 2,
        title: "Logotipo para firma tecnológica",
        category: "logo",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1000&q=80",
        description: "Construcción geométrica y versiones adaptativas para digital.",
        height: "h-64"
    },
    {
        id: 3,
        title: "Retrato editorial urbano",
        category: "photography",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&q=80",
        description: "Serie fotográfica de atmósfera cinematográfica en monocromo.",
        height: "h-96"
    },
    {
        id: 4,
        title: "Marca para cafetería de especialidad",
        category: "branding",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1000&q=80",
        description: "Naming visual, empaque y dirección de arte para lanzamiento.",
        height: "h-72"
    },
    {
        id: 5,
        title: "Colección de monogramas",
        category: "logo",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1000&q=80",
        description: "Set de símbolos para marcas personales y boutiques creativas.",
        height: "h-64"
    },
    {
        id: 6,
        title: "Editorial de moda contemporánea",
        category: "photography",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&q=80",
        description: "Producción visual para campaña digital y prensa especializada.",
        height: "h-96"
    },
    {
        id: 7,
        title: "Identidad para spa de autor",
        category: "branding",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=80",
        description: "Concepto de marca sofisticado con enfoque sensorial.",
        height: "h-80"
    },
    {
        id: 8,
        title: "Serie de sellos tipográficos",
        category: "logo",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1000&q=80",
        description: "Diseño de sellos visuales para productos de edición limitada.",
        height: "h-64"
    },
    {
        id: 9,
        title: "Paisaje narrativo",
        category: "photography",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=80",
        description: "Exploración visual de luz natural y composición atmosférica.",
        height: "h-72"
    }
];

const portfolioGrid = document.getElementById('portfolio-grid');
const categoryBtns = document.querySelectorAll('.category-btn');

let lightbox, lightboxImg, lightboxTitle, lightboxDesc, lightboxClose;

function initPortfolio() {
    createLightbox();
    if (portfolioGrid) renderPortfolio('all');
    setupCategoryFilter();
}

function createLightbox() {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'fixed inset-0 z-[100] bg-[#080a0dcc] flex flex-col items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-500 backdrop-blur-xl';

    lightbox.innerHTML = `
        <button id="lightbox-close" aria-label="Cerrar imagen" class="absolute top-5 right-5 text-white/90 hover:text-white transition-colors p-2">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <div class="max-w-5xl w-full flex flex-col items-center gap-6">
            <div class="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl border border-[#2b3441] bg-[#0e1218]">
                <img id="lightbox-img" src="" alt="" class="max-w-full max-h-[70vh] object-contain shadow-2xl">
            </div>
            <div class="text-center px-3">
                <h3 id="lightbox-title" class="font-serif text-2xl md:text-3xl text-white mb-2 tracking-tight"></h3>
                <p id="lightbox-desc" class="text-[#a8b5c8] text-sm md:text-base max-w-2xl mx-auto"></p>
            </div>
        </div>
    `;

    document.body.appendChild(lightbox);

    lightboxImg = document.getElementById('lightbox-img');
    lightboxTitle = document.getElementById('lightbox-title');
    lightboxDesc = document.getElementById('lightbox-desc');
    lightboxClose = document.getElementById('lightbox-close');

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

function openLightbox(item) {
    lightboxImg.src = item.image.replace('w=1000', 'w=1800');
    lightboxTitle.innerText = item.title;
    lightboxDesc.innerText = item.description;

    lightbox.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'auto';
    setTimeout(() => { lightboxImg.src = ''; }, 500);
}

function renderPortfolio(category) {
    const filteredItems = category === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === category);

    portfolioGrid.innerHTML = '';

    filteredItems.forEach((item, index) => {
        const itemElement = createPortfolioItem(item, index);
        portfolioGrid.appendChild(itemElement);
        itemElement.addEventListener('click', () => openLightbox(item));
    });

    setTimeout(() => {
        document.querySelectorAll('.masonry-item').forEach((item) => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }, 60);
}

function createPortfolioItem(item, index) {
    const div = document.createElement('div');
    div.className = 'masonry-item portfolio-item opacity-0 transform translate-y-4 transition-all duration-500 cursor-pointer';
    div.style.transitionDelay = `${index * 55}ms`;
    div.setAttribute('data-category', item.category);

    const categoryNames = {
        branding: 'Branding',
        logo: 'Logo Design',
        photography: 'Fotografía'
    };

    div.innerHTML = `
        <div class="relative group ${item.height}">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" loading="lazy">
            <div class="portfolio-overlay absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                <span class="text-[10px] font-bold text-[#c5d0df] uppercase tracking-[0.2em] mb-3">${categoryNames[item.category]}</span>
                <h3 class="font-display text-xl md:text-2xl text-white mb-2">${item.title}</h3>
                <p class="text-xs text-[#9eabbe] leading-relaxed">${item.description}</p>
            </div>
        </div>
    `;

    return div;
}

function setupCategoryFilter() {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            renderPortfolio(category);
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}
