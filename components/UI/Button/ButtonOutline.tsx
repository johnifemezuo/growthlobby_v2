import { ArrowRight } from "../../Icons/ArrowRight";
import Link from "next/link";

export const ButtonOutline = ({
  link,
  text,
}: {
  link: string;
  text: string;
}) => {
  return (
    <Link href={link} className="flex items-center space-x-3 s">
      <span className="text-lg lg:text-xl text-primary capitalize">{text}</span>
      <span className="rounded-full w-9 h-9 grid place-content-center border border-primary">
        <ArrowRight className="text-primary" />
      </span>
    </Link>
  );
};
