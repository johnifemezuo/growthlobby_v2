import { ScrollReveal } from "@/components/Animations/ScrollReveal";

const ServiceSectionIntro = () => {
  return (
    <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }} duration={0.8}  >
      <div className="text-background space-y-4 lg:flex justify-between items-center">
       <div>
       <p className="text-xs lg:text-lg capitalize">what we do</p>
        <h1 className="md:text-3xl md:w-[55%] font-semibold my-2 text-2xl lg:text-5xl">
          Crafting <span className="text-calm">Brands</span> and Products that{" "}
          <span className="text-calm"> Inspire Confidence</span> and{" "}
          <span className="text-calm"> Scale</span>
        </h1>
       </div>
        <p className="text-xs md:text-md lg:text-lg md:w-[30%]">
          We design experiences that elevate your brand to feel like a
          billion-dollar success.
        </p>
      </div>
    </ScrollReveal>
  );
};

export default ServiceSectionIntro;
