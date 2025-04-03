import { IBlog } from "@/base/interface/IBlog";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import BlogCard from "./BlogCard";

interface BlogSectionProps {
  posts: IBlog[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  // Find the featured post (first one or the one marked as featured)
  const featuredPost = posts.find((post) => post.featured) || posts[0];

  // Get the remaining posts (excluding the featured one)
  const remainingPosts = posts.filter((post) => post.id !== featuredPost.id);

  return (
    <ScrollReveal
      hidden={{ y: 100 }}
      visible={{ y: 0 }}
      delay={0.6}
      duration={1}
    >
      <div className="max-w-7xl mx-auto px-5 py-20 lg:py-28 lg:px-8 ">
        <h2 className="text-4xl font-bold text-center mb-12">Our News</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Post (Left) */}
          <BlogCard
            title={featuredPost.title}
            slug={featuredPost.slug}
            imageUrl={featuredPost.coverImage.url}
            isFeatured={true}
            date={featuredPost.date}
          />

          {/* Right Column Posts */}
          <div className="flex flex-col gap-6">
            {remainingPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                slug={post.slug}
                imageUrl={post.coverImage.url}
                date={featuredPost.date}
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
