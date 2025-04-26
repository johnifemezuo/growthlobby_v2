"use client";

import { IProject } from "@/base/interface/IProject";
import { Container } from "@/components/Container/Container";
import { useState } from "react";
import WorkCard from "../../Home/Works/WorkCard";
import { DropdownCategory } from "../DropdownCategory";

const WorksSection = ({ projects }: { projects: IProject[] }) => {
  const [activeFilter, setActiveFilter] = useState("design");

  const filteredProjectContents = activeFilter
    ? projects.filter(
        (project: IProject) => project.projectType === activeFilter
      )
    : projects;

  const getCategories = (projectContent: IProject[]): string[] => {
    const categories = projectContent?.map(
      (project: IProject) => project.projectType
    );
    return Array.from(new Set(categories));
  };

  const categories = getCategories(projects);

  return (
    <Container>
      <div className="container  relative mx-auto  py-9 text-foreground px-5 lg:px-0 lg::w-[90%] 2xl:w-full">
        <div>
          <div className="hidden lg:flex  px-12 lg:px-0 py-6 lg:py-0  lg:w-full gap-4 lg:mb-12 lg:justify-center  ">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 capitalize min-w-max font-medium py-2 rounded-full text-sm transition-colors duration-300
          ${
            activeFilter === category
              ? "bg-[var(--primary)] text-black border border-black"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:hidden mb-6 lg:mb-0">
          <DropdownCategory
            categories={categories}
            setActiveFilter={setActiveFilter}
            selectedCategory={activeFilter}
          />
        </div>

        <div className="lg:flex justify-between items-center w-full  border-t mb-9">
          <div className="space-y-2">
            <h2 className="mt-9 lg:text-3xl text-xl font-semibold capitalize">
              {activeFilter === "design"
                ? "UI/UX Design"
                : activeFilter === "graphics"
                  ? "Graphics Designs"
                  : activeFilter === "development"
                    ? "Website Development"
                    : activeFilter === "illustrations"
                      ? "Illustration Designs"
                      : activeFilter === "logo"
                        ? "Logo Designs"
                        : activeFilter === "motion"
                          ? "Motion Design"
                          : null}
            </h2>
            <p className="text-sm lg:text-lg text-gray-500 mb-9 ">
              {activeFilter === "design" ? (
                <span>Here are some of my UI/UX design projects.</span>
              ) : activeFilter === "graphics" ? (
                <span>Here are some of my graphics design projects.</span>
              ) : activeFilter === "development" ? (
                <span>Here are some of my website development projects.</span>
              ) : activeFilter === "logo" ? (
                <span>Here are some of my app design projects.</span>
              ) : activeFilter === "illustrations" ? (
                <span>Here are some of my illustrations.</span>
              ) : activeFilter === "motion" ? (
                <span>Here are some of my motion design projects.</span>
              ) : null}
            </p>
          </div>

          <p className="lg:text-base bg-zinc-100 inline-block mt-2 lg:mt-0 rounded-full px-3 py-1 text-sm font-medium">
            Total {projects.length}
          </p>
        </div>

        {filteredProjectContents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8 auto-rows-min   ">
            {filteredProjectContents.map((project: IProject, i: number) => (
              <WorkCard
                title={project?.title}
                key={i}
                slug={project?.slug}
                projectType={project?.projectType}
                image={project?.introImage.url}
              />
            ))}
          </div>
        ) : (
          <div className="text-xl pt-44 min-h-[500px] bg-zinc-100 rounded-xl w-full p-6 text-center">
            Coming Soon..
          </div>
        )}
      </div>
    </Container>
  );
};

export default WorksSection;
