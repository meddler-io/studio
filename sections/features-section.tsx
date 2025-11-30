"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FEATURE_CARDS } from "@/constants/site";
import { SectionHeader } from "@/components/section-header";

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

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.05,
      duration: 0.45,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  }),
};

// Loosen typing for the motion.article wrapper to avoid TS framer-motion friction.
const MotionFeatureCard = motion.article as React.ComponentType<any>;

function FeatureIcon({ id }: { id: string }) {
  const label =
    id === "template-engine"
      ? "AI"
      : id === "motion-captioning"
      ? "CC"
      : id === "transcription"
      ? "TX"
      : id === "placeholder-automation"
      ? "FX"
      : id === "voiceover"
      ? "VO"
      : id === "audio-mixing"
      ? "MX"
      : id === "multi-canvas"
      ? "9:16"
      : id === "auto-posting"
      ? "↗"
      : "•";

  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/30 text-[0.7rem] font-semibold text-slate-950 shadow-glow-primary">
      <span className="numeric">{label}</span>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="section"
      aria-labelledby="features-heading"
    >
      <div className="app-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px" }}
        >
          <SectionHeader
            eyebrow="Features"
            title="Everything you need to ship channel-native video at scale."
            description="From template logic to captions, voiceover and multi-canvas renders, the stack is built for teams who treat video as a system—not one‑off edits."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURE_CARDS.map((feature, index) => (
              <MotionFeatureCard
                key={feature.id}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/80 p-[1px] shadow-[0_0_0_rgba(15,23,42,0.0)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(109,93,246,0.18),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-2.5 rounded-[1.05rem] bg-slate-950/95 px-4 py-3.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <FeatureIcon id={feature.id} />
                      <div className="flex flex-col">
                        <h3 className="text-sm font-medium text-slate-50">
                          {feature.name}
                        </h3>
                        {feature.badge ? (
                          <span className="mt-0.5 inline-flex w-fit rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.18em] text-secondary border border-secondary/50">
                            {feature.badge}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-[0.8rem] text-slate-400">
                    {feature.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-2 text-[0.65rem] text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      <span className="numeric">Template-ready</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <span className="h-1 w-4 rounded-full bg-slate-700/80" />
                      <span className="h-1 w-2 rounded-full bg-slate-800/80" />
                    </span>
                  </div>
                </div>
              </MotionFeatureCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
