import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for highlighting potential problems
  reactStrictMode: true,

  // Configure remote image domains and formats
  images: {
    domains: ["example.com"],
    formats: ["image/webp"],
  },

  // Opt in to experimental features
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
