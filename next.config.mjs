/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ['localhost', 'cdn.sanity.io', 'tailwindui.com'],
  },
  experimental: {
    typedRoutes: true,
    appDir: true,
  },
}

export default config
