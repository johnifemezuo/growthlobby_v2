"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Footer } from "../UI/Footer/Footer";
import Nav from "../UI/NavbarMain/Nav";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div >
      <Nav />
      {children}
      {/* <Footer /> */}

      {/* <Link href="#top">
        <div
          className={`${
            isScrolled ? "block" : "hidden"
          } fixed  bottom-8 right-8 rounded-full border z-50 text-white border-white/30 w-16 h-16 grid place-content-center bg-primary`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13 12V20H11V12H4L12 4L20 12H13Z"></path>
          </svg>
        </div>
      </Link> */}
    </div>
  );
};
