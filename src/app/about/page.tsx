"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { PageContainer } from "@/components/PageContainer";
import { Globe, Medal, Mic, Trophy, Star } from "lucide-react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
};

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="w-5 h-5" />,
  medal: <Medal className="w-5 h-5" />,
  mic: <Mic className="w-5 h-5" />,
  trophy: <Trophy className="w-5 h-5" />,
  star: <Star className="w-5 h-5" />,
};

export default function About() {
  return (
    <PageContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="flex flex-col gap-14"
      >
        {/* Title */}
        <motion.section variants={fadeIn} className="flex flex-col gap-5">
          <h2 className="text-[28px] md:text-[34px] font-semibold tracking-[-0.02em] text-gray-950">
            More about me
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.8] text-justify hyphens-auto">
            {portfolioData.about.paragraph}
          </p>
        </motion.section>

        {/* Education */}
        <motion.section variants={fadeIn} className="flex flex-col gap-5">
          <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-gray-900">Education</h3>
          <div className="flex flex-col gap-0">
            {portfolioData.about.education.map((edu, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 py-4 border-b border-gray-100 last:border-0"
              >
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-[15px] font-semibold text-gray-900">{edu.institution}</h4>
                  {edu.degree && (
                    <p className="text-[13.5px] text-gray-500">{edu.degree}</p>
                  )}
                </div>
                <span className="text-[12.5px] text-gray-400 font-mono shrink-0 mt-0.5">{edu.period}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section variants={fadeIn} className="flex flex-col gap-5">
          <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-gray-900">Achievements</h3>
          <div className="flex flex-col gap-3">
            {portfolioData.about.achievements.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300"
              >
                {/* Icon bubble */}
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center text-white">
                  {iconMap[item.icon]}
                </div>
                <p className="text-[14.5px] text-gray-700 leading-snug font-medium pt-1.5 text-justify hyphens-auto">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section variants={fadeIn} className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-[17px] font-semibold tracking-tight text-gray-900">Hard Skills</h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.about.skills.hard.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-[13px] text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-[17px] font-semibold tracking-tight text-gray-900">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.about.skills.soft.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-[13px] text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Languages */}
        <motion.section variants={fadeIn} className="flex flex-col gap-4">
          <h3 className="text-[17px] font-semibold tracking-tight text-gray-900">Languages</h3>
          <div className="flex flex-col gap-0">
            {portfolioData.about.skills.languages.map((lang, idx) => {
              const [language, level] = lang.split(" — ");
              return (
                <div
                  key={idx}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                >
                  <span className="text-[14.5px] font-semibold text-gray-900">{language}</span>
                  <span className="text-[13px] text-gray-500">{level}</span>
                </div>
              );
            })}
          </div>
        </motion.section>
      </motion.div>
    </PageContainer>
  );
}
