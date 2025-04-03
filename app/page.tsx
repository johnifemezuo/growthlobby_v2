import { IBlog } from "@/base/interface/IBlog";
import BlogSection from "@/components/Modules/Home/BlogSection/BlogSection";
import BrandCompany from "@/components/Modules/Home/BrandCompany/BrandCompany";
import FaqSection from "@/components/Modules/Home/FaqSection/FaqSection";
import HeroSection from "@/components/Modules/Home/Herosection/HeroSection";
import ServicesSection from "@/components/Modules/Home/Services/ServicesSection";
import { SuccessPrev } from "@/components/Modules/Home/SuccessPrev/SuccessPrev";
import TestimonySection from "@/components/Modules/Home/Testimony/TestimonySection";
import WelcomeSection from "@/components/Modules/Home/Welcome/WelcomeSection";
import WorksSection from "@/components/Modules/Home/Works/WorksSection";
import Footer from "@/components/UI/Footer/Footer";

export default function Home() {
  const blogPosts : IBlog[] = [
    {
      id: 1,
      title: "How to Get Investors for a Startup  Using Design",
      slug: "how-to-get-investors-for-startup-using-design",
      coverImage: {url: "/images/showcase1.png"},
      featured: true,
      date: "2023-10-01",
    },
    {
      id: 2,
      title: "What makes a brand Iconic",
      slug: "what-makes-a-brand-iconic-1",
      coverImage: {url: "/images/showcase2.png"},
      date: "2023-10-01",
    },
    {
      id: 3,
      title: "What makes a brand Iconic ",
      slug: "what-makes-a-brand-iconic-2",
      coverImage: {url: "/images/showcase3.png"},
      date: "2023-10-01",
    },
  ]

  
  return (
    <div className="">
      {/* <HeroSection /> */}
      <HeroSection />
      <WelcomeSection />
      {/* <ProcessSection /> */}
      <ServicesSection />
      <WorksSection />
      <SuccessPrev />
      <BrandCompany />

      <TestimonySection />
      <BlogSection posts={blogPosts} />
      <FaqSection />
      {/* <ContactUsSection /> */}
      <Footer />
    </div>
  );
}
