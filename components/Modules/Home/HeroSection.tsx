import { Container } from "@/components/Container/Container";
import Image from "next/image";
import HeroSample from "./HeroSample";

const HeroSection = () => {
  return (
    <div className="lg:h-[500px] w-full relative">
      <Image
        src="/images/lines.png"
        alt=""
        width={550}
        height={550}
        className=" w-[200px] lg:w-[305px] h-[200px]  z-0 lg:h-[305px] absolute left-5 lg:left-20 top object-cover "
      />
      <Image
        src="/images/lines.png"
        alt=""
        width={550}
        height={550}
        className=" w-[305px] h-[305px] absolute right-20 bottom-20 object-cover hidden lg:block"
      />

      <Image
        src="/images/svg/ArrowDown.svg"
        alt=""
        height={110}
        width={110}
        className="w-[90px] h-[90px] absolute bottom-0 right-20 hidden lg:block"
      />
      <Image
        src="/images/svg/ArrowDownLeft.svg"
        alt=""
        height={110}
        width={110}
        className="w-[90px] h-[90px] absolute bottom-0 left-20 hidden lg:block"
      />

      <Container>
        <div className="flex flex-col justify-center items-center h-full mt-20 lg:mt-32">
          <div className="text-center py-8  space-y-7 max-w-[800px] mx-auto px-4 lg:px-0">
            <div className="inline-flex space-x-3 justify-30 items-center rounded-md bg-white  p-2">
              <Image
                src="/images/svg/Rocket.svg"
                alt=""
                height={110}
                width={110}
                className="w-[23px] h-[23px]"
              />
              <p className="text-sm">Elevate your Digital Presence.</p>
            </div>
            <h1 className="text-4xl font-bold lg:text-4xl xl:text-6xl">
              From Concept to Creation: Your Digital Partner.
            </h1>
            <p className="lg:text-lg text-zinc-700">
              From sleek websites and responsive web apps to standout mobile
              prototypes –we bring your ideas to life and elevate them above the
              competition.
            </p>
          </div>

          <div className="flex items-center space-x-3 px-4 lg:px-0">
            <div className="flex -space-x-3 lg:-space-x-4 border-r pr-3">
              <Image
                src="/images/user1.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full w-[33px] h-[33px] lg:w-[45px] lg:h-[45px] object-cover border"
              />
              <Image
                src="/images/user2.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full w-[33px] h-[33px] lg:w-[45px] lg:h-[45px] object-cover border"
              />
              <Image
                src="/images/user3.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full w-[33px] h-[33px] lg:w-[45px] lg:h-[45px] object-cover border"
              />
              <Image
                src="/images/user4.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full w-[33px] h-[33px] lg:w-[45px] lg:h-[45px] object-cover border"
              />
              <Image
                src="/images/user5.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full w-[33px] h-[33px] lg:w-[45px] lg:h-[45px] object-cover border"
              />
              <Image
                src="/images/googleicon.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full w-[30px] h-[30px] object-cover border"
              />
            </div>

            <div className="flex flex-col -mt-5 justify-center space-y-0 ">
              <div className="flex space-x-1 items-center">
                <div className="flex -space-x-2 mt-5 ">
                  <Image
                    src="/images/svg/star.svg"
                    alt=""
                    height={50}
                    width={50}
                    className="w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]"
                  />
                  <Image
                    src="/images/svg/star.svg"
                    alt=""
                    height={50}
                    width={50}
                    className="w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]"
                  />
                  <Image
                    src="/images/svg/star.svg"
                    alt=""
                    height={50}
                    width={50}
                    className="w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]"
                  />
                  <Image
                    src="/images/svg/star.svg"
                    alt=""
                    height={50}
                    width={50}
                    className="w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]"
                  />
                  <Image
                    src="/images/svg/star.svg"
                    alt=""
                    height={50}
                    width={50}
                    className="w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]"
                  />
                </div>

                <p className="lg:text-xl font-medium text-zinc-600 mt-5">5.0</p>
              </div>

              <p className="text-center text-xs lg:text-sm mt-2 pl-1 text-zinc-700 font-medium">
                Over 200+ businesses worldwide
              </p>
            </div>
          </div>
        </div>
      </Container>

      <HeroSample />
    </div>
  );
};

export default HeroSection;
