"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { PageContainer } from "@/components/PageContainer";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionDivider } from "@/components/SectionDivider";
import { Download, Mail, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const featuredWorks = portfolioData.works.slice(0, 3);

  return (
    <PageContainer>
      {/* ── Hero ──────────────────────────────── */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="flex flex-col gap-7"
      >
        {/* Greeting */}
        <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
          <h2 className="text-[30px] md:text-[36px] font-semibold tracking-[-0.02em] text-gray-950 leading-[1.2]">
            {portfolioData.home.hero.greeting}
          </h2>
          <p className="text-[16px] text-gray-500 font-normal tracking-[-0.01em] leading-snug">
            {portfolioData.home.hero.subtitle}
          </p>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          className="text-[15px] text-gray-600 leading-[1.75] max-w-[560px] text-justify hyphens-auto"
        >
          {portfolioData.home.hero.paragraph}
        </motion.p>

        {/* CTA Row */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
          {/* LinkedIn */}
          <a
            href={portfolioData.owner.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-white text-[13.5px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            Connect LinkedIn
          </a>

          {/* Email — shows address, like the reference */}
          <a
            href={`mailto:${portfolioData.owner.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-white text-[13.5px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow"
          >
            <Mail className="w-3.5 h-3.5" />
            {portfolioData.owner.email}
          </a>

          {/* Download CV — solid black */}
          <a
            href="/Farell-Bryan-Ursipuny-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-950 text-white text-[13.5px] font-medium hover:bg-black transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
        </motion.div>
      </motion.section>

      <SectionDivider />

      {/* ── Now ──────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="flex flex-col gap-5"
      >
        <motion.h3 variants={fadeUp} className="text-[18px] font-semibold tracking-[-0.01em] text-gray-900">
          Now
        </motion.h3>

        <motion.p variants={fadeUp} className="text-[15px] text-gray-600 leading-[1.75]">
          {portfolioData.home.now.paragraph}
        </motion.p>

        {/* Stats grid */}
        <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-2">
          {portfolioData.home.now.stats.map((stat, index) => {
            const [number, ...textParts] = stat.split(" ");
            const text = textParts.join(" ");
            return (
              <div
                key={index}
                className="flex flex-col gap-1.5 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-gray-100/70 transition-colors duration-200"
              >
                <span className="text-[22px] font-bold text-gray-950 tracking-tight">{number}</span>
                <span className="text-[11.5px] text-gray-500 font-medium leading-snug">{text}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.section>

      <SectionDivider />

      {/* ── Works preview ────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="flex flex-col gap-8"
      >
        <motion.div variants={fadeUp} className="flex items-center justify-between">
          <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-gray-900">
            Work&apos;s{" "}
            <span className="text-gray-300 font-normal">↗</span>
          </h3>
          <a
            href="/works"
            className="inline-flex items-center gap-1.5 text-[13px] text-gray-500 font-medium hover:text-gray-900 transition-colors duration-200 group"
          >
            See all works
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {featuredWorks.map((work, idx) => (
            <div key={work.slug} className={idx === 0 ? "md:col-span-2" : ""}>
              <ProjectCard {...work} featured={idx === 0} />
            </div>
          ))}
        </motion.div>
      </motion.section>
    </PageContainer>
  );
}
