// Portfolio Grid Component with Category Filter Tabs & Red Light Sweep Hover Animations

import { renderProjectModal, populateProjectModal } from './ProjectModal.js';

export function renderPortfolio(projects) {
    const categories = ['ALL', 'COMMERCIAL', 'REELS', 'CINEMATIC', 'MOTION GRAPHICS', 'SOCIAL MEDIA'];

    return `
    <section id="portfolio" class="py-24 relative overflow-hidden bg-brand-dark/95 border-t border-white/5">
        
        <!-- Ambient Red/Blue Background Glow -->
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <!-- Section Header -->
            <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
                <span class="text-xs font-mono tracking-[0.3em] text-brand-red uppercase text-glow-red">SELECTED PORTFOLIO</span>
                <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">
                    SELECTED WORK
                </h2>
                <div class="w-24 h-1 bg-gradient-to-r from-brand-red to-brand-blue mx-auto rounded-full mt-4"></div>
            </div>

            <!-- Category Filter Tabs -->
            <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16" id="portfolio-category-tabs">
                ${categories.map((cat, idx) => `
                    <button data-category="${cat}" class="category-tab-btn px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 ${idx === 0 ? 'bg-brand-red text-white shadow-lg shadow-brand-red/40 border border-brand-red' : 'bg-brand-card/80 text-slate-300 border border-white/10 hover:border-brand-red/50 hover:text-white'}">
                        ${cat}
                    </button>
                `).join('')}
            </div>

            <!-- Projects Masonry Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
                ${renderProjectCards(projects, 'ALL')}
            </div>

        </div>
    </section>

    <!-- Render Modal Container -->
    ${renderProjectModal()}
    `;
}

function renderProjectCards(projects, activeCategory) {
    const filtered = activeCategory === 'ALL' 
        ? projects.filter(p => p.published !== false)
        : projects.filter(p => p.published !== false && p.category.toUpperCase() === activeCategory);

    if (filtered.length === 0) {
        return `
            <div class="col-span-full py-16 text-center text-slate-400 font-mono text-sm">
                NO PROJECTS FOUND IN THIS CATEGORY.
            </div>
        `;
    }

    return filtered.map(project => `
        <div data-project-id="${project.id}" class="portfolio-card group relative rounded-2xl overflow-hidden glass-panel border border-brand-card-border hover:border-brand-red/70 shadow-xl transition-all duration-500 hover:-translate-y-2 play-trigger cursor-pointer flex flex-col">
            
            <!-- Corner Web Accent Lines -->
            <div class="corner-web-top-left opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="corner-web-bottom-right opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <!-- Thumbnail Container -->
            <div class="relative aspect-video w-full overflow-hidden bg-brand-dark">
                <img src="${project.thumbnail}" 
                     alt="${project.title}" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100">
                
                <!-- Dark Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>

                <!-- Red Light Sweep Effect -->
                <div class="light-sweep"></div>

                <!-- Category Badge -->
                <div class="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-brand-red/40 font-mono text-[10px] font-bold text-brand-red uppercase">
                    ${project.category}
                </div>

                <!-- Play Icon Badge (Appears on Hover) -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <div class="w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg shadow-brand-red/80 border border-white/30">
                        <i data-lucide="play" class="w-7 h-7 ml-0.5 fill-current"></i>
                    </div>
                </div>
            </div>

            <!-- Card Bottom Content -->
            <div class="p-6 flex-1 flex flex-col justify-between space-y-3 bg-brand-card/60">
                <div>
                    <h3 class="text-2xl font-display font-bold text-white tracking-wide uppercase group-hover:text-brand-red group-hover:-translate-y-1 transition-all duration-300">
                        ${project.title}
                    </h3>
                    <p class="text-slate-300 text-xs font-light line-clamp-2 mt-1">
                        ${project.shortDesc}
                    </p>
                </div>

                <div class="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400">
                    <span class="flex items-center gap-1.5 text-brand-blue">
                        <i data-lucide="film" class="w-3.5 h-3.5"></i>
                        ${project.client || 'Featured Edit'}
                    </span>
                    <span class="group-hover:text-brand-red transition-colors flex items-center gap-1">
                        VIEW CUT →
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

export function initPortfolioEvents(projects) {
    const tabsContainer = document.getElementById('portfolio-category-tabs');
    const gridContainer = document.getElementById('portfolio-grid');
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-project-modal');

    if (!gridContainer || !modal) return;

    // Open Modal function
    const openModalForProject = (project) => {
        populateProjectModal(project, projects, openModalForProject);
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    };

    // Close Modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            const iframe = modal.querySelector('iframe');
            if (iframe) iframe.src = '';
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            const iframe = modal.querySelector('iframe');
            if (iframe) iframe.src = '';
        }
    });

    // Attach click listeners to cards
    const attachCardClickListeners = () => {
        const cards = document.querySelectorAll('.portfolio-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const projId = card.getAttribute('data-project-id');
                const selected = projects.find(p => p.id === projId);
                if (selected) {
                    openModalForProject(selected);
                }
            });
        });
    };

    attachCardClickListeners();

    // Category Tabs Filtering
    if (tabsContainer) {
        const tabBtns = tabsContainer.querySelectorAll('.category-tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');

                tabBtns.forEach(b => {
                    b.className = 'category-tab-btn px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-brand-card/80 text-slate-300 border border-white/10 hover:border-brand-red/50 hover:text-white';
                });

                btn.className = 'category-tab-btn px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-brand-red text-white shadow-lg shadow-brand-red/40 border border-brand-red';

                gridContainer.innerHTML = renderProjectCards(projects, category);
                if (window.lucide) window.lucide.createIcons();
                attachCardClickListeners();
            });
        });
    }
}
