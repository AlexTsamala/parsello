import { CountriesSection } from "@/components/home/CountriesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingSection } from "@/components/home/PricingSection";
import { TrustSection } from "@/components/home/TrustSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getContent } from "@/content";
import type { Locale } from "@/content/locales";
import { faqSchema } from "@/lib/schema";

/**
 * One homepage, rendered in both languages.
 *
 * The route files under `app/(ka)` and `app/(en)` are thin wrappers around
 * this. Sharing the component is what guarantees the two sites are identical
 * in layout and styling — there is no second copy of the markup to drift.
 */
export function HomePage({ locale }: { locale: Locale }) {
  const { featuredFaqs } = getContent(locale);

  return (
    <main id="main">
      <JsonLd data={faqSchema(featuredFaqs)} />
      <Hero locale={locale} />
      <TrustSection locale={locale} />
      <HowItWorks locale={locale} />
      <CountriesSection locale={locale} />
      <PricingSection locale={locale} />
      <FaqSection locale={locale} items={featuredFaqs} />
      <FinalCta locale={locale} />
    </main>
  );
}
