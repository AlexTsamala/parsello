import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

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

/**
 * Russian root layout, served under `/ru`. See the English layout for why each
 * locale needs its own root layout.
 *
 * The font is Noto Sans, not Noto Sans Georgian: the Georgian face ships only
 * `cyrillic-ext`, which lacks the basic Russian alphabet, so Russian text
 * would fall back to a system font. Noto Sans is the same design family, and
 * it is exposed under the same CSS variable, so `globals.css` is unchanged and
 * the Russian site matches the others.
 */
const cyrillic = Noto_Sans({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-noto-georgian",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Отправить посылку из Грузии в Европу | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description:
    "Отправьте посылку из Грузии в Европу с Parcello. Курьер или самостоятельная сдача в Тбилиси, доставка по всей Европе.",
  applicationName: business.name,
  formatDetection: { telephone: true },
};

const locale = "ru";

export default function RuRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { ui } = getContent(locale);

  return (
    <html lang="ru" className={cyrillic.variable}>
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
