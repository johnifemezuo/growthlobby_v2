import { TextReveal } from "@/components/magicui/text-reveal";
import React from "react";

const WelcomeSectionContent = () => {
  return (
    <div className="text-[#808080] font-wixMadefor md:text-[28px] text-[20px] leading-normal font-semibold md:w-[40%] flex flex-col md:gap-6 gap-4 ">
          <TextReveal>Welcome to Growthlobby,where creativity meets strategy. We are a passionate collective of designers, developers, and visionaries, dedicated to transforming B2B digital innovation into unforgettable stories.</TextReveal>
          
          <TextReveal>We don’t just create; we craft powerful brands, stunning websites, and cutting-edge apps that resonate, bridging the gap between vision and reality reality.</TextReveal>
          
          <TextReveal>Our collaborative approach ensures that every project is an enriching journey, making the process as rewarding as the ground-breaking results we deliver.</TextReveal>
          
    </div>
  );
};

export default WelcomeSectionContent;
