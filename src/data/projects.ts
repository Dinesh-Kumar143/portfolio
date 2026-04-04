import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    num: "Project 01",
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
    id: 2,
    num: "Project 02",
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
    id: 3,
    num: "Project 03",
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
    id: 4,
    num: "Project 04",
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
