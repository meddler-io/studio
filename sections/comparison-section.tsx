"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { COMPARISON_PRODUCTS } from "@/constants/site";

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

const tableVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.16,
      duration: 0.55,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  },
};

// Loosen typing for this motion.div container to avoid TS friction while keeping runtime behavior.
const MotionTableContainer = motion.div as React.ComponentType<any>;

export function ComparisonSection() {
  const categories: string[] = React.useMemo(
    () =>
      COMPARISON_PRODUCTS[0]?.metrics.map((m) => m.category) ?? [
        "AI templating",
        "Automation",
        "Brand systems",
        "Multi-canvas",
      ],
    []
  );

  return (
    <section
      id="comparison"
      className="section"
      aria-labelledby="comparison-heading"
    >
      <div className="app-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px" }}
        >
          <SectionHeader
            eyebrow="Why this stack"
            title="Built for teams who treat video as a system."
            description="Compare how traditional editors stack up against template-led, automation-first workflows designed for multi-channel content."
          />

          <MotionTableContainer
            variants={tableVariants}
            className="mt-8 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80"
          >
            <div className="relative">
              {/* background glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(109,93,246,0.3),transparent_60%)] opacity-60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(10,226,255,0.24),transparent_60%)] opacity-40" />
              </div>

              <div className="relative overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-800/80 bg-slate-950/90">
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                        Category
                      </th>
                      {COMPARISON_PRODUCTS.map((product) => (
                        <th
                          key={product.name}
                          className="px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.18em]"
                        >
                          <span
                            className={
                              product.isOurProduct
                                ? "inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary/70 to-secondary/70 px-3 py-1 text-[0.7rem] text-slate-950"
                                : "text-slate-400"
                            }
                          >
                            {product.isOurProduct && (
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            )}
                            {product.name}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr
                        key={category}
                        className="border-b border-slate-800/70 last:border-none"
                      >
                        <td className="px-4 py-3 align-top text-xs font-medium text-slate-300">
                          {category}
                        </td>
                        {COMPARISON_PRODUCTS.map((product) => {
                          const metric = product.metrics.find(
                            (m) => m.category === category
                          );
                          const isHighlight = product.isOurProduct;
                          return (
                            <td
                              key={product.name}
                              className="px-4 py-3 align-top text-xs text-slate-300"
                            >
                              <div
                                className={
                                  isHighlight
                                    ? "relative rounded-xl border border-primary/70 bg-gradient-to-br from-primary/25 via-slate-950 to-secondary/25 px-3 py-2 text-slate-50 shadow-[0_0_30px_rgba(109,93,246,0.45)]"
                                    : "rounded-xl border border-slate-800/80 bg-slate-950/80 px-3 py-2 text-slate-300"
                                }
                              >
                                {isHighlight && (
                                  <span className="absolute -top-2 right-3 inline-flex items-center rounded-full bg-slate-950/90 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-secondary border border-secondary/70">
                                    AI-native
                                  </span>
                                )}
                                <span className="block text-[0.72rem]">
                                  {metric?.value ?? "—"}
                                </span>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="relative border-t border-slate-800/80 bg-slate-950/80 px-4 py-3 text-[0.7rem] text-slate-400">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1 border border-slate-700/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="numeric">
                      Our product is built for recurring, multi-canvas series.
                    </span>
                  </span>
                  <span className="hidden sm:inline text-slate-500">•</span>
                  <span>
                    Not a generic editor—an automation layer that sits on top of
                    your entire video pipeline.
                  </span>
                </div>
              </div>
            </div>
          </MotionTableContainer>
        </motion.div>
      </div>
    </section>
  );
}
