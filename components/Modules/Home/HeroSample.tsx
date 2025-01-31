import Image from "next/image";

const HeroSample = () => {
  return (
    <div className="mt-20 lg:py-24 overflow-x-hidden">
      <div className="flex px-4 lg:px-8 space-x-5 w-full overflow-x-scroll scrollbar-hide">
        <Image
          src="/images/showcase1.png"
          alt=""
          height={600}
          width={600}
          className="lg:w-[650px] lg:h-[450px]"
        />
        <Image
          src="/images/showcase2.png"
          alt=""
          height={600}
          width={600}
          className="lg:w-[650px] lg:h-[450px]"
        />
        <Image
          src="/images/showcase3.png"
          alt=""
          height={600}
          width={600}
          className="lg:w-[650px] lg:h-[450px]"
        />
        <Image
          src="/images/showcase2.png"
          alt=""
          height={600}
          width={600}
          className="lg:w-[650px] lg:h-[450px]"
        />
      </div>
    </div>
  );
};

export default HeroSample;
