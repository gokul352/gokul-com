// Initial Portfolio Data Store & LocalStorage Persistence Manager

const STORAGE_KEY = 'aj_edits_portfolio_data_v1';

export const INITIAL_DATA = {
    hero: {
        headline: "EDITING THAT HITS DIFFERENT.",
        subtitle: "VIDEO EDITOR • MOTION DESIGN • STORYTELLING",
        description: "I transform raw footage into cinematic stories that capture attention, build emotion, and make brands impossible to ignore.",
        primaryCta: "VIEW MY WORK",
        secondaryCta: "LET'S WORK TOGETHER",
        badge: "AVAILABLE FOR FREELANCE & COMMERCIAL PROJECTS"
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0", // Sample video embed
        videoUrlDirect: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", // High quality film trailer sample
        thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80",
        description: "Featuring selected commercial edits, music videos, color grading transformations, and motion graphics shots created over the past 3 years."
    },
    projects: [
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
            beforeImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80&sat=-80", // Desaturated raw
            afterImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80", // Full grade
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
        },
        {
            id: "raw-to-cinema",
            title: "RAW TO CINEMA",
            category: "CINEMATIC",
            shortDesc: "Color & Editing Showcase demonstrating before/after footage transformations.",
            client: "Personal Project",
            year: "2026",
            role: "Director & Colorist",
            software: ["DaVinci Resolve", "Premiere Pro"],
            thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoybacks.mp4",
            beforeImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80&sat=-100",
            afterImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
            fullDesc: "A masterclass reel showing flat Arri Alexa & Sony S-Log3 footage converted into rich filmic visuals with custom LUT development and skin tone preservation.",
            creativeProcess: [
                "Color space transformation from S-Log3 to Rec.709.",
                "Custom split-toning using teal shadow and warm highlights.",
                "Halation and film grain pass."
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
    }
};

export function getPortfolioData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error("Failed to load portfolio data from localStorage", e);
    }
    return INITIAL_DATA;
}

export function savePortfolioData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        window.dispatchEvent(new CustomEvent('portfolioDataChanged', { detail: data }));
        return true;
    } catch (e) {
        console.error("Failed to save portfolio data", e);
        return false;
    }
}

export function resetPortfolioData() {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('portfolioDataChanged', { detail: INITIAL_DATA }));
    return INITIAL_DATA;
}
