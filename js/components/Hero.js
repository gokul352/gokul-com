// Full-Screen Cinematic Hero Component with Vector Silhouette & Animated Web Strands

export function renderHero(heroData) {
    return `
    <section id="hero" class="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden web-grid-pattern">
        
        <!-- Animated Background Web Strands Grid Overlay -->
        <div class="absolute inset-0 pointer-events-none opacity-40">
            <svg class="w-full h-full text-brand-red/20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M0,0 L1000,1000 M1000,0 L0,1000 M500,0 L500,1000 M0,500 L1000,500" stroke="currentColor" stroke-width="0.5" stroke-dasharray="8 6" class="animate-web-pulse"></path>
                <circle cx="500" cy="500" r="200" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="4 4"></circle>
                <circle cx="500" cy="500" r="380" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="6 6"></circle>
            </svg>
        </div>

        <!-- Hero Content Container -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Text Content -->
            <div class="lg:col-span-7 flex flex-col space-y-6 text-left">
                
                <!-- Status Badge -->
                <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 w-max shadow-lg">
                    <span class="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
                    <span class="text-xs font-mono font-bold tracking-widest text-brand-red uppercase">${heroData.badge || 'AVAILABLE FOR FREELANCE & COMMERCIAL'}</span>
                </div>

                <!-- Subtitle -->
                <p class="text-xs sm:text-sm font-mono tracking-[0.3em] text-brand-blue uppercase text-glow-blue">
                    ${heroData.subtitle}
                </p>

                <!-- Headline -->
                <h1 class="text-6xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[0.9] text-glow-red">
                    ${heroData.headline}
                </h1>

                <!-- Supporting Text -->
                <p class="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl font-light leading-relaxed">
                    ${heroData.description}
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-wrap items-center gap-4 pt-4">
                    <a href="#portfolio" class="btn group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-red to-brand-red-dark text-white font-mono font-bold text-sm tracking-wider uppercase shadow-xl shadow-brand-red/30 hover:shadow-brand-red/60 hover:scale-105 transition-all duration-300 border border-brand-red-glow">
                        <span>${heroData.primaryCta}</span>
                        <i data-lucide="arrow-down-right" class="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></i>
                    </a>

                    <a href="#contact" class="btn group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-card/80 border border-slate-700 hover:border-brand-blue text-slate-200 hover:text-white font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-brand-card">
                        <span>${heroData.secondaryCta}</span>
                        <i data-lucide="send" class="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>

                <!-- Quick Visual Specs -->
                <div class="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg font-mono text-xs text-slate-400">
                    <div class="flex items-center gap-2">
                        <i data-lucide="film" class="w-4 h-4 text-brand-red"></i>
                        <span>4K / RAW Workflow</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i data-lucide="zap" class="w-4 h-4 text-brand-blue"></i>
                        <span>High Retention</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i data-lucide="disc" class="w-4 h-4 text-brand-red"></i>
                        <span>Custom Audio Mix</span>
                    </div>
                </div>
            </div>

            <!-- Right Graphic: Abstract Original Superhero / Web-Slinger Emblem -->
            <div class="lg:col-span-5 flex justify-center items-center relative">
                
                <!-- Glowing Outer Rings -->
                <div class="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-red/10 blur-3xl animate-pulse"></div>
                <div class="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-brand-blue/10 blur-2xl animate-pulse" style="animation-delay: 1.5s;"></div>

                <!-- Vector Abstract Superhero Web-Slinger Emblem Frame -->
                <div class="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl glass-panel-glow flex items-center justify-center p-8 border-2 border-brand-red/50 shadow-2xl animate-float">
                    
                    <!-- Corner Accent Web Vectors -->
                    <div class="corner-web-top-left"></div>
                    <div class="corner-web-bottom-right"></div>

                    <!-- Abstract Original Web-Slinger Symbol SVG -->
                    <svg class="w-full h-full text-brand-red drop-shadow-[0_0_20px_rgba(255,30,67,0.8)]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Outer Shield -->
                        <polygon points="100,10 180,50 180,150 100,190 20,150 20,50" stroke="#ff1e43" stroke-width="2.5" fill="rgba(13,19,34,0.6)"></polygon>
                        <!-- Web Strands Inside Shield -->
                        <path d="M100,10 L100,190 M20,50 L180,150 M180,50 L20,150" stroke="rgba(255,30,67,0.4)" stroke-width="1.5" stroke-dasharray="4 4"></path>
                        <circle cx="100" cy="100" r="40" stroke="#00f0ff" stroke-width="1.5" fill="none"></circle>
                        <circle cx="100" cy="100" r="70" stroke="rgba(255,30,67,0.3)" stroke-width="1" fill="none"></circle>
                        <!-- Stylized Geometric Vector Web Mask / Lenses -->
                        <path d="M60,80 Q100,120 100,140 Q100,120 140,80 Q100,60 60,80 Z" fill="url(#lensGrad)" stroke="#ff1e43" stroke-width="2.5"></path>
                        <!-- Center Core Light -->
                        <circle cx="100" cy="100" r="6" fill="#00f0ff" class="animate-ping"></circle>
                        
                        <defs>
                            <linearGradient id="lensGrad" x1="60" y1="60" x2="140" y2="140" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ff1e43" stop-opacity="0.8"/>
                                <stop offset="1" stop-color="#00f0ff" stop-opacity="0.4"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <!-- Overlay Text Badge -->
                    <div class="absolute bottom-4 left-4 right-4 bg-brand-card/90 border border-brand-red/30 rounded-xl p-3 backdrop-blur-md flex items-center justify-between font-mono text-xs">
                        <span class="text-slate-300 font-bold">CINEMATIC FRAME CUT</span>
                        <span class="text-brand-red font-bold">24 FPS • 4K</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Scroll Indicator -->
        <a href="#about" class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-brand-red font-mono text-xs transition-colors">
            <span>SCROLL DOWN</span>
            <i data-lucide="chevron-down" class="w-4 h-4 animate-bounce text-brand-red"></i>
        </a>
    </section>
    `;
}
