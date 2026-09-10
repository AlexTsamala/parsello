import { Section, SectionHeading } from "@/components/ui/Section";
import { getContent } from "@/content";
import { type Locale } from "@/content/locales";

export function TrustSection({ locale }: { locale: Locale }) {
  const { ui } = getContent(locale);
  const benefits = ui.trust.benefits;

  return (
    <Section>
      <SectionHeading
        title={ui.trust.heading}
        description={ui.trust.description}
      />

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <li
            key={benefit.title}
            className="rounded-xl border border-line bg-white p-6 transition-colors hover:border-brand"
          >
            <h3 className="text-lg font-semibold">{benefit.title}</h3>
            <p className="mt-2 text-sm text-muted">{benefit.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
