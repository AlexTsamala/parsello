import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/content/business";

/**
 * Placeholder homepage — the real one is built in Phase 4.
 * Exists so the design system can be checked in the browser.
 */
export default function HomePage() {
  return (
    <main id="main">
      <Section>
        <SectionHeading
          as="h1"
          title="ამანათების გაგზავნა საქართველოდან ევროპაში"
          description={`${business.shortName} გეხმარებათ ამანათის მარტივად გაგზავნაში საქართველოდან ევროპის მიმართულებით.`}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            ამანათის გაგზავნა
          </Button>
          <Button href="/how-it-works" size="lg" variant="secondary">
            როგორ მუშაობს?
          </Button>
        </div>
      </Section>
    </main>
  );
}
