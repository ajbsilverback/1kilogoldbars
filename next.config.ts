import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.wholesalecoinsdirect.com',
      },
    ],
  },
}

export default nextConfig

