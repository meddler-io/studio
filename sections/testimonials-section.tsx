"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { TESTIMONIALS } from "@/constants/site";

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

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section"
      aria-labelledby="testimonials-heading"
    >
      <div className="app-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px" }}
        >
          <SectionHeader
            eyebrow="Customers"
            title="Teams that treat video like a system, not a one-off task."
            description="Creators, agencies and brands plug into the same AI timeline engine—and ship more, with fewer manual passes."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                custom={index}
                variants={cardVariants}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/85 p-[1px]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(10,226,255,0.16),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col rounded-[1.05rem] bg-slate-950/95 p-4 sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/40 text-[0.75rem] font-semibold text-slate-950 shadow-glow-primary">
                      <span className="numeric">
                        {testimonial.avatarInitials}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-slate-50">
                        {testimonial.name}
                      </span>
                      <span className="text-[0.7rem] text-slate-400">
                        {testimonial.role} ·{" "}
                        <span className="text-slate-300">
                          {testimonial.company}
                        </span>
                      </span>
                    </div>
                  </div>

                  <p className="text-[0.8rem] text-slate-300">
                    “{testimonial.quote}”
                  </p>

                  <div className="mt-auto pt-4 text-[0.65rem] text-slate-400">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                        <span className="numeric">Workflow upgraded</span>
                      </span>
                      <span className="inline-flex h-5 items-center gap-1 text-slate-500">
                        <span className="h-3 w-4 rounded-full bg-slate-800/80" />
                        <span className="h-2 w-2 rounded-full bg-slate-700/80" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
