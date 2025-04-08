"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

export default function ContactFormDropDown({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const [currentTime, setCurrentTime] = useState("");
  const [amPm, setAmPm] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const isAm = hours < 12;

      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

      setCurrentTime(`${displayHours}:${displayMinutes}`);
      setAmPm(isAm ? "AM" : "PM");
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`fixed inset-0 z-50 flex items-start justify-center transition-all duration-500 ease-in-out ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none -translate-y-full"
      }    p-4`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="fixed z-50 top-5 lg:top-12 right-3 lg:right-12 bg-white rounded-full w-12 h-12 text-gray-500 hover:text-gray-800 grid place-content-center"
      >
        <X size={24} />
      </button>

      <div className="relative z-30">
        <div className="w-full h-auto max-w-7xl  relative flex flex-col md:flex-row lg:mt-20">
          {/* Left side with time and branding */}
          <div  className="w-full  md:w-1/2 pb-6 lg:p-8 md:p-16 flex flex-col justify-center">
            <div className="text-white">
              <p className="uppercase lg:text-xl">Nigeria</p>
              <div className="text-4xl lg:text-[180px] md:text-[220px] font-light leading-none tracking-tighter">
                {currentTime}
              </div>
              <div className="inline-block bg-white text-black text-sm lg:text-2xl mt-2 px-4 py-1 lg:py-2 font-medium rounded-md">
                {amPm}
              </div>
              <div className=" mt-4 lg:mt-16">
                <h2 className="text-2xl md:text-5xl font-light italic">
                  Design & Brand
                </h2>
                <h1 className="text-3xl lg:text-5xl md:text-6xl font-bold mt-2">
                  partner for all your business needs.
                </h1>
              </div>
            </div>
          </div>

          {/* Right side with form */}
          <div className="w-full md:w-1/2 bg-white lg:h-auto lg:mt- rounded-3xl p-5 md:p-12 relative">
            <h2 className="text-2xl lg:text-3xl font-bold mb-5 lg:mb-8">Fill The Form</h2>

            <form className="space-y-4 lg:space-y-6">
              <input
                type="text"
                placeholder="Your name"
                className="bg-gray-100 w-full border-0 rounded-full px-6 py-4 h-auto text-lg"
              />

              <input
                type="tel"
                placeholder="Your phone"
                className="bg-gray-100 w-full outline-none border-0 rounded-full px-6 py-4 h-auto text-lg"
              />

              <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 border-0 w-full rounded-full px-6 py-4 h-auto text-lg"
              />

              <div className="flex flex-wrap gap-2 w-full">
                {[
                  "Branding",
                  "UI/UX Design",
                  "Development",
                  "Graphics",
                  "Motion design",
                  "Illustration",
                ].map((service) => (
                  <div
                    key={service}
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-gray-200"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <textarea
                placeholder="Project Details"
                className="bg-gray-100 w-full border-0 rounded-3xl px-6 py-4 min-h-[100px] text-lg"
              />

              <div className="lg:flex justify-between items-center">
                <Button
                  onClick={() => {}}
                  className="bg-[var(--primary)] hover:bg-[var(--primary)] w-full lg:min-w-[130px]  text-black hover:bg-[var(--primary)]/50 font-medium px-12 py-3 h-auto text-xl "
                >
                  Send
                </Button>

                <div className="text-right mt-3 lg:mt-0">
                  <div className="text-sm text-gray-500">Email us here:</div>
                  <div className="font-medium">partner@growthlobby.com</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Glass overlay */}
      <div
        className={`fixed z-0  h-screen inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
    </main>
  );
}
