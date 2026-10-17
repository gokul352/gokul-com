// Software Skills Section Component ("MY DIGITAL WEAPONS") with Percentage Meters

export function renderSoftware(softwareData) {
    return `
    <section id="software" class="py-24 relative overflow-hidden bg-brand-dark border-t border-white/5">
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <!-- Header -->
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <span class="text-xs font-mono tracking-[0.3em] text-brand-red uppercase text-glow-red">PRODUCTION ARSENAL</span>
                <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">
                    MY DIGITAL WEAPONS
                </h2>
                <div class="w-24 h-1 bg-brand-red mx-auto rounded-full mt-4"></div>
            </div>

            <!-- Software Skills Meters Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${softwareData.map(item => `
                    <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-brand-red/50 transition-all duration-300 group">
                        
                        <!-- Top Header -->
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-brand-card border border-brand-red/30 flex items-center justify-center text-brand-red font-bold font-mono group-hover:scale-110 transition-transform">
                                    <i data-lucide="${item.icon || 'video'}" class="w-5 h-5"></i>
                                </div>
                                <h3 class="font-display text-xl text-white tracking-wide uppercase group-hover:text-brand-red transition-colors">
                                    ${item.name}
                                </h3>
                            </div>
                            <span class="font-mono text-lg font-bold text-brand-red text-glow-red">
                                ${item.percent}%
                            </span>
                        </div>

                        <!-- Skill Meter Bar -->
                        <div class="w-full h-3 rounded-full bg-brand-dark/80 border border-white/10 overflow-hidden p-0.5">
                            <div class="h-full rounded-full bg-gradient-to-r from-brand-red to-brand-blue shadow-md transition-all duration-1000 ease-out" 
                                 style="width: ${item.percent}%;"></div>
                        </div>
                    </div>
                `).join('')}
            </div>

        </div>
    </section>
    `;
}
