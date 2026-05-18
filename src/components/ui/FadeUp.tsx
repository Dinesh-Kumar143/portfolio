"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;       // seconds
  duration?: number;
  once?: boolean;       // animate only once (default true)
  amount?: number;      // intersection threshold 0–1
  x?: number;           // horizontal offset (for slide-in-from-side)
  y?: number;           // vertical offset (default 28)
}

export default function FadeUp({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.1,
  x = 0,
  y = 28,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
