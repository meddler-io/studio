/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      // Turbopack is enabled by default in Next 14 dev for supported commands
    }
  }
};

export default nextConfig;
