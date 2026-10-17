/**
 * ============================================================================
 * 🔐 FULL ADMIN PANEL — GRAPHIC DESIGN PORTFOLIO 2026
 * ============================================================================
 * Complete admin panel with full access to edit every section:
 * - Profile & Hero, Slides & Images, About Section,
 *   Contact Info, Color Theme, Stats, Export/Import
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // ADMIN PANEL STATE
  // --------------------------------------------------------------------------
  let adminActiveTab = 'profile';
  let adminOpen = false;

  // --------------------------------------------------------------------------
  // INJECT ADMIN PANEL HTML INTO BODY
  // --------------------------------------------------------------------------
  function injectAdminPanel() {
    if (document.getElementById('admin-panel-overlay')) return;

    const panel = document.createElement('div');
    panel.id = 'admin-panel-overlay';
    panel.innerHTML = `
      <!-- Full-Screen Admin Panel Overlay -->
      <div id="admin-panel-modal" class="admin-panel-modal">
        <!-- Panel Header -->
        <div class="admin-panel-header">
          <div class="admin-header-left">
            <div class="admin-logo-badge">⚡</div>
            <div>
              <h2 class="admin-title-text">FULL ADMIN PANEL</h2>
              <p class="admin-subtitle-text">Complete Portfolio Control — Gokul</p>
            </div>
          </div>
          <div class="admin-header-actions">
            <button type="button" onclick="AdminPanel.saveAll()" class="admin-save-btn" title="Save all changes">
              <span>💾 Save All</span>
            </button>
            <button type="button" onclick="AdminPanel.close()" class="admin-close-btn" title="Close Admin Panel">
              <span>✕ Close</span>
            </button>
          </div>
        </div>

        <!-- Panel Body: Sidebar + Content -->
        <div class="admin-panel-body">

          <!-- Left Sidebar Navigation -->
          <nav class="admin-sidebar">
            <div class="admin-sidebar-label">SECTIONS</div>
            <button type="button" class="admin-nav-btn active" data-tab="profile" onclick="AdminPanel.setTab('profile')">
              <span class="admin-nav-icon">👤</span> Profile & Hero
            </button>
            <button type="button" class="admin-nav-btn" data-tab="stats" onclick="AdminPanel.setTab('stats')">
              <span class="admin-nav-icon">🔢</span> Counts & Numbers
            </button>
            <button type="button" class="admin-nav-btn" data-tab="slides" onclick="AdminPanel.setTab('slides')">
              <span class="admin-nav-icon">🖼️</span> Slides & Images
            </button>
            <button type="button" class="admin-nav-btn" data-tab="about" onclick="AdminPanel.setTab('about')">
              <span class="admin-nav-icon">📖</span> About Section
            </button>
            <button type="button" class="admin-nav-btn" data-tab="contact" onclick="AdminPanel.setTab('contact')">
              <span class="admin-nav-icon">📬</span> Contact Info
            </button>
            <button type="button" class="admin-nav-btn" data-tab="theme" onclick="AdminPanel.setTab('theme')">
              <span class="admin-nav-icon">🎨</span> Colors & Theme
            </button>
            <button type="button" class="admin-nav-btn" data-tab="export" onclick="AdminPanel.setTab('export')">
              <span class="admin-nav-icon">💾</span> Export & Backup
            </button>

            <!-- Sidebar Footer -->
            <div class="admin-sidebar-footer">
              <button type="button" onclick="AdminPanel.resetDefaults()" class="admin-reset-btn">
                🔄 Reset All
              </button>
              <button type="button" onclick="AdminPanel.logout()" class="admin-logout-btn">
                🔒 Logout
              </button>
            </div>
          </nav>

          <!-- Right Content Area -->
          <main id="admin-panel-content" class="admin-content">
            <!-- Rendered by JS -->
          </main>
        </div>
      </div>
    `;
    document.body.appendChild(panel);
  }

  // --------------------------------------------------------------------------
  // OPEN / CLOSE / SET TAB
  // --------------------------------------------------------------------------
  function openAdminPanel(tab) {
    tab = tab || adminActiveTab || 'profile';
    injectAdminPanel();
    adminOpen = true;
    adminActiveTab = tab;
    const modal = document.getElementById('admin-panel-modal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    renderTab(tab);
    updateSidebarActive(tab);
  }

  function closeAdminPanel() {
    adminOpen = false;
    const modal = document.getElementById('admin-panel-modal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function setTab(tab) {
    adminActiveTab = tab;
    renderTab(tab);
    updateSidebarActive(tab);
  }

  function updateSidebarActive(tab) {
    document.querySelectorAll('.admin-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });
  }

  function renderTab(tab) {
    const content = document.getElementById('admin-panel-content');
    if (!content) return;
    const data = window.PortfolioApp && window.PortfolioApp.getData ? window.PortfolioApp.getData() : null;
    if (!data) {
      content.innerHTML = '<div style="padding:40px;color:#888;">Portfolio data not loaded. Please refresh.</div>';
      return;
    }

    switch (tab) {
      case 'profile': content.innerHTML = renderProfileTab(data); break;
      case 'slides':  content.innerHTML = renderSlidesTab(data); break;
      case 'about':   content.innerHTML = renderAboutTab(data); break;
      case 'contact': content.innerHTML = renderContactTab(data); break;
      case 'stats':   content.innerHTML = renderStatsTab(data); break;
      case 'theme':   content.innerHTML = renderThemeTab(data); break;
      case 'export':  content.innerHTML = renderExportTab(data); break;
      default:        content.innerHTML = renderProfileTab(data);
    }
    initTabHandlers(tab, data);
  }

  // --------------------------------------------------------------------------
  // HELPER: FIELD ROW
  // --------------------------------------------------------------------------
  function fieldRow(label, inputHtml, hint) {
    return `
      <div class="ap-field">
        <label class="ap-label">${label}</label>
        ${inputHtml}
        ${hint ? `<p class="ap-hint">${hint}</p>` : ''}
      </div>
    `;
  }

  function textInput(id, value, placeholder, extraAttrs) {
    return `<input type="text" id="${id}" value="${escHtml(value || '')}" placeholder="${placeholder || ''}" class="ap-input" ${extraAttrs || ''} />`;
  }

  function textareaInput(id, value, rows, placeholder) {
    return `<textarea id="${id}" rows="${rows || 3}" placeholder="${placeholder || ''}" class="ap-input">${escHtml(value || '')}</textarea>`;
  }

  function escHtml(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  function sectionTitle(icon, title, desc) {
    return `
      <div class="ap-section-title">
        <div class="ap-section-icon">${icon}</div>
        <div>
          <h3 class="ap-section-heading">${title}</h3>
          ${desc ? `<p class="ap-section-desc">${desc}</p>` : ''}
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // TAB 1: PROFILE & HERO
  // --------------------------------------------------------------------------
  function renderProfileTab(data) {
    const p = data.profile || {};
    const disciplines = (p.disciplines || []).join(', ');
    return `
      <div class="ap-tab-content">
        ${sectionTitle('👤', 'Profile & Hero Section', 'Edit your name, tagline, status badge, disciplines and social links.')}

        <div class="ap-card">
          <h4 class="ap-card-title">Designer Identity</h4>
          <div class="ap-grid-2">
            ${fieldRow('Full Name', textInput('ap-name', p.name, 'e.g. Raagav Sundar'))}
            ${fieldRow('Professional Role / Title', textInput('ap-role', p.role, 'e.g. Graphic Designer & Art Director'))}
          </div>
          <div class="ap-grid-2">
            ${fieldRow('Portfolio Year', textInput('ap-year', p.year, 'e.g. 2026'))}
            ${fieldRow('Hero Initials (Nav Logo)', textInput('ap-initials', p.initials, 'e.g. RS'))}
          </div>
          ${fieldRow('Hero Tagline Statement', textareaInput('ap-tagline', p.tagline, 2, 'Shaping visual culture through...'))}
          ${fieldRow('Availability Status Badge Text', textInput('ap-status', p.statusBadge, 'Available for Commissions & Remote Roles Worldwide'))}
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Discipline Tags (Hero Section)</h4>
          ${fieldRow('Disciplines (comma-separated)', textareaInput('ap-disciplines', disciplines, 2, 'Brand Identity, Motion Graphics, Packaging, ...'), 'Each tag appears as a pill below the hero title.')}
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Hero Profile Photo</h4>
          <div class="ap-image-upload-row">
            <div class="ap-img-preview-box" id="profile-photo-preview-box">
              <img id="profile-photo-preview" src="${escHtml(p.photo || '')}" alt="Profile Photo" onerror="this.style.display='none'" style="${p.photo ? '' : 'display:none'}" />
              <span id="profile-photo-placeholder" style="${p.photo ? 'display:none' : ''}">📷 No photo set</span>
            </div>
            <div class="ap-upload-controls">
              <label class="ap-upload-btn">
                📁 Upload Photo from Computer
                <input type="file" accept="image/*" class="hidden" onchange="AdminPanel.handlePhotoUpload(this)" />
              </label>
              ${fieldRow('Or paste photo URL', textInput('ap-photo-url', p.photo, 'https://... or images/photo.jpg'))}
              <button type="button" class="ap-apply-btn" onclick="AdminPanel.applyPhotoUrl()">Apply URL</button>
            </div>
          </div>
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Social & Portfolio Links</h4>
          <div class="ap-grid-2">
            ${fieldRow('Behance URL', textInput('ap-behance', p.behance, 'https://behance.net/...'))}
            ${fieldRow('Dribbble URL', textInput('ap-dribbble', p.dribbble, 'https://dribbble.com/...'))}
            ${fieldRow('Instagram URL', textInput('ap-instagram', p.instagram, 'https://instagram.com/...'))}
            ${fieldRow('LinkedIn URL', textInput('ap-linkedin', p.linkedin, 'https://linkedin.com/in/...'))}
          </div>
        </div>

        <div class="ap-save-row">
          <button type="button" class="ap-save-primary" onclick="AdminPanel.saveProfile()">💾 Save Profile & Hero</button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // TAB 2: SLIDES & IMAGES
  // --------------------------------------------------------------------------
  function renderSlidesTab(data) {
    const slides = data.slides || [];
    return `
      <div class="ap-tab-content">
        ${sectionTitle('🖼️', 'Slides & Images Manager', `Manage all ${slides.length} portfolio slides. Upload new images, change titles, captions and categories.`)}

        <div class="ap-slides-toolbar">
          <button type="button" class="ap-add-slide-btn" onclick="AdminPanel.addSlide()">
            ➕ Add New Slide
          </button>
          <span class="ap-slide-count">${slides.length} slides total</span>
        </div>

        <div class="ap-slides-grid" id="ap-slides-grid">
          ${slides.map((s, idx) => renderSlideCard(s, idx, slides.length)).join('')}
        </div>
      </div>
    `;
  }

  function renderSlideCard(s, idx, total) {
    const imgSrc = s.image || '';
    return `
      <div class="ap-slide-card" id="ap-slide-${s.id}">
        <!-- Slide Header -->
        <div class="ap-slide-header">
          <span class="ap-slide-num">#${String(s.id).padStart(2,'0')}</span>
          <div class="ap-slide-actions-header">
            ${idx > 0 ? `<button type="button" class="ap-slide-move-btn" onclick="AdminPanel.moveSlide(${s.id},'up')" title="Move up">↑</button>` : ''}
            ${idx < total-1 ? `<button type="button" class="ap-slide-move-btn" onclick="AdminPanel.moveSlide(${s.id},'down')" title="Move down">↓</button>` : ''}
            <button type="button" class="ap-slide-delete-btn" onclick="AdminPanel.deleteSlide(${s.id})" title="Delete slide">🗑</button>
          </div>
        </div>

        <!-- Image Preview + Upload -->
        <div class="ap-slide-img-area">
          <img
            id="ap-slide-img-${s.id}"
            src="${escHtml(imgSrc)}"
            alt="${escHtml(s.title)}"
            class="ap-slide-thumb"
            onerror="this.onerror=null; this.src=window.PortfolioApp.getFallbackImage('${escHtml(s.title)}');"
          />
          <div class="ap-slide-img-overlay">
            <label class="ap-upload-overlay-btn" title="Upload new image">
              📁 Upload Image
              <input type="file" accept="image/*" class="hidden" onchange="AdminPanel.uploadSlideImage(${s.id}, this)" />
            </label>
          </div>
        </div>

        <!-- Slide Fields -->
        <div class="ap-slide-fields">
          <input
            type="text"
            value="${escHtml(s.title)}"
            placeholder="Slide Title"
            class="ap-input ap-slide-title-input"
            onchange="AdminPanel.updateSlide(${s.id}, 'title', this.value)"
          />
          <textarea
            rows="2"
            placeholder="Caption / Description"
            class="ap-input ap-slide-caption"
            onchange="AdminPanel.updateSlide(${s.id}, 'caption', this.value)"
          >${escHtml(s.caption || '')}</textarea>

          <div class="ap-slide-meta-row">
            <select class="ap-input ap-slide-cat" onchange="AdminPanel.updateSlide(${s.id}, 'category', this.value)">
              ${['Branding','Motion Graphics','Packaging','Editorial','Social Media','Photography','UI/UX','3D & CGI'].map(
                cat => `<option value="${cat}" ${s.category === cat ? 'selected' : ''}>${cat}</option>`
              ).join('')}
            </select>
            <label class="ap-motion-check">
              <input type="checkbox" ${s.isMotion ? 'checked' : ''} onchange="AdminPanel.updateSlide(${s.id}, 'isMotion', this.checked)" />
              <span>Animated</span>
            </label>
          </div>

          <!-- URL override -->
          <div class="ap-slide-url-row">
            <input
              type="text"
              id="ap-slide-url-${s.id}"
              value="${escHtml(imgSrc)}"
              placeholder="Paste image URL..."
              class="ap-input ap-slide-url-input"
              oninput="document.getElementById('ap-slide-img-${s.id}').src = this.value"
            />
            <button type="button" class="ap-apply-url-btn" onclick="AdminPanel.applySlideUrl(${s.id})" title="Apply URL">✓</button>
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // TAB 3: ABOUT SECTION
  // --------------------------------------------------------------------------
  function renderAboutTab(data) {
    const about = data.about || {};
    const bio = (about.bio || []).join('\n\n');
    const tools = about.tools || [];
    const principles = about.principles || [];

    return `
      <div class="ap-tab-content">
        ${sectionTitle('📖', 'About Section', 'Edit bio, design principles, and skills/tools list.')}

        <div class="ap-card">
          <h4 class="ap-card-title">About Headline</h4>
          ${fieldRow('Main Headline', textInput('ap-about-headline', about.headline, 'Transforming ideas into visual identities.'))}
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Biography Paragraphs</h4>
          ${fieldRow('Bio Text', textareaInput('ap-about-bio', bio, 8, 'Write your bio here. Separate paragraphs with a blank line.'), 'Each paragraph separated by a blank line will render as a separate block.')}
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Design Principles (4 Cards)</h4>
          ${principles.map((p, i) => `
            <div class="ap-principle-card">
              <div class="ap-grid-3">
                ${fieldRow(`#${i+1} Number`, textInput(`ap-principle-num-${i}`, p.number, '01'))}
                ${fieldRow('Title', textInput(`ap-principle-title-${i}`, p.title, 'e.g. Research-First'))}
              </div>
              ${fieldRow('Description', textareaInput(`ap-principle-desc-${i}`, p.desc, 2, 'Short description...'))}
            </div>
          `).join('')}
          <button type="button" class="ap-add-btn" onclick="AdminPanel.addPrinciple()">➕ Add Principle</button>
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Tools & Software Skills</h4>
          <div id="ap-tools-list">
            ${tools.map((t, i) => `
              <div class="ap-tool-row">
                <input type="text" value="${escHtml(t.name)}" placeholder="Tool name" class="ap-input" id="ap-tool-name-${i}" />
                <input type="text" value="${escHtml(t.category)}" placeholder="Category" class="ap-input" id="ap-tool-cat-${i}" />
                <select class="ap-input ap-select-small" id="ap-tool-level-${i}">
                  ${['MASTER','EXPERT','ADVANCED','PROFICIENT','LEARNING'].map(l=>`<option value="${l}" ${t.level===l?'selected':''}>${l}</option>`).join('')}
                </select>
                <button type="button" class="ap-del-btn" onclick="AdminPanel.removeTool(${i})">✕</button>
              </div>
            `).join('')}
          </div>
          <button type="button" class="ap-add-btn" onclick="AdminPanel.addTool()">➕ Add Tool</button>
        </div>

        <div class="ap-save-row">
          <button type="button" class="ap-save-primary" onclick="AdminPanel.saveAbout()">💾 Save About Section</button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // TAB 4: CONTACT INFO
  // --------------------------------------------------------------------------
  function renderContactTab(data) {
    const p = data.profile || {};
    return `
      <div class="ap-tab-content">
        ${sectionTitle('📬', 'Contact Information', 'Edit email, phone, location and social links shown in the contact section.')}

        <div class="ap-card">
          <h4 class="ap-card-title">Primary Contact Details</h4>
          <div class="ap-grid-2">
            ${fieldRow('Email Address', textInput('ap-contact-email', p.email, 'name@domain.com'))}
            ${fieldRow('Phone Number', textInput('ap-contact-phone', p.phone, '+91 00000 00000'))}
          </div>
          ${fieldRow('Location / Base', textInput('ap-contact-location', p.location, 'Chennai, India / Remote'))}
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Social Profiles & Links</h4>
          <div class="ap-grid-2">
            ${fieldRow('Behance URL', textInput('ap-social-behance', p.behance, 'https://behance.net/...'))}
            ${fieldRow('Dribbble URL', textInput('ap-social-dribbble', p.dribbble, 'https://dribbble.com/...'))}
            ${fieldRow('Instagram URL', textInput('ap-social-instagram', p.instagram, 'https://instagram.com/...'))}
            ${fieldRow('LinkedIn URL', textInput('ap-social-linkedin', p.linkedin, 'https://linkedin.com/in/...'))}
          </div>
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Contact Section Headline Text</h4>
          ${fieldRow('Section Heading Line 1', textInput('ap-contact-h1', p.contactH1 || "LET'S BUILD", 'LET\'S BUILD'))}
          ${fieldRow('Section Heading Line 2', textInput('ap-contact-h2', p.contactH2 || 'SOMETHING', 'SOMETHING'))}
          ${fieldRow('Section Heading Accent Word', textInput('ap-contact-h3', p.contactH3 || 'ICONIC.', 'ICONIC.'))}
          ${fieldRow('Contact Intro Paragraph', textareaInput('ap-contact-intro', p.contactIntro || '', 3, 'Accepting select brand identity commissions...'))}
        </div>

        <div class="ap-save-row">
          <button type="button" class="ap-save-primary" onclick="AdminPanel.saveContact()">💾 Save Contact Info</button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // TAB 2 (STATS): COUNTS & NUMBERS (HERO STATS, SLIDES & TOTALS)
  // --------------------------------------------------------------------------
  function renderStatsTab(data) {
    const stats = (data.profile || {}).stats || [];
    const totalSlides = (data.slides || []).length;
    const totalCaseStudies = (data.caseStudies || []).length;

    return `
      <div class="ap-tab-content">
        ${sectionTitle('🔢', 'Counts & Numbers Editor', 'Directly edit hero counter numbers, labels, and view portfolio counts.')}

        <!-- Live Visual Preview of Counters -->
        <div class="ap-card">
          <div class="ap-card-header-flex">
            <h4 class="ap-card-title">Live Preview (As Shown on Your Site)</h4>
            <span class="ap-badge-live">Live Preview</span>
          </div>
          <div class="ap-stats-preview-grid" id="ap-stats-live-preview">
            ${stats.map((s, i) => `
              <div class="ap-stat-preview-card">
                <div class="ap-stat-preview-num" id="ap-preview-val-${i}">${escHtml(s.value || '0')}</div>
                <div class="ap-stat-preview-lbl" id="ap-preview-lbl-${i}">${escHtml(s.label || 'Counter')}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Individual Stat Counters Editor -->
        <div class="ap-card">
          <div class="ap-card-header-flex">
            <h4 class="ap-card-title">Edit Each Counter Card</h4>
            <button type="button" class="ap-add-btn" onclick="AdminPanel.addStat()">➕ Add New Counter</button>
          </div>
          <p class="ap-card-desc">Changes automatically update in real-time as you type, or click "Save Counts" below.</p>

          <div id="ap-stats-list" class="ap-stats-edit-list">
            ${stats.map((s, i) => `
              <div class="ap-stat-edit-item">
                <div class="ap-stat-item-header">
                  <span class="ap-stat-badge">Counter #${i + 1}</span>
                  <div class="ap-stat-reorder-btns">
                    ${i > 0 ? `<button type="button" class="ap-mini-btn" onclick="AdminPanel.moveStat(${i}, 'up')" title="Move Left/Up">←</button>` : ''}
                    ${i < stats.length - 1 ? `<button type="button" class="ap-mini-btn" onclick="AdminPanel.moveStat(${i}, 'down')" title="Move Right/Down">→</button>` : ''}
                    <button type="button" class="ap-mini-btn ap-del-btn-alt" onclick="AdminPanel.removeStat(${i})" title="Delete Counter">🗑</button>
                  </div>
                </div>
                <div class="ap-grid-2">
                  <div class="ap-field">
                    <label class="ap-label">Count / Number (e.g. 120+, 66, 24)</label>
                    <input 
                      type="text" 
                      value="${escHtml(s.value)}" 
                      placeholder="e.g. 120+" 
                      class="ap-input ap-stat-value-input" 
                      id="ap-stat-val-${i}" 
                      oninput="AdminPanel.updateStatField(${i}, 'value', this.value)"
                    />
                  </div>
                  <div class="ap-field">
                    <label class="ap-label">Counter Label / Description</label>
                    <input 
                      type="text" 
                      value="${escHtml(s.label)}" 
                      placeholder="e.g. Curated Slides & Assets" 
                      class="ap-input" 
                      id="ap-stat-lbl-${i}" 
                      oninput="AdminPanel.updateStatField(${i}, 'label', this.value)"
                    />
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Quick Presets -->
          <div class="ap-stat-presets-row">
            <span class="ap-label">Quick Counter Presets:</span>
            <div class="ap-presets-chips">
              <button type="button" class="ap-preset-chip" onclick="AdminPanel.addPresetStat('66', 'Published Slide Deck')">+ Slide Deck (66)</button>
              <button type="button" class="ap-preset-chip" onclick="AdminPanel.addPresetStat('120+', 'Curated Assets & Works')">+ Curated Assets</button>
              <button type="button" class="ap-preset-chip" onclick="AdminPanel.addPresetStat('24', 'Brand Identity Systems')">+ Identity Systems</button>
              <button type="button" class="ap-preset-chip" onclick="AdminPanel.addPresetStat('08+', 'Motion Reels & Videos')">+ Motion Reels</button>
              <button type="button" class="ap-preset-chip" onclick="AdminPanel.addPresetStat('100%', 'Client Satisfaction')">+ Satisfaction</button>
            </div>
          </div>
        </div>

        <!-- Global Counts Overview -->
        <div class="ap-card">
          <h4 class="ap-card-title">Portfolio System Totals</h4>
          <div class="ap-grid-2">
            <div class="ap-info-box">
              <span class="ap-info-num">${totalSlides}</span>
              <span class="ap-info-lbl">Total Slides in Stream</span>
            </div>
            <div class="ap-info-box">
              <span class="ap-info-num">${totalCaseStudies}</span>
              <span class="ap-info-lbl">Case Studies</span>
            </div>
          </div>
        </div>

        <div class="ap-save-row">
          <button type="button" class="ap-save-primary" onclick="AdminPanel.saveStats()">💾 Save Counts</button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // TAB 6: COLORS & THEME
  // --------------------------------------------------------------------------
  function renderThemeTab(data) {
    const themes = [
      { name: 'Acid Lime (Default)', hex: '#ccff00' },
      { name: 'Neon Cyan', hex: '#00f0ff' },
      { name: 'Ultra Red', hex: '#ff2a4b' },
      { name: 'Electric Violet', hex: '#a855f7' },
      { name: 'Solar Amber', hex: '#ffaa00' },
      { name: 'Hot Pink', hex: '#ff2d9e' },
      { name: 'Mint Green', hex: '#00ffb3' },
      { name: 'Pure White', hex: '#ffffff' },
    ];

    return `
      <div class="ap-tab-content">
        ${sectionTitle('🎨', 'Colors & Visual Theme', 'Change the accent color that highlights your entire portfolio.')}

        <div class="ap-card">
          <h4 class="ap-card-title">Preset Accent Colors</h4>
          <div class="ap-color-grid">
            ${themes.map(t => `
              <button type="button" class="ap-color-swatch" onclick="AdminPanel.applyAccent('${t.hex}')" title="${t.name}">
                <span class="ap-swatch-dot" style="background:${t.hex}"></span>
                <span class="ap-swatch-name">${t.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Custom Accent Color</h4>
          <div class="ap-color-custom-row">
            <input type="color" id="ap-color-picker" onchange="AdminPanel.applyAccent(this.value)" class="ap-color-picker" value="#ccff00" />
            <input type="text" id="ap-color-hex" placeholder="#ccff00" class="ap-input ap-color-hex-input" />
            <button type="button" class="ap-apply-btn" onclick="AdminPanel.applyAccentFromInput()">Apply</button>
          </div>
          <div class="ap-color-preview" id="ap-color-preview">
            <span>Preview: <strong id="ap-color-preview-text" style="color:var(--accent)">Accent Color</strong></span>
            <div class="ap-color-preview-bar" id="ap-color-preview-bar" style="background:var(--accent)"></div>
          </div>
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Background Color</h4>
          <div class="ap-color-custom-row">
            <input type="color" id="ap-bg-picker" value="#08080a" onchange="AdminPanel.applyBgColor(this.value)" class="ap-color-picker" />
            <input type="text" id="ap-bg-hex" placeholder="#08080a" class="ap-input ap-color-hex-input" />
            <button type="button" class="ap-apply-btn" onclick="AdminPanel.applyBgFromInput()">Apply</button>
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // TAB 7: EXPORT & BACKUP
  // --------------------------------------------------------------------------
  function renderExportTab(data) {
    return `
      <div class="ap-tab-content">
        ${sectionTitle('💾', 'Export, Import & Backup', 'Download your portfolio data or import a backup.')}

        <div class="ap-card">
          <h4 class="ap-card-title">Export Portfolio Data</h4>
          <p class="ap-card-desc">Download your customized portfolio as a <code>portfolio-data.js</code> file. Replace the existing file to make changes permanent even after clearing browser storage.</p>
          <div class="ap-export-btns">
            <button type="button" class="ap-save-primary" onclick="AdminPanel.downloadData()">
              📥 Download portfolio-data.js
            </button>
            <button type="button" class="ap-secondary-btn" onclick="AdminPanel.copyJson()">
              📋 Copy as JSON
            </button>
          </div>
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Import Portfolio Data</h4>
          <p class="ap-card-desc">Import a previously exported <code>portfolio-data.js</code> or JSON file to restore a backup.</p>
          <label class="ap-upload-btn">
            📁 Import portfolio-data.js or JSON
            <input type="file" accept=".js,.json" class="hidden" onchange="AdminPanel.importData(this)" />
          </label>
        </div>

        <div class="ap-card">
          <h4 class="ap-card-title">Browser Storage Info</h4>
          <div id="ap-storage-info" class="ap-storage-info">Loading...</div>
          <button type="button" class="ap-secondary-btn" onclick="AdminPanel.refreshStorageInfo()">🔄 Refresh</button>
        </div>

        <div class="ap-card ap-danger-card">
          <h4 class="ap-card-title ap-danger-title">⚠️ Danger Zone</h4>
          <p class="ap-card-desc">Reset ALL changes and restore the original Behance portfolio template. This cannot be undone.</p>
          <button type="button" class="ap-danger-btn" onclick="AdminPanel.resetDefaults()">
            🔄 Reset Everything to Defaults
          </button>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // INIT TAB EVENT HANDLERS (after render)
  // --------------------------------------------------------------------------
  function initTabHandlers(tab, data) {
    if (tab === 'export') {
      refreshStorageInfo();
    }
    if (tab === 'theme') {
      const hexInput = document.getElementById('ap-color-hex');
      if (hexInput) {
        const current = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#ccff00';
        hexInput.value = current;
        const picker = document.getElementById('ap-color-picker');
        if (picker) picker.value = current;
      }
    }
  }

  // --------------------------------------------------------------------------
  // SAVE FUNCTIONS
  // --------------------------------------------------------------------------
  function saveProfile() {
    const data = window.PortfolioApp.getData();
    const p = data.profile;

    p.name = val('ap-name');
    p.role = val('ap-role');
    p.year = val('ap-year');
    p.initials = val('ap-initials');
    p.tagline = val('ap-tagline');
    p.statusBadge = val('ap-status');
    p.behance = val('ap-behance');
    p.dribbble = val('ap-dribbble');
    p.instagram = val('ap-instagram');
    p.linkedin = val('ap-linkedin');

    // Disciplines
    const discStr = val('ap-disciplines');
    p.disciplines = discStr.split(',').map(d => d.trim()).filter(Boolean);

    // Photo
    const photoUrl = val('ap-photo-url');
    if (photoUrl) p.photo = photoUrl;

    window.PortfolioApp.setData(data);
    toast('✅ Profile & Hero saved!');
  }

  function saveAbout() {
    const data = window.PortfolioApp.getData();
    const about = data.about || {};

    about.headline = val('ap-about-headline');

    // Bio paragraphs
    const bioText = val('ap-about-bio');
    about.bio = bioText.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);

    // Principles
    const principles = [];
    let i = 0;
    while (document.getElementById(`ap-principle-num-${i}`) !== null) {
      principles.push({
        number: val(`ap-principle-num-${i}`),
        title: val(`ap-principle-title-${i}`),
        desc: val(`ap-principle-desc-${i}`)
      });
      i++;
    }
    about.principles = principles;

    // Tools
    const tools = [];
    let ti = 0;
    while (document.getElementById(`ap-tool-name-${ti}`) !== null) {
      tools.push({
        name: val(`ap-tool-name-${ti}`),
        category: val(`ap-tool-cat-${ti}`),
        level: val(`ap-tool-level-${ti}`)
      });
      ti++;
    }
    about.tools = tools;

    data.about = about;
    window.PortfolioApp.setData(data);
    toast('✅ About Section saved!');
  }

  function saveContact() {
    const data = window.PortfolioApp.getData();
    const p = data.profile;

    p.email = val('ap-contact-email');
    p.phone = val('ap-contact-phone');
    p.location = val('ap-contact-location');
    p.behance = val('ap-social-behance');
    p.dribbble = val('ap-social-dribbble');
    p.instagram = val('ap-social-instagram');
    p.linkedin = val('ap-social-linkedin');
    p.contactH1 = val('ap-contact-h1');
    p.contactH2 = val('ap-contact-h2');
    p.contactH3 = val('ap-contact-h3');
    p.contactIntro = val('ap-contact-intro');

    window.PortfolioApp.setData(data);
    toast('✅ Contact Info saved!');
  }

  function saveStats() {
    const data = window.PortfolioApp.getData();
    const stats = [];
    let i = 0;
    while (document.getElementById(`ap-stat-val-${i}`) !== null) {
      stats.push({
        value: val(`ap-stat-val-${i}`),
        label: val(`ap-stat-lbl-${i}`)
      });
      i++;
    }
    data.profile.stats = stats;
    window.PortfolioApp.setData(data);
    toast('✅ Stats saved!');
  }

  function saveAll() {
    const tab = adminActiveTab;
    if (tab === 'profile') saveProfile();
    else if (tab === 'slides') toast('✅ Slides auto-save as you edit!');
    else if (tab === 'about') saveAbout();
    else if (tab === 'contact') saveContact();
    else if (tab === 'stats') saveStats();
    else toast('✅ No changes to save on this tab.');
  }

  // --------------------------------------------------------------------------
  // SLIDE OPERATIONS
  // --------------------------------------------------------------------------
  function updateSlide(slideId, field, value) {
    const data = window.PortfolioApp.getData();
    const slide = data.slides.find(s => s.id === slideId);
    if (slide) {
      slide[field] = value;
      window.PortfolioApp.setData(data);
    }
  }

  function applySlideUrl(slideId) {
    const urlInput = document.getElementById(`ap-slide-url-${slideId}`);
    if (!urlInput) return;
    const newUrl = urlInput.value.trim();
    if (!newUrl) return;
    updateSlide(slideId, 'image', newUrl);
    const imgEl = document.getElementById(`ap-slide-img-${slideId}`);
    if (imgEl) imgEl.src = newUrl;
    toast(`✅ Slide #${slideId} image URL applied!`);
  }

  function uploadSlideImage(slideId, fileInput) {
    if (!fileInput.files || !fileInput.files[0]) return;
    const file = fileInput.files[0];
    if (file.size > 10 * 1024 * 1024) {
      toast('⚠️ File too large (max 10MB). Use a smaller image or URL.');
      return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      updateSlide(slideId, 'image', dataUrl);
      const imgEl = document.getElementById(`ap-slide-img-${slideId}`);
      if (imgEl) imgEl.src = dataUrl;
      const urlEl = document.getElementById(`ap-slide-url-${slideId}`);
      if (urlEl) urlEl.value = '(uploaded file)';
      toast(`✅ Slide #${slideId} image uploaded!`);
    };
    reader.readAsDataURL(file);
  }

  function addSlide() {
    const data = window.PortfolioApp.getData();
    const slides = data.slides;
    const nextId = slides.length > 0 ? Math.max(...slides.map(s => s.id)) + 1 : 1;
    slides.push({
      id: nextId,
      number: String(nextId).padStart(2, '0'),
      title: `New Slide #${nextId}`,
      category: 'Branding',
      isMotion: false,
      image: window.PortfolioApp.getFallbackImage('New Slide ' + nextId),
      caption: 'Custom artwork for portfolio 2026.'
    });
    window.PortfolioApp.setData(data);
    setTab('slides');
    toast(`✨ Added Slide #${nextId}`);
  }

  function deleteSlide(slideId) {
    if (!confirm(`Delete slide #${slideId}? This cannot be undone.`)) return;
    const data = window.PortfolioApp.getData();
    data.slides = data.slides.filter(s => s.id !== slideId);
    window.PortfolioApp.setData(data);
    setTab('slides');
    toast(`🗑️ Deleted Slide #${slideId}`);
  }

  function moveSlide(slideId, direction) {
    const data = window.PortfolioApp.getData();
    const slides = data.slides;
    const idx = slides.findIndex(s => s.id === slideId);
    if (direction === 'up' && idx > 0) {
      [slides[idx], slides[idx-1]] = [slides[idx-1], slides[idx]];
    } else if (direction === 'down' && idx < slides.length - 1) {
      [slides[idx], slides[idx+1]] = [slides[idx+1], slides[idx]];
    }
    window.PortfolioApp.setData(data);
    setTab('slides');
  }

  // --------------------------------------------------------------------------
  // PROFILE PHOTO
  // --------------------------------------------------------------------------
  function handlePhotoUpload(fileInput) {
    if (!fileInput.files || !fileInput.files[0]) return;
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      const preview = document.getElementById('profile-photo-preview');
      const placeholder = document.getElementById('profile-photo-placeholder');
      const urlInput = document.getElementById('ap-photo-url');
      if (preview) { preview.src = dataUrl; preview.style.display = ''; }
      if (placeholder) placeholder.style.display = 'none';
      if (urlInput) urlInput.value = dataUrl;
      toast('📷 Photo uploaded! Click Save Profile to apply.');
    };
    reader.readAsDataURL(file);
  }

  function applyPhotoUrl() {
    const url = val('ap-photo-url');
    const preview = document.getElementById('profile-photo-preview');
    const placeholder = document.getElementById('profile-photo-placeholder');
    if (preview) { preview.src = url; preview.style.display = url ? '' : 'none'; }
    if (placeholder) placeholder.style.display = url ? 'none' : '';
  }

  // --------------------------------------------------------------------------
  // ABOUT HELPERS
  // --------------------------------------------------------------------------
  function addPrinciple() {
    const data = window.PortfolioApp.getData();
    const about = data.about || {};
    about.principles = about.principles || [];
    const num = String(about.principles.length + 1).padStart(2, '0');
    about.principles.push({ number: num, title: 'New Principle', desc: 'Describe this design principle.' });
    data.about = about;
    window.PortfolioApp.setData(data);
    setTab('about');
  }

  function addTool() {
    const data = window.PortfolioApp.getData();
    const about = data.about || {};
    about.tools = about.tools || [];
    about.tools.push({ name: 'New Tool', category: 'Design', level: 'PROFICIENT' });
    data.about = about;
    window.PortfolioApp.setData(data);
    setTab('about');
  }

  function removeTool(index) {
    const data = window.PortfolioApp.getData();
    const about = data.about || {};
    about.tools = (about.tools || []).filter((_, i) => i !== index);
    data.about = about;
    window.PortfolioApp.setData(data);
    setTab('about');
  }

  // --------------------------------------------------------------------------
  // STATS & COUNTS HELPERS
  // --------------------------------------------------------------------------
  function updateStatField(index, field, value) {
    const data = window.PortfolioApp.getData();
    if (data.profile && data.profile.stats && data.profile.stats[index]) {
      data.profile.stats[index][field] = value;
      window.PortfolioApp.setData(data);
      // Update live preview in panel if available
      if (field === 'value') {
        const el = document.getElementById(`ap-preview-val-${index}`);
        if (el) el.textContent = value || '0';
      } else if (field === 'label') {
        const el = document.getElementById(`ap-preview-lbl-${index}`);
        if (el) el.textContent = value || 'Counter';
      }
    }
  }

  function addPresetStat(value, label) {
    const data = window.PortfolioApp.getData();
    data.profile.stats = data.profile.stats || [];
    data.profile.stats.push({ value: value, label: label });
    window.PortfolioApp.setData(data);
    setTab('stats');
    toast(`✨ Added Counter: ${value} ${label}`);
  }

  function moveStat(index, direction) {
    const data = window.PortfolioApp.getData();
    const stats = data.profile.stats || [];
    if (direction === 'up' && index > 0) {
      [stats[index], stats[index - 1]] = [stats[index - 1], stats[index]];
    } else if (direction === 'down' && index < stats.length - 1) {
      [stats[index], stats[index + 1]] = [stats[index + 1], stats[index]];
    }
    window.PortfolioApp.setData(data);
    setTab('stats');
  }

  function addStat() {
    const data = window.PortfolioApp.getData();
    data.profile.stats = data.profile.stats || [];
    data.profile.stats.push({ value: '0+', label: 'New Counter' });
    window.PortfolioApp.setData(data);
    setTab('stats');
    toast('✨ Added new counter card');
  }

  function removeStat(index) {
    const data = window.PortfolioApp.getData();
    data.profile.stats = (data.profile.stats || []).filter((_, i) => i !== index);
    window.PortfolioApp.setData(data);
    setTab('stats');
    toast('🗑️ Removed counter');
  }

  // --------------------------------------------------------------------------
  // THEME / COLORS
  // --------------------------------------------------------------------------
  function applyAccent(hex) {
    if (!hex) return;
    document.documentElement.style.setProperty('--accent', hex);
    document.documentElement.style.setProperty('--accent-glow', hex + '40');
    localStorage.setItem('portfolio_2026_accent_color', hex);

    // Update inputs
    const picker = document.getElementById('ap-color-picker');
    const hexInput = document.getElementById('ap-color-hex');
    if (picker) picker.value = hex;
    if (hexInput) hexInput.value = hex;

    // Preview
    const bar = document.getElementById('ap-color-preview-bar');
    const text = document.getElementById('ap-color-preview-text');
    if (bar) bar.style.background = hex;
    if (text) { text.style.color = hex; text.textContent = hex; }

    toast(`🎨 Accent color set to ${hex}`);
  }

  function applyAccentFromInput() {
    const hex = val('ap-color-hex');
    if (hex) applyAccent(hex.startsWith('#') ? hex : '#' + hex);
  }

  function applyBgColor(hex) {
    if (!hex) return;
    document.documentElement.style.setProperty('--bg-dark', hex);
    document.body.style.backgroundColor = hex;
    const bgInput = document.getElementById('ap-bg-hex');
    if (bgInput) bgInput.value = hex;
    toast(`🎨 Background color set to ${hex}`);
  }

  function applyBgFromInput() {
    const hex = val('ap-bg-hex');
    if (hex) applyBgColor(hex.startsWith('#') ? hex : '#' + hex);
  }

  // --------------------------------------------------------------------------
  // EXPORT / IMPORT / RESET
  // --------------------------------------------------------------------------
  function downloadData() {
    const data = window.PortfolioApp.getData();
    const code = `/**\n * GRAPHIC DESIGN PORTFOLIO 2026 — CUSTOMIZED DATA\n * Exported: ${new Date().toISOString()}\n */\nwindow.PORTFOLIO_DATA = ${JSON.stringify(data, null, 2)};\n`;
    const blob = new Blob([code], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'portfolio-data.js';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('📥 Downloaded portfolio-data.js!');
  }

  function copyJson() {
    const data = window.PortfolioApp.getData();
    navigator.clipboard.writeText(JSON.stringify(data, null, 2))
      .then(() => toast('📋 JSON copied to clipboard!'))
      .catch(() => toast('⚠️ Clipboard copy failed.'));
  }

  function importData(fileInput) {
    if (!fileInput.files || !fileInput.files[0]) return;
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        let rawText = e.target.result;
        // Strip JS wrapper if present
        rawText = rawText.replace(/^[\s\S]*?window\.PORTFOLIO_DATA\s*=\s*/, '').replace(/;\s*$/, '');
        const parsed = JSON.parse(rawText);
        window.PortfolioApp.setData(parsed);
        setTab('profile');
        toast('✅ Portfolio data imported successfully!');
      } catch(err) {
        toast('❌ Import failed. Check file format.');
        console.error(err);
      }
    };
    reader.readAsText(file);
  }

  function refreshStorageInfo() {
    const el = document.getElementById('ap-storage-info');
    if (!el) return;
    try {
      const STORAGE_KEY = 'portfolio_2026_custom_data_v1';
      const stored = localStorage.getItem(STORAGE_KEY);
      const sizeKB = stored ? (new Blob([stored]).size / 1024).toFixed(1) : 0;
      const slideCount = window.PortfolioApp.getData().slides.length;
      el.innerHTML = `
        <div class="ap-storage-row"><span>Storage Used:</span> <strong>${sizeKB} KB</strong></div>
        <div class="ap-storage-row"><span>Slides:</span> <strong>${slideCount}</strong></div>
        <div class="ap-storage-row"><span>Storage Key:</span> <code>${STORAGE_KEY}</code></div>
        <div class="ap-storage-row"><span>Auth Key:</span> <code>portfolio_admin_auth_user</code></div>
      `;
    } catch(e) {
      el.innerHTML = '<span>Could not read storage info.</span>';
    }
  }

  function resetDefaults() {
    if (!confirm('⚠️ RESET ALL? This will erase all your custom changes and restore the original Behance 2026 template. This cannot be undone.')) return;
    localStorage.removeItem('portfolio_2026_custom_data_v1');
    localStorage.removeItem('portfolio_2026_accent_color');
    window.location.reload();
  }

  function logout() {
    sessionStorage.removeItem('portfolio_admin_auth_user');
    localStorage.removeItem('portfolio_admin_auth_user');
    closeAdminPanel();
    toast('🔒 Logged out. Customizer is now locked.');
  }

  // --------------------------------------------------------------------------
  // HELPERS
  // --------------------------------------------------------------------------
  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value : '';
  }

  function toast(msg) {
    if (window.PortfolioApp && window.PortfolioApp.showToast) {
      window.PortfolioApp.showToast(msg);
    } else {
      console.log(msg);
    }
  }

  // --------------------------------------------------------------------------
  // CSS INJECTION
  // --------------------------------------------------------------------------
  function injectStyles() {
    if (document.getElementById('admin-panel-styles')) return;
    const style = document.createElement('style');
    style.id = 'admin-panel-styles';
    style.textContent = `
      /* ===== ADMIN PANEL OVERLAY ===== */
      .admin-panel-modal {
        position: fixed; inset: 0; z-index: 300;
        background: #07070a;
        display: flex; flex-direction: column;
        opacity: 0; pointer-events: none;
        transition: opacity 0.3s ease;
        font-family: 'Outfit', system-ui, sans-serif;
      }
      .admin-panel-modal.open { opacity: 1; pointer-events: auto; }

      /* Header */
      .admin-panel-header {
        display: flex; align-items: center; justify-content: space-between;
        padding: 14px 24px;
        background: #0d0d11;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        flex-shrink: 0;
        gap: 12px;
        flex-wrap: wrap;
      }
      .admin-header-left { display: flex; align-items: center; gap: 14px; }
      .admin-logo-badge {
        width: 40px; height: 40px; border-radius: 10px;
        background: var(--accent, #ccff00); color: #000;
        display: flex; align-items: center; justify-content: center;
        font-size: 20px; font-weight: 800; flex-shrink: 0;
      }
      .admin-title-text {
        font-family: 'Syne', 'Outfit', sans-serif;
        font-size: 1rem; font-weight: 800; color: #fff;
        letter-spacing: 0.08em; margin: 0;
      }
      .admin-subtitle-text { font-size: 0.75rem; color: #888; margin: 0; font-family: monospace; }
      .admin-header-actions { display: flex; align-items: center; gap: 10px; }
      .admin-save-btn {
        padding: 8px 18px; border-radius: 8px;
        background: var(--accent, #ccff00); color: #000;
        font-weight: 700; font-size: 0.8rem; border: none;
        cursor: pointer; transition: opacity 0.2s;
      }
      .admin-save-btn:hover { opacity: 0.85; }
      .admin-close-btn {
        padding: 8px 16px; border-radius: 8px;
        background: rgba(255,255,255,0.08); color: #fff;
        font-size: 0.8rem; border: 1px solid rgba(255,255,255,0.15);
        cursor: pointer; transition: all 0.2s;
      }
      .admin-close-btn:hover { background: rgba(255,50,50,0.2); border-color: rgba(255,80,80,0.4); color: #ff8888; }

      /* Body Layout */
      .admin-panel-body {
        display: flex; flex: 1; overflow: hidden;
      }

      /* Sidebar */
      .admin-sidebar {
        width: 220px; min-width: 200px;
        background: #0a0a0e;
        border-right: 1px solid rgba(255,255,255,0.08);
        display: flex; flex-direction: column;
        overflow-y: auto; flex-shrink: 0;
        padding: 16px 10px;
        gap: 4px;
      }
      .admin-sidebar-label {
        font-size: 0.65rem; font-family: monospace;
        color: #555; letter-spacing: 0.12em; text-transform: uppercase;
        padding: 0 8px 8px;
      }
      .admin-nav-btn {
        display: flex; align-items: center; gap: 10px;
        padding: 10px 12px; border-radius: 8px;
        background: transparent; color: #888;
        font-size: 0.82rem; font-weight: 500;
        border: none; cursor: pointer; text-align: left; width: 100%;
        transition: all 0.18s;
      }
      .admin-nav-btn:hover { background: rgba(255,255,255,0.06); color: #fff; }
      .admin-nav-btn.active { background: var(--accent,#ccff00); color: #000; font-weight: 700; }
      .admin-nav-icon { font-size: 1rem; flex-shrink: 0; }

      .admin-sidebar-footer {
        margin-top: auto; padding-top: 16px;
        border-top: 1px solid rgba(255,255,255,0.07);
        display: flex; flex-direction: column; gap: 6px;
      }
      .admin-reset-btn, .admin-logout-btn {
        padding: 8px 12px; border-radius: 7px;
        font-size: 0.78rem; cursor: pointer; border: none; width: 100%;
      }
      .admin-reset-btn { background: rgba(255,160,0,0.12); color: #ffb700; border: 1px solid rgba(255,160,0,0.25); }
      .admin-logout-btn { background: rgba(255,50,50,0.1); color: #ff7070; border: 1px solid rgba(255,80,80,0.2); }
      .admin-reset-btn:hover { background: rgba(255,160,0,0.22); }
      .admin-logout-btn:hover { background: rgba(255,50,50,0.2); }

      /* Content Area */
      .admin-content {
        flex: 1; overflow-y: auto;
        background: #09090d;
      }

      /* Tab Content */
      .ap-tab-content {
        padding: 24px; max-width: 900px;
        display: flex; flex-direction: column; gap: 20px;
      }

      /* Section Title */
      .ap-section-title {
        display: flex; align-items: center; gap: 14px;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
      .ap-section-icon { font-size: 2rem; }
      .ap-section-heading { font-size: 1.2rem; font-weight: 800; color: #fff; margin: 0; font-family: 'Syne','Outfit',sans-serif; }
      .ap-section-desc { font-size: 0.8rem; color: #666; margin: 4px 0 0; font-family: monospace; }

      /* Cards */
      .ap-card {
        background: #10101a;
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 14px;
        padding: 20px;
        display: flex; flex-direction: column; gap: 14px;
      }
      .ap-card-title {
        font-size: 0.85rem; font-weight: 700; color: #ccc;
        text-transform: uppercase; letter-spacing: 0.08em; margin: 0;
        font-family: monospace;
      }
      .ap-card-desc { font-size: 0.8rem; color: #666; margin: 0; line-height: 1.6; }
      .ap-card-desc code { color: var(--accent,#ccff00); background: rgba(204,255,0,0.08); padding: 1px 5px; border-radius: 3px; }

      /* Fields */
      .ap-field { display: flex; flex-direction: column; gap: 5px; }
      .ap-label { font-size: 0.72rem; font-family: monospace; text-transform: uppercase; letter-spacing: 0.08em; color: #888; }
      .ap-hint { font-size: 0.7rem; color: #555; font-family: monospace; margin: 0; }
      .ap-input {
        background: #14141e; border: 1px solid rgba(255,255,255,0.1);
        color: #e8e8e8; border-radius: 8px; padding: 9px 12px;
        font-size: 0.875rem; width: 100%; box-sizing: border-box;
        font-family: inherit; transition: border-color 0.2s, box-shadow 0.2s;
        resize: vertical;
      }
      .ap-input:focus { outline: none; border-color: var(--accent,#ccff00); box-shadow: 0 0 0 2px rgba(204,255,0,0.15); }
      textarea.ap-input { min-height: 60px; }

      /* Grids */
      .ap-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
      .ap-grid-3 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
      @media (max-width: 600px) {
        .ap-grid-2, .ap-grid-3 { grid-template-columns: 1fr; }
        .admin-sidebar { width: 60px; min-width: 56px; }
        .admin-nav-btn span:not(.admin-nav-icon) { display: none; }
        .admin-sidebar-label { display: none; }
        .admin-sidebar-footer button span { display: none; }
      }

      /* Image Upload */
      .ap-image-upload-row {
        display: flex; gap: 16px; align-items: flex-start; flex-wrap: wrap;
      }
      .ap-img-preview-box {
        width: 120px; height: 120px; border-radius: 10px;
        background: #1a1a24; border: 1px dashed rgba(255,255,255,0.2);
        display: flex; align-items: center; justify-content: center;
        overflow: hidden; flex-shrink: 0; color: #555; font-size: 0.75rem;
        text-align: center;
      }
      .ap-img-preview-box img { width: 100%; height: 100%; object-fit: cover; }
      .ap-upload-controls { flex: 1; display: flex; flex-direction: column; gap: 10px; min-width: 200px; }
      .ap-upload-btn {
        display: inline-flex; align-items: center; justify-content: center; gap: 8px;
        padding: 10px 16px; border-radius: 8px;
        background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
        color: #ccc; font-size: 0.8rem; cursor: pointer; transition: all 0.2s;
        font-family: inherit;
      }
      .ap-upload-btn:hover { background: rgba(255,255,255,0.14); color: #fff; }
      .ap-apply-btn {
        padding: 8px 16px; border-radius: 7px;
        background: var(--accent,#ccff00); color: #000;
        font-weight: 700; font-size: 0.78rem; border: none;
        cursor: pointer; align-self: flex-start;
      }
      .ap-apply-btn:hover { opacity: 0.85; }

      /* Slides Grid */
      .ap-slides-toolbar {
        display: flex; align-items: center; justify-content: space-between;
        gap: 10px; flex-wrap: wrap;
      }
      .ap-add-slide-btn {
        padding: 10px 20px; border-radius: 8px;
        background: rgba(204,255,0,0.1); border: 1px dashed var(--accent,#ccff00);
        color: var(--accent,#ccff00); font-size: 0.8rem; font-weight: 600;
        cursor: pointer; transition: all 0.2s;
      }
      .ap-add-slide-btn:hover { background: rgba(204,255,0,0.2); }
      .ap-slide-count { font-size: 0.75rem; font-family: monospace; color: #666; }

      .ap-slides-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 16px;
      }
      .ap-slide-card {
        background: #10101a; border: 1px solid rgba(255,255,255,0.08);
        border-radius: 12px; overflow: hidden;
        transition: border-color 0.2s;
      }
      .ap-slide-card:hover { border-color: rgba(255,255,255,0.18); }
      .ap-slide-header {
        display: flex; align-items: center; justify-content: space-between;
        padding: 10px 12px;
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }
      .ap-slide-num { font-family: monospace; font-size: 0.75rem; color: var(--accent,#ccff00); font-weight: 700; }
      .ap-slide-actions-header { display: flex; gap: 4px; }
      .ap-slide-move-btn {
        width: 26px; height: 26px; border-radius: 5px;
        background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1);
        color: #aaa; font-size: 0.8rem; cursor: pointer;
      }
      .ap-slide-move-btn:hover { background: rgba(255,255,255,0.15); color: #fff; }
      .ap-slide-delete-btn {
        width: 26px; height: 26px; border-radius: 5px;
        background: rgba(255,50,50,0.1); border: 1px solid rgba(255,80,80,0.2);
        color: #ff7070; font-size: 0.8rem; cursor: pointer;
      }
      .ap-slide-delete-btn:hover { background: rgba(255,50,50,0.25); }

      .ap-slide-img-area {
        position: relative; width: 100%; padding-top: 56.25%; /* 16:9 */
        background: #000; overflow: hidden; cursor: pointer;
      }
      .ap-slide-thumb {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;
      }
      .ap-slide-img-overlay {
        position: absolute; inset: 0;
        background: rgba(0,0,0,0.6); opacity: 0;
        display: flex; align-items: center; justify-content: center;
        transition: opacity 0.2s;
      }
      .ap-slide-img-area:hover .ap-slide-img-overlay { opacity: 1; }
      .ap-upload-overlay-btn {
        padding: 8px 16px; border-radius: 8px;
        background: var(--accent,#ccff00); color: #000;
        font-size: 0.78rem; font-weight: 700; cursor: pointer;
        border: none; font-family: inherit;
      }

      .ap-slide-fields { padding: 12px; display: flex; flex-direction: column; gap: 8px; }
      .ap-slide-title-input { font-weight: 600; }
      .ap-slide-caption { font-size: 0.8rem; }
      .ap-slide-meta-row { display: flex; gap: 8px; align-items: center; }
      .ap-slide-cat { flex: 1; }
      .ap-motion-check { display: flex; align-items: center; gap: 5px; font-size: 0.75rem; color: #888; cursor: pointer; white-space: nowrap; }
      .ap-motion-check input { accent-color: var(--accent,#ccff00); }

      .ap-slide-url-row { display: flex; gap: 6px; }
      .ap-slide-url-input { flex: 1; font-size: 0.75rem; font-family: monospace; }
      .ap-apply-url-btn {
        padding: 8px 12px; border-radius: 7px;
        background: rgba(204,255,0,0.15); border: 1px solid rgba(204,255,0,0.3);
        color: var(--accent,#ccff00); font-weight: 700; font-size: 0.85rem;
        cursor: pointer; flex-shrink: 0;
      }
      .ap-apply-url-btn:hover { background: rgba(204,255,0,0.3); }

      /* About / Tools / Principles */
      .ap-principle-card {
        padding: 14px; background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.07); border-radius: 8px;
        display: flex; flex-direction: column; gap: 10px;
      }
      .ap-tool-row { display: flex; gap: 8px; align-items: center; margin-bottom: 8px; }
      .ap-tool-row .ap-input { padding: 7px 10px; font-size: 0.8rem; }
      .ap-select-small { min-width: 100px; max-width: 130px; }
      .ap-del-btn {
        width: 30px; height: 30px; border-radius: 6px;
        background: rgba(255,50,50,0.1); border: 1px solid rgba(255,80,80,0.2);
        color: #ff7070; font-size: 0.9rem; cursor: pointer; flex-shrink: 0;
      }
      .ap-del-btn:hover { background: rgba(255,50,50,0.25); }
      .ap-add-btn {
        padding: 8px 14px; border-radius: 7px;
        background: rgba(255,255,255,0.06); border: 1px dashed rgba(255,255,255,0.2);
        color: #aaa; font-size: 0.78rem; cursor: pointer; align-self: flex-start;
      }
      .ap-add-btn:hover { color: #fff; border-color: rgba(255,255,255,0.4); }

      /* Counts & Stats Editor */
      .ap-card-header-flex { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
      .ap-badge-live { font-family: monospace; font-size: 0.68rem; color: var(--accent,#ccff00); background: rgba(204,255,0,0.12); border: 1px solid rgba(204,255,0,0.3); border-radius: 999px; padding: 2px 8px; text-transform: uppercase; }
      .ap-stats-preview-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; margin-top: 6px; }
      .ap-stat-preview-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px; }
      .ap-stat-preview-num { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: #fff; }
      .ap-stat-preview-lbl { font-family: monospace; font-size: 0.7rem; color: #888; text-transform: uppercase; margin-top: 2px; }
      .ap-stats-edit-list { display: flex; flex-direction: column; gap: 12px; margin-top: 8px; }
      .ap-stat-edit-item { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 14px; }
      .ap-stat-item-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
      .ap-stat-badge { font-family: monospace; font-size: 0.72rem; color: var(--accent,#ccff00); font-weight: 700; }
      .ap-stat-reorder-btns { display: flex; gap: 4px; }
      .ap-mini-btn { width: 26px; height: 26px; border-radius: 5px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); color: #ccc; font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; justify-content: center; }
      .ap-mini-btn:hover { background: rgba(255,255,255,0.15); color: #fff; }
      .ap-del-btn-alt { background: rgba(255,50,50,0.1); border-color: rgba(255,50,50,0.25); color: #ff7070; }
      .ap-del-btn-alt:hover { background: rgba(255,50,50,0.25); }
      .ap-stat-presets-row { margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.07); display: flex; flex-direction: column; gap: 8px; }
      .ap-presets-chips { display: flex; flex-wrap: wrap; gap: 6px; }
      .ap-preset-chip { padding: 5px 10px; border-radius: 6px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #ccc; font-family: monospace; font-size: 0.72rem; cursor: pointer; }
      .ap-preset-chip:hover { border-color: var(--accent,#ccff00); color: #fff; background: rgba(204,255,0,0.08); }
      .ap-info-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 14px; text-align: center; }
      .ap-info-num { display: block; font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; color: var(--accent,#ccff00); }
      .ap-info-lbl { display: block; font-family: monospace; font-size: 0.75rem; color: #888; text-transform: uppercase; margin-top: 4px; }
      .ap-stat-value-input { font-size: 1.1rem; font-weight: 700; color: var(--accent,#ccff00); }

      /* Colors */
      .ap-color-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(155px,1fr)); gap: 10px; }
      .ap-color-swatch {
        display: flex; align-items: center; gap: 10px;
        padding: 10px 14px; border-radius: 10px;
        background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
        cursor: pointer; transition: all 0.2s; text-align: left;
      }
      .ap-color-swatch:hover { border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.1); }
      .ap-swatch-dot { width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.4); }
      .ap-swatch-name { font-size: 0.78rem; color: #ccc; }
      .ap-color-custom-row { display: flex; gap: 10px; align-items: center; }
      .ap-color-picker { width: 44px; height: 40px; border: none; background: none; cursor: pointer; border-radius: 6px; padding: 0; }
      .ap-color-hex-input { flex: 1; font-family: monospace; font-size: 0.85rem; }
      .ap-color-preview { display: flex; flex-direction: column; gap: 8px; }
      .ap-color-preview-bar { height: 6px; border-radius: 4px; transition: background 0.3s; }

      /* Export */
      .ap-export-btns { display: flex; gap: 10px; flex-wrap: wrap; }
      .ap-secondary-btn {
        padding: 10px 18px; border-radius: 8px;
        background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15);
        color: #ccc; font-size: 0.8rem; cursor: pointer;
      }
      .ap-secondary-btn:hover { color: #fff; background: rgba(255,255,255,0.12); }
      .ap-storage-info { display: flex; flex-direction: column; gap: 6px; }
      .ap-storage-row { display: flex; justify-content: space-between; font-size: 0.8rem; font-family: monospace; color: #aaa; padding: 6px 10px; background: rgba(255,255,255,0.03); border-radius: 5px; }
      .ap-storage-row strong { color: var(--accent,#ccff00); }
      .ap-storage-row code { font-size: 0.7rem; color: #888; }

      /* Danger */
      .ap-danger-card { border-color: rgba(255,80,80,0.2) !important; background: rgba(255,50,50,0.05) !important; }
      .ap-danger-title { color: #ff7070 !important; }
      .ap-danger-btn {
        padding: 10px 20px; border-radius: 8px;
        background: rgba(255,50,50,0.15); border: 1px solid rgba(255,80,80,0.3);
        color: #ff8080; font-size: 0.82rem; cursor: pointer;
      }
      .ap-danger-btn:hover { background: rgba(255,50,50,0.3); }

      /* Save Row */
      .ap-save-row { display: flex; justify-content: flex-start; padding: 4px 0 16px; }
      .ap-save-primary {
        padding: 12px 28px; border-radius: 10px;
        background: var(--accent,#ccff00); color: #000;
        font-weight: 800; font-size: 0.88rem; border: none; cursor: pointer;
        transition: opacity 0.2s; letter-spacing: 0.03em;
      }
      .ap-save-primary:hover { opacity: 0.88; }

      .hidden { display: none !important; }
    `;
    document.head.appendChild(style);
  }

  // --------------------------------------------------------------------------
  // PUBLIC API
  // --------------------------------------------------------------------------
  window.AdminPanel = {
    open: openAdminPanel,
    close: closeAdminPanel,
    setTab: setTab,
    saveAll: saveAll,
    saveProfile: saveProfile,
    saveAbout: saveAbout,
    saveContact: saveContact,
    saveStats: saveStats,
    // Slides
    addSlide: addSlide,
    deleteSlide: deleteSlide,
    moveSlide: moveSlide,
    updateSlide: updateSlide,
    applySlideUrl: applySlideUrl,
    uploadSlideImage: uploadSlideImage,
    // About
    addPrinciple: addPrinciple,
    addTool: addTool,
    removeTool: removeTool,
    // Stats & Counts
    addStat: addStat,
    removeStat: removeStat,
    moveStat: moveStat,
    updateStatField: updateStatField,
    addPresetStat: addPresetStat,
    // Theme
    applyAccent: applyAccent,
    applyAccentFromInput: applyAccentFromInput,
    applyBgColor: applyBgColor,
    applyBgFromInput: applyBgFromInput,
    // Photo
    handlePhotoUpload: handlePhotoUpload,
    applyPhotoUrl: applyPhotoUrl,
    // Export/Import
    downloadData: downloadData,
    copyJson: copyJson,
    importData: importData,
    refreshStorageInfo: refreshStorageInfo,
    resetDefaults: resetDefaults,
    logout: logout,
  };

  // Auto-inject styles on load
  injectStyles();

})();
