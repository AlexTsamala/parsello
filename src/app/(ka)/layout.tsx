import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";

import { ContactClickTracking } from "@/components/analytics/ContactClickTracking";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { business, siteUrl } from "@/content/business";
import { getContent } from "@/content";
import { organizationSchema, websiteSchema } from "@/lib/schema";

import "../globals.css";

const georgian = Noto_Sans_Georgian({
  subsets: ["georgian", "latin"],
  display: "swap",
  variable: "--font-noto-georgian",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `ამანათების გაგზავნა ევროპაში | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description:
    "გაგზავნეთ ამანათი საქართველოდან ევროპაში მარტივად და კომფორტულად. Parcello გთავაზობთ ამანათების გაგზავნის სერვისს ევროპის სხვადასხვა ქვეყანაში.",
  applicationName: business.name,
  formatDetection: { telephone: true },
};

const locale = "ka";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { ui } = getContent(locale);

  return (
    <html lang="ka" className={georgian.variable}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white"
        >
          {ui.skipToContent}
        </a>
        <JsonLd data={[organizationSchema(locale), websiteSchema(locale)]} />
        <Navbar locale={locale} />
        <div className="pb-20 lg:pb-0">{children}</div>
        <Footer locale={locale} />
        <MobileStickyCta locale={locale} />

        <GoogleAnalytics />
        <ContactClickTracking />
        <CookieConsent
          labels={{
            region: ui.aria.cookieBanner,
            body: ui.cookie.body,
            decline: ui.cookie.decline,
            accept: ui.cookie.accept,
          }}
        />
      </body>
    </html>
  );
}
