/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: '../dist/client',
  cleanDistDir: true,
  compress: true,
  basePath: '/docs',
  generateBuildId: true,
  generateEtags: true,
  swcMinify: true,
}
