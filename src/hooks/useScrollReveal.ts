"use client";
import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
    );

    // Observe all elements and immediately check which are in view
    els.forEach((el) => {
      observer.observe(el);
      
      // Force immediate check on mount
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isInView = rect.top < windowHeight && rect.bottom > 0;
      
      if (isInView) {
        el.classList.add("in");
      }
    });

    return () => observer.disconnect();
  }, []);
}




// "use client";
// import { useEffect } from "react";

// export function useScrollReveal() {
//   useEffect(() => {
//     // Find all elements marked for reveal animation
//     const els = Array.from(
//       document.querySelectorAll<HTMLElement>("[data-reveal]")
//     );

//     if (els.length === 0) return;

//     // Set initial hidden state via inline style
//     els.forEach((el) => {
//       const delay = el.dataset.delay ?? "0";
//       el.style.opacity = "0";
//       el.style.transform = "translateY(26px)";
//       el.style.transition = `opacity 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1)`;
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const el = entry.target as HTMLElement;
//           if (entry.isIntersecting) {
//             el.style.opacity = "1";
//             el.style.transform = "translateY(0)";
//             // Unobserve after revealing — stays visible permanently
//             observer.unobserve(el);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     // Small delay so layout is painted before first observation
//     const t = setTimeout(() => {
//       els.forEach((el) => {
//         // If element is already in viewport on load, reveal it immediately
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight) {
//           el.style.opacity = "1";
//           el.style.transform = "translateY(0)";
//         } else {
//           observer.observe(el);
//         }
//       });
//     }, 50);

//     // Re-run on back-navigation (bfcache restore)
//     const onPageShow = (e: PageTransitionEvent) => {
//       if (e.persisted) {
//         // Page restored from cache — re-reveal everything in viewport
//         els.forEach((el) => {
//           const rect = el.getBoundingClientRect();
//           if (rect.top < window.innerHeight) {
//             el.style.opacity = "1";
//             el.style.transform = "translateY(0)";
//           } else {
//             el.style.opacity = "0";
//             el.style.transform = "translateY(26px)";
//             observer.observe(el);
//           }
//         });
//       }
//     };

//     window.addEventListener("pageshow", onPageShow);

//     return () => {
//       clearTimeout(t);
//       observer.disconnect();
//       window.removeEventListener("pageshow", onPageShow);
//     };
//   }, []);
// }