import Link from "next/link";
import { Button } from "../Button/Button";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  buttonText,
}: Readonly<ServiceCardProps>) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex lg:flex-row flex-col  lg:space-x-8 space-y-4 lg:space-y-0">
        {/* Image */}
        <div className="relative border-4 border-[#EEDCCF] lg:h-24 lg:w-32 h-24 w-24 rounded-full overflow-hidden bg-gray-100">
          <img src={imageSrc} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="space-y-6 w-full">
          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </h3>
            <p className="text-lg text-gray-600">{description}</p>
          </div>

          {/* Button */}
          <Link href="/work" className="inline-block">
          <Button>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
