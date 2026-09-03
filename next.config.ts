import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * /how-it-works was folded into /services, which now owns the process copy
   * for all three services. Permanent so search engines move the ranking over
   * instead of treating it as a broken link.
   */
  async redirects() {
    return [{ source: "/how-it-works", destination: "/services", permanent: true }];
  },

  images: {
    /**
     * Required to serve the Parcello logo through next/image. The only SVGs
     * we load are our own files in `public/` — never remote or user-supplied —
     * and the CSP below sandboxes them regardless.
     */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
