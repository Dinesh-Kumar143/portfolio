"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import { experiences } from "@/data/experience";
import { Experience as ExperienceType } from "@/types";

const ease = [0.22, 1, 0.36, 1] as const;

function TimelineEntry({ exp, index }: { exp: ExperienceType; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-[150px_1fr] gap-8 py-8 border-b border-[#e4e0da] first:pt-0 last:border-b-0 last:pb-0 max-sm:grid-cols-1 max-sm:gap-2"
      initial={{ opacity: 0, x: 18 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease }}
    >
      <div>
        <p className="text-[11px] font-semibold text-[#c8622a] tracking-[0.06em] mb-1">{exp.period}</p>
        <p className="font-serif text-[16px] font-bold text-[#0e0e0e] mb-0.5">{exp.company}</p>
        <p className="text-[12px] text-[#6b6b6b]">{exp.location}</p>
      </div>
      <div>
        <p className="text-[15px] font-semibold text-[#0e0e0e] mb-3">{exp.role}</p>
        <ul className="flex flex-col gap-2">
          {exp.bullets.map((bullet, j) => (
            <li
              key={j}
              className="text-[13.5px] text-[#3a3a3a] leading-[1.65] pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#c8622a]"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-13">
        <div className="grid grid-cols-[260px_1fr] gap-18 items-start max-lg:grid-cols-1">

          {/* Sidebar — desktop */}
          <div className="max-lg:hidden">
            <FadeUp delay={0.05}><SectionLabel>04 — Career</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0e0e0e] mb-3">
                Work history.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-[15px] text-[#3a3a3a] leading-[1.75]">
                Crafting full-stack applications through hands-on experience, real-world projects, and a passion for continuous improvement.
              </p>
            </FadeUp>
          </div>

          {/* Heading — mobile */}
          <div className="lg:hidden">
            <FadeUp delay={0.05}><SectionLabel>04 — Career</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0e0e0e] mb-8">
                Work history.
              </h2>
            </FadeUp>
          </div>

          {/* Timeline */}
          <div>
            {experiences.map((exp, i) => (
              <TimelineEntry key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
