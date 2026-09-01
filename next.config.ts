import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
