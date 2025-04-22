import type { Metadata } from "next";
import { Wix_Madefor_Display} from "next/font/google";
import "./globals.css";
import { PageLayout } from "@/components/Layout/PageLayout";
import { ApolloWrapper } from "@/base/lib/apollo-client";


// const farro = Farro({
//   variable: "--font-farro",
//   subsets: ["latin"],
//   weight: ["400", "700"], 
// });
const wixMadefor = Wix_Madefor_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-wix-madefor', 
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
      <body
        className={` ${wixMadefor.variable}  antialiased`}
      >
        <PageLayout>
          <ApolloWrapper>
            {children}
          </ApolloWrapper>
          </PageLayout>
      </body>
    </html>
  );
}
