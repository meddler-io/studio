# Social Flow Landing Page

A high-conversion marketing site for an AI-powered, template-based video editor.  
Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and lightweight, composable React sections.

> All product copy, sections, and UX are driven by constants in `constants/site.ts`, so you can rebrand and repurpose this template quickly.

---

## Tech Stack

- **Next.js** (App Router, `app/` directory)
- **TypeScript**
- **React** + `framer-motion` for subtle animation
- **Tailwind CSS** for styling
- **Next Fonts** for Inter, Space Grotesk, and JetBrains Mono
- Small design system primitives (e.g. `ui/button.tsx`)

---

## Getting Started

### 1. Install dependencies

From the project root:

```bash
npm install
```

If you prefer Yarn or pnpm, adapt accordingly:

```bash
# Yarn
yarn

# pnpm
pnpm install
```

### 2. Run the dev server

```bash
npm run dev
```

By default, the app will be available at:

- http://localhost:3000

Hot reload is enabled, so edits to components or constants will reflect immediately.

### 3. Build for production (optional)

To verify that everything builds and types check cleanly:

```bash
npm run build
npm run start
```

`npm run build` will run TypeScript checks and generate a production build.

---

## Project Structure

Key files and folders:

```bash
.
├─ app/
│  ├─ layout.tsx          # Root HTML shell, fonts, metadata
│  └─ page.tsx            # Main landing page wiring all sections
├─ components/
│  ├─ section-header.tsx  # Shared section heading component
│  └─ site-header.tsx     # Top navigation / logo / CTA bar
├─ sections/
│  ├─ hero-section.tsx
│  ├─ how-it-works-section.tsx
│  ├─ features-section.tsx
│  ├─ template-gallery-section.tsx
│  ├─ comparison-section.tsx
│  ├─ demo-section.tsx
│  ├─ use-cases-section.tsx
│  ├─ pricing-section.tsx
│  ├─ testimonials-section.tsx
│  └─ final-cta-section.tsx
├─ constants/
│  └─ site.ts             # All marketing copy, nav, pricing, etc.
├─ ui/
│  └─ button.tsx          # Button primitive (shadcn-style)
├─ styles/
│  └─ globals.css         # Tailwind base, theme tokens, utilities
├─ public/
│  ├─ logo_placeholder.svg        # Main logo (header/hero)
│  └─ logo_small_placeholder.svg  # Small logo (favicon/meta)
├─ tailwind.config.ts
├─ tsconfig.json
├─ next.config.mjs
├─ package.json
└─ TASK.md                # Original task / spec
```

---

## Customization Guide

Most of your customization can happen in a few places:

### 1. Product-level copy & constants

Edit `constants/site.ts` to update:

- **Branding / identity**

  ```ts
  export const SITE = {
    appName: "APP_NAME_PLACEHOLDER",
    title: "TITLE_PLACEHOLDER",
    tagline: "TAGLINE_PLACEHOLDER",
    logo: "/logo_placeholder.svg",
    logoSmall: "/logo_small_placeholder.svg",
    primaryCTA: "GET_STARTED",
    secondaryCTA: "VIEW_DEMO",
    description: "...",
  } as const;
  ```

  Update:
  - `appName` – brand/product name
  - `title` – default page `<title>` and hero title
  - `tagline` – short product tagline
  - `description` – used for SEO and meta tags
  - `primaryCTA` / `secondaryCTA` – button labels across the page
  - `logo` / `logoSmall` – paths to your custom logos in `public/`

- **Navigation**

  ```ts
  export const NAV_LINKS = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#templates", label: "Templates" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Customers" },
  ];
  ```

  You can:
  - Reorder items to change nav priority.
  - Add/remove items pointing to other section IDs or external URLs.

- **Hero highlights, feature cards, templates, use cases, pricing, testimonials**

  All of these are represented as typed arrays:

  - `HERO_HIGHLIGHTS`
  - `HOW_IT_WORKS_STEPS`
  - `FEATURE_CARDS`
  - `TEMPLATE_GALLERY`
  - `USE_CASES`
  - `PRICING_PLANS`
  - `TESTIMONIALS`
  - `COMPARISON_PRODUCTS`
  - `DEMO_STATES`
  - `FOOTER_LINKS`
  - `SOCIAL_LINKS`

  Update the text and structure to reflect your product and audience.  
  The sections automatically render based on these constants.

### 2. Logos & brand visuals

Logos live in `public/`:

- `public/logo_placeholder.svg` – main logo (used in header / hero)
- `public/logo_small_placeholder.svg` – compact mark for favicon/meta

To update:

1. Replace these files with your own SVGs, **or**
2. Add new files (e.g. `/my-logo.svg`) and update `SITE.logo` / `SITE.logoSmall` paths.

### 3. Colors, fonts, and theme

Tailwind is configured via:

- `tailwind.config.ts` – theme tokens and extensions.
- `styles/globals.css` – base styles, CSS variables, and `.app-*` layout classes.

Look for `:root` variables and the `theme.extend` section if you want to:

- Change primary/secondary/accent colors.
- Adjust default spacing, radii, or shadows.
- Tweak typography scale.

Fonts are configured in `app/layout.tsx`:

```ts
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

// ...
```

You can swap these out for other Next Fonts if preferred.

---

## SEO & Metadata

Metadata is centralized in `app/layout.tsx` and driven by `SITE`:

```ts
export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  icons: {
    icon: SITE.logoSmall,
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.appName,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};
```

Adjust `SITE` or customize this object directly to:

- Change the page title and description.
- Point to a custom favicon or social image.
- Configure OpenGraph/Twitter metadata.

---

## TypeScript Notes

You may see temporary TypeScript errors before installing dependencies, e.g.:

- `Cannot find module 'react' or its corresponding type declarations.`
- `JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.`

These should disappear once you run:

```bash
npm install
npm run dev
```

Next.js pulls in the React types, and `next-env.d.ts` plus `tsconfig.json` are already configured for JSX in the `app/` directory.

---

## Deployment

You can deploy this project anywhere Next.js is supported:

- Vercel (recommended)
- Netlify (Next adapter)
- Custom Node server / Docker

Typical Vercel flow:

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import into Vercel.
3. Set the framework preset to **Next.js**.
4. Use `npm install`, `npm run build`, `npm start` defaults (or just `npm run build` if Vercel detects the framework automatically).

---

## Quick Checklist for Adapting to Your Product

- [ ] Update `SITE` branding and description in `constants/site.ts`.
- [ ] Adjust nav links and section IDs in `NAV_LINKS`.
- [ ] Rewrite feature cards, templates, and use cases to match your product.
- [ ] Replace logos in `public/logo_placeholder.svg` and `public/logo_small_placeholder.svg`.
- [ ] Tweak colors and typography in `tailwind.config.ts` and `styles/globals.css`.
- [ ] Verify SEO metadata in `app/layout.tsx`.
- [ ] Run `npm run build` before deploying.

This template is intentionally opinionated but modular: you can remove entire sections by deleting their imports/usages in `app/page.tsx`, or add new sections under `sections/` and wire them in.
