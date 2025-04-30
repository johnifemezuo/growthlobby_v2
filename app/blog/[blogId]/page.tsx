/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IBlogData } from "@/base/interface/IBlog";
import { BLOG_DETAIL_QUERY, RELATED_BLOG_QUERY } from "@/base/query/blog";
import { BlogDetailContent } from "@/components/Modules/BlogPage/BlogDetailContent";
import { useSuspenseQuery } from "@apollo/client";
import Head from "next/head";
import { Suspense, use } from "react";

export default function BlogDetailPage({ params }: any) {
  const resolvedParams: any = use(params);
  const blogId = resolvedParams?.blogId;
  const { data: blogData } = useSuspenseQuery<IBlogData>(BLOG_DETAIL_QUERY, {
    variables: { slug: blogId },
  });

  const blog = blogData?.blogs[0] || {};

  const { data: relatedPosts } = useSuspenseQuery<IBlogData>(
    RELATED_BLOG_QUERY,
    {
      variables: { category: ["development"], slug: blogId },
    }
  );

  const otherPosts = relatedPosts?.blogs || {};

  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      <Head>
        <title>Growthlobby | Blog | {blog.title} </title>
      </Head>

      <BlogDetailContent details={blog} otherPosts={otherPosts} />
    </Suspense>
  );
}
