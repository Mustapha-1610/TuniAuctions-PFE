import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "firebasestorage.googleapis.com" },
      { hostname: "cdn.discordapp.com" },
      { hostname: "cdn.builder.io" },
    ],
  },
};

export default withNextIntl(nextConfig);
