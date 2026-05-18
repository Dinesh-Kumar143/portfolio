import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    num: "Project 01",
    title: "Portfolio Website",
    description:
      "Full-stack portfolio website with Next.js and TypeScript, featuring responsive design, smooth scroll animations, and contact form with email integration for professional networking",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React.js", "Responsive Design", "Brevo(email service)"],
    liveUrl: "https://dinesh-kumar-n-portfolio.vercel.app/",
    githubUrl: "https://github.com/Dinesh-Kumar143/portfolio",
    thumbClass: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
    imageUrl: "/projects/portfolio-website.png", // Add your screenshot here

  },
  {
    id: 2,
    num: "Project 02",
    title: "Obsidian Restaurant",
    description:
      "Premium restaurant website built with Next.js 14 and TypeScript, featuring a filterable interactive menu, scroll-triggered animations, reservation booking form with validation, auto-rotating testimonials carousel, and an asymmetric gallery showcase",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "App Router",
    ],
    liveUrl: "https://obsidian-restuarant.vercel.app/",
    githubUrl: "https://github.com/Dinesh-Kumar143/obsidian",
    thumbClass: "from-[#0c0b09] via-[#1a1409] to-[#2a1f0a]",
    imageUrl: "/projects/obsidian-restaurant.png",
  },
  {
    id: 3,
    num: "Project 03",
    title: "Fable — E-Commerce Platform",
    description:
      "Full-stack e-commerce platform built with React 19, Node.js, and MongoDB, featuring a modern storefront, user dashboard, admin panel, JWT authentication, cart and wishlist management, order tracking, and transactional email integration",
    tags: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Auth",
      "Brevo (email service)",
    ],
    liveUrl: "https://fable-shopping.vercel.app",
    githubUrl: "https://github.com/Dinesh-Kumar143/Fable-Ecommerce-App",
    thumbClass: "from-[#0f0c29] via-[#302b63] to-[#24243e]",
    imageUrl: "/projects/fable-ecommerce.png",
  },

  {
    id: 4,
    num: "Project 04",
    title: "MERN Authentication System",
    description:
      "Full-stack authentication system with secure JWT token generation, password encryption using bcrypt, and automated email functionality for welcome messages and password resets.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "NodeMailer"],
    liveUrl: "",
    githubUrl: "https://github.com/Dinesh-Kumar143/Mern-Authentication-System",
    thumbClass: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
    // imageUrl: "/projects/mern-auth.png", // Add your screenshot here
    codeLines: `<span class="text-blue-400">const</span> token = jwt.<span class="text-yellow-300">sign</span>({<br/>&nbsp;&nbsp;userId: user._id<br/>}, process.env.JWT_SECRET)<br/><br/><span class="text-blue-400">const</span> hash = <span class="text-blue-400">await</span> bcrypt<br/>&nbsp;&nbsp;.<span class="text-yellow-300">hash</span>(password, <span class="text-purple-300">10</span>)<br/><span class="text-blue-400">return</span> { token, user }`,

  },
  {
    id: 5,
    num: "Project 05",
    title: "Weather Web App",
    description:
      "React.js weather application with real-time data from OpenWeatherMap API, featuring dynamic weather updates with temperature, conditions, and location-based details in a clean, responsive UI.",
    tags: ["React.js", "OpenWeatherMap API", "JavaScript", "CSS"],
    liveUrl: "https://react-js-weather-app-3jvr.vercel.app/",
    githubUrl: "https://github.com/Dinesh-Kumar143/React-js-Weather-App",
    thumbClass: "from-[#141e30] to-[#243b55]",
    imageUrl: "/projects/weather-app.png", // Add your screenshot here
  },
  {
    id: 6,
    num: "Project 06",
    title: "Caesar Cipher Website",
    description:
      "Fully responsive React.js web application implementing Caesar cipher encryption and decryption. Features an intuitive interface for secure text transformation and optimized cross-device responsiveness.",
    tags: ["React.js", "JavaScript", "Cryptography", "Responsive Design"],
    liveUrl: "https://ceaser-cipher-react-js.vercel.app/",
    githubUrl: "https://github.com/Dinesh-Kumar143/Ceaser-Cipher-reactJs",
    thumbClass: "from-[#0a1628] to-[#1c3a5e]",
    imageUrl: "/projects/caesar-cipher.png", // Add your screenshot here
  },
  {
    id: 7,
    num: "Project 07",
    title: "404-Squad Website",
    description:
      "Fully responsive static website built with HTML, CSS, and JavaScript during an in-class competition. Applied mobile-first design approach for optimal viewing and smooth navigation across all devices.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://dinesh-kumar143.github.io/Website/",
    githubUrl: "https://github.com/Dinesh-Kumar143/Website",
    thumbClass: "from-[#1a0a00] to-[#3b1800]",
    imageUrl: "/projects/404-squad.png", // Add your screenshot here
  },
];
