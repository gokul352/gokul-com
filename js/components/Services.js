// Services Section Component with 4 Premium Animated Service Cards

export function renderServices(servicesData) {
    const serviceIcons = {
        film: `<svg class="w-8 h-8 text-brand-red group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>`,
        palette: `<svg class="w-8 h-8 text-brand-blue group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.75 1.7-1.68 0-.44-.17-.86-.46-1.18-.28-.31-.46-.74-.46-1.18 0-.93.75-1.69 1.68-1.69h2.26c2.9 0 5.26-2.36 5.26-5.26 0-5.52-4.48-10-10-10z"/></svg>`,
        sparkles: `<svg class="w-8 h-8 text-brand-red group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
        smartphone: `<svg class="w-8 h-8 text-brand-blue group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`
    };

    return `
    <section id="services" class="py-24 relative overflow-hidden bg-brand-panel border-t border-white/5">
        
        <!-- Background Web Radial Grid -->
        <div class="absolute inset-0 spider-web-bg pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <!-- Header -->
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <span class="text-xs font-mono tracking-[0.3em] text-brand-blue uppercase text-glow-blue">EXPERT CAPABILITIES</span>
                <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">
                    WHAT I DO
                </h2>
                <div class="w-24 h-1 bg-brand-red mx-auto rounded-full mt-4"></div>
            </div>

            <!-- 4 Service Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${servicesData.map((service, index) => `
                    <div class="group relative rounded-2xl glass-panel p-8 border border-white/10 hover:border-brand-red/60 transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between overflow-hidden shadow-xl">
                        
                        <!-- Light Sweep Effect -->
                        <div class="light-sweep"></div>

                        <!-- Top Index & Icon -->
                        <div class="space-y-6">
                            <div class="flex items-center justify-between font-mono text-xs text-slate-400">
                                <span class="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-brand-red font-bold">0${index + 1}</span>
                                <span class="tracking-widest uppercase">SERVICE</span>
                            </div>

                            <div class="w-16 h-16 rounded-2xl bg-brand-card/90 border border-brand-red/30 flex items-center justify-center shadow-lg shadow-brand-red/10 group-hover:border-brand-red group-hover:shadow-brand-red/30 transition-all duration-300">
                                ${serviceIcons[service.icon] || serviceIcons['film']}
                            </div>

                            <h3 class="text-2xl font-display font-bold text-white tracking-wider uppercase group-hover:text-brand-red transition-colors">
                                ${service.title}
                            </h3>

                            <p class="text-slate-300 text-sm font-light leading-relaxed">
                                ${service.description}
                            </p>
                        </div>

                        <!-- Bottom Web Accent Line -->
                        <div class="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-brand-blue group-hover:text-brand-red transition-colors">
                            <span>EXPLORE SERVICE</span>
                            <span class="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </div>
                `).join('')}
            </div>

        </div>
    </section>
    `;
}
