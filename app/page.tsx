/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useModal } from "@/base/hooks/useModal";
import { IBlogData } from "@/base/interface/IBlog";
import { IProjectData } from "@/base/interface/IProject";
import { BLOG_FEATURED_QUERY } from "@/base/query/blog";
import { FEATURED_PROJECT_QUERY } from "@/base/query/project";
import SmoothScroll from "@/components/Animations/SmoothScroll";
import MarketingModal from "@/components/Modals/MarketingModal";
import BlogSection from "@/components/Modules/Home/BlogSection/BlogSection";
import BrandCompany from "@/components/Modules/Home/BrandCompany/BrandCompany";
import FaqSection from "@/components/Modules/Home/FaqSection/FaqSection";
import { HeroParallaxDemo } from "@/components/Modules/Home/Herosection/HeroParallaxDemo";
import ServicesSection from "@/components/Modules/Home/Services/ServicesSection";
import { SuccessPrev } from "@/components/Modules/Home/SuccessPrev/SuccessPrev";
import TestimonySection from "@/components/Modules/Home/Testimony/TestimonySection";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";
import WorksSection from "@/components/Modules/Home/Works/WorksSection";
import Footer from "@/components/UI/Footer/Footer";
import { useQuery } from "@apollo/client";
import { Suspense } from "react";

export default function Home() {
  const { data, loading: loadingBlog } =
    useQuery<IBlogData>(BLOG_FEATURED_QUERY);
  const blogContents = data?.blogs || [];

  const { data: work, loading: loadingProject } = useQuery<IProjectData>(
    FEATURED_PROJECT_QUERY
  );

  const projects = work?.growthlobbyCaseStudies.slice(0, 6) || [];

  const { isModalOpen, closeModal } = useModal();

  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      <SmoothScroll>
        <HeroParallaxDemo />
        <WelcomeSection />
        <ServicesSection />
        {loadingProject ? (
          <div>Loading...</div>
        ) : (
          <WorksSection projects={projects} />
        )}
        <SuccessPrev />
        <BrandCompany />
        <TestimonySection />
        {loadingBlog ? (
          <div>Loading...</div>
        ) : (
          <BlogSection posts={blogContents} />
        )}
        <FaqSection />
        <Footer />
      </SmoothScroll>

      {/* Modal */}
      <MarketingModal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </Suspense>
  );
}
