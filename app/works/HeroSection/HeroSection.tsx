import React from "react";
import { Container } from "@/components/Container/Container";
import Image from "next/image";
import Cube from "@/public/images/image.png";

const HeroSection = () => {


  return (
    <div className="min-h-screen h-auto font-wixMadefor text-white bg-[#0F100D] flex flex-col">
      <div className="pt-24  md:pt-32  my-auto md:px-16  ">
        <Container className="">
          <div className="space-y-6 md:col-span-3 bg-heroColor p-4 md:p-12 rounded-2xl mx-3 md:mx-0 m-auto">
            <div className=" flex flex-col-reverse md:flex-row md:justify-between">
              <div className="text-4xl font-bold md:text-7xl text-center md:text-left">
                <p>OUR</p>
                <p>BEST WORKS</p>
              </div>
              <div className="">
                <Image
                  src={Cube}
                  width={200}
                  height={200}
                  alt="Our-Work-Logo"
                  className=" m-auto  w-1/2 md:w-64"
                />
              </div>
            </div>
            <div className="flex justify-around border-t border-gray-700 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-8 w-full">
                {/* Product Designers */}
                <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
                  <span className="text-white text-4xl md:text-5xl font-bold">
                    10+
                  </span>
                  <span className="text-gray-400 text-sm tracking-wider text-center md:text-left md:font-bold font-semibold">
                    <p>PRODUCT</p>
                    <p>DESIGNERS</p>
                  </span>
                </div>
                <div className="border-l border-gray-700 w-1 hidden md:block mx-auto"></div>

                {/* Web Developers */}
                <div className="flex flex-col items-center md:flex-row md:items-center gap-4 ">
                  <span className="text-white text-4xl md:text-5xl font-bold">
                    10+
                  </span>
                  <span className="text-gray-400 text-sm tracking-wider text-center md:text-left md:font-bold font-semibold">
                    <p>WEB</p>
                    <p>DEVELOPERS</p>
                  </span>
                </div>

                <div className="border-l border-gray-700 w-1 hidden md:block mx-auto"></div>

                {/* Mobile App Developers */}
                <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
                  <span className="text-white text-4xl md:text-5xl font-bold">
                    10+
                  </span>
                  <span className="text-gray-400 text-sm tracking-wider text-center md:text-left md:font-bold font-semibold">
                    <p>MOBILE APP</p>
                    <p>DEVELOPERS</p>
                  </span>
                </div>

                {/* Arrow Image */}
                <div className="flex justify-center md:justify-end">
                  <Image
                    width={100}
                    height={100}
                    src="/images/arrow-1.png"
                    alt="Arrow"
                    className="h-12 w-12 md:h-16 md:w-16 hidden md:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="flex items-center m-auto mt-6 font-semibold">
        <p className=" text-2xl md:text-7xl">
          {" "}
          <span className="text-calm">Where Great Work Meets</span> Lasting Impact
        </p>

        <span>
          <Image
            width={100}
            height={100}
            src="/images/logo1.png"
            alt="Happiness"
            className="h-12 w-12 md:h-20 md:w-20"
          />
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
