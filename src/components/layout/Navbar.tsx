"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { personalInfo } from "@/data/personal";
import MobileDrawer from "./MobileDrawer";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-[#f6f4f1]/94 backdrop-blur-md border-b border-[#e4e0da] transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : ""
          }`}
      >
        <div className="flex items-center justify-between max-w-[1200px] mx-auto px-13 h-[68px]">
          {/* Logo */}
          <Link href="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-serif text-[21px] font-bold text-[#0e0e0e] tracking-tight">
            {personalInfo.name.split(" ")[0]}
            <span className="text-[#c8622a]">.</span>
            {personalInfo.name.split(" ")[1]}
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-[34px]">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link relative text-[13px] font-medium tracking-[0.02em] pb-0.5 transition-colors duration-200 ${isActive ? "text-[#0e0e0e] active" : "text-[#6b6b6b] hover:text-[#0e0e0e]"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/resume.pdf" variant="dark" className="!py-2.5 !px-[22px] !text-[13px]">
              Download CV
            </Button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setDrawerOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] p-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-[1.5px] bg-[#0e0e0e] rounded-sm transition-all duration-300 ${drawerOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-[#0e0e0e] rounded-sm transition-all duration-300 ${drawerOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-[#0e0e0e] rounded-sm transition-all duration-300 ${drawerOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      <MobileDrawer
        links={navLinks}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}