import React from "react";
import ServiceSectionIntro from "./ServiceSectionIntro";
import ServiceSectionProducts from "./ServiceSectionProducts";

const ServicesSection = () => {
  return (
    <div className="bg-foreground min-h-screen h-auto md:px-16 py-12 gap-4 md:py-20 px-4 font-wixMadefor">
   <ServiceSectionIntro/>
     <ServiceSectionProducts/>
    </div>
  );
};

export default ServicesSection;
