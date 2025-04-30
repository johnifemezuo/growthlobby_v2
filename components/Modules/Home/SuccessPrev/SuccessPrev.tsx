import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import Image from "next/image";

export const SuccessPrev = () => {
  return (
      <div className="min-h-screen px-5 lg:px-0 bg-gradient-to-br from-[#1a2e1a] to-black flex items-center justify-center py-20 md:p-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left side heading */}
            <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }} duration={0.8}>
              <div className=" items-center lg:mt-20">
                <Image
                  src="/images/svg/ArrowDownLeft.svg"
                  alt=""
                  height={110}
                  width={110}
                  className="w-[90px] h-[90px] hidden lg:block "
                />

                <h2 className="text-4xl lg:mt-20 md:text-5xl text-zinc-100 lg:text-5xl font-semibold leading-tight">
                  We work to bring more innovative products with intuitive
                  interfaces into the world.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }} delay={0.6} duration={1}>
              {/* Right side stats grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* $1m Card */}
                <div className="bg-black/60 rounded-3xl p-8 flex flex-col h-full">
                  <div className="flex justify-end mb-4">
                    <div className="bg-[#f5f5e6] rounded-full p-1 w-16 h-16 flex items-center justify-center">
                      <Image
                        src="/images/rock-1.png"
                        width={250}
                        height={250}
                        alt=""
                        className="w-[200px] h-auto object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <h2 className="text-white text-6xl md:text-7xl font-bold mb-4">
                    $1m
                  </h2>
                  <p className="text-gray-300 text-lg">
                    In funding clients raised owing to our design works
                  </p>
                </div>

                {/* 100M+ Card */}
                <div className="bg-black/60 rounded-3xl p-8 flex flex-col h-full md:row-start-2">
                  <div className="flex justify-end mb-4">
                    <div className="bg-[#f5f5e6] rounded-full p-1 w-16 h-16 flex items-center justify-center">
                      <Image
                        src="/images/rock-2.png"
                        width={250}
                        height={250}
                        alt=""
                        className="w-[200px] h-auto object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <h2 className="text-white text-6xl md:text-7xl font-bold mb-4">
                    100M+
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Active users experiencing our design every day via products
                    we made
                  </p>
                </div>

                {/* 50+ Card */}
                <div className="bg-black/60 rounded-3xl p-8 flex flex-col h-full md:col-start-2 md:row-span-2">
                  <div className="flex justify-end mb-4">
                    <div className="bg-white rounded-full py-2 px-4 flex items-center space-x-1">
                      <div className=" rounded-full w-8 h-8 flex items-center justify-center">
                        <Image
                          src="/images/logo1.png"
                          width={150}
                          height={150}
                          alt=""
                          className="  object-cover rounded-full"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={`/images/user1.png`}
                          alt={`Team member `}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={`/images/user2.png`}
                          alt={`Team member `}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={`/images/user3.png`}
                          alt={`Team member `}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <h2 className="text-white text-6xl md:text-7xl font-bold mb-4">
                    20+
                  </h2>
                  <p className="text-gray-300 text-lg">
                    We have 50+ professional team members on stand by ready to
                    carry out your task.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
  );
};
