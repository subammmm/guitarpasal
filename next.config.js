/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Support for GitHub Pages deployment
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/guitarpasal' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/guitarpasal/' : '',
}

module.exports = nextConfig