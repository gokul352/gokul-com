/**
 * ============================================================================
 * 🎨 GRAPHIC DESIGN PORTFOLIO 2026 - DATA CONFIGURATION
 * ============================================================================
 * Model based on Behance Portfolio 2026 (Raagav Sundar)
 * 
 * 💡 HOW TO CUSTOMIZE ANYTHING IN THIS PORTFOLIO:
 * ----------------------------------------------------------------------------
 * 1. EDIT IN BROWSER: Open the website and click the "⚙️ Customize" button in
 *    the top navigation. You can edit text, upload photos from your computer,
 *    and save directly to your browser!
 * 
 * 2. EDIT THIS FILE: You can edit this file directly in any text editor:
 *    - To change your name/bio: Edit the `profile` object below.
 *    - To change any slide image: Replace the `image` URL with your own link
 *      OR put your image in the `images/` folder (e.g. "images/my-slide.jpg").
 *    - To add or remove slides: Edit the `slides` array below.
 * ============================================================================
 */

const DEFAULT_PORTFOLIO_DATA = {
  // --------------------------------------------------------------------------
  // 1. PROFILE & PERSONAL DETAILS
  // --------------------------------------------------------------------------
  profile: {
    name: "RAAGAV SUNDAR",
    role: "Graphic Designer & Art Director",
    year: "2026",
    tagline: "Shaping visual culture through brand systems, kinetic typography & high-impact art direction.",
    statusBadge: "Available for Commissions & Remote Roles Worldwide",
    location: "Global / Remote",
    email: "raagav.design@portfolio.com",
    phone: "+1 (555) 019-2026",
    behance: "https://www.behance.net/gallery/252076827/GRAPHIC-DESIGN-PORTFOLIO-2026",
    dribbble: "https://dribbble.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    stats: [
      { label: "Slides & Artworks", value: "66+" },
      { label: "Curated Case Studies", value: "06" },
      { label: "Years Experience", value: "05+" },
      { label: "Design Recognition", value: "18 Awards" }
    ],
    disciplines: [
      "Brand Identity",
      "Motion Graphics",
      "Editorial & Posters",
      "Packaging Design",
      "3D & Spatial Visuals",
      "Creative Direction",
      "Social Media Campaigns"
    ]
  },

  // --------------------------------------------------------------------------
  // 2. DESIGN PHILOSOPHY & ABOUT
  // --------------------------------------------------------------------------
  about: {
    headline: "Transforming ambitious ideas into definitive visual identities.",
    bio: [
      "I am an art director and multi-disciplinary graphic designer focused on building comprehensive visual languages. My work bridges experimental aesthetics with commercial precision — creating identities that feel iconic, forward-thinking, and deeply memorable.",
      "With expertise spanning brand systems, kinetic typography, motion graphics, and luxury packaging, I partner with forward-looking brands, tech founders, and cultural institutions globally."
    ],
    principles: [
      {
        number: "01",
        title: "System-First Architecture",
        desc: "A logo is only the beginning. I design scalable modular identity systems that expand effortlessly across screen, print, 3D, and environmental spaces."
      },
      {
        number: "02",
        title: "Kinetic Storytelling",
        desc: "Static visuals are elevated with motion. Rhythmic timing, micro-animations, and fluid physics make modern graphic design feel truly alive."
      },
      {
        number: "03",
        title: "Editorial Precision",
        desc: "Inspired by International Typographic Style (Swiss design), every layout is governed by deliberate grid structures, proportion, and tension."
      },
      {
        number: "04",
        title: "Tactile Realism",
        desc: "Packaging, merchandise, and collateral are visualized with physically accurate materiality, foil stamping, emboss textures, and sustainable substrates."
      }
    ],
    tools: [
      { name: "Adobe Illustrator", category: "Vector & Logo Design", level: "Expert" },
      { name: "Adobe Photoshop", category: "Retouching & Compositing", level: "Expert" },
      { name: "Adobe After Effects", category: "Motion Graphics & 2D Animation", level: "Expert" },
      { name: "Adobe Premiere Pro", category: "Video Editing & Color Grading", level: "Advanced" },
      { name: "Adobe InDesign", category: "Editorial & Publication", level: "Expert" },
      { name: "Figma", category: "Design Systems & Prototyping", level: "Advanced" },
      { name: "Cinema 4D / Blender", category: "3D Asset Modeling & Renders", level: "Intermediate" },
      { name: "Glyphs / FontLab", category: "Custom Type Design", level: "Intermediate" }
    ]
  },

  // --------------------------------------------------------------------------
  // 3. FEATURED CASE STUDIES OVERVIEW
  // --------------------------------------------------------------------------
  caseStudies: [
    {
      id: "cs-1",
      number: "01",
      title: "AETHER BRAND IDENTITY",
      client: "Aether Systems Inc.",
      category: "Branding",
      year: "2026",
      coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/753c5a252076827.6a588cce43a1d.gif",
      description: "Complete visual identity, generative geometric monogram, kinetic typography and stationery suite for an architectural technology laboratory.",
      deliverables: ["Brand Strategy", "Logomark & Wordmark", "Motion System", "Typography Manual", "Print Collateral"],
      slideRange: [3, 12]
    },
    {
      id: "cs-2",
      number: "02",
      title: "LUMEN TACTILE PACKAGING",
      client: "Lumen Botanicals & Goods",
      category: "Packaging",
      year: "2026",
      coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/904d89252076827.6a576a8579dda.png",
      description: "Sustainable luxury packaging architecture, foil-embossed unboxing systems, cosmetic bottles, and editorial studio apparel.",
      deliverables: ["Structural Packaging", "Bottle & Label Engineering", "Unboxing Suite", "Brand Merchandise", "Lookbook Design"],
      slideRange: [13, 18]
    },
    {
      id: "cs-3",
      number: "03",
      title: "SYNAPSE MOTION & 3D REALM",
      client: "Synapse Sound Festival",
      category: "Motion Graphics",
      year: "2026",
      coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e7fd86252076827.6a5df6a68931c.gif",
      description: "Immersive audio-visual motion identities, holographic UI HUDs, broadcast title packages, and large-format digital stage graphics.",
      deliverables: ["3D Kinetic Loops", "Stage Visuals (4K)", "Broadcast Package", "Audio Reactive Animations", "Digital Billboards"],
      slideRange: [19, 25]
    },
    {
      id: "cs-4",
      number: "04",
      title: "VORTEX EXPERIMENTAL POSTERS",
      client: "Vortex Typographic Biennial",
      category: "Editorial",
      year: "2026",
      coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c19184252076827.6a59e3ca059b5.gif",
      description: "A series of 12 brutalist Swiss exhibition posters exploring kinetic grid distortions, acid typography, and risograph texture layering.",
      deliverables: ["Limited Edition Screenprints", "Dynamic AR Filters", "Street Poster System", "Exhibition Catalogue", "Typographic Specimen"],
      slideRange: [26, 36]
    },
    {
      id: "cs-5",
      number: "05",
      title: "KINETIC BROADCAST & VIDEO EDIT",
      client: "Kinetic Media Collective",
      category: "Motion Graphics",
      year: "2026",
      coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8cbd65252076827.6a5e542bd85d9.gif",
      description: "High-octane commercial video editing, sound design synchronization, dynamic typography lower thirds, and teaser trailers.",
      deliverables: ["Motion Graphics Reel", "Teaser Trailers (16:9 & 9:16)", "Color Grading LUTs", "Sound Sync Cuts", "Credits Design"],
      slideRange: [37, 47]
    },
    {
      id: "cs-6",
      number: "06",
      title: "OMNI SOCIAL MEDIA ECOSYSTEM",
      client: "Omni Brand Campaign",
      category: "Social Media",
      year: "2026",
      coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a21c5c252076827.6a58b413b1b43.gif",
      description: "Integrated multi-platform campaign asset rollout featuring animated Instagram carousels, responsive storytelling tiles, and digital branding.",
      deliverables: ["Social Identity Framework", "Animated Carousel Kits", "Story Motion Templates", "Campaign Guidelines", "Engagement Assets"],
      slideRange: [48, 55]
    }
  ],

  // --------------------------------------------------------------------------
  // 4. ALL 66 PRESENTATION SLIDES (DIRECT FROM BEHANCE PORTFOLIO 2026)
  // --------------------------------------------------------------------------
  // TIP: You can replace ANY 'image' URL below with your own web link
  // or a local path like 'images/my-slide-1.jpg'!
  // --------------------------------------------------------------------------
  slides: [
    {
      id: 1,
      number: "01",
      title: "Hero Presentation Cover 2026",
      category: "Branding",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/abda80252076827.6a520c2e6807d.gif",
      caption: "Graphic Design Portfolio 2026 — Title Slide and Art Direction Showcase"
    },
    {
      id: 2,
      number: "02",
      title: "Portfolio Index & Curatorial Intro",
      category: "Editorial",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/35b2c6252076827.6a4638d2e6df8.gif",
      caption: "Table of Contents, Discipline Breakdown & Curated Project Manifest"
    },
    {
      id: 3,
      number: "03",
      title: "Project 01 Title — Visual Identity System",
      category: "Branding",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/753c5a252076827.6a588cce43a1d.gif",
      caption: "Brand Identity Genesis — Logomark Formulation and Dynamic Grid"
    },
    {
      id: 4,
      number: "04",
      title: "Monogram Geometry & Construction Grid",
      category: "Branding",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/590da3252076827.6a5e52dd35779.png",
      caption: "Mathematical proportions, Bézier curvature arcs, and modular lockup"
    },
    {
      id: 5,
      number: "05",
      title: "Kinetic Logomark Transformation",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/254e3d252076827.6a4f80d8255e1.gif",
      caption: "Continuous rotational loop & responsive vector morphing sequence"
    },
    {
      id: 6,
      number: "06",
      title: "Typographic Architecture & Specimen",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cdf0bf252076827.6a5e4d2756ee0.png",
      caption: "Editorial font pairing hierarchy, character tracking, and scale rules"
    },
    {
      id: 7,
      number: "07",
      title: "Fluid Motion Identity System",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/73bd9e252076827.6a5a0bc66d6fb.gif",
      caption: "Organic physics-driven brand motion and temporal rhythm testing"
    },
    {
      id: 8,
      number: "08",
      title: "Brand Collateral & Executive Stationery",
      category: "Branding",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e6e50e252076827.6a4f7175ed62e.gif",
      caption: "Business cards, foil details, custom letterheads, and tactile textures"
    },
    {
      id: 9,
      number: "09",
      title: "Digital Ecosystem Assets In-Motion",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c2830b252076827.6a4f7175ed196.gif",
      caption: "Dynamic digital banners and responsive mobile app splash sequences"
    },
    {
      id: 10,
      number: "10",
      title: "Editorial Campaign Poster Concept",
      category: "Editorial",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d846c9252076827.6a4f80d825218.gif",
      caption: "Large-format screenprint concept exploring micro and macro hierarchy"
    },
    {
      id: 11,
      number: "11",
      title: "Chromatic Palette & Contrast Values",
      category: "Branding",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b23507252076827.6a5e4d27568f1.png",
      caption: "Pantone spot color codes, HEX values, and dark mode luminance testing"
    },
    {
      id: 12,
      number: "12",
      title: "Kinetic Typography Sequence",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0553ab252076827.6a5a0bc66e45a.gif",
      caption: "High-speed kinetic text ticker and variable font weight animation"
    },
    {
      id: 13,
      number: "13",
      title: "Project 02 — Minimalist Bottle Packaging",
      category: "Packaging",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/904d89252076827.6a576a8579dda.png",
      caption: "Frosted glass vessel packaging with debossed typography and tactile finish"
    },
    {
      id: 14,
      number: "14",
      title: "Precision Label Engineering & Die-Cuts",
      category: "Packaging",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c4ace9252076827.6a576a857a9b6.png",
      caption: "Technical packaging die-lines, foil registration, and legal typographic specs"
    },
    {
      id: 15,
      number: "15",
      title: "Rigid Box Unboxing Concept",
      category: "Packaging",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/83500e252076827.6a58f9dce8c43.png",
      caption: "Custom structural unboxing experience with interior foam fitment"
    },
    {
      id: 16,
      number: "16",
      title: "Brand Apparel & Studio Merchandise",
      category: "Packaging",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cd3597252076827.6a576a857996f.png",
      caption: "Screenprinted heavyweight studio cotton garments and woven labels"
    },
    {
      id: 17,
      number: "17",
      title: "Premium Foil Stationery Mockup",
      category: "Branding",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3ec7d5252076827.6a576a85792f2.png",
      caption: "Letterpress cards on 600gsm cotton stock with metallic silver edges"
    },
    {
      id: 18,
      number: "18",
      title: "Publication & Lookbook Editorial Spread",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f7cfda252076827.6a576a857a5c6.png",
      caption: "Hardcover brand monograph with Swiss column layout and full-bleed art"
    },
    {
      id: 19,
      number: "19",
      title: "Project 03 — Broadcast Motion Reel Highlight",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e7fd86252076827.6a5df6a68931c.gif",
      caption: "Main title bumper animation for cultural television broadcast"
    },
    {
      id: 20,
      number: "20",
      title: "3D Dimensional Geometry & CGI Asset",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7c1c7a252076827.6a5df436389ca.gif",
      caption: "Procedural geometry animation with ray-traced ambient lighting"
    },
    {
      id: 21,
      number: "21",
      title: "Spatial Design System Breakdown",
      category: "Branding",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6ef97f252076827.6a5e4d2755779.png",
      caption: "Spatial identity coordinates, dimensional typography, and event signage"
    },
    {
      id: 22,
      number: "22",
      title: "Generative Waveform Animation",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/474bda252076827.6a5df0c8bb51e.gif",
      caption: "Audio-reactive particle wave displacement simulation"
    },
    {
      id: 23,
      number: "23",
      title: "Holographic UI Interface Card",
      category: "Motion Graphics",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e662d9252076827.6a5dd3d5e9096.png",
      caption: "Futuristic HUD telemetry design and cybernetic vector iconography"
    },
    {
      id: 24,
      number: "24",
      title: "Vector Wireframe & Node Network",
      category: "Branding",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1a08bd252076827.6a5dd3d5e85e8.png",
      caption: "Complex technical vector schema mapping architectural systems"
    },
    {
      id: 25,
      number: "25",
      title: "Digital OOH Billboard Placement",
      category: "Branding",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5e7808252076827.6a5dd3d5e8b9d.png",
      caption: "Tokyo Shinjuku anamorphic 3D LED outdoor billboard mockup"
    },
    {
      id: 26,
      number: "26",
      title: "Project 04 — Kinetic Exhibition Poster",
      category: "Editorial",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c19184252076827.6a59e3ca059b5.gif",
      caption: "Distortion poster design animated for digital gallery screens"
    },
    {
      id: 27,
      number: "27",
      title: "Neo-Brutalist Layout Specimen",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e504c2252076827.6a5e4d2755d53.png",
      caption: "Monochrome brutalist layout with heavy rule lines and dense data columns"
    },
    {
      id: 28,
      number: "28",
      title: "Experimental Wave Poster Sequence",
      category: "Editorial",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/beb446252076827.6a5a1169a9cb7.gif",
      caption: "Scanography displacement technique applied to digital typography"
    },
    {
      id: 29,
      number: "29",
      title: "Sound Reactive Motion Graphic",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3c3d4b252076827.6a58f9dce9258.gif",
      caption: "Bass-frequency driven graphic pulsing pattern in After Effects"
    },
    {
      id: 30,
      number: "30",
      title: "Monochrome Screenprint Poster Art",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6ffff7252076827.6a5a21297867c.png",
      caption: "Limited run 50x70cm screenprint on French Paper Charcoal"
    },
    {
      id: 31,
      number: "31",
      title: "Geometric Symbol Exploration Matrix",
      category: "Branding",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0181ad252076827.6a5a212978b6e.png",
      caption: "Iterative semiotic exploration of minimal primitive symbols"
    },
    {
      id: 32,
      number: "32",
      title: "Asymmetric Layout Study",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f6b5f8252076827.6a5a212978020.png",
      caption: "Editorial balance study exploring tension between negative space and text"
    },
    {
      id: 33,
      number: "33",
      title: "Type In Motion Kinetic Loop",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/286ad1252076827.6a59e3ca04d6e.gif",
      caption: "Variable font weight and slant interpolation rendered in real-time"
    },
    {
      id: 34,
      number: "34",
      title: "Acid Typography Visual Artwork",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/766762252076827.6a5e4d2755166.png",
      caption: "Contemporary chrome liquid typography artwork with high-gloss highlights"
    },
    {
      id: 35,
      number: "35",
      title: "High-Speed Typography Glitch",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0c8d4c252076827.6a5a1169aa57a.gif",
      caption: "Analog CRT monitor feedback and scanline displacement transition"
    },
    {
      id: 36,
      number: "36",
      title: "Editorial Street Banner Mockup",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7bee40252076827.6a5db40eed8b7.png",
      caption: "Vertical fabric flags installed outside contemporary art museum"
    },
    {
      id: 37,
      number: "37",
      title: "Project 05 — 3D Title Card Animation",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8cbd65252076827.6a5e542bd85d9.gif",
      caption: "Cinematic opening title sequence with depth of field and lens aberration"
    },
    {
      id: 38,
      number: "38",
      title: "Motion Grid Structure & Timing Curves",
      category: "Motion Graphics",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3f019a252076827.6a5e4d275631f.png",
      caption: "Graph editor curves, bezier timing keys, and motion choreography rules"
    },
    {
      id: 39,
      number: "39",
      title: "Fluid Gradient Transformation",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3ded60252076827.6a5e542bd7f14.gif",
      caption: "Multi-color chromatic fluid displacement and blend mode animation"
    },
    {
      id: 40,
      number: "40",
      title: "Multi-Channel Brand Video Loop",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/977fdc252076827.6a5f86922df95.gif",
      caption: "Seamless 4K video reel segment produced for luxury streetwear drop"
    },
    {
      id: 41,
      number: "41",
      title: "Color Grading & Look Development",
      category: "Motion Graphics",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c3a610252076827.6a5f580651fd4.png",
      caption: "DaVinci Resolve film emulation, Kodak 2383 LUT pass, and grain overlay"
    },
    {
      id: 42,
      number: "42",
      title: "Storyboard Sequence & Shot List",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ebb72e252076827.6a5f580652404.png",
      caption: "Pre-production narrative animatic frames and pacing breakdown"
    },
    {
      id: 43,
      number: "43",
      title: "Video Transition Technical Breakdown",
      category: "Motion Graphics",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8908ec252076827.6a5f5806511af.png",
      caption: "Match cut framing, speed ramps, and optical flow morphing analysis"
    },
    {
      id: 44,
      number: "44",
      title: "Audio Sync & Beat Cut Grid",
      category: "Motion Graphics",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/aee582252076827.6a5f5806516a8.png",
      caption: "Waveform beat markers mapped to visual hit points and camera cuts"
    },
    {
      id: 45,
      number: "45",
      title: "Final Frame Composite Render",
      category: "Motion Graphics",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/626405252076827.6a5f580650c25.png",
      caption: "Multi-pass EXR compositing with beauty, depth, cryptomatte and specular"
    },
    {
      id: 46,
      number: "46",
      title: "High-Energy Social Video Teaser",
      category: "Social Media",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7ab0ea252076827.6a5b28c54f930.gif",
      caption: "Fast-paced TikTok and Reels video asset formatted for mobile feeds"
    },
    {
      id: 47,
      number: "47",
      title: "Motion Reel Credits & Technical Specs",
      category: "Motion Graphics",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cee5bb252076827.6a5e4d2754a1b.png",
      caption: "Full crew and software credits card set in Swiss condensed type"
    },
    {
      id: 48,
      number: "48",
      title: "Project 06 — Social Media Campaign Hero",
      category: "Social Media",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a21c5c252076827.6a58b413b1b43.gif",
      caption: "Instagram campaign launch hero visual with kinetic type transitions"
    },
    {
      id: 49,
      number: "49",
      title: "Story Carousel Motion Frame A",
      category: "Social Media",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/acef96252076827.6a587e0526548.gif",
      caption: "Seamless swipe-through story panel 1: Hook and teaser headline"
    },
    {
      id: 50,
      number: "50",
      title: "Story Carousel Motion Frame B",
      category: "Social Media",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6cc0f3252076827.6a587e05260a8.gif",
      caption: "Seamless swipe-through story panel 2: Product feature highlight"
    },
    {
      id: 51,
      number: "51",
      title: "Story Carousel Motion Frame C",
      category: "Social Media",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d30ad6252076827.6a587e061add9.gif",
      caption: "Seamless swipe-through story panel 3: Social proof and metric card"
    },
    {
      id: 52,
      number: "52",
      title: "Story Carousel Motion Frame D",
      category: "Social Media",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f55589252076827.6a587e061b203.gif",
      caption: "Seamless swipe-through story panel 4: Call-to-action link trigger"
    },
    {
      id: 53,
      number: "53",
      title: "Interactive Micro-Animation Asset",
      category: "Social Media",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/de941b252076827.6a53ce139f404.gif",
      caption: "Sticker pack and GIF animation created for Instagram stories search"
    },
    {
      id: 54,
      number: "54",
      title: "Brand Guidelines Overview Card",
      category: "Branding",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f52f8b252076827.6a5e4d275437f.png",
      caption: "Clear-space rules, minimum reproduction sizes, and forbidden uses"
    },
    {
      id: 55,
      number: "55",
      title: "Campaign Rollout Teaser Loop",
      category: "Social Media",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a2a4df252076827.6a5b28c550185.gif",
      caption: "Countdown teaser banner deployed across X, Threads and Instagram"
    },
    {
      id: 56,
      number: "56",
      title: "About the Designer — Philosophy & Background",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a196c6252076827.6a53ce11107cf.png",
      caption: "Designer biography, creative statement, and background overview"
    },
    {
      id: 57,
      number: "57",
      title: "Core Capabilities & Discipline Matrix",
      category: "Branding",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ba7812252076827.6a53ce1110c06.png",
      caption: "Detailed breakdown of services: Brand, Motion, Packaging, Digital"
    },
    {
      id: 58,
      number: "58",
      title: "Creative Process & Strategy Deck",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/f4dd89252076827.6a53d22bb47ce.jpeg",
      caption: "5-Stage methodology: Discovery, Concepting, System, Kinetic, Delivery"
    },
    {
      id: 59,
      number: "59",
      title: "Studio Showcase & Design Environment",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/e93b79252076827.6a53d22bb41da.jpeg",
      caption: "Physical studio workspace, hardware setup, and printing equipment"
    },
    {
      id: 60,
      number: "60",
      title: "Software & Digital Tools Proficiency",
      category: "Branding",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/238c12252076827.6a53ce1182771.png",
      caption: "Technical mastery in Adobe CC, Figma, Cinema 4D and FontLab"
    },
    {
      id: 61,
      number: "61",
      title: "Design Awards, Honors & Features",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/97232d252076827.6a53ce1182094.png",
      caption: "Accolades from Behance Curated Galleries, Awwwards, and TDC"
    },
    {
      id: 62,
      number: "62",
      title: "Experience Timeline & Global Client Roster",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d74ec5252076827.6a53ce11819ad.png",
      caption: "Collaborations with forward-thinking tech, fashion and cultural clients"
    },
    {
      id: 63,
      number: "63",
      title: "Collaboration & Work Ethics Charter",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/318f00252076827.6a53ce118129a.png",
      caption: "Commitment to transparency, deadlines, and meticulous craft"
    },
    {
      id: 64,
      number: "64",
      title: "Animated Closing Monogram Signature",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c46d11252076827.6a58b413b1538.gif",
      caption: "Signature outro mark animation closing the presentation deck"
    },
    {
      id: 65,
      number: "65",
      title: "Let's Work Together — Motion Card",
      category: "Motion Graphics",
      isMotion: true,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/26a621252076827.6a5f7e0d47b74.gif",
      caption: "Kinetic call-to-action encouraging new project inquiries"
    },
    {
      id: 66,
      number: "66",
      title: "Outro & Contact Coordinates",
      category: "Editorial",
      isMotion: false,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9eab4b252076827.6a5f8d5c5f9bc.png",
      caption: "Direct email, portfolio links, and 2026 copyright colophon"
    }
  ]
};

// Export to window object for global availability
window.PORTFOLIO_DATA = DEFAULT_PORTFOLIO_DATA;
