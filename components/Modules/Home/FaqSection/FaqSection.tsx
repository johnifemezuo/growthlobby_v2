"use client";

import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string | React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "What services does your agency offer?",
    answer:
      "We provide a variety of design solutions, including UI/UX design, graphic design, illustration, logo design, motion design, and website development.",
  },
  {
    id: 2,
    question: "What is your average response time?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days. For existing clients, we aim to respond within a few hours. Our team is distributed across multiple time zones, which allows us to provide more coverage throughout the day.",
  },
  {
    id: 3,
    question: "Can you provide case studies or references?",
    answer:
      "We have a portfolio of case studies available upon request. We've worked with clients across various industries including SaaS, healthcare, finance, and e-commerce. We're happy to provide references from past clients who have similar requirements to your project.",
  },
  {
    id: 4,
    question: "What tools do you use for project management?",
    answer:
      "We primarily use Notion for documentation, Figma for design collaboration, and Slack for communication. For project management, we use a combination of Jira and Trello depending on the project's complexity and the client's preference. We're also flexible and can adapt to your preferred tools if needed.",
  },
  {
    id: 5,
    question: "How do you handle feedback and revisions?",
    answer:
      "Feedback is an essential part of our design process. We include two rounds of revisions in our standard packages. We use collaborative tools like Figma to gather and implement feedback efficiently. For additional revision rounds, we can discuss options based on the scope of changes needed.",
  },
  {
    id: 6,
    question: "What are your payment terms?",
    answer:
      "We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can establish milestone-based payments. We accept payments via bank transfer, credit card, and PayPal. All payment details will be clearly outlined in our proposal and contract.",
  },
  {
    id: 7,
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we offer ongoing support packages for clients who need continued assistance after the initial project is complete. This can include maintenance, updates, additional features, or training for your team. We can customize a support plan based on your specific needs.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="w-full bg-[#0A0B0B] py-12 lg:py-28 px-5 xl:px-0">
      <svg
        className="absolute left-0 top-0 w-[300px] lg:w-[800px] svg-1 z-0"
        width="715"
        height="773"
        viewBox="0 0 715 773"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_980_45748)">
          <path
            d="M7.71043 383.315C-30.7896 258.522 39.1647 126.147 163.958 87.6465L186.44 80.7105C311.233 42.2105 443.608 112.165 482.108 236.958C520.608 361.751 450.654 494.126 325.861 532.626L303.379 539.562C178.586 578.062 46.2104 508.108 7.71043 383.315Z"
            fill="#62E7EC"
            fillOpacity="0.19"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_980_45748"
            x="-224.861"
            y="-151.861"
            width="939.542"
            height="923.995"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="111"
              result="effect1_foregroundBlur_980_45748"
            />
          </filter>
        </defs>
      </svg>

      <svg
        className="absolute right-0 top-0 w-[300px] lg:w-[800px]"
        width="642"
        height="670"
        viewBox="0 0 642 670"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_980_45876)">
          <path
            d="M232.71 280.315C194.21 155.522 264.165 23.1465 388.958 -15.3535L411.44 -22.2895C536.233 -60.7895 668.608 9.16473 707.108 133.958C745.608 258.751 675.654 391.126 550.861 429.626L528.379 436.562C403.586 475.062 271.21 405.108 232.71 280.315Z"
            fill="#92EC62"
            fillOpacity="0.19"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_980_45876"
            x="0.138672"
            y="-254.861"
            width="939.542"
            height="923.995"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="111"
              result="effect1_foregroundBlur_980_45876"
            />
          </filter>
        </defs>
      </svg>

      <ScrollReveal
        hidden={{ y: 100 }}
        visible={{ y: 0 }}
        delay={0.6}
        duration={1}
      >
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-100">
            Question and Answer
          </h2>

          <div className="space-y-1">
            {faqItems.map((item, index) => (
              <div key={item.id} className="border-b border-gray-800">
                <button
                  className="w-full text-left py-5 flex justify-between items-center focus:outline-none group"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <h3 className="text-xl md:text-2xl font-medium text-zinc-100 group-hover:text-gray-300 transition-colors">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="flex-shrink-0 ml-4 bg-gray-900 rounded-full p-1"
                  >
                    {activeIndex === index ? (
                      <Plus className="w-5 h-5 text-white rotate-45" />
                    ) : (
                    <Minus className="w-5 h-5 text-white" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.4,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          opacity: { duration: 0.25, delay: 0.15 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.3,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          opacity: { duration: 0.25 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: 10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="pb-6 text-gray-300 leading-relaxed"
                      >
                        {typeof item.answer === "string" ? (
                          <p>{item.answer}</p>
                        ) : (
                          item.answer
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Container>
      </ScrollReveal>
    </div>
  );
}
