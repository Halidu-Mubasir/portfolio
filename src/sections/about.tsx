"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { about } from "@/lib/data";

const certs = [
  "AWS DevOps Engineer Professional",
  "Azure Developer Associate",
  "AWS Developer Associate",
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="About" title="Background" />

        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[15px] leading-[1.8] text-mt">
              {about.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-mt mb-4">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-fg">
                    American University of Beirut
                  </p>
                  <p className="text-xs text-mt">
                    MA in Computing in Education &middot; 2025 — 2027
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-fg">
                    Ashesi University
                  </p>
                  <p className="text-xs text-mt">
                    BSc. Computer Science &middot; Magna Cum Laude &middot;
                    3.75/4.0
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-mt mb-4">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {certs.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full border border-th bg-sf px-3 py-1.5 text-[11px] text-mt"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
