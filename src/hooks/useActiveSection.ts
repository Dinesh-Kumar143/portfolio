"use client";
import { useEffect, useState } from "react"

export function useActiveSection(){
    const [active, setActive] = useState<String>("")

    useEffect(() => {
      const sections = document.querySelectorAll<HTMLElement>("section[i]")

      const handleScroll = () => {
        let current = ""; 
        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - 120){
                current = section.id
            }
        });
        setActive(current)
      };

      window.addEventListener("scroll", handleScroll, {passive:true});
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);   
      
    }, [])

    return active;    
}