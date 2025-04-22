/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IBlog } from "@/base/interface/IBlog";
import { Container } from "@/components/Container/Container";
import { useState } from "react";
import BlogCard from "../Home/BlogSection/BlogCard";
import { BlogHeroSection } from "./BlogHeroSection";
import { BlogInlineCard } from "./BlogInlineCard";

export default function BlogContents({
  blogContents,
}: {
  blogContents: IBlog[];
}) {

  const getCategories = (blogContents: IBlog[]): string[] => {
    const categories = blogContents?.map((blog) => blog.category);
    return Array.from(new Set(categories));
  };

  const categories = getCategories(blogContents);

  // const loadMore = () => {
  //   setVisiblePosts((prevCount) => Math.min(prevCount + 4, blogs.length));
  // };

  // const [visiblePosts, setVisiblePosts] = useState<number>(8);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredBlogContents = activeCategory
    ? blogContents.filter((blog: IBlog) => blog.category === activeCategory)
    : blogContents;

  // Filter for featured posts
  const featuredPosts = blogContents.filter((blog: IBlog) => blog.featured);
  const [firstFeatured, secondFeatured] = featuredPosts.slice(0, 2); // First two featured posts
  const thirdFeatured = featuredPosts[2];

  // const [activeFilter, setActiveFilter] = useState("UI/UX DESIGNS");

  // const filteredItems = projects.filter((item) =>
  //   activeFilter === "UI/UX DESIGNS" ? true : item.category === activeFilter
  // );

  return (
    <div className="py-6 lg:py-9 bg-white mx-auto px-4 space-y-8 lg:space-y-8">
      <BlogHeroSection />

      <Container></Container>
      <Container className="py-8">
        <h1 className="text-2xl font-bold lg:text-4xl mb-8 text-zinc-700 text-center">
          Featured Posts
        </h1>

        <div className="">
          <div className="grid gap-3 lg:gap-8 lg:grid-cols-2">
            <div className="grid gap-4 lg:gap-8 order-last lg:order-first">
              {[firstFeatured, secondFeatured].map((post: IBlog, i) => (
                <BlogInlineCard
                  key={i}
                  slug={`/blog/${post.slug}`}
                  title={post.title}
                  readTime={post.readTime}
                  category={post.category as any}
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

          <div className="lg:mt-20 mt-12 pt-6 border-t lg:py-12">
            <h4 className="text-lg lg:text-2xl font-semibold text-center pb-4 xl:text-3xl">
              Posts
            </h4>
            <div className="w-full">
              <div className="py-4 lg:flex lg:w-full  items-center justify-center lg:space-x-5 space-x-3 lg:space-y-0 space-y-4 ">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`capitalize border font-medium text-sm lg:text-base py-2 lg:px-6 px-4 rounded-full ${
                    activeCategory === null
                      ? "bg-primary text-black font-semibold"
                      : "border-zinc-700 border-2 text-zinc-700"
                  }`}
                >
                  All Posts
                </button>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 min-w-max font-medium border py-2 rounded-full text-sm transition-colors duration-300
                  ${
                    activeCategory === category
                      ? "bg-[var(--primary)] text-black border border-black"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <h1 className="text-2xl font-bold lg:text-4xl mb-8 text-zinc-700 border-t py-4 capitalize">
              {activeCategory}
            </h1>

            <div className="grid lg:grid-cols-2 gap-8 my-5 lg:my-8  ">
              {filteredBlogContents.map((post: IBlog, i) => (
                <BlogInlineCard
                  key={i}
                  slug={`/blog/${post.slug}`}
                  title={post.title}
                  readTime={post.readTime}
                  category={post.category as any}
                  author={post.author.name as any}
                  image={post.image.url as any}
                  publishedAt={post.publishedAt as any}
                />
              ))}
            </div>
          </div>

          {/* {visiblePosts < filteredBlogContents.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMore}
                className="rounded-full px-6 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800"
              >
                Load more
              </button>
            </div>
          )} */}
        </div>
      </Container>
    </div>
  );
}
