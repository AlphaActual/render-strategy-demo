import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Export as a static SPA for pure client-side rendering
  output: 'export',
  
  // Disable server-side features for CSR
  trailingSlash: true,
  
  // Ensure images work with static export
  images: {
    unoptimized: true
  }
};

export default nextConfig;
