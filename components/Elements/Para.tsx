import { ReactNode } from "react";

const Para = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <p className={` ${className} text-zinc-700 text-base  lg:text-lg xl:text-xl`}>{children}</p>;
};

export default Para;
  