"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { PRICING_PLANS } from "@/constants/site";
import { Button } from "@/ui/button";

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
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.08 + i * 0.06,
      duration: 0.5,
      ease: [0.21, 0.79, 0.29, 0.99],
    },
  }),
};

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section"
      aria-labelledby="pricing-heading"
    >
      <div className="app-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px" }}
        >
          <SectionHeader
            eyebrow="Pricing"
            title="Pick a plan that scales with your content system."
            description="Start free, then graduate into a workflow where templates, timelines and channels all stay in sync."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {PRICING_PLANS.map((plan, index) => {
              const isHighlighted = !!plan.highlighted;
              return (
                <motion.article
                  key={plan.id}
                  custom={index}
                  variants={cardVariants}
                  className={
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-[1px] " +
                    (isHighlighted
                      ? "border-primary/70 shadow-[0_0_45px_rgba(109,93,246,0.7)]"
                      : "border-slate-800/70")
                  }
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(109,93,246,0.2),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {isHighlighted ? (
                    <div className="pointer-events-none absolute right-3 top-3 z-10 rounded-full border border-amber-400/60 bg-amber-400/10 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.22em] text-amber-200">
                      Most popular
                    </div>
                  ) : null}
                  <div
                    className={
                      "relative flex h-full flex-col rounded-[1.05rem] px-4 py-4 sm:px-5 sm:py-5 " +
                      (isHighlighted ? "bg-slate-950/95" : "bg-slate-950/90")
                    }
                  >
                    <div className="mb-4 flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-50">
                          {plan.name}
                        </h3>
                        <p className="mt-1 text-xs text-slate-400">
                          {plan.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 flex items-baseline gap-1.5">
                      <span className="text-2xl font-semibold text-slate-50">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400">
                        {plan.cadence}
                      </span>
                    </div>

                    <ul className="mb-4 space-y-2 text-[0.75rem] text-slate-300">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[0.7rem]"
                        >
                          <span className="mt-[2px] inline-flex h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_10px_rgba(109,93,246,0.9)]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-2">
                      <Button
                        className={
                          "w-full text-xs font-medium uppercase tracking-[0.16em] " +
                          (isHighlighted
                            ? "bg-gradient-to-r from-primary to-secondary text-slate-950 shadow-glow-primary hover:opacity-90"
                            : "border border-slate-700/80 bg-slate-900/70 text-slate-100 hover:border-primary/60 hover:text-primary")
                        }
                        variant={isHighlighted ? "default" : "outline"}
                      >
                        {plan.ctaLabel}
                      </Button>
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
