import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { div } from "framer-motion/client";

const clientsProfile = [
  {
    id: "01",
    name: "Alex M.",
    position: "CEO of Innovative Tech",
    image: "/images/Ellipse-2.png",
    testimony:
      "Growthlobby transformed our vision into a sleek, user-friendly platform that exceeded our expectations. Their collaborative approach made the entire process seamless and enjoyable!",
  },
  {
    id: "02",
    name: "Sarah L.",
    position: " Managing Director at Peak Solutions",
    image: "/images/Ellipse-1.png",
    testimony:
      "Working with Growthlobby was a game-changer. Their design and development expertise brought our brand to life, setting us apart in a competitive market.",
  },

  {
    id: "03",
    name: "James P.",
    position: " Founder of GreenWave",
    image: "/images/Ellipse-2.png",
    testimony:"From concept to execution, Growthlobby’s team was exceptional. They delivered a responsive website that perfectly matches our brand and engages our audience effortlessly.",
  },

  {
    id: "04",
    name: "Rachel T.",
    position: "Product Manager at NexaDigital",
    image: "/images/Ellipse-3.png",
    testimony:"Growthlobby’s ability to capture our brand's essence and translate it into a beautiful, functional app is unmatched. Their attention to detail is what sets them apart.",
  },

];

const TestimonySection = () => {
  return (
    // <Container>
    <div className="font-wixMadefor">
      <div className="m-auto bg-foreground text-background min-h-screen h-auto pt-12 md:pt-20">
        <div className=" flex m-auto space-x-4 text-center md:text-7xl text-2xl justify-center font-medium items-center">
          <span className="">
            What Our <span className="text-calm">Clients</span> Are Saying
          </span>
          <Image
            width={100}
            height={100}
            src="/images/happiness.png"
            alt="Happiness"
            className="h-12 w-12 md:h-20 md:w-20"
          />
        </div>
        <Container>
          {clientsProfile.map(profile => (
            <div key={profile.id} className="container  md:px-16 py-12 gap-4 md:py-20 px-4 flex flex-col-reverse md:flex-row md:justify-between md:font-medium md:items-center md:mt-20 md:border-t border-slate-400 mx-auto">
            <div className="flex flex-col gap-8 md:w-[50%]">
              <span className="text-primary font-bold text-2xl hidden md:block">
                  {profile.id}
              </span>
              <span className="text-2xl">
                {profile.testimony}
              </span>
            </div>
            <div className="md:w-[35%]">
              <div className="flex justify-between items-center md:justify-end ">
                {" "}
                <span className="text-primary font-bold text-2xl  md:invisible">
                {profile.id}
                </span>
                <Image
                  width={100}
                  height={100}
                  src="/images/arrow-1.png"
                  alt="Happiness"
                  className="h-12 w-12 md:h-16 md:w-16 "
                />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 m-auto">
                <div className="">
                  {" "}
                  <Image
                    width={100}
                    height={100}
                    src={profile.image}
                    alt="Happiness"
                    className="w-auto md:w-4/5 m-auto"
                  />
                </div>
                <div className="flex flex-col text-center md:text-left">
                    <span>{profile.name}</span>
                  <span className="text-calm">{profile.position}</span>
                </div>
              </div>
            </div>
          </div>
          ))}
          
        </Container>
      </div>
    </div>
  );
};

export default TestimonySection;
