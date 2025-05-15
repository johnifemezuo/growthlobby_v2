/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AnimatedSvg from "@/components/Carousel/AnimatedSvg";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/UI/Button/Button";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const HYGRAPH_BASE_URL = process.env.NEXT_PUBLIC_HYGRAPH_BASE_URL;
const HYGRAPH_TOKEN = process.env.NEXT_PUBLIC_HYGRAPH_TOKEN;

export default function ResourcePage() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const query = `
      mutation CreateLead($name: String!, $email: String!) {
        createLead(data: { name: $name, email: $email }) {
          id
        }
      }
    `;

    const variables = {
      name,
      email,
    };

    try {
      const response = await fetch(HYGRAPH_BASE_URL || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({ query, variables }),
      });

      const result = await response.json();

      if (result.errors) {
        console.error("Error:", result.errors);
        alert("An error occurred while submitting the form.");
      } else {
        toast.success(`Thank You!! Form submitted successfully! `, {
          duration: 5000,
          position: "top-center",
          className: "text-sm md:text-base",
        });
        setName("");
        setEmail("");

         // Trigger PDF download
        const link = document.createElement("a");
        link.href = "/resources/branding-like-a-pro.pdf"; // Path to the PDF file
        link.download = "file.pdf"; // Suggested file name for download
        link.click();
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Sorry, something is wrong", {
        duration: 4000,
        position: "bottom-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-auto w-full relative bg-white py-20 lg:py-20 overflow-hidden">
      <AnimatedSvg />

      <Container>
        <div className="flex flex-col lg:grid grid-cols-2 lg:gap-12 w-full lg:py-20 justify-between md:px-12 lg:px-0 h-full py-12 px-5">
          <div className="w-full space-y-9 pb-9 lg:pb-0">
            <h1 className="text-2xl lg:text-4xl font-semibold text-center lg:text-left">
              BRANDING LIKE APC: POLITICAL STRATEGY FOR BUSINESS SUCCESS
            </h1>
            <Image
              src="/images/mak.png"
              alt="market"
              className="lg:w-[280px] mx-auto w-[180px]"
              width={500}
              height={500}
            />
          </div>

          <div>
            {/* Right side with form */}
            <div className="w-full lg:w-full bg-white lg:h-auto lg:mt- rounded-3xl p-5 md:p-12 relative">
              <h2 className="text-2xl lg:text-3xl font-bold mb-5 lg:mb-8">
                Fill The Form
              </h2>

              <form className="space-y-4 lg:space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-100 w-full border-0 rounded-full px-6 py-4 h-auto text-lg"
                />

                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-100 border-0 w-full rounded-full px-6 py-4 h-auto text-lg"
                />

                <div className=" space-y-9 grid">
                  <Button
                    disabled={loading}
                    className="bg-[var(--primary)]  w-full text-black font-medium px-12 py-3 h-auto text-xl"
                  >
                    {loading ? "Loading..." : "DOWNLOAD NOW"}
                  </Button>

                  <div className="mt-8 lg:mt-0">
                    <div className="text-sm text-gray-500">Email us here:</div>
                    <div className="font-medium">growthlobby@gmail.com</div>
                  </div>
                </div>
              </form>

            
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
