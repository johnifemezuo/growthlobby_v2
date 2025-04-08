import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Asset Valuation",
    description:
      "Platform linking insurers with valuation services for efficient asset assessments.",
    image: "/images/landing-page.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    category: "brand / graphics"

  },
  {
    id: 2,
    title: "Somakro",
    description:
      "Connecting you to reliable local professionals for every task, making everyday services accessible, efficient, and trusted.",
    image: "/images/landing-page-4.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    category: "brand / graphics"
  },
  {
    id: 3,
    title: "Somakro",
    description:
      "Connecting you to reliable local professionals for every task, making everyday services accessible, efficient, and trusted.",
    image: "/images/landing-page-3.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    category: "brand / graphics"

  },
  {
    id: 4,
    title: "Asset Valuation Mobile",
    description: "Mobile-first asset management solution.",
    image: "/images/landing-page-1.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    category: "brand / graphics"

  },
  {
    id: 5,
    title: "Asset Valuation Mobile",
    description:
      "Connecting you to reliable local professionals for every task, making everyday services accessible, efficient, and trusted.",
    image: "/images/landing-page-6.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    category: "brand / graphics"

  },
  {
    id: 6,
    title: "Somakro",
    description: "Mobile application for expense tracking and budgeting.",
    image: "/images/landing-page-5.png",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    category: "brand / graphics"

  },
];

const WorksSection = () => {
  return (
    <Container>
      <div className="container mx-auto px-4 md:px-0 py-16 text-foreground md:w-[90%] 2xl:w-full">
        {/* Header Section */}
         <ScrollReveal hidden={{ y: 50 }} visible={{ y: 0 }} duration={0.5}>
        <div className="mb-12 max-w-5xl ml-auto space-y-3 ">
          <h4 className="text-sm lg:text-base text-zinc-600">Our Work</h4>
          <h2 className="text-3xl font-semibold mb-4 md:text-5xl">
            From breakthrough <span className="text-calm">innovations</span> to
            industry-shaping <span className="text-calm">growth</span>, our
            clients are changing the game—and we&apos;re proud to be part of
            their journey.
          </h2>
        </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <ScrollReveal  hidden={{ y: 100 }} visible={{ y: 0 }} duration={0.8}>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-16 gap-8 auto-rows-min   ">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative group md:${project.colSpan} md:${project.rowSpan}  rounded-lg overflow-hidden `}
            >
              <div
                className={`relative rounded-xl lg:rounded-2xl overflow-hidden  ${project.rowSpan === "row-span-2" ? "md:h-[600px] row-span-2 " : "md:h-[400px] row-span-1"} w-full rounded-lg h-[300px]`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={100}
                  priority={true}
                  className="object-cover hover:scale-110 transition-transform duration"
                />
              </div>
              {/* <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 md:text-4xl">{project.title}</h3>
              <p className="text-base md:text-lg">{project.description}</p>
            </div> */}
              <div className="flex items-center justify-between mt-4">
                <p className="font-medium text-lg lg:text-2xl">{project.title}</p>
                <p className="text-sm text-gray-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>
        <div className=" mt-6 m-auto text-center md:mt-12">
          <Link href="/works">
            <button className="text-background p-4 md:px-6 md:py-4 bg-foreground m-auto font-semibold rounded-lg">
              Check our Work
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default WorksSection;
