import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getContent } from "@/content";
import { type Locale } from "@/content/locales";

/**
 * NO PRICES HERE — ever. Pricing varies by destination and changes often, so
 * it is quoted on request only (CLAUDE.md §1 rule 2). The copy below is the
 * single approved wording; import it, never paraphrase it.
 */
export function PricingSection({ locale }: { locale: Locale }) {
  const { ui, business } = getContent(locale);

  return (
    <Section tone="surface" id="prices">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <SectionHeading
          title={ui.pricingSection.heading}
          description={business.pricing.dependsOn}
        />

        <div className="rounded-2xl border border-line bg-white p-7">
          <p className="text-base">{business.pricing.copy}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PhoneButton size="lg" />
            {business.facebookUrl ? (
              <Button href={business.facebookUrl} size="lg" variant="secondary">
                {ui.pricingSection.facebookCta}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
