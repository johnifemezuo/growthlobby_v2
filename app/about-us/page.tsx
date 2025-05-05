import SmoothScroll from "@/components/Animations/SmoothScroll";
import HeroSection from "@/components/Modules/AboutUs/HeroSection/HeroSection";
import MeetTheTeam from "@/components/Modules/AboutUs/HeroSection/MeetTheTeam";
import BrandCompany from "@/components/Modules/Home/BrandCompany/BrandCompany";
import TestimonySection from "@/components/Modules/Home/Testimony/TestimonySection";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";
import Footer from "@/components/UI/Footer/Footer";
import { Suspense } from "react";

export default function AboutUsePage() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      <SmoothScroll>
        <HeroSection />
        <WelcomeSection />
        <MeetTheTeam />
        <BrandCompany />
        <TestimonySection />
        <Footer />
      </SmoothScroll>
    </Suspense>
  );
}
