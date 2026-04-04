"use client";
import { useEffect } from "react";

export function useTimeline() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".tl-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in");
            }, i * 120);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}