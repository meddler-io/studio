"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SITE } from "@/constants/site";
import { Button } from "@/ui/button";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  },
};

const glowVariants = {
  initial: { opacity: 0.4, scale: 0.98 },
  animate: {
    opacity: 0.8,
    scale: 1.02,
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export function FinalCtaSection() {
  return (
    <section
      id="get-started"
      className="section pb-20"
      aria-labelledby="final-cta-heading"
    >
      <div className="app-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px" }}
          className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/90 px-5 py-10 sm:px-10 sm:py-12"
        >
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className="pointer-events-none absolute inset-0 opacity-60"
          >
            <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute bottom-0 right-[-40px] h-64 w-64 rounded-full bg-secondary/25 blur-3xl" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-60" />
          </motion.div>

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_16px_rgba(109,93,246,0.9)]" />
                <span className="numeric">Ready when your next video is</span>
              </div>
              <h2
                id="final-cta-heading"
                className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
              >
                Turn your raw footage into a channel-native system.
              </h2>
              <p className="max-w-lg text-sm text-slate-300 sm:text-[0.95rem]">
                Plug {SITE.appName} into your existing recording workflow and let
                templates, captions, voiceover and multi-canvas exports handle
                the repetitive edits in the background.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:items-end">
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-[0.78rem] font-medium uppercase tracking-[0.18em] text-slate-950 shadow-glow-primary hover:opacity-90">
                  {SITE.primaryCTA}
                </Button>
                <Button
                  variant="ghost"
                  className="w-full sm:w-auto border border-slate-700/80 bg-slate-900/70 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-slate-100 hover:border-secondary/70 hover:text-secondary"
                >
                  {SITE.secondaryCTA}
                </Button>
              </div>
              <p className="text-[0.7rem] text-slate-400">
                No credit card required · Cancel anytime · Built for modern teams
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
