// Footer Component with Copyright, Animated Web Graphic & Back-to-Top Button

export function renderFooter() {
    return `
    <footer class="py-10 bg-brand-dark border-t border-white/10 relative overflow-hidden font-mono text-xs text-slate-400">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <!-- Left Branding & Web Icon -->
            <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-md bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red">
                    <svg class="w-4 h-4 animate-spin" style="animation-duration: 12s;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M12 3v18M3 12h18"/>
                    </svg>
                </div>
                <span>© 2026 AJ EDITS. ALL RIGHTS RESERVED.</span>
            </div>

            <!-- Middle Tagline -->
            <div class="text-slate-500 text-[11px]">
                SUPERHERO VISUAL ENERGY • HOLLYWOOD EDITOR PORTFOLIO
            </div>

            <!-- Right Back to Top Button -->
            <a href="#hero" class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-card hover:bg-brand-red hover:text-white transition-colors border border-white/10">
                <span>TOP</span>
                <i data-lucide="arrow-up" class="w-3.5 h-3.5"></i>
            </a>

        </div>
    </footer>
    `;
}
