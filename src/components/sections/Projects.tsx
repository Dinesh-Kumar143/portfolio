"use client";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";
import AllProjectsModal from "@/components/ui/AllProjectsModal";
import { projects } from "@/data/projects";
import { Project } from "@/types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const displayedProjects = projects.slice(0, 4);

  return (
    <>
      <section id="projects" className="py-24 bg-[#f6f4f1]">
        <div className="max-w-[1200px] mx-auto px-13">

          {/* Header */}
          <div className="flex items-end justify-between mb-12 gap-6 max-md:flex-col max-md:items-start">
            <div>
              <FadeUp delay={0.05}>
                <SectionLabel>03 — Work</SectionLabel>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0e0e0e]">
                  Featured projects.
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.15}>
              <Button
                onClick={() => setShowAllModal(true)}
                variant="line"
                className="flex-shrink-0 self-end max-md:self-start"
              >
                View All Work ({projects.length})
              </Button>
            </FadeUp>
          </div>

          {/* 2×2 Grid — first 4 */}
          <div className="grid grid-cols-2 gap-[22px] max-md:grid-cols-1">
            {displayedProjects.map((project, i) => (
              <FadeUp key={project.id} delay={i * 0.1} amount={0.05}>
                <ProjectCard
                  project={project}
                  className="h-full"
                  onClick={() => setSelectedProject(project)}
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <AllProjectsModal
        projects={projects}
        open={showAllModal}
        onClose={() => setShowAllModal(false)}
        onSelect={(p) => setSelectedProject(p)}
      />
    </>
  );
}
