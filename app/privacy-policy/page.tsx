/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { POLICY_QUERY } from "@/base/query/terms";
import { PageContainer } from "@/components/Container/PageContainer";
import PrivacyPolicyHerosection from "@/components/Modules/privacy/PrivacyPolicyHerosection";
import { useQuery } from "@apollo/client";
import parse from "html-react-parser";
import { Suspense } from "react";

export default function TermsPage() {
  const { data, loading } = useQuery<any>(POLICY_QUERY);
  const content = data?.privacyPolicies[0] ?? {};

  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      {loading ? (
        <div className=""></div>
      ) : (
        <div className="animate-slide-in">
          <PrivacyPolicyHerosection date={content.publishedAt} />

          <PageContainer>
            <div className="pageStyle">{parse(content.content.html)}</div>
          </PageContainer>
        </div>
      )}
    </Suspense>
  );
}
