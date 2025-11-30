import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./sections/**/*.{ts,tsx,js,jsx,mdx}",
    "./ui/**/*.{ts,tsx,js,jsx,mdx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        // Base semantic tokens (compatible with shadcn-style usage)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: {
          DEFAULT: "#6366F1", // Softer indigo
          foreground: "#FDFBFF",
        },
        secondary: {
          DEFAULT: "#22D3EE", // Teal-cyan
          foreground: "#001018",
        },
        accent: {
          DEFAULT: "#F472B6", // Soft magenta
          foreground: "#170015",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FDF2F2",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, #6366F1 0, transparent 55%), radial-gradient(circle at bottom right, #22D3EE 0, transparent 55%)",
        "surface-glass":
          "linear-gradient(135deg, rgba(13, 13, 40, 0.9), rgba(10, 35, 58, 0.88))",
      },
      borderRadius: {
        lg: "1.1rem",
        md: "0.8rem",
        sm: "0.6rem",
        pill: "999px",
      },
      boxShadow: {
        "glow-primary": "0 0 30px rgba(99, 102, 241, 0.55)",
        "glow-secondary": "0 0 30px rgba(34, 211, 238, 0.5)",
        "soft-elevated": "0 18px 60px rgba(0, 0, 0, 0.65)",
      },
      keyframes: {
        "float-soft": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "line-sweep": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "float-soft": "float-soft 6s ease-in-out infinite",
        "line-sweep": "line-sweep 2.6s linear infinite",
        "pulse-soft": "pulse-soft 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
