import { Container } from "../../Container/Container";
import { ArrowRight } from "../../Icons/ArrowRight";
import { EmailIcon } from "../../Icons/EmailIcon";
import { PhoneIcon } from "../../Icons/PhoneIcon";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 px-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="space-y-6 :w-[400px]">
              <img
                src="/images/aleodev-white.png"
                alt=""
                className="w-[140px] lg:w-40"
              />

            <p className="text-gray-300 text-sm w-full">
            Aleodev LTD is a leading software development company headquartered in Kenya, dedicated to delivering world-class technological solutions to businesses and organizations around the globe. With innovation at the core of our operations, we pride ourselves on transforming complex challenges into powerful, user-friendly software that drives growth and success.
            </p>
            <button className="space-x-4 py-2 px-3 flex justify-items-center items-center rounded-full justify-center bg-transparent border hover:bg-primary/40 text-white">
              <span className="pl-2 text-lg">Get In touch with ush</span>
              <span className="rounded-full w-9 h-9 place-content-center grid bg-transparent border ">
                <ArrowRight className="text-white " />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary"
                  >
                    Website Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary"
                  >
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary"
                  >
                    Product design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/work"
                    className="text-gray-300 hover:text-primary"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-primary"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-primary"
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-[#B88746]">
                    <PhoneIcon />
                  </span>
                  <a
                    href="tel:+2347042443344"
                    className="text-gray-300 hover:text-primary"
                  >
                     +254 701 913289
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#B88746]">
                    <PhoneIcon />
                  </span>
                  <a
                    href="tel:+2347042443344"
                    className="text-gray-300 hover:text-primary"
                  >
                     +254 707 420256 
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#B88746]">
                    <EmailIcon />
                  </span>
                  <a
                    href="mailto:admin@aleodev.agency"
                    className="text-gray-300 hover:text-primary"
                  >
                     info@aleodev.com
                  </a>
                </li>
              </ul>
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <Link href="#" className="text-[#B88746] hover:text-primary">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-[#B88746] hover:text-primary">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-[#B88746] hover:text-primary">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-[#B88746] hover:text-primary">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <p className="text-sm text-gray-400">
            © Copyright 2024 ALEODEV. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
