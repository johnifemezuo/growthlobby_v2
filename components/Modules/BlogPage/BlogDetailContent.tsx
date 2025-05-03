/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IBlog } from "@/base/interface/IBlog";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { PageContainer } from "@/components/Container/PageContainer";
import PageTitle from "@/components/Elements/PageTitle";
import parse from "html-react-parser";
import { FacebookShareButton, FacebookIcon , TwitterShareButton, TwitterIcon, InstapaperShareButton, InstapaperIcon, EmailShareButton, EmailIcon} from "next-share";

import BlogDetailHero from "./BlogDetailHero";
import { BlogInlineCard } from "./BlogInlineCard";
import ContactGrowthlobbySection from "./ContactGrowthlobbySection";

export const BlogDetailContent = ({
  details,
  otherPosts,
}: {
  details: IBlog | any;
  otherPosts: IBlog[];
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <div>
      <BlogDetailHero details={details} />

      <div className="bg-[#F3F4F6] py-12 px-5 xl:px-0">
        <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
          <PageContainer>
            <div className="pageStyle">
              {parse(details.content.html as string)}
            </div>

            {/* Contact Growthlobby */}
            <ContactGrowthlobbySection />

            <div className="grid border-t mt-9 lg:flex gap-3 items-center justify-between py-8">
              <h3 className="text-zinc-800 lg:text-lg font-medium">
                Share This Blog on Your Social Media
              </h3>
              
              
              <div className="flex--items space-x-4 ">
        <FacebookShareButton url={`${baseUrl}/post/${details.slug}`} quote={details.title} hashtag={"techforall"}>
          <FacebookIcon size={24} />
        </FacebookShareButton>
        <TwitterShareButton url={`${baseUrl}/post/${details.slug}`} title={details.title} hashtags={["techforall"]}>
          <TwitterIcon size={24} />
        </TwitterShareButton>
        <InstapaperShareButton url={`${baseUrl}/post/${details.slug}`} title={details.title}>
          <InstapaperIcon size={24} />
        </InstapaperShareButton>
        <EmailShareButton url={`${baseUrl}/post/${details.slug}`} subject={details.title} body={""}>
          <EmailIcon size={24} />
        </EmailShareButton>
      </div>
            </div>
          </PageContainer>

          <PageContainer>
            <div className="mt-12 py-12 border-t space-y-9">
              <div className="grid gap-6 lg:flex items-center justify-between">
                <PageTitle>Other Posts</PageTitle>
              </div>

              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
