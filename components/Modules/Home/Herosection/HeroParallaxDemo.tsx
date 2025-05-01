"use client";
import { HeroParallax } from "@/components/UI/HeroParallax";
import React from "react";


export const products = [
  {
    title: "Mobile App Design",
    thumbnail:
      "/images/d-1.webp",
  },
  {
    title: "Interaction Design",
    thumbnail:
      "/images/d-2.webp",
  },
  {
    title: "illustration",
    thumbnail:
      "/images/ill-1.webp",
  },

  {
    title: "App Design",
    thumbnail:
      "/images/d-4.webp",
  },
  {
    title: "Editrix AI",
    thumbnail:
      "/images/d-5.webp",
  },
  {
    title: "Pixel Perfect",
    thumbnail:
      "/images/d-3.webp",
  },

  {
    title: "Mobile App Design",
    thumbnail:
      "/images/p-2.webp",
  },
  {
    title: "Website Design",
    thumbnail:
      "/images/p-3.webp",
  },
  {
    title: "Website Developement",
    thumbnail:
      "/images/p-4.webp",
  },
  {
    title: "Mobile App Design",
    thumbnail:
      "/images/p-5.webp",
  },
  {
    title: "Renderwork Studio",
    thumbnail:
      "/images/p-6.webp",
  },

  {
    title: "Graphics Design",
    thumbnail:
      "/images/pad-1.png",
  },
  {
    title: "Social Media Post Designs",
    thumbnail:
      "/images/pad-2.png",
  },
  {
    title: "Creative Design",
    thumbnail:
      "/images/pad-3.png",
  },
  {
    title: "Graphics",
    thumbnail:
      "/images/pad-4.png",
  },
];

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}