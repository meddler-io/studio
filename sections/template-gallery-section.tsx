 // @ts-nocheck
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { TEMPLATE_GALLERY } from "@/constants/site";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  },
};

const carouselVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.18,
      duration: 0.6,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  },
};

function TemplateThumbnail({ item }: { item: any }) {
  // Hook-first Reel: vertical phone + mini timeline with multiple tracks
  if (item.id === "hook-reel") {
    return (
      <div className="relative mt-1 rounded-xl border border-slate-700/70 bg-slate-900/90 p-2">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-[0.65rem] text-slate-300">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="numeric uppercase tracking-[0.18em]">
                Hook-first layout
              </span>
            </span>
            <span className="numeric text-slate-400">{item.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            {/* phone canvas */}
            <div className="relative aspect-[9/16] w-[42%] overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/90">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,118,255,0.55),transparent_60%)] opacity-70" />
              <div className="relative flex h-full w-full flex-col justify-between p-2">
                <div className="space-y-1.5">
                  <div className="h-3.5 w-[80%] rounded-md bg-gradient-to-r from-primary/90 to-secondary/80" />
                  <div className="h-2.5 w-[60%] rounded-md bg-slate-800/90" />
                </div>
                <div className="mt-1 grid grid-cols-3 gap-1">
                  <div className="h-6 rounded-md bg-slate-800/90" />
                  <div className="h-6 rounded-md bg-slate-800/70" />
                  <div className="h-6 rounded-md bg-slate-800/50" />
                </div>
                <div className="flex items-center justify-between pt-1.5">
                  <div className="h-1.5 w-12 rounded-full bg-secondary/80" />
                  <div className="flex items-center gap-1">
                    <span className="h-1 w-8 rounded-full bg-slate-700/80" />
                    <span className="h-1 w-4 rounded-full bg-slate-700/60" />
                  </div>
                </div>
              </div>
            </div>

            {/* mini timeline with multiple tracks */}
            <div className="flex-1 space-y-1.5 text-[0.6rem]">
              <div className="relative h-4 rounded-full bg-slate-950/90 border border-slate-800/80 overflow-hidden">
                <div className="absolute inset-y-0 left-[8%] w-[26%] rounded-full bg-gradient-to-r from-primary/80 to-secondary/70" />
                <div className="absolute inset-y-0 left-[40%] w-[22%] rounded-full bg-gradient-to-r from-primary/70 to-secondary/60 opacity-80" />
                <div className="absolute inset-y-0 left-[68%] w-[18%] rounded-full bg-gradient-to-r from-primary/60 to-secondary/50 opacity-70" />
              </div>
              <div className="space-y-1">
                {["Captions", "Overlays"].map((track, idx) => (
                  <div key={track} className="flex items-center gap-1.5">
                    <span className="w-14 shrink-0 text-[0.55rem] uppercase tracking-[0.16em] text-slate-500">
                      {track}
                    </span>
                    <div className="relative h-3 flex-1 rounded-full bg-slate-900/90 border border-slate-800/80 overflow-hidden">
                      <div
                        className={
                          "absolute inset-y-0 rounded-full " +
                          (idx === 0
                            ? "left-[10%] w-[40%] bg-gradient-to-r from-emerald-500/80 to-emerald-400/70"
                            : "left-[35%] w-[30%] bg-gradient-to-r from-sky-500/80 to-sky-400/70")
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Talking head: wide canvas + transcript / comments sidebar
  if (item.id === "talking-head") {
    return (
      <div className="relative mt-1 rounded-xl border border-slate-700/70 bg-slate-900/90 p-2">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-950/90">
          <div className="relative flex h-full w-full gap-2 p-2">
            <div className="relative flex-1 rounded-lg bg-slate-900/90 border border-slate-800/80">
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-primary/30 via-transparent to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-2">
                <div className="h-4 w-16 rounded-full bg-slate-800/90" />
                <div className="space-y-1.5">
                  <div className="h-2 w-[80%] rounded-full bg-slate-800/80" />
                  <div className="h-2 w-[60%] rounded-full bg-slate-800/70" />
                </div>
              </div>
            </div>
            <div className="flex w-[38%] flex-col gap-1.5 rounded-lg bg-slate-900/90 border border-slate-800/80 p-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-md bg-slate-950/80 px-2 py-1.5 text-[0.6rem] text-slate-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="h-1.5 w-10 rounded-full bg-slate-700/80" />
                    <span className="numeric text-[0.55rem] text-slate-500">
                      0{i}:0{i * 2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Podcast carousel: stacked clips + progress timeline
  if (item.id === "podcast-carousel") {
    return (
      <div className="relative mt-1 rounded-xl border border-slate-700/70 bg-slate-900/90 p-2">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[0.65rem] text-slate-300">
            <span>Episode highlights</span>
            <span className="numeric text-slate-400">4 clips</span>
          </div>
          <div className="grid gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-md bg-slate-950/90 border border-slate-800/80 px-2 py-1.5"
              >
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-slate-800/80" />
                  <div className="space-y-1">
                    <div className="h-1.5 w-16 rounded-full bg-slate-700/80" />
                    <div className="h-1.5 w-10 rounded-full bg-slate-800/70" />
                  </div>
                </div>
                <span className="numeric text-[0.6rem] text-slate-400">
                  0{i}:1{i}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-950">
            <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
          </div>
        </div>
      </div>
    );
  }

  // Product showcase: grid of canvases / product tiles
  if (item.id === "product-showcase") {
    return (
      <div className="relative mt-1 rounded-xl border border-slate-700/70 bg-slate-900/90 p-2">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-950/90 p-2">
          <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-1.5">
            <div className="col-span-2 row-span-2 rounded-lg bg-slate-900/90 border border-slate-800/80 p-2">
              <div className="h-3 w-[70%] rounded-full bg-gradient-to-r from-primary/80 to-secondary/70" />
              <div className="mt-2 h-2 w-[50%] rounded-full bg-slate-800/80" />
              <div className="mt-3 h-6 w-[80%] rounded-md bg-slate-800/80" />
            </div>
            <div className="rounded-lg bg-slate-900/80 border border-slate-800/80" />
            <div className="rounded-lg bg-slate-900/80 border border-slate-800/80" />
            <div className="rounded-lg bg-slate-900/80 border border-slate-800/80" />
          </div>
        </div>
      </div>
    );
  }

  // Comparison split: before/after canvas
  if (item.id === "comparison-split") {
    return (
      <div className="relative mt-1 rounded-xl border border-slate-700/70 bg-slate-900/90 p-2">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-950/90">
          <div className="relative flex h-full w-full">
            <div className="flex-1 border-r border-slate-800/80 bg-slate-900/90 p-2">
              <div className="flex items-center justify-between text-[0.6rem] text-slate-400">
                <span className="uppercase tracking-[0.16em]">Before</span>
                <span className="h-1.5 w-6 rounded-full bg-rose-500/70" />
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="h-2 w-[80%] rounded-full bg-slate-800/80" />
                <div className="h-2 w-[60%] rounded-full bg-slate-800/70" />
              </div>
            </div>
            <div className="flex-1 bg-slate-900/90 p-2">
              <div className="flex items-center justify-between text-[0.6rem] text-slate-400">
                <span className="uppercase tracking-[0.16em]">After</span>
                <span className="h-1.5 w-6 rounded-full bg-emerald-400/80" />
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="h-2 w-[80%] rounded-full bg-gradient-to-r from-primary/80 via-secondary/70 to-accent/70" />
                <div className="h-2 w-[60%] rounded-full bg-slate-800/80" />
              </div>
            </div>
            <div className="absolute inset-y-3 left-1/2 w-px bg-slate-700/80" />
          </div>
        </div>
      </div>
    );
  }

  // Facecam gaming: timeline + overlay track + webcam
  if (item.id === "facecam-gaming") {
    return (
      <div className="relative mt-1 rounded-xl border border-slate-700/70 bg-slate-900/90 p-2">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-950/90 p-2">
          <div className="relative flex h-full w-full flex-col gap-2">
            <div className="flex items-start gap-2">
              <div className="relative flex-1 rounded-lg bg-slate-900/90 border border-slate-800/80">
                <div className="absolute bottom-2 left-2 h-10 w-14 rounded-md bg-slate-800/90 border border-slate-700/80" />
                <div className="absolute top-2 right-2 h-2.5 w-10 rounded-full bg-slate-800/80" />
              </div>
              <div className="w-14 space-y-1.5">
                <div className="h-4 w-full rounded-md bg-slate-800/80" />
                <div className="h-4 w-full rounded-md bg-slate-800/70" />
                <div className="h-4 w-full rounded-md bg-slate-800/60" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="h-2 rounded-full bg-slate-900/90 border border-slate-800/80 overflow-hidden">
                <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-primary/80 via-secondary/70 to-accent/70" />
              </div>
              <div className="h-3 rounded-full bg-slate-900/90 border border-slate-800/80 overflow-hidden">
                <div className="h-full w-[30%] rounded-full bg-gradient-to-r from-emerald-500/80 to-emerald-400/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback generic thumbnail
  return (
    <div className="relative mt-1 rounded-xl border border-slate-700/70 bg-slate-900/90 p-2">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-950/80">
        <div className="relative flex h-full w-full flex-col justify-between p-2">
          <div className="space-y-1.5">
            <div className="h-3.5 w-[70%] rounded-md bg-gradient-to-r from-primary/80 via-secondary/70 to-accent/70" />
            <div className="h-2.5 w-[55%] rounded-md bg-slate-800/90" />
          </div>
          <div className="mt-2 flex items-end justify-between gap-2">
            <div className="space-y-1">
              <div className="h-2 w-14 rounded-full bg-secondary/80" />
              <div className="flex gap-1">
                <div className="h-1.5 w-8 rounded-full bg-slate-700/80" />
                <div className="h-1.5 w-4 rounded-full bg-slate-700/60" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-5 w-7 rounded-md bg-slate-800/80" />
              <div className="h-5 w-7 rounded-md bg-slate-800/60" />
              <div className="h-5 w-7 rounded-md bg-slate-800/60" />
              <div className="h-5 w-7 rounded-md bg-slate-800/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TemplateGallerySection() {
  return (
    <section
      id="templates"
      className="section"
      aria-labelledby="templates-heading"
    >
      <div className="app-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px" }}
        >
          <SectionHeader
            eyebrow="Templates"
            title="Template-first canvas for every channel."
            description="Save your best-performing layouts as reusable templates—AI slots in scenes, captions, overlays, and CTAs for each new episode."
          />

          <motion.div
            variants={carouselVariants}
            className="mt-8 relative overflow-hidden rounded-[1.5rem] border border-slate-800/70 bg-slate-950/80 px-3 py-4 sm:px-4 sm:py-5"
          >
            {/* ambient background */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.26),transparent_55%)] opacity-60" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:100%_26px,26px_100%] opacity-20" />
            </div>

            <div className="relative flex items-center justify-between px-1 pb-3 text-[0.7rem] text-slate-300">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1 border border-slate-700/70">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                <span className="numeric uppercase tracking-[0.2em]">
                  Drag to browse templates
                </span>
              </span>
              <span className="hidden sm:inline numeric text-slate-400">
                {TEMPLATE_GALLERY.length} presets • vertical & horizontal
              </span>
            </div>

            <div className="-mx-1 sm:-mx-2 md:-mx-3 overflow-x-auto pb-2">
              <motion.div className="flex gap-3 sm:gap-4 md:gap-5 px-1 sm:px-2 md:px-3">
                {TEMPLATE_GALLERY.map((item) => (
                  <motion.div
                    key={item.id}
                    className="group relative min-w-[240px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[320px] overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/90"
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex flex-col gap-3 p-3.5 sm:p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-xs font-medium text-slate-50">
                            {item.name ?? item.label}
                          </p>
                          <p className="text-[0.7rem] text-slate-400">
                            {item.description ?? item.category}
                          </p>
                        </div>
                        <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/90 px-2 py-0.5 text-[0.65rem] text-slate-300">
                          <span className="numeric">
                            {item.aspect ?? "9:16"}
                          </span>
                        </span>
                      </div>

                      {/* thumbnail */}
                      <TemplateThumbnail item={item} />

                      <div className="mt-2 flex items-center justify-between text-[0.65rem] text-slate-400">
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1 w-4 rounded-full bg-primary/80" />
                          <span className="numeric">
                            {item.channels ?? "Multi-channel"}
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span className="numeric">
                            {item.automationTag ?? "AI-assisted layout"}
                          </span>
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[0.68rem] text-slate-400">
                        <span className="numeric">
                          {item.badge ?? `${item.category} • ${item.duration}`}
                        </span>
                        <span className="text-slate-500">
                          Hover to preview animation
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
