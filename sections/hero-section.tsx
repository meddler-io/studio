 // @ts-nocheck
"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles, LayoutTemplate, Zap } from "lucide-react";
import { SITE, HERO_HIGHLIGHTS } from "@/constants/site";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

const MotionCardDiv = motion.div as any;

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  },
};

const staggeredVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + i * 0.08,
      duration: 0.6,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  }),
};

const cardFloatVariants = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.9,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  },
};

function useParallaxCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-20, 20], [8, -8]);
  const rotateY = useTransform(x, [-20, 20], [-8, 8]);

  const springConfig = { damping: 18, stiffness: 220, mass: 0.6 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const relativeX = event.clientX - (rect.left + rect.width / 2);
      const relativeY = event.clientY - (rect.top + rect.height / 2);
      x.set(relativeX / 10);
      y.set(relativeY / 10);
    },
    [x, y]
  );

  const handleMouseLeave = React.useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { springX, springY, handleMouseMove, handleMouseLeave };
}

function HeroTemplateStack() {
  const { springX, springY, handleMouseLeave, handleMouseMove } =
    useParallaxCard();

  return (
    <MotionCardDiv
      className="relative aspect-[5/4] w-full max-w-xl rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-4 sm:p-5 md:p-6 shadow-soft-elevated overflow-hidden hero-bg"
      variants={cardFloatVariants}
      initial="initial"
      animate="animate"
      style={{
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient orbits */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),transparent_55%)]" />
      </div>

      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex h-full w-full flex-col gap-3 sm:gap-4"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between rounded-xl border border-slate-700/70 bg-slate-900/80 px-3.5 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-[0.6rem] font-semibold text-slate-950 shadow-glow-primary">
              AI
            </span>
            <div className="flex flex-col">
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                Timeline
              </span>
              <span className="text-xs text-slate-100">Episode 14 – Clip set</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[0.7rem] text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            <span className="numeric">Auto-cut in progress</span>
          </div>
        </div>

        {/* Middle layout: large central canvas, timeline, right sidebar */}
        <div className="grid flex-1 grid-cols-[minmax(0,1.8fr)_minmax(0,1.1fr)] gap-3 sm:gap-4">
          {/* Center editor area */}
          <div className="relative flex flex-col gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3 sm:p-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(109,93,246,0.35),transparent_55%)] opacity-80" />
            <div className="relative flex h-full flex-col gap-3">
              {/* Template meta */}
              <div className="flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-1 text-[0.65rem] text-slate-200 border border-slate-700/80">
                  <LayoutTemplate className="h-3 w-3 text-secondary" />
                  Template: <span className="numeric">Vertical Split</span>
                </span>
                <span className="numeric rounded-full bg-slate-950/70 px-2 py-1 text-[0.6rem] text-slate-300 border border-slate-700/80">
                  9:16 • 0:30
                </span>
              </div>

              {/* Large centered phone canvas */}
              <div className="relative flex flex-1 items-center justify-center">
                <div className="relative aspect-[9/16] w-[64%] sm:w-[60%] md:w-[56%] lg:w-[52%] overflow-hidden rounded-[1.25rem] border border-white/15 bg-slate-900/90 shadow-soft-elevated">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,118,255,0.55),transparent_60%)] opacity-80" />
                  <div className="relative flex h-full w-full flex-col justify-between p-3">
                    <div className="flex flex-col gap-2">
                      <div className="h-7 w-[78%] rounded-xl bg-gradient-to-r from-primary/90 to-secondary/80" />
                      <div className="h-3 w-[56%] rounded-md bg-slate-800/90" />
                      <div className="mt-2 grid grid-cols-3 gap-1.5">
                        <div className="h-7 rounded-lg bg-slate-800/90" />
                        <div className="h-7 rounded-lg bg-slate-800/70" />
                        <div className="h-7 rounded-lg bg-slate-800/50" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-2.5 w-20 rounded-full bg-secondary/80" />
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-12 rounded-full bg-slate-700/80" />
                        <span className="h-1.5 w-6 rounded-full bg-slate-700/60" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-track timeline */}
              <div className="rounded-xl border border-slate-700/70 bg-slate-950/90 px-3 py-3.5">
                <div className="mb-2 flex items-center justify-between text-[0.65rem] text-slate-400">
                  <span className="numeric uppercase tracking-[0.2em]">
                    Timeline
                  </span>
                  <span>00:00 — 00:30</span>
                </div>

                {/* Time ruler / playhead */}
                <div className="relative mb-3 h-6">
                  <div className="absolute inset-y-0 left-0 w-full rounded-full bg-slate-900/80 border border-slate-700/80" />
                  <div className="absolute inset-y-1 left-6 w-[68%] rounded-full bg-gradient-to-r from-primary/60 via-secondary/50 to-accent/60" />
                  <div className="absolute inset-y-0 left-1/3 w-px bg-secondary" />
                </div>

                {/* Tracks */}
                <div className="space-y-1.5 text-[0.65rem]">
                  {[
                    { label: "Video", color: "from-primary/80 to-secondary/70" },
                    {
                      label: "Captions",
                      color: "from-emerald-500/80 to-emerald-400/70",
                    },
                    {
                      label: "Overlays",
                      color: "from-sky-500/70 to-sky-400/60",
                    },
                  ].map((track) => (
                    <div key={track.label} className="flex items-center gap-2">
                      <span className="w-16 shrink-0 text-[0.6rem] text-slate-400 uppercase tracking-[0.16em]">
                        {track.label}
                      </span>
                      <div className="relative flex-1 h-4 rounded-full bg-slate-900/80 border border-slate-800/80 overflow-hidden">
                        <div
                          className={cn(
                            "absolute inset-y-0 left-[6%] w-[32%] rounded-full bg-gradient-to-r",
                            track.color
                          )}
                        />
                        <div
                          className={cn(
                            "absolute inset-y-0 left-[42%] w-[28%] rounded-full bg-gradient-to-r opacity-80",
                            track.color
                          )}
                        />
                        <div
                          className={cn(
                            "absolute inset-y-0 left-[72%] w-[18%] rounded-full bg-gradient-to-r opacity-70",
                            track.color
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar: scenes, outputs, stats */}
          <div className="flex flex-col gap-3.5 text-[0.7rem] text-slate-200">
            {/* Scenes sidebar */}
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-3.5">
              <div className="mb-2 flex items-center justify-between text-[0.65rem] text-slate-400">
                <span className="numeric uppercase tracking-[0.2em]">
                  Scenes
                </span>
                <span>AI picks</span>
              </div>
              <div className="space-y-2">
                {["Hook", "Value", "CTA"].map((label, idx) => (
                  <div
                    key={label}
                    className={cn(
                      "rounded-lg border border-slate-700/70 bg-slate-900/80 px-3 py-2.5",
                      idx === 0 && "border-secondary/80 bg-secondary/10"
                    )}
                  >
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="numeric text-[0.6rem] text-slate-400">
                          0{idx + 1}
                        </span>
                        <span>{label}</span>
                      </div>
                      <span className="numeric text-[0.6rem] text-slate-400 sm:text-right mt-0.5 sm:mt-0">
                        {idx === 0
                          ? "0:00–0:06"
                          : idx === 1
                          ? "0:06–0:18"
                          : "0:18–0:30"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outputs */}
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-3.5">
              <div className="mb-2 flex items-center justify-between text-[0.65rem] text-slate-400">
                <span className="numeric uppercase tracking-[0.2em]">
                  Outputs
                </span>
                <span>4 canvases</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["9:16", "16:9", "1:1", "4:5"].map((size, i) => (
                  <div
                    key={size}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-2.5 py-2 border border-slate-700/60 bg-slate-900/80",
                      i === 0 && "border-secondary/80 bg-secondary/10"
                    )}
                  >
                    <span className="numeric text-[0.65rem]">{size}</span>
                    <span className="h-1.5 w-5 rounded-full bg-slate-700/80" />
                  </div>
                ))}
              </div>
            </div>

            {/* Compact stats row */}
            <div className="grid gap-3 sm:grid-cols-2">
              <motion.div
                className="card-floating relative flex flex-col gap-2 rounded-xl border border-slate-700/70 bg-slate-950/90 p-3"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center justify-between text-[0.7rem] text-slate-300">
                  <span className="inline-flex items-center gap-1 text-secondary">
                    <Zap className="h-3.5 w-3.5" />
                    Render queue
                  </span>
                  <span className="numeric text-[0.65rem] text-slate-400">
                    Live
                  </span>
                </div>
                <div className="space-y-1.5 text-[0.7rem]">
                  <div className="flex items-center justify-between">
                    <span>Average edit time</span>
                    <span className="numeric text-slate-100">12 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Exports / week</span>
                    <span className="numeric text-emerald-400">+4.2x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Approval rate</span>
                    <span className="numeric text-sky-300">97%</span>
                  </div>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-900">
                  <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
                </div>
              </motion.div>

              <motion.div
                className="card-floating relative flex flex-col gap-2 rounded-xl border border-slate-700/70 bg-slate-950/90 p-3"
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center justify-between text-[0.7rem] text-slate-300">
                  <span>Channels</span>
                  <span className="numeric text-[0.65rem] text-slate-400">
                    Synced
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[0.6rem]">
                  {["YouTube", "TikTok", "Reels", "Shorts", "LinkedIn"].map(
                    (platform) => (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-1 text-slate-200"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span className="numeric">{platform}</span>
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </MotionCardDiv>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="section pt-10 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="app-container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
        <motion.div
          className="space-y-6 sm:space-y-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            custom={0}
            variants={staggeredVariants}
            className="inline-flex items-center gap-2 rounded-pill border border-primary/40 bg-primary/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-primary/80"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-[0.6rem] text-slate-900">
              ★
            </span>
            <span className="numeric">
              AI video automation for template-first teams
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            custom={1}
            variants={staggeredVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-semibold font-heading tracking-tight leading-tight"
          >
            Turn raw footages into{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              channel-ready videos
            </span>{" "}
            in minutes, not days.
          </motion.h1>

          <motion.p
            custom={2}
            variants={staggeredVariants}
            className="max-w-xl text-sm sm:text-base text-muted-foreground"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            custom={3}
            variants={staggeredVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <Button size="lg" className="gap-2">
                <span>{SITE.primaryCTA}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="gap-2"
                aria-label={SITE.secondaryCTA}
              >
                <Play className="h-4 w-4" />
                <span>{SITE.secondaryCTA}</span>
              </Button>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <div className="relative flex -space-x-2">
                {["AR", "ML", "JC"].map((initials) => (
                  <div
                    key={initials}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-gradient-to-br from-slate-700 to-slate-900 text-[0.65rem] font-medium text-slate-50"
                  >
                    {initials}
                  </div>
                ))}
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-slate-900/80 text-[0.65rem] font-medium text-slate-300">
                  +
                </div>
              </div>
              <span className="text-[0.7rem] leading-tight text-slate-300">
                <span className="numeric font-semibold text-slate-50">
                  Creators & teams
                </span>{" "}
                ship on-brand clips 4x faster.
              </span>
            </div>
          </motion.div>

          <motion.ul
            custom={4}
            variants={staggeredVariants}
            className="mt-2 grid gap-2 text-xs text-slate-300 sm:grid-cols-3"
          >
            {HERO_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-slate-800/70 bg-slate-950/80 px-3 py-2"
              >
                <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <p>{item}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="relative order-first lg:order-last flex justify-center">
          {/* Vaporwave lines / grid */}
          <div className="pointer-events-none absolute -inset-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.25),transparent_55%)] opacity-60" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:100%_24px,24px_100%] opacity-25" />
          </div>
          <HeroTemplateStack />
        </div>
      </div>
    </section>
  );
}
