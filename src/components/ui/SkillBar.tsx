import { Skill } from "@/types";

interface SkillBarProps {
  skill: Skill;
  barColor: string;
}

export default function SkillBar({ skill, barColor }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.25">
        <span className="text-[13px] font-medium text-[#1a1a1a]">{skill.name}</span>
        <span className="text-[11px] text-[#6b6b6b] font-medium">{skill.percentage}%</span>
      </div>
      <div className="h-0.75 bg-[#e4e0da] rounded-sm overflow-hidden">
        <div
          className={`bar-fill ${barColor}`}
          data-w={skill.percentage}
        />
      </div>
    </div>
  );
}