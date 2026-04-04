export interface Project {
  id: number;
  num: string;           // "Project 01"
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  thumbClass: string;    // Tailwind bg gradient class key
  imageUrl?: string;     // Optional: path to project screenshot
  codeLines?: string;    // Optional: Raw HTML string for code preview (fallback)
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillGroup {
  id: string;            // "frontend" | "backend" | "database" | "devops"
  label: string;
  icon: string;
  iconBg: string;        // Tailwind bg class
  barColor: string;      // Tailwind bg class for bar fill
  skills: Skill[];
}

export interface Experience {
  id: number;
  period: string;
  company: string;
  location: string;
  role: string;
  bullets: string[];
}

export interface Testimonial {
  id: number;
  initials: string;
  name: string;
  role: string;
  quote: string;
}

export interface SocialLink {
  label: string;
  href: string;
  shortLabel: string;
}

export interface PersonalInfo {
  name: string;
  displayName: string;   // "Alex.Chen" with dot
  initials: string;      // "AC"
  title: string;
  location: string;      // "San Francisco, CA"
  remoteLabel: string;   // "Remote OK"
  bio: string;
  tagline: string;       // Hero heading second line
  email: string;
  phone: string;
  company: string;       // Current company
  education: string;
  focus: string;
  availableFrom: string;
  imageSrc: string,
  CVPath: string,  
  stats: { num: string; label: string }[];
  socials: SocialLink[];
  facts: { icon: string; text: string }[];
  aboutParagraphs: string[];
}