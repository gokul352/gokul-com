// Process Section Component ("FROM RAW TO WOW") with Vertical Web Line Timeline

export function renderProcess(processData) {
    return `
    <section id="process" class="py-24 relative overflow-hidden bg-brand-panel border-t border-white/5">
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <!-- Header -->
            <div class="text-center max-w-3xl mx-auto mb-20 space-y-3">
                <span class="text-xs font-mono tracking-[0.3em] text-brand-blue uppercase text-glow-blue">CREATIVE WORKFLOW</span>
                <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">
                    FROM RAW TO WOW
                </h2>
                <div class="w-24 h-1 bg-brand-red mx-auto rounded-full mt-4"></div>
            </div>

            <!-- Vertical Web Line 5-Step Process Timeline -->
            <div class="relative max-w-4xl mx-auto">
                
                <!-- Vertical Web Line Connector -->
                <div class="absolute top-0 bottom-0 left-6 sm:left-1/2 w-1 bg-gradient-to-b from-brand-red via-brand-blue to-brand-red -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(255,30,67,0.5)] z-0"></div>

                <div class="space-y-12 relative z-10">
                    ${processData.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return `
                        <div class="relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''}">
                            
                            <!-- Step Content Card -->
                            <div class="w-full sm:w-1/2 pl-14 sm:pl-0 ${isEven ? 'sm:pl-10 text-left' : 'sm:pr-10 sm:text-right'}">
                                <div class="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-brand-red/60 transition-all duration-300 group hover:-translate-y-1">
                                    <span class="text-xs font-mono text-brand-red tracking-widest font-bold block mb-1 uppercase">PHASE ${step.number}</span>
                                    <h3 class="text-2xl font-display font-bold text-white tracking-wider uppercase group-hover:text-brand-red transition-colors">
                                        ${step.title}
                                    </h3>
                                    <p class="text-slate-300 text-sm font-light leading-relaxed mt-2">
                                        ${step.desc}
                                    </p>
                                </div>
                            </div>

                            <!-- Center Web Node Badge -->
                            <div class="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-dark border-2 border-brand-red text-white font-mono font-extrabold text-sm flex items-center justify-center shadow-xl shadow-brand-red/40 z-20">
                                ${step.number}
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>

        </div>
    </section>
    `;
}
