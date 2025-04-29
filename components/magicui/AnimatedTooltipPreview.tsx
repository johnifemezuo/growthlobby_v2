"use client";
import React from "react";
import { AnimatedTooltip } from "../UI/AnimatedTooltip";
const people = [
  {
    id: 1,
    name: "John",
    designation: "UI Engineer",
    image:
      "/images/t5.png",
  },
  {
    id: 2,
    name: "Panda Johnson",
    designation: "Graphics Designer",
    image:
      "/images/t6.png",
  },
  {
    id: 3,
    name: "Lucy",
    designation: "Motion Designer",
    image:
      "/images/t4.png",
  },
  {
    id: 4,
    name: "Zainab",
    designation: "Product Designer",
    image:
      "/images/t3.png",
  },
  {
    id: 5,
    name: "Osmond",
    designation: "Framer Developer",
    image:
      "/images/osmond.png",
  },
  {
    id: 6,
    name: "Chiamaka",
    designation: "Illustrator",
    image:
      "/images/t1.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center  w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
