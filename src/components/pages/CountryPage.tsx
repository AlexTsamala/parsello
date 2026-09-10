import Link from "next/link";

import { CountryFacts } from "@/components/country/CountryFacts";
import {
  RichCountryCta,
  RichCountrySections,
} from "@/components/country/RichCountrySections";
import { FaqSection } from "@/components/home/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getContent } from "@/content";
import type { Country } from "@/content/countries";
import { localePath, type Locale } from "@/content/locales";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

/**
 * Withheld because the business's own list of what customers send includes
 * cheese, while the EU rule says dairy is prohibited — the two must not be
 * rendered on the same page until the business resolves the contradiction.
 * See docs/OPEN-QUESTIONS.md #15.
 */
const WITHHELD_FACT_IDS = new Set(["animal-products"]);

export function CountryPage({
  country,
  locale,
}: {
  country: Country;
  locale: Locale;
}) {
  const { ui, business, euImportRules, relatedCountries } = getContent(locale);

  const related = relatedCountries(country.slug);
  const facts = [...country.facts, ...euImportRules].filter(
    (fact) => !WITHHELD_FACT_IDS.has(fact.id),
  );
  const faqItems = country.content.faqs;

  return (
    <main id="main">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: ui.common.home, path: localePath(locale, "/") },
            {
              name: ui.pages.countries.breadcrumb,
              path: localePath(locale, "/countries"),
            },
            {
              name: country.name,
              path: localePath(locale, `/countries/${country.slug}`),
            },
          ]),

          faqSchema(faqItems),
        ]}
      />
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-16">
          <Breadcrumbs
            locale={locale}
            items={[
              { href: localePath(locale, "/"), label: ui.common.home },
              {
                href: localePath(locale, "/countries"),
                label: ui.pages.countries.breadcrumb,
              },
              { label: country.name },
            ]}
          />

          <h1 className="mt-6 max-w-3xl text-3xl font-bold md:text-5xl">
            {country.h1}
            <span aria-hidden="true" className="ms-3 whitespace-nowrap">
              🇬🇪 → {country.flag}
            </span>
          </h1>

          {country.content.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-2xl text-base text-muted md:text-lg"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={localePath(locale, "/contact")} size="lg">
              {ui.common.sendParcel}
            </Button>
            <PhoneButton size="lg" variant="secondary" />
          </div>
        </div>
      </section>

      <RichCountrySections country={country} locale={locale} />

      <Section>
        <CountryFacts
          facts={facts}
          heading={country.factsHeading}
          intro={ui.countryFacts.intro}
        />
      </Section>

      <FaqSection locale={locale} items={faqItems} />

      <Section tone="surface">
        <SectionHeading
          title={ui.countryPage.otherDestinations}
          description={business.coverage.priorityNote}
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={localePath(locale, `/countries/${item.slug}`)}
                className="group flex h-full items-center gap-4 rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand"
              >
                <span className="text-3xl" aria-hidden="true">
                  {item.flag}
                </span>
                <span className="font-semibold group-hover:text-brand">
                  {item.linkLabel}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <RichCountryCta country={country} locale={locale} />
    </main>
  );
}
