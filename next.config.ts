import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  /**
   * Italy was dropped as a destination on 2026-09-08. The old page is indexed,
   * so it points at the destination index rather than returning 404.
   */
  async redirects() {
    return [
      {
        source: "/countries/italy",
        destination: "/countries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
