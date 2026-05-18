"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";

interface Props {
  projects: Project[];
  open: boolean;
  onClose: () => void;
  onSelect: (project: Project) => void;
}

export default function AllProjectsModal({ projects, open, onClose, onSelect }: Props) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="bg-white rounded-xl shadow-[0_32px_80px_rgba(0,0,0,0.22)] w-full max-w-[900px] max-h-[88vh] flex flex-col pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-7 py-5 border-b border-[#e4e0da] shrink-0">
                <div>
                  <h2 className="font-serif text-[22px] font-bold text-[#0e0e0e]">All Projects</h2>
                  <p className="text-[12px] text-[#6b6b6b] mt-0.5">{projects.length} projects — click any to view details</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full border border-[#e4e0da] flex items-center justify-center text-[#6b6b6b] hover:bg-[#0e0e0e] hover:border-[#0e0e0e] hover:text-white transition-all"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Grid */}
              <div className="overflow-y-auto p-6">
                <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                  {projects.map((project, i) => (
                    <motion.button
                      key={project.id}
                      onClick={() => { onClose(); onSelect(project); }}
                      className="group text-left bg-white border border-[#e4e0da] rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all duration-300"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Thumbnail */}
                      <div className={`relative h-[130px] bg-gradient-to-br ${project.thumbClass} overflow-hidden`}>
                        {project.imageUrl ? (
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            sizes="300px"
                            className="object-cover object-top"
                            unoptimized
                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-serif text-white/10 text-[48px] font-bold select-none">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                        )}
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-[#c8622a]/0 group-hover:bg-[#c8622a]/10 transition-colors duration-300 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#0e0e0e] text-[11px] font-semibold px-3 py-1.5 rounded-full">
                            View Details
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="px-4 py-3.5">
                        <p className="text-[10px] font-semibold text-[#c8622a] tracking-[0.1em] uppercase mb-1">{project.num}</p>
                        <p className="font-serif text-[15px] font-bold text-[#0e0e0e] leading-tight mb-1.5">{project.title}</p>
                        <p className="text-[12px] text-[#6b6b6b] leading-[1.6] line-clamp-2">{project.description}</p>
                        {/* Tags — show first 3 */}
                        <div className="flex flex-wrap gap-1 mt-2.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[10px] text-[#3a3a3a] bg-[#f6f4f1] border border-[#e4e0da] px-2 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="text-[10px] text-[#6b6b6b] px-1">+{project.tags.length - 3}</span>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
