import { ApolloWrapper } from "@/base/lib/apollo-client";
import { PageLayout } from "@/components/Layout/PageLayout";
import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const wixMadefor = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-wix-madefor",
});

export const metadata: Metadata = {
  title: "Growthlobby : Design + Code Agency",
  description: "Your web design partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo1.png" />
        <link rel="apple-touch-icon" href="/images/logo1.png" />
        <link rel="icon" href="/images/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/images/favicon-16x16.png" sizes="16x16" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your web design partner" />
        <meta
          name="keywords"
          content="web design, development, agency, design agency, Nigeria"
        />
        <meta name="author" content="John Ifemezuo" />
        <meta property="og:description" content="Your web design partner" />
        <meta property="og:image" content="/images/logo1.png" />
        <meta property="og:url" content="https://growthlobby.com" />
      </head>
      <body className={` ${wixMadefor.variable}  antialiased`}>
        <PageLayout>
          <ApolloWrapper>{children}</ApolloWrapper>
          <Toaster />
        </PageLayout>
      </body>
    </html>
  );
}
