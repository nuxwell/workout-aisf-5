/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

module.exports = nextConfig;