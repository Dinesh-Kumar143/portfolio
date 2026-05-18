"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import { skillGroups } from "@/data/skills";
import { Skill } from "@/types";

const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedSkillBar({ skill, barColor }: { skill: Skill; barColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-1.25">
        <span className="text-[13px] font-medium text-[#1a1a1a]">{skill.name}</span>
        <span className="text-[11px] text-[#6b6b6b] font-medium">{skill.percentage}%</span>
      </div>
      <div className="h-0.75 bg-[#e4e0da] rounded-sm overflow-hidden">
        <motion.div
          className={`h-full rounded-sm ${barColor}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1.3, ease }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-13">
        {/* Header */}
        <div className="flex items-end justify-between mb-13 gap-6 max-md:flex-col max-md:items-start">
          <div>
            <FadeUp delay={0.05}>
              <SectionLabel>02 — Expertise</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0e0e0e]">
                Technical skill set.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <p className="text-[15px] text-[#3a3a3a] leading-[1.75] max-w-[340px]">
              A versatile toolkit refined across 1+ years of production
              engineering at industry-leading companies.
            </p>
          </FadeUp>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {skillGroups.map((group, i) => (
            <FadeUp key={group.id} delay={i * 0.08} amount={0.05}>
              <div className="bg-[#f6f4f1] border border-[#e4e0da] rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] h-full">
                <div className="px-5 py-4 border-b border-[#e4e0da] flex items-center gap-2.5">
                  <div className={`w-[30px] h-[30px] rounded-md ${group.iconBg} flex items-center justify-center text-[14px] flex-shrink-0`}>
                    {group.icon}
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3a3a3a]">
                    {group.label}
                  </span>
                </div>
                <div className="px-5 pt-3.5 pb-5 flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <AnimatedSkillBar key={skill.name} skill={skill} barColor={group.barColor} />
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
