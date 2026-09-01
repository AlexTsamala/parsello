import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { Navbar } from "@/components/layout/Navbar";
import { business, siteUrl } from "@/content/business";

import "./globals.css";

/**
 * Georgian is the primary language (CLAUDE.md §5), so the font must have real
 * Georgian coverage — most default UI stacks do not.
 */
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ka" className={georgian.variable}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white"
        >
          გადასვლა მთავარ კონტენტზე
        </a>
        <Navbar />
        {/* Bottom padding clears the mobile sticky CTA bar. */}
        <div className="pb-20 md:pb-0">{children}</div>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
