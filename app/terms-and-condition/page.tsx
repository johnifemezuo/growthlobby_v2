/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { TERMS_QUERY } from "@/base/query/terms";
import SmoothScroll from "@/components/Animations/SmoothScroll";
import { PageContainer } from "@/components/Container/PageContainer";
import TermsHeroSection from "@/components/Modules/Terms/TermsHerosection";
import Footer from "@/components/UI/Footer/Footer";
import { useQuery } from "@apollo/client";
import parse from "html-react-parser";
import { Suspense } from "react";

export default function TermsPage() {
  const { data, loading } = useQuery<any>(TERMS_QUERY);
  const content = data?.termsAndConditions[0] ?? {};

  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      <SmoothScroll>
        {loading ? (
          <div className="w-full h-screen bg-zinc-50 ">Loading...</div>
        ) : (
          <div>
            <TermsHeroSection date={content.publishedAt} />

            <PageContainer>
              <div className="pageStyle">{parse(content.content.html)}</div>
            </PageContainer>
          </div>
        )}
        <Footer />
      </SmoothScroll>
    </Suspense>
  );
}
