import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to safely merge Tailwind class names with conditional segments.
 * Mirrors the common `cn` helper in shadcn/ui projects.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Helper to generate a subtle neon border glow class string.
 * Used for cards, buttons and interactive surfaces.
 */
export function neonBorder(variant: "primary" | "secondary" | "accent" = "primary"): string {
  switch (variant) {
    case "secondary":
      return "border-secondary/40 shadow-glow-secondary";
    case "accent":
      return "border-accent/40 shadow-[0_0_32px_rgba(245,77,255,0.55)]";
    case "primary":
    default:
      return "border-primary/40 shadow-glow-primary";
  }
}

/**
 * Reusable className for glassmorphism surfaces.
 */
export const glassSurface =
  "bg-surface-glass/80 backdrop-blur-2xl border border-white/5 shadow-soft-elevated";
