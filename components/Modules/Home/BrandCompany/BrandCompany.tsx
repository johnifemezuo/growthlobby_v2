import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import Image from "next/image";

const BrandCompany = () => {
  return (
    <div className="bg-white w-full py-12 lg:py-20 xl:py-36 px-5 lg:px-0">
      <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }} delay={0.6} duration={1}>
      <Container>
        <div className="space-y-9 lg:space-y-12">
          <h2 className="text-xl lg:text-4xl text-center max-w-xl mx-auto font-semibold text-gray-800">
            Our design thinking is recognised by enterprises we cooperated with
          </h2>


          <div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[130px] bg-white border rounded-lg p-8 flex items-center justify-center">
                <Image width={150} height={150} src="/images/logo1.png" alt="Logo 1" className="w-full h-full object-cover " />
              </div>
              <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[130px] bg-white border rounded-lg p-8 flex items-center justify-center">
                <Image width={150} height={150} src="/images/logo1.png" alt="Logo 1" className="w-full h-full object-cover " />
              </div>
              <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[130px] bg-white border rounded-lg p-8 flex items-center justify-center">
                <Image width={150} height={150} src="/images/logo1.png" alt="Logo 1" className="w-full h-full object-cover " />
              </div>
              <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[130px] bg-white border rounded-lg p-8 flex items-center justify-center">
                <Image width={150} height={150} src="/images/logo1.png" alt="Logo 1" className="w-full h-full object-cover " />
              </div>
            </div>
          </div>
        </div>
      </Container>
      </ScrollReveal>
    </div>
  );
};

export default BrandCompany;
