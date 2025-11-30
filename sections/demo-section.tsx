"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { DEMO_STATES } from "@/constants/site";
import { SectionHeader } from "@/components/section-header";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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
      delay: 0.12 + i * 0.08,
      duration: 0.55,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  }),
};

export function DemoSection() {
  const [activeId, setActiveId] = React.useState<"before" | "after">("after");

  return (
    <section id="demo" className="section" aria-labelledby="demo-heading">
      <div className="app-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px" }}
        >
          <SectionHeader
            eyebrow="Before vs After AI"
            title="See the workflow shift in one glance."
            description="Move from manual timelines and scattered exports to a template-led, AI-coordinated pipeline that ships across every channel at once."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {DEMO_STATES.map((state, index) => {
              const isActive = state.id === activeId;
              return (
                <motion.article
                  key={state.id}
                  custom={index}
                  variants={cardVariants}
                  className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-[1px]"
                  onMouseEnter={() => setActiveId(state.id)}
                  onFocus={() => setActiveId(state.id)}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(109,93,246,0.25),transparent_55%)] opacity-0 transition-opacity duration-300" />
                  <div
                    className={
                      "relative flex h-full flex-col gap-4 rounded-[1.1rem] px-4 py-4 sm:px-5 sm:py-5 " +
                      (isActive
                        ? "bg-gradient-to-br from-primary/15 via-slate-950 to-secondary/15 shadow-[0_0_35px_rgba(109,93,246,0.55)]"
                        : "bg-slate-950/95")
                    }
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-900/90 px-2.5 py-1 text-[0.7rem] text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                          <span className="numeric uppercase tracking-[0.22em] text-[0.62rem]">
                            {state.label}
                          </span>
                        </span>
                        <h3 className="text-sm sm:text-base font-medium text-slate-50">
                          {state.description}
                        </h3>
                      </div>
                      <div className="hidden sm:flex flex-col items-end text-[0.7rem] text-slate-400">
                        <span className="numeric">
                          {state.id === "before" ? "Manual" : "Automated"} flow
                        </span>
                        <span className="mt-1 inline-flex h-1.5 w-12 overflow-hidden rounded-full bg-slate-800">
                          <span
                            className={
                              "h-full rounded-full bg-gradient-to-r " +
                              (state.id === "before"
                                ? "from-rose-500 via-amber-500 to-yellow-400"
                                : "from-emerald-400 via-secondary to-primary")
                            }
                            style={{ width: state.id === "before" ? "40%" : "80%" }}
                          />
                        </span>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                      <div className="relative rounded-xl border border-slate-800/80 bg-slate-950/90 p-3">
                        <div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-300">
                          <span>Timeline</span>
                          <span className="numeric text-slate-400">
                            {state.id === "before"
                              ? "Manual cuts & tracks"
                              : "AI-selected hooks"}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {state.metrics.map((metric) => (
                            <div
                              key={metric}
                              className="flex items-center gap-2 rounded-lg border border-slate-800/80 bg-slate-900/90 px-2 py-1.5"
                            >
                              <div className="h-1.5 flex-1 rounded-full bg-slate-800 overflow-hidden">
                                <div
                                  className={
                                    "h-full rounded-full " +
                                    (state.id === "before"
                                      ? "bg-gradient-to-r from-rose-500 via-amber-500 to-yellow-400"
                                      : "bg-gradient-to-r from-emerald-400 via-secondary to-primary")
                                  }
                                  style={{
                                    width:
                                      state.id === "before"
                                        ? "45%"
                                        : "80%",
                                  }}
                                />
                              </div>
                              <span className="numeric text-[0.65rem] text-slate-300">
                                {metric}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="relative rounded-xl border border-slate-800/80 bg-slate-950/90 p-3">
                          <div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-300">
                            <span>
                              {state.id === "before"
                                ? "Channel outputs"
                                : "Channel-ready exports"}
                            </span>
                            <span className="numeric text-slate-400">
                              {state.id === "before" ? "Per-platform" : "Parallel"}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              "YouTube",
                              "Shorts",
                              "Reels",
                              "TikTok",
                              "LinkedIn",
                              "X",
                            ].map((channel) => (
                              <div
                                key={channel}
                                className={
                                  "flex items-center justify-between rounded-lg border px-2 py-1.5 text-[0.68rem] " +
                                  (state.id === "before"
                                    ? "border-slate-800/80 bg-slate-950"
                                    : "border-secondary/70 bg-secondary/10")
                                }
                              >
                                <span className="text-slate-300">{channel}</span>
                                <span className="numeric text-[0.62rem] text-slate-400">
                                  {state.id === "before" ? "Manual" : "Auto"}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-950/90 px-3 py-2 text-[0.7rem] text-slate-300">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span className="numeric">
                              {state.id === "before"
                                ? "3–5 hours / video"
                                : "8–12 minutes / video"}
                            </span>
                          </span>
                          <span className="text-slate-400">
                            {state.id === "before"
                              ? "Fragmented, linear workflow"
                              : "Template-led, parallel workflow"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
