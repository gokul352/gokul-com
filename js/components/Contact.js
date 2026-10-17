// Contact Section Component with Dramatic CTA, Form & Social Web Nodes

export function renderContact(contactData) {
    return `
    <section id="contact" class="py-24 relative overflow-hidden bg-brand-panel border-t border-white/5">
        
        <!-- Red Glowing Ambient Light -->
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <!-- Left Dramatic CTA & Info -->
                <div class="lg:col-span-5 space-y-6">
                    <span class="text-xs font-mono tracking-[0.3em] text-brand-red uppercase text-glow-red">GET IN TOUCH</span>
                    
                    <h2 class="text-5xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[0.95] uppercase text-glow-red">
                        ${contactData.headline}
                    </h2>

                    <p class="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                        ${contactData.subtitle}
                    </p>

                    <!-- Quick Action Buttons -->
                    <div class="flex flex-wrap items-center gap-4 pt-4">
                        <a href="mailto:${contactData.email}" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-red text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-brand-red-glow shadow-lg shadow-brand-red/30 transition-all">
                            <i data-lucide="mail" class="w-4 h-4"></i>
                            <span>EMAIL ME DIRECTLY</span>
                        </a>

                        <div class="px-4 py-3 rounded-xl bg-brand-card/80 border border-white/10 text-slate-300 font-mono text-xs">
                            📍 ${contactData.location}
                        </div>
                    </div>

                    <!-- Social Web Links Grid -->
                    <div class="pt-8 space-y-3">
                        <h4 class="text-xs font-mono text-brand-blue tracking-widest uppercase">CONNECT ON SOCIAL</h4>
                        <div class="grid grid-cols-2 gap-3 font-mono text-xs">
                            ${contactData.socials.map(soc => `
                                <a href="${soc.url}" target="_blank" rel="noopener noreferrer" class="p-3 rounded-xl bg-brand-card/80 border border-white/10 hover:border-brand-red text-slate-300 hover:text-white flex items-center justify-between group transition-colors">
                                    <span>${soc.name}</span>
                                    <i data-lucide="external-link" class="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-red transition-colors"></i>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Right Contact Form Card -->
                <div class="lg:col-span-7">
                    <div class="glass-panel-glow p-8 rounded-3xl border-2 border-brand-red/40 shadow-2xl relative">
                        <h3 class="text-2xl font-display font-bold text-white tracking-wide uppercase mb-6 flex items-center gap-2">
                            <i data-lucide="send" class="w-6 h-6 text-brand-red"></i>
                            <span>START A PROJECT</span>
                        </h3>

                        <form id="contact-form" class="space-y-5">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label class="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">YOUR NAME *</label>
                                    <input type="text" required placeholder="John Doe" class="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-red font-mono text-sm transition-colors">
                                </div>
                                <div>
                                    <label class="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">YOUR EMAIL *</label>
                                    <input type="email" required placeholder="john@brand.com" class="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-red font-mono text-sm transition-colors">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label class="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">PROJECT TYPE</label>
                                    <select class="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-white/10 text-white focus:outline-none focus:border-brand-red font-mono text-sm transition-colors">
                                        <option value="Commercial Edit">Commercial Edit</option>
                                        <option value="Cinematic Brand Film">Cinematic Brand Film</option>
                                        <option value="Music Video">Music Video</option>
                                        <option value="Social Media Campaign">Social Media Campaign</option>
                                        <option value="Color Grading & VFX">Color Grading & VFX</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">ESTIMATED BUDGET</label>
                                    <select class="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-white/10 text-white focus:outline-none focus:border-brand-red font-mono text-sm transition-colors">
                                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                                        <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                                        <option value="$7,000 - $15,000">$7,000 - $15,000</option>
                                        <option value="$15,000+">$15,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">PROJECT DETAILS / STORY BRIEF *</label>
                                <textarea required rows="4" placeholder="Tell me about your footage, timeline, and creative vision..." class="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-red font-mono text-sm transition-colors"></textarea>
                            </div>

                            <button type="submit" class="w-full py-4 rounded-xl bg-gradient-to-r from-brand-red to-brand-red-dark text-white font-mono font-bold text-sm tracking-widest uppercase shadow-xl shadow-brand-red/40 hover:shadow-brand-red/70 hover:scale-[1.01] transition-all duration-300 border border-brand-red-glow">
                                SEND PROJECT BRIEF
                            </button>
                        </form>

                        <!-- Toast Notification Container -->
                        <div id="contact-toast" class="hidden absolute top-4 right-4 bg-brand-red text-white px-4 py-2 rounded-xl text-xs font-mono font-bold shadow-2xl animate-bounce">
                            ✓ MESSAGE SENT! ILL GET BACK TO YOU WITHIN 24 HOURS.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
    `;
}

export function initContactEvents() {
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('contact-toast');

    if (form && toast) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            toast.classList.remove('hidden');
            form.reset();

            setTimeout(() => {
                toast.classList.add('hidden');
            }, 5000);
        });
    }
}
