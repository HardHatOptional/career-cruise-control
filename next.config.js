/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static site generation
  output: 'export',
  
  // Disable image optimization for static export
  images: { unoptimized: true },
  
  // Add trailing slashes to URLs
  trailingSlash: true,
  
  // This helps with direct access to static files
  assetPrefix: './',
}

module.exports = nextConfig