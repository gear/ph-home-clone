/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    PROJECT_ROOT: process.cwd(),
  },
  publicRuntimeConfig: {
    basePath: '/public'
  }
}

module.exports = nextConfig
