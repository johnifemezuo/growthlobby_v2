import HeroSection from "@/components/Modules/Home/HeroSection";
import HeroSectionMain from "@/components/Modules/Home/HeroSectionMain";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";

export default function Home() {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <HeroSectionMain />
      <WelcomeSection />
    </div>
  );
}
