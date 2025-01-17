"use client";

import React, { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const EffectHover = ({ children, className = "" }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const angle = useMotionValue(45);
  const background = useMotionTemplate`linear-gradient(var(--color-gray-950), var(--color-gray-950)) padding-box, conic-gradient(from ${angle}deg, var(--color-violet-400), var(--color-fuchsia-400), var(--color-amber-300), var(--color-teal-300), var(--color-violet-400))`;

  useEffect(() => {
    if (isHovered) {
      animate(angle, angle.get() + 360, {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      });
    } else {
      animate(angle, 45, { duration: 0.5 });
    }
  }, [isHovered, angle]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-4 rounded-lg shadow-md ${className}`}
      style={{
        background,
      }}
    >
      {children}
    </motion.div>
  );
};
