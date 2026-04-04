"use client";
import { useEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillBar from "@/components/ui/SkillBar";
import { skillGroups } from "@/data/skills";
import { useSkillBars } from "@/hooks/useSkillBars";

export default function Skills() {
  useSkillBars();

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-13">

        {/* Header */}
        <div className="flex items-end justify-between mb-13 gap-6 max-md:flex-col max-md:items-start">
          <div>
            <SectionLabel>02 — Expertise</SectionLabel>
            <h2 className="reveal font-serif text-[clamp(34px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0e0e0e]">
              Technical skill set.
            </h2>
          </div>
          <p className="reveal text-[15px] text-[#3a3a3a] leading-[1.75] max-w-[340px]">
            A versatile toolkit refined across 5+ years of production engineering at
            industry-leading companies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {skillGroups.map((group, i) => (
            <div
              key={group.id}
              className={`sk-col reveal reveal-d${i} bg-[#f6f4f1] border border-[#e4e0da] rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]`}
            >
              {/* Column header */}
              <div className="px-5 py-4 border-b border-[#e4e0da] flex items-center gap-2.5">
                <div className={`w-[30px] h-[30px] rounded-md ${group.iconBg} flex items-center justify-center text-[14px] flex-shrink-0`}>
                  {group.icon}
                </div>
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3a3a3a]">
                  {group.label}
                </span>
              </div>

              {/* Skills */}
              <div className="px-5 pt-3.5 pb-5 flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} barColor={group.barColor} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}