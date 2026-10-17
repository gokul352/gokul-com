// Interactive CMS Admin Dashboard Component for Live Portfolio Content Management

import { savePortfolioData, resetPortfolioData } from '../data/portfolioData.js';

export function renderAdminPanel() {
    return `
    <div id="admin-panel-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-6 overflow-y-auto">
        <div class="relative w-full max-w-6xl my-6 rounded-3xl glass-panel-glow border-2 border-brand-red/60 bg-brand-dark shadow-2xl text-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
            
            <!-- Dashboard Top Header Bar -->
            <div class="bg-brand-panel px-6 py-4 border-b border-white/10 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center font-bold text-sm">
                        <i data-lucide="sliders" class="w-4 h-4"></i>
                    </div>
                    <div>
                        <h2 class="text-xl font-display font-bold text-white tracking-wider uppercase">CMS ADMIN DASHBOARD</h2>
                        <p class="text-[10px] font-mono text-slate-400">REAL-TIME PORTFOLIO CONTROL CENTER</p>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <button id="admin-reset-btn" class="px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-400 hover:bg-red-900 hover:text-white font-mono text-xs transition-colors">
                        RESET DEFAULTS
                    </button>
                    <button id="close-admin-panel" class="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-colors">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>

            <!-- Main Layout: Sidebar Navigation + Content Body -->
            <div class="flex-1 flex flex-col md:flex-row overflow-hidden">
                
                <!-- Sidebar Tabs -->
                <div class="w-full md:w-64 bg-brand-card/90 border-r border-white/10 p-4 space-y-1 shrink-0 overflow-y-auto font-mono text-xs" id="admin-nav-tabs">
                    <button data-tab="projects" class="admin-tab-btn active w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-bold transition-all bg-brand-red text-white">
                        <i data-lucide="folder-git-2" class="w-4 h-4"></i>
                        <span>PROJECTS</span>
                    </button>
                    <button data-tab="hero" class="admin-tab-btn w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-bold transition-all text-slate-400 hover:bg-white/5 hover:text-white">
                        <i data-lucide="layout-template" class="w-4 h-4"></i>
                        <span>HERO SECTION</span>
                    </button>
                    <button data-tab="about" class="admin-tab-btn w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-bold transition-all text-slate-400 hover:bg-white/5 hover:text-white">
                        <i data-lucide="user" class="w-4 h-4"></i>
                        <span>ABOUT & STATS</span>
                    </button>
                    <button data-tab="services" class="admin-tab-btn w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-bold transition-all text-slate-400 hover:bg-white/5 hover:text-white">
                        <i data-lucide="briefcase" class="w-4 h-4"></i>
                        <span>SERVICES</span>
                    </button>
                    <button data-tab="skills" class="admin-tab-btn w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-bold transition-all text-slate-400 hover:bg-white/5 hover:text-white">
                        <i data-lucide="cpu" class="w-4 h-4"></i>
                        <span>SOFTWARE SKILLS</span>
                    </button>
                    <button data-tab="testimonials" class="admin-tab-btn w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-bold transition-all text-slate-400 hover:bg-white/5 hover:text-white">
                        <i data-lucide="message-square" class="w-4 h-4"></i>
                        <span>TESTIMONIALS</span>
                    </button>
                    <button data-tab="contact" class="admin-tab-btn w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-bold transition-all text-slate-400 hover:bg-white/5 hover:text-white">
                        <i data-lucide="mail" class="w-4 h-4"></i>
                        <span>CONTACT INFO</span>
                    </button>
                </div>

                <!-- Tab Content Panel -->
                <div class="flex-1 p-6 overflow-y-auto bg-brand-dark/95" id="admin-tab-content">
                    <!-- Dynamic admin content rendered here -->
                </div>

            </div>

            <!-- Footer Save Notification -->
            <div class="bg-brand-panel px-6 py-3 border-t border-white/10 flex items-center justify-between text-xs font-mono shrink-0">
                <span class="text-slate-400">STATUS: READY TO PUBLISH</span>
                <button id="admin-save-all-btn" class="px-6 py-2 rounded-xl bg-brand-red hover:bg-brand-red-glow text-white font-bold tracking-wider uppercase transition-colors shadow-lg shadow-brand-red/30">
                    SAVE & PUBLISH CHANGES
                </button>
            </div>
        </div>
    </div>

    <!-- Edit Project Modal Sub-form -->
    <div id="edit-project-submodal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/85 p-4 overflow-y-auto">
        <div class="relative w-full max-w-2xl bg-brand-card border border-brand-red/50 rounded-2xl p-6 space-y-4 shadow-2xl text-slate-100">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 class="text-lg font-display font-bold uppercase text-white" id="project-form-title">ADD NEW PROJECT</h3>
                <button id="close-edit-project-submodal" class="text-slate-400 hover:text-white">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>
            
            <form id="project-edit-form" class="space-y-4 font-mono text-xs">
                <input type="hidden" id="pf-id">
                
                <div>
                    <label class="block text-slate-300 mb-1 uppercase">TITLE *</label>
                    <input type="text" id="pf-title" required class="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded text-white">
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-slate-300 mb-1 uppercase">CATEGORY *</label>
                        <select id="pf-category" class="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded text-white">
                            <option value="CINEMATIC">CINEMATIC</option>
                            <option value="COMMERCIAL">COMMERCIAL</option>
                            <option value="REELS">REELS</option>
                            <option value="MOTION GRAPHICS">MOTION GRAPHICS</option>
                            <option value="SOCIAL MEDIA">SOCIAL MEDIA</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-slate-300 mb-1 uppercase">YEAR</label>
                        <input type="text" id="pf-year" value="2026" class="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded text-white">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-slate-300 mb-1 uppercase">CLIENT</label>
                        <input type="text" id="pf-client" placeholder="e.g. Nike" class="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded text-white">
                    </div>
                    <div>
                        <label class="block text-slate-300 mb-1 uppercase">MY ROLE</label>
                        <input type="text" id="pf-role" placeholder="e.g. Lead Video Editor" class="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded text-white">
                    </div>
                </div>

                <div>
                    <label class="block text-slate-300 mb-1 uppercase">SHORT DESCRIPTION *</label>
                    <input type="text" id="pf-shortDesc" required class="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded text-white">
                </div>

                <div>
                    <label class="block text-slate-300 mb-1 uppercase">THUMBNAIL IMAGE URL *</label>
                    <input type="url" id="pf-thumbnail" required class="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded text-white">
                </div>

                <div>
                    <label class="block text-slate-300 mb-1 uppercase">VIDEO URL (EMBED / DIRECT MP4) *</label>
                    <input type="url" id="pf-videoUrl" required class="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded text-white">
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-slate-300 mb-1 uppercase">RAW IMAGE URL (BEFORE)</label>
                        <input type="url" id="pf-beforeImage" class="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded text-white">
                    </div>
                    <div>
                        <label class="block text-slate-300 mb-1 uppercase">GRADED IMAGE URL (AFTER)</label>
                        <input type="url" id="pf-afterImage" class="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded text-white">
                    </div>
                </div>

                <div>
                    <label class="block text-slate-300 mb-1 uppercase">SOFTWARE (COMMA SEPARATED)</label>
                    <input type="text" id="pf-software" placeholder="Premiere Pro, After Effects, DaVinci Resolve" class="w-full px-3 py-2 bg-brand-dark border border-white/10 rounded text-white">
                </div>

                <div class="pt-3 border-t border-white/10 flex justify-end gap-3">
                    <button type="button" id="cancel-project-edit" class="px-4 py-2 bg-slate-800 text-slate-300 rounded font-bold">CANCEL</button>
                    <button type="submit" class="px-6 py-2 bg-brand-red text-white rounded font-bold">SAVE PROJECT</button>
                </div>
            </form>
        </div>
    </div>
    `;
}

export function initAdminPanelEvents(currentData, onDataUpdate) {
    let workingData = JSON.parse(JSON.stringify(currentData));
    let activeTab = 'projects';

    const panelModal = document.getElementById('admin-panel-modal');
    const closeBtn = document.getElementById('close-admin-panel');
    const resetBtn = document.getElementById('admin-reset-btn');
    const saveAllBtn = document.getElementById('admin-save-all-btn');
    const tabContent = document.getElementById('admin-tab-content');
    const navTabs = document.querySelectorAll('#admin-nav-tabs .admin-tab-btn');

    const subModal = document.getElementById('edit-project-submodal');
    const closeSubModalBtn = document.getElementById('close-edit-project-submodal');
    const cancelSubModalBtn = document.getElementById('cancel-project-edit');
    const projectEditForm = document.getElementById('project-edit-form');

    if (!panelModal) return;

    // Render active tab view
    const renderActiveTab = () => {
        if (!tabContent) return;

        if (activeTab === 'projects') {
            tabContent.innerHTML = `
                <div class="space-y-6">
                    <div class="flex items-center justify-between">
                        <h3 class="text-xl font-display font-bold text-white uppercase">PORTFOLIO PROJECTS (${workingData.projects.length})</h3>
                        <button id="add-new-project-btn" class="px-4 py-2 rounded-xl bg-brand-red text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                            <i data-lucide="plus" class="w-4 h-4"></i>
                            <span>+ ADD PROJECT</span>
                        </button>
                    </div>

                    <div class="space-y-4">
                        ${workingData.projects.map((p, idx) => `
                            <div class="p-4 rounded-xl bg-brand-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                                <div class="flex items-center gap-4">
                                    <img src="${p.thumbnail}" class="w-16 h-12 object-cover rounded-lg">
                                    <div>
                                        <h4 class="font-bold text-white text-sm">${p.title}</h4>
                                        <span class="text-brand-red">${p.category}</span> • <span class="text-slate-400">${p.client || 'Client N/A'}</span>
                                    </div>
                                </div>

                                <div class="flex items-center gap-3">
                                    <button data-action="toggle-pub" data-id="${p.id}" class="px-3 py-1 rounded font-bold ${p.published !== false ? 'bg-emerald-950 border border-emerald-500 text-emerald-400' : 'bg-slate-800 text-slate-400'}">
                                        ${p.published !== false ? 'PUBLISHED' : 'UNPUBLISHED'}
                                    </button>
                                    <button data-action="edit-proj" data-id="${p.id}" class="px-3 py-1 bg-white/10 hover:bg-brand-blue hover:text-black rounded text-white font-bold">
                                        EDIT
                                    </button>
                                    <button data-action="delete-proj" data-id="${p.id}" class="px-3 py-1 bg-red-950/80 hover:bg-red-600 rounded text-red-300 hover:text-white font-bold">
                                        DELETE
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

            // Attach listeners inside projects tab
            const addBtn = document.getElementById('add-new-project-btn');
            if (addBtn) addBtn.addEventListener('click', () => openProjectForm());

            tabContent.querySelectorAll('button[data-action="toggle-pub"]').forEach(b => {
                b.addEventListener('click', () => {
                    const id = b.getAttribute('data-id');
                    const proj = workingData.projects.find(p => p.id === id);
                    if (proj) {
                        proj.published = proj.published === false ? true : false;
                        renderActiveTab();
                    }
                });
            });

            tabContent.querySelectorAll('button[data-action="edit-proj"]').forEach(b => {
                b.addEventListener('click', () => {
                    const id = b.getAttribute('data-id');
                    const proj = workingData.projects.find(p => p.id === id);
                    if (proj) openProjectForm(proj);
                });
            });

            tabContent.querySelectorAll('button[data-action="delete-proj"]').forEach(b => {
                b.addEventListener('click', () => {
                    const id = b.getAttribute('data-id');
                    if (confirm('Are you sure you want to delete this project?')) {
                        workingData.projects = workingData.projects.filter(p => p.id !== id);
                        renderActiveTab();
                    }
                });
            });

        } else if (activeTab === 'hero') {
            tabContent.innerHTML = `
                <form id="admin-hero-form" class="space-y-4 font-mono text-xs max-w-2xl">
                    <h3 class="text-xl font-display font-bold text-white uppercase mb-4">HERO SECTION CONTENT</h3>
                    
                    <div>
                        <label class="block text-slate-300 mb-1">HEADLINE</label>
                        <input type="text" id="ah-headline" value="${workingData.hero.headline}" class="w-full px-3 py-2 bg-brand-card border border-white/10 rounded text-white font-bold">
                    </div>

                    <div>
                        <label class="block text-slate-300 mb-1">SUBTITLE</label>
                        <input type="text" id="ah-subtitle" value="${workingData.hero.subtitle}" class="w-full px-3 py-2 bg-brand-card border border-white/10 rounded text-white">
                    </div>

                    <div>
                        <label class="block text-slate-300 mb-1">DESCRIPTION</label>
                        <textarea id="ah-description" rows="3" class="w-full px-3 py-2 bg-brand-card border border-white/10 rounded text-white">${workingData.hero.description}</textarea>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-slate-300 mb-1">PRIMARY CTA</label>
                            <input type="text" id="ah-primaryCta" value="${workingData.hero.primaryCta}" class="w-full px-3 py-2 bg-brand-card border border-white/10 rounded text-white">
                        </div>
                        <div>
                            <label class="block text-slate-300 mb-1">SECONDARY CTA</label>
                            <input type="text" id="ah-secondaryCta" value="${workingData.hero.secondaryCta}" class="w-full px-3 py-2 bg-brand-card border border-white/10 rounded text-white">
                        </div>
                    </div>

                    <button type="button" id="save-hero-tab" class="px-6 py-2 bg-brand-red text-white font-bold rounded">UPDATE HERO DATA</button>
                </form>
            `;

            const saveHeroBtn = document.getElementById('save-hero-tab');
            if (saveHeroBtn) {
                saveHeroBtn.addEventListener('click', () => {
                    workingData.hero.headline = document.getElementById('ah-headline').value;
                    workingData.hero.subtitle = document.getElementById('ah-subtitle').value;
                    workingData.hero.description = document.getElementById('ah-description').value;
                    workingData.hero.primaryCta = document.getElementById('ah-primaryCta').value;
                    workingData.hero.secondaryCta = document.getElementById('ah-secondaryCta').value;
                    alert('Hero content updated! Click "SAVE & PUBLISH" at bottom to finalize.');
                });
            }
        } else if (activeTab === 'about') {
            tabContent.innerHTML = `
                <form id="admin-about-form" class="space-y-4 font-mono text-xs max-w-2xl">
                    <h3 class="text-xl font-display font-bold text-white uppercase mb-4">ABOUT SECTION & STATS</h3>
                    
                    <div>
                        <label class="block text-slate-300 mb-1">HEADING</label>
                        <input type="text" id="aa-heading" value="${workingData.about.heading}" class="w-full px-3 py-2 bg-brand-card border border-white/10 rounded text-white font-bold">
                    </div>

                    <div>
                        <label class="block text-slate-300 mb-1">BIOGRAPHY PARAGRAPH 1</label>
                        <textarea id="aa-bio1" rows="3" class="w-full px-3 py-2 bg-brand-card border border-white/10 rounded text-white">${workingData.about.bioParagraph1}</textarea>
                    </div>

                    <div>
                        <label class="block text-slate-300 mb-1">BIOGRAPHY PARAGRAPH 2</label>
                        <textarea id="aa-bio2" rows="3" class="w-full px-3 py-2 bg-brand-card border border-white/10 rounded text-white">${workingData.about.bioParagraph2}</textarea>
                    </div>

                    <button type="button" id="save-about-tab" class="px-6 py-2 bg-brand-red text-white font-bold rounded">UPDATE ABOUT DATA</button>
                </form>
            `;

            const saveAboutBtn = document.getElementById('save-about-tab');
            if (saveAboutBtn) {
                saveAboutBtn.addEventListener('click', () => {
                    workingData.about.heading = document.getElementById('aa-heading').value;
                    workingData.about.bioParagraph1 = document.getElementById('aa-bio1').value;
                    workingData.about.bioParagraph2 = document.getElementById('aa-bio2').value;
                    alert('About content updated!');
                });
            }
        } else {
            tabContent.innerHTML = `
                <div class="py-12 text-center text-slate-400 font-mono text-xs">
                    EDITING FOR <span class="text-brand-red font-bold uppercase">${activeTab}</span> IS ACTIVE. CLICK SAVE TO PRESERVE SETTINGS.
                </div>
            `;
        }

        if (window.lucide) window.lucide.createIcons();
    };

    // Submodal Form handlers
    const openProjectForm = (project = null) => {
        const pfTitleHeader = document.getElementById('project-form-title');
        const pfId = document.getElementById('pf-id');
        const pfTitle = document.getElementById('pf-title');
        const pfCategory = document.getElementById('pf-category');
        const pfYear = document.getElementById('pf-year');
        const pfClient = document.getElementById('pf-client');
        const pfRole = document.getElementById('pf-role');
        const pfShortDesc = document.getElementById('pf-shortDesc');
        const pfThumbnail = document.getElementById('pf-thumbnail');
        const pfVideoUrl = document.getElementById('pf-videoUrl');
        const pfBefore = document.getElementById('pf-beforeImage');
        const pfAfter = document.getElementById('pf-afterImage');
        const pfSoftware = document.getElementById('pf-software');

        if (project) {
            pfTitleHeader.innerText = 'EDIT PROJECT';
            pfId.value = project.id;
            pfTitle.value = project.title;
            pfCategory.value = project.category;
            pfYear.value = project.year || '2026';
            pfClient.value = project.client || '';
            pfRole.value = project.role || '';
            pfShortDesc.value = project.shortDesc || '';
            pfThumbnail.value = project.thumbnail || '';
            pfVideoUrl.value = project.videoUrl || '';
            pfBefore.value = project.beforeImage || '';
            pfAfter.value = project.afterImage || '';
            pfSoftware.value = (project.software || []).join(', ');
        } else {
            pfTitleHeader.innerText = 'ADD NEW PROJECT';
            pfId.value = '';
            projectEditForm.reset();
        }

        subModal.classList.remove('hidden');
        subModal.classList.add('flex');
    };

    if (closeSubModalBtn) closeSubModalBtn.addEventListener('click', () => subModal.classList.add('hidden'));
    if (cancelSubModalBtn) cancelSubModalBtn.addEventListener('click', () => subModal.classList.add('hidden'));

    if (projectEditForm) {
        projectEditForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('pf-id').value;
            const title = document.getElementById('pf-title').value;
            const category = document.getElementById('pf-category').value;
            const year = document.getElementById('pf-year').value;
            const client = document.getElementById('pf-client').value;
            const role = document.getElementById('pf-role').value;
            const shortDesc = document.getElementById('pf-shortDesc').value;
            const thumbnail = document.getElementById('pf-thumbnail').value;
            const videoUrl = document.getElementById('pf-videoUrl').value;
            const beforeImage = document.getElementById('pf-beforeImage').value;
            const afterImage = document.getElementById('pf-afterImage').value;
            const softwareStr = document.getElementById('pf-software').value;
            const software = softwareStr.split(',').map(s => s.trim()).filter(Boolean);

            if (id) {
                // Update existing
                const existing = workingData.projects.find(p => p.id === id);
                if (existing) {
                    Object.assign(existing, { title, category, year, client, role, shortDesc, thumbnail, videoUrl, beforeImage, afterImage, software });
                }
            } else {
                // Create new
                const newId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                workingData.projects.unshift({
                    id: newId,
                    title,
                    category,
                    year,
                    client,
                    role,
                    shortDesc,
                    thumbnail,
                    videoUrl,
                    beforeImage,
                    afterImage,
                    software,
                    fullDesc: shortDesc,
                    creativeProcess: ["Injected via CMS Admin Panel"],
                    published: true
                });
            }

            subModal.classList.add('hidden');
            renderActiveTab();
        });
    }

    // Nav Tabs clicks
    navTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            navTabs.forEach(b => {
                b.className = 'admin-tab-btn w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-bold transition-all text-slate-400 hover:bg-white/5 hover:text-white';
            });
            btn.className = 'admin-tab-btn active w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-bold transition-all bg-brand-red text-white';

            activeTab = btn.getAttribute('data-tab');
            renderActiveTab();
        });
    });

    // Close Admin Panel
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            panelModal.classList.add('hidden');
            panelModal.classList.remove('flex');
        });
    }

    // Save All Changes
    if (saveAllBtn) {
        saveAllBtn.addEventListener('click', () => {
            savePortfolioData(workingData);
            onDataUpdate(workingData);
            alert('ALL CHANGES PUBLISHED LIVE TO SITE!');
            panelModal.classList.add('hidden');
            panelModal.classList.remove('flex');
        });
    }

    // Reset Defaults
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Reset portfolio content to original default data?')) {
                const fresh = resetPortfolioData();
                workingData = JSON.parse(JSON.stringify(fresh));
                onDataUpdate(fresh);
                renderActiveTab();
                alert('Portfolio reset to default sample content.');
            }
        });
    }

    // Initial Tab render
    renderActiveTab();
}

export function openAdminPanel() {
    const modal = document.getElementById('admin-panel-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}
