import { TextReveal } from "@/components/magicui/text-reveal";
import React from "react";

const WelcomeSectionContent = () => {
  return (
    <div className="text-[#808080] font-wixMadefor md:text-[28px] text-[20px] leading-normal font-semibold md:w-[45%] flex flex-col md:gap-6 gap-4 ">
          <TextReveal>At Growthlobby, we are a passionate team of designers dedicated to transforming brands into powerful tools for success. Our expertise lies in crafting stunning designs that help businesses achieve their goals, attract more clients, and gain the recognition they deserve.</TextReveal>
          
          <TextReveal>From captivating graphics to intuitive UI/UX designs, our work ensures your brand stands out in a crowded marketplace.</TextReveal>
          
          <TextReveal>We don’t just design; we create experiences that resonate with your audience and drive results. Let’s bring your vision to life and help your brand leave an unforgettable impression.</TextReveal>
          
    </div>
  );
};

export default WelcomeSectionContent;
