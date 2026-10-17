// Custom Web-Slinger Reticle Cursor & Magnetic Interaction Controller

export class CustomCursorController {
    constructor() {
        this.cursor = document.getElementById('custom-cursor');
        if (!this.cursor) return;

        this.mouse = { x: -100, y: -100 };
        this.pos = { x: -100, y: -100 };
        this.speed = 0.25;

        this.init();
    }

    init() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        this.attachHoverListeners();

        // Re-attach hover listeners when DOM changes (e.g. category filter, admin updates)
        const observer = new MutationObserver(() => this.attachHoverListeners());
        observer.observe(document.body, { childList: true, subtree: true });

        this.render();
    }

    attachHoverListeners() {
        if (!this.cursor) return;

        // Button hovers -> expand cursor
        const buttons = document.querySelectorAll('button, a.btn, .magnetic-btn, .nav-link');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => this.cursor.classList.add('hovering-button'));
            btn.addEventListener('mouseleave', () => this.cursor.classList.remove('hovering-button'));
        });

        // Portfolio video cards hovers -> transform cursor to "PLAY"
        const videoCards = document.querySelectorAll('.portfolio-card, .showreel-card, .play-trigger');
        videoCards.forEach(card => {
            card.addEventListener('mouseenter', () => this.cursor.classList.add('hovering-play'));
            card.addEventListener('mouseleave', () => this.cursor.classList.remove('hovering-play'));
        });
    }

    render() {
        if (this.cursor) {
            this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
            this.pos.y += (this.mouse.y - this.pos.y) * this.speed;

            this.cursor.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0) translate(-50%, -50%)`;
        }

        requestAnimationFrame(() => this.render());
    }
}
