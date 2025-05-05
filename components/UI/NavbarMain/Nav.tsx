import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../Button/Button";
import ContactFormDropDown from "./ContactFormDropdown";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="top"
      className=" lg:w-[690px] lg:bg-transparent bg-transparent lg:backdrop-blur-none w-full backdrop-blur-md lg:border-none border-none lg:border  justify-center  mx-auto z-50 fixed top-0 inset-x-0 px-3  py-3 lg:py-5  "
    >
      <div className="flex  h-16 items-center justify-between space-x-4 md:space-x-6 md:justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex border md:border items-center space-x-2 px-2 lg:p-4 bg-white/10 rounded-xl backdrop-blur-md  h-14 lg:h-16"
        >
          <Image
            width={100}
            height={100}
            src="/images/logo1.png"
            className="w-[40px] lg:w-10"
            alt="Growthlobby"
          />
          {/* <span className="text-white md:text-xl text-lg">GrowthLobby</span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6 pl-6 pr-2 py-2 md:border  rounded-xl bg-white backdrop-blur-md">
          <Link
            href="/#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
            className={`  text-white lg:text-sm font-medium hover:text-primary transition-all ${
              pathname === "/#services" ? "text-[var(--primaryActive)] font-semibold" : "text-zinc-800"
            }`}
          >
            SERVICE
          </Link>
          {/* <Link
            href="/about-us"
            className={` lg:text-sm font-medium hover:text-primary transition-all ${
              pathname === "/about-us" ? "text-primaryActive" : "text-zinc-800"
            }`}
          >
            PRICING
          </Link> */}
          <Link
            href="/works"
            className={` lg:text-sm font-medium hover:text-primary transition-all ${
              pathname === "/works" ? "text-[var(--primaryActive)] font-semibold" : "text-zinc-800"
            }`}
          >
            PROJECT
          </Link>
          <Link
            href="/blog"
            className={` lg:text-sm font-medium hover:text-primary transition-all ${
              pathname === "/blog" ? "text-primaryActive" : "text-zinc-800"
            }`}
          >
            BLOG
          </Link>
          <Link
            href="/about-us"
            className={` lg:text-sm font-medium hover:text-primary transition-all ${
              pathname === "/about-us" ? "text-primaryActive" : "text-zinc-800"
            }`}
          >
            ABOUT US
          </Link>

            
          <button onClick={() => setOpenContactForm(true)} className="text-black py-3 bg-[#C0ED0B] rounded-md px-4 text-sm font-semibold md:block hidden">
            CONTACT US
          </button>
            
        </div>

        {/* Hamburger Menu Icon for Mobile */}  
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" border-white/50 border md:hidden bg-black rounded-full w-12 h-12 grid place-content-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div>
        {isOpen ? (
          <div className="box">
            <div
              className={` 
            "absolute left-0 mt-2 right-0 top-0 z-50 rounded-xl bg-white p-8 shadow-lg transition-transform duration-200 ease-in-out md:hidden",
            ${isOpen ? "block" : "hidden"}
        `}
            >
              <div className="flex flex-col space-y-4">
                <Link
                  href="/#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                    setIsOpen(false)
                  }}
                  className={` text-2xl py-2 hover:text-primary transition-all ${
                    pathname === "/#services" ? "text-primaryActive" : "text-zinc-800"
                  }`}
                >
                  Services
                </Link>
                {/* <Link
                  href="/pricing"
                  className={` text-2xl py-2 hover:text-primary transition-all ${
                    pathname === "/pricing" ? "text-primaryActive" : "text-zinc-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link> */}
                <Link
                  href="/works"
                  className={` text-2xl py-2 hover:text-primary transition-all ${
                    pathname === "/work" ? "text-primaryActive" : "text-zinc-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Our Work
                </Link>
                <Link
                  href="blog"
                  className={` text-2xl py-2 hover:text-primary transition-all ${
                    pathname === "/blog"
                      ? "text-primary"
                      : "text-zinc-800"
                  }`}
                >Blogs
                </Link>
                <Link
                  href="/about-us"
                  className={` text-2xl py-2 hover:text-primary transition-all ${
                    pathname === "/about-us" ? "text-primaryActive" : "text-zinc-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About us
                </Link>

                <Button onClick={() => setOpenContactForm(true)} className="space-x-4 py-4 px-4 flex justify-items-center bg-[var(--primary)] items-center rounded-full justify-center hover:bg-primary/40 text-black font-medium hover:bg-[var(--primary)]">CONTACT US</Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>

     <ContactFormDropDown isOpen={openContactForm} setIsOpen={setOpenContactForm} />
    </div>
  );
}
