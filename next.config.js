/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/hypertraining' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hypertraining/' : '',
}

module.exports = nextConfig