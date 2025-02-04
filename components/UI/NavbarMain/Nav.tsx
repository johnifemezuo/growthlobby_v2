import { Container } from "../../Container/Container";
// import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../Button/Button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div id="top" className=" w-full z-50 fixed top-0 inset-x-0 px-3 md:px-16 py-3 bg-[#0F100D]  ">
      <Container className="font-farro  md:mt-4  ">
        <nav className=" w-full  px-2 border-gray-400 md:border rounded-full ">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 ">
              <Image
                width={100}
                height={100}
                src="/images/logo1.png"
                className="w-[40px] lg:w-10"
                alt="Growthlobby"
              />
              <span className="text-white md:text-xl text-lg">GrowthLobby</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link
                href="/works"
                className={` lg:text-lg hover:text-primary transition-all ${
                  pathname === "/works" ? "text-primary" : "text-zinc-500"
                }`}
              >
                WORKS
              </Link>
              <Link
                href="/about"
                className={` lg:text-lg hover:text-primary transition-all ${
                  pathname === "/about" ? "text-primary" : "text-zinc-500"
                }`}
              >
                ABOUT US
              </Link>
           
              <Link
                href="#contact"
                className={` lg:text-lg hover:text-primary transition-all ${
                  pathname === "#contact" ? "text-primary" : "text-zinc-500"
                }`}
              >
                CONTACT US
              </Link>
            </div>

            {/* Hire Us Button */}
            <div className=" flex space-x-3">
              <button className="text-black bg-primary rounded-3xl px-6 font-semibold md:block hidden">Hire us</button>

              {/* Mobile Menu Button */}
              <div onClick={() => setIsOpen(!isOpen)}>
              <Image
                width={100}
                height={100}
                src="/images/menu.png"
                className="w-[90px] lg:w-28"
                alt="Menu"
              />
              </div>
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:  bg-zinc-50  w-12 h-12 border rounded-full flex items-center justify-center"
            >
              <Menu className="h-8 w-8 text-dark" />
              <span className="sr-only text-red-700">Toggle menu</span>
            </button> */}
            </div>

          </div>

          {/* Mobile Navigation */}
        </nav>

        <div>
          {isOpen ? (
            <div
              className="box"
             
            >
              <div
                className={` 
            "absolute left-0 mt-2 right-0 top-0 z-50 rounded-xl bg-white p-8 shadow-lg transition-transform duration-200 ease-in-out md:hidden",
            ${isOpen ? "block" : "hidden"}
        `}
              >
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/services"
                    className={` text-2xl py-2 hover:text-primary transition-all ${
                      pathname === "/services"
                        ? "text-primary"
                        : "text-zinc-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/about"
                    className={` text-2xl py-2 hover:text-primary transition-all ${
                      pathname === "/about" ? "text-primary" : "text-zinc-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    About us
                  </Link>
                  <Link
                    href="/work"
                    className={` text-2xl py-2 hover:text-primary transition-all ${
                      pathname === "/work" ? "text-primary" : "text-zinc-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Our Work
                  </Link>
                  <Link
                    href="#contact"
                    className={` text-2xl py-2 hover:text-primary transition-all ${
                      pathname === "#contact" ? "text-primary" : "text-zinc-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact us
                  </Link>
                  <Button>Hire us</Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
