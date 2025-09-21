/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  
  // Disable all dynamic features
  images: {
    unoptimized: true,
  },
  
  // Build configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable problematic optimizations
  swcMinify: false,
  
  // Minimal webpack config
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
}

export default nextConfig