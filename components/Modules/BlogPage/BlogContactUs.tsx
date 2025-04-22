import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import PageTitle from "@/components/Elements/PageTitle";
import Para from "@/components/Elements/Para";
import Image from "next/image";

const BlogContactUs = () => {
  return (
    <div className="bg-[#E3E5EC] py-20 lg:py-28 px-5 xl:px-0">
      <ScrollReveal
        hidden={{ y: 100 }}
        visible={{ y: 0 }}
        className="overflow-x-scroll lg:overflow-hidden"
      >
        <Container>
          <div className="text-center space-y-4 flex flex-col items-center">
            <Image
              src="/images/wave.png"
              alt="alt"
              width={90}
              height={90}
              className="w-12 h-12 mx-auto"
            />
            <PageTitle className="text-black">
              Tell Us About Your Project
            </PageTitle>
            <Para>
              very one of our clients has expressed their delight, so why not
              give it a shot and click on the Get in Touch Button?
            </Para>
            {/* <ButtonOutlinePrimary text="Contact Us" link="/contact" /> */}
          </div>
        </Container>
      </ScrollReveal>
    </div>
  );
};

export default BlogContactUs;
