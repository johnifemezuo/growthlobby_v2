import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  isFeatured?: boolean;
  date?: string;
}

export default function BlogCard({
  title,
  slug,
  imageUrl,
  date,
  isFeatured = false,
}: BlogCardProps) {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-yellow-100 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <Link href={`/blog/${slug}`}>
        <div className={`relative ${isFeatured ? "h-[200px] lg:h-[480px]" : "h-[200px]"}`}>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <p className="text-sm text-zinc-600">{date}</p>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </Link>
    </div>
  );
}
