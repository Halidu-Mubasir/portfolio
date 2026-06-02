"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto w-full max-w-4xl text-center">
        {/* Name — oversized, dramatic reveal */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.9] tracking-[-0.05em]"
          >
            Mubasir
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.9] tracking-[-0.05em] text-mt"
          >
            Halidu
          </motion.h1>
        </div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 text-[13px] tracking-[0.2em] uppercase text-mt"
        >
          {siteConfig.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mx-auto mt-5 max-w-md text-[15px] leading-[1.7] text-mt"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3 text-[13px] font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: 'var(--t-fg)', color: 'var(--t-bg)' }}
          >
            View Work
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            >
              <path
                d="M6 2.5V9.5M6 9.5L2.5 6M6 9.5L9.5 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href={siteConfig.resumeUrl}
            download="Mubasir_Halidu_CV.pdf"
            className="rounded-full border border-th px-7 py-3 text-[13px] font-medium text-mt transition-all duration-300 hover:border-th-h hover:text-fg hover:scale-[1.02] active:scale-[0.98]"
          >
            Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-mt transition-all duration-300 hover:text-fg hover:scale-110"
          >
            <GithubIcon size={16} />
          </a>
          <span className="h-3 w-px bg-sf" style={{ backgroundColor: 'var(--t-border)' }} />
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-mt transition-all duration-300 hover:text-fg hover:scale-110"
          >
            <LinkedinIcon size={16} />
          </a>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px origin-top"
          style={{ background: 'linear-gradient(to bottom, color-mix(in srgb, var(--t-muted) 40%, transparent), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
