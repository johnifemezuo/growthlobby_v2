import Image from "next/image";

const StackStatistics = () => {
  return (
    <div className=" hidden lg:flex justify-around border-t border-gray-700 py-8">
      <div className="flex justify-between items-center w-full">
        {/* Product Designers */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
          <span className="text-white text-4xl md:text-5xl font-bold">10+</span>
          <span className="text-gray-400 text-sm tracking-wider text-center md:text-left md:font-medium font-medium">
            <p>PRODUCT</p>
            <p>DESIGNERS</p>
          </span>
        </div>

        <div className="border-l border-gray-700 w-1 hidden md:block mx-auto"></div>

        {/* Web Developers */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4 ">
          <span className="text-white text-4xl md:text-5xl font-bold">10+</span>
          <span className="text-gray-400 text-sm tracking-wider text-center md:text-left md:font-medium font-medium">
            <p>GRAPHICS</p>
            <p>DESIGNER</p>
          </span>
        </div>
        
        <div className="border-l border-gray-700 w-1 hidden md:block mx-auto"></div>

        {/* Mobile App Developers */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4 ">
          <span className="text-white text-4xl md:text-5xl font-bold">15+</span>
          <span className="text-gray-400 text-sm tracking-wider text-center md:text-left md:font-medium font-medium">
            <p>MOTION</p>
            <p>DESIGNER</p>
          </span>
        </div>
        <div className="border-l border-gray-700 w-1 hidden md:block mx-auto"></div>

        {/* Mobile App Developers */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4 ">
          <span className="text-white text-4xl md:text-5xl font-bold">10+</span>
          <span className="text-gray-400 text-sm tracking-wider text-center md:text-left md:font-medium font-medium">
            <p>WEB</p>
            <p>DEVELOPERS</p>
          </span>
        </div>

        <div className="border-l border-gray-700 w-1 hidden md:block mx-auto"></div>

        {/* Mobile App Developers */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
          <span className="text-white text-4xl md:text-5xl font-bold">10+</span>
          <span className="text-gray-400 text-sm tracking-wider text-center md:text-left md:font-medium font-medium">
            <p>LOGO</p>
            <p>DESIGNERS</p>
          </span>
        </div>

        {/* Arrow Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            width={100}
            height={100}
            src="/images/arrow-1.png"
            alt="Arrow"
            className="h-12 w-12 md:h-16 md:w-16 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default StackStatistics;
