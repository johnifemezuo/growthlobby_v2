/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  OTHER_PROJECT_QUERY,
  PROJECT_DETAIL_QUERY,
} from "@/base/query/project";
import { ProjectDetails } from "@/components/Modules/Works/ProjectDetails";
import WorkDetailHeroSection from "@/components/Modules/Works/WorkHeroSection/WorkDetailHeroSection";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { Suspense } from "react";

export default function ProjectDetailPage({ params }: any) {
  const projectId = params.projectId;
  const { data: projectData, loading: loadingProjects } = useQuery<{
    projects: any;
  }>(PROJECT_DETAIL_QUERY, { variables: { slug: projectId } });
  const project = projectData?.projects[0] || [];

  const { data: others, loading: loadingOthers } = useQuery<{
    projects: any[];
  }>(OTHER_PROJECT_QUERY, { variables: { slug: params.projectId } });

  const otherProjects = others?.projects || [];

  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      <Head>
        <title>Osmaxin | Works | </title>
      </Head>

      {loadingProjects || loadingOthers ? (
        <div>Loading...</div>
      ) : (
        <div>
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

          <ProjectDetails
            details={project?.content}
            otherProjects={otherProjects}
          />
        </div>
      )}
    </Suspense>
  );
}
