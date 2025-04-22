import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  image: string;
  featured?: boolean;
  date?: string;
  category: string;
  readTime: string;
  author?: string;
  except?: string;
  publishedAt: string;
}

export default function BlogCard({ title, category, slug, image,except, readTime, publishedAt }: Readonly<BlogCardProps>) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <Link href={`/blog/${slug}`} className="">
      <div className="bg-[#DFE8ED] rounded-xl p-6  lg:flex relative w-full h-full">
        <div className="lg:p-6 lg:h-full w-full flex flex-col justify-between space-y-4 lg:space-y-6"> 
        <div className="text-xs lg:text-sm text-gray-500 ">
            <span className="capitalize">{category}</span> ·{" "}
            <span>{readTime} mins read </span> · <span>{formattedDate}</span>
          </div>
          <div className="space-y-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm text-zinc-500">{except}</p>
          </div>
        </div>
        <div className="h-[200px] mt-5 lg:mt-0 lg:h-[200px] rounded-lg overflow-hidden flex-shrink-0 lg:w-[200px] w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={500}
            height={500}	
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </Link>
  );
}
