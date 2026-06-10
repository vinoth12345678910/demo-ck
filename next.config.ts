import type { NextConfig } from "next";

// Next.js configuration for standalone Docker deployment
// - output: 'standalone' produces a minimal output with only the files
//   needed to run the application (no source, no dev dependencies)
const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
