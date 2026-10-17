# 🎨 GRAPHIC DESIGN PORTFOLIO 2026 — TEMPLATE & MODEL

A high-end, responsive Graphic Design Portfolio web application modeled after the acclaimed **Behance "GRAPHIC DESIGN PORTFOLIO 2026" (Raagav Sundar)** presentation.

---

## 🌟 Key Features

1. **Behance Presentation Mode (Continuous Stream)**:
   - Full-bleed vertical slide stream identical to the signature Behance project presentation experience.
   - Interactive slide counter (`Slide 01 of 66`), category tags, and motion indicators.
   - Hover controls with **Zoom Lightbox** and **Instant Image Swap**.

2. **Studio Grid & Case Studies Mode**:
   - Filterable project grid with tabs: `All (66)`, `Branding`, `Motion Graphics`, `Packaging`, `Editorial`, `Social Media`.
   - 6 Curated Deep-Dive Case Studies (AETHER, LUMEN, SYNAPSE, VORTEX, KINETIC, OMNI).

3. **Interactive In-Browser Live Customizer (`⚡ Customize`) with Admin Login**:
   - Protected with **Admin Login**:
     - **Username**: `Gokul`
     - **Password**: `gokul@2004`
   - Click the **"Customize"** button in the top navigation bar to open the login authentication modal.
   - **Edit Text & Info**: Designer Name, Year, Role, Bio, Email, Phone, Social links.
   - **Replace Any Image**:
     - Paste any web image URL
     - **Upload any file directly from your computer** (loads instantly via HTML5 FileReader).
   - **Change Accent Color**: Acid Lime, Cyber Cyan, Ultra Red, Electric Violet, Solar Amber, or custom hex code.
   - **Save & Persist**: Saves directly to browser `localStorage` so changes stay across refreshes.
   - **Export Configuration**: Download your updated `portfolio-data.js` with one click!
   - **Logout**: One-click logout button in the customizer header.

4. **Interactive 4K Lightbox**:
   - Click any slide or project card to inspect high-resolution details.
   - Keyboard navigation (`Esc` to close, `←` / `→` arrows to navigate slides).
   - Direct "Swap Image" button right inside the Lightbox.

---

## 🔐 Admin Login Credentials

To access the Full Admin Panel, edit counts, and replace images:
- **Username**: `Gokul`
- **Password**: `gokul@2003`

### 🌐 Admin Access Options
1. **Dedicated Login Page**: Open [`login.html`](login.html) in your browser.
2. **From Portfolio**: Click the **⚡ Admin Panel** button in the top navigation or footer on [`index.html`](index.html).
3. **Direct Admin Route**: Open [`admin.html`](admin.html) to be automatically directed to the panel or login.

## 🚀 How to Run Across Any Device or Laptop

### Option 1: Double-Click (Works on ANY Laptop Without Installation)
Simply double-click [`index.html`](index.html) in any browser (Chrome, Edge, Brave, Firefox, Safari).
- Built-in `<meta name="referrer" content="no-referrer">` ensures Behance CDN images load without hotlink/referrer errors.
- Self-contained SVG fallbacks and standalone CSS ensure it works even offline.

### Option 2: Run Local Server (Access from Phones, Tablets & Other Laptops on Same Wi-Fi)
In PowerShell, run:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
The server automatically detects your current folder (works on `C:`, `D:`, USB drives, or any laptop) and prints:
- **This Laptop**: `http://localhost:8080/`
- **Mobile Phones / Other Laptops on your Wi-Fi**: `http://<your-ip-address>:8080/`

Open that URL on your phone or other laptop to test it live!

---

## 🖼️ How to Change Images and Customize Content

You have two easy ways to customize:

### Method A: Live In-Browser Editor (Recommended & Instant)
1. Open the portfolio in your browser.
2. Click the yellow/lime **`⚡ Customize`** button in the top header (or click **"Change Image"** on any slide).
3. Log in with:
   - **Username**: `Gokul`
   - **Password**: `gokul@2004`
4. Go to the **"Slides & Images"** tab:
   - To replace an image with a file from your PC, click **"Upload File"**.
   - To replace an image with a link, paste the image URL into the field.
   - Edit the slide title, description, or category.
5. Click **"Save Profile Info"** or download your new config in the **"Save & Export"** tab.

### Method B: Directly Edit `js/portfolio-data.js`
Open [`js/portfolio-data.js`](js/portfolio-data.js) in your text editor. Every field is clearly documented:
- Change your name in `profile.name`
- Change your email in `profile.email`
- Change any slide image URL in the `slides` array:
  ```javascript
  {
    id: 1,
    title: "My Project Title",
    category: "Branding",
    image: "https://your-image-url.com/image.jpg" // Or "images/my-photo.jpg"
  }
  ```

---

## 💾 Optional: Download Behance Images for Offline Use
If you want to store all 66 slides locally on your hard drive so the site works offline without internet:
```powershell
powershell -ExecutionPolicy Bypass -File .\download-slides.ps1
```
This will download all high-res images and GIFs into the `images/slides/` directory.

---

## 📁 File Structure

```
d:\New folder\
├── index.html              # Main HTML5 semantic page
├── css/
│   └── styles.css          # Master stylesheet (Swiss editorial typography, dark mode)
├── js/
│   ├── portfolio-data.js   # All 66 slides, profile info, and case study data
│   └── app.js              # Interactive rendering engine, customizer, lightbox
├── images/                 # Local image assets
├── server.ps1              # Local development HTTP server (port 8080)
├── download-slides.ps1     # Downloader utility for Behance CDN slides
└── README.md               # Documentation and guide
```
