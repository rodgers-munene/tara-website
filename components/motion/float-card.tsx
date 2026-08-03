"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function FloatCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
