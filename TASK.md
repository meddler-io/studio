

## **BEGIN PROMPT**

You are an expert front-end architect, SaaS UI designer, and Next-Gen AI application engineer.
Build me a **complete, modular, production-ready landing page** for an AI video automation SaaS product.

---

# **🎯 GOAL**

Create a **modern, premium, futuristic landing page** using the best next-gen UI stack and design principles.

---

# **⚙️ TECH STACK REQUIREMENTS**

Choose the best modern stack that supports AI-forward components, animations, and modular theme control:

### **Use the following stack:**

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **UI Library:** **shadcn/ui**
* **Styling:** TailwindCSS
* **Animation:** **Framer Motion**
* **Icons:** lucide-react
* **Bundler:** Turbopack (default Next.js)

This stack gives the most flexibility, speed, and next-gen UI capabilities.

---

# **🗂 PROJECT ARCHITECTURE REQUIREMENTS**

Create a clean, scalable folder structure:

```
/app
  /components
  /sections
  /styles
  /ui
  /lib
  /constants
  /hooks
  /assets
```

---

# **📁 CONSTANTS (GLOBAL CONFIG FILE)**

Create a file:
`/constants/site.ts`

It must contain globally changeable fields such as:

```
export const SITE = {
  appName: "APP_NAME_PLACEHOLDER",
  title: "TITLE_PLACEHOLDER",
  tagline: "TAGLINE_PLACEHOLDER",
  logo: "/logo_placeholder.svg",
  logoSmall: "/logo_small_placeholder.svg",
  primaryCTA: "GET_STARTED",
  secondaryCTA: "VIEW_DEMO",
  description:
    "AI-powered template-based video editor with automated placeholders, intelligent captioning, voice-over generation, smart audio mixing, multi-canvas resizing, and auto-publishing.",
};
```

Every section in the landing page must reference constants only.

---

# **🎨 DESIGN LANGUAGE (GLOBAL, CONFIGURABLE)**

## Colors (Tailwind config override):

* **Primary:** `#6D5DF6` (Electric Violet)
* **Secondary:** `#0AE2FF` (Cyan Neon)
* **Accent:** Magenta `#F54DFF`
* **Background:** Ultra-dark gradient
* **Surface:** Soft glassmorphism blur panels

## Typography:

* Heading font: **Space Grotesk**
* Body font: **Inter**
* Numeric text: **JetBrains Mono**

Configure these in `/styles/globals.css` and tailwind theme extension.

---

# **📦 REQUIRED LANDING PAGE SECTIONS**

Generate each of these as standalone React components in `/sections/`:

---

## **1. HERO SECTION**

* Futuristic, cinematic feel
* Animated template thumbnails & floating UI
* Clear headline + subheadline (pull from SITE constants)
* Two CTAs (primary + secondary)
* Background: subtle gradient + vaporwave lines
* Include Framer Motion animations:

  * Fade-in stagger
  * Floating UI cards
  * Gradient light sweep

---

## **2. HOW IT WORKS (3 steps)**

Each step gets:

* Icon
* Title
* Subtext
* Animated illustration (placeholder divs)

Use Framer Motion for scroll-trigger reveals.

---

## **3. FEATURE GRID (8 features)**

Create a responsive grid with:

* Motion hover states
* Neon border glows
* Icons (lucide-react)
* Short descriptions describing:

  * AI template engine
  * Motion captioning
  * Transcription
  * Placeholder automation
  * Voiceover
  * Audio mixing AI
  * Multi-canvas output
  * Auto posting

---

## **4. TEMPLATE GALLERY SECTION**

Horizontal scrolling carousel

* Use `framer-motion` drag constraints
* Include placeholder thumbnails & preview hover effects

---

## **5. DIFFERENTIATOR / COMPARISON SECTION**

Comparison table—modern, sleek:

* CapCut
* Canva
* VEED
* "Our Product"

Use a glass-card table style.

---

## **6. DEMO SECTION**

"Before vs After AI"

* Use two side-by-side cards
* Hover reveals transformation
* Motion captions animation

---

## **7. USE CASE GRID**

Use 6 cards with icons for:

* Podcasters
* Creators
* Agencies
* Real estate
* E-commerce
* Startups

Hover: glow pulse + slight zoom.

---

## **8. PRICING SECTION**

3-tier pricing cards:

* Free
* Pro
* Business

Include:

* Feature list
* CTA button
* Badge highlights
* Glow border on active tier

---

## **9. TESTIMONIALS**

Carousel or grid with:

* User avatar
* Name
* Role
* Short quote
* Optional mini-video thumbnail

---

## **10. FINAL CTA SECTION**

End with:

* Big hero-style CTA
* Subtle animated background
* Large button
* Logo (from constants)

---

# **🎛 INTERACTIONS & ANIMATIONS**

All animations must be subtle and tasteful:

* Soft hover glows
* Scale on hover
* Scroll-trigger fade-in
* Template cards floating in 3D
* Button hover ripple
* Accent line sweep animations

Use Framer Motion variants and transitions.

---

# **🔧 COMPONENT STANDARDS**

### All UI must:

* Use shadcn/ui components as wrappers
* Be responsive
* Follow Next.js App Router structure
* Be modular & reusable
* Use TypeScript strictly
* Use constants (SITE.*) for any value
* Use placeholder assets (SVGs)
* Use semantic HTML

---

# **📄 OUTPUT FORMAT**

Generate the entire codebase in **modular sections**, including:

### 1. `site.ts` constants

### 2. `layout.tsx`

### 3. Page file `app/page.tsx`

### 4. All components in `/components/`

### 5. All sections in `/sections/`

### 6. Theme config (Tailwind + shadcn/ui)

### 7. Global styles

### 8. Example placeholder assets

### 9. README for install + run

The output must be ready to paste into a repository and run.

---

# **END PROMPT**

