import Image from "next/image";

const HeroCard = ({
  image,
  title,
  category,
}: {
  image: string;
  title: string;
  category: string;
}) => {
  return (
    <div className="overflow-hidden  rounded-lg min-w-full lg:min-w-[400px] lg:h-[400px] ">
      <div className="relative bg-zinc-50 w-full  overflow-hidden h-[350px]  lg:w-[600px] lg:h-[350px]">
        <Image
          src={image}
          alt={title}
          width={900}
          height={800}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="font-medium text-lg">{title}</p>
        <p className="text-sm text-gray-600">{category}</p>
      </div>
    </div>
  );
};

export default HeroCard;
