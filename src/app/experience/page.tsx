"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { PageContainer } from "@/components/PageContainer";
import { MapPin, Briefcase } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};

export default function Experience() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-12">
        <h2 className="text-[28px] md:text-[34px] font-semibold tracking-[-0.02em] text-gray-950">Experience</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-0"
        >
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Timeline line & dot */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-gray-900 ring-4 ring-gray-100 mt-1.5 z-10 transition-all duration-300 group-hover:ring-gray-200" />
                {idx < portfolioData.experience.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-gray-300 to-gray-100 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 flex-1 pb-2">
                {/* Header */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="text-[11.5px] font-mono text-gray-400 tabular-nums">{exp.period}</span>
                    <span className="text-gray-200">·</span>
                    <span className="inline-flex items-center gap-1 text-[11.5px] text-gray-400">
                      <Briefcase className="w-3 h-3" /> {exp.type}
                    </span>
                  </div>
                  <h3 className="text-[19px] font-semibold leading-tight text-gray-950 tracking-[-0.01em]">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[13.5px] text-gray-600 font-medium">
                    {exp.organization}
                  </div>
                  <div className="flex items-center gap-1 text-[12px] text-gray-400">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-2.5">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14px] text-gray-600 leading-[1.65] text-justify hyphens-auto">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageContainer>
  );
}
