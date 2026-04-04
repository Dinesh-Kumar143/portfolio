import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { personalInfo } from "@/data/personal";

export default function About() {

  return (
    <section id="about" className="py-24 bg-[#f6f4f1]">
      <div className="max-w-[1200px] mx-auto px-13">
        <div className="grid grid-cols-[360px_1fr] gap-20 items-start max-md:grid-cols-1">

          {/* ── Left: Photo ── */}
          <div className="relative reveal max-md:max-w-[280px]">
            <div
              className="w-full bg-gradient-to-br from-[#e6e1da] to-[#d8d2c8] rounded-md overflow-hidden flex items-center justify-center relative"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Replace with <Image> once you have a real photo */}
              {personalInfo.imageSrc ? (
                <Image
                  src={personalInfo.imageSrc}
                  alt={personalInfo.name || "Profile"}
                  fill
                  sizes="(max-width: 768px) 280px, 360px"
                  style={{ objectFit: "cover" }}
                />

              ) : (
                <span className="absolute inset-0 flex items-center justify-center font-serif text-[100px] font-bold text-black/10 select-none">
                  {personalInfo.initials}
                </span>
              )}

              {/* Bottom strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0e0e0e] px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="font-serif text-[16px] font-semibold text-white">
                    {personalInfo.name}
                  </p>
                  <p className="text-[11px] text-white/45 mt-0.5">{personalInfo.title}</p>
                </div>
                <span className="text-[24px]">🧑‍💻</span>
              </div>
            </div>

            {/* Years badge */}
            <div className="absolute top-7 -right-[18px] bg-[#c8622a] text-white px-5 py-4 rounded-md shadow-[0_8px_32px_rgba(200,98,42,0.3)] text-center max-md:hidden">
              <span className="font-serif text-[36px] font-bold leading-none block">1+</span>
              <span className="text-[11px] font-medium opacity-85 whitespace-nowrap block mt-0.5">
                Years building
                <br />
                the Web Apps
              </span>
            </div>
          </div>

          {/* ── Right: Text ── */}
          <div>
            <SectionLabel>01 — About Me</SectionLabel>
            <h2 className="reveal font-serif text-[clamp(34px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0e0e0e] mb-6">
              The person
              <br />
              behind the code.
            </h2>

            {personalInfo.aboutParagraphs.map((para, i) => (
              <p
                key={i}
                className={`reveal reveal-d${i + 1} text-[15.5px] text-[#3a3a3a] leading-[1.85] mb-5`}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}

            {/* Fact cards */}
            <div className="reveal grid grid-cols-2 gap-2.5 mt-7 max-sm:grid-cols-1">
              {personalInfo.facts.map((fact) => (
                <div
                  key={fact.text}
                  className="bg-white border border-[#e4e0da] rounded-md px-4 py-3.5 flex items-center gap-3 transition-all duration-200 hover:border-[#c8622a] hover:shadow-[0_4px_16px_rgba(200,98,42,0.09)]"
                >
                  <span className="text-[18px] flex-shrink-0">{fact.icon}</span>
                  <span className="text-[13px] text-[#3a3a3a] leading-[1.45]">{fact.text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="reveal flex gap-3 mt-8 flex-wrap">
              <Button href="/resume.pdf" variant="dark">
                Download Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </Button>
              <Button href="#contact" variant="line">
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}