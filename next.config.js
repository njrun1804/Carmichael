// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Highlight potential problems
  reactStrictMode: true,

  // Remote image settings
  images: {
    domains: ['example.com'],
    formats: ['image/webp'],
  },

  // Opt-in experiments
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;   // CommonJS – works in Next 13