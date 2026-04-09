import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export const Highlight = ({ children, colorClass, className, delay = 0.5 }) => (
  <span className={clsx("relative inline-block", className)}>
    <span className="relative z-10">{children}</span>
    <motion.span 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "circOut" }}
      className={clsx("absolute inset-0 rounded-full -z-10 origin-left", colorClass)} 
    />
  </span>
);

export const ScribbleUnderline = ({ color = "#FFC250", delay = 0.3, className }) => (
  <div className={clsx("absolute -bottom-1 md:-bottom-2 left-[-10%] w-[120%] h-[15px] md:h-[22px] pointer-events-none -z-10", className)}>
    <svg width="100%" height="100%" viewBox="0 0 400 35" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay }}
        d="M 60 10 L 385 6 L 15 20 L 395 18 L 50 32 L 370 28"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  </div>
);

export const FadeIn = ({ children, delay = 0, direction = "up", className }) => {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {}
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
