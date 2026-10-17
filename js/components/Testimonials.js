// Testimonials Section Component ("WHAT CLIENTS SAY") with 3 Premium Cards

export function renderTestimonials(testimonialsData) {
    return `
    <section id="testimonials" class="py-24 relative overflow-hidden bg-brand-dark/90 border-t border-white/5">
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <!-- Header -->
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <span class="text-xs font-mono tracking-[0.3em] text-brand-red uppercase text-glow-red">CLIENT ENDORSEMENTS</span>
                <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">
                    WHAT CLIENTS SAY
                </h2>
                <div class="w-24 h-1 bg-brand-red mx-auto rounded-full mt-4"></div>
            </div>

            <!-- Testimonials Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${testimonialsData.map(item => `
                    <div class="glass-panel p-8 rounded-2xl border border-white/10 hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                        
                        <div class="space-y-4">
                            <!-- Star Rating -->
                            <div class="flex items-center gap-1 text-brand-red">
                                ${Array(item.stars || 5).fill(0).map(() => `
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                `).join('')}
                            </div>

                            <!-- Quote -->
                            <p class="text-slate-300 text-sm font-light leading-relaxed italic">
                                "${item.quote}"
                            </p>
                        </div>

                        <!-- Client Profile info -->
                        <div class="pt-6 mt-6 border-t border-white/5 flex items-center gap-4">
                            <img src="${item.avatar}" 
                                 alt="${item.name}" 
                                 class="w-12 h-12 rounded-full object-cover border-2 border-brand-red/40 group-hover:scale-105 transition-transform">
                            <div>
                                <h4 class="font-display text-lg font-bold text-white tracking-wide uppercase group-hover:text-brand-red transition-colors">
                                    ${item.name}
                                </h4>
                                <p class="text-xs font-mono text-slate-400">
                                    ${item.company}
                                </p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

        </div>
    </section>
    `;
}
