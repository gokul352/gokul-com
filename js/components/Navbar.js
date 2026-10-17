// Sticky Glassmorphism Header Component with Monogram Logo and CMS Launcher

export function renderNavbar(data, onOpenAdmin) {
    return `
    <header id="navbar" class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 glass-panel border-b border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            <!-- Monogram Logo -->
            <a href="#hero" class="group flex items-center gap-3 font-display text-2xl tracking-wider text-white">
                <div class="relative w-10 h-10 rounded-lg bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center font-bold text-white shadow-lg shadow-brand-red/30 group-hover:scale-105 transition-transform duration-300 border border-brand-red-glow/40">
                    <!-- Web Spider Icon Vector -->
                    <svg class="w-6 h-6 text-white animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M12 2v8M12 14v8M2 12h8M14 12h8M5 5l5 5M14 14l5 5M19 5l-5 5M10 14l-5 5"></path>
                    </svg>
                </div>
                <div class="flex flex-col">
                    <span class="text-white font-extrabold tracking-widest leading-none text-xl group-hover:text-brand-red transition-colors">AJ EDITS</span>
                    <span class="text-[9px] font-mono tracking-widest text-slate-400">CINEMATIC VIDEO EDITOR</span>
                </div>
            </a>

            <!-- Desktop Nav Links -->
            <nav class="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
                <a href="#portfolio" class="nav-link text-slate-300 hover:text-brand-red transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">WORK</a>
                <a href="#showreel" class="nav-link text-slate-300 hover:text-brand-red transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">SHOWREEL</a>
                <a href="#services" class="nav-link text-slate-300 hover:text-brand-red transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">SERVICES</a>
                <a href="#about" class="nav-link text-slate-300 hover:text-brand-red transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">ABOUT</a>
                <a href="#contact" class="nav-link text-slate-300 hover:text-brand-red transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all">CONTACT</a>
            </nav>

            <!-- Actions: Admin Panel Button & Mobile Toggle -->
            <div class="flex items-center gap-4">
                <button id="admin-trigger-btn" class="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-brand-red/10 border border-brand-red/30 hover:bg-brand-red hover:text-white text-brand-red text-xs font-mono font-bold tracking-wider transition-all duration-300 shadow-sm">
                    <span class="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
                    <i data-lucide="sliders" class="w-3.5 h-3.5"></i>
                    <span>CMS ADMIN</span>
                </button>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="md:hidden text-slate-300 hover:text-white p-2" aria-label="Toggle Navigation Menu">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Dropdown Menu -->
        <div id="mobile-menu" class="hidden md:hidden px-6 pt-4 pb-6 bg-brand-card border-b border-brand-card-border mt-3 space-y-4 font-mono text-sm">
            <a href="#portfolio" class="mobile-nav-link block text-slate-300 hover:text-brand-red">WORK</a>
            <a href="#showreel" class="mobile-nav-link block text-slate-300 hover:text-brand-red">SHOWREEL</a>
            <a href="#services" class="mobile-nav-link block text-slate-300 hover:text-brand-red">SERVICES</a>
            <a href="#about" class="mobile-nav-link block text-slate-300 hover:text-brand-red">ABOUT</a>
            <a href="#contact" class="mobile-nav-link block text-slate-300 hover:text-brand-red">CONTACT</a>
        </div>
    </header>
    `;
}

export function initNavbarEvents(onOpenAdmin) {
    const adminBtn = document.getElementById('admin-trigger-btn');
    if (adminBtn) {
        adminBtn.addEventListener('click', () => onOpenAdmin());
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }
}
