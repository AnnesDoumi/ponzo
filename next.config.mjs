/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel-storage.com", // deine externen
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
