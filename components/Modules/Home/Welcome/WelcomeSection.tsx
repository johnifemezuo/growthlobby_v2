import { Container } from "@/components/Container/Container";
import WelcomeSectionContent from "./WelcomeSectionContent";
import WelcomeSectionIcon from "./WelcomeSectionIcon";

const WelcomeSection = () => {
  return (
    <Container>
      <div className="font-wixMadefor !relative flex flex-col md:flex-row-reverse w-full md:w-[90%] mx-auto justify-between md:px-16 lg:px-4 py-12 gap-4 md:py-20 px-4 2xl:w-full">
        <WelcomeSectionIcon />
        <WelcomeSectionContent />
      </div>
    </Container>
  );
};

export default WelcomeSection;
