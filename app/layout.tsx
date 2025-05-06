import { ApolloWrapper } from "@/base/lib/apollo-client";
import { PageLayout } from "@/components/Layout/PageLayout";
import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const wixMadefor = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-wix-madefor",
});

export const metadata: Metadata = {
  title: "Growthlobby : Design + Code Agency",
  description: "Your web design partner",
  icons: '/images/logo1.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo1.png" sizes="any" type="image/png"/>
        <link rel="apple-touch-icon" href="/images/logo1.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Your web design partner" />
        <meta name="keywords" content="web design, development, agency, design agency, Nigeria" />
        <meta name="author" content="Growthlobby" />
        <meta property="og:title" content="Growthlobby" />
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
