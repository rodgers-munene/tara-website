"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "none";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  left: { x: -28 },
  right: { x: 28 },
  none: {},
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}) {
  const shouldReduceMotion = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, ...(shouldReduceMotion ? {} : offsets[direction]) },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
