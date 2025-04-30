"use client";

import { IBlog } from "@/base/interface/IBlog";
import { BLOG_QUERY } from "@/base/query/blog";
import BlogContents from "@/components/Modules/BlogPage/BlogContents";
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
      {loading ? (
        <div> Loading... </div>
      ) : (
        <BlogContents blogContents={blogContents as IBlog[]} />
      )}
    </Suspense>
  );
}
