// Main Self-Contained Application Bundle with Spider-Man Character Carousel Slider on Landing Page

(function() {
    'use strict';

    const STORAGE_KEY = 'aj_edits_portfolio_data_v2';

    const INITIAL_DATA = {
        hero: {
            headline: "EDITING THAT HITS DIFFERENT.",
            subtitle: "VIDEO EDITOR • MOTION DESIGN • STORYTELLING",
            description: "I transform raw footage into cinematic stories that capture attention, build emotion, and make brands impossible to ignore.",
            primaryCta: "VIEW MY WORK",
            secondaryCta: "LET'S WORK TOGETHER",
            badge: "AVAILABLE FOR FREELANCE & COMMERCIAL PROJECTS",
            bannerImage: "images/spiderman-banner.jpg"
        },
        about: {
            heading: "THE EDITOR BEHIND THE CUT",
            subheading: "CRAFTING VISUAL EMOTION THROUGH RHYTHM AND PRECISION",
            bioParagraph1: "I'm a passionate video editor focused on turning ideas and raw footage into powerful visual stories. From cinematic edits and social media content to commercials and brand films, I combine rhythm, sound, motion, and storytelling to create videos that people remember.",
            bioParagraph2: "With a background in cinematic storytelling, sound design, and color grading, I cut past the noise to deliver high-retention content tailored for global brands, artists, and creators.",
            stats: [
                { id: 1, label: "50+ Projects", value: "50+", text: "Completed Projects" },
                { id: 2, label: "3+ Years Experience", value: "3+", text: "Years Experience" },
                { id: 3, label: "20+ Happy Clients", value: "20+", text: "Happy Clients" },
                { id: 4, label: "100% Creative Energy", value: "100%", text: "Creative Energy" }
            ],
            timeline: [
                { step: "01", title: "RAW FOOTAGE", desc: "Assembly & Ingestion" },
                { step: "02", title: "EDIT", desc: "Pacing & Story Structure" },
                { step: "03", title: "COLOR", desc: "Cinematic Grade & Mood" },
                { step: "04", title: "SOUND", desc: "Foley, SFX & Audio Mix" },
                { step: "05", title: "FINAL CUT", desc: "Mastering & Export" }
            ]
        },
        showreel: {
            title: "MY SHOWREEL",
            subtitle: "A 90-SECOND JOURNEY THROUGH HIGH-IMPACT STORYTELLING",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0",
            videoUrlDirect: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
            thumbnail: "images/spiderman-banner.jpg",
            description: "Featuring selected commercial edits, music videos, color grading transformations, and motion graphics shots created over the past 3 years."
        },
        projects: [
            {
                id: "spidey-cut",
                title: "SPIDER-MAN: NO WAY OUT",
                category: "CINEMATIC",
                shortDesc: "High-octane Spider-Man superhero trailer edit featuring web-slinging VFX and sound design.",
                client: "Marvelous Studios",
                year: "2026",
                role: "Lead Editor & VFX Compositor",
                software: ["DaVinci Resolve", "Premiere Pro", "After Effects"],
                thumbnail: "images/spiderman-banner.jpg",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                beforeImage: "images/spiderman-banner.jpg",
                afterImage: "images/spiderman-banner.jpg",
                fullDesc: "A blockbuster superhero edit designed around Spider-Man's rapid movements, web-slings, and high-altitude city swings. Features custom bass drops, white/red impact frames, and anamorphic flares.",
                creativeProcess: [
                    "Web-slinger action sequence motion tracking.",
                    "Teal & deep red color grading grade in DaVinci Resolve.",
                    "3D web particle composition in After Effects.",
                    "Foley sound design featuring web-shots and city echoes."
                ],
                published: true
            },
            {
                id: "neon-nights",
                title: "NEON NIGHTS",
                category: "CINEMATIC",
                shortDesc: "Cinematic Brand Film with vibrant neon aesthetic and fast-paced sound design.",
                client: "Apex Cyberwear",
                year: "2026",
                role: "Lead Video Editor & Colorist",
                software: ["DaVinci Resolve", "Premiere Pro", "After Effects"],
                thumbnail: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                beforeImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80&sat=-80",
                afterImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
                fullDesc: "A high-octane brand film designed for a streetwear launch in Tokyo. Engineered with rapid cuts, custom bass-heavy sound design, and deep teal & neon red color grading.",
                creativeProcess: [
                    "Raw log footage ingestion and scene sorting.",
                    "Rhythmic cut synced to custom 128 BPM electronic soundtrack.",
                    "Primary and secondary color grading in DaVinci Resolve.",
                    "Custom web-glitch visual transitions in After Effects."
                ],
                published: true
            },
            {
                id: "urban-motion",
                title: "URBAN MOTION",
                category: "COMMERCIAL",
                shortDesc: "Commercial Edit for high-performance footwear with hyper-kinetic motion tracking.",
                client: "Velocity Athletics",
                year: "2025",
                role: "Commercial Editor & Motion Designer",
                software: ["Premiere Pro", "After Effects"],
                thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                beforeImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80&sat=-60",
                afterImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
                fullDesc: "Designed to drive engagement across digital campaigns. Blends seamless 3D shoe tracking with energetic speed ramps and impact sound effects.",
                creativeProcess: [
                    "Footage selection focusing on dynamic motion vectors.",
                    "Kinetic typography over key shoe technology highlights.",
                    "Color matching across daylight and indoor arena shots."
                ],
                published: true
            },
            {
                id: "after-dark",
                title: "AFTER DARK",
                category: "REELS",
                shortDesc: "Atmospheric Music Video cut with intricate sound layering and film grain finish.",
                client: "KAYO & The Syndicate",
                year: "2025",
                role: "Music Video Editor",
                software: ["DaVinci Resolve", "Audition"],
                thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                beforeImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80&sat=-75",
                afterImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
                fullDesc: "A moody night-owl visual cut capturing city nightlife. Styled with 35mm film grain emulations, anamorphic lens flares, and rhythmic cross-cuts.",
                creativeProcess: [
                    "Multicam sync across 4 performance takes.",
                    "Selective color isolation on red neon accents.",
                    "Custom sound design adding rain, distant sirens, and vinyl pops."
                ],
                published: true
            },
            {
                id: "the-drop",
                title: "THE DROP",
                category: "MOTION GRAPHICS",
                shortDesc: "Futuristic Product Advertisement featuring dynamic 3D elements and kinetic text.",
                client: "Pulse Audio",
                year: "2026",
                role: "VFX & Motion Graphics Editor",
                software: ["Blender", "After Effects", "Premiere Pro"],
                thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                beforeImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80&sat=-90",
                afterImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
                fullDesc: "Product launch promo for noise-canceling wireless headphones. Integrated CAD renders into real-world studio footage with dynamic light sweeps.",
                creativeProcess: [
                    "3D model import and lighting setup in Blender.",
                    "Compositing 3D exploded view with real footage.",
                    "Audio reactive particle animations."
                ],
                published: true
            },
            {
                id: "street-stories",
                title: "STREET STORIES",
                category: "SOCIAL MEDIA",
                shortDesc: "High-Retention Social Campaign with 15.2M views across Instagram & TikTok.",
                client: "Urban Culture Mag",
                year: "2025",
                role: "Short-Form Specialist & Editor",
                software: ["Premiere Pro", "CapCut Pro", "Photoshop"],
                thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                beforeImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80&sat=-50",
                afterImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
                fullDesc: "Mobile-first 9:16 vertical video campaign engineered to hook viewers within the first 1.5 seconds using dynamic captions and audio swells.",
                creativeProcess: [
                    "Hook selection based on retention analytics.",
                    "Animated bold text overlays with sound pop cues.",
                    "Multi-platform aspect ratio optimizations."
                ],
                published: true
            }
        ],
        services: [
            {
                id: 1,
                title: "VIDEO EDITING",
                description: "Professional editing built around rhythm, emotion, and storytelling. From narrative cuts to commercials.",
                icon: "film"
            },
            {
                id: 2,
                title: "COLOR GRADING",
                description: "Cinematic color treatment that creates mood, visual consistency, and Hollywood film aesthetics.",
                icon: "palette"
            },
            {
                id: 3,
                title: "MOTION GRAPHICS",
                description: "Dynamic titles, kinetic transitions, 3D element integration, and visual effects.",
                icon: "sparkles"
            },
            {
                id: 4,
                title: "SOCIAL MEDIA EDITING",
                description: "High-retention edits designed specifically for Instagram, YouTube, TikTok, and digital ad campaigns.",
                icon: "smartphone"
            }
        ],
        software: [
            { name: "Adobe Premiere Pro", percent: 95, icon: "video" },
            { name: "After Effects", percent: 90, icon: "wand-2" },
            { name: "DaVinci Resolve", percent: 85, icon: "sliders" },
            { name: "Photoshop", percent: 80, icon: "image" },
            { name: "Audition", percent: 75, icon: "volume-2" },
            { name: "Blender", percent: 70, icon: "box" }
        ],
        process: [
            {
                number: "01",
                title: "DISCOVER",
                desc: "Understand the story, target audience, brand identity, and project objective."
            },
            {
                number: "02",
                title: "SELECT",
                desc: "Review and ingest raw footage, curating only the strongest visual and emotional takes."
            },
            {
                number: "03",
                title: "EDIT",
                desc: "Build rhythm, narrative flow, pacing, and seamless cut transitions."
            },
            {
                number: "04",
                title: "POLISH",
                desc: "Apply cinematic color grading, sound design, motion graphics, and visual effects."
            },
            {
                number: "05",
                title: "DELIVER",
                desc: "Export platform-optimized master files ready for broadcast, cinema, or social media."
            }
        ],
        testimonials: [
            {
                id: 1,
                name: "Marcus Vance",
                company: "Creative Director, Apex Cyberwear",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
                stars: 5,
                quote: "AJ transformed our raw product shoots into a blockbuster commercial. The pacing and sound design were beyond expectations. He cuts like a true hollywood editor."
            },
            {
                id: 2,
                name: "Elena Rostova",
                company: "Founder, Velocity Athletics",
                avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
                stars: 5,
                quote: "Working with AJ was seamless. Our social campaign reached over 15 million organic views because of his retention-focused editing style."
            },
            {
                id: 3,
                name: "David Sterling",
                company: "Music Producer & Director",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
                stars: 5,
                quote: "The color grading and rhythm in our music video were flawless. AJ understands visual energy like nobody else in the industry."
            }
        ],
        contact: {
            headline: "LET'S CREATE SOMETHING EPIC.",
            subtitle: "Got footage? Got an idea? Let's turn it into something people can't scroll past.",
            email: "alex@ajedits.com",
            location: "Los Angeles, CA / Remote Worldwide",
            socials: [
                { name: "Instagram", url: "https://instagram.com", handle: "@aj_edits_official" },
                { name: "YouTube", url: "https://youtube.com", handle: "AJ Edits Cinema" },
                { name: "LinkedIn", url: "https://linkedin.com", handle: "Alex Jordan (AJ Edits)" },
                { name: "Behance", url: "https://behance.net", handle: "ajedits-portfolio" }
            ]
        },
        settings: {
            comingSoonEnabled: false,
            comingSoonTitle: "SOMETHING EPIC IS COMING SOON",
            comingSoonSubtitle: "AJ EDITS IS CURRENTLY SUITING UP • NEW PORTFOLIO PREMIERE",
            comingSoonDescription: "We are currently remastering our cinematic showreel and superhero video editing portfolio with next-generation visuals. Stay tuned for the premiere!",
            comingSoonDate: "2026-10-15T00:00:00",
            comingSoonBanner: "images/spiderman-banner.jpg",
            comingSoonNotifyEmail: "alex@ajedits.com"
        }
    };

    function getPortfolioData() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (!parsed.settings) {
                    parsed.settings = JSON.parse(JSON.stringify(INITIAL_DATA.settings));
                }
                return parsed;
            }
        } catch (e) {
            console.error("LocalStorage load error", e);
        }
        return INITIAL_DATA;
    }

    function savePortfolioData(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            window.dispatchEvent(new CustomEvent('portfolioDataChanged', { detail: data }));
            return true;
        } catch (e) {
            console.error("LocalStorage save error", e);
            return false;
        }
    }

    function resetPortfolioData() {
        localStorage.removeItem(STORAGE_KEY);
        window.dispatchEvent(new CustomEvent('portfolioDataChanged', { detail: INITIAL_DATA }));
        return INITIAL_DATA;
    }

    // 2. CANVAS BACKGROUND ENGINE WITH REAL SPIDER-MAN GEOMETRIC SILK WEBS & PHYSICS
    class CityWebCanvas {
        constructor(canvasId) {
            this.canvas = document.getElementById(canvasId);
            if (!this.canvas) return;
            this.ctx = this.canvas.getContext('2d');
            
            this.mouse = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                targetX: window.innerWidth / 2,
                targetY: window.innerHeight / 2,
                vx: 0,
                vy: 0,
                lastX: window.innerWidth / 2,
                lastY: window.innerHeight / 2,
                active: false
            };

            this.buildings = [];
            this.fogParticles = [];
            this.spiderWebs = [];
            this.dynamicSlings = [];
            this.dewDrops = [];
            this.time = 0;
            this.animationFrameId = null;

            this.init();
        }

        init() {
            this.resize();
            this.createBuildings();
            this.createFog();
            this.createRealisticWebs();

            window.addEventListener('resize', () => this.resize());
            window.addEventListener('mousemove', (e) => this.onMouseMove(e));
            window.addEventListener('mouseleave', () => { this.mouse.active = false; });
            
            this.animate();
        }

        resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.canvas.width = this.width * dpr;
            this.canvas.height = this.height * dpr;
            this.canvas.style.width = this.width + 'px';
            this.canvas.style.height = this.height + 'px';
            this.ctx.resetTransform ? this.ctx.resetTransform() : this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.scale(dpr, dpr);

            this.createBuildings();
            this.createRealisticWebs();
        }

        onMouseMove(e) {
            this.mouse.lastX = this.mouse.targetX;
            this.mouse.lastY = this.mouse.targetY;
            this.mouse.targetX = e.clientX;
            this.mouse.targetY = e.clientY;
            this.mouse.vx = this.mouse.targetX - this.mouse.lastX;
            this.mouse.vy = this.mouse.targetY - this.mouse.lastY;
            this.mouse.active = true;

            const speed = Math.sqrt(this.mouse.vx * this.mouse.vx + this.mouse.vy * this.mouse.vy);
            if (speed > 8 && this.dynamicSlings.length < 8) {
                this.spawnWebSling(e.clientX, e.clientY);
            }
        }

        spawnWebSling(targetX, targetY) {
            const anchors = [
                { x: 0, y: 0 },
                { x: this.width, y: 0 },
                { x: this.width * 0.25, y: 0 },
                { x: this.width * 0.75, y: 0 },
                { x: 0, y: this.height * 0.3 },
                { x: this.width, y: this.height * 0.3 }
            ];
            
            anchors.sort((a, b) => {
                const da = Math.hypot(a.x - targetX, a.y - targetY);
                const db = Math.hypot(b.x - targetX, b.y - targetY);
                return da - db;
            });

            const anchor = anchors[0];
            this.dynamicSlings.push({
                ax: anchor.x,
                ay: anchor.y,
                tx: targetX,
                ty: targetY,
                life: 1.0,
                decay: 0.035 + Math.random() * 0.02,
                sag: (Math.random() - 0.5) * 35,
                color: Math.random() > 0.4 ? '#ffffff' : '#ff1e43',
                width: 1.2 + Math.random() * 0.8
            });
        }

        createBuildings() {
            this.buildings = [];
            const numBuildings = Math.floor(this.width / 45);
            let currentX = 0;

            for (let i = 0; i < numBuildings; i++) {
                const w = 35 + Math.random() * 45;
                const h = 160 + Math.random() * (this.height * 0.5);
                const layer = Math.random() > 0.4 ? 1 : 2;

                const windows = [];
                const cols = Math.floor(w / 8);
                const rows = Math.floor(h / 14);
                for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < cols; c++) {
                        if (Math.random() > 0.6) {
                            const isRed = Math.random() > 0.75;
                            windows.push({
                                x: c * 7 + 4,
                                y: r * 12 + 6,
                                color: isRed ? '#ff1e43' : '#ffffff'
                            });
                        }
                    }
                }

                this.buildings.push({ x: currentX, w: w, h: h, layer: layer, windows: windows });
                currentX += w - (Math.random() * 8);
            }
        }

        createFog() {
            this.fogParticles = [];
            for (let i = 0; i < 25; i++) {
                this.fogParticles.push({
                    x: Math.random() * this.width,
                    y: this.height - Math.random() * (this.height * 0.65),
                    radius: 80 + Math.random() * 140,
                    speedX: (Math.random() - 0.5) * 0.25,
                    color: Math.random() > 0.5 ? 'rgba(255, 30, 67, 0.06)' : 'rgba(255, 255, 255, 0.03)'
                });
            }
        }

        createRealisticWebs() {
            this.spiderWebs = [];
            this.dewDrops = [];

            // 1. TOP-LEFT CORNER ORB WEB
            const webTL = this.buildOrbWeb(0, 0, 9, 0, Math.PI * 0.52, 7, 340);
            this.spiderWebs.push(webTL);

            // 2. TOP-RIGHT CORNER ORB WEB
            const webTR = this.buildOrbWeb(this.width, 0, 9, Math.PI * 0.48, Math.PI, 7, 340);
            this.spiderWebs.push(webTR);

            // 3. CENTRAL/HERO ORB-WEAVER WEB
            const heroCenterX = this.width * 0.5;
            const heroCenterY = Math.min(this.height * 0.42, 380);
            const heroRadius = Math.min(this.width * 0.42, 420);
            const webCenter = this.buildOrbWeb(heroCenterX, heroCenterY, 16, 0, Math.PI * 2, 9, heroRadius);
            this.spiderWebs.push(webCenter);
        }

        buildOrbWeb(cx, cy, numSpokes, startAngle, endAngle, numRings, maxRadius) {
            const spokes = [];
            const angleStep = (endAngle - startAngle) / (numSpokes - 1);

            for (let s = 0; s < numSpokes; s++) {
                const angle = startAngle + s * angleStep;
                const spokeNodes = [];

                for (let r = 0; r <= numRings; r++) {
                    const distRatio = r / numRings;
                    const dist = Math.pow(distRatio, 1.15) * maxRadius;
                    const ox = cx + Math.cos(angle) * dist;
                    const oy = cy + Math.sin(angle) * dist;

                    const nodeObj = {
                        ox: ox,
                        oy: oy,
                        x: ox,
                        y: oy,
                        vx: 0,
                        vy: 0,
                        ringIndex: r,
                        spokeIndex: s,
                        isAnchor: (r === 0 || r === numRings)
                    };
                    spokeNodes.push(nodeObj);

                    if (r > 1 && Math.random() > 0.45) {
                        this.dewDrops.push({
                            nodeRef: nodeObj,
                            radius: 1.0 + Math.random() * 1.6,
                            shimmerSpeed: 1.5 + Math.random() * 2.5,
                            phase: Math.random() * Math.PI * 2,
                            isCrimson: Math.random() > 0.65
                        });
                    }
                }
                spokes.push({ angle: angle, nodes: spokeNodes });
            }

            return { cx: cx, cy: cy, spokes: spokes, numRings: numRings };
        }

        updateWebPhysics() {
            const mouseX = this.mouse.x;
            const mouseY = this.mouse.y;
            const mouseActive = this.mouse.active;

            this.spiderWebs.forEach(web => {
                web.spokes.forEach(spoke => {
                    spoke.nodes.forEach(node => {
                        if (node.isAnchor) return;

                        const fdx = node.ox - node.x;
                        const fdy = node.oy - node.y;
                        node.vx += fdx * 0.08;
                        node.vy += fdy * 0.08;

                        if (mouseActive) {
                            const mdx = node.x - mouseX;
                            const mdy = node.y - mouseY;
                            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
                            const influenceRadius = 140;

                            if (mDist < influenceRadius && mDist > 0) {
                                const force = (1 - mDist / influenceRadius) * 4.5;
                                node.vx += (mdx / mDist) * force;
                                node.vy += (mdy / mDist) * force;
                            }
                        }

                        node.vx += Math.sin(this.time * 0.002 + node.ox * 0.01) * 0.04;
                        node.vy += Math.cos(this.time * 0.0025 + node.oy * 0.01) * 0.03;

                        node.vx *= 0.88;
                        node.vy *= 0.88;

                        node.x += node.vx;
                        node.y += node.vy;
                    });
                });
            });

            for (let i = this.dynamicSlings.length - 1; i >= 0; i--) {
                const sling = this.dynamicSlings[i];
                sling.life -= sling.decay;
                if (sling.life <= 0) {
                    this.dynamicSlings.splice(i, 1);
                }
            }
        }

        drawRealisticSpiderWebs() {
            this.ctx.save();

            this.spiderWebs.forEach(web => {
                const spokes = web.spokes;
                const numRings = web.numRings;

                // 1. Primary Radial Tension Spokes
                spokes.forEach((spoke, sIdx) => {
                    this.ctx.beginPath();
                    this.ctx.moveTo(spoke.nodes[0].x, spoke.nodes[0].y);

                    for (let r = 1; r < spoke.nodes.length; r++) {
                        this.ctx.lineTo(spoke.nodes[r].x, spoke.nodes[r].y);
                    }

                    const isRedSpoke = sIdx % 3 === 0;
                    this.ctx.strokeStyle = isRedSpoke ? 'rgba(255, 30, 67, 0.45)' : 'rgba(255, 255, 255, 0.35)';
                    this.ctx.lineWidth = isRedSpoke ? 1.2 : 0.9;
                    this.ctx.stroke();
                });

                // 2. Concentric Spiral Rings with Natural Catenary Sag
                for (let r = 1; r <= numRings; r++) {
                    const ringAlpha = 0.22 + (r / numRings) * 0.28;
                    const isCrimsonRing = (r % 2 === 0);

                    this.ctx.strokeStyle = isCrimsonRing ? `rgba(255, 30, 67, ${ringAlpha * 1.2})` : `rgba(255, 255, 255, ${ringAlpha})`;
                    this.ctx.lineWidth = isCrimsonRing ? 1.1 : 0.8;

                    for (let s = 0; s < spokes.length - 1; s++) {
                        const n1 = spokes[s].nodes[r];
                        const n2 = spokes[s + 1].nodes[r];

                        const midX = (n1.x + n2.x) / 2;
                        const midY = (n1.y + n2.y) / 2;
                        const toCenterX = web.cx - midX;
                        const toCenterY = web.cy - midY;
                        const centerDist = Math.hypot(toCenterX, toCenterY) || 1;
                        
                        const sagFactor = 8;
                        const cpX = midX + (toCenterX / centerDist) * sagFactor;
                        const cpY = midY + (toCenterY / centerDist) * sagFactor + 2;

                        this.ctx.beginPath();
                        this.ctx.moveTo(n1.x, n1.y);
                        this.ctx.quadraticCurveTo(cpX, cpY, n2.x, n2.y);
                        this.ctx.stroke();
                    }

                    if (Math.abs(spokes[spokes.length - 1].angle - (spokes[0].angle + Math.PI * 2)) < 0.2) {
                        const nLast = spokes[spokes.length - 1].nodes[r];
                        const nFirst = spokes[0].nodes[r];
                        const midX = (nLast.x + nFirst.x) / 2;
                        const midY = (nLast.y + nFirst.y) / 2;
                        const toCenterX = web.cx - midX;
                        const toCenterY = web.cy - midY;
                        const centerDist = Math.hypot(toCenterX, toCenterY) || 1;
                        const cpX = midX + (toCenterX / centerDist) * 8;
                        const cpY = midY + (toCenterY / centerDist) * 8 + 2;

                        this.ctx.beginPath();
                        this.ctx.moveTo(nLast.x, nLast.y);
                        this.ctx.quadraticCurveTo(cpX, cpY, nFirst.x, nFirst.y);
                        this.ctx.stroke();
                    }
                }
            });

            // 3. Dynamic Web Slings Shot towards Cursor
            this.dynamicSlings.forEach(sling => {
                const alpha = sling.life;
                this.ctx.strokeStyle = sling.color === '#ff1e43' ? `rgba(255, 30, 67, ${alpha * 0.9})` : `rgba(255, 255, 255, ${alpha * 0.95})`;
                this.ctx.lineWidth = sling.width;
                this.ctx.shadowColor = sling.color;
                this.ctx.shadowBlur = 8;

                const midX = (sling.ax + sling.tx) / 2;
                const midY = (sling.ay + sling.ty) / 2 + sling.sag * (1 - alpha);

                this.ctx.beginPath();
                this.ctx.moveTo(sling.ax, sling.ay);
                this.ctx.quadraticCurveTo(midX, midY, sling.tx, sling.ty);
                this.ctx.stroke();

                this.ctx.shadowBlur = 0;
            });

            // 4. Glistening Dew Drops
            this.dewDrops.forEach(drop => {
                const node = drop.nodeRef;
                const shimmer = 0.5 + 0.5 * Math.sin(this.time * 0.003 * drop.shimmerSpeed + drop.phase);
                const currentR = drop.radius * (0.8 + 0.4 * shimmer);

                this.ctx.beginPath();
                this.ctx.arc(node.x, node.y, currentR, 0, Math.PI * 2);
                this.ctx.fillStyle = drop.isCrimson ? `rgba(255, 30, 67, ${0.7 + 0.3 * shimmer})` : `rgba(255, 255, 255, ${0.8 + 0.2 * shimmer})`;
                this.ctx.fill();

                if (shimmer > 0.8) {
                    this.ctx.fillStyle = '#ffffff';
                    this.ctx.beginPath();
                    this.ctx.arc(node.x - currentR * 0.3, node.y - currentR * 0.3, currentR * 0.35, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            });

            // 5. Cursor Proximity Reactive Silk Strands
            if (this.mouse.active) {
                this.spiderWebs.forEach(web => {
                    web.spokes.forEach((spoke, sIdx) => {
                        const outerNode = spoke.nodes[spoke.nodes.length - 2];
                        if (!outerNode) return;

                        const dx = this.mouse.x - outerNode.x;
                        const dy = this.mouse.y - outerNode.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < 220) {
                            const alpha = (1 - dist / 220) * 0.7;
                            const isRed = sIdx % 2 === 0;

                            this.ctx.strokeStyle = isRed ? `rgba(255, 30, 67, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
                            this.ctx.lineWidth = isRed ? 1.5 : 1.0;
                            this.ctx.shadowColor = isRed ? '#ff1e43' : '#ffffff';
                            this.ctx.shadowBlur = 6;

                            const cpX = (outerNode.x + this.mouse.x) / 2 + Math.sin(this.time * 0.004 + sIdx) * 12;
                            const cpY = (outerNode.y + this.mouse.y) / 2 + Math.cos(this.time * 0.004 + sIdx) * 12;

                            this.ctx.beginPath();
                            this.ctx.moveTo(outerNode.x, outerNode.y);
                            this.ctx.quadraticCurveTo(cpX, cpY, this.mouse.x, this.mouse.y);
                            this.ctx.stroke();

                            this.ctx.shadowBlur = 0;
                        }
                    });
                });
            }

            this.ctx.restore();
        }

        drawCity() {
            this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
            this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

            const offsetX = (this.mouse.x - this.width / 2) * 0.02;

            const skyGrad = this.ctx.createRadialGradient(
                this.width / 2, this.height * 0.3, 50,
                this.width / 2, this.height / 2, this.width * 0.7
            );
            skyGrad.addColorStop(0, 'rgba(255, 30, 67, 0.22)');
            skyGrad.addColorStop(0.45, 'rgba(255, 255, 255, 0.05)');
            skyGrad.addColorStop(1, '#070308');
            
            this.ctx.fillStyle = skyGrad;
            this.ctx.fillRect(0, 0, this.width, this.height);

            this.buildings.forEach(b => {
                if (b.layer === 1) {
                    const px = b.x + offsetX * 0.4;
                    const py = this.height - b.h;
                    this.ctx.fillStyle = '#0f0512';
                    this.ctx.fillRect(px, py, b.w, b.h);

                    b.windows.forEach(w => {
                        this.ctx.fillStyle = w.color;
                        this.ctx.globalAlpha = 0.35;
                        this.ctx.fillRect(px + w.x, py + w.y, 3, 5);
                    });
                    this.ctx.globalAlpha = 1.0;
                }
            });

            this.buildings.forEach(b => {
                if (b.layer === 2) {
                    const px = b.x + offsetX * 1.0;
                    const py = this.height - b.h;
                    this.ctx.fillStyle = '#070308';
                    this.ctx.fillRect(px, py, b.w, b.h);

                    this.ctx.fillStyle = '#ff1e43';
                    this.ctx.shadowColor = '#ff1e43';
                    this.ctx.shadowBlur = 10;
                    this.ctx.fillRect(px + b.w / 2 - 1, py - 4, 2, 4);
                    this.ctx.shadowBlur = 0;

                    b.windows.forEach(w => {
                        this.ctx.fillStyle = w.color;
                        this.ctx.globalAlpha = 0.75;
                        this.ctx.fillRect(px + w.x, py + w.y, 3.5, 6);
                    });
                    this.ctx.globalAlpha = 1.0;
                }
            });
        }

        drawFog() {
            this.fogParticles.forEach(p => {
                p.x += p.speedX;
                if (p.x < -p.radius) p.x = this.width + p.radius;
                if (p.x > this.width + p.radius) p.x = -p.radius;

                const fogGrad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
                fogGrad.addColorStop(0, p.color);
                fogGrad.addColorStop(1, 'transparent');

                this.ctx.fillStyle = fogGrad;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fill();
            });
        }

        animate() {
            this.time = Date.now();
            this.ctx.clearRect(0, 0, this.width, this.height);

            this.drawCity();
            this.drawFog();
            this.updateWebPhysics();
            this.drawRealisticSpiderWebs();

            this.animationFrameId = requestAnimationFrame(() => this.animate());
        }
    }

    // 3. SMALL SPIDER-MAN CHARACTER CURSOR WITH IDLE BOTTOM-LEFT CORNER PERCHING
    class CustomCursorController {
        constructor() {
            this.cursor = document.getElementById('custom-cursor');
            if (!this.cursor) return;

            // Render Real Spider-Man Character Image as Miniature Cursor
            this.cursor.className = 'mini-spidey-cursor fixed top-0 left-0 pointer-events-none';
            this.cursor.innerHTML = `
                <div class="relative w-full h-full">
                    <div class="spidey-perch-badge">SPIDER-MAN RESTING...</div>
                    <div class="spidey-web-string"></div>
                    <img
                        src="images/spiderman-character.png"
                        class="mini-spidey-body w-full h-full"
                        alt="Spider-Man"
                        draggable="false"
                        style="object-fit: contain;"
                    >
                </div>
            `;

            this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            this.targetPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            this.speed = 0.22;

            this.lastMouseMoveTime = Date.now();
            this.isIdle = false;
            this.idleTimeoutMs = 1500; // 1.5 seconds idle threshold

            this.init();
        }

        init() {
            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
                this.lastMouseMoveTime = Date.now();

                if (this.isIdle) {
                    this.isIdle = false;
                    this.cursor.classList.remove('is-idle');
                }
            });

            this.attachHoverListeners();
            const observer = new MutationObserver(() => this.attachHoverListeners());
            observer.observe(document.body, { childList: true, subtree: true });

            this.render();
        }

        attachHoverListeners() {
            if (!this.cursor) return;

            const interactiveEls = document.querySelectorAll('button, a, .btn, input, select, textarea, .portfolio-card, .showreel-card');
            interactiveEls.forEach(el => {
                el.addEventListener('mouseenter', () => this.cursor.classList.add('hovering-button'));
                el.addEventListener('mouseleave', () => this.cursor.classList.remove('hovering-button'));
            });

            // Immediately hide miniature cursor when hovering over admin modals
            ['admin-panel-modal', 'admin-login-modal'].forEach(id => {
                const modal = document.getElementById(id);
                if (modal) {
                    modal.addEventListener('mouseenter', () => {
                        this.cursor.classList.add('cursor-disabled');
                        document.body.classList.add('admin-modal-open');
                    });
                    modal.addEventListener('mouseleave', () => {
                        this.cursor.classList.remove('cursor-disabled');
                        document.body.classList.remove('admin-modal-open');
                    });
                }
            });
        }

        render() {
            const now = Date.now();

            // Check if modal is open - if so, ensure cursor stays hidden and native cursor is active
            const panelModal = document.getElementById('admin-panel-modal');
            const loginModal = document.getElementById('admin-login-modal');
            const isModalOpen = (panelModal && !panelModal.classList.contains('hidden')) || 
                                (loginModal && !loginModal.classList.contains('hidden'));

            if (isModalOpen) {
                document.body.classList.add('admin-modal-open');
                if (this.cursor) this.cursor.classList.add('cursor-disabled');
            } else {
                document.body.classList.remove('admin-modal-open');
                if (this.cursor) this.cursor.classList.remove('cursor-disabled');
            }

            if (!this.isIdle && (now - this.lastMouseMoveTime > this.idleTimeoutMs)) {
                this.isIdle = true;
                this.cursor.classList.add('is-idle');
            }

            if (this.isIdle) {
                this.targetPos.x = 65;
                this.targetPos.y = window.innerHeight - 65;
            } else {
                this.targetPos.x = this.mouse.x;
                this.targetPos.y = this.mouse.y;
            }

            this.pos.x += (this.targetPos.x - this.pos.x) * (this.isIdle ? 0.08 : this.speed);
            this.pos.y += (this.targetPos.y - this.pos.y) * (this.isIdle ? 0.08 : this.speed);

            if (this.cursor) {
                this.cursor.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0) translate(-50%, -50%)`;
            }

            requestAnimationFrame(() => this.render());
        }
    }

    // 4. NAVBAR
    function renderNavbar() {
        return `
        <header id="navbar" class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 glass-panel border-b border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <a href="#hero" class="group flex items-center gap-3 font-display text-2xl tracking-wider text-white">
                    <div class="relative w-10 h-10 rounded-lg bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center font-bold text-white shadow-lg shadow-brand-red/30 group-hover:scale-105 transition-transform duration-300 border border-brand-red-glow/40">
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

                <nav class="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
                    <a href="#portfolio" class="nav-link text-slate-300 hover:text-brand-red transition-colors py-1">WORK</a>
                    <a href="#showreel" class="nav-link text-slate-300 hover:text-brand-red transition-colors py-1">SHOWREEL</a>
                    <a href="#services" class="nav-link text-slate-300 hover:text-brand-red transition-colors py-1">SERVICES</a>
                    <a href="#about" class="nav-link text-slate-300 hover:text-brand-red transition-colors py-1">ABOUT</a>
                    <a href="#contact" class="nav-link text-slate-300 hover:text-brand-red transition-colors py-1">CONTACT</a>
                </nav>

                <div class="flex items-center gap-4">
                    <button id="admin-trigger-btn" class="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-brand-red/20 border border-brand-red/40 hover:bg-brand-red hover:text-white text-brand-red text-xs font-mono font-bold tracking-wider transition-all duration-300 shadow-sm">
                        <span class="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
                        <i data-lucide="sliders" class="w-3.5 h-3.5"></i>
                        <span>CMS ADMIN</span>
                    </button>

                    <button id="mobile-menu-btn" class="md:hidden text-slate-300 hover:text-white p-2">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>

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

    function initNavbarEvents(onOpenAdmin) {
        const adminBtn = document.getElementById('admin-trigger-btn');
        if (adminBtn) adminBtn.addEventListener('click', () => onOpenAdmin());

        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
            });
        }
    }

    // 5. FULL-SCREEN ANIMATED SPIDER-MAN BANNER HERO LANDING PAGE
    function renderHero(heroData) {
        return `
        <section id="hero" class="relative w-full min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-brand-dark">
            
            <!-- FULL-SCREEN ANIMATED SPIDER-MAN BACKGROUND BANNER LAYER -->
            <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <!-- Full-Screen Banner Ken Burns Animated Image Slides -->
                <div id="spidey-fullscreen-slides" class="w-full h-full relative">
                    <img id="spidey-bg-0" src="${heroData.bannerImage || 'images/spiderman-banner.jpg'}" alt="Spider-Man Full Screen Hero Banner" class="spidey-hero-bg-slide active-bg-slide absolute inset-0 w-full h-full object-cover spiderman-kenburns transition-opacity duration-1000">
                    <img id="spidey-bg-1" src="${heroData.bannerImage || 'images/spiderman-banner.jpg'}" alt="Stealth Cyber Spider-Man" class="spidey-hero-bg-slide hidden-bg-slide absolute inset-0 w-full h-full object-cover spiderman-kenburns filter hue-rotate-180 brightness-90 transition-opacity duration-1000">
                    <img id="spidey-bg-2" src="${heroData.bannerImage || 'images/spiderman-banner.jpg'}" alt="Armored Gold Spider-Man" class="spidey-hero-bg-slide hidden-bg-slide absolute inset-0 w-full h-full object-cover spiderman-kenburns filter brightness-110 contrast-125 sepia-[0.4] transition-opacity duration-1000">
                </div>

                <!-- Full-Screen Dark Vignette & Gradient Overlays for High Text Contrast -->
                <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40"></div>
                <div class="absolute inset-0 bg-radial-vignette opacity-90"></div>

                <!-- Animated Full-Screen Red & White Web Grid Overlay -->
                <div class="absolute inset-0 opacity-35 animate-web-sweep pointer-events-none">
                    <svg class="w-full h-full text-brand-red/40" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <path d="M0,0 L1000,1000 M1000,0 L0,1000 M500,0 L500,1000 M0,500 L1000,500" stroke="#ffffff" stroke-width="0.9" stroke-dasharray="10 8" class="animate-web-pulse"></path>
                        <circle cx="500" cy="500" r="220" fill="none" stroke="#ff1e43" stroke-width="1.8" stroke-dasharray="6 4"></circle>
                        <circle cx="500" cy="500" r="440" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="8 8"></circle>
                    </svg>
                </div>

                <!-- Animated Red Ambient Pulse Flare behind Spider-Man -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-red/30 rounded-full blur-[150px] spidey-ambient-glow"></div>
            </div>

            <!-- MAIN HERO CONTENT OVER FULL-SCREEN BANNER -->
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center space-y-8">
                
                <div class="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-red/20 border border-brand-red/50 shadow-xl backdrop-blur-md">
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping"></span>
                    <span class="text-xs font-mono font-bold tracking-widest text-brand-red uppercase">${heroData.badge || 'FULL SCREEN ANIMATED SPIDER-MAN BANNER'}</span>
                </div>

                <p class="text-xs sm:text-sm md:text-base font-mono tracking-[0.4em] text-brand-blue uppercase text-glow-blue">
                    ${heroData.subtitle}
                </p>

                <p class="text-slate-200 text-base sm:text-xl md:text-2xl max-w-3xl font-light leading-relaxed drop-shadow-md">
                    ${heroData.description}
                </p>

                <div class="flex flex-wrap items-center justify-center gap-5 pt-2">
                    <a href="#portfolio" class="btn group relative inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-gradient-to-r from-brand-red to-brand-red-dark text-white font-mono font-bold text-sm tracking-wider uppercase shadow-2xl shadow-brand-red/60 hover:scale-105 transition-all border border-brand-red-glow">
                        <span>${heroData.primaryCta}</span>
                        <i data-lucide="arrow-down-right" class="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></i>
                    </a>

                    <a href="#showreel" class="btn group inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-brand-card/90 border border-white/20 hover:border-brand-red text-slate-100 hover:text-white font-mono font-bold text-sm tracking-wider uppercase transition-all backdrop-blur-md shadow-lg">
                        <span>WATCH SHOWREEL</span>
                        <i data-lucide="play" class="w-4 h-4 text-brand-red group-hover:scale-110 transition-transform"></i>
                    </a>
                </div>

                <div class="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/15 w-full max-w-2xl font-mono text-xs text-slate-300">
                    <div class="flex items-center justify-center gap-2">
                        <i data-lucide="film" class="w-4 h-4 text-brand-red"></i>
                        <span>4K / RAW Workflow</span>
                    </div>
                    <div class="flex items-center justify-center gap-2">
                        <i data-lucide="zap" class="w-4 h-4 text-brand-blue"></i>
                        <span>High Retention</span>
                    </div>
                    <div class="flex items-center justify-center gap-2">
                        <i data-lucide="disc" class="w-4 h-4 text-brand-red"></i>
                        <span>Custom Foley Audio</span>
                    </div>
                </div>
            </div>

            <!-- BOTTOM FLOATING FULL-SCREEN SUIT MODE SELECTOR BAR -->
            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel-glow border border-brand-red/60 shadow-2xl backdrop-blur-xl max-w-full overflow-x-auto">
                <span class="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase hidden sm:inline">FULL SCREEN BANNER MODE:</span>
                <div class="flex items-center gap-2" id="spidey-fullscreen-mode-btns">
                    <button data-mode="0" class="px-3.5 py-1.5 rounded-full bg-brand-red text-white text-xs font-mono font-bold shadow-md shadow-brand-red/40 transition-all">01. CLASSIC RED/WHITE</button>
                    <button data-mode="1" class="px-3.5 py-1.5 rounded-full bg-black/60 text-slate-300 hover:text-white text-xs font-mono border border-white/20 transition-all">02. STEALTH CYBER</button>
                    <button data-mode="2" class="px-3.5 py-1.5 rounded-full bg-black/60 text-slate-300 hover:text-white text-xs font-mono border border-white/20 transition-all">03. ANAMORPHIC GOLD</button>
                </div>
            </div>
        </section>
        `;
    }

    function initHeroSlider() {
        const bgSlides = [
            document.getElementById('spidey-bg-0'),
            document.getElementById('spidey-bg-1'),
            document.getElementById('spidey-bg-2')
        ];
        const modeBtns = document.querySelectorAll('#spidey-fullscreen-mode-btns button');

        if (!bgSlides[0]) return;

        let currentSlide = 0;
        let slideTimer = null;

        const goToSlide = (index) => {
            // Update Full Screen Background Banner Slides
            bgSlides.forEach((bg, idx) => {
                if (!bg) return;
                if (idx === index) {
                    bg.classList.remove('hidden-bg-slide');
                    bg.classList.add('active-bg-slide');
                } else {
                    bg.classList.add('hidden-bg-slide');
                    bg.classList.remove('active-bg-slide');
                }
            });

            // Update Full Screen Mode Buttons
            modeBtns.forEach((b, idx) => {
                if (idx === index) {
                    const colorClass = index === 1 ? 'bg-brand-blue text-black' : index === 2 ? 'bg-yellow-400 text-black' : 'bg-brand-red text-white';
                    b.className = `px-3.5 py-1.5 rounded-full ${colorClass} text-xs font-mono font-bold shadow-md transition-all`;
                } else {
                    b.className = 'px-3.5 py-1.5 rounded-full bg-black/60 text-slate-300 hover:text-white text-xs font-mono border border-white/20 transition-all';
                }
            });

            currentSlide = index;
        };

        const nextSlide = () => {
            const next = (currentSlide + 1) % bgSlides.length;
            goToSlide(next);
        };

        modeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-mode'), 10);
                goToSlide(idx);
                resetTimer();
            });
        });

        const startTimer = () => {
            slideTimer = setInterval(nextSlide, 5000);
        };

        const resetTimer = () => {
            if (slideTimer) clearInterval(slideTimer);
            startTimer();
        };

        startTimer();
    }

    // 6. ABOUT
    function renderAbout(aboutData) {
        return `
        <section id="about" class="py-24 relative overflow-hidden bg-brand-dark/90 border-t border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span class="text-xs font-mono tracking-[0.3em] text-brand-red uppercase text-glow-red">BIOGRAPHY & WORKFLOW</span>
                    <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">
                        ${aboutData.heading}
                    </h2>
                    <div class="w-24 h-1 bg-gradient-to-r from-brand-red to-white mx-auto rounded-full mt-4"></div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                    <div class="lg:col-span-5 relative">
                        <div class="relative rounded-2xl overflow-hidden glass-panel-glow border-2 border-brand-red/40 p-2 shadow-2xl group">
                            <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80" alt="Video Editor Studio" class="w-full h-80 object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105">
                            <div class="absolute top-4 left-4 bg-brand-dark/90 border border-brand-red/40 px-3 py-1.5 rounded-lg text-[10px] font-mono text-brand-red uppercase tracking-wider">REC ● 00:24:19:12</div>
                        </div>
                    </div>

                    <div class="lg:col-span-7 space-y-6">
                        <h3 class="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">${aboutData.subheading}</h3>
                        <p class="text-slate-300 text-base sm:text-lg leading-relaxed font-light">${aboutData.bioParagraph1}</p>
                        <p class="text-slate-400 text-sm sm:text-base leading-relaxed font-light">${aboutData.bioParagraph2}</p>

                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                            ${aboutData.stats.map(stat => `
                                <div class="p-4 rounded-xl bg-brand-card/80 border border-brand-card-border hover:border-brand-red/50 transition-colors text-center group">
                                    <div class="text-3xl sm:text-4xl font-display font-extrabold text-brand-red text-glow-red group-hover:scale-110 transition-transform">${stat.value}</div>
                                    <div class="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-1">${stat.text}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="mt-20">
                    <div class="text-center mb-10">
                        <h3 class="text-xl font-mono tracking-widest text-white uppercase">EDITING PIPELINE</h3>
                        <p class="text-xs text-slate-400 font-mono mt-1">HOW RAW FOOTAGE TRANSFORMS INTO A MASTERPIECE</p>
                    </div>
                    <div class="relative grid grid-cols-1 md:grid-cols-5 gap-4">
                        ${aboutData.timeline.map((item) => `
                            <div class="relative z-10 glass-panel p-5 rounded-xl border border-white/10 hover:border-brand-red/60 transition-all duration-300 text-center">
                                <div class="w-10 h-10 rounded-full bg-brand-dark border-2 border-brand-red text-brand-red font-mono font-bold text-xs flex items-center justify-center mx-auto mb-3">${item.step}</div>
                                <h4 class="font-display text-lg tracking-wider text-white uppercase">${item.title}</h4>
                                <p class="text-xs font-mono text-slate-400 mt-1">${item.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    // 7. SHOWREEL
    function renderShowreel(showreelData) {
        return `
        <section id="showreel" class="py-24 relative overflow-hidden bg-brand-panel border-t border-b border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span class="text-xs font-mono tracking-[0.3em] text-white uppercase text-glow-blue">FEATURED EDIT</span>
                    <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">${showreelData.title}</h2>
                    <p class="text-slate-400 font-mono text-xs sm:text-sm tracking-wider">${showreelData.subtitle}</p>
                    <div class="w-24 h-1 bg-brand-red mx-auto rounded-full mt-4"></div>
                </div>

                <div class="relative max-w-5xl mx-auto rounded-3xl overflow-hidden glass-panel-glow border-2 border-brand-red/60 shadow-[0_0_50px_rgba(255,30,67,0.25)] group play-trigger cursor-pointer" id="showreel-play-btn">
                    <div class="relative aspect-video w-full overflow-hidden bg-brand-dark">
                        <img src="${showreelData.thumbnail}" alt="Showreel Reel" class="w-full h-full object-cover filter brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent"></div>
                        <div class="light-sweep"></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-red/90 text-white flex items-center justify-center shadow-2xl shadow-brand-red/80 border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                                <i data-lucide="play" class="w-10 h-10 ml-1 fill-current"></i>
                            </div>
                        </div>
                        <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div>
                                <span class="text-xs font-mono text-brand-red uppercase tracking-widest">PLAY SHOWREEL</span>
                                <h3 class="text-2xl sm:text-3xl font-display font-bold text-white tracking-wider">AJ EDITS — DIRECTORS CUT</h3>
                                <p class="text-slate-300 text-xs sm:text-sm font-light max-w-xl mt-1">${showreelData.description}</p>
                            </div>
                            <button class="px-6 py-3 rounded-xl bg-brand-red text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-brand-red-glow transition-colors shrink-0">CLICK TO WATCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id="showreel-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-8">
            <div class="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-brand-red/50 shadow-2xl bg-black">
                <button id="close-showreel-modal" class="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:text-brand-red flex items-center justify-center transition-colors">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
                <iframe id="showreel-iframe" class="w-full h-full" src="" title="Showreel Player" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
        </div>
        `;
    }

    function initShowreelEvents(showreelData) {
        const playBtn = document.getElementById('showreel-play-btn');
        const modal = document.getElementById('showreel-modal');
        const closeBtn = document.getElementById('close-showreel-modal');
        const iframe = document.getElementById('showreel-iframe');

        if (playBtn && modal && closeBtn && iframe) {
            playBtn.addEventListener('click', () => {
                iframe.src = showreelData.videoUrl;
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            });

            closeBtn.addEventListener('click', () => {
                iframe.src = '';
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            });
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    iframe.src = '';
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                }
            });
        }
    }

    // 8. PORTFOLIO & MODAL
    function renderProjectModal() {
        return `
        <div id="project-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-6 overflow-y-auto">
            <div class="relative w-full max-w-5xl my-8 rounded-2xl glass-panel-glow border-2 border-brand-red/50 bg-brand-dark shadow-2xl text-slate-100 overflow-hidden" id="modal-container">
                <div class="sticky top-0 z-40 bg-brand-dark/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span id="modal-category-tag" class="px-3 py-1 rounded-md bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-mono font-bold uppercase">CATEGORY</span>
                        <span id="modal-year-tag" class="text-xs font-mono text-slate-400">2026</span>
                    </div>
                    <button id="close-project-modal" class="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-colors">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>
                </div>
                <div class="p-6 sm:p-8 space-y-8" id="modal-body-content"></div>
            </div>
        </div>
        `;
    }

    function populateProjectModal(project, allProjects, onSelectProject) {
        const modalContent = document.getElementById('modal-body-content');
        const modalCategory = document.getElementById('modal-category-tag');
        const modalYear = document.getElementById('modal-year-tag');

        if (!modalContent) return;
        modalCategory.innerText = project.category;
        modalYear.innerText = project.year || '2026';

        const currentIndex = allProjects.findIndex(p => p.id === project.id);
        const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

        modalContent.innerHTML = `
            <div class="space-y-2">
                <h2 class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-wide uppercase text-glow-red">${project.title}</h2>
                <p class="text-slate-300 text-lg font-light">${project.shortDesc}</p>
            </div>

            <div class="relative aspect-video w-full rounded-xl overflow-hidden border border-brand-red/40 bg-black shadow-xl">
                <iframe class="w-full h-full" src="${project.videoUrl}" title="${project.title}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-brand-card/90 border border-brand-card-border font-mono text-xs">
                <div><span class="text-slate-400 block uppercase">CLIENT</span><span class="text-white font-bold text-sm">${project.client || 'N/A'}</span></div>
                <div><span class="text-slate-400 block uppercase">MY ROLE</span><span class="text-brand-red font-bold text-sm">${project.role || 'Editor'}</span></div>
                <div><span class="text-slate-400 block uppercase">YEAR</span><span class="text-white font-bold text-sm">${project.year || '2026'}</span></div>
                <div><span class="text-slate-400 block uppercase">SOFTWARE</span><span class="text-brand-blue font-bold text-sm">${(project.software || []).join(', ')}</span></div>
            </div>

            <div class="space-y-3 pt-4 border-t border-white/10">
                <div class="flex items-center justify-between font-mono text-xs">
                    <span class="text-brand-red font-bold uppercase">BEFORE / AFTER COLOR GRADE SLIDER</span>
                    <span class="text-slate-400">DRAG SLIDER TO COMPARE</span>
                </div>
                <div class="before-after-slider relative aspect-video w-full rounded-xl overflow-hidden border border-white/10" id="ba-container">
                    <img src="${project.afterImage || project.thumbnail}" alt="After" class="absolute inset-0 w-full h-full object-cover">
                    <div class="absolute inset-0 w-full h-full overflow-hidden" id="ba-before-layer" style="width: 50%;">
                        <img src="${project.beforeImage || project.thumbnail}" alt="Before" class="absolute top-0 left-0 w-full h-full object-cover max-w-none" id="ba-before-img">
                    </div>
                    <div class="before-after-handle" id="ba-handle" style="left: 50%;">
                        <div class="before-after-button">↔</div>
                    </div>
                </div>
            </div>

            <div class="pt-6 border-t border-white/10 flex justify-end">
                <button id="next-project-btn" class="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-brand-card hover:bg-brand-red text-white font-mono text-xs font-bold uppercase transition-all">
                    <span>NEXT PROJECT: ${nextProject.title}</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
        initBeforeAfterSlider();

        const nextBtn = document.getElementById('next-project-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => onSelectProject(nextProject));
        }
    }

    function initBeforeAfterSlider() {
        const container = document.getElementById('ba-container');
        const beforeLayer = document.getElementById('ba-before-layer');
        const handle = document.getElementById('ba-handle');
        const beforeImg = document.getElementById('ba-before-img');
        if (!container || !beforeLayer || !handle) return;

        let isDragging = false;
        const setPos = (x) => {
            const rect = container.getBoundingClientRect();
            let pos = ((x - rect.left) / rect.width) * 100;
            if (pos < 0) pos = 0; if (pos > 100) pos = 100;
            beforeLayer.style.width = pos + '%';
            handle.style.left = pos + '%';
            if (beforeImg) beforeImg.style.width = rect.width + 'px';
        };
        const updateWidth = () => {
            const rect = container.getBoundingClientRect();
            if (beforeImg) beforeImg.style.width = rect.width + 'px';
        };
        updateWidth();

        container.addEventListener('mousedown', (e) => { isDragging = true; setPos(e.clientX); });
        window.addEventListener('mousemove', (e) => { if (isDragging) setPos(e.clientX); });
        window.addEventListener('mouseup', () => { isDragging = false; });
    }

    function renderPortfolio(projects) {
        const categories = ['ALL', 'CINEMATIC', 'COMMERCIAL', 'REELS', 'MOTION GRAPHICS', 'SOCIAL MEDIA'];
        return `
        <section id="portfolio" class="py-24 relative overflow-hidden bg-brand-dark/95 border-t border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <span class="text-xs font-mono tracking-[0.3em] text-brand-red uppercase text-glow-red">SELECTED PORTFOLIO</span>
                    <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">SELECTED WORK</h2>
                    <div class="w-24 h-1 bg-gradient-to-r from-brand-red to-white mx-auto rounded-full mt-4"></div>
                </div>

                <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16" id="portfolio-category-tabs">
                    ${categories.map((cat, idx) => `
                        <button data-category="${cat}" class="category-tab-btn px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all ${idx === 0 ? 'bg-brand-red text-white shadow-lg shadow-brand-red/40 border border-brand-red' : 'bg-brand-card/80 text-slate-300 border border-white/10 hover:border-brand-red/50 hover:text-white'}">
                            ${cat}
                        </button>
                    `).join('')}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
                    ${renderProjectCards(projects, 'ALL')}
                </div>
            </div>
        </section>
        ${renderProjectModal()}
        `;
    }

    function renderProjectCards(projects, activeCategory) {
        const filtered = activeCategory === 'ALL' 
            ? projects.filter(p => p.published !== false)
            : projects.filter(p => p.published !== false && p.category.toUpperCase() === activeCategory);

        if (filtered.length === 0) {
            return `<div class="col-span-full py-16 text-center text-slate-400 font-mono text-sm">NO PROJECTS FOUND.</div>`;
        }

        return filtered.map(project => `
            <div data-project-id="${project.id}" class="portfolio-card group relative rounded-2xl overflow-hidden glass-panel border border-brand-card-border hover:border-brand-red/70 shadow-xl transition-all duration-500 hover:-translate-y-2 play-trigger cursor-pointer flex flex-col">
                <div class="corner-web-top-left opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="corner-web-bottom-right opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div class="relative aspect-video w-full overflow-hidden bg-brand-dark">
                    <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
                    <div class="light-sweep"></div>
                    <div class="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-brand-red/40 font-mono text-[10px] font-bold text-brand-red uppercase">${project.category}</div>
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                        <div class="w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg shadow-brand-red/80 border border-white/30">
                            <i data-lucide="play" class="w-7 h-7 ml-0.5 fill-current"></i>
                        </div>
                    </div>
                </div>

                <div class="p-6 flex-1 flex flex-col justify-between space-y-3 bg-brand-card/60">
                    <div>
                        <h3 class="text-2xl font-display font-bold text-white tracking-wide uppercase group-hover:text-brand-red transition-all">${project.title}</h3>
                        <p class="text-slate-300 text-xs font-light line-clamp-2 mt-1">${project.shortDesc}</p>
                    </div>
                    <div class="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
                        <span class="flex items-center gap-1.5 text-white">${project.client || 'Featured Cut'}</span>
                        <span class="group-hover:text-brand-red transition-colors">VIEW CUT →</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function initPortfolioEvents(projects) {
        const tabsContainer = document.getElementById('portfolio-category-tabs');
        const gridContainer = document.getElementById('portfolio-grid');
        const modal = document.getElementById('project-modal');
        const closeModalBtn = document.getElementById('close-project-modal');

        if (!gridContainer || !modal) return;

        const openModalForProject = (project) => {
            populateProjectModal(project, projects, openModalForProject);
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        };

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                modal.classList.add('hidden'); modal.classList.remove('flex');
            });
        }
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden'); modal.classList.remove('flex');
            }
        });

        const attachCardClicks = () => {
            document.querySelectorAll('.portfolio-card').forEach(card => {
                card.addEventListener('click', () => {
                    const projId = card.getAttribute('data-project-id');
                    const selected = projects.find(p => p.id === projId);
                    if (selected) openModalForProject(selected);
                });
            });
        };
        attachCardClicks();

        if (tabsContainer) {
            const tabBtns = tabsContainer.querySelectorAll('.category-tab-btn');
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const cat = btn.getAttribute('data-category');
                    tabBtns.forEach(b => {
                        b.className = 'category-tab-btn px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all bg-brand-card/80 text-slate-300 border border-white/10 hover:border-brand-red/50 hover:text-white';
                    });
                    btn.className = 'category-tab-btn px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all bg-brand-red text-white shadow-lg shadow-brand-red/40 border border-brand-red';

                    gridContainer.innerHTML = renderProjectCards(projects, cat);
                    if (window.lucide) window.lucide.createIcons();
                    attachCardClicks();
                });
            });
        }
    }

    // 9. SERVICES
    function renderServices(servicesData) {
        return `
        <section id="services" class="py-24 relative overflow-hidden bg-brand-panel border-t border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span class="text-xs font-mono tracking-[0.3em] text-white uppercase text-glow-blue">EXPERT CAPABILITIES</span>
                    <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">WHAT I DO</h2>
                    <div class="w-24 h-1 bg-brand-red mx-auto rounded-full mt-4"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${servicesData.map((service, index) => `
                        <div class="group relative rounded-2xl glass-panel p-8 border border-white/10 hover:border-brand-red/60 transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between overflow-hidden shadow-xl">
                            <div class="light-sweep"></div>
                            <div class="space-y-6">
                                <div class="flex items-center justify-between font-mono text-xs text-slate-400">
                                    <span class="px-2.5 py-1 rounded bg-white/10 border border-white/20 text-brand-red font-bold">0${index + 1}</span>
                                    <span class="tracking-widest uppercase">SERVICE</span>
                                </div>
                                <h3 class="text-2xl font-display font-bold text-white tracking-wider uppercase group-hover:text-brand-red transition-colors">${service.title}</h3>
                                <p class="text-slate-300 text-sm font-light leading-relaxed">${service.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        `;
    }

    // 10. SOFTWARE & PROCESS
    function renderSoftware(softwareData) {
        return `
        <section id="software" class="py-24 relative overflow-hidden bg-brand-dark border-t border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span class="text-xs font-mono tracking-[0.3em] text-brand-red uppercase text-glow-red">PRODUCTION ARSENAL</span>
                    <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">MY DIGITAL WEAPONS</h2>
                    <div class="w-24 h-1 bg-brand-red mx-auto rounded-full mt-4"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${softwareData.map(item => `
                        <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-brand-red/50 transition-all group">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="font-display text-xl text-white tracking-wide uppercase group-hover:text-brand-red">${item.name}</h3>
                                <span class="font-mono text-lg font-bold text-brand-red text-glow-red">${item.percent}%</span>
                            </div>
                            <div class="w-full h-3 rounded-full bg-brand-dark/80 border border-white/10 overflow-hidden p-0.5">
                                <div class="h-full rounded-full bg-gradient-to-r from-brand-red to-white" style="width: ${item.percent}%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        `;
    }

    function renderProcess(processData) {
        return `
        <section id="process" class="py-24 relative overflow-hidden bg-brand-panel border-t border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-20 space-y-3">
                    <span class="text-xs font-mono tracking-[0.3em] text-white uppercase text-glow-blue">CREATIVE WORKFLOW</span>
                    <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">FROM RAW TO WOW</h2>
                    <div class="w-24 h-1 bg-brand-red mx-auto rounded-full mt-4"></div>
                </div>

                <div class="relative max-w-4xl mx-auto space-y-8">
                    ${processData.map((step) => `
                        <div class="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-brand-red/60 transition-all flex items-center gap-6">
                            <div class="w-14 h-14 rounded-full bg-brand-dark border-2 border-brand-red text-white font-mono font-extrabold text-lg flex items-center justify-center shrink-0">${step.number}</div>
                            <div>
                                <h3 class="text-2xl font-display font-bold text-white tracking-wider uppercase">${step.title}</h3>
                                <p class="text-slate-300 text-sm font-light mt-1">${step.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        `;
    }

    // 11. TESTIMONIALS & CONTACT & FOOTER
    function renderTestimonials(testimonialsData) {
        return `
        <section id="testimonials" class="py-24 relative overflow-hidden bg-brand-dark/90 border-t border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span class="text-xs font-mono tracking-[0.3em] text-brand-red uppercase text-glow-red">CLIENT ENDORSEMENTS</span>
                    <h2 class="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-white uppercase text-glow-red">WHAT CLIENTS SAY</h2>
                    <div class="w-24 h-1 bg-brand-red mx-auto rounded-full mt-4"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${testimonialsData.map(item => `
                        <div class="glass-panel p-8 rounded-2xl border border-white/10 hover:border-brand-red/50 transition-all flex flex-col justify-between group shadow-xl">
                            <p class="text-slate-300 text-sm font-light italic">"${item.quote}"</p>
                            <div class="pt-6 mt-6 border-t border-white/10 flex items-center gap-4">
                                <img src="${item.avatar}" class="w-12 h-12 rounded-full object-cover border-2 border-brand-red/40">
                                <div>
                                    <h4 class="font-display text-lg font-bold text-white tracking-wide uppercase">${item.name}</h4>
                                    <p class="text-xs font-mono text-slate-400">${item.company}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        `;
    }

    function renderContact(contactData) {
        return `
        <section id="contact" class="py-24 relative overflow-hidden bg-brand-panel border-t border-white/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div class="lg:col-span-5 space-y-6">
                        <span class="text-xs font-mono tracking-[0.3em] text-brand-red uppercase text-glow-red">GET IN TOUCH</span>
                        <h2 class="text-5xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[0.95] uppercase text-glow-red">${contactData.headline}</h2>
                        <p class="text-slate-300 text-base sm:text-lg font-light">${contactData.subtitle}</p>

                        <div class="pt-4 flex flex-wrap gap-4 font-mono text-xs">
                            <a href="mailto:${contactData.email}" class="px-6 py-3 rounded-xl bg-brand-red text-white font-bold tracking-wider uppercase">EMAIL ME DIRECTLY</a>
                            <div class="px-4 py-3 rounded-xl bg-brand-card/80 border border-white/10 text-slate-300">📍 ${contactData.location}</div>
                        </div>
                    </div>

                    <div class="lg:col-span-7">
                        <div class="glass-panel-glow p-8 rounded-3xl border-2 border-brand-red/40 shadow-2xl">
                            <h3 class="text-2xl font-display font-bold text-white tracking-wide uppercase mb-6">START A PROJECT</h3>
                            <form id="contact-form" class="space-y-5 font-mono text-xs">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div><label class="block text-slate-300 mb-2">YOUR NAME *</label><input type="text" required class="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-white/10 text-white"></div>
                                    <div><label class="block text-slate-300 mb-2">YOUR EMAIL *</label><input type="email" required class="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-white/10 text-white"></div>
                                </div>
                                <div><label class="block text-slate-300 mb-2">PROJECT BRIEF *</label><textarea required rows="4" class="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-white/10 text-white"></textarea></div>
                                <button type="submit" class="w-full py-4 rounded-xl bg-gradient-to-r from-brand-red to-brand-red-dark text-white font-bold text-sm tracking-widest uppercase shadow-xl">SEND PROJECT BRIEF</button>
                            </form>
                            <div id="contact-toast" class="hidden mt-4 bg-brand-red text-white px-4 py-2 rounded-xl text-xs font-mono font-bold text-center">✓ MESSAGE SENT! ILL RESPOND WITHIN 24 HOURS.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    function initContactEvents() {
        const form = document.getElementById('contact-form');
        const toast = document.getElementById('contact-toast');
        if (form && toast) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                toast.classList.remove('hidden');
                form.reset();
                setTimeout(() => toast.classList.add('hidden'), 5000);
            });
        }
    }

    function renderFooter() {
        return `
        <footer class="py-10 bg-brand-dark border-t border-white/10 text-xs font-mono text-slate-400">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <span>© 2026 AJ EDITS. ALL RIGHTS RESERVED.</span>
                <span class="text-slate-400 text-[11px]">SPIDER-MAN VISUAL ENERGY • HOLLYWOOD EDITOR PORTFOLIO</span>
                <a href="#hero" class="px-3 py-1.5 rounded-lg bg-brand-card hover:bg-brand-red text-white border border-white/10">TOP ↑</a>
            </div>
        </footer>
        `;
    }

    // 11B. CINEMATIC COMING SOON / SUITING UP FULL-SCREEN BANNER
    function renderComingSoonBanner(settings = {}, hero = {}) {
        const bannerImg = settings.comingSoonBanner || hero.bannerImage || 'images/spiderman-banner.jpg';
        const title = settings.comingSoonTitle || 'SOMETHING EPIC IS COMING SOON';
        const subtitle = settings.comingSoonSubtitle || 'AJ EDITS IS CURRENTLY SUITING UP • NEW PORTFOLIO PREMIERE';
        const desc = settings.comingSoonDescription || 'We are currently remastering our cinematic showreel and superhero video editing portfolio with next-generation visuals. Stay tuned for the premiere!';

        return `
        <div class="coming-soon-wrapper relative z-20">
            <!-- Animated Spider-Man Hero Background with Ken Burns Zoom -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <img src="${bannerImg}" class="w-full h-full object-cover object-center spiderman-kenburns scale-105" alt="Spider-Man Coming Soon">
                <div class="absolute inset-0 bg-radial-vignette opacity-95"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-transparent"></div>
                <div class="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-transparent to-brand-dark"></div>
            </div>

            <!-- Top Header with Brand & Admin Unlock -->
            <header class="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-30">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center font-bold text-white shadow-lg shadow-brand-red/50 border border-brand-red-glow">
                        <span class="font-display tracking-wider text-lg">AJ</span>
                    </div>
                    <div>
                        <span class="font-display font-extrabold text-xl text-white tracking-wider">AJ EDITS</span>
                        <span class="block text-[9px] font-mono text-brand-red tracking-widest uppercase">CINEMATIC VIDEO EDITOR</span>
                    </div>
                </div>

                <!-- Admin Access Button -->
                <button id="coming-soon-admin-btn" class="px-4 py-2.5 rounded-xl bg-brand-card/90 hover:bg-brand-red border border-brand-red/60 text-white text-xs font-mono font-bold tracking-wider flex items-center gap-2 transition-all shadow-xl shadow-brand-red/30 hover:scale-105 group">
                    <i data-lucide="lock" class="w-4 h-4 text-brand-red group-hover:text-white transition-colors"></i>
                    <span>ADMIN ACCESS</span>
                </button>
            </header>

            <!-- Center Content -->
            <main class="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 relative z-30 my-6 max-w-4xl mx-auto">
                <!-- Glowing Suiting Up Status Badge -->
                <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel border border-brand-red/60 text-brand-red font-mono text-xs tracking-[0.25em] uppercase font-bold shadow-lg shadow-brand-red/20 mb-6 spidey-hero-glow">
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-red status-dot-pulse"></span>
                    <span>SYSTEM STATUS: SUITING UP • SITE TEMPORARILY OFFLINE</span>
                </div>

                <!-- Headline -->
                <h1 class="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-white uppercase text-glow-red leading-[0.92] mb-4">
                    ${title}
                </h1>

                <!-- Subtitle -->
                <p class="text-brand-red font-mono text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-glow-red mb-5 max-w-2xl">
                    ${subtitle}
                </p>

                <!-- Description -->
                <p class="text-slate-300 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10">
                    ${desc}
                </p>

                <!-- Real-Time Countdown Timer HUD -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mb-10" id="coming-soon-countdown">
                    <div class="countdown-card p-5 rounded-2xl relative">
                        <div class="hud-bracket hud-tl"></div><div class="hud-bracket hud-tr"></div>
                        <div class="hud-bracket hud-bl"></div><div class="hud-bracket hud-br"></div>
                        <div class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-wider" id="cd-days">00</div>
                        <div class="text-[10px] font-mono text-brand-red uppercase tracking-widest mt-1 font-bold">DAYS</div>
                    </div>
                    <div class="countdown-card p-5 rounded-2xl relative">
                        <div class="hud-bracket hud-tl"></div><div class="hud-bracket hud-tr"></div>
                        <div class="hud-bracket hud-bl"></div><div class="hud-bracket hud-br"></div>
                        <div class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-wider" id="cd-hours">00</div>
                        <div class="text-[10px] font-mono text-brand-red uppercase tracking-widest mt-1 font-bold">HOURS</div>
                    </div>
                    <div class="countdown-card p-5 rounded-2xl relative">
                        <div class="hud-bracket hud-tl"></div><div class="hud-bracket hud-tr"></div>
                        <div class="hud-bracket hud-bl"></div><div class="hud-bracket hud-br"></div>
                        <div class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-wider" id="cd-minutes">00</div>
                        <div class="text-[10px] font-mono text-brand-red uppercase tracking-widest mt-1 font-bold">MINUTES</div>
                    </div>
                    <div class="countdown-card p-5 rounded-2xl relative">
                        <div class="hud-bracket hud-tl"></div><div class="hud-bracket hud-tr"></div>
                        <div class="hud-bracket hud-bl"></div><div class="hud-bracket hud-br"></div>
                        <div class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-wider text-brand-red text-glow-red" id="cd-seconds">00</div>
                        <div class="text-[10px] font-mono text-white uppercase tracking-widest mt-1 font-bold">SECONDS</div>
                    </div>
                </div>

                <!-- VIP Notification Form -->
                <div class="w-full max-w-md mx-auto space-y-3">
                    <form id="notify-me-form" class="flex flex-col sm:flex-row gap-2">
                        <input type="email" id="notify-email-input" placeholder="Enter your email address..." required 
                               class="flex-1 px-4 py-3.5 rounded-xl bg-brand-card/90 border border-white/20 text-white placeholder:text-slate-500 font-mono text-xs focus:border-brand-red outline-none">
                        <button type="submit" class="px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-red/50 transition-all hover:scale-105 shrink-0">
                            GET NOTIFIED
                        </button>
                    </form>
                    <div id="notify-feedback" class="hidden text-emerald-400 font-mono text-xs font-bold">
                        ✓ You're on the VIP notification list! We'll alert you the moment we launch.
                    </div>
                </div>
            </main>

            <!-- Footer -->
            <footer class="w-full text-center py-6 text-slate-500 font-mono text-[11px] relative z-30">
                © 2026 AJ EDITS • SUITING UP IN PROGRESS • SHORTCUT [CTRL + SHIFT + A] FOR ADMIN
            </footer>
        </div>
        `;
    }

    function initComingSoonEvents(settings = {}, onAdminOpen) {
        const targetTime = new Date(settings.comingSoonDate || '2026-10-15T00:00:00').getTime();
        
        const updateTimer = () => {
            const now = Date.now();
            const diff = Math.max(0, targetTime - now);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const dEl = document.getElementById('cd-days');
            const hEl = document.getElementById('cd-hours');
            const mEl = document.getElementById('cd-minutes');
            const sEl = document.getElementById('cd-seconds');

            if (dEl) dEl.innerText = String(days).padStart(2, '0');
            if (hEl) hEl.innerText = String(hours).padStart(2, '0');
            if (mEl) mEl.innerText = String(minutes).padStart(2, '0');
            if (sEl) sEl.innerText = String(seconds).padStart(2, '0');
        };

        updateTimer();
        setInterval(updateTimer, 1000);

        const adminBtn = document.getElementById('coming-soon-admin-btn');
        if (adminBtn) {
            adminBtn.addEventListener('click', () => {
                if (onAdminOpen) onAdminOpen();
            });
        }

        const notifyForm = document.getElementById('notify-me-form');
        const notifyFeedback = document.getElementById('notify-feedback');
        if (notifyForm) {
            notifyForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('notify-email-input').value.trim();
                if (email) {
                    try {
                        const existing = JSON.parse(localStorage.getItem('aj_edits_notify_subscribers') || '[]');
                        existing.push({ email: email, timestamp: new Date().toISOString() });
                        localStorage.setItem('aj_edits_notify_subscribers', JSON.stringify(existing));
                    } catch (err) {}
                    if (notifyFeedback) notifyFeedback.classList.remove('hidden');
                    document.getElementById('notify-email-input').value = '';
                }
            });
        }
    }

    // 12. FULL FEATURED CMS ADMIN PANEL WITH AUTHENTICATION LOGIN
    const ADMIN_CREDENTIALS = {
        username: "Ajith",
        password: "Ajith@2004"
    };

    function renderAdminPanel(settings = {}) {
        const csActive = settings.comingSoonEnabled === true;
        return `
        <!-- ADMIN LOGIN AUTHENTICATION MODAL -->
        <div id="admin-login-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/95 backdrop-blur-2xl p-4">
            <div class="relative w-full max-w-md rounded-3xl glass-panel-glow border-2 border-brand-red/70 bg-brand-dark p-8 shadow-2xl text-slate-100 flex flex-col space-y-6">
                
                <button id="close-admin-login" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-colors">✕</button>

                <div class="text-center space-y-2">
                    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center mx-auto shadow-lg shadow-brand-red/40 border border-brand-red-glow">
                        <i data-lucide="lock" class="w-7 h-7 text-white"></i>
                    </div>
                    <h2 class="text-2xl font-display font-extrabold text-white tracking-wider uppercase">CMS ADMIN LOGIN</h2>
                    <p class="text-xs font-mono text-slate-400">ENTER USERNAME & PASSWORD TO ACCESS DASHBOARD</p>
                </div>

                <div id="admin-login-error" class="hidden p-3 rounded-xl bg-red-950/90 border border-red-500 text-red-300 text-xs font-mono text-center font-bold shadow-lg">
                    ⚠️ INVALID USERNAME OR PASSWORD. ACCESS DENIED.
                </div>

                <form id="admin-login-form" class="space-y-4 font-mono text-xs">
                    <div>
                        <label class="block text-slate-300 mb-1.5 font-bold uppercase tracking-wider">USERNAME:</label>
                        <input type="text" id="admin-username-input" placeholder="Enter Username" required class="w-full p-3.5 rounded-xl bg-brand-dark border border-white/20 text-white focus:border-brand-red outline-none transition-colors">
                    </div>

                    <div>
                        <label class="block text-slate-300 mb-1.5 font-bold uppercase tracking-wider">PASSWORD:</label>
                        <input type="password" id="admin-password-input" placeholder="••••••••" required class="w-full p-3.5 rounded-xl bg-brand-dark border border-white/20 text-white focus:border-brand-red outline-none transition-colors">
                    </div>

                    <button type="submit" id="admin-login-submit-btn" class="w-full py-4 rounded-xl bg-gradient-to-r from-brand-red to-brand-red-dark text-white font-bold uppercase tracking-wider text-xs shadow-xl shadow-brand-red/50 hover:scale-[1.02] transition-all border border-brand-red-glow">
                        AUTHENTICATE & ENTER CMS
                    </button>
                </form>

                <div class="text-center font-mono text-[10px] text-slate-400 border-t border-white/10 pt-3">
                    PROTECTED DASHBOARD • AUTHORIZED EDITOR ACCESS ONLY
                </div>
            </div>
        </div>

        <!-- MAIN CMS ADMIN DASHBOARD MODAL -->
        <div id="admin-panel-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-6 overflow-y-auto">
            <div class="relative w-full max-w-5xl my-6 rounded-3xl glass-panel-glow border-2 border-brand-red/60 bg-brand-dark shadow-2xl text-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
                
                <!-- Admin Header -->
                <div class="bg-brand-panel px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 shrink-0">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center font-bold text-white shadow-lg shadow-brand-red/40 border border-brand-red-glow/40">
                            <i data-lucide="sliders" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <h2 class="text-xl font-display font-extrabold text-white uppercase tracking-wider">CMS ADMIN DASHBOARD</h2>
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${csActive ? 'bg-amber-950 border border-amber-500 text-amber-300 status-dot-pulse' : 'bg-emerald-950 border border-emerald-500 text-emerald-300'}">
                                    ${csActive ? '● COMING SOON ACTIVE' : '● SITE IS PUBLIC'}
                                </span>
                            </div>
                            <p class="text-[10px] font-mono text-brand-red uppercase tracking-widest">LOGGED IN AS: AJITH (AUTHORIZED EDITOR)</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <button id="admin-logout-btn" class="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 text-xs font-mono transition-colors">LOG OUT</button>
                        <button id="admin-reset-btn" class="px-3.5 py-1.5 rounded-lg bg-red-950/80 border border-red-500/60 hover:bg-red-900 text-red-300 text-xs font-mono transition-colors">RESET DEFAULTS</button>
                        <button id="close-admin-panel" class="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-colors">✕</button>
                    </div>
                </div>

                <!-- Admin Tab Header Bar -->
                <div class="bg-brand-card px-6 py-3 border-b border-white/10 flex items-center gap-2 overflow-x-auto text-xs font-mono shrink-0" id="admin-nav-tabs">
                    <button data-tab="comingSoon" class="admin-tab-btn px-4 py-2 rounded-xl text-slate-300 hover:text-white transition-all flex items-center gap-1.5 font-bold">
                        <span class="w-2 h-2 rounded-full ${csActive ? 'bg-amber-400 status-dot-pulse' : 'bg-emerald-400'}"></span>
                        COMING SOON BANNER
                    </button>
                    <button data-tab="hero" class="admin-tab-btn px-4 py-2 rounded-xl font-bold bg-brand-red text-white transition-all shadow-md">HERO BANNER & TEXT</button>
                    <button data-tab="showreel" class="admin-tab-btn px-4 py-2 rounded-xl text-slate-300 hover:text-white transition-all">SHOWREEL & VIDEO</button>
                    <button data-tab="projects" class="admin-tab-btn px-4 py-2 rounded-xl text-slate-300 hover:text-white transition-all">PROJECTS CMS</button>
                    <button data-tab="about" class="admin-tab-btn px-4 py-2 rounded-xl text-slate-300 hover:text-white transition-all">ABOUT & SERVICES</button>
                    <button data-tab="contact" class="admin-tab-btn px-4 py-2 rounded-xl text-slate-300 hover:text-white transition-all">CONTACT INFO</button>
                </div>

                <!-- Admin Dynamic Tab Body Container -->
                <div class="p-6 overflow-y-auto bg-brand-dark/95 flex-1" id="admin-tab-content"></div>

                <!-- Admin Footer Save Bar -->
                <div class="bg-brand-panel px-6 py-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 shrink-0">
                    <span class="text-xs font-mono text-slate-400">● Click save to apply all banner, image, video & text changes live.</span>
                    <button id="admin-save-all-btn" class="px-8 py-3 rounded-xl bg-gradient-to-r from-brand-red to-brand-red-dark text-white font-bold uppercase font-mono text-xs tracking-wider shadow-xl shadow-brand-red/50 hover:scale-105 transition-all border border-brand-red-glow">SAVE & PUBLISH CHANGES</button>
                </div>

            </div>
        </div>
        `;
    }

    function initAdminPanelEvents(currentData, onDataUpdate) {
        let workingData = JSON.parse(JSON.stringify(currentData));
        let activeTab = 'hero';

        const loginModal = document.getElementById('admin-login-modal');
        const loginForm = document.getElementById('admin-login-form');
        const loginError = document.getElementById('admin-login-error');
        const closeLoginBtn = document.getElementById('close-admin-login');

        const panelModal = document.getElementById('admin-panel-modal');
        const closeBtn = document.getElementById('close-admin-panel');
        const logoutBtn = document.getElementById('admin-logout-btn');
        const resetBtn = document.getElementById('admin-reset-btn');
        const saveAllBtn = document.getElementById('admin-save-all-btn');
        const tabContent = document.getElementById('admin-tab-content');

        // Login Form Handler
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const userVal = document.getElementById('admin-username-input').value.trim();
                const passVal = document.getElementById('admin-password-input').value.trim();

                if (userVal === ADMIN_CREDENTIALS.username && passVal === ADMIN_CREDENTIALS.password) {
                    sessionStorage.setItem('admin_authenticated', 'true');
                    if (loginError) loginError.classList.add('hidden');
                    if (loginModal) { loginModal.classList.add('hidden'); loginModal.classList.remove('flex'); }
                    if (panelModal) { panelModal.classList.remove('hidden'); panelModal.classList.add('flex'); }
                    document.getElementById('admin-username-input').value = '';
                    document.getElementById('admin-password-input').value = '';
                } else {
                    if (loginError) loginError.classList.remove('hidden');
                }
            });
        }

        if (closeLoginBtn && loginModal) {
            closeLoginBtn.addEventListener('click', () => {
                loginModal.classList.add('hidden');
                loginModal.classList.remove('flex');
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                sessionStorage.removeItem('admin_authenticated');
                if (panelModal) { panelModal.classList.add('hidden'); panelModal.classList.remove('flex'); }
                alert('Logged out of CMS Admin Dashboard.');
            });
        }

        if (!panelModal) return;

        // Helper to bind file uploads & update working data + live image preview
        const bindFileUpload = (inputId, previewId, onRead) => {
            const el = document.getElementById(inputId);
            if (!el) return;
            el.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (evt) => {
                        const dataUrl = evt.target.result;
                        const prev = document.getElementById(previewId);
                        if (prev) prev.src = dataUrl;
                        onRead(dataUrl);
                    };
                    reader.readAsDataURL(file);
                }
            });
        };

        const renderTab = () => {
            if (!tabContent) return;

            // Highlight Tab Buttons
            document.querySelectorAll('#admin-nav-tabs .admin-tab-btn').forEach(btn => {
                const tab = btn.getAttribute('data-tab');
                if (tab === activeTab) {
                    btn.className = 'admin-tab-btn px-4 py-2 rounded-xl font-bold bg-brand-red text-white transition-all shadow-md';
                } else {
                    btn.className = 'admin-tab-btn px-4 py-2 rounded-xl text-slate-300 hover:text-white transition-all';
                }
            });

            // TAB 0: COMING SOON / SITE VISIBILITY
            if (activeTab === 'comingSoon') {
                if (!workingData.settings) {
                    workingData.settings = JSON.parse(JSON.stringify(INITIAL_DATA.settings));
                }
                const isCs = workingData.settings.comingSoonEnabled === true;

                tabContent.innerHTML = `
                <div class="space-y-6 font-mono text-xs">
                    <!-- Master Toggle Card -->
                    <div class="p-6 rounded-2xl bg-brand-card border-2 ${isCs ? 'border-amber-500 shadow-xl shadow-amber-500/20' : 'border-emerald-500/60 shadow-xl shadow-emerald-500/10'} space-y-4">
                        <div class="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h3 class="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                    <span class="w-3 h-3 rounded-full ${isCs ? 'bg-amber-400 status-dot-pulse' : 'bg-emerald-400'}"></span>
                                    WEBSITE VISIBILITY: COMING SOON BANNER
                                </h3>
                                <p class="text-slate-400 text-xs mt-1">
                                    Turn this ON to hide the entire portfolio website behind a high-quality Spider-Man Coming Soon banner.
                                </p>
                            </div>
                            
                            <button id="toggle-coming-soon-btn" class="px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2 shadow-lg ${isCs ? 'bg-amber-500 text-black shadow-amber-500/40 hover:bg-amber-400 hover:scale-105' : 'bg-emerald-600 text-white shadow-emerald-600/40 hover:bg-emerald-500 hover:scale-105'}">
                                ${isCs ? '● COMING SOON IS ON (SITE HIDDEN)' : '○ COMING SOON IS OFF (SITE PUBLIC)'}
                            </button>
                        </div>

                        <div class="p-4 rounded-xl ${isCs ? 'bg-amber-950/50 border border-amber-500/50 text-amber-200' : 'bg-emerald-950/50 border border-emerald-500/50 text-emerald-200'}">
                            ${isCs 
                                ? '🔒 <strong>ACTIVE MODE:</strong> The website is currently LOCKED. External visitors only see the full-screen cinematic Coming Soon countdown banner. Only you as logged-in Admin can preview the portfolio.'
                                : '🌐 <strong>ACTIVE MODE:</strong> The website is LIVE and PUBLIC. All visitors can see your portfolio, showreel, and projects.'}
                        </div>
                    </div>

                    <!-- Banner Image Settings -->
                    <div class="p-6 rounded-2xl bg-brand-card border border-white/10 space-y-4">
                        <h3 class="text-sm font-bold text-brand-red uppercase tracking-wider flex items-center gap-2">
                            <i data-lucide="image" class="w-4 h-4"></i>
                            COMING SOON BANNER IMAGE
                        </h3>

                        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                            <div class="md:col-span-4 flex flex-col items-center gap-2">
                                <span class="text-[11px] text-slate-400">HERO BANNER PREVIEW</span>
                                <img id="admin-cs-banner-preview" src="${workingData.settings.comingSoonBanner || 'images/spiderman-banner.jpg'}" class="w-full h-36 object-cover rounded-xl border-2 border-brand-red/50 shadow-xl">
                            </div>
                            <div class="md:col-span-8 space-y-4">
                                <div>
                                    <label class="block text-slate-300 mb-1.5 font-bold">1. Upload Custom Image (JPG, PNG, WebP):</label>
                                    <input type="file" id="admin-cs-banner-file" accept="image/*" class="w-full p-2.5 rounded-xl bg-brand-dark border border-white/20 text-slate-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-brand-red file:text-white hover:file:bg-brand-red-dark cursor-pointer">
                                </div>
                                <div>
                                    <label class="block text-slate-300 mb-1.5 font-bold">2. Or Paste Image URL:</label>
                                    <input type="text" id="admin-cs-banner-url" value="${workingData.settings.comingSoonBanner || ''}" placeholder="images/spiderman-banner.jpg" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white focus:border-brand-red outline-none">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Text & Launch Date Settings -->
                    <div class="p-6 rounded-2xl bg-brand-card border border-white/10 space-y-4">
                        <h3 class="text-sm font-bold text-brand-red uppercase tracking-wider">COMING SOON HEADLINE & LAUNCH COUNTDOWN</h3>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-slate-400 mb-1 font-bold">Main Headline:</label>
                                <input type="text" id="admin-cs-title" value="${workingData.settings.comingSoonTitle || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white focus:border-brand-red outline-none">
                            </div>
                            <div>
                                <label class="block text-slate-400 mb-1 font-bold">Subtitle / Status:</label>
                                <input type="text" id="admin-cs-subtitle" value="${workingData.settings.comingSoonSubtitle || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white focus:border-brand-red outline-none">
                            </div>
                        </div>

                        <div>
                            <label class="block text-slate-400 mb-1 font-bold">Description Message:</label>
                            <textarea id="admin-cs-desc" rows="3" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white focus:border-brand-red outline-none">${workingData.settings.comingSoonDescription || ''}</textarea>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-slate-400 mb-1 font-bold">Target Premiere Date & Time (Countdown):</label>
                                <input type="datetime-local" id="admin-cs-date" value="${workingData.settings.comingSoonDate ? workingData.settings.comingSoonDate.substring(0, 16) : '2026-10-15T00:00'}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white focus:border-brand-red outline-none">
                            </div>
                            <div>
                                <label class="block text-slate-400 mb-1 font-bold">Contact Email:</label>
                                <input type="email" id="admin-cs-email" value="${workingData.settings.comingSoonNotifyEmail || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white focus:border-brand-red outline-none">
                            </div>
                        </div>
                    </div>
                </div>
                `;

                const toggleBtn = document.getElementById('toggle-coming-soon-btn');
                if (toggleBtn) {
                    toggleBtn.addEventListener('click', () => {
                        workingData.settings.comingSoonEnabled = !workingData.settings.comingSoonEnabled;
                        renderTab();
                    });
                }

                bindFileUpload('admin-cs-banner-file', 'admin-cs-banner-preview', (dataUrl) => {
                    workingData.settings.comingSoonBanner = dataUrl;
                    const urlIn = document.getElementById('admin-cs-banner-url');
                    if (urlIn) urlIn.value = dataUrl;
                });

                const csUrlIn = document.getElementById('admin-cs-banner-url');
                if (csUrlIn) {
                    csUrlIn.addEventListener('input', (e) => {
                        workingData.settings.comingSoonBanner = e.target.value;
                        const prev = document.getElementById('admin-cs-banner-preview');
                        if (prev) prev.src = e.target.value;
                    });
                }

                const csTitleIn = document.getElementById('admin-cs-title');
                if (csTitleIn) csTitleIn.addEventListener('input', (e) => { workingData.settings.comingSoonTitle = e.target.value; });

                const csSubIn = document.getElementById('admin-cs-subtitle');
                if (csSubIn) csSubIn.addEventListener('input', (e) => { workingData.settings.comingSoonSubtitle = e.target.value; });

                const csDescIn = document.getElementById('admin-cs-desc');
                if (csDescIn) csDescIn.addEventListener('input', (e) => { workingData.settings.comingSoonDescription = e.target.value; });

                const csDateIn = document.getElementById('admin-cs-date');
                if (csDateIn) csDateIn.addEventListener('change', (e) => { workingData.settings.comingSoonDate = e.target.value + ':00'; });

                const csEmailIn = document.getElementById('admin-cs-email');
                if (csEmailIn) csEmailIn.addEventListener('input', (e) => { workingData.settings.comingSoonNotifyEmail = e.target.value; });
            }

            // TAB 1: HERO & BANNER IMAGE
            else if (activeTab === 'hero') {
                tabContent.innerHTML = `
                <div class="space-y-6 font-mono text-xs">
                    <div class="p-5 rounded-2xl bg-brand-card border border-white/10 space-y-4">
                        <h3 class="text-sm font-bold text-brand-red uppercase tracking-wider flex items-center gap-2">
                            <i data-lucide="image" class="w-4 h-4"></i>
                            CHANGE LANDING PAGE SPIDER-MAN BANNER IMAGE
                        </h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                            <div class="md:col-span-4 flex flex-col items-center gap-2">
                                <span class="text-[11px] text-slate-400">BANNER PREVIEW</span>
                                <img id="hero-banner-preview" src="${workingData.hero.bannerImage || 'images/spiderman-banner.jpg'}" class="w-full h-36 object-cover rounded-xl border-2 border-brand-red/50 shadow-xl">
                            </div>
                            <div class="md:col-span-8 space-y-4">
                                <div>
                                    <label class="block text-slate-300 mb-1.5 font-bold">1. Upload Custom Image File (JPG, PNG, WebP):</label>
                                    <input type="file" id="hero-banner-file" accept="image/*" class="w-full p-2.5 rounded-xl bg-brand-dark border border-white/20 text-slate-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-brand-red file:text-white hover:file:bg-brand-red-dark cursor-pointer">
                                </div>

                                <div>
                                    <label class="block text-slate-300 mb-1.5 font-bold">2. Or Paste Direct Image URL:</label>
                                    <input type="text" id="hero-banner-url" value="${workingData.hero.bannerImage || ''}" placeholder="https://example.com/banner.jpg" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white focus:border-brand-red outline-none">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-5 rounded-2xl bg-brand-card border border-white/10 space-y-4">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider">HERO TEXT CONTENT UPDATE</h3>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-slate-400 mb-1">Badge Text:</label>
                                <input type="text" id="hero-badge" value="${workingData.hero.badge || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                            </div>
                            <div>
                                <label class="block text-slate-400 mb-1">Subtitle:</label>
                                <input type="text" id="hero-subtitle" value="${workingData.hero.subtitle || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                            </div>
                        </div>

                        <div>
                            <label class="block text-slate-400 mb-1">Description Paragraph:</label>
                            <textarea id="hero-desc" rows="3" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">${workingData.hero.description || ''}</textarea>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-slate-400 mb-1">Primary CTA Button Text:</label>
                                <input type="text" id="hero-cta1" value="${workingData.hero.primaryCta || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                            </div>
                            <div>
                                <label class="block text-slate-400 mb-1">Secondary CTA Button Text:</label>
                                <input type="text" id="hero-cta2" value="${workingData.hero.secondaryCta || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                            </div>
                        </div>
                    </div>
                </div>
                `;

                // Hero Banner File Upload Event Listener
                bindFileUpload('hero-banner-file', 'hero-banner-preview', (dataUrl) => {
                    workingData.hero.bannerImage = dataUrl;
                    const urlInput = document.getElementById('hero-banner-url');
                    if (urlInput) urlInput.value = dataUrl;
                });

                // Hero Banner URL Input Listener
                const heroUrlInput = document.getElementById('hero-banner-url');
                if (heroUrlInput) {
                    heroUrlInput.addEventListener('input', (e) => {
                        workingData.hero.bannerImage = e.target.value;
                        const prev = document.getElementById('hero-banner-preview');
                        if (prev) prev.src = e.target.value;
                    });
                }

                // Text Content Input Listeners
                ['hero-badge', 'hero-subtitle', 'hero-desc', 'hero-cta1', 'hero-cta2'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) {
                        el.addEventListener('input', () => {
                            workingData.hero.badge = document.getElementById('hero-badge').value;
                            workingData.hero.subtitle = document.getElementById('hero-subtitle').value;
                            workingData.hero.description = document.getElementById('hero-desc').value;
                            workingData.hero.primaryCta = document.getElementById('hero-cta1').value;
                            workingData.hero.secondaryCta = document.getElementById('hero-cta2').value;
                        });
                    }
                });
            }

            // TAB 2: SHOWREEL & VIDEO PASTE / LIVE VIDEO UPLOAD
            else if (activeTab === 'showreel') {
                tabContent.innerHTML = `
                <div class="space-y-6 font-mono text-xs">
                    <div class="p-5 rounded-2xl bg-brand-card border border-white/10 space-y-4">
                        <h3 class="text-sm font-bold text-brand-blue uppercase tracking-wider flex items-center gap-2">
                            <i data-lucide="video" class="w-4 h-4"></i>
                            SHOWREEL & LIVE VIDEO UPLOAD OPTIONS
                        </h3>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-slate-300 mb-1 font-bold">Showreel Title:</label>
                                <input type="text" id="showreel-title" value="${workingData.showreel.title || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                            </div>
                            <div>
                                <label class="block text-slate-300 mb-1 font-bold">Showreel Subtitle:</label>
                                <input type="text" id="showreel-subtitle" value="${workingData.showreel.subtitle || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                            </div>
                        </div>

                        <div>
                            <label class="block text-slate-300 mb-1.5 font-bold">1. Paste Video URL (YouTube, Vimeo, MP4 link):</label>
                            <input type="text" id="showreel-videourl" value="${workingData.showreel.videoUrl || ''}" placeholder="https://www.youtube.com/embed/... or https://domain.com/video.mp4" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white focus:border-brand-blue outline-none">
                        </div>

                        <div>
                            <label class="block text-slate-300 mb-1.5 font-bold">2. Or Live Upload Local Video File (MP4, WebM):</label>
                            <input type="file" id="showreel-videofile" accept="video/*" class="w-full p-2.5 rounded-xl bg-brand-dark border border-white/20 text-slate-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-brand-blue file:text-black hover:file:bg-cyan-400 cursor-pointer">
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                            <div class="md:col-span-4 flex flex-col items-center gap-2">
                                <span class="text-[11px] text-slate-400">SHOWREEL THUMBNAIL PREVIEW</span>
                                <img id="showreel-thumb-preview" src="${workingData.showreel.thumbnail || ''}" class="w-full h-32 object-cover rounded-xl border-2 border-brand-blue/50 shadow-xl">
                            </div>
                            <div class="md:col-span-8 space-y-3">
                                <div>
                                    <label class="block text-slate-300 mb-1 font-bold">Upload Thumbnail Image File:</label>
                                    <input type="file" id="showreel-thumb-file" accept="image/*" class="w-full p-2.5 rounded-xl bg-brand-dark border border-white/20 text-slate-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-brand-blue file:text-black cursor-pointer">
                                </div>
                                <div>
                                    <label class="block text-slate-300 mb-1 font-bold">Or Thumbnail Image URL:</label>
                                    <input type="text" id="showreel-thumb-url" value="${workingData.showreel.thumbnail || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                                </div>
                            </div>
                        </div>

                        <div>
                            <label class="block text-slate-400 mb-1">Showreel Description:</label>
                            <textarea id="showreel-desc" rows="3" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">${workingData.showreel.description || ''}</textarea>
                        </div>
                    </div>
                </div>
                `;

                // Showreel Video File Upload Listener
                bindFileUpload('showreel-videofile', null, (videoDataUrl) => {
                    workingData.showreel.videoUrl = videoDataUrl;
                    const urlInput = document.getElementById('showreel-videourl');
                    if (urlInput) urlInput.value = videoDataUrl;
                });

                // Showreel Thumbnail File Upload Listener
                bindFileUpload('showreel-thumb-file', 'showreel-thumb-preview', (dataUrl) => {
                    workingData.showreel.thumbnail = dataUrl;
                    const urlInput = document.getElementById('showreel-thumb-url');
                    if (urlInput) urlInput.value = dataUrl;
                });

                // Text & URL inputs
                ['showreel-title', 'showreel-subtitle', 'showreel-videourl', 'showreel-thumb-url', 'showreel-desc'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) {
                        el.addEventListener('input', () => {
                            workingData.showreel.title = document.getElementById('showreel-title').value;
                            workingData.showreel.subtitle = document.getElementById('showreel-subtitle').value;
                            workingData.showreel.videoUrl = document.getElementById('showreel-videourl').value;
                            workingData.showreel.thumbnail = document.getElementById('showreel-thumb-url').value;
                            workingData.showreel.description = document.getElementById('showreel-desc').value;
                            const prev = document.getElementById('showreel-thumb-preview');
                            if (prev) prev.src = workingData.showreel.thumbnail;
                        });
                    }
                });
            }

            // TAB 3: PROJECTS CMS MANAGEMENT
            else if (activeTab === 'projects') {
                tabContent.innerHTML = `
                <div class="space-y-6 font-mono text-xs">
                    <div class="flex items-center justify-between">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider">PROJECTS PORTFOLIO MANAGER (${workingData.projects.length} PROJECTS)</h3>
                        <button id="add-new-project-btn" class="px-4 py-2 rounded-xl bg-brand-red text-white font-bold uppercase hover:bg-brand-red-dark transition-colors flex items-center gap-2">
                            <i data-lucide="plus-circle" class="w-4 h-4"></i>
                            ADD NEW PROJECT
                        </button>
                    </div>

                    <div class="space-y-4">
                        ${workingData.projects.map((p, idx) => `
                            <div class="p-5 rounded-2xl bg-brand-card border border-white/10 space-y-4">
                                <div class="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-3">
                                    <div class="flex items-center gap-4">
                                        <img src="${p.thumbnail}" class="w-16 h-12 object-cover rounded-lg border border-white/20" id="proj-preview-${p.id}">
                                        <div>
                                            <h4 class="font-bold text-white text-sm">${p.title}</h4>
                                            <span class="text-brand-red font-bold">${p.category}</span> • <span class="text-slate-400">${p.client || 'Client'} (${p.year || '2026'})</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <button data-toggle-proj="${p.id}" class="px-3 py-1.5 rounded-lg text-xs font-bold ${p.published !== false ? 'bg-emerald-950 border border-emerald-500 text-emerald-400' : 'bg-slate-800 border border-slate-600 text-slate-400'}">
                                            ${p.published !== false ? '● PUBLISHED' : '○ HIDDEN'}
                                        </button>
                                        <button data-delete-proj="${p.id}" class="px-3 py-1.5 rounded-lg bg-red-950/80 border border-red-500/60 hover:bg-red-900 text-red-300 font-bold transition-colors">DELETE</button>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div>
                                        <label class="block text-slate-400 mb-1">Project Title:</label>
                                        <input type="text" data-proj-field="title" data-proj-id="${p.id}" value="${p.title}" class="w-full p-2.5 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-slate-400 mb-1">Category:</label>
                                        <input type="text" data-proj-field="category" data-proj-id="${p.id}" value="${p.category}" class="w-full p-2.5 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-slate-400 mb-1">Video URL / Embed:</label>
                                        <input type="text" data-proj-field="videoUrl" data-proj-id="${p.id}" value="${p.videoUrl || ''}" class="w-full p-2.5 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-slate-400 mb-1">Upload Thumbnail Image:</label>
                                        <input type="file" accept="image/*" data-proj-imgfile="${p.id}" class="w-full p-2 rounded-xl bg-brand-dark border border-white/20 text-slate-300 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-brand-red file:text-white file:text-xs cursor-pointer">
                                    </div>
                                    <div>
                                        <label class="block text-slate-400 mb-1">Or Thumbnail Image URL:</label>
                                        <input type="text" data-proj-field="thumbnail" data-proj-id="${p.id}" value="${p.thumbnail}" class="w-full p-2.5 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                `;

                // Add New Project Event
                const addProjBtn = document.getElementById('add-new-project-btn');
                if (addProjBtn) {
                    addProjBtn.addEventListener('click', () => {
                        const newId = 'project-' + Date.now();
                        workingData.projects.unshift({
                            id: newId,
                            title: 'NEW CINEMATIC EDIT',
                            category: 'CINEMATIC',
                            shortDesc: 'High retention video edit crafted with custom color grade and sound design.',
                            client: 'New Client',
                            year: '2026',
                            role: 'Lead Video Editor',
                            software: ['Premiere Pro', 'After Effects'],
                            thumbnail: 'images/spiderman-banner.jpg',
                            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
                            beforeImage: 'images/spiderman-banner.jpg',
                            afterImage: 'images/spiderman-banner.jpg',
                            fullDesc: 'Description of the creative editing process.',
                            published: true
                        });
                        renderTab();
                    });
                }

                // Project Field Listeners
                tabContent.querySelectorAll('input[data-proj-field]').forEach(input => {
                    input.addEventListener('input', (e) => {
                        const id = e.target.getAttribute('data-proj-id');
                        const field = e.target.getAttribute('data-proj-field');
                        const proj = workingData.projects.find(p => p.id === id);
                        if (proj) {
                            proj[field] = e.target.value;
                            if (field === 'thumbnail') {
                                const prev = document.getElementById(`proj-preview-${id}`);
                                if (prev) prev.src = e.target.value;
                            }
                        }
                    });
                });

                // Project File Upload Listeners
                tabContent.querySelectorAll('input[data-proj-imgfile]').forEach(fileInput => {
                    fileInput.addEventListener('change', (e) => {
                        const id = e.target.getAttribute('data-proj-imgfile');
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = (evt) => {
                                const dataUrl = evt.target.result;
                                const proj = workingData.projects.find(p => p.id === id);
                                if (proj) {
                                    proj.thumbnail = dataUrl;
                                    const prev = document.getElementById(`proj-preview-${id}`);
                                    if (prev) prev.src = dataUrl;
                                }
                            };
                            reader.readAsDataURL(file);
                        }
                    });
                });

                // Project Publish Toggles
                tabContent.querySelectorAll('button[data-toggle-proj]').forEach(b => {
                    b.addEventListener('click', () => {
                        const id = b.getAttribute('data-toggle-proj');
                        const proj = workingData.projects.find(p => p.id === id);
                        if (proj) {
                            proj.published = proj.published === false ? true : false;
                            renderTab();
                        }
                    });
                });

                // Project Delete Buttons
                tabContent.querySelectorAll('button[data-delete-proj]').forEach(b => {
                    b.addEventListener('click', () => {
                        const id = b.getAttribute('data-delete-proj');
                        if (confirm('Delete this project from portfolio?')) {
                            workingData.projects = workingData.projects.filter(p => p.id !== id);
                            renderTab();
                        }
                    });
                });
            }

            // TAB 4: ABOUT & SERVICES
            else if (activeTab === 'about') {
                tabContent.innerHTML = `
                <div class="space-y-6 font-mono text-xs">
                    <div class="p-5 rounded-2xl bg-brand-card border border-white/10 space-y-4">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider">ABOUT & BIOGRAPHY CONTENT</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-slate-400 mb-1">Heading:</label>
                                <input type="text" id="about-heading" value="${workingData.about.heading || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                            </div>
                            <div>
                                <label class="block text-slate-400 mb-1">Subheading:</label>
                                <input type="text" id="about-subheading" value="${workingData.about.subheading || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                            </div>
                        </div>

                        <div>
                            <label class="block text-slate-400 mb-1">Bio Paragraph 1:</label>
                            <textarea id="about-bio1" rows="3" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">${workingData.about.bioParagraph1 || ''}</textarea>
                        </div>
                        <div>
                            <label class="block text-slate-400 mb-1">Bio Paragraph 2:</label>
                            <textarea id="about-bio2" rows="3" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">${workingData.about.bioParagraph2 || ''}</textarea>
                        </div>
                    </div>
                </div>
                `;

                ['about-heading', 'about-subheading', 'about-bio1', 'about-bio2'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) {
                        el.addEventListener('input', () => {
                            workingData.about.heading = document.getElementById('about-heading').value;
                            workingData.about.subheading = document.getElementById('about-subheading').value;
                            workingData.about.bioParagraph1 = document.getElementById('about-bio1').value;
                            workingData.about.bioParagraph2 = document.getElementById('about-bio2').value;
                        });
                    }
                });
            }

            // TAB 5: CONTACT & SOCIAL LINKS
            else if (activeTab === 'contact') {
                tabContent.innerHTML = `
                <div class="space-y-6 font-mono text-xs">
                    <div class="p-5 rounded-2xl bg-brand-card border border-white/10 space-y-4">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider">CONTACT INFORMATION & SOCIALS</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-slate-400 mb-1">Contact Headline:</label>
                                <input type="text" id="contact-headline" value="${workingData.contact.headline || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                            </div>
                            <div>
                                <label class="block text-slate-400 mb-1">Contact Email:</label>
                                <input type="email" id="contact-email" value="${workingData.contact.email || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                            </div>
                        </div>

                        <div>
                            <label class="block text-slate-400 mb-1">Location:</label>
                            <input type="text" id="contact-location" value="${workingData.contact.location || ''}" class="w-full p-3 rounded-xl bg-brand-dark border border-white/20 text-white outline-none">
                        </div>
                    </div>
                </div>
                `;

                ['contact-headline', 'contact-email', 'contact-location'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) {
                        el.addEventListener('input', () => {
                            workingData.contact.headline = document.getElementById('contact-headline').value;
                            workingData.contact.email = document.getElementById('contact-email').value;
                            workingData.contact.location = document.getElementById('contact-location').value;
                        });
                    }
                });
            }

            if (window.lucide) window.lucide.createIcons();
        };

        // Tab Navigation Click Listeners
        const navTabs = document.getElementById('admin-nav-tabs');
        if (navTabs) {
            navTabs.querySelectorAll('.admin-tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    activeTab = btn.getAttribute('data-tab');
                    renderTab();
                });
            });
        }

        // Close Admin Modal
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                panelModal.classList.add('hidden');
                panelModal.classList.remove('flex');
            });
        }

        // Save & Publish All Changes
        if (saveAllBtn) {
            saveAllBtn.addEventListener('click', () => {
                savePortfolioData(workingData);
                onDataUpdate(workingData);
                alert('CMS changes published successfully!');
                panelModal.classList.add('hidden');
                panelModal.classList.remove('flex');
            });
        }

        // Reset Portfolio Defaults
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('Reset portfolio to initial defaults?')) {
                    const fresh = resetPortfolioData();
                    workingData = JSON.parse(JSON.stringify(fresh));
                    onDataUpdate(fresh);
                    renderTab();
                }
            });
        }

        renderTab();
    }

    function openAdminPanel() {
        const isAuth = sessionStorage.getItem('admin_authenticated') === 'true';
        if (isAuth) {
            const panelModal = document.getElementById('admin-panel-modal');
            if (panelModal) { panelModal.classList.remove('hidden'); panelModal.classList.add('flex'); }
        } else {
            const loginModal = document.getElementById('admin-login-modal');
            if (loginModal) { loginModal.classList.remove('hidden'); loginModal.classList.add('flex'); }
        }
    }

    // 13. MAIN APP RENDERER
    function renderApp() {
        const appRoot = document.getElementById('app');
        if (!appRoot) return;

        const data = getPortfolioData();
        const isAdmin = sessionStorage.getItem('admin_authenticated') === 'true';
        const isComingSoon = data.settings && data.settings.comingSoonEnabled === true;

        if (isComingSoon && !isAdmin) {
            // Visitors see ONLY the full-screen cinematic Coming Soon Spider-Man banner
            appRoot.innerHTML = `
                ${renderComingSoonBanner(data.settings, data.hero)}
                ${renderAdminPanel(data.settings)}
            `;

            if (window.lucide) window.lucide.createIcons();

            new CityWebCanvas('city-web-canvas');
            new CustomCursorController();

            initComingSoonEvents(data.settings, () => openAdminPanel());
            initAdminPanelEvents(data, () => renderApp());
            return;
        }

        // Public or Admin viewing the website
        appRoot.innerHTML = `
            ${isComingSoon && isAdmin ? `
                <div class="admin-preview-bar">
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-white status-dot-pulse"></span>
                        <span>ADMIN PREVIEW MODE — COMING SOON BANNER IS ACTIVE (VISITORS CANNOT SEE SITE)</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <button id="admin-bar-open-cms" class="px-3 py-1 rounded-lg bg-brand-dark text-white font-mono text-[10px] hover:bg-black transition-colors font-bold">OPEN CMS</button>
                        <button id="admin-bar-disable-cs" class="px-3 py-1 rounded-lg bg-white text-brand-dark font-mono text-[10px] hover:bg-slate-100 transition-colors font-bold">TURN OFF COMING SOON</button>
                    </div>
                </div>
            ` : ''}
            <div class="${isComingSoon && isAdmin ? 'pt-8' : ''}">
                ${renderNavbar()}
                <main>
                    ${renderHero(data.hero)}
                    ${renderAbout(data.about)}
                    ${renderShowreel(data.showreel)}
                    ${renderPortfolio(data.projects)}
                    ${renderServices(data.services)}
                    ${renderSoftware(data.software)}
                    ${renderProcess(data.process)}
                    ${renderTestimonials(data.testimonials)}
                    ${renderContact(data.contact)}
                </main>
                ${renderFooter()}
            </div>
            ${renderAdminPanel(data.settings)}
        `;

        if (window.lucide) window.lucide.createIcons();

        new CityWebCanvas('city-web-canvas');
        new CustomCursorController();

        if (isComingSoon && isAdmin) {
            const openCmsBtn = document.getElementById('admin-bar-open-cms');
            if (openCmsBtn) openCmsBtn.addEventListener('click', openAdminPanel);

            const disableCsBtn = document.getElementById('admin-bar-disable-cs');
            if (disableCsBtn) disableCsBtn.addEventListener('click', () => {
                data.settings.comingSoonEnabled = false;
                savePortfolioData(data);
                renderApp();
            });
        }

        initNavbarEvents(() => openAdminPanel());
        initHeroSlider();
        initShowreelEvents(data.showreel);
        initPortfolioEvents(data.projects);
        initContactEvents();
        initAdminPanelEvents(data, () => renderApp());
    }

    // Global Admin Keyboard Shortcut [Ctrl + Shift + A]
    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
            e.preventDefault();
            openAdminPanel();
        }
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderApp);
    } else {
        renderApp();
    }

})();

