"use client";

import { IBlogData } from "@/base/interface/IBlog";
import { IProjectData } from "@/base/interface/IProject";
import { BLOG_FEATURED_QUERY } from "@/base/query/blog";
import { PROJECT_QUERY } from "@/base/query/project";
import BlogSection from "@/components/Modules/Home/BlogSection/BlogSection";
import BrandCompany from "@/components/Modules/Home/BrandCompany/BrandCompany";
import FaqSection from "@/components/Modules/Home/FaqSection/FaqSection";
import { HeroParallaxDemo } from "@/components/Modules/Home/Herosection/ParallaxHero";
import ServicesSection from "@/components/Modules/Home/Services/ServicesSection";
import { SuccessPrev } from "@/components/Modules/Home/SuccessPrev/SuccessPrev";
import TestimonySection from "@/components/Modules/Home/Testimony/TestimonySection";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";
import WorksSection from "@/components/Modules/Home/Works/WorksSection";
import { useSuspenseQuery } from "@apollo/client";

export default function Home() {
  const { data } = useSuspenseQuery<IBlogData>(BLOG_FEATURED_QUERY);
  const blogContents = data?.blogs || {};

  const { data: work } = useSuspenseQuery<IProjectData>(PROJECT_QUERY);

  const projects = work?.projects.slice(0, 6) || {};

  return (
    <div className="">
      <HeroParallaxDemo />
      <WelcomeSection />
      <ServicesSection />
      <WorksSection projects={projects} />
      <SuccessPrev />
      <BrandCompany />
      <TestimonySection />
      <BlogSection posts={blogContents} />
      <FaqSection />
    </div>
  );
}
