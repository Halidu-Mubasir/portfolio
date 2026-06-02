"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Experience" title="Where I've Worked" />

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex flex-col gap-1 mb-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em]">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-acl mt-1">{exp.role}</p>
                </div>
                <span className="text-[12px] font-mono text-mt shrink-0">
                  {exp.period}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {exp.achievements.slice(0, 6).map((a, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + j * 0.05 }}
                    className="flex items-start gap-3 text-[13px] leading-relaxed text-mt"
                  >
                    <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-acl opacity-40" />
                    {a}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-16 border-t border-th"
        >
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {[
              "Magna Cum Laude Honors",
              "MasterCard Foundation Scholar",
              "Dean's List 2021 - 2024",
            ].map((award) => (
              <span key={award} className="text-[13px] text-mt">
                {award}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
