"use client";

import { IProject, IProjectData } from "@/base/interface/IProject";
import { PROJECT_QUERY } from "@/base/query/project";
import HeroSection from "@/components/Modules/Works/WorkHeroSection/WorkHeroSection";
import WorkSample from "@/components/Modules/Works/WorkSample/WorkSample";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { Suspense } from "react";

export default function OurWorksPage() {
  const { data, loading } = useQuery<IProjectData>(PROJECT_QUERY);

  const projects = data?.projects || {};

  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      <Head>
        <title>Growthlobby | Work </title>
      </Head>
      <HeroSection />
      {loading ? <div> Loading... </div> : <WorkSample projects={projects as IProject[]} />}
    </Suspense>
  );
}
