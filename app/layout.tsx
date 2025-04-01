import type { Metadata } from "next";
import { Geist, Geist_Mono, Farro, Wix_Madefor_Display} from "next/font/google";
import "./globals.css";
import { PageLayout } from "@/components/Layout/PageLayout";

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
        className={`${geistSans.variable} ${geistMono.variable} ${farro.variable} ${wixMadefor.variable}  antialiased`}
      >
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
