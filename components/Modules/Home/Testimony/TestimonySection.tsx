import { Container } from "@/components/Container/Container";
import Image from "next/image";

const clientsProfile = [
  {
    id: "01",
    name: "Stanley O.",
    position: "CEO Ventlio & Osmaxin",
    image: "/images/stanley.enc",
    testimony:
      "When it comes to delivering a high-quality user interface and experience working GrowthLobby has been a game changer for our team at Osmaxin, it has never been a bad choice for us and I will always bet on them to deliver a design no matter the complexity of the product because they always get it right"
  },
  {
    id: "02",
    name: "Gloria C.",
    position: "Product Manager Exportpadi",
    image: "/images/gloria.webp",
    testimony:
      "John was incredible. He delivered all my deliverables on time and was very proactive, helping me make suggestions and explaining everything I got confused with. I'd recommend him and his team ten times again.",
  },

  {
    id: "03",
    name: "Tobilola O.",
    position: " CEO WITFORD",
    image: "/images/tobi.enc",
    testimony:
      "From concept to execution, Growthlobby’s team was exceptional. They delivered a responsive website that perfectly matches our brand and engages our audience effortlessly.",
  },

  {
    id: "04",
    name: "Rachel T.",
    position: "Product Manager at NexaDigital",
    image: "/images/Ellipse-3.png",
    testimony:
      "Growthlobby’s ability to capture our brand's essence and translate it into a beautiful, functional app is unmatched. Their attention to detail is what sets them apart.",
  },
];

const TestimonySection = () => {
  return (
    // <Container>
    <div className="font-wixMadefor relative pb-20">
      <div className="m-auto relative bg-foreground text-background min-h-screen h-auto pt-12 md:pt-20">
        <div className=" flex sticky top-20 m-auto space-x-4 text-center md:text-7xl text-2xl justify-center font-medium items-center">
          <span className="">
            What Our <span className="text-calm">Clients</span> Are Saying
          </span>
          <Image
            width={100}
            height={100}
            src="/images/happiness.png"
            alt="Happiness"
            className="h-12 w-12 md:h-20 md:w-20"
          />
        </div>
        <Container>
          {clientsProfile.map((profile) => (
            <div
              key={profile.id}
              className="container sticky bg-[#0A0B0B] top-60 md:px-16 py-12 gap-4 md:py-20 px-4 flex flex-col-reverse md:flex-row md:justify-between md:font-medium md:items-center md:mt-20 md:border-t border-slate-400 mx-auto"
            >
              <div className="flex flex-col gap-8 md:w-[50%]">
                <span className="text-[var(--primary)] font-bold text-2xl hidden md:block">
                  {profile.id}
                </span>
                <span className="text-2xl">{profile.testimony}</span>
              </div>
              <div className="md:w-[35%]">
                <div className="flex justify-between items-center md:justify-end ">
                  {" "}
                  <span className="text-primary font-bold text-2xl  md:invisible">
                    {profile.id}
                  </span>
                  <Image
                    width={100}
                    height={100}
                    src="/images/arrow-1.png"
                    alt="Happiness"
                    className="h-12 w-12 md:h-16 md:w-16 "
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-5 m-auto">
                  <div className="rounded-full overflow-hidden border-2 border-white w-[100px] h-[100px]">
                    <Image
                      width={100}
                      height={100}
                      src={profile.image}
                      alt="Happiness"
                      className="w-full h-full m-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-center md:text-left">
                    <span>{profile.name}</span>
                    <span className="text-calm">{profile.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default TestimonySection;
