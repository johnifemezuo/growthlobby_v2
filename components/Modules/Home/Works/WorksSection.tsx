import { IProject } from "@/base/interface/IProject";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import Link from "next/link";
import WorkCard from "./WorkCard";

const WorksSection = ({ projects }: { projects: IProject[] }) => {
  return (
    <Container>
      <div className="container mx-auto px-4 md:px-0 py-16 text-foreground md:w-[90%] 2xl:w-full">
        {/* Header Section */}
        <ScrollReveal hidden={{ y: 50 }} visible={{ y: 0 }} duration={0.5}>
          <div className="mb-12 max-w-5xl ml-auto space-y-3 ">
            <h4 className="text-sm lg:text-base text-zinc-600">Our Work</h4>
            <h2 className="text-3xl font-semibold mb-4 md:text-5xl">
              From breakthrough <span className="text-calm">innovations</span>{" "}
              to industry-shaping <span className="text-calm">growth</span>, our
              clients are changing the game—and we&apos;re proud to be part of
              their journey.
            </h2>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }} duration={0.8}>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-4 auto-rows-min   ">
            {projects.map((project: IProject, i: number) => (
              <WorkCard
                title={project?.title}
                key={i}
                slug={project?.slug}
                projectType={project?.projectType}
                image={project?.introImage?.url}
              />
            ))}
          </div>
        </ScrollReveal>
        <div className=" mt-6 m-auto text-center md:mt-12">
          <Link href="/works">
            <button className="text-background p-4 md:px-6 md:py-4 bg-foreground m-auto font-semibold rounded-lg">
              Check our Work
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default WorksSection;
