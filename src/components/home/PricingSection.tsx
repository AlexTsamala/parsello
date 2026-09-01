import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/content/business";

/**
 * NO PRICES HERE — ever. Pricing varies by destination and changes often, so
 * it is quoted on request only (CLAUDE.md §1 rule 2). The copy below is the
 * single approved wording; import it, never paraphrase it.
 */
export function PricingSection() {
  return (
    <Section tone="surface" id="prices">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <SectionHeading
          title="ამანათის გაგზავნის ფასი"
          description={business.pricing.dependsOn}
        />

        <div className="rounded-2xl border border-line bg-white p-7">
          <p className="text-base">{business.pricing.copy}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`tel:${business.phone.tel}`} size="lg">
              {business.phone.display}
            </Button>
            {business.facebookUrl ? (
              <Button href={business.facebookUrl} size="lg" variant="secondary">
                Facebook-ზე მოწერა
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
