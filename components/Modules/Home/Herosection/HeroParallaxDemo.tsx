"use client";
import { HeroParallax } from "@/components/UI/HeroParallax";
import React from "react";


export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/images/d-1.webp",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/images/d-2.webp",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/images/ill-1.webp",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/images/d-4.webp",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/images/d-5.webp",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/images/d-3.webp",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/images/p-2.webp",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/images/p-3.webp",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/images/p-4.webp",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/images/p-5.webp",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "/images/p-6.webp",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "/images/pad-1.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "/images/pad-2.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "/images/pad-3.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "/images/pad-4.png",
  },
];

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}