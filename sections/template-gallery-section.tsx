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

export function TemplateGallerySection() {
  const constraintsRef = React.useRef<HTMLDivElement | null>(null);

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
            ref={constraintsRef}
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

            <motion.div
              className="flex gap-4 sm:gap-5"
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0.12}
              dragTransition={{ power: 0.2, timeConstant: 200 }}
            >
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
                          {item.name}
                        </p>
                        <p className="text-[0.7rem] text-slate-400">
                          {item.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/90 px-2 py-0.5 text-[0.65rem] text-slate-300">
                        <span className="numeric">{item.aspect}</span>
                      </span>
                    </div>

                    {/* thumbnail */}
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
                      <div className="mt-2 flex items-center justify-between text-[0.65rem] text-slate-400">
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1 w-4 rounded-full bg-primary/80" />
                          <span className="numeric">{item.channels}</span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span className="numeric">
                            {item.automationTag}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[0.68rem] text-slate-400">
                      <span className="numeric">{item.badge}</span>
                      <span className="text-slate-500">
                        Hover to preview animation
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
