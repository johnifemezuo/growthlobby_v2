"use client";

import { IBlogData } from "@/base/interface/IBlog";
import { IProjectData } from "@/base/interface/IProject";
import { BLOG_FEATURED_QUERY } from "@/base/query/blog";
import { PROJECT_QUERY } from "@/base/query/project";
import BlogSection from "@/components/Modules/Home/BlogSection/BlogSection";
import BrandCompany from "@/components/Modules/Home/BrandCompany/BrandCompany";
import FaqSection from "@/components/Modules/Home/FaqSection/FaqSection";
import { HeroParallaxDemo } from "@/components/Modules/Home/Herosection/HeroParallaxDemo";
import ServicesSection from "@/components/Modules/Home/Services/ServicesSection";
import { SuccessPrev } from "@/components/Modules/Home/SuccessPrev/SuccessPrev";
import TestimonySection from "@/components/Modules/Home/Testimony/TestimonySection";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";
import WorksSection from "@/components/Modules/Home/Works/WorksSection";
import { useQuery } from "@apollo/client";
import { Suspense } from "react";

export default function Home() {
  const { data, loading:loadingBlog } = useQuery<IBlogData>(BLOG_FEATURED_QUERY);
  const blogContents = data?.blogs || [];

  const { data: work, loading: loadingProject } = useQuery<IProjectData>(PROJECT_QUERY);

  const projects = work?.projects.slice(0, 6) || [];

  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      <HeroParallaxDemo />
      <WelcomeSection />
      <ServicesSection />
      { loadingProject ? <div>Loading...</div> : <WorksSection projects={projects} />}
      <SuccessPrev />
      <BrandCompany />
      <TestimonySection />
      {loadingBlog ? <div>Loading...</div> : <BlogSection posts={blogContents} />}
      <FaqSection />
    </Suspense>
  );
}
