"use client";

import { motion, useReducedMotion } from "motion/react";

const bars = [0.4, 0.65, 0.5, 0.85, 0.6, 1];

export function ChartCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="rounded-2xl border border-white/40 bg-cream p-4 shadow-xl ring-1 ring-navy/5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-navy/50">Today&apos;s Sales</p>
          <p className="font-serif text-lg text-navy">KES 42,800</p>
        </div>
        <span className="rounded-full bg-emerald-700/10 px-2 py-1 text-xs font-medium text-emerald-700">
          +18%
        </span>
      </div>

      <div className="relative mt-4 h-16">
        <div className="absolute inset-x-0 bottom-0 border-t border-navy/10" />
        <div className="relative flex h-full items-end gap-2">
        {bars.map((height, i) => (
          <motion.span
            key={i}
            className="w-full rounded-t-md bg-emerald-700/80"
            style={{ height: `${height * 100}%`, transformOrigin: "bottom" }}
            initial={{ scaleY: shouldReduceMotion ? 1 : 0.08 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: 0.08 * i + 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
