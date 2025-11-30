"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  UploadCloud,
  Sparkles,
  Rocket,
  Wand2,
  PlaySquare,
  Timer,
} from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/constants/site";
import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.5,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  }),
};

const illustrationVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.18,
      duration: 0.7,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  },
};

const stepIcons: Record<number, React.ReactNode> = {
  1: <UploadCloud className="h-4.5 w-4.5 text-secondary" />,
  2: <Sparkles className="h-4.5 w-4.5 text-primary" />,
  3: <Rocket className="h-4.5 w-4.5 text-accent" />,
};

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section"
      aria-labelledby="how-it-works-heading"
    >
      <div className="app-container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
        <motion.div
          className="space-y-7"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px" }}
        >
          <SectionHeader
            eyebrow="Workflow"
            title="Three steps from raw timeline to auto-posted content."
            description="Give the AI your source material and brand rules once—let it handle the timeline, captions, voiceover and multi-canvas exports for every channel."
            align="left"
          />

          <ol className="space-y-4">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <motion.li
                key={step.id}
                custom={index}
                variants={stepVariants}
                className="group relative flex gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/80 px-4 py-3.5 sm:px-5 sm:py-4"
              >
                {/* Timeline rail */}
                <div className="relative flex flex-col items-center">
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/80 shadow-soft-elevated">
                    <span className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-lg bg-slate-950/90">
                      <span className="numeric text-[0.65rem] text-slate-200">
                        0{step.id}
                      </span>
                    </span>
                  </div>
                  {index < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="mt-2 h-full w-px flex-1 bg-gradient-to-b from-primary/50 via-secondary/40 to-slate-800/0" />
                  )}
                </div>

                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-900/80 px-2.5 py-1 text-[0.7rem] text-slate-300">
                      {stepIcons[step.id] ?? (
                        <Wand2 className="h-4.5 w-4.5 text-secondary" />
                      )}
                      <span className="numeric uppercase tracking-[0.22em] text-[0.62rem] text-slate-400">
                        {step.label}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[0.68rem] text-slate-400">
                      <Timer className="h-3.5 w-3.5 text-secondary/80" />
                      <span className="numeric">~{4 * (index + 1)} min</span>
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-slate-50">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        {/* Animated illustration / placeholder */}
        <motion.div
          className="relative"
          variants={illustrationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px" }}
        >
          <div className="pointer-events-none absolute -inset-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(109,93,246,0.3),transparent_55%)] opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(10,226,255,0.3),transparent_55%)] opacity-60" />
          </div>

          <div className="relative glass-panel p-4 sm:p-5 md:p-6 overflow-hidden">
            <div className="mb-4 flex items-center justify-between text-[0.7rem] text-slate-300">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1 border border-slate-700/70">
                <PlaySquare className="h-3.5 w-3.5 text-secondary" />
                <span className="numeric uppercase tracking-[0.2em]">
                  Workflow preview
                </span>
              </span>
              <span className="numeric text-slate-400">Template • Multi-canvas</span>
            </div>

            <div className="grid gap-3 md:grid-cols-[1.4fr_1fr]">
              {/* Left: timeline */}
              <div className="relative rounded-xl border border-slate-700/70 bg-slate-950/90 p-3">
                <div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-300">
                  <span>Episode timeline</span>
                  <span className="numeric text-[0.65rem] text-slate-400">
                    AI-selected hooks
                  </span>
                </div>
                <div className="space-y-2">
                  {["Raw import", "AI detection", "Template mapping"].map(
                    (label, index) => (
                      <div
                        key={label}
                        className="flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/80 px-2 py-1.5"
                      >
                        <div className="h-1.5 flex-1 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                            style={{ width: `${40 + index * 18}%` }}
                          />
                        </div>
                        <span className="numeric text-[0.65rem] text-slate-300">
                          {label}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Right: scene cards */}
              <div className="space-y-2.5">
                {[
                  {
                    title: "Hook clip",
                    subtitle: "Auto-cut + captions",
                    tone: "primary",
                  },
                  {
                    title: "Mid-roll",
                    subtitle: "Brand overlays",
                    tone: "secondary",
                  },
                  {
                    title: "CTA scene",
                    subtitle: "Auto-generated text",
                    tone: "accent",
                  },
                ].map((scene) => (
                  <div
                    key={scene.title}
                    className="flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-950/90 px-2.5 py-2"
                  >
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 border border-slate-700/70",
                        scene.tone === "primary" &&
                          "bg-gradient-to-br from-primary/30 to-slate-900 border-primary/70",
                        scene.tone === "secondary" &&
                          "bg-gradient-to-br from-secondary/30 to-slate-900 border-secondary/70",
                        scene.tone === "accent" &&
                          "bg-gradient-to-br from-accent/30 to-slate-900 border-accent/70"
                      )}
                    >
                      <span className="h-3 w-3 rounded-[0.35rem] border border-white/20 bg-slate-950/90" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[0.78rem] text-slate-100">
                        {scene.title}
                      </p>
                      <p className="text-[0.65rem] text-slate-400">
                        {scene.subtitle}
                      </p>
                    </div>
                    <span className="numeric text-[0.65rem] text-slate-400">
                      0:10
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-[0.68rem] text-slate-300">
              <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 border border-slate-700/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="numeric">
                  4x faster from record to publish
                </span>
              </div>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="text-slate-400">
                Before/after results update live as you tweak the template.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
