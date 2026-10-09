import Link from "next/link";

import { RateTable } from "@/components/pricing/RateTable";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";

/**
 * The published per-kg rates, so the homepage gives a real price rather than
 * only "message us" (CLAUDE.md §1 rule 2). Destinations without a rate get the
 * approved contact wording beside the table; import it, never paraphrase it.
 */
export function PricingSection({ locale }: { locale: Locale }) {
  const { ui, business } = getContent(locale);
  const copy = ui.pages.prices;

  return (
    <Section tone="surface" id="prices">
      <SectionHeading title={ui.pricingSection.heading} description={copy.lead} />

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
        <RateTable locale={locale} />

        <div className="rounded-2xl border border-line bg-white p-7">
          <h3 className="text-lg font-semibold">{copy.notListedHeading}</h3>
          <p className="mt-3 text-muted">{business.pricing.dependsOn}</p>
          <p className="mt-3">{business.pricing.copy}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PhoneButton size="lg" />
            {business.facebookUrl ? (
              <Button href={business.facebookUrl} size="lg" variant="secondary">
                {ui.pricingSection.facebookCta}
              </Button>
            ) : null}
          </div>

          <Link
            href={localePath(locale, "/prices")}
            className="mt-6 inline-block text-sm font-medium text-brand underline-offset-4 hover:underline"
          >
            {ui.common.allPrices}
          </Link>
        </div>
      </div>
    </Section>
  );
}
