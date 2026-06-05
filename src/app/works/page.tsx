"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Works() {
  return (
    <PageContainer className="!max-w-none !lg:pl-[280px]">
      <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-10">
        <div className="flex items-end justify-between border-b border-gray-200 pb-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Product / Policy Works</h2>
          <span className="text-lg text-gray-400 font-mono mb-1">{portfolioData.works.length}</span>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
        >
          {portfolioData.works.map((work) => (
            <motion.div key={work.slug} variants={itemVariants}>
              <ProjectCard {...work} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageContainer>
  );
}
