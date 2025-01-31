"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const ScrollReveal = ({
  children,
  className,
  delay,
  hidden,
  visible,
  duration,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hidden: { y?: number; x?: number };
  visible: { y?: number; x?: number };
  duration?: number;
}) => {
  const easeInVariant = {
    hidden: { y: hidden.y, opacity: 0, x: hidden.x },
    visible: { y: visible.y, x: visible.x, opacity: 1 },
  };

  const refOne = useRef(null);

  const isInView: boolean = useInView(refOne, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={refOne}
      variants={easeInVariant}
      initial="hidden"
      animate={mainControls}
      className={className}
      transition={{ duration: duration ?? 0.8, delay: delay ?? 0.3 }}
    >
      {children}
    </motion.div>
  );
};
