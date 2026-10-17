// Showreel Section Component with Large Cinematic Video Card & Modal Overlay

export function renderShowreel(showreelData) {
    return `
    <section id="showreel" class="py-24 relative overflow-hidden bg-brand-panel border-t border-b border-white/5">
        
        <!-- Ambient Background Lights -->
        <div class="absolute -top-32 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <!-- Header -->
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <span class="text-xs font-mono tracking-[0.3em] text-brand-blue uppercase text-glow-blue">FEATURED EDIT</span>
                <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">
                    ${showreelData.title}
                </h2>
                <p class="text-slate-400 font-mono text-xs sm:text-sm tracking-wider">
                    ${showreelData.subtitle}
                </p>
                <div class="w-24 h-1 bg-brand-red mx-auto rounded-full mt-4"></div>
            </div>

            <!-- Large Video Showcase Card -->
            <div class="relative max-w-5xl mx-auto rounded-3xl overflow-hidden glass-panel-glow border-2 border-brand-red/60 shadow-[0_0_50px_rgba(255,30,67,0.25)] group play-trigger cursor-pointer" id="showreel-play-btn">
                
                <!-- Poster Thumbnail Image -->
                <div class="relative aspect-video w-full overflow-hidden bg-brand-dark">
                    <img src="${showreelData.thumbnail}" 
                         alt="Showreel Reel Thumbnail" 
                         class="w-full h-full object-cover filter brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700">
                    
                    <!-- Gradient Dark Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent"></div>

                    <!-- Red Light Sweep Effect on Hover -->
                    <div class="light-sweep"></div>

                    <!-- Center Play Overlay Button -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-red/90 text-white flex items-center justify-center shadow-2xl shadow-brand-red/80 border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                            <i data-lucide="play" class="w-10 h-10 ml-1 fill-current"></i>
                        </div>
                    </div>

                    <!-- Overlay Details Header -->
                    <div class="absolute top-6 left-6 right-6 flex justify-between items-center font-mono text-xs">
                        <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-white">
                            <span class="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
                            <span>OFFICIAL REEL 2026</span>
                        </div>
                        <div class="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-brand-blue">
                            4K HDR • 60 FPS
                        </div>
                    </div>

                    <!-- Bottom Title & Specs -->
                    <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-sans">
                        <div>
                            <span class="text-xs font-mono text-brand-red uppercase tracking-widest">PLAY SHOWREEL</span>
                            <h3 class="text-2xl sm:text-3xl font-display font-bold text-white tracking-wider">
                                AJ EDITS — DIRECTORS CUT
                            </h3>
                            <p class="text-slate-300 text-xs sm:text-sm font-light max-w-xl mt-1">
                                ${showreelData.description}
                            </p>
                        </div>
                        <button class="px-6 py-3 rounded-xl bg-brand-red text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-brand-red-glow transition-colors shrink-0">
                            CLICK TO WATCH
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Showreel Fullscreen Video Modal -->
    <div id="showreel-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-8">
        <div class="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-brand-red/50 shadow-2xl bg-black">
            
            <!-- Close Button -->
            <button id="close-showreel-modal" class="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:text-brand-red flex items-center justify-center transition-colors">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>

            <!-- Embedded Video Player -->
            <iframe id="showreel-iframe" class="w-full h-full" src="" title="Showreel Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    `;
}

export function initShowreelEvents(showreelData) {
    const playBtn = document.getElementById('showreel-play-btn');
    const modal = document.getElementById('showreel-modal');
    const closeBtn = document.getElementById('close-showreel-modal');
    const iframe = document.getElementById('showreel-iframe');

    if (playBtn && modal && closeBtn && iframe) {
        playBtn.addEventListener('click', () => {
            iframe.src = showreelData.videoUrl;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });

        closeBtn.addEventListener('click', () => {
            iframe.src = '';
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                iframe.src = '';
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    }
}
