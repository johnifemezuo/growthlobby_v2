/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBlog } from "@/base/interface/IBlog";
import Image from "next/image";
import Link from "next/link";

export const BlogInlineCard = ({
  title,
  author,
  category,
  image,
  readTime,
  publishedAt,
  slug,
}: IBlog) => {

  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link
            href={slug}>
    <div className="flex flex-col space-y-4 bg-white border hover:shadow-lg transition-shadow duration-500 p-4 lg:p-6 rounded-xl ">
      <div className="flex space-x-4 lg:space-x-8 items-center">
        <div className="w-28 h-[130px] md:w-28 md:h-20 flex-shrink-0 lg:w-[150px] rounded-xl lg:h-[160px]">
          <Image
            src={image as any}
            alt="title"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-1 justify-between lg:h-full ">
          <div className="text-xs lg:text-sm text-gray-500 ">
            <span className="capitalize">{category}</span> ·{" "}
            <span>{readTime} mins read </span> · <span>{formattedDate}</span>
          </div>
          

          <div className="space-y-4">
          <h1
            className="text-base lg:text-xl hover:text-primary text-zinc-700 font-semibold leading-tight"
          >
            {title}
          </h1>
          <div className="text-xs text-gray-500 lg:text-sm">By {author as any}</div>
          </div>
        </div>
      </div>
    </div></Link>
  );
};
