"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Stack" title="Technologies" />

        <div className="space-y-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-12"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-mt w-32 shrink-0">
                {cat.category}
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + j * 0.03 }}
                    className="text-[13px] text-mt transition-colors duration-300 hover:text-fg cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
