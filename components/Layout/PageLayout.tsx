/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation"; // Use next/navigation hooks
import { useEffect, useState } from "react";
import Footer from "../UI/Footer/Footer";
import Nav from "../UI/NavbarMain/Nav";

export const PageLayout = ({ children }: { children?: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true); // Initialize as true to show the loading screen first
  const [animationClass, setAnimationClass] = useState("animate-slide-in"); // Manage animation class
  const [imageAnimationClass, setImageAnimationClass] = useState(""); // Manage image animation class
  const [imageAnimationClass2, setImageAnimationClass2] = useState(""); // Manage image animation class
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    setAnimationClass("animate-slide-in"); // Start with slide-in animation

    // Trigger the translate-x effect after 1 second
    const imageTimeout = setTimeout(() => {
      setImageAnimationClass("translate-x-4 lg:translate-x-6"); // Add class to reset translate-x
      setImageAnimationClass2("-translate-x-4 lg:-translate-x-6"); // Add class to reset translate-x
    }, 700);

    const timeout = setTimeout(() => {
      setAnimationClass("animate-slide-out"); // Trigger slide-out animation
      setTimeout(() => {
        setIsLoading(false); // Remove loading screen after slide-out animation
      }, 700); // Duration of the slide-out animation
    }, 1500); // Show loading screen for 2 seconds

    return () => {
      clearTimeout(timeout);
      clearTimeout(imageTimeout);

      setImageAnimationClass("translate-x-0"); // Add class to reset translate-x
      setImageAnimationClass2("-translate-x-0");
    };
  }, [pathname]);

  return (
    <div>
      {isLoading ? (
        <div
          className={`fixed inset-0 bg-[var(--primary)] flex items-center justify-center z-50 ${animationClass}`}
        >
          {/* Loading Icon */}
          <div className="space-y-1 lg:space-y-2">
            <img
              alt=""
              src="/images/pantop.png"
              className={`w-12 lg:w-[80] duration-300 transition-all ${imageAnimationClass}`}
            />
            <img
              alt=""
              src="/images/panbottom.png"
              className={`w-12 lg:w-[80] duration-300 transition-all ${imageAnimationClass2}`}
            />
          </div>
        </div>
      ) : (
        <div>
          <Nav />
          {children}
          <Footer />
        </div>
      )}
    </div>
  );
};
 