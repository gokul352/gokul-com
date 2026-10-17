/**
 * ============================================================================
 * 🚀 GRAPHIC DESIGN PORTFOLIO 2026 — MASTER APPLICATION ENGINE
 * ============================================================================
 * Handles dynamic rendering, Behance slide stream, studio grid, lightbox,
 * live in-browser customization, image file uploads, and data export.
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // STATE MANAGEMENT & LOCAL STORAGE
  // --------------------------------------------------------------------------
  const STORAGE_KEY = 'portfolio_2026_custom_data_v1';
  const VIEW_PREF_KEY = 'portfolio_2026_view_mode';
  const THEME_COLOR_KEY = 'portfolio_2026_accent_color';
  const AUTH_STORAGE_KEY = 'portfolio_admin_auth_user';
  const ADMIN_USERNAME = 'Gokul';
  const ADMIN_PASSWORD = 'gokul@2003';

  let currentData = null;
  let currentViewMode = localStorage.getItem(VIEW_PREF_KEY) || 'stream'; // 'stream' or 'grid'
  let activeFilter = 'All';
  let activeLightboxIndex = 0;
  let customizerActiveTab = 'profile';
  let pendingAuthCallback = null;

  // Load data from LocalStorage or fall back to default
  function loadData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        currentData = JSON.parse(saved);
      } else {
        currentData = JSON.parse(JSON.stringify(window.PORTFOLIO_DATA || {}));
      }
    } catch (e) {
      console.warn('Could not parse localStorage data, falling back to default:', e);
      currentData = JSON.parse(JSON.stringify(window.PORTFOLIO_DATA || {}));
    }

    // Apply saved accent color if any
    const savedAccent = localStorage.getItem(THEME_COLOR_KEY);
    if (savedAccent) {
      setAccentColor(savedAccent);
    }
  }

  function saveData(newData) {
    currentData = newData;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
    showToast('✨ Changes saved successfully to browser storage!');
    renderAll();
  }

  function resetToDefaults() {
    if (confirm('Are you sure you want to reset all modifications back to the original Behance portfolio model?')) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(THEME_COLOR_KEY);
      currentData = JSON.parse(JSON.stringify(window.PORTFOLIO_DATA));
      setAccentColor('#ccff00');
      showToast('🔄 Restored original Behance portfolio template!');
      renderAll();
      renderCustomizerContent();
    }
  }

  function setAccentColor(hex) {
    document.documentElement.style.setProperty('--accent', hex);
    document.documentElement.style.setProperty('--accent-glow', hex + '40');
    localStorage.setItem(THEME_COLOR_KEY, hex);
  }

  // --------------------------------------------------------------------------
  // TOAST NOTIFICATIONS
  // --------------------------------------------------------------------------
  function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast-msg font-mono';
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // ICON SAFETY & FALLBACK HELPERS (PREVENTS CRASHES ON OFFLINE/OTHER LAPTOPS)
  // --------------------------------------------------------------------------
  function safeCreateIcons() {
    if (typeof window !== 'undefined' && window.lucide && typeof window.lucide.createIcons === 'function') {
      try {
        window.lucide.createIcons();
      } catch (err) {
        console.warn('Lucide icon notice:', err);
      }
    }
  }

  function getFallbackImage(title) {
    const safeTitle = (title || 'PORTFOLIO SLIDE 2026').replace(/[<>&"]/g, '');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900" viewBox="0 0 1400 900" fill="#0c0c10">
      <rect width="100%" height="100%" fill="#0c0c10"/>
      <rect x="24" y="24" width="1352" height="852" rx="16" fill="none" stroke="#252535" stroke-width="2" stroke-dasharray="10 10"/>
      <circle cx="700" cy="400" r="48" fill="#14141c" stroke="#ccff00" stroke-width="2"/>
      <path d="M685 400 L715 400 M700 385 L700 415" stroke="#ccff00" stroke-width="3" stroke-linecap="round"/>
      <text x="700" y="510" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700">${safeTitle}</text>
      <text x="700" y="555" dominant-baseline="middle" text-anchor="middle" fill="#888899" font-family="monospace" font-size="16">GRAPHIC DESIGN PORTFOLIO 2026</text>
    </svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  // --------------------------------------------------------------------------
  // RENDER PIPELINE
  // --------------------------------------------------------------------------
  function renderAll() {
    renderNavigation();
    renderHero();
    renderStats();
    renderMarquee();
    renderViewMode();
    renderAbout();
    renderContact();
    renderSlideCounterBadge();
    safeCreateIcons();
  }

  // Navigation
  function renderNavigation() {
    const p = currentData.profile;
    const initials = p.name ? p.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() : 'RS';
    
    const brandNameEl = document.getElementById('nav-brand-name');
    if (brandNameEl) {
      brandNameEl.textContent = `${p.name} / ${p.year}`;
    }
    const brandInitialsEl = document.getElementById('nav-brand-initials');
    if (brandInitialsEl) {
      brandInitialsEl.textContent = initials;
    }
  }

  // Hero Section
  function renderHero() {
    const p = currentData.profile;
    const heroTitle = document.getElementById('hero-title');
    const heroDesigner = document.getElementById('hero-designer');
    const heroTagline = document.getElementById('hero-tagline');
    const heroStatus = document.getElementById('hero-status-text');
    const heroDisciplines = document.getElementById('hero-disciplines');

    if (heroTitle) {
      heroTitle.innerHTML = `GRAPHIC DESIGN<br><span class="text-accent underline decoration-2 underline-offset-8">PORTFOLIO</span> ${p.year}`;
    }
    if (heroDesigner) {
      heroDesigner.textContent = p.name;
    }
    if (heroTagline) {
      heroTagline.textContent = p.tagline;
    }
    if (heroStatus) {
      heroStatus.textContent = p.statusBadge;
    }
    if (heroDisciplines && p.disciplines) {
      heroDisciplines.innerHTML = p.disciplines.map(d => `
        <span class="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-accent hover:text-accent transition-colors">
          ${d}
        </span>
      `).join('');
    }
  }

  // Stats Counter
  function renderStats() {
    const statsContainer = document.getElementById('hero-stats-grid');
    if (!statsContainer || !currentData.profile.stats) return;

    statsContainer.innerHTML = currentData.profile.stats.map((s, idx) => `
      <div 
        class="glass-panel p-5 rounded-xl border border-white/10 hover:border-accent/40 transition-all group relative cursor-pointer"
        onclick="window.PortfolioApp.requireAuth(() => { if (window.AdminPanel) window.AdminPanel.open('stats'); else window.PortfolioApp.openCustomizer('profile'); })"
        title="Click to edit counts in Admin Panel"
      >
        <div class="flex items-center justify-between">
          <div class="text-3xl md:text-4xl font-display font-extrabold text-white group-hover:text-accent transition-colors">${s.value}</div>
          <span class="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-accent bg-accent/15 border border-accent/40 rounded px-1.5 py-0.5">
            ✎ Edit Count
          </span>
        </div>
        <div class="text-xs uppercase font-mono tracking-wider text-gray-400 mt-1">${s.label}</div>
      </div>
    `).join('');
  }

  // Infinite Marquee
  function renderMarquee() {
    const marqueeTrack = document.getElementById('marquee-track');
    if (!marqueeTrack) return;

    const items = [
      'BRAND IDENTITY',
      'MOTION GRAPHICS',
      'TYPOGRAPHY',
      'VISUAL DIRECTION',
      'PACKAGING DESIGN',
      'EDITORIAL & POSTERS',
      '3D EXPERIENCES',
      'PORTFOLIO 2026'
    ];

    const stringSnippet = items.map(item => `
      <span class="inline-flex items-center gap-3 mx-4 text-sm md:text-base font-display uppercase tracking-widest text-gray-400">
        <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
        ${item}
      </span>
    `).join('');

    // Duplicate 4 times to ensure seamless infinite loop
    marqueeTrack.innerHTML = stringSnippet + stringSnippet + stringSnippet + stringSnippet;
  }

  // Switch View Modes: Stream (Behance style) vs Studio Grid
  function renderViewMode() {
    const streamContainer = document.getElementById('view-stream-container');
    const gridContainer = document.getElementById('view-grid-container');
    const streamToggleBtn = document.getElementById('toggle-view-stream');
    const gridToggleBtn = document.getElementById('toggle-view-grid');

    if (currentViewMode === 'stream') {
      if (streamContainer) streamContainer.classList.remove('hidden');
      if (gridContainer) gridContainer.classList.add('hidden');

      if (streamToggleBtn) {
        streamToggleBtn.classList.add('bg-accent', 'text-black', 'font-bold');
        streamToggleBtn.classList.remove('text-gray-400', 'bg-transparent');
      }
      if (gridToggleBtn) {
        gridToggleBtn.classList.remove('bg-accent', 'text-black', 'font-bold');
        gridToggleBtn.classList.add('text-gray-400', 'bg-transparent');
      }
      renderBehanceStream();
    } else {
      if (streamContainer) streamContainer.classList.add('hidden');
      if (gridContainer) gridContainer.classList.remove('hidden');

      if (gridToggleBtn) {
        gridToggleBtn.classList.add('bg-accent', 'text-black', 'font-bold');
        gridToggleBtn.classList.remove('text-gray-400', 'bg-transparent');
      }
      if (streamToggleBtn) {
        streamToggleBtn.classList.remove('bg-accent', 'text-black', 'font-bold');
        streamToggleBtn.classList.add('text-gray-400', 'bg-transparent');
      }
      renderStudioGrid();
    }
  }

  // Behance Presentation Continuous Slide Stream
  function renderBehanceStream() {
    const listEl = document.getElementById('behance-stream-list');
    if (!listEl) return;

    const slides = currentData.slides || [];
    listEl.innerHTML = slides.map((slide, idx) => `
      <div id="slide-block-${slide.id}" class="behance-slide-frame relative group w-full border-b border-white/5 last:border-b-0" data-index="${idx}">
        <!-- High-Resolution Slide Image / Motion GIF -->
        <img 
          src="${slide.image}" 
          alt="${slide.title}" 
          loading="${idx < 4 ? 'eager' : 'lazy'}" 
          class="behance-slide-img w-full block cursor-pointer transition-transform duration-300 hover:scale-[1.002]"
          onclick="window.PortfolioApp.openLightbox(${idx})"
          onerror="this.onerror=null; this.src=window.PortfolioApp.getFallbackImage('${(slide.title || '').replace(/'/g, "\\'")}');"
        />

        <!-- Slide Overlay with Details & Quick Action Buttons (Desktop Hover) -->
        <div class="behance-slide-overlay hidden md:flex absolute inset-0 flex-col justify-between p-6 lg:p-8 pointer-events-none">
          <!-- Top Row: Slide Tag & Actions -->
          <div class="flex items-center justify-between pointer-events-auto">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-black/80 backdrop-blur-md text-accent border border-accent/40">
                SLIDE ${String(slide.id).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/10 uppercase">
                ${slide.category || 'Portfolio'}
              </span>
              ${slide.isMotion ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> MOTION</span>` : ''}
            </div>

            <!-- Quick Action Pills -->
            <div class="flex items-center gap-2">
              <button 
                type="button"
                onclick="window.PortfolioApp.openQuickImagePrompt(${slide.id})" 
                class="slide-action-pill px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                title="Swap or upload image for this slide"
              >
                <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                <span>Change Image</span>
              </button>

              <button 
                type="button"
                onclick="window.PortfolioApp.openLightbox(${idx})" 
                class="slide-action-pill px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                title="View full screen"
              >
                <i data-lucide="maximize" class="w-3.5 h-3.5"></i>
                <span>Zoom</span>
              </button>
            </div>
          </div>

          <!-- Bottom Row: Title & Caption -->
          <div class="pointer-events-auto max-w-2xl bg-black/85 backdrop-blur-md p-4 md:p-5 rounded-xl border border-white/10">
            <h3 class="text-lg md:text-xl font-display font-bold text-white mb-1">${slide.title}</h3>
            <p class="text-xs md:text-sm text-gray-300 font-sans">${slide.caption || 'Slide from Graphic Design Portfolio 2026 presentation.'}</p>
          </div>
        </div>

        <!-- Mobile Touch Action Bar (always visible on phones/tablets for easy one-tap access) -->
        <div class="flex md:hidden items-center justify-between p-3 bg-[#0d0d12] border-t border-white/10 text-xs font-mono">
          <div class="flex items-center gap-2 overflow-hidden mr-2">
            <span class="text-accent font-bold shrink-0">#${String(slide.id).padStart(2, '0')}</span>
            <span class="text-white truncate max-w-[150px] font-sans font-medium">${slide.title}</span>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button 
              type="button" 
              onclick="window.PortfolioApp.openLightbox(${idx})" 
              class="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] flex items-center gap-1 cursor-pointer"
            >
              <i data-lucide="maximize" class="w-3 h-3"></i>
              <span>Zoom</span>
            </button>
            <button 
              type="button" 
              onclick="window.PortfolioApp.openQuickImagePrompt(${slide.id})" 
              class="px-2.5 py-1 rounded bg-accent text-black font-bold text-[11px] flex items-center gap-1 cursor-pointer"
            >
              <i data-lucide="edit-3" class="w-3 h-3"></i>
              <span>Swap</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    safeCreateIcons();
  }

  // Studio Grid View with Filter Tabs & Case Studies
  function renderStudioGrid() {
    renderCategoryFilters();
    renderCaseStudiesSection();
    renderFilteredGridProjects();
  }

  function renderCategoryFilters() {
    const filterContainer = document.getElementById('category-filter-container');
    if (!filterContainer) return;

    const categories = ['All', 'Branding', 'Motion Graphics', 'Packaging', 'Editorial', 'Social Media'];
    const slides = currentData.slides || [];

    filterContainer.innerHTML = categories.map(cat => {
      const count = cat === 'All' ? slides.length : slides.filter(s => s.category === cat).length;
      const isActive = activeFilter === cat;
      return `
        <button 
          type="button" 
          onclick="window.PortfolioApp.setCategoryFilter('${cat}')"
          class="filter-btn px-4 py-2 rounded-full text-xs font-mono tracking-wider border border-white/10 uppercase cursor-pointer flex items-center gap-2 ${isActive ? 'active' : 'text-gray-400 bg-white/5 hover:border-white/30'}"
        >
          <span>${cat}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black text-accent' : 'bg-white/10 text-gray-400'}">${count}</span>
        </button>
      `;
    }).join('');
  }

  function renderCaseStudiesSection() {
    const csContainer = document.getElementById('featured-case-studies-list');
    if (!csContainer) return;

    const caseStudies = currentData.caseStudies || [];
    csContainer.innerHTML = caseStudies.map(cs => `
      <div class="project-card rounded-2xl overflow-hidden flex flex-col justify-between group">
        <div class="project-card-img-wrapper aspect-[16/10] w-full cursor-pointer relative" onclick="window.PortfolioApp.jumpToSlide(${cs.slideRange ? cs.slideRange[0] : 1})">
          <img 
            src="${cs.coverImage}" 
            alt="${cs.title}" 
            class="project-card-img w-full h-full object-cover"
            loading="lazy"
            onerror="this.onerror=null; this.src=window.PortfolioApp.getFallbackImage('${(cs.title || '').replace(/'/g, "\\'")}');"
          />
          <div class="absolute top-4 left-4">
            <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/80 backdrop-blur-md text-accent border border-accent/40">
              CASE STUDY ${cs.number}
            </span>
          </div>
          <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="px-3 py-1.5 rounded-full text-xs font-mono bg-accent text-black font-bold flex items-center gap-1 shadow-lg">
              <span>View Case Slides</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </span>
          </div>
        </div>

        <div class="p-6 md:p-8 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
              <span class="text-accent uppercase">${cs.category}</span>
              <span>${cs.year} • ${cs.client}</span>
            </div>
            <h3 class="text-xl md:text-2xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors">${cs.title}</h3>
            <p class="text-sm text-gray-300 font-sans line-clamp-3 mb-6">${cs.description}</p>
          </div>

          <div class="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
            ${(cs.deliverables || []).map(d => `
              <span class="px-2.5 py-1 text-[11px] font-mono rounded bg-white/5 text-gray-300 border border-white/5">
                ${d}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderFilteredGridProjects() {
    const gridContainer = document.getElementById('grid-projects-list');
    if (!gridContainer) return;

    const slides = currentData.slides || [];
    const filtered = activeFilter === 'All' 
      ? slides 
      : slides.filter(s => s.category === activeFilter);

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-span-full py-16 text-center text-gray-400 font-mono">
          No projects found in this category.
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered.map(slide => {
      const realIndex = slides.findIndex(s => s.id === slide.id);
      return `
        <div class="project-card rounded-xl overflow-hidden group flex flex-col justify-between">
          <div class="project-card-img-wrapper aspect-[4/3] w-full relative cursor-pointer" onclick="window.PortfolioApp.openLightbox(${realIndex})">
            <img 
              src="${slide.image}" 
              alt="${slide.title}" 
              class="project-card-img w-full h-full object-cover" 
              loading="lazy"
              onerror="this.onerror=null; this.src=window.PortfolioApp.getFallbackImage('${(slide.title || '').replace(/'/g, "\\'")}');"
            />
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button 
                type="button" 
                onclick="event.stopPropagation(); window.PortfolioApp.openLightbox(${realIndex})"
                class="px-3 py-1.5 rounded-full text-xs font-mono bg-white text-black font-bold flex items-center gap-1 hover:bg-accent transition-colors"
              >
                <i data-lucide="maximize" class="w-3.5 h-3.5"></i>
                <span>Inspect</span>
              </button>
              <button 
                type="button" 
                onclick="event.stopPropagation(); window.PortfolioApp.openQuickImagePrompt(${slide.id})"
                class="px-3 py-1.5 rounded-full text-xs font-mono bg-black/90 text-white font-bold border border-white/20 flex items-center gap-1 hover:border-accent hover:text-accent transition-colors"
              >
                <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                <span>Swap</span>
              </button>
            </div>
            <div class="absolute top-3 left-3">
              <span class="px-2.5 py-0.5 rounded text-[11px] font-mono bg-black/80 text-white border border-white/10">
                #${String(slide.id).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div class="p-4 bg-card">
            <div class="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1">
              <span class="text-accent uppercase">${slide.category}</span>
              ${slide.isMotion ? `<span class="text-emerald-400 font-bold">ANIMATED</span>` : ''}
            </div>
            <h4 class="text-sm font-display font-bold text-white group-hover:text-accent transition-colors truncate">${slide.title}</h4>
            <p class="text-xs text-gray-400 mt-1 line-clamp-2">${slide.caption || ''}</p>
          </div>
        </div>
      `;
    }).join('');

    safeCreateIcons();
  }

  // About Section & Design Principles
  function renderAbout() {
    const about = currentData.about;
    const profile = currentData.profile;
    if (!about) return;

    const headlineEl = document.getElementById('about-headline');
    const bioEl = document.getElementById('about-bio');
    const principlesEl = document.getElementById('about-principles-list');
    const toolsEl = document.getElementById('about-tools-list');

    if (headlineEl) headlineEl.textContent = about.headline;
    if (bioEl && about.bio) {
      bioEl.innerHTML = about.bio.map(p => `<p class="text-gray-300 font-sans text-base md:text-lg leading-relaxed mb-4">${p}</p>`).join('');
    }

    if (principlesEl && about.principles) {
      principlesEl.innerHTML = about.principles.map(p => `
        <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-accent/40 transition-colors">
          <div class="text-3xl font-display font-extrabold text-accent mb-2">${p.number}</div>
          <h4 class="text-lg font-display font-bold text-white mb-2">${p.title}</h4>
          <p class="text-xs md:text-sm text-gray-400 font-sans leading-relaxed">${p.desc}</p>
        </div>
      `).join('');
    }

    if (toolsEl && about.tools) {
      toolsEl.innerHTML = about.tools.map(t => `
        <div class="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between hover:border-accent/30 transition-colors">
          <div>
            <div class="text-sm font-display font-bold text-white">${t.name}</div>
            <div class="text-[11px] font-mono text-gray-400">${t.category}</div>
          </div>
          <span class="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-black text-accent border border-accent/30">
            ${t.level}
          </span>
        </div>
      `).join('');
    }
  }

  // Contact Section
  function renderContact() {
    const p = currentData.profile;
    const emailDisplay = document.getElementById('contact-email-text');
    const phoneDisplay = document.getElementById('contact-phone-text');
    const locationDisplay = document.getElementById('contact-location-text');
    const footerCopyright = document.getElementById('footer-copyright');

    if (emailDisplay) emailDisplay.textContent = p.email;
    if (phoneDisplay) phoneDisplay.textContent = p.phone || '+1 (555) 019-2026';
    if (locationDisplay) locationDisplay.textContent = p.location || 'Global / Remote';
    if (footerCopyright) footerCopyright.textContent = `© ${p.year || '2026'} ${p.name}. All rights reserved. Graphic Design Portfolio Model.`;

    const socialLinksContainer = document.getElementById('contact-socials-list');
    if (socialLinksContainer) {
      socialLinksContainer.innerHTML = `
        <a href="${p.behance || '#'}" target="_blank" class="px-4 py-2 rounded-full border border-white/10 text-xs font-mono hover:border-accent hover:text-accent transition-colors flex items-center gap-2">
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Behance
        </a>
        <a href="${p.dribbble || '#'}" target="_blank" class="px-4 py-2 rounded-full border border-white/10 text-xs font-mono hover:border-accent hover:text-accent transition-colors flex items-center gap-2">
          <i data-lucide="globe" class="w-3.5 h-3.5"></i> Dribbble
        </a>
        <a href="${p.instagram || '#'}" target="_blank" class="px-4 py-2 rounded-full border border-white/10 text-xs font-mono hover:border-accent hover:text-accent transition-colors flex items-center gap-2">
          <i data-lucide="instagram" class="w-3.5 h-3.5"></i> Instagram
        </a>
        <a href="${p.linkedin || '#'}" target="_blank" class="px-4 py-2 rounded-full border border-white/10 text-xs font-mono hover:border-accent hover:text-accent transition-colors flex items-center gap-2">
          <i data-lucide="linkedin" class="w-3.5 h-3.5"></i> LinkedIn
        </a>
      `;
    }
  }

  // Floating Slide Number Badge while Scrolling
  function renderSlideCounterBadge() {
    let badge = document.getElementById('floating-slide-badge');
    if (!badge) {
      badge = document.createElement('div');
      badge.id = 'floating-slide-badge';
      badge.className = 'floating-slide-badge cursor-pointer';
      badge.title = 'Click to jump to slide list';
      badge.onclick = () => window.PortfolioApp.openCustomizer('slides');
      document.body.appendChild(badge);
    }
    updateFloatingSlideBadge();
  }

  function updateFloatingSlideBadge() {
    const badge = document.getElementById('floating-slide-badge');
    if (!badge) return;

    if (currentViewMode !== 'stream') {
      badge.style.display = 'none';
      return;
    }

    badge.style.display = 'flex';
    const slides = document.querySelectorAll('.behance-slide-frame');
    let currentIdx = 1;
    let found = false;

    slides.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
        currentIdx = index + 1;
        found = true;
      }
    });

    const total = currentData.slides ? currentData.slides.length : 66;
    badge.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
      <span>SLIDE ${String(currentIdx).padStart(2, '0')} / ${total}</span>
    `;

    // Also update stream progress bar
    const progressBar = document.getElementById('stream-progress-bar');
    if (progressBar) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }
  }

  // --------------------------------------------------------------------------
  // INTERACTIVE LIGHTBOX VIEWER
  // --------------------------------------------------------------------------
  function openLightbox(index) {
    const slides = currentData.slides || [];
    if (index < 0 || index >= slides.length) return;

    activeLightboxIndex = index;
    const slide = slides[index];
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    const img = document.getElementById('lightbox-target-image');
    const title = document.getElementById('lightbox-title');
    const counter = document.getElementById('lightbox-counter');
    const caption = document.getElementById('lightbox-caption');

    if (img) img.src = slide.image;
    if (title) title.textContent = slide.title;
    if (counter) counter.textContent = `SLIDE ${String(slide.id).padStart(2, '0')} OF ${slides.length}`;
    if (caption) caption.textContent = slide.caption || '';

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function lightboxNext() {
    const slides = currentData.slides || [];
    const nextIdx = (activeLightboxIndex + 1) % slides.length;
    openLightbox(nextIdx);
  }

  function lightboxPrev() {
    const slides = currentData.slides || [];
    const prevIdx = (activeLightboxIndex - 1 + slides.length) % slides.length;
    openLightbox(prevIdx);
  }

  // --------------------------------------------------------------------------
  // ADMIN AUTHENTICATION (LOGIN / LOGOUT)
  // --------------------------------------------------------------------------
  function isAuthenticated() {
    return (
      sessionStorage.getItem(AUTH_STORAGE_KEY) === ADMIN_USERNAME ||
      localStorage.getItem(AUTH_STORAGE_KEY) === ADMIN_USERNAME
    );
  }

  function requireAuth(callback) {
    if (isAuthenticated()) {
      if (typeof callback === 'function') callback();
    } else {
      pendingAuthCallback = callback;
      openLoginModal();
    }
  }

  function openLoginModal() {
    const modal = document.getElementById('admin-login-modal');
    if (!modal) return;

    const userInput = document.getElementById('login-username-input');
    const passInput = document.getElementById('login-password-input');
    const errBox = document.getElementById('login-error-msg');

    if (userInput && !userInput.value) userInput.value = ADMIN_USERNAME;
    if (passInput) passInput.value = '';
    if (errBox) errBox.classList.add('hidden');

    modal.classList.add('open');
    if (passInput) {
      setTimeout(() => passInput.focus(), 120);
    }
    safeCreateIcons();
  }

  function closeLoginModal() {
    const modal = document.getElementById('admin-login-modal');
    if (!modal) return;
    modal.classList.remove('open');
    pendingAuthCallback = null;
  }

  function togglePasswordVisibility() {
    const passInput = document.getElementById('login-password-input');
    const icon = document.getElementById('password-toggle-icon');
    if (!passInput) return;

    if (passInput.type === 'password') {
      passInput.type = 'text';
      if (icon) icon.setAttribute('data-lucide', 'eye-off');
    } else {
      passInput.type = 'password';
      if (icon) icon.setAttribute('data-lucide', 'eye');
    }
    safeCreateIcons();
  }

  function handleLoginSubmit(event) {
    if (event) event.preventDefault();
    const userInput = document.getElementById('login-username-input');
    const passInput = document.getElementById('login-password-input');
    const rememberCheckbox = document.getElementById('login-remember-me');
    const errBox = document.getElementById('login-error-msg');
    const cardBox = document.getElementById('login-card-box');

    const enteredUser = (userInput ? userInput.value : '').trim();
    const enteredPass = passInput ? passInput.value : '';
    const rememberMe = rememberCheckbox ? rememberCheckbox.checked : true;

    // Check credentials: Username "Gokul" (case-insensitive) & Password "gokul@2003" (exact)
    if (enteredUser.toLowerCase() === ADMIN_USERNAME.toLowerCase() && enteredPass === ADMIN_PASSWORD) {
      if (errBox) errBox.classList.add('hidden');

      // Persist session
      sessionStorage.setItem(AUTH_STORAGE_KEY, ADMIN_USERNAME);
      if (rememberMe) {
        localStorage.setItem(AUTH_STORAGE_KEY, ADMIN_USERNAME);
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }

      closeLoginModal();
      showToast(`🎉 Welcome, ${ADMIN_USERNAME}! Admin access unlocked.`);

      const cb = pendingAuthCallback;
      pendingAuthCallback = null;
      if (typeof cb === 'function') {
        cb();
      } else if (window.AdminPanel && typeof window.AdminPanel.open === 'function') {
        window.AdminPanel.open('profile');
      } else {
        actualOpenCustomizer('profile');
      }
    } else {
      // Invalid credentials
      if (errBox) {
        errBox.classList.remove('hidden');
        const errText = document.getElementById('login-error-text');
        if (errText) errText.textContent = 'Invalid username or password. Please try again.';
      }
      if (cardBox) {
        cardBox.classList.add('shake-anim');
        setTimeout(() => cardBox.classList.remove('shake-anim'), 450);
      }
      if (passInput) {
        passInput.select();
      }
    }
  }

  function logout() {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    closeCustomizer();
    closeQuickSwapModal();
    showToast('🔒 Logged out successfully. Customizer is now locked.');
  }

  // --------------------------------------------------------------------------
  // QUICK IMAGE SWAP PROMPT (PROTECTED BY AUTH)
  // --------------------------------------------------------------------------
  function openQuickImagePrompt(slideId) {
    requireAuth(() => {
      actualOpenQuickImagePrompt(slideId);
    });
  }

  function actualOpenQuickImagePrompt(slideId) {
    const slide = currentData.slides.find(s => s.id === slideId);
    if (!slide) return;

    const modal = document.getElementById('quick-swap-modal');
    if (!modal) return;

    document.getElementById('quick-swap-slide-id').value = slide.id;
    document.getElementById('quick-swap-slide-title').textContent = `Slide ${slide.id}: ${slide.title}`;
    document.getElementById('quick-swap-url-input').value = slide.image;
    document.getElementById('quick-swap-preview').src = slide.image;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    safeCreateIcons();
  }

  function closeQuickSwapModal() {
    const modal = document.getElementById('quick-swap-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  function applyQuickSwap() {
    const slideId = parseInt(document.getElementById('quick-swap-slide-id').value, 10);
    const newUrl = document.getElementById('quick-swap-url-input').value.trim();
    if (!newUrl) {
      alert('Please provide a valid image URL or upload a file.');
      return;
    }

    const slide = currentData.slides.find(s => s.id === slideId);
    if (slide) {
      slide.image = newUrl;
      saveData(currentData);
      closeQuickSwapModal();
      showToast(`✅ Slide #${slideId} image updated!`);
    }
  }

  // Handle Local File Upload directly via HTML5 FileReader
  function handleLocalImageUpload(inputEl, targetInputId, previewImgId) {
    if (!inputEl.files || !inputEl.files[0]) return;
    const file = inputEl.files[0];

    // Check size limit (max 8MB for browser storage)
    if (file.size > 8 * 1024 * 1024) {
      alert('File size exceeds 8MB. Please choose a smaller image or use an image URL.');
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const dataUrl = e.target.result;
      if (targetInputId) {
        const inp = document.getElementById(targetInputId);
        if (inp) inp.value = dataUrl;
      }
      if (previewImgId) {
        const preview = document.getElementById(previewImgId);
        if (preview) preview.src = dataUrl;
      }
      showToast('📸 Local image loaded into preview!');
    };
    reader.readAsDataURL(file);
  }

  // --------------------------------------------------------------------------
  // IN-BROWSER LIVE CUSTOMIZER DRAWER (PROTECTED BY AUTH)
  // --------------------------------------------------------------------------
  function openCustomizer(tabName) {
    requireAuth(() => {
      actualOpenCustomizer(tabName);
    });
  }

  function actualOpenCustomizer(tabName) {
    if (tabName) customizerActiveTab = tabName;
    const drawer = document.getElementById('customizer-drawer');
    const backdrop = document.getElementById('customizer-backdrop');
    if (!drawer) return;

    renderCustomizerContent();
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    safeCreateIcons();
  }

  function closeCustomizer() {
    const drawer = document.getElementById('customizer-drawer');
    const backdrop = document.getElementById('customizer-backdrop');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function setCustomizerTab(tab) {
    customizerActiveTab = tab;
    renderCustomizerContent();
  }

  function renderCustomizerContent() {
    // Update active tab buttons
    document.querySelectorAll('.customizer-tab-btn').forEach(btn => {
      const isTab = btn.getAttribute('data-tab') === customizerActiveTab;
      btn.className = `customizer-tab-btn px-4 py-2 text-xs font-mono tracking-wider rounded-lg border transition-colors cursor-pointer ${
        isTab ? 'bg-accent text-black font-bold border-accent' : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'
      }`;
    });

    const bodyEl = document.getElementById('customizer-drawer-body');
    if (!bodyEl) return;

    if (customizerActiveTab === 'profile') {
      renderProfileEditor(bodyEl);
    } else if (customizerActiveTab === 'slides') {
      renderSlidesEditor(bodyEl);
    } else if (customizerActiveTab === 'theme') {
      renderThemeEditor(bodyEl);
    } else if (customizerActiveTab === 'export') {
      renderExportEditor(bodyEl);
    }
    safeCreateIcons();
  }

  // Tab 1: Profile & Details Editor
  function renderProfileEditor(container) {
    const p = currentData.profile;
    container.innerHTML = `
      <form id="profile-edit-form" onsubmit="event.preventDefault(); window.PortfolioApp.saveProfileFromForm();" class="space-y-4">
        <div>
          <label class="block text-xs font-mono uppercase text-gray-400 mb-1">Designer Full Name</label>
          <input type="text" id="edit-name" value="${p.name || ''}" class="custom-input" placeholder="e.g. YOUR NAME" required />
        </div>

        <div>
          <label class="block text-xs font-mono uppercase text-gray-400 mb-1">Professional Role / Title</label>
          <input type="text" id="edit-role" value="${p.role || ''}" class="custom-input" placeholder="e.g. Graphic Designer & Art Director" required />
        </div>

        <div>
          <label class="block text-xs font-mono uppercase text-gray-400 mb-1">Portfolio Year</label>
          <input type="text" id="edit-year" value="${p.year || '2026'}" class="custom-input" placeholder="2026" required />
        </div>

        <div>
          <label class="block text-xs font-mono uppercase text-gray-400 mb-1">Availability Status Badge</label>
          <input type="text" id="edit-status" value="${p.statusBadge || ''}" class="custom-input" placeholder="Available for Commissions & Remote Roles Worldwide" />
        </div>

        <div>
          <label class="block text-xs font-mono uppercase text-gray-400 mb-1">Hero Tagline Statement</label>
          <textarea id="edit-tagline" rows="2" class="custom-input">${p.tagline || ''}</textarea>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-mono uppercase text-gray-400 mb-1">Email Address</label>
            <input type="email" id="edit-email" value="${p.email || ''}" class="custom-input" placeholder="name@domain.com" />
          </div>
          <div>
            <label class="block text-xs font-mono uppercase text-gray-400 mb-1">Phone Number</label>
            <input type="text" id="edit-phone" value="${p.phone || ''}" class="custom-input" placeholder="+1 (555) 000-0000" />
          </div>
        </div>

        <div>
          <label class="block text-xs font-mono uppercase text-gray-400 mb-1">Location / Base</label>
          <input type="text" id="edit-location" value="${p.location || ''}" class="custom-input" placeholder="Global / Remote" />
        </div>

        <div>
          <label class="block text-xs font-mono uppercase text-gray-400 mb-1">Behance Portfolio URL</label>
          <input type="url" id="edit-behance" value="${p.behance || ''}" class="custom-input" placeholder="https://behance.net/..." />
        </div>

        <div class="pt-4 border-t border-white/10 flex gap-3">
          <button type="submit" class="flex-1 py-2.5 rounded-lg bg-accent text-black font-bold text-xs font-mono uppercase tracking-wider cursor-pointer hover:opacity-90">
            Save Profile Info
          </button>
        </div>
      </form>
    `;
  }

  function saveProfileFromForm() {
    currentData.profile.name = document.getElementById('edit-name').value.trim();
    currentData.profile.role = document.getElementById('edit-role').value.trim();
    currentData.profile.year = document.getElementById('edit-year').value.trim();
    currentData.profile.statusBadge = document.getElementById('edit-status').value.trim();
    currentData.profile.tagline = document.getElementById('edit-tagline').value.trim();
    currentData.profile.email = document.getElementById('edit-email').value.trim();
    currentData.profile.phone = document.getElementById('edit-phone').value.trim();
    currentData.profile.location = document.getElementById('edit-location').value.trim();
    currentData.profile.behance = document.getElementById('edit-behance').value.trim();

    saveData(currentData);
  }

  // Tab 2: Slides & Images Visual Manager
  function renderSlidesEditor(container) {
    const slides = currentData.slides || [];
    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-3 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-300 flex items-center justify-between">
          <span>Manage all ${slides.length} slides. Replace images with URLs or upload local image files!</span>
        </div>

        <!-- Add New Slide Button -->
        <button 
          type="button" 
          onclick="window.PortfolioApp.addNewSlide()" 
          class="w-full py-2.5 rounded-lg border border-dashed border-accent/60 text-accent font-mono text-xs uppercase tracking-wider hover:bg-accent/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <i data-lucide="plus-circle" class="w-4 h-4"></i>
          <span>Add New Slide</span>
        </button>

        <!-- Slide List -->
        <div class="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          ${slides.map((s, idx) => `
            <div class="slide-editor-card p-3.5" id="slide-editor-card-${s.id}">
              <div class="flex gap-3 items-start">
                <!-- Thumbnail -->
                <div class="w-20 h-16 rounded overflow-hidden bg-black shrink-0 relative group">
                  <img src="${s.image}" alt="" class="w-full h-full object-cover" onerror="this.src=window.PortfolioApp.getFallbackImage('${(s.title || '').replace(/'/g, "\\'")}');" />
                </div>

                <!-- Slide Inputs -->
                <div class="flex-1 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-accent">#${s.id}</span>
                    <button type="button" onclick="window.PortfolioApp.deleteSlide(${s.id})" class="text-xs text-red-400 hover:text-red-300 font-mono flex items-center gap-1 cursor-pointer">
                      <i data-lucide="trash-2" class="w-3 h-3"></i> Delete
                    </button>
                  </div>

                  <div>
                    <input 
                      type="text" 
                      value="${s.title}" 
                      placeholder="Slide Title" 
                      onchange="window.PortfolioApp.updateSlideField(${s.id}, 'title', this.value)" 
                      class="custom-input py-1 text-xs" 
                    />
                  </div>

                  <div>
                    <input 
                      type="text" 
                      value="${s.image}" 
                      placeholder="Image URL or Data URL" 
                      id="slide-input-url-${s.id}"
                      onchange="window.PortfolioApp.updateSlideField(${s.id}, 'image', this.value)" 
                      class="custom-input py-1 text-xs font-mono" 
                    />
                  </div>

                  <!-- Upload Local File for this slide -->
                  <div class="flex items-center gap-2">
                    <label class="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-mono text-gray-200 cursor-pointer flex items-center gap-1">
                      <i data-lucide="upload" class="w-3 h-3"></i>
                      <span>Upload File</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        class="hidden" 
                        onchange="window.PortfolioApp.uploadSlideFile(${s.id}, this)" 
                      />
                    </label>

                    <select 
                      onchange="window.PortfolioApp.updateSlideField(${s.id}, 'category', this.value)"
                      class="custom-input py-1 text-xs font-mono flex-1"
                    >
                      <option value="Branding" ${s.category === 'Branding' ? 'selected' : ''}>Branding</option>
                      <option value="Motion Graphics" ${s.category === 'Motion Graphics' ? 'selected' : ''}>Motion Graphics</option>
                      <option value="Packaging" ${s.category === 'Packaging' ? 'selected' : ''}>Packaging</option>
                      <option value="Editorial" ${s.category === 'Editorial' ? 'selected' : ''}>Editorial</option>
                      <option value="Social Media" ${s.category === 'Social Media' ? 'selected' : ''}>Social Media</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function updateSlideField(slideId, field, value) {
    const slide = currentData.slides.find(s => s.id === slideId);
    if (slide) {
      slide[field] = value;
      saveData(currentData);
    }
  }

  function uploadSlideFile(slideId, fileInput) {
    if (!fileInput.files || !fileInput.files[0]) return;
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const dataUrl = e.target.result;
      updateSlideField(slideId, 'image', dataUrl);
      renderSlidesEditor(document.getElementById('customizer-drawer-body'));
      safeCreateIcons();
    };
    reader.readAsDataURL(file);
  }

  function addNewSlide() {
    const slides = currentData.slides;
    const nextId = slides.length > 0 ? Math.max(...slides.map(s => s.id)) + 1 : 1;
    const newSlide = {
      id: nextId,
      number: String(nextId).padStart(2, '0'),
      title: `New Slide #${nextId}`,
      category: 'Branding',
      isMotion: false,
      image: getFallbackImage('New Slide ' + nextId),
      caption: 'Custom artwork added to portfolio 2026.'
    };
    slides.push(newSlide);
    saveData(currentData);
    renderSlidesEditor(document.getElementById('customizer-drawer-body'));
    safeCreateIcons();
    showToast(`✨ Added Slide #${nextId}`);
  }

  function deleteSlide(slideId) {
    if (confirm(`Delete slide #${slideId}?`)) {
      currentData.slides = currentData.slides.filter(s => s.id !== slideId);
      saveData(currentData);
      renderSlidesEditor(document.getElementById('customizer-drawer-body'));
      safeCreateIcons();
      showToast(`🗑️ Deleted Slide #${slideId}`);
    }
  }

  // Tab 3: Theme & Accent Color Chooser
  function renderThemeEditor(container) {
    const themes = [
      { name: 'Acid Lime (Behance Default)', hex: '#ccff00' },
      { name: 'Cyber Neon Cyan', hex: '#00f0ff' },
      { name: 'Ultra Red Energy', hex: '#ff2a4b' },
      { name: 'Electric Violet', hex: '#a855f7' },
      { name: 'Solar Amber', hex: '#ffaa00' },
      { name: 'Pure Minimalist White', hex: '#ffffff' }
    ];

    container.innerHTML = `
      <div class="space-y-6">
        <div>
          <label class="block text-xs font-mono uppercase text-gray-400 mb-3">Accent Accent Highlight Color</label>
          <div class="grid grid-cols-2 gap-3">
            ${themes.map(t => `
              <button 
                type="button" 
                onclick="window.PortfolioApp.changeThemeColor('${t.hex}')" 
                class="p-3 rounded-xl border border-white/10 bg-white/5 flex items-center gap-3 hover:border-white/30 transition-colors cursor-pointer text-left"
              >
                <span class="w-6 h-6 rounded-full shrink-0 shadow-md" style="background-color: ${t.hex};"></span>
                <span class="text-xs font-mono text-gray-200">${t.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white/5 border border-white/10">
          <label class="block text-xs font-mono uppercase text-gray-400 mb-2">Custom Hex Code</label>
          <div class="flex gap-2">
            <input type="color" id="custom-hex-picker" onchange="window.PortfolioApp.changeThemeColor(this.value)" class="h-9 w-12 bg-transparent border-0 cursor-pointer" />
            <input type="text" id="custom-hex-text" placeholder="#ccff00" class="custom-input font-mono uppercase" />
            <button 
              type="button" 
              onclick="window.PortfolioApp.changeThemeColor(document.getElementById('custom-hex-text').value)" 
              class="px-4 py-1.5 rounded bg-accent text-black font-bold font-mono text-xs cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function changeThemeColor(hex) {
    if (!hex) return;
    setAccentColor(hex);
    showToast(`🎨 Accent color updated to ${hex}`);
  }

  // Tab 4: Export Configuration & Backup
  function renderExportEditor(container) {
    container.innerHTML = `
      <div class="space-y-5">
        <div class="p-4 rounded-xl bg-white/5 border border-white/10">
          <h4 class="text-sm font-display font-bold text-white mb-1">Export Portfolio Data</h4>
          <p class="text-xs text-gray-400 font-mono mb-4 leading-relaxed">
            Download your customized portfolio settings as a <code class="text-accent">portfolio-data.js</code> file. You can replace the file in <code class="text-accent">js/portfolio-data.js</code> to make your changes 100% permanent!
          </p>
          <div class="flex gap-2">
            <button 
              type="button" 
              onclick="window.PortfolioApp.downloadDataFile()" 
              class="flex-1 py-2.5 rounded-lg bg-accent text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-90"
            >
              <i data-lucide="download" class="w-3.5 h-3.5"></i>
              <span>Download portfolio-data.js</span>
            </button>
            <button 
              type="button" 
              onclick="window.PortfolioApp.copyDataJson()" 
              class="px-4 py-2.5 rounded-lg border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-accent hover:text-accent flex items-center gap-1.5 cursor-pointer"
            >
              <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              <span>Copy JSON</span>
            </button>
          </div>
        </div>

        <div class="p-4 rounded-xl border border-red-500/20 bg-red-950/20">
          <h4 class="text-sm font-display font-bold text-red-400 mb-1">Reset to Defaults</h4>
          <p class="text-xs text-gray-400 font-mono mb-3">
            Erase all browser customizations and restore the default Behance 2026 showcase model.
          </p>
          <button 
            type="button" 
            onclick="window.PortfolioApp.resetToDefaults()" 
            class="px-4 py-2 rounded-lg bg-red-600/30 border border-red-500/40 text-red-300 font-mono text-xs uppercase tracking-wider hover:bg-red-600/50 cursor-pointer"
          >
            Reset All Settings
          </button>
        </div>
      </div>
    `;
  }

  function downloadDataFile() {
    const code = `/**
 * GRAPHIC DESIGN PORTFOLIO 2026 - CUSTOMIZED CONFIGURATION
 * Generated on: ${new Date().toISOString()}
 */
window.PORTFOLIO_DATA = ${JSON.stringify(currentData, null, 2)};
`;
    const blob = new Blob([code], { type: 'application/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('📥 Downloaded portfolio-data.js!');
  }

  function copyDataJson() {
    navigator.clipboard.writeText(JSON.stringify(currentData, null, 2)).then(() => {
      showToast('📋 Configuration JSON copied to clipboard!');
    }).catch(() => {
      showToast('⚠️ Could not copy to clipboard.');
    });
  }

  // --------------------------------------------------------------------------
  // CONTACT FORM HANDLER
  // --------------------------------------------------------------------------
  function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email-input').value;
    const project = document.getElementById('contact-project-type').value;
    const message = document.getElementById('contact-message').value;

    const mailto = `mailto:${currentData.profile.email}?subject=Project Inquiry: ${encodeURIComponent(project)} from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
    window.location.href = mailto;

    showToast('🚀 Thank you! Opening your email client...');
    document.getElementById('contact-form').reset();
  }

  function copyEmailToClipboard() {
    const email = currentData.profile.email;
    navigator.clipboard.writeText(email).then(() => {
      showToast(`📋 Copied email: ${email}`);
    }).catch(() => {
      showToast(`Email: ${email}`);
    });
  }

  // --------------------------------------------------------------------------
  // PUBLIC API ON WINDOW
  // --------------------------------------------------------------------------
  window.PortfolioApp = {
    // Data Access API (used by Admin Panel)
    getData: function () {
      return JSON.parse(JSON.stringify(currentData)); // return a deep copy
    },
    setData: function (newData) {
      currentData = newData;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
      renderAll();
    },
    showToast: showToast,

    init: function () {
      loadData();
      renderAll();

      // Scroll listener for progress bar and floating slide badge
      window.addEventListener('scroll', () => {
        updateFloatingSlideBadge();
      }, { passive: true });

      // Keyboard navigation for Lightbox
      window.addEventListener('keydown', (e) => {
        const modal = document.getElementById('lightbox-modal');
        if (modal && modal.classList.contains('open')) {
          if (e.key === 'Escape') closeLightbox();
          if (e.key === 'ArrowRight') lightboxNext();
          if (e.key === 'ArrowLeft') lightboxPrev();
        }
      });

      // Auto-open Admin Panel if URL has ?admin or ?login
      try {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('admin') || urlParams.has('login')) {
          const targetTab = urlParams.get('tab') || 'profile';
          setTimeout(() => {
            if (isAuthenticated()) {
              if (window.AdminPanel && typeof window.AdminPanel.open === 'function') {
                window.AdminPanel.open(targetTab);
              }
            } else {
              openLoginModal();
            }
          }, 350);
        }
      } catch (e) {}
    },

    // View Switching
    setViewMode: function (mode) {
      currentViewMode = mode;
      localStorage.setItem(VIEW_PREF_KEY, mode);
      renderViewMode();
      renderSlideCounterBadge();
      showToast(mode === 'stream' ? '📜 Switched to Behance Presentation Stream' : '🎴 Switched to Studio Grid View');
    },

    // Category Filtering
    setCategoryFilter: function (category) {
      activeFilter = category;
      renderCategoryFilters();
      renderFilteredGridProjects();
    },

    // Jump smoothly to slide
    jumpToSlide: function (slideNumber) {
      if (currentViewMode !== 'stream') {
        window.PortfolioApp.setViewMode('stream');
      }
      setTimeout(() => {
        const el = document.getElementById(`slide-block-${slideNumber}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    },

    // Lightbox API
    openLightbox: openLightbox,
    closeLightbox: closeLightbox,
    lightboxNext: lightboxNext,
    lightboxPrev: lightboxPrev,

    // Quick Image Swap
    openQuickImagePrompt: openQuickImagePrompt,
    closeQuickSwapModal: closeQuickSwapModal,
    applyQuickSwap: applyQuickSwap,
    handleLocalImageUpload: handleLocalImageUpload,

    // Customizer Drawer API
    openCustomizer: openCustomizer,
    closeCustomizer: closeCustomizer,
    setCustomizerTab: setCustomizerTab,
    saveProfileFromForm: saveProfileFromForm,
    updateSlideField: updateSlideField,
    uploadSlideFile: uploadSlideFile,
    addNewSlide: addNewSlide,
    deleteSlide: deleteSlide,
    changeThemeColor: changeThemeColor,
    downloadDataFile: downloadDataFile,
    copyDataJson: copyDataJson,
    // Admin Authentication API
    isAuthenticated: isAuthenticated,
    requireAuth: requireAuth,
    openLoginModal: openLoginModal,
    closeLoginModal: closeLoginModal,
    togglePasswordVisibility: togglePasswordVisibility,
    handleLoginSubmit: handleLoginSubmit,
    logout: logout,

    // Utilities & Fallback Helpers
    getFallbackImage: getFallbackImage,

    // Contact API
    handleContactSubmit: handleContactSubmit,
    copyEmailToClipboard: copyEmailToClipboard
  };

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.PortfolioApp.init);
  } else {
    window.PortfolioApp.init();
  }
})();
