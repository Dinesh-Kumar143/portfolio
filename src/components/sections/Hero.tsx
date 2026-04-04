"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-[68px] relative overflow-hidden bg-white"
    >
      {/* Grid background */}
      <div className="hero-grid-bg absolute inset-0 opacity-45 pointer-events-none" />

      {/* Right panel */}
      <div
        className="absolute top-0 right-0 h-full w-[40%] bg-[#f6f4f1] pointer-events-none"
        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)" }}
      />

      <div className="max-w-[1200px] mx-auto px-13 w-full relative z-10">
        <div className="grid grid-cols-[1fr_400px] gap-16 items-center max-lg:grid-cols-1">

          {/* ── Left: Text ── */}
          <div>
            {/* Tag */}
            <div className="hero-anim-1 inline-flex items-center gap-2.5 text-[12px] font-medium tracking-[0.1em] uppercase text-[#6b6b6b] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c8622a] shadow-[0_0_0_3px_#f2e8e1]" />
              {personalInfo.title} · {personalInfo.location}
            </div>

            {/* Heading */}
            <h1 className="hero-anim-2 font-serif text-[clamp(46px,5.5vw,80px)] font-bold leading-[1.04] tracking-[-0.025em] text-[#0e0e0e] mb-6">
              Building{" "}
              <em className="text-[#c8622a] italic">digital</em>
              <br />
              {personalInfo.tagline}
            </h1>

            {/* Bio */}
            <p className="hero-anim-3 text-[16px] text-[#3a3a3a] leading-[1.8] max-w-[500px] mb-10">
              {personalInfo.bio}
            </p>

            {/* CTAs */}
            <div className="hero-anim-4 flex items-center gap-3.5 flex-wrap mb-13">
              <Button href="#projects" variant="dark">
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Button>
              <Button href="#contact" variant="line">
                Get In Touch
              </Button>
            </div>

            {/* Stats */}
            <div className="hero-anim-5 flex gap-10 pt-10 border-t border-[#e4e0da] max-sm:flex-col max-sm:gap-5">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-serif text-[42px] font-bold text-[#0e0e0e] leading-none block">
                    {stat.num.replace("+", "")}
                    {stat.num.includes("+") && (
                      <em className="not-italic text-[#c8622a]">+</em>
                    )}
                  </span>
                  <p className="text-[12px] text-[#6b6b6b] mt-1 font-medium tracking-[0.04em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile Card ── */}
          <div className="hero-anim-6">
            <div className="bg-white border border-[#e4e0da] rounded-lg overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.09),0_4px_16px_rgba(0,0,0,0.04)]">
              {/* Card header */}
              <div className="bg-[#0e0e0e] px-6 py-5 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#c8622a] flex items-center justify-center font-serif text-[18px] font-bold text-white flex-shrink-0">
                  {personalInfo.initials}
                </div>
                <div>
                  <span className="block text-[15px] font-semibold text-white">
                    {personalInfo.name}
                  </span>
                  <span className="block text-[12px] text-white/45 mt-0.5">
                    {personalInfo.title}
                  </span>
                </div>
                <span className="ml-auto bg-[#c8622a]/22 text-[#f8a87a] text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-[0.04em] whitespace-nowrap">
                  Open to work
                </span>
              </div>

              {/* Card rows */}
              <div>
                {[
                  { icon: "💼", label: "Current Role",  value: personalInfo.company },
                  { icon: "🎓", label: "Education",     value: personalInfo.education },
                  { icon: "📍", label: "Location",      value: `${personalInfo.location} · ${personalInfo.remoteLabel}` },
                  { icon: "⭐", label: "Focus",         value: personalInfo.focus },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3.5 px-6 py-3.5 border-b border-[#e4e0da] last:border-b-0">
                    <div className="w-9 h-9 flex-shrink-0 bg-[#f6f4f1] border border-[#e4e0da] rounded-md flex items-center justify-center text-[15px]">
                      {row.icon}
                    </div>
                    <div>
                      <span className="block text-[11px] text-[#6b6b6b] font-medium mb-0.5">
                        {row.label}
                      </span>
                      <span className="block text-[13px] font-medium text-[#0e0e0e]">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div className="px-6 py-3.5 bg-[#f6f4f1] border-t border-[#e4e0da] flex items-center justify-between">
                <span className="text-[12px] text-[#6b6b6b] font-medium">Availability</span>
                <span className="flex items-center gap-1.5 text-[12px] font-semibold text-green-700">
                  <span className="avail-dot w-[7px] h-[7px] rounded-full bg-green-500 inline-block" />
                  {personalInfo.availableFrom}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-fade absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.15em] uppercase text-[#6b6b6b]">Scroll</span>
        <div className="scroll-bar-anim w-[1px] h-11 bg-gradient-to-b from-[#e4e0da] to-[#c8622a]" />
      </div>
    </section>
  );
}

// "use client";
// import Button from "@/components/ui/Button";
// import { personalInfo } from "@/data/personal";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center pt-[68px] relative overflow-hidden bg-white"
//     >
//       {/* Grid background */}
//       <div className="hero-grid-bg absolute inset-0 opacity-45 pointer-events-none" />

//       {/* Right decorative panel — desktop only */}
//       <div
//         className="hidden lg:block absolute top-0 right-0 h-full w-[40%] bg-[#f6f4f1] pointer-events-none"
//         style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)" }}
//       />

//       <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full relative z-10 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center">

//           {/* ── Left: Text ── */}
//           <div>
//             {/* Available tag */}
//             <div className="hero-anim-1 inline-flex items-center gap-2.5 text-[12px] font-medium tracking-[0.1em] uppercase text-[#6b6b6b] mb-6">
//               <span className="w-2 h-2 rounded-full bg-[#c8622a] shadow-[0_0_0_3px_#f2e8e1] flex-shrink-0" />
//               {personalInfo.title} · {personalInfo.location}
//             </div>

//             {/* Heading */}
//             <h1 className="hero-anim-2 font-serif text-[clamp(40px,5.5vw,80px)] font-bold leading-[1.04] tracking-[-0.025em] text-[#0e0e0e] mb-6">
//               Building{" "}
//               <em className="text-[#c8622a] italic">digital</em>
//               <br />
//               {personalInfo.tagline}
//             </h1>

//             {/* Bio */}
//             <p className="hero-anim-3 text-[16px] text-[#3a3a3a] leading-[1.8] max-w-[500px] mb-10">
//               {personalInfo.bio}
//             </p>

//             {/* CTAs */}
//             <div className="hero-anim-4 flex flex-wrap gap-3 mb-12">
//               <Button href="#projects" variant="dark">
//                 View My Work
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                   <line x1="5" y1="12" x2="19" y2="12" />
//                   <polyline points="12 5 19 12 12 19" />
//                 </svg>
//               </Button>
//               <Button href="#contact" variant="line">
//                 Get In Touch
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="hero-anim-5 pt-10 border-t border-[#e4e0da]">
//               <div className="flex flex-row flex-wrap gap-8">
//                 {personalInfo.stats.map((stat) => (
//                   <div key={stat.label} className="min-w-[80px]">
//                     <span className="font-serif text-[38px] sm:text-[42px] font-bold text-[#0e0e0e] leading-none block">
//                       {stat.num.replace("+", "")}
//                       {stat.num.includes("+") && (
//                         <em className="not-italic text-[#c8622a]">+</em>
//                       )}
//                     </span>
//                     <p className="text-[12px] text-[#6b6b6b] mt-1 font-medium tracking-[0.04em]">
//                       {stat.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ── Right: Profile Card — desktop only ── */}
//           <div className="hero-anim-6 hidden lg:block">
//             <div className="bg-white border border-[#e4e0da] rounded-lg overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.09),0_4px_16px_rgba(0,0,0,0.04)]">
//               {/* Card header */}
//               <div className="bg-[#0e0e0e] px-6 py-5 flex items-center gap-3.5">
//                 <div className="w-12 h-12 rounded-full bg-[#c8622a] flex items-center justify-center font-serif text-[18px] font-bold text-white flex-shrink-0">
//                   {personalInfo.initials}
//                 </div>
//                 <div>
//                   <span className="block text-[15px] font-semibold text-white">
//                     {personalInfo.name}
//                   </span>
//                   <span className="block text-[12px] text-white/45 mt-0.5">
//                     {personalInfo.title}
//                   </span>
//                 </div>
//                 <span className="ml-auto bg-[#c8622a]/20 text-[#f8a87a] text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-[0.04em] whitespace-nowrap">
//                   Open to work
//                 </span>
//               </div>

//               {/* Card rows */}
//               {[
//                 { icon: "💼", label: "Current Role",  value: personalInfo.company },
//                 { icon: "🎓", label: "Education",     value: personalInfo.education },
//                 { icon: "📍", label: "Location",      value: `${personalInfo.location} · ${personalInfo.remoteLabel}` },
//                 { icon: "⭐", label: "Focus",         value: personalInfo.focus },
//               ].map((row) => (
//                 <div
//                   key={row.label}
//                   className="flex items-center gap-3.5 px-6 py-3.5 border-b border-[#e4e0da] last:border-b-0"
//                 >
//                   <div className="w-9 h-9 flex-shrink-0 bg-[#f6f4f1] border border-[#e4e0da] rounded-md flex items-center justify-center text-[15px]">
//                     {row.icon}
//                   </div>
//                   <div>
//                     <span className="block text-[11px] text-[#6b6b6b] font-medium mb-0.5">
//                       {row.label}
//                     </span>
//                     <span className="block text-[13px] font-medium text-[#0e0e0e]">
//                       {row.value}
//                     </span>
//                   </div>
//                 </div>
//               ))}

//               {/* Card footer */}
//               <div className="px-6 py-3.5 bg-[#f6f4f1] border-t border-[#e4e0da] flex items-center justify-between">
//                 <span className="text-[12px] text-[#6b6b6b] font-medium">Availability</span>
//                 <span className="flex items-center gap-1.5 text-[12px] font-semibold text-green-700">
//                   <span className="avail-dot w-[7px] h-[7px] rounded-full bg-green-500 inline-block" />
//                   {personalInfo.availableFrom}
//                 </span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Scroll cue */}
//       <div className="hero-fade absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
//         <span className="text-[10px] tracking-[0.15em] uppercase text-[#6b6b6b]">Scroll</span>
//         <div className="scroll-bar-anim w-[1px] h-11 bg-gradient-to-b from-[#e4e0da] to-[#c8622a]" />
//       </div>
//     </section>
//   );
// }