import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import ServiceSectionIntro from "./ServiceSectionIntro";
import ServiceSectionProducts from "./ServiceSectionProducts";

const ServicesSection = () => {
  return (
    <div
      id="services"
      className="bg-foreground z-10 relative min-h-screen h-auto md:px-16 py-12 gap-4 md:py-20 px-4 font-wixMadefor"
    >
      <svg
        className="absolute left-0 top-0 w-[300px] lg:w-[800px] svg-1"
        width="715"
        height="773"
        viewBox="0 0 715 773"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_980_45748)">
          <path
            d="M7.71043 383.315C-30.7896 258.522 39.1647 126.147 163.958 87.6465L186.44 80.7105C311.233 42.2105 443.608 112.165 482.108 236.958C520.608 361.751 450.654 494.126 325.861 532.626L303.379 539.562C178.586 578.062 46.2104 508.108 7.71043 383.315Z"
            fill="#62E7EC"
            fillOpacity="0.19"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_980_45748"
            x="-224.861"
            y="-151.861"
            width="939.542"
            height="923.995"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="111"
              result="effect1_foregroundBlur_980_45748"
            />
          </filter>
        </defs>
      </svg>

      <svg
        className="absolute right-0 top-0 w-[300px] lg:w-[800px]"
        width="642"
        height="670"
        viewBox="0 0 642 670"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_980_45876)">
          <path
            d="M232.71 280.315C194.21 155.522 264.165 23.1465 388.958 -15.3535L411.44 -22.2895C536.233 -60.7895 668.608 9.16473 707.108 133.958C745.608 258.751 675.654 391.126 550.861 429.626L528.379 436.562C403.586 475.062 271.21 405.108 232.71 280.315Z"
            fill="#92EC62"
            fillOpacity="0.19"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_980_45876"
            x="0.138672"
            y="-254.861"
            width="939.542"
            height="923.995"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="111"
              result="effect1_foregroundBlur_980_45876"
            />
          </filter>
        </defs>
      </svg>

      <Container>
        <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }} duration={0.8}>
          <ServiceSectionIntro />
        </ScrollReveal>

        <ScrollReveal
          hidden={{ y: 100 }}
          visible={{ y: 0 }}
          duration={0.8}
          delay={0.2}
        >
          <ServiceSectionProducts />
        </ScrollReveal>
      </Container>
    </div>
  );
};

export default ServicesSection;
