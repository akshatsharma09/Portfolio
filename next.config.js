/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure turbopack root to avoid workspace root inference warnings when
  // this project is part of a larger repository with multiple lockfiles.
  turbopack: {
    // Turbopack expects an absolute path for the root — use the current directory
    root: __dirname
  }
}

module.exports = nextConfig
