"use client";
import { useEffect } from "react";

export function useSkillBars() {
  useEffect(() => {
    const cols = document.querySelectorAll<HTMLElement>(".sk-col");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll<HTMLElement>(".bar-fill");
            fills.forEach((fill) => {
              const width = fill.dataset.w ?? "0";
              fill.style.width = `${width}%`;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }

    );

    cols.forEach((col) => observer.observe(col));
    return () => observer.disconnect();
  }, []);
}