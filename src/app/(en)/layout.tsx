import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";

import { ContactClickTracking } from "@/components/analytics/ContactClickTracking";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { business, siteUrl } from "@/content/business";
import { organizationSchema, websiteSchema } from "@/lib/schema";

import "../globals.css";

/**
 * English root layout.
 *
 * Georgian lives at `/` under `(ka)`; English is prefixed with `/en` under
 * `(en)`. Two root layouts is the only way to vary `<html lang>` — a nested
 * layout cannot render `<html>`. Route groups keep both out of the URL, so
 * every Georgian path stays exactly as it was.
 *
 * Same typeface as the Georgian side, but only the Latin subset is loaded:
 * English pages never render mkhedruli, so the Georgian glyphs would be dead
 * weight. Both layouts expose the same CSS variable, so `globals.css` is shared
 * unchanged and the two locales render identically.
 */
const latin = Noto_Sans_Georgian({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-georgian",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Send parcels to Europe | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description:
    "Send parcels from Georgia to Europe with Parcello. Courier pickup or drop-off in Tbilisi, delivery across Europe.",
  applicationName: business.name,
  formatDetection: { telephone: true },
};

export default function EnRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={latin.variable}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <div className="pb-20 lg:pb-0">{children}</div>

        <GoogleAnalytics />
        <ContactClickTracking />
        <CookieConsent />
      </body>
    </html>
  );
}
