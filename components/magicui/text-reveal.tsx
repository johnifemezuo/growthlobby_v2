"use client";

import { cn } from "@/base/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";


export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[220vh] transition-all duration-500 ", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%]  min-w-[400px] items-center bg-transparent px-0 py-[5rem] transition-all duration-500"
        }
      >
        <span
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-semibold text-black/20 dark:text-white/20 md:p-6 md:text-3xl lg:p-8 lg:text-4xl xl:text-4xl transition-all duration-500"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30 transition-all duration-500">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white transition-all duration-500"}
      >
        {children}
      </motion.span>
    </span>
  );
};
