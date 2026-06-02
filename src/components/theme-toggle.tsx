"use client";

import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-th bg-sf backdrop-blur-xl transition-all duration-300 hover:border-th-h hover:scale-110 active:scale-95"
    >
      {theme === "dark" ? (
        <Sun size={15} className="text-mt transition-colors hover:text-fg" />
      ) : (
        <Moon size={15} className="text-mt transition-colors hover:text-fg" />
      )}
    </motion.button>
  );
}
