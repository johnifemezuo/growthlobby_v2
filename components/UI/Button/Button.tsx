import React from "react";
import { ArrowRight } from "../../Icons/ArrowRight";

export const Button = ({
  children,
  className,
  onClick,
  ...props // Spread other native button properties
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  onClick?: (val?: boolean) => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} space-x-4 py-2 px-4 flex justify-items-center  items-center rounded-lg justify-center  text-black`}
      {...props} // Spread native button properties here
    >
      <span className="pl-2 lg:text-lg ">{children}</span>
      <ArrowRight className="text-primary" />
    </button>
  );
};
