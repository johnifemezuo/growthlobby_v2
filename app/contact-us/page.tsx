import SmoothScroll from "@/components/Animations/SmoothScroll";
import HeroSection from "@/components/Modules/Contacts/HeroSection/HeroSection";
import ContactUsSection from "@/components/Modules/Home/ContactUs/ContactUsSection";
import TestimonySection from "@/components/Modules/Home/Testimony/TestimonySection";
import Footer from "@/components/UI/Footer/Footer";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      <SmoothScroll>
        <HeroSection />
        <TestimonySection />
        <ContactUsSection />
        <Footer />
      </SmoothScroll>
    </Suspense>
  );
}
