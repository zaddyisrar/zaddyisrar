"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollSection({
  children,
  className = "",
  depth = "normal",
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const presets = {
    soft: {
      y: [70, 0, -70],
      scale: [0.96, 1, 1.04],
    },
    normal: {
      y: [120, 0, -120],
      scale: [0.93, 1, 1.07],
    },
    deep: {
      y: [180, 0, -180],
      scale: [0.9, 1, 1.12],
    },
  };

  const selected = presets[depth] || presets.normal;

  const y = useTransform(scrollYProgress, [0, 0.5, 1], selected.y);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], selected.scale);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    [0, 1, 1, 0]
  );

  return (
    <section className={`relative min-h-screen overflow-hidden ${className}`} ref={ref}>
      <motion.div style={{ y, scale, opacity }} className="relative z-10">
        {children}
      </motion.div>
    </section>
  );
}