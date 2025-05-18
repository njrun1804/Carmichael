/**
 * next.config.js must use CommonJS (module.exports), not ESM (import/export).
 * Remove type imports and use module.exports for compatibility.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: [] },
};

module.exports = nextConfig;
