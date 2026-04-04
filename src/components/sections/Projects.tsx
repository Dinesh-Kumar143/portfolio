import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#f6f4f1]">
      <div className="max-w-[1200px] mx-auto px-13">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 gap-6 max-md:flex-col max-md:items-start">
          <div>
            <SectionLabel>03 — Work</SectionLabel>
            <h2 className="reveal font-serif text-[clamp(34px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0e0e0e]">
              Featured projects.
            </h2>
          </div>
          <Button href="https://github.com/Dinesh-Kumar143" variant="line" className="reveal flex-shrink-0 self-end max-md:self-start">
            View All Work
          </Button>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-2 gap-[22px] max-md:grid-cols-1">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={`reveal reveal-d${i % 2}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}