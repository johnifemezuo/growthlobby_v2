import HeroSection from "@/components/Modules/AboutUs/HeroSection/HeroSection";
import MeetTheTeam from "@/components/Modules/AboutUs/HeroSection/MeetTheTeam";
import BrandCompany from "@/components/Modules/Home/BrandCompany/BrandCompany";
import TestimonySection from "@/components/Modules/Home/Testimony/TestimonySection";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";

const AboutUsePage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <MeetTheTeam />
      <BrandCompany />
      <TestimonySection />
    </>
  );
};

export default AboutUsePage;
