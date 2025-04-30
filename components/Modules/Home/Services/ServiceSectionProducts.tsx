"use client";

import Image from "next/image";

interface Product {
  id: string;
  title: string;
  description1: string;
  description2: string;
  image: string;
}

const products: Product[] = [
  {
    id: "01",
    title: "UI/UX Design",
    description1: "We craft seamless and engaging user experiences",
    description2:
      "that prioritize functionality and aesthetics. From intuitive mobile app interfaces to responsive websites, our designs ensure your audience connects with your brand effortlessly, driving customer satisfaction and loyalty.",
    image: "/images/d-2.webp",
  },
  {
    id: "02",
    title: "Graphics Design",
    description1: " Our graphic designs are more than visuals",
    description2:
      " they tell compelling stories. Whether it's marketing materials, social media creatives, or corporate presentations, we deliver eye-catching designs that elevate your brand and make a lasting impact.",
    image: "/images/pa-5.jpeg",
  },
  {
    id: "03",
    title: "Illustration",
    description1:
      "Add a personal touch to your brand with custom illustrations.",
    description2: `From concept art and book covers to infographics and promotional artwork, our illustrations bring unique character and creativity to your projects.`,
    image: "/images/ill-1.webp",
  },
  {
    id: "04",
    title: "Logo Design",
    description1: "Your logo is the face of your brand. We design memorable,",
    description2:
      "versatile logos that represent your identity and values, helping your business stand out and stay top-of-mind with your target audience.",
    image: "/images/l-1.webp",
  },
  {
    id: "05",
    title: "Motion Design",
    description1: "Bring your brand to life with dynamic motion graphics.",
    description2:
      "From explainer videos and animated ads to social media animations, our motion designs communicate your message effectively while keeping your audience engaged.",
    image: "/images/m-1.png",
  },
  {
    id: "06",
    title: "Website Development",
    description1:
      "Transform your online presence with our expertly crafted websites.",
    description2:
      "We build responsive, user-friendly sites tailored to your business needs, blending cutting-edge technology with stunning design. Whether it’s a corporate site, portfolio, or e-commerce platform, we ensure your website not only looks amazing but functions seamlessly to engage users and achieve your goals.",
    image: "/images/p-3.webp",
  },
];

const ServiceSectionProducts = () => {
  // const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="max-w-full mx-auto space-y-9 lg:space-y-12 mt-9">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex relative group transition-all duration-500 items-center md:justify-between flex-col-reverse md:flex-row md:border-t border-calm md:pt-6"
        >
          <div className="space-y-2">
            <div className="flex md:w-[60%] justify-between pt-5">
              <h4 className="text-[var(--primary)] md:text-3xl hidden md:block font-semibold lg:w-[600px]">
                {product.id}
              </h4>
              <div className="flex items-between gap-4 flex-col md:w-[500px] md:text-left">
                <h2 className="text-zinc-200 text-2xl font-bold">
                  {product.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Smooth Reveal Effect on Hover */}
          <div
            className={`relative overflow-hidden z-50 border rounded-lg border-zinc-700 lg:absolute lg:right-3 lg:opacity-0 lg:translate-y-10 group-lg:hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500`}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={450}
              className="object-cover rounded max-w-[300px] lg:w-[350px]  h-[150px] lg:h-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSectionProducts;
