"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

export default function GradientBg() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isDark ? 0.03 : 0.06,
          backgroundImage: isDark
            ? "radial-gradient(circle, #fff 1px, transparent 1px)"
            : "radial-gradient(circle, #000 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Primary orb */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[200px] -right-[200px] h-[700px] w-[700px] rounded-full blur-[150px]"
        style={{
          background: isDark
            ? "rgba(124, 58, 237, 0.07)"
            : "rgba(124, 58, 237, 0.06)",
        }}
      />

      {/* Secondary orb */}
      <motion.div
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 40, -25, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[300px] -left-[200px] h-[600px] w-[600px] rounded-full blur-[150px]"
        style={{
          background: isDark
            ? "rgba(109, 40, 217, 0.05)"
            : "rgba(109, 40, 217, 0.04)",
        }}
      />

      {/* Vignette — dark only */}
      {isDark && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_70%)]" />
      )}
    </div>
  );
}
