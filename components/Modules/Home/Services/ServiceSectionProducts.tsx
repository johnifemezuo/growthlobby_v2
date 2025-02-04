"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  description1: string;
  description2: string;
  image: string;
}

const products: Product[] = [
  {
    id: "01",
    title: "Website Design",
    description1: "Beautiful, User-Friendly Websites Built in Figma",
    description2:
      "From concept to launch, we design websites that captivate and engage. Our approach ensures every site is sleek, intuitive, and tailored to meet your unique needs – crafted entirely in Figma for a seamless design process.",
    image: "/images/landing-page.png",
  },
  {
    id: "02",
    title: "Mobile App Design",
    description1: " Apps That Shine Above the Competition",
    description2:
      " We bring your app ideas to life, focusing on design, functionality, and user experience. From user-friendly prototypes to polished final designs, our team makes sure your app not only stands out but also delivers exceptional value to users.",
    image: "/images/landing-page-1.png",
  },
  {
    id: "03",
    title: "Web App Design",
    description1: "Responsive Web Apps for Any Business Challenge.",
    description2: `Our team creates web apps that are sleek, responsive, and built to scale with your business. Whether it's for internal operations or customer engagement, we design solutions that are intuitive and adaptable to your needs.`,
    image: "/images/landing-page-2.png",
  },
  {
    id: "04",
    title: "Website Development",
    description1: "Building Sleek, Responsive Websites That Perform",
    description2:
      "Beyond design, we bring websites to life with seamless functionality and responsiveness. From business portfolios to e-commerce, we develop websites that look great and perform flawlessly across all devices.",
    image: "/images/landing-page-3.png",
  },
];

const ServiceSectionProducts = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className=" mt-8 ">
      <div className="max-w-full mx-auto space-y-12 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center md:justify-between group flex-col-reverse md:flex-row md:border-t border-calm md:pt-6"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="space-y-2">
              <div className="flex md:w-[60%] justify-between">
                <span className="text-primary md:text-22 hidden md:block font-semibold">{product.id}</span>
                <div className="flex items-between gap-4 flex-col md:w-[60%] items-center md:items-start text-center md:text-left">
                  <h2 className="text-calm text-2xl font-bold">{product.title}</h2>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      hoveredId === product.id
                        ? "md:h-fit md:opacity-100"
                        : "md:h-0 md:opacity-0"
                    }`}
                  >
                    <p className="text-gray-400 font-bold">{product.description1}</p>
                    <p className="text-gray-400 ">{product.description2}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`relative transition-transform duration-300  ${
                hoveredId === product.id ? "md:scale-130 md:w-72" : "md:scale-100 md:w-auto"
              }`}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={150}
                className="object-cover rounded transition-transform duration-300 "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSectionProducts;
