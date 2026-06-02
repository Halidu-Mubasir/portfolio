"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-6 py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Work" title="Selected Projects" />

        <div className="space-y-4">
          {featured.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative block overflow-hidden rounded-2xl border border-th bg-sf p-8 transition-all duration-500 hover:border-th-h hover:bg-sf"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-accent/[0.06] blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-fg group-hover:text-fg transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={14}
                      className="text-mt transition-all duration-300 group-hover:[color:var(--t-accent-lt)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-mt max-w-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 md:justify-end md:max-w-[200px] shrink-0">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-mt transition-colors duration-300 group-hover:text-mt"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 pt-16 border-t border-th"
          >
            <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-mt mb-8">
              Other Projects
            </h3>
            <div className="space-y-4">
              {other.map((project) => (
                <a
                  key={project.title}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 border-b border-th transition-colors hover:border-th-h"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-fg group-hover:text-fg transition-colors">
                      {project.title}
                    </span>
                    <span className="hidden sm:inline text-xs text-mt">
                      {project.tech.slice(0, 2).join(" / ")}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="text-mt transition-all duration-300 group-hover:text-fg group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
