"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { useState } from "react";

const projects = [
  {
    id: 1,
    category: "WEBSITE DESIGN",
    title: "Asset Valuation",
    description:
      "Platform linking insurers with valuation services for efficient asset assessments.",
    image: "/images/landing-page.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 2,
    category: "APP DESIGN",
    title: "Somakro",
    description:
      "Connecting you to reliable local professionals for every task, making everyday services accessible, efficient, and trusted.",
    image: "/images/landing-page-4.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 3,
    category: "DASHBOARD DESIGN",
    title: "Somakro",
    description:
      "Connecting you to reliable local professionals for every task, making everyday services accessible, efficient, and trusted.",
    image: "/images/landing-page-7.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 4,
    category: "APP DESIGN",
    title: "Asset Valuation Mobile",
    description: "Mobile-first asset management solution.",
    image: "/images/landing-page-4.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 5,
    category: "DASHBOARD DESIGN",
    title: "Asset Valuation Mobile",
    description:
      "Connecting you to reliable local professionals for every task, making everyday services accessible, efficient, and trusted.",
    image: "/images/landing-page-6.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 6,
    category: "APP DESIGN",
    title: "Somakro",
    description: "Mobile application for expense tracking and budgeting.",
    image: "/images/landing-page-5.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 7,
    category: "WEBSITE DESIGN",
    title: "Asset Valuation",
    description:
      "Platform linking insurers with valuation services for efficient asset assessments.",
    image: "/images/landing-page.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 8,
    category: "DASHBOARD DESIGN",
    title: "Somakro",
    description:
      "Connecting you to reliable local professionals for every task, making everyday services accessible, efficient, and trusted.",
    image: "/images/landing-page-4.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 9,
    category: "APP DESIGN",

    title: "Asset Valuation Mobile",
    description:
      "Connecting you to reliable local professionals for every task, making everyday services accessible, efficient, and trusted.",
    image: "/images/landing-page-6.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 11,
    category: "WEBSITE DESIGN",
    title: "Asset Valuation",
    description:
      "Platform linking insurers with valuation services for efficient asset assessments.",
    image: "/images/landing-page.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 10,
    category: "DASHBOARD DESIGN",
    title: "Somakro",
    description: "Mobile application for expense tracking and budgeting.",
    image: "/images/landing-page-5.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },

  {
    id: 12,
    category: "WEBSITE DESIGN",
    title: "Asset Valuation",
    description:
      "Platform linking insurers with valuation services for efficient asset assessments.",
    image: "/images/landing-page.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
];

const categories = ["ALL", "DASHBOARD DESIGN", "WEBSITE DESIGN", "APP DESIGN"];

const WorksSection = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const FilteredItems = projects.filter((item) =>
    activeFilter === "ALL" ? true : item.category === activeFilter
  );

  console.log(FilteredItems);
  return (
    <Container>
      <div className="container mx-auto px-4 md:px-0 py-16 text-foreground md:w-[90%] 2xl:w-full">
        <div className="flex  gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300
              ${
                activeFilter === category
                  ? "bg-primary text-black"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-16 gap-8 auto-rows-min   ">
          {FilteredItems.map((project) => (
            <div
              key={project.id}
              className={`relative group md:${project.colSpan} md:${project.rowSpan}  rounded-lg overflow-hidden `}
            >
              <div
                className={`relative  ${
                  project.rowSpan === "row-span-2"
                    ? "md:h-[600px] row-span-2 "
                    : "md:h-[400px] row-span-1"
                } w-full rounded-lg h-[300px]`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={100}
                  priority={true}
                  className="object-cover "
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 md:text-4xl">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </Container>
  );
};

export default WorksSection;
