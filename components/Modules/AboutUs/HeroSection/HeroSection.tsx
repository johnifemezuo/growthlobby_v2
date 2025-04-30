import React from "react";
import StackStatistics from "@/components/HeroItems/StackStatistics";
import HeroCaroselDesc from "@/components/HeroItems/HeroCaroselDesc";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import Brand from "@/public/images/brand.png"

const HeroSection = () => {
  return (
    <div className=" lg:h-[800px] pt-9 font-wixMadefor  text-white bg-[#0F100D] flex flex-col">
      <div className="pt-24  md:pt-20  my-auto md:px-16  ">
        <Container className="">
          <div className="space-y-6 md:col-span-3 bg-heroColor p-4 md:p-12 rounded-2xl mx-3 md:mx-0 m-auto">
            <div className=" flex gap-9 flex-col-reverse md:flex-row md:justify-between">
              <div className="text-4xl font-bold md:text-6xl text-center md:text-left">
                <h1 className="leading-snug">Partnering With Visionaries—Bringing Ideas to Life, Pixel by Pixel.</h1>
              </div>
                <Image
                  src={Brand}
                  width={200}
                  height={200}
                  alt="Our-Work-Logo"
                  className=" m-auto  w-1/2 md:min-w-[200px]"
                />
            </div>
            <StackStatistics />
          </div>
        </Container>
      </div>
      <HeroCaroselDesc />
    </div>
  );
};

export default HeroSection;
