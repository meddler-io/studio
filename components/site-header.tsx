"use client";

import * as React from "react";
import { Menu, X, Play, ArrowRight } from "lucide-react";
import { SITE, NAV_LINKS } from "@/constants/site";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

function LogoMark() {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-glow-primary flex items-center justify-center">
        <span className="numeric text-[0.65rem] text-slate-950 font-semibold">
          AI
        </span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-xs uppercase tracking-[0.22em] text-slate-400">
          {SITE.appName}
        </span>
        {/* Hide long subtitle on very small widths to avoid overflow */}
        <span className="hidden sm:block text-[0.7rem] font-medium text-slate-100">
          {SITE.title}
        </span>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-2xl shadow-[0_12px_40px_rgba(15,23,42,0.9)]">
      <div className="app-container flex h-14 sm:h-16 items-center justify-between gap-3">
        <LogoMark />

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "group relative inline-flex flex-col items-start gap-1 transition-colors",
                activeSection === link.href
                  ? "text-slate-50"
                  : "text-slate-300 hover:text-slate-50"
              )}
            >
              <span className="whitespace-nowrap">{link.label}</span>
              <span
                className={cn(
                  "h-[1px] bg-gradient-to-r from-primary to-secondary transition-all duration-200",
                  activeSection === link.href
                    ? "w-6 shadow-[0_0_12px_rgba(94,234,212,0.8)]"
                    : "w-0 group-hover:w-6"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            className="gap-1.5"
            aria-label={SITE.secondaryCTA}
          >
            <Play className="h-3.5 w-3.5" />
            <span className="whitespace-nowrap">{SITE.secondaryCTA}</span>
          </Button>
          <Button
            size="sm"
            className="gap-1.5"
            aria-label={SITE.primaryCTA}
          >
            <span className="whitespace-nowrap">{SITE.primaryCTA}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-200 hover:border-primary/60 hover:text-white transition-all"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen ? (
        <div className="md:hidden border-t border-slate-800/70 bg-slate-950">
          <div className="app-container py-3 flex flex-col gap-3">
            <nav className="flex flex-col gap-1.5 text-sm text-slate-200">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-900/80",
                    activeSection === link.href &&
                      "bg-slate-900/90 border border-primary/40"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-500" />
                </a>
              ))}
            </nav>
            <div className="mt-2 flex flex-col gap-2">
              <Button
                variant="secondary"
                size="sm"
                fullWidth
                className="gap-1.5"
              >
                <Play className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">{SITE.secondaryCTA}</span>
              </Button>
              <Button size="sm" fullWidth className="gap-1.5">
                <span className="whitespace-nowrap">{SITE.primaryCTA}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
