import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Asset Valuation",
    description:
      "Platform linking insurers with valuation services for efficient asset assessments.",
    image: "/images/landing-page.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 2,
    title: "Somakro",
    description:
      "Connecting you to reliable local professionals for every task, making everyday services accessible, efficient, and trusted.",
    image: "/images/landing-page-4.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 3,
    title: "Somakro",
    description:
      "Connecting you to reliable local professionals for every task, making everyday services accessible, efficient, and trusted.",
    image: "/images/landing-page-3.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 4,
    title: "Asset Valuation Mobile",
    description: "Mobile-first asset management solution.",
    image: "/images/landing-page-1.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 5,
    title: "Asset Valuation Mobile",
    description:
      "Connecting you to reliable local professionals for every task, making everyday services accessible, efficient, and trusted.",
    image: "/images/landing-page-6.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 6,
    title: "Somakro",
    description: "Mobile application for expense tracking and budgeting.",
    image: "/images/landing-page-5.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
];

const WorksSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-foreground">
      {/* Header Section */}
      <div className="mb-12 max-w-4xl ml-auto">
        <h2 className="text-3xl font-semibold mb-4 md:text-5xl">
          From breakthrough <span className="text-calm">innovations</span>{" "}
          to industry-shaping <span className="text-calm">growth</span>, our
          clients are changing the game—and we're proud to be part of their
          journey.
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-16 gap-8 auto-rows-min   ">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative group md:${project.colSpan} md:${project.rowSpan}  rounded-lg overflow-hidden `}
          >
            <div className={`relative  ${project.rowSpan === 'row-span-2' ? 'md:h-[600px] row-span-2 ' : 'md:h-[400px] row-span-1'} w-full rounded-lg h-[300px]`}>
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
              <h3 className="text-xl font-semibold mb-2 md:text-4xl">{project.title}</h3>
              <p className="text-base md:text-lg">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-6 m-auto text-center md:mt-12">
        <button className="text-background p-4 md:px-6 md:py-4 bg-foreground m-auto font-semibold rounded-lg">Check our Work</button>
      </div>
    </div>
  );
};

export default WorksSection;
