/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { OTHER_PROJECT_QUERY, PROJECT_DETAIL_QUERY } from "@/base/query/project";
import { ProjectDetails } from "@/components/Modules/Works/ProjectDetails";
import WorkDetailHeroSection from "@/components/Modules/Works/WorkHeroSection/WorkDetailHeroSection";
import { useSuspenseQuery } from "@apollo/client";
import Head from "next/head";

export default function ProjectDetailPage({ params }: any) {
  const projectId = params.projectId;
  const { data: projectData } = useSuspenseQuery<{ projects: any }>(
    PROJECT_DETAIL_QUERY,
    { variables: { slug: projectId } }
  );
  const project = projectData.projects[0];

  const { data: others  } = useSuspenseQuery<{ projects: any[] }>(OTHER_PROJECT_QUERY, {variables: {slug: params.projectId}});

  const otherProjects = others?.projects || [];

  console.log(otherProjects)

  return (
    <div>
      <Head>
        <title>Osmaxin | Works | </title>
      </Head>

      <WorkDetailHeroSection
        title={project?.title}
        description={project?.description}
        image={project?.introImage.url}
        livesite={project?.livesite}
        industry={project?.industry}
        platform={project?.platform}
        timeline={project?.timeline}
        year={project?.year}
      />

      <ProjectDetails details={project?.content} otherProjects={otherProjects}/>
    </div>
  );
}
