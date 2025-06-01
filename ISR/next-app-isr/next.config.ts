import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable ISR (Incremental Static Regeneration)
  cacheMaxMemorySize: 0, // Disable default in-memory caching for ISR
  // Add any other ISR-specific configurations here
};

export default nextConfig;
