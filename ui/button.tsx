"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "subtle";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  asChild?: boolean;
}

/**
 * Minimal shadcn-style Button primitive with variants tuned
 * for the neon / glassmorphism design language.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth,
      asChild,
      ...props
    },
    ref
  ) => {
    const base =
      "relative inline-flex items-center justify-center whitespace-nowrap rounded-pill text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/80 focus-visible:ring-offset-slate-950 disabled:opacity-60 disabled:cursor-not-allowed";

    const sizeClasses: Record<ButtonSize, string> = {
      xs: "h-7 px-3",
      sm: "h-8 px-3.5",
      md: "h-10 px-4",
      lg: "h-11 px-6 text-sm",
    };

    const variantClasses: Record<ButtonVariant, string> = {
      primary:
        "bg-primary text-primary-foreground shadow-glow-primary hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(109,93,246,0.85)]",
      secondary:
        "border border-primary/40 bg-slate-900/60 text-slate-100 hover:border-secondary/70 hover:bg-slate-900/90 hover:text-sky-100",
      ghost:
        "bg-transparent text-slate-200 hover:bg-slate-800/60 hover:text-white",
      outline:
        "border border-slate-600/70 bg-transparent text-slate-100 hover:bg-slate-900/60 hover:border-primary/70",
      subtle:
        "bg-slate-900/70 text-slate-100 hover:bg-slate-800/90 border border-white/5",
    };

    const widthClass = fullWidth ? "w-full" : "w-auto";

    const Comp: any = asChild ? "span" : "button";

    return (
      <Comp
        ref={ref}
        className={cn(base, sizeClasses[size], variantClasses[variant], widthClass, className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
