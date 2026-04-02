import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/youtube-tax-calculator",
        destination: "/calculators/youtube-earnings-after-tax",
        permanent: true,
      },
      {
        source: "/youtube-earnings-after-tax-calculator",
        destination: "/calculators/youtube-earnings-after-tax",
        permanent: true,
      },
      {
        source: "/how-much-tax-do-youtubers-pay",
        destination: "/guides/tax/us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
