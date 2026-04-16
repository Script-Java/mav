"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FramerRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FramerReveal({ children, delay = 0, className }: FramerRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ServiceCardRevealProps {
  children: ReactNode;
  delay?: number;
}

export function ServiceCardReveal({ children, delay = 0 }: ServiceCardRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
