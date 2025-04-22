import { IProject } from "@/base/interface/IProject";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { PageContainer } from "@/components/Container/PageContainer";
import parse from "html-react-parser";
import WorkCard from "../Home/Works/WorkCard";

export const ProjectDetails = ({
  details,
  otherProjects,
}: {
  details: { html: string };
  otherProjects: IProject[];
}) => {
  const projectContent = details?.html || "";

  return (
    <div className="bg-white pb-12 lg:py-7 px-5 xl:px-0">
      <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
        <PageContainer>
          <div className="pageStyle">{parse(projectContent)}</div>
        </PageContainer>
      </ScrollReveal>

      <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
        <div className="max-w-7xl mt-12 lg:mt-44 mx-auto bg-[#EDEDED] min-h-fit h-auto md:py-12 md:px-4 py-8 px-4 rounded-3xl space-y-8 mb-6 md:mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold capitalize text-center mb-6">
            Other Projects
          </h2>
          {otherProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8 auto-rows-min   ">
              {otherProjects.map((project: IProject, i: number) => (
                <WorkCard
                  title={project?.title}
                  key={i}
                  slug={project?.slug}
                  projectType={project?.projectType}
                  image={project.introImage.url}
                />
              ))}
            </div>
          ) : (
            <div className="text-xl pt-44 min-h-[500px] bg-zinc-100 rounded-xl w-full p-6 text-center">
              Coming Soon..
            </div>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
};
