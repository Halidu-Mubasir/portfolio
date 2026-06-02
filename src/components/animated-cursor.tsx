"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function AnimatedCursor() {
  const [visible, setVisible] = useState(false);

  const x = useSpring(0, { damping: 25, stiffness: 150, mass: 0.5 });
  const y = useSpring(0, { damping: 25, stiffness: 150, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [visible, x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[100px]"
      style={{ x, y }}
    />
  );
}
