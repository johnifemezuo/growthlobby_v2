import HeroSection from "@/components/Modules/Home/HeroSection";
import HeroSectionMain from "@/components/Modules/Home/HeroSectionMain";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";
import ProcessSection from "@/components/Modules/Home/ProcessSection/ProcessSection";
import ServicesSection from "@/components/Modules/Home/Services/ServicesSection";
import WorksSection from "@/components/Modules/Home/Works/WorksSection";
import TestimonySection from "@/components/Modules/Home/Testimony/TestimonySection";

export default function Home() {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <HeroSectionMain />
      <WelcomeSection />
      <ProcessSection/>
      <ServicesSection />
      <WorksSection />
      <TestimonySection/>
    </div>
  );
}
