export const SITE = {
  appName: "Meddler",
  title: "Meddler Studio",
  tagline: "Turn long-form recordings into channel-ready clips in minutes.",
  logo: "/logo_placeholder.svg",
  logoSmall: "/logo_small_placeholder.svg",
  primaryCTA: "Start free",
  secondaryCTA: "Watch demo",
  description:
    "Meddler Studio is an AI-powered, template-first video editor that turns raw recordings into finished, on-brand clips with automatic captioning, voice-over, smart audio mixing, multi-canvas resizing and one-click publishing.",
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "#how-it-works", label: "Workflow" },
  { href: "#features", label: "Features" },
  { href: "#templates", label: "Templates" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Stories" },
];

export const HERO_HIGHLIGHTS: string[] = [
  "Template-driven AI video creation",
  "Intelligent captions & voiceover in minutes",
  "Multi-channel ready exports, auto-posted",
];

export type HowItWorksStep = {
  id: number;
  label: string;
  title: string;
  description: string;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: 1,
    label: "Step 1",
    title: "Drop your raw media & pick a template",
    description:
      "Upload long-form content or clips, then choose a high-performing template optimized for your target platform.",
  },
  {
    id: 2,
    label: "Step 2",
    title: "Let the AI auto-cut, caption & brand",
    description:
      "Our AI detects key hooks, generates motion captions, applies your brand kit and maps placeholders automatically.",
  },
  {
    id: 3,
    label: "Step 3",
    title: "Review, tweak, and auto-publish",
    description:
      "Adjust timelines, scenes, overlays and then auto-schedule to YouTube, TikTok, Reels, Shorts, and more.",
  },
];

export type FeatureCard = {
  id: string;
  name: string;
  description: string;
  icon: string;
  badge?: string;
};

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "template-engine",
    name: "AI Template Engine",
    description:
      "Generate on-brand video layouts in seconds using reusable, parameterized templates.",
    icon: "sparkles",
    badge: "Adaptive",
  },
  {
    id: "motion-captioning",
    name: "Motion Captioning",
    description:
      "Dynamic, kinetic typography that syncs to speech and music with no manual keyframes.",
    icon: "type",
  },
  {
    id: "transcription",
    name: "Studio-Grade Transcription",
    description:
      "High-accuracy, multilingual transcripts ready for captions, blogs and show notes.",
    icon: "audioWaveform",
  },
  {
    id: "placeholder-automation",
    name: "Placeholder Automation",
    description:
      "Smart placeholders auto-detect where to place b-roll, emojis, CTAs and overlays.",
    icon: "squareStack",
  },
  {
    id: "voiceover",
    name: "AI Voiceover Studio",
    description:
      "Generate ultra-natural voices, cloned from yours or picked from our premium library.",
    icon: "mic",
  },
  {
    id: "audio-mixing",
    name: "Smart Audio Mixing",
    description:
      "Automatic loudness normalization, ducking and EQ tuned for every platform.",
    icon: "sliders",
  },
  {
    id: "multi-canvas",
    name: "Multi-Canvas Output",
    description:
      "Render 9:16, 16:9, 1:1 and more simultaneously with smart framing and cropping.",
    icon: "panelsTopLeft",
  },
  {
    id: "auto-posting",
    name: "Auto Posting & Scheduling",
    description:
      "Approve once and auto-distribute to all connected channels with AI-written titles.",
    icon: "send",
  },
];

export type TemplateItem = {
  id: string;
  label: string;
  category: string;
  duration: string;
  name?: string;
  description?: string;
  aspect?: string;
  channels?: string;
  automationTag?: string;
  badge?: string;
};

export const TEMPLATE_GALLERY: TemplateItem[] = [
  {
    id: "hook-reel",
    label: "Hook-First Reel",
    category: "Short-form",
    duration: "0:20",
  },
  {
    id: "talking-head",
    label: "Talking Head Clips",
    category: "Thought leadership",
    duration: "0:45",
  },
  {
    id: "podcast-carousel",
    label: "Podcast Carousel",
    category: "Multi-clip",
    duration: "1:00",
  },
  {
    id: "product-showcase",
    label: "Product Showcase",
    category: "E-commerce",
    duration: "0:30",
  },
  {
    id: "comparison-split",
    label: "Before/After Split",
    category: "Transformations",
    duration: "0:25",
  },
  {
    id: "facecam-gaming",
    label: "Facecam Gaming Highlight",
    category: "Gaming",
    duration: "0:40",
  },
];

export type ComparisonProduct = {
  name: string;
  isOurProduct?: boolean;
  metrics: {
    category: string;
    value: string;
  }[];
};

export const COMPARISON_PRODUCTS: ComparisonProduct[] = [
  {
    name: "CapCut",
    metrics: [
      { category: "AI templating", value: "Basic" },
      { category: "Automation", value: "Manual-heavy" },
      { category: "Brand systems", value: "Limited" },
      { category: "Multi-canvas", value: "Partial" },
    ],
  },
  {
    name: "Canva",
    metrics: [
      { category: "AI templating", value: "Static-first" },
      { category: "Automation", value: "Low" },
      { category: "Brand systems", value: "Strong" },
      { category: "Multi-canvas", value: "Manual resize" },
    ],
  },
  {
    name: "VEED",
    metrics: [
      { category: "AI templating", value: "Moderate" },
      { category: "Automation", value: "Some" },
      { category: "Brand systems", value: "Basic" },
      { category: "Multi-canvas", value: "Available" },
    ],
  },
  {
    name: "Our Product",
    isOurProduct: true,
    metrics: [
      { category: "AI templating", value: "Generative & adaptive" },
      { category: "Automation", value: "End-to-end" },
      { category: "Brand systems", value: "Global, multi-workspace" },
      { category: "Multi-canvas", value: "Parallel renders" },
    ],
  },
];

export type DemoState = {
  id: "before" | "after";
  label: string;
  description: string;
  metrics: string[];
};

export const DEMO_STATES: DemoState[] = [
  {
    id: "before",
    label: "Before AI",
    description:
      "Manual timelines, static captions, scattered brand assets and hours of exports.",
    metrics: [
      "3–5 hours per video",
      "Manual cropping for each platform",
      "Inconsistent sound levels",
    ],
  },
  {
    id: "after",
    label: "After AI",
    description:
      "Template-driven workflows, auto captions, voiceover and one-click multi-canvas.",
    metrics: [
      "8–12 minutes per video",
      "Auto-resized for every channel",
      "Smart-mixed, platform-ready audio",
    ],
  },
];

export type UseCase = {
  id: string;
  label: string;
  description: string;
  icon: string;
};

export const USE_CASES: UseCase[] = [
  {
    id: "podcasters",
    label: "Podcasters",
    description: "Turn each episode into a week of channel-native clips.",
    icon: "podcast",
  },
  {
    id: "creators",
    label: "Creators",
    description:
      "Ship consistent, on-brand content across YouTube, Shorts, Reels and TikTok.",
    icon: "camera",
  },
  {
    id: "agencies",
    label: "Agencies",
    description: "Scale client deliverables with reusable, AI-powered templates.",
    icon: "briefcase",
  },
  {
    id: "real-estate",
    label: "Real estate",
    description:
      "Auto-generate listing tours with overlays, maps and dynamic CTAs.",
    icon: "building",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    description:
      "Create scroll-stopping product explainers from your existing assets.",
    icon: "shoppingBag",
  },
  {
    id: "startups",
    label: "Startups",
    description:
      "Ship launch videos, feature drops and investor updates effortlessly.",
    icon: "rocket",
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  highlighted?: boolean;
  ctaLabel: string;
  features: string[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    cadence: "/mo",
    tagline: "Test the AI workflow on a few projects.",
    ctaLabel: "Start free",
    features: [
      "3 exports / month",
      "Watermarked videos",
      "Starter template library",
      "Basic transcription",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$39",
    cadence: "/mo",
    tagline: "For solo creators shipping content every week.",
    highlighted: true,
    ctaLabel: "Upgrade to Pro",
    features: [
      "Unlimited projects",
      "Full template gallery",
      "AI motion captions & voiceover",
      "Multi-canvas renders",
      "Auto posting to major platforms",
      "Priority rendering queue",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: "$129",
    cadence: "/mo",
    tagline: "For teams, agencies and production studios.",
    ctaLabel: "Talk to sales",
    features: [
      "Everything in Pro",
      "Workspace & roles",
      "Brand kits & presets",
      "Shared template libraries",
      "Custom export presets",
      "Dedicated success manager",
    ],
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarInitials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "creator-1",
    name: "Alex Rivera",
    role: "YouTube Creator",
    company: "@alexbuilds",
    quote:
      "We turned a backlog of 40 unedited videos into a month of channel-ready clips in a single weekend.",
    avatarInitials: "AR",
  },
  {
    id: "agency-1",
    name: "Morgan Lee",
    role: "Founder",
    company: "Studio Loop Agency",
    quote:
      "Our editors now focus on creative direction instead of repetitive timeline work. Clients notice the difference.",
    avatarInitials: "ML",
  },
  {
    id: "brand-1",
    name: "Jamie Chen",
    role: "Head of Content",
    company: "Northline Commerce",
    quote:
      "We finally have a predictable, repeatable workflow for launching campaigns across every channel at once.",
    avatarInitials: "JC",
  },
];

export const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Product", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#" },
  { label: "Status", href: "#" },
  { label: "Security", href: "#" },
  { label: "Docs", href: "#" },
];

export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Discord", href: "#" },
  { label: "TikTok", href: "#" },
];
