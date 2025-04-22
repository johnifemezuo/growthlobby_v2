"use client";
import { AnimatedShinyTextDemo } from "@/components/Animations/AnimatedShinyTextDemo";
import { Container } from "@/components/Container/Container";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import Link from "next/link";

const WorkHeroSection = () => {
  return (
    <div className="h-auto w-full relative bg-white py-20 lg:py-20  overflow-hidden">
      <svg
        className="absolute left-0 top-0 w-[300px] lg:w-[500px] svg-1"
        width="715"
        height="773"
        viewBox="0 0 715 773"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_980_45748)">
          <path
            d="M7.71043 383.315C-30.7896 258.522 39.1647 126.147 163.958 87.6465L186.44 80.7105C311.233 42.2105 443.608 112.165 482.108 236.958C520.608 361.751 450.654 494.126 325.861 532.626L303.379 539.562C178.586 578.062 46.2104 508.108 7.71043 383.315Z"
            fill="#62E7EC"
            fillOpacity="0.19"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_980_45748"
            x="-224.861"
            y="-151.861"
            width="939.542"
            height="923.995"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="111"
              result="effect1_foregroundBlur_980_45748"
            />
          </filter>
        </defs>
      </svg>

      <svg
        className="absolute right-0 top-0 w-[300px] lg:w-[500px]"
        width="642"
        height="670"
        viewBox="0 0 642 670"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_980_45876)">
          <path
            d="M232.71 280.315C194.21 155.522 264.165 23.1465 388.958 -15.3535L411.44 -22.2895C536.233 -60.7895 668.608 9.16473 707.108 133.958C745.608 258.751 675.654 391.126 550.861 429.626L528.379 436.562C403.586 475.062 271.21 405.108 232.71 280.315Z"
            fill="#92EC62"
            fillOpacity="0.19"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_980_45876"
            x="0.138672"
            y="-254.861"
            width="939.542"
            height="923.995"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="111"
              result="effect1_foregroundBlur_980_45876"
            />
          </filter>
        </defs>
      </svg>

      <svg
        className="absolute svg-1 top-20 inset-x-0 h-[880px] w-[400px] lg:w-[700px] mx-auto"
        width="878"
        height="863"
        viewBox="0 0 878 863"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_980_45898)">
          <path
            d="M231.945 495.333C198.342 386.416 259.397 270.881 368.315 237.279L387.937 231.225C496.854 197.623 612.389 258.678 645.991 367.595C679.593 476.512 618.538 592.047 509.621 625.649L489.999 631.703C381.081 665.305 265.547 604.25 231.945 495.333Z"
            fill="#6279EC"
            fillOpacity="0.19"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_980_45898"
            x="0.717693"
            y="-0.0017395"
            width="876.5"
            height="862.931"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="111"
              result="effect1_foregroundBlur_980_45898"
            />
          </filter>
        </defs>
      </svg>

      <Container>
        <div className="flex flex-col justify-center items-center h-full  px-5 lg:px-0">
          <div className="text-center py-8 lg:pt-20 space-y-5 max-w-[700px] mx-auto px-4 lg:px-0">

            <AnimatedShinyTextDemo text="WHAT WE DO BEST.✨"/>

            <h1 className="text-4xl max-w-2xl  mx-auto font-bold lg:text-4xl xl:text-6xl font-serif">
              <span className="italic font-light">OUR PROJECTS</span> 
            </h1>
            
          </div>

          <div className="flex w-[350px] lg:w-auto bg-white border border-zinc-100 p-2  rounded-lg flex-row items-center justify-between lg:justify-center gap-4 ">
            <Link
              href="/book"
              className="bg-gray-900 text-center text-white px-6 text-sm py-4 rounded-md hover:bg-black transition-colors w-full sm:w-auto"
            >
              BOOK A CALL
            </Link>
            <Link
              href="/pricing"
              className="flex  text-sm items-center justify-center gap-2 px-6 py-4 rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              CONTACT US <ArrowRight />
            </Link>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default WorkHeroSection;
