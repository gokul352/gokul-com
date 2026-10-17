// Project Detail Modal Component with Interactive Before/After Color Grading Slider & Next Project Navigation

export function renderProjectModal() {
    return `
    <div id="project-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-6 overflow-y-auto">
        <div class="relative w-full max-w-5xl my-8 rounded-2xl glass-panel-glow border-2 border-brand-red/50 bg-brand-dark shadow-2xl text-slate-100 overflow-hidden" id="modal-container">
            <!-- Modal Header Actions -->
            <div class="sticky top-0 z-40 bg-brand-dark/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <span id="modal-category-tag" class="px-3 py-1 rounded-md bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-mono font-bold uppercase">
                        CATEGORY
                    </span>
                    <span id="modal-year-tag" class="text-xs font-mono text-slate-400">
                        2026
                    </span>
                </div>
                <button id="close-project-modal" class="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-colors">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>

            <!-- Modal Content Body -->
            <div class="p-6 sm:p-8 space-y-8" id="modal-body-content">
                <!-- Content will be injected dynamically -->
            </div>
        </div>
    </div>
    `;
}

export function populateProjectModal(project, allProjects, onSelectProject) {
    const modalContent = document.getElementById('modal-body-content');
    const modalCategory = document.getElementById('modal-category-tag');
    const modalYear = document.getElementById('modal-year-tag');

    if (!modalContent) return;

    modalCategory.innerText = project.category;
    modalYear.innerText = project.year || '2026';

    const currentIndex = allProjects.findIndex(p => p.id === project.id);
    const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

    modalContent.innerHTML = `
        <!-- Title & Basic Info -->
        <div class="space-y-2">
            <h2 class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-wide uppercase text-glow-red">
                ${project.title}
            </h2>
            <p class="text-slate-300 text-lg font-light">
                ${project.shortDesc}
            </p>
        </div>

        <!-- Video Player Frame -->
        <div class="relative aspect-video w-full rounded-xl overflow-hidden border border-brand-red/40 bg-black shadow-xl">
            <iframe class="w-full h-full" src="${project.videoUrl}" title="${project.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <!-- Metadata Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-brand-card/90 border border-brand-card-border font-mono text-xs">
            <div>
                <span class="text-slate-400 block uppercase">CLIENT</span>
                <span class="text-white font-bold text-sm">${project.client || 'N/A'}</span>
            </div>
            <div>
                <span class="text-slate-400 block uppercase">MY ROLE</span>
                <span class="text-brand-red font-bold text-sm">${project.role || 'Editor'}</span>
            </div>
            <div>
                <span class="text-slate-400 block uppercase">YEAR</span>
                <span class="text-white font-bold text-sm">${project.year || '2026'}</span>
            </div>
            <div>
                <span class="text-slate-400 block uppercase">SOFTWARE USED</span>
                <span class="text-brand-blue font-bold text-sm">${(project.software || []).join(', ')}</span>
            </div>
        </div>

        <!-- Before / After Color Grading Comparison Slider -->
        <div class="space-y-3 pt-4 border-t border-white/10">
            <div class="flex items-center justify-between font-mono text-xs">
                <span class="text-brand-red font-bold uppercase tracking-wider">BEFORE / AFTER COLOR GRADE SLIDER</span>
                <span class="text-slate-400">DRAG SLIDER TO COMPARE RAW VS FINAL CUT</span>
            </div>

            <div class="before-after-slider relative aspect-video w-full rounded-xl overflow-hidden border border-white/10" id="ba-container">
                <!-- After Image (Bottom Layer) -->
                <img src="${project.afterImage || project.thumbnail}" alt="After Color Grade" class="absolute inset-0 w-full h-full object-cover">
                
                <!-- Before Image (Top Layer, Clipped) -->
                <div class="absolute inset-0 w-full h-full overflow-hidden" id="ba-before-layer" style="width: 50%;">
                    <img src="${project.beforeImage || project.thumbnail}" alt="Before Raw Cut" class="absolute top-0 left-0 w-full h-full object-cover max-w-none" id="ba-before-img">
                </div>

                <!-- Slider Handle -->
                <div class="before-after-handle" id="ba-handle" style="left: 50%;">
                    <div class="before-after-button">↔</div>
                </div>

                <!-- Labels -->
                <div class="absolute top-4 left-4 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono text-slate-300 pointer-events-none">RAW FOOTAGE</div>
                <div class="absolute top-4 right-4 bg-brand-red/90 px-2.5 py-1 rounded text-[10px] font-mono text-white font-bold pointer-events-none">COLOR GRADED</div>
            </div>
        </div>

        <!-- Full Description & Creative Process -->
        <div class="space-y-4 pt-4 border-t border-white/10">
            <h3 class="text-xl font-display font-bold text-white tracking-wide uppercase">PROJECT OVERVIEW</h3>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                ${project.fullDesc || project.shortDesc}
            </p>

            ${project.creativeProcess && project.creativeProcess.length ? `
                <div class="pt-2">
                    <h4 class="text-xs font-mono tracking-widest text-brand-blue uppercase mb-3">CREATIVE PROCESS BREAKDOWN</h4>
                    <ul class="space-y-2 font-mono text-xs text-slate-300">
                        ${project.creativeProcess.map(step => `
                            <li class="flex items-start gap-2.5">
                                <i data-lucide="check-circle-2" class="w-4 h-4 text-brand-red shrink-0 mt-0.5"></i>
                                <span>${step}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>

        <!-- Next Project Button -->
        <div class="pt-6 border-t border-white/10 flex justify-end">
            <button id="next-project-btn" class="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-brand-card hover:bg-brand-red text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 border border-white/10 hover:border-brand-red">
                <span>NEXT PROJECT: ${nextProject.title}</span>
                <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
            </button>
        </div>
    `;

    // Re-initialize Lucide Icons for injected modal content
    if (window.lucide) window.lucide.createIcons();

    // Initialize Before/After Drag Interaction
    initBeforeAfterSlider();

    // Next Project Button Click
    const nextBtn = document.getElementById('next-project-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            onSelectProject(nextProject);
        });
    }
}

function initBeforeAfterSlider() {
    const container = document.getElementById('ba-container');
    const beforeLayer = document.getElementById('ba-before-layer');
    const handle = document.getElementById('ba-handle');
    const beforeImg = document.getElementById('ba-before-img');

    if (!container || !beforeLayer || !handle) return;

    let isDragging = false;

    const setPosition = (x) => {
        const rect = container.getBoundingClientRect();
        let pos = ((x - rect.left) / rect.width) * 100;
        if (pos < 0) pos = 0;
        if (pos > 100) pos = 100;

        beforeLayer.style.width = `${pos}%`;
        handle.style.left = `${pos}%`;
        if (beforeImg) {
            beforeImg.style.width = `${rect.width}px`;
        }
    };

    // Keep image width matching container on resize
    const updateImgWidth = () => {
        const rect = container.getBoundingClientRect();
        if (beforeImg) beforeImg.style.width = `${rect.width}px`;
    };
    updateImgWidth();

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        setPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        setPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    // Touch events for mobile
    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        if (e.touches[0]) setPosition(e.touches[0].clientX);
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        if (e.touches[0]) setPosition(e.touches[0].clientX);
    });

    window.addEventListener('touchend', () => { isDragging = false; });
}
