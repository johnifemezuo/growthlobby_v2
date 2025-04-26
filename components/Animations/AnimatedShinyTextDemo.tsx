import { ArrowRightCircle } from "lucide-react";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { cn } from "@/base/lib/utils";
import Image from "next/image";

export function AnimatedShinyTextDemo({text}:{text: string}) {
  return (
    <div className="z-10 flex  items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-800 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex space-x-3 items-center text-zinc-200 justify-center px-4 py-1 transition ease-out hover:text-neutral-200 hover:duration-300 hover:dark:text-neutral-400">
        <Image
                src="/images/svg/Rocket.svg"
                alt=""
                height={110}
                width={110}
                className="w-5 lg:w-[23px] h-5 lg:h-[23px]"
              />
          <span className="text-zinc-600 text-sm">{text}</span>
          <ArrowRightCircle className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
