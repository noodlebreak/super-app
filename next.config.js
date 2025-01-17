/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/super-app' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/super-app' : '',
}

module.exports = nextConfig