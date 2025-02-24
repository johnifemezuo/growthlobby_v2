import React from "react";
import { Container } from "@/components/Container/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSectionMain = () => {
  return (
    <div className="pt-24  md:pt-26 text-white bg-[#0F100D] my-auto md:px-16 min-h-screen h-auto">
      <Container className="">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-6 md:col-span-3 bg-heroColor p-4 md:p-12 rounded-2xl">
              <div className="flex-col-reverse flex md:grid md:grid-cols-4 bg-heroColor">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight md:col-span-3 ">
                  The Digital
                  <span className="text-primary"> Partner </span>
                  you need
                </h1>
                <div className=" ">
                  <Image
                    src="/images/horse.png"
                    alt="HorseIcon"
                    width={100}
                    height={100}
                    className="md:w-full md:h-full m-auto  w-1/2"
                  />
                </div>
              </div>
              <p className="text-gray-400 max-w-lg ">
                We believe in the power of partnerships to create strategic,
                scalable, and commercially viable digital solutions
              </p>
              <div className="border border-gray-400 w-full"></div>
              <div className="flex items-center justify-between space-x-6  mt-[24px] md:h-28 md:items-end">
                <Link
                  href="/contact"
                  className=" py-3 rounded-full inline-flex items-center "
                >
                  <div className="border-2 rounded-full md:py-2 md:px-4 text-sm w-full px-2 py-3">
                    <p className="whitespace-nowrap">CONTACT US</p>
                  </div>
                  <span className="bg-background text-foreground p-2 rounded-full hidden md:block">
                    <ArrowRight />
                  </span>
                </Link>
                <div className="flex items-center space-x-2 md:mb-2">
                  <Image
                    src="/images/googleicon.png"
                    alt="Google Review"
                    width={24}
                    height={24}
                    className=" w-16 md:w-12"
                  />
                  <div className="flex flex-col ">
                    <span className="inline-flex items-center gap-2">
                      <span className="flex text-yellow-400 flex-col">
                        {"★".repeat(5)}
                      </span>
                      <span className="text-sm">5.0</span>
                    </span>
                    <span className="text-xs">
                      The highest rated web studio in Nigeria
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative md:col-span-2 h-full">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex gap-3 items-center mb-2 md:mb-3">
                  <Image
                    width={200}
                    height={200}
                    src="/images/logo1.png"
                    className="w-[40px] h-[40px] md:h-10 md:w-10 items-center"
                    alt="GrowthlobbyLogoIcon"
                  />
                  <div className=" flex flex-col leading-none">
                    <span className="text-lg">Growthlobby</span>
                    <span className="text-gray-400 text-sm md:text-xs -mt-1">5 minutes ago</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  WEBSITE DESIGN AND CUSTOM WEB DEVELOPMENT
                </h3>
                <div className="">
                <Image
                    width={400}
                    height={400}
                    src="/images/heroServiceImage.png"
                    className="w-full"
                    alt="heroServiceImage"
                  />
      
                </div>
                <div className=" mt-8">
                  <Image
                    width={200}
                    height={200}
                    src="/images/servicePaginationIcon.png"
                    alt="moreService"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSectionMain;
