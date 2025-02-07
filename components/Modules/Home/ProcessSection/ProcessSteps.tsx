"use client";
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const processData = [
  {
    number: "07",
    title: "Client Feedback",
    content:
      "Receive detailed feedback on your designs through our collaborative platform. We prioritize clear communication and quick iterations to ensure your vision is perfectly captured in every detail. Regular check-ins keep the project aligned with your expectations.",
  },
  {
    number: "01",
    title: "Intro Call",
    content:
      "A casual 30-minute conversation to discuss your project goals, timeline, and budget. We'll explore how our design expertise aligns with your vision and outline the next steps for a successful collaboration.",
  },
  {
    number: "02",
    title: "Discovery",
    content:
      "Deep dive into your brand identity, target audience, and project requirements. We analyze competitors, gather inspiration, and identify key opportunities to make your digital presence stand out.",
  },
  {
    number: "03",
    title: "Concept",
    content:
      "Present initial design directions through mood boards and wireframes. We explore different visual approaches, layouts, and user experiences to find the perfect match for your brand.",
  },
  {
    number: "04",
    title: "Homepage SignOff",
    content:
      "Review and approve the homepage design, which sets the visual foundation for your entire website. We ensure every element, from typography to interactions, aligns perfectly with your brand guidelines.",
  },
  {
    number: "05",
    title: "Full Design",
    content:
      "Expand the approved homepage design across all required pages and components. We maintain consistency while adapting layouts to serve each page's unique purpose and content requirements.",
  },
  {
    number: "06",
    title: "Final Review",
    content:
      "Comprehensive review of all design deliverables, ensuring pixel-perfect execution and seamless user experiences across devices. We fine-tune animations, interactions, and responsive behaviors.",
  },
  {
    number: "08",
    title: "Project Completion",
    content:
      "Hand over all design assets, documentation, and source files. We provide a detailed style guide and remain available for any questions or support needed during the development phase.",
  },
];

const ProcessSteps = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:w-[50%] text-calm">
      {processData.map((step, index) => (
        <div
          key={step.number}
          className="bg-background rounded-xl md:p-4 p-2 my-4 "
        >
          <div className=" flex justify-between  font-medium hover:text-foreground">
            <div>
              <span className="align-top">{step.number}</span>
              <span
                className={`md:text-[32px] text-[20px] ml-3  ${
                  openIndex === index ? "text-foreground" : ""
                }`}
              >
                {step.title}
              </span>
            </div>
            <button
              onClick={() => toggleAccordion(index)}
              className="items-center flex  p-2 rounded-lg"
            >
              {openIndex === index ? (
                <ChevronUp className="bg-primary text-foreground rounded-full" />
              ) : (
                <ChevronDown />
              )}
            </button>
          </div>
          {openIndex === index && <p className="mt-2 ">{step.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
