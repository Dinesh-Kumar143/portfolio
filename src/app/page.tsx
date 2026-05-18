import Hero       from "@/components/sections/Hero";
import About      from "@/components/sections/About";
import Skills     from "@/components/sections/Skills";
import Projects   from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact    from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-px bg-[#e4e0da]" />
      <About />
      <div className="w-full h-px bg-[#e4e0da]" />
      <Skills />
      <div className="w-full h-px bg-[#e4e0da]" />
      <Projects />
      <div className="w-full h-px bg-[#e4e0da]" />
      <Experience />
      <Contact />
    </>
  );
}
