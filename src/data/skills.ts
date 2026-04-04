import { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "🖥",
    iconBg: "bg-blue-50",
    barColor: "bg-blue-600",
    skills: [
      { name: "React / Next.js", percentage: 95 },
      { name: "TypeScript",      percentage: 80 },
      { name: "CSS / Tailwind",  percentage: 90 },
      { name: "Responsive Design",  percentage: 95 },
      { name: "Redux / Zustand (state management)",  percentage: 70 },
      // { name: "Vue / Nuxt",      percentage: 75 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    iconBg: "bg-orange-50",
    barColor: "bg-[#c8622a]",
    skills: [
      { name: "Node.js / Express",  percentage: 93 },
      // { name: "Python / FastAPI",  percentage: 85 },
      // { name: "Go / Gin",          percentage: 80 },
      // { name: "GraphQL",           percentage: 78 },
      { name: "REST API",             percentage: 90 },
      { name: "Authentication (OAuth, JWT)",percentage: 83 },
      { name: "WebSockets",           percentage: 80 },
      { name: "API Design",           percentage: 85 },
      { name: "Email Service",        percentage: 80 },

    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "🗄",
    iconBg: "bg-green-50",
    barColor: "bg-green-600",
    skills: [
      // { name: "PostgreSQL",      percentage: 90 },
      { name: "MongoDB",            percentage: 95 },
      { name: "Redis",              percentage: 86 },
      { name: "Prisma / Mongoose",  percentage: 88 },
      { name: "MySQL",              percentage: 90 },
      { name: "Firebase / Firestore",percentage: 70 },
      { name: "Database Design",    percentage: 90 },
      { name: "Query Optimization",  percentage: 90 },
    ],
  },
  {
    id: "devops",
    label: "DevOps / Cloud",
    icon: "☁️",
    iconBg: "bg-purple-50",
    barColor: "bg-purple-600",
    skills: [
      // { name: "AWS / GCP",          percentage: 84 },
      { name: "Docker", percentage: 78 },
      { name: "Vercel / Netlify", percentage: 70 },
      { name: "Linux/Unix", percentage: 70 },
      // { name: "Docker / Kubernetes", percentage: 80 },
      // { name: "CI/CD Pipelines",    percentage: 88 },
      // { name: "Terraform",          percentage: 70 },
    ],
  },
  {
    id: "ai-tools",
    label: "AI & Tools",
    icon: "🧠",
    iconBg: "bg-pink-50",
    barColor: "bg-pink-600",
    skills: [
      { name: "ChatGPT / OpenAI", percentage: 85 },
      { name: "GitHub Copilot", percentage: 90 },
      { name: "Prompt Engineering", percentage: 80 },
      { name: "Claud ai", percentage: 90 },
      { name: "Gemini", percentage: 75 },
      { name: "Deep Seek", percentage: 70 },


    ],
  },

  {
    id: "other-tools",
    label: "Other Tools",
    icon: "🔄",
    iconBg: "bg-purple-50",
    barColor: "bg-cyan-700",
    skills: [
      { name: "Git / GitHub", percentage: 75 },
      { name: "Figma / Design Tools", percentage: 60 },
      
    ],
  },
];