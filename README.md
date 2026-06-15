# UnderGrads Media: UI/UX Redesign & Clone

This project is a modern, high-performance React redesign of the UnderGrads Media landing page. Built with Vite and React, it transforms the original website into a visually striking, interactive, and highly optimized web experience.

## 🎨 UI/UX Comparison: Original vs. Redesign

We completely overhauled the user experience to make the platform feel more premium, professional, and engaging. Here are the major UI/UX upgrades compared to the original site:

### 1. Theme & Typography
* **Original:** A standard dark mode with basic sans-serif typography.
* **Redesign:** Transitioned to a clean, high-contrast **Light Mode** aesthetic. We integrated **Roboto Mono** as the global font to give the site a structured, modern "developer/agency" feel.

### 2. Navigation Architecture
* **Original:** Used a vertical left-side navigation sidebar with a separate floating WhatsApp button taking up space on the right side of the screen.
* **Redesign:** 
  * Rebuilt into a **Sticky Top Horizontal Navbar**.
  * **Logo Dynamics:** The company logo is prominently displayed on the left and elegantly shrinks in size when you scroll to save vertical screen space.
  * **Integrated CTA:** The WhatsApp "Chat with us" button was moved from the right side of the screen directly into the navbar, significantly cleaning up the viewport.
  * **Absolute Centering:** Navigation links are perfectly centered for visual balance.

### 3. Glassmorphism & Aesthetics
* **Original:** Solid backgrounds with standard CSS borders.
* **Redesign:** Implemented heavy **Glassmorphism** (backdrop-filter blurs, transparent backgrounds) across the navbar and interactive modals. When scrolling, the navbar heavily blurs the content beneath it while retaining a glowing box-shadow.

### 4. Premium Scrolling Experience
* **Redesign Exclusive:** 
  * **Scroll Progress Bar:** Added an interactive, glowing gradient line at the very top edge of the browser that grows from left to right as the user scrolls down the page.
  * **Architectural Grid Lines:** Added 5 incredibly subtle vertical grid lines running through the entire background. This is a premium design trend that visually structures the content and ties the uniform sections together.

### 5. Layout Improvements
* **Services Section:** Replaced standard card lists with a modern **Bento Box Grid layout**, making featured services (like Social Media Management) stand out visually.
* **Footer:** Rebuilt into a high-contrast **Dark Footer** (`#0f172a`), integrating the official logo alongside the brand name, and adding interactive `react-icons` for LinkedIn, Facebook, Instagram, and YouTube.
* **Contact Form:** Replaced the full-screen basic HTML form with a beautiful, slide-up glassmorphic React Modal with built-in multi-select toggles and a fake success-state animation.

## 🚀 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (CSS Variables, Flexbox, Grid)
- **Icons:** `lucide-react` & `react-icons`

## 📦 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```
