import HeroSection from "@/components/Modules/AboutUs/HeroSection/HeroSection";
import MeetTheTeam from "@/components/Modules/AboutUs/HeroSection/MeetTheTeam";
import BrandCompany from "@/components/Modules/Home/BrandCompany/BrandCompany";
import TestimonySection from "@/components/Modules/Home/Testimony/TestimonySection";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";
import { Suspense } from "react";

export default function AboutUsePage() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      <HeroSection />
      <WelcomeSection />
      <MeetTheTeam />
      <BrandCompany />
      <TestimonySection />
    </Suspense>
  );
};

