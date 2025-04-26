"use client";

import BrandCompany from "@/components/Modules/Home/BrandCompany/BrandCompany";
import FaqSection from "@/components/Modules/Home/FaqSection/FaqSection";
import { HeroParallaxDemo } from "@/components/Modules/Home/Herosection/ParallaxHero";
import ServicesSection from "@/components/Modules/Home/Services/ServicesSection";
import { SuccessPrev } from "@/components/Modules/Home/SuccessPrev/SuccessPrev";
import TestimonySection from "@/components/Modules/Home/Testimony/TestimonySection";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";

export default function Home() {
  // const { data } = useSuspenseQuery<IBlogData>(BLOG_FEATURED_QUERY);
  // const blogContents = data?.blogs || [];

  // const { data: work,
  //  } = useSuspenseQuery<IProjectData>(PROJECT_QUERY);

  // const projects = work?.projects.slice(0, 6) || [];

  // if(!blogContents || !projects) {
  //   return {notFound: true};
  // }
  // console.log({blogContents, projects});

  return (
    <div className="">
      <HeroParallaxDemo />
      <WelcomeSection />
      <ServicesSection />
      {/* {!projects ? <div></div> :<WorksSection projects={projects} />} */}
      <SuccessPrev />
      <BrandCompany />
      <TestimonySection />
      {/* {!projects ? <div></div> : <BlogSection posts={blogContents} />} */}
      <FaqSection />
    </div>
  );
}
