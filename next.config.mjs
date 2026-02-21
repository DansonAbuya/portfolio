/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/favicon.ico', destination: '/logo.png' },
      { source: '/favicon.png', destination: '/logo.png' },
    ]
  },
}

export default nextConfig
