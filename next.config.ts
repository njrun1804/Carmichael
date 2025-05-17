import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* React strict mode is on by default in 14.x, but keep it if you like */
  reactStrictMode: true,

  images: {
    domains: ["example.com"],
    formats: ["image/webp"],
  },
};

export default nextConfig;
