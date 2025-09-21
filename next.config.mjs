/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  // Disable all server-side features for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization must be disabled for static export
  images: {
    unoptimized: true,
  },
  
  // Disable minification that can cause issues
  swcMinify: false,
  
  // Webpack configuration for static export
  webpack: (config, { isServer, dev }) => {
    // Disable webpack cache in production builds
    if (!dev) {
      config.cache = false;
    }
    
    // Handle client-side fallbacks
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
      };
    }
    
    return config;
  },
  
  // Disable experimental features that can cause issues
  experimental: {
    esmExternals: false,
  },
}

export default nextConfig
