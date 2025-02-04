import { Layout } from "@/components/Layout/Layout";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Farro,} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const farro = Farro({
  variable: "--font-farro",
  subsets: ["latin"],
  weight: ["400", "700"], 
});
// const wixMadeforDisplay = Wix_Madefor_Display({
//   subsets: ["latin"],
//   variable: "--font-wix",
//   weight: ["400", "500", "600", "700"], 
// });


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
        className={`${geistSans.variable} ${geistMono.variable} ${farro.variable}  antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
