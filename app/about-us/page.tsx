import React from "react";
import HeroSection from "@/components/Modules/AboutUs/HeroSection/HeroSection";
import ContactUsSection from "@/components/Modules/Home/ContactUs/ContactUsSection";
import Footer from "@/components/UI/Footer/Footer";


const AboutUsePage = () => {
  return (
    <>
      <HeroSection />
      <div className="min-h-screen h-auto"></div>
      <ContactUsSection/>
      <Footer/>
    </>
  );
};

export default AboutUsePage;
