import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cssModules: {
  //   mode: "local",
  // },
  async redirects() {
    return [
      {
        source: '/en/kopyası-latso',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
