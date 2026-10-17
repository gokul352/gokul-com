// About Section Component with Bio, Animated Stat Counters & Pipeline Timeline

export function renderAbout(aboutData) {
    return `
    <section id="about" class="py-24 relative overflow-hidden bg-brand-dark/90 border-t border-white/5">
        
        <!-- Ambient Red Glow -->
        <div class="absolute top-1/2 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <!-- Section Header -->
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <span class="text-xs font-mono tracking-[0.3em] text-brand-red uppercase text-glow-red">BIOGRAPHY & WORKFLOW</span>
                <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">
                    ${aboutData.heading}
                </h2>
                <div class="w-24 h-1 bg-gradient-to-r from-brand-red to-brand-blue mx-auto rounded-full mt-4"></div>
            </div>

            <!-- Bio Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                
                <!-- Left Video Editor Frame / Profile Image -->
                <div class="lg:col-span-5 relative">
                    <div class="relative rounded-2xl overflow-hidden glass-panel-glow border-2 border-brand-red/40 p-2 shadow-2xl group">
                        <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80" 
                             alt="Video Editor Studio Setup" 
                             class="w-full h-80 object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105">
                        
                        <!-- HUD Overlay Badge -->
                        <div class="absolute top-4 left-4 bg-brand-dark/90 border border-brand-red/40 px-3 py-1.5 rounded-lg text-[10px] font-mono text-brand-red uppercase tracking-wider">
                            REC ● 00:24:19:12
                        </div>

                        <div class="absolute bottom-4 right-4 bg-brand-card/90 border border-brand-blue/40 px-3 py-1.5 rounded-lg text-xs font-mono text-brand-blue uppercase tracking-wider">
                            STUDIO SUITE 01
                        </div>
                    </div>
                </div>

                <!-- Right Copy & Stats -->
                <div class="lg:col-span-7 space-y-6">
                    <h3 class="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
                        ${aboutData.subheading}
                    </h3>
                    
                    <p class="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                        ${aboutData.bioParagraph1}
                    </p>

                    <p class="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                        ${aboutData.bioParagraph2}
                    </p>

                    <!-- Stats 4-Grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                        ${aboutData.stats.map(stat => `
                            <div class="p-4 rounded-xl bg-brand-card/80 border border-brand-card-border hover:border-brand-red/50 transition-colors text-center group">
                                <div class="text-3xl sm:text-4xl font-display font-extrabold text-brand-red text-glow-red group-hover:scale-110 transition-transform">
                                    ${stat.value}
                                </div>
                                <div class="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-1">
                                    ${stat.text}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Workflow Pipeline Timeline -->
            <div class="mt-20">
                <div class="text-center mb-10">
                    <h3 class="text-xl font-mono tracking-widest text-brand-blue uppercase">EDITING PIPELINE</h3>
                    <p class="text-xs text-slate-400 font-mono mt-1">HOW RAW FOOTAGE TRANSFORMS INTO A MASTERPIECE</p>
                </div>

                <!-- Animated Step Pipeline -->
                <div class="relative grid grid-cols-1 md:grid-cols-5 gap-4">
                    
                    <!-- Connecting Horizontal Line for Desktop -->
                    <div class="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red via-brand-blue to-brand-red -translate-y-1/2 z-0 opacity-40"></div>

                    ${aboutData.timeline.map((item, idx) => `
                        <div class="relative z-10 glass-panel p-5 rounded-xl border border-white/10 hover:border-brand-red/60 transition-all duration-300 group hover:-translate-y-2 text-center">
                            
                            <!-- Step Badge Node -->
                            <div class="w-10 h-10 rounded-full bg-brand-dark border-2 border-brand-red text-brand-red font-mono font-bold text-xs flex items-center justify-center mx-auto mb-3 shadow-lg shadow-brand-red/20 group-hover:bg-brand-red group-hover:text-white transition-colors">
                                ${item.step}
                            </div>

                            <h4 class="font-display text-lg tracking-wider text-white uppercase group-hover:text-brand-red transition-colors">
                                ${item.title}
                            </h4>

                            <p class="text-xs font-mono text-slate-400 mt-1">
                                ${item.desc}
                            </p>

                            <!-- Web connector dot -->
                            <div class="w-1.5 h-1.5 rounded-full bg-brand-blue mx-auto mt-3 animate-ping"></div>
                        </div>
                    `).join('')}
                </div>
            </div>

        </div>
    </section>
    `;
}
