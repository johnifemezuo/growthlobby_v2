/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IBlog } from "@/base/interface/IBlog";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";

import parse from "html-react-parser";
import Link from "next/link";
import BlogDetailHero from "./BlogDetailHero";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { BlogInlineCard } from "./BlogInlineCard";
import PageTitle from "@/components/Elements/PageTitle";
import { PageContainer } from "@/components/Container/PageContainer";

export const BlogDetailContent = ({
  details,
  otherPosts,
}: {
  details: IBlog | any;
  otherPosts: IBlog[];
}) => {
  console.log(otherPosts)
  return (
    <div>
      <BlogDetailHero details={details} />

      <div className="bg-[#F3F4F6] py-12  px-5 xl:px-0">
        <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
          <PageContainer>
            <div className="pageStyle">
              {parse(details.content.html as string)}
            </div>

            <div className="grid border-t mt-9 lg:flex gap-3 items-center justify-between py-8 ">
              <h3 className="text-zinc-800 lg:text-lg font-medium">
                Share This Blog on Your Social Media
              </h3>
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <FacebookIcon />
                </Link>

                <Link href="/">
                  <TwitterIcon />
                </Link>

                <Link href="/">
                  <LinkedinIcon className="text-zinc-800" />
                </Link>
                <Link href="/">
                  <InstagramIcon />
                </Link>
              </div>
            </div>
          </PageContainer>

          <PageContainer>
            <div className="mt-12 py-12 border-t space-y-9">
              <div className="grid gap-6 lg:flex items-center justify-between ">
                <PageTitle>Other Posts</PageTitle>
                {/* <ButtonOutlinePrimary text="See all Blog" link="/blog" /> */}
              </div>

              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                  {otherPosts.map((blog: IBlog, id: number) => (
                    <BlogInlineCard
                    key={id}
                    slug={`/blog/${blog.slug}`}
                    title={blog.title}
                    readTime={blog.readTime}
                    category={blog.category}
                    author={blog.author.name as any}
                    image={blog.image.url as any}
                    publishedAt={blog.publishedAt}
                  />
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </ScrollReveal>
      </div>
    </div>
  );
};
