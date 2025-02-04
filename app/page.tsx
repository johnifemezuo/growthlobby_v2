import HeroSection from "@/components/Modules/Home/HeroSection";
import HeroSectionMain from "@/components/Modules/Home/HeroSectionMain";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";
import ProcessSection from "@/components/Modules/Home/ProcessSection/ProcessSection";

export default function Home() {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <HeroSectionMain />
      <WelcomeSection />
      <ProcessSection/>
    </div>
  );
}
