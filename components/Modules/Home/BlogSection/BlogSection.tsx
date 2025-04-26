"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBlog } from "@/base/interface/IBlog";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { BlogInlineCard } from "../../BlogPage/BlogInlineCard";
import BlogCard from "./BlogCard";

interface BlogSectionProps {
  posts: IBlog[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const [firstFeatured, secondFeatured] = posts?.slice(0, 2); // First two featured posts
  const thirdFeatured = posts[2];

  return (
    <ScrollReveal
      hidden={{ y: 100 }}
      visible={{ y: 0 }}
      delay={0.6}
      duration={1}
    >
      <div className="max-w-7xl mx-auto px-5 py-20 lg:py-28 lg:px-8 ">
        <h2 className="text-4xl font-bold text-center mb-12">Our News</h2>

        <div className="grid gap-3 lg:gap-8 lg:grid-cols-2">
          <div className="grid gap-4 lg:gap-8 order-last lg:order-first">
            {[firstFeatured, secondFeatured].map((post: IBlog, i) => (
              <BlogInlineCard
                key={i}
                slug={`/blog/${post.slug}`}
                title={post.title}
                readTime={post.readTime}
                category={post.category}
                author={post.author.name as any}
                image={post.image.url as any}
                publishedAt={post.publishedAt}
              />
            ))}
          </div>

          <div className="flex-1  order-first lg:order-last">
            <BlogCard
              slug={thirdFeatured.slug}
              title={thirdFeatured.title}
              readTime={thirdFeatured.readTime as any}
              category={thirdFeatured.category}
              author={thirdFeatured.author.name}
              image={thirdFeatured.image.url}
              publishedAt={thirdFeatured.publishedAt}
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
