import Link from "next/link";

import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/content/business";
import { countries } from "@/content/countries";
import { ui } from "@/content/ui";

/**
 * Real crawlable links, not decorative cards (plan §11) — each card is an
 * anchor to that country's SEO page with natural Georgian anchor text.
 */
export function CountriesSection() {
  return (
    <Section id="countries">
      <SectionHeading
        title={ui.countriesSection.heading}
        description={`${business.coverage.scope} ${business.coverage.priorityNote}`}
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <li key={country.slug}>
            <Link
              href={`/countries/${country.slug}`}
              className="group flex h-full items-center gap-4 rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand"
            >
              <span className="text-3xl" aria-hidden="true">
                {country.flag}
              </span>
              <span className="font-semibold group-hover:text-brand">
                {country.linkLabel}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
