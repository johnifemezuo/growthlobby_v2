import HeroSection from "@/components/Modules/Home/Herosection/HeroSection";
import ProcessSection from "@/components/Modules/Home/ProcessSection/ProcessSection";
import ServicesSection from "@/components/Modules/Home/Services/ServicesSection";
import TestimonySection from "@/components/Modules/Home/Testimony/TestimonySection";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";
import WorksSection from "@/components/Modules/Home/Works/WorksSection";
import Footer from "@/components/UI/Footer/Footer";

export default function Home() {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <HeroSection />
      <WelcomeSection />
      <ProcessSection />
      <ServicesSection />
      <WorksSection />
      <TestimonySection />
      {/* <ContactUsSection /> */}
      <Footer />
    </div>
  );
}
