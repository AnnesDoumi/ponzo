// next.config.mjs
export default {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/apple-touch-icon-precomposed.png",
        destination: "/apple-touch-icon.png",
        permanent: true,
      },
    ]
  },
}
