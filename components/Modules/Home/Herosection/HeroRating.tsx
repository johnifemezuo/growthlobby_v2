import { AnimatedTooltipPreview } from "@/components/magicui/AnimatedTooltipPreview";
import Image from "next/image";

const HeroRating = () => {
  return (
    <div className="lg:flex items-center space-x-3 lg:space-x-6 px-4 lg:px-0">

      <AnimatedTooltipPreview />

      <div className="flex flex-col  lg:-mt-5 justify-center space-y-0  min-w-[200px]">
        <div className="flex space-x-1 items-center justify-center lg:justify-center">
          <div className="flex space-x-2 mt-5 lg:mt- ">
            <Image
              src="/images/star.png"
              alt=""
              height={50}
              width={50}
              className="w-3 lg:w-5"
            />
            <Image
              src="/images/star.png"
              alt=""
              height={50}
              width={50}
              className="w-3 lg:w-5"
            />
            <Image
              src="/images/star.png"
              alt=""
              height={50}
              width={50}
              className="w-3 lg:w-5"
            />
            <Image
              src="/images/star.png"
              alt=""
              height={50}
              width={50}
              className="w-3 lg:w-5"
            />
            <Image
              src="/images/star.png"
              alt=""
              height={50}
              width={50}
              className="w-3 lg:w-5"
            />
          </div>

          <p className="lg:text-xl font-medium text-zinc-600 pl-1 mt-6">5.0</p>
        </div>

        <p className=" text-xs mt-2  text-center lg:t text-zinc-400 font-medium">
          Working for Over 200+ businesses worldwide
        </p>
      </div>
    </div>
  );
};

export default HeroRating;
