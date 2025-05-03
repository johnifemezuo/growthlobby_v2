import Link from "next/link";

const ContactGrowthlobbySection = () => {
  return (
    <div>
      <div className="relative min-h-[200px] bg-[#C0ED0C] w-full flex items-center justify-center bg-limegreen overflow-hidden">
        <svg
        className="absolute max-w-[500px] mx-auto"
          width="1073"
          height="527"
          viewBox="0 0 1073 527"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="536.5"
            cy="263.5"
            r="535.789"
            fill="white"
            fillOpacity="0.22"
            stroke="white"
            strokeWidth="1.42119"
          />
          <circle
            cx="536.5"
            cy="263.5"
            r="451.939"
            fill="white"
            fillOpacity="0.22"
            stroke="white"
            strokeWidth="1.42119"
          />
          <circle
            cx="536.5"
            cy="263.5"
            r="343.928"
            fill="white"
            fillOpacity="0.22"
            stroke="white"
            strokeWidth="1.42119"
          />
          <circle
            cx="536.5"
            cy="263.5"
            r="243.024"
            fill="white"
            fillOpacity="0.22"
            stroke="white"
            strokeWidth="1.42119"
          />
        </svg>

        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black mb-10">
            Lets us be your designer Partner
          </h1>
          <Link
            href="https://calendly.com/growthlobbyagency"
            target="_blank"
            className={` bg-black uppercase  transition-all text-white rounded-full font-medium px-6 py-4
            }`}
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactGrowthlobbySection;
