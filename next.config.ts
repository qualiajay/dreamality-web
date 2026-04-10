import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/terms",
        destination:
          "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
