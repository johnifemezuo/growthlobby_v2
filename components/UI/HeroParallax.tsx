"use client";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import React from "react";
import { AnimatedShinyTextDemo } from "../Animations/AnimatedShinyTextDemo";
import HeroRating from "../Modules/Home/Herosection/HeroRating";
import ContactComp from "./ContactComp";
import { FlipWords } from "./FlipWords";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[270vh] lg:h-[320vh] bg-[#0F100D] py-40 lg:py-0 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:400px] lg:[perspective:700px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 lg:mt-96 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const words1 = ["Design"];
  const words2 = ["Motion", "Illustration", "Graphics"];

  return (
    <div className="bg-[#0F100D relative mx-auto z-50 py-0 md:py-0 lg:py-20 px-4 w-full  left-0 top-0">
      <div className="flex flex-col -mt-8 md:mt-0 justify-center items-center h-full  lg:px-0">
        <div className="text-center w-full py-8 lg:pt-20 space-y-5 lg:max-w-[700px] mx-auto px-4 lg:px-0">
          <AnimatedShinyTextDemo text="Elevate your Digital Presence.✨" />

          <div className="text-4xl text-zinc-200 max-w-2xl  mx-auto font-bold lg:text-4xl xl:text-6xl font-serif">
            <h1 className="flex text-center justify-center items-center">
              <FlipWords words={words1} /> <span>& </span>
              <FlipWords words={words2} />{" "}
            </h1>
            partner for all your business needs.
          </div>
          <p className="lg:text-lg text-zinc-200">
            Transforming Ideas Into Stunning Digital Realities. We are a team of
            passionate designers and developers dedicated to creating
            exceptional digital experiences that captivate and engage your
            audience.
          </p>
        </div>

        <HeroRating />

        <ContactComp />
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-[220px] lg:h-96 w-[300px]  lg:min-w-[30%] relative shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
