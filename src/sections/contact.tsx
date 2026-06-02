"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-36">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-acl mb-4 block">
            Contact
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.1]">
            Let&apos;s work
            <br />
            <span className="text-mt">together.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-3 text-lg font-medium text-fg transition-all duration-300 hover:text-fg"
          >
            {siteConfig.email}
            <ArrowUpRight
              size={18}
              className="text-mt transition-all duration-300 group-hover:[color:var(--t-accent-lt)] group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          <div className="flex items-center gap-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mt transition-all duration-300 hover:text-fg hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mt transition-all duration-300 hover:text-fg hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
