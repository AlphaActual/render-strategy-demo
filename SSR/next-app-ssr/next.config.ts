import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Experimental features for better SSR control
  experimental: {
    // Ensure server-side rendering is always used
    serverComponentsExternalPackages: [],
  },
  
  // Disable static optimization to ensure true SSR
  output: undefined, // Ensure we're not using static export
};

export default nextConfig;
