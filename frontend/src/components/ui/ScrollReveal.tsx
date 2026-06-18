// Path: src/components/ui/ScrollReveal.tsx

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollReveal({
  children,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      {children}
    </motion.div>
  );
}