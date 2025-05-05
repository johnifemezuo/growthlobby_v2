"use client";

import { IBlog } from "@/base/interface/IBlog";
import { BLOG_QUERY } from "@/base/query/blog";
import SmoothScroll from "@/components/Animations/SmoothScroll";
import BlogContents from "@/components/Modules/BlogPage/BlogContents";
import Footer from "@/components/UI/Footer/Footer";
import { useQuery } from "@apollo/client";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

interface IBlogData {
  blogs: IBlog[];
}

export default function BlogPage() {
  const { data, loading } = useQuery<IBlogData>(BLOG_QUERY);
  const blogContents = data?.blogs || {};

  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      <SmoothScroll>
        {loading ? (
          <div> Loading... </div>
        ) : (
          <BlogContents blogContents={blogContents as IBlog[]} />
        )}
        <Footer />
      </SmoothScroll>
    </Suspense>
  );
}
