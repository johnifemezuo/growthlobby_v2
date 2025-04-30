import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Container } from "../../Container/Container";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";

const Footer = () => {
  const menuItems = [
    { label: "Homepage", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Our Work", href: "/works" },
    { label: "Client Stories", href: "/clients" },
  ];

  return (
    <footer className="  p-6 relative ">
      <ScrollReveal
              hidden={{ y: 100 }}
              visible={{ y: 0 }}
              delay={0.6}
              duration={1}
            >
      <Container>
        <div className="max-w-7xl mx-auto bg-[#EDEDED] min-h-fit h-auto md:pt-12 md:px-4 py-8 px-4 rounded-3xl space-y-8 ">
          <nav className="flex flex-col md:grid md:grid-cols-3 md:items-start md:gap-4 p-6">
            <div className="w-full md:self-start">
              <Image
                width={100}
                height={100}
                src="/images/logo1.png"
                className="w-[48px] lg:w-20"
                alt="Growthlobby"
              />
            </div>

            <div className="flex flex-col w-full mt-4 md:mt-0 space-y-4 md:space-y-6 text-foreground font-medium">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary text-xl md:text-4xl md:text-center"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex md:justify-end space-x-4 mt-4 md:mt-0 md:text-4xl text-2xl md:self-end">
              <Link
                href="https://linkedin.com"
                className="text-black hover:text-blue-800"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-black hover:text-blue-700"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-black hover:text-pink-800"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-black hover:text-blue-500"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
            </div>
          </nav>

          <div className=" ">
            <h1 className="text-gray-300 text-5xl sm:text-6xl  lg:text-[128px] text-center font-bold">
              Growthlobby
            </h1>
          </div>
        </div>
      <div className="flex items-center justify-between mt-3 ">
        <Link href="/privacy-policy" className="text-sm text-zinc-500  transition-all">Privacy Policy</Link>
        <Link href="/terms-and-condition" className="text-sm text-zinc-500 transition-all">Terms and condition </Link>
        </div>
      </Container>
      </ScrollReveal>

    </footer>
  );
};

export default Footer;
