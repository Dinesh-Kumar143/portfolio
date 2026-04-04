import { Project } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <div className={`proj-card bg-white border border-[#e4e0da] rounded-lg overflow-hidden flex flex-col transition-all duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(0,0,0,0.09)] ${className}`}>
      {/* Thumbnail */}
      <div className={`h-[210px] relative overflow-hidden flex items-center justify-center bg-gradient-to-br ${project.thumbClass}`}>
        {project.imageUrl ? (
          // Show actual website screenshot

          <div className="relative w-full h-full bg-white">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover object-top"
            />
          </div>

        ) : (
          // Fallback: Show code snippet
          <div className="mockup-wrap w-[82%] rounded-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
            {/* Titlebar */}
            <div className="bg-[#1e1e1e] px-3 py-2 flex items-center gap-[5px]">
              <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
              <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
              <span className="w-2 h-2 rounded-full bg-[#28c840]" />
            </div>
            {/* Code body */}
            <div
              className="bg-[#252526] px-3.5 py-3.5 font-mono text-[10px] leading-[1.85] text-white/45 min-h-[100px]"
              dangerouslySetInnerHTML={{ __html: project.codeLines || '' }}
            />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
        <p className="font-serif text-[11px] font-semibold text-[#c8622a] tracking-[0.1em] mb-1.5">
          {project.num}
        </p>
        <h3 className="font-serif text-[22px] font-bold text-[#0e0e0e] mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-[13.5px] text-[#6b6b6b] leading-[1.75] mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-[#3a3a3a] bg-[#f6f4f1] border border-[#e4e0da] px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#e4e0da]">
          <div className="flex gap-3.5">
            <Link
              href={project.liveUrl}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6b6b6b] hover:text-[#c8622a] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </Link>
            <Link
              href={project.githubUrl}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6b6b6b] hover:text-[#c8622a] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </Link>
          </div>
          <Link
            href={project.liveUrl}
            className="w-[34px] h-[34px] rounded-full border border-[#e4e0da] flex items-center justify-center text-[#6b6b6b] hover:bg-[#0e0e0e] hover:border-[#0e0e0e] hover:text-white transition-all duration-[250ms]"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}