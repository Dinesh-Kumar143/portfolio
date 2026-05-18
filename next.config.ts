import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.10.1"],
  images: {
    remotePatterns: [
      // Cloudinary direct image URLs
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      // Microlink screenshots
      {
        protocol: "https",
        hostname: "**.microlink.io",
      },
      // Allow any https image source (covers screenshot services, etc.)
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
