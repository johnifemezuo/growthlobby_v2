import { ArrowRight } from "../../Icons/ArrowRight";
import { motion } from "framer-motion";
import React from "react";

export const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
      className={`${className} space-x-4 py-2 px-4 flex justify-items-center bg-black items-center rounded-full justify-center hover:bg-primary/40 text-white border border-black`}
    >
      <span className="pl-2 lg:text-lg text-lba">{children}</span>{" "}
      {/* <span className="rounded-full w-9 h-9 place-content-center grid bg-white ">
      </span> */}
      <ArrowRight className="text-primary" />
    </motion.button>
  );
};
