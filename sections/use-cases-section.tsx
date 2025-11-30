"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { USE_CASES } from "@/constants/site";
import {
  Podcast,
  Video,
  BriefcaseBusiness,
  Building2,
  ShoppingBag,
  Rocket,
} from "lucide-react";

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

function UseCaseIcon({ id }: { id: string }) {
  const className =
    "h-5 w-5 text-secondary drop-shadow-[0_0_15px_rgba(10,226,255,0.5)]";

  switch (id) {
    case "podcasters":
      return <Podcast className={className} />;
    case "creators":
      return <Video className={className} />;
    case "agencies":
      return <BriefcaseBusiness className={className} />;
    case "real-estate":
      return <Building2 className={className} />;
    case "ecommerce":
      return <ShoppingBag className={className} />;
    case "startups":
      return <Rocket className={className} />;
    default:
      return <Video className={className} />;
  }
}

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="section"
      aria-labelledby="use-cases-heading"
    >
      <div className="app-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px" }}
        >
          <SectionHeader
            eyebrow="Who it's for"
            title="Built for every team that lives on video."
            description="From creators to agencies and growth teams, ship recurring, channel-native content without rebuilding timelines from scratch."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((useCase, index) => (
              <motion.article
                key={useCase.id}
                custom={index}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/80 p-[1px]"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(10,226,255,0.16),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-3 rounded-[1.1rem] bg-slate-950/95 px-4 py-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/80 ring-1 ring-secondary/50">
                        <UseCaseIcon id={useCase.id} />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm font-medium text-slate-50">
                          {useCase.label}
                        </h3>
                        <span className="mt-0.5 text-[0.68rem] uppercase tracking-[0.18em] text-slate-500">
                          Use case
                        </span>
                      </div>
                    </div>
                    <span className="mt-1 inline-flex items-center rounded-full border border-slate-800/80 bg-slate-950/80 px-2 py-0.5 text-[0.6rem] text-slate-400">
                      <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                      Scales with templates
                    </span>
                  </div>

                  <p className="text-xs sm:text-[0.8rem] text-slate-400">
                    {useCase.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-1 text-[0.65rem] text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1 w-1.5 rounded-full bg-secondary" />
                      <span className="numeric">Channel-native formats</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <span className="h-3 w-3 rounded-[4px] border border-slate-700/80 bg-slate-900/80" />
                      <span className="h-3 w-3 rounded-[4px] border border-slate-800/90 bg-slate-950" />
                    </span>
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
