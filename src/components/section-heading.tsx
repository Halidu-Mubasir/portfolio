"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-acl mb-4 block">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-fg">
        {title}
      </h2>
    </motion.div>
  );
}
