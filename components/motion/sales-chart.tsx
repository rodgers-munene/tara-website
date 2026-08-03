"use client";

import { motion, useReducedMotion } from "motion/react";

const points = [
  { x: 12, y: 105, label: "Mon" },
  { x: 65, y: 83, label: "Tue" },
  { x: 118, y: 96, label: "Wed" },
  { x: 171, y: 57, label: "Thu" },
  { x: 224, y: 72, label: "Fri" },
  { x: 277, y: 37, label: "Sat" },
  { x: 330, y: 19, label: "Sun" },
];

const linePath = "M 12 105 C 30 101, 47 87, 65 83 S 100 93, 118 96 S 153 66, 171 57 S 206 66, 224 72 S 259 45, 277 37 S 312 23, 330 19";
const areaPath = `${linePath} L 330 132 L 12 132 Z`;

export function SalesChart() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-6">
      <svg viewBox="0 0 342 142" className="h-34 w-full overflow-visible" role="img" aria-label="Seven-day sales trend rising through the week">
        <defs>
          <linearGradient id="sales-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#14213d" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#14213d" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[25, 60, 96, 132].map((y) => <line key={y} x1="0" x2="342" y1={y} y2={y} stroke="rgba(20,33,61,0.12)" strokeDasharray="3 5" />)}
        <motion.path d={areaPath} fill="url(#sales-area)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: 0.2 }} />
        <motion.path d={linePath} fill="none" stroke="#14213d" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: shouldReduceMotion ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: shouldReduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }} />
        {points.map((point, index) => (
          <motion.circle key={point.label} cx={point.x} cy={point.y} r="4" fill="#f7f1ea" stroke="#14213d" strokeWidth="2" initial={{ scale: shouldReduceMotion ? 1 : 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: shouldReduceMotion ? 0 : 0.25, delay: 0.58 + index * 0.07 }} style={{ transformOrigin: `${point.x}px ${point.y}px` }} />
        ))}
      </svg>
      <div className="mt-1 grid grid-cols-7 text-center text-[10px] text-navy/45">
        {points.map((point) => <span key={point.label}>{point.label}</span>)}
      </div>
    </div>
  );
}
