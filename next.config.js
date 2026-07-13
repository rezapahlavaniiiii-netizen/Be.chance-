/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/Be.chance-',
  assetPrefix: '/Be.chance-/',
}

module.exports = nextConfig
