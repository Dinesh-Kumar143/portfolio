import Link from "next/link";
import { personalInfo } from "@/data/personal";

const footerLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  const [first, last] = personalInfo.name.split(" ");
  return (
    <footer className="bg-[#0e0e0e] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-13 py-8 grid grid-cols-[1fr_auto_1fr] items-center gap-6 max-md:grid-cols-1 max-md:text-center max-md:gap-4">
        {/* Logo */}
        <div className="font-serif text-[18px] font-bold text-white">
          {first}<span className="text-[#c8622a]">.</span>{last}
        </div>

        {/* Links */}
        <div className="flex gap-5 flex-wrap justify-center">
          {footerLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] text-white/35 tracking-[0.06em] hover:text-white transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-white/28 text-right max-md:text-center">
          © {new Date().getFullYear()} {personalInfo.name}. Designed &amp; built with{" "}
          <em className="not-italic text-[#c8622a]">care</em>.
        </p>
      </div>
    </footer>
  );
}