import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { hostname: "firebasestorage.googleapis.com" },
      { hostname: "cdn.discordapp.com" },
      { hostname: "cdn.builder.io" },
      { hostname: "cdn.britannica.com" },
      { hostname: "upload.wikimedia.org" },
    ],
  },
};

export default withNextIntl(nextConfig);
