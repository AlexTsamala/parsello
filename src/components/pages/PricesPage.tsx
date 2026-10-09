import Link from "next/link";

import { RateTable } from "@/components/pricing/RateTable";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";

/**
 * Shows only the per-kg rates the business supplied (`business.pricing.rates`,
 * CLAUDE.md §1 rule 2). Every other destination is quoted on request. Do not
 * add example totals, ranges, "from" prices, or a calculator.
 */
export function PricesPage({ locale }: { locale: Locale }) {
  const { ui, business, countries } = getContent(locale);
  const copy = ui.pages.prices;

  return (
    <main id="main">
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-16">
          <Breadcrumbs
            locale={locale}
            items={[
              { href: localePath(locale, "/"), label: ui.common.home },
              { label: copy.breadcrumb },
            ]}
          />
          <h1 className="mt-6 max-w-3xl text-3xl font-bold md:text-5xl">
            {copy.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
            {copy.lead}
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          title={copy.ratesHeading}
          description={copy.ratesDescription}
        />
        <div className="mt-8 max-w-3xl">
          <RateTable locale={locale} />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              {copy.notListedHeading}
            </h2>
            <p className="mt-4 text-muted">{business.pricing.dependsOn}</p>

            <h2 className="mt-10 text-2xl font-bold md:text-3xl">
              {copy.whatToSendHeading}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {copy.whatToSendItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-brand"
                  >
                    <path
                      d="m5 13 4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-white p-7">
            <h2 className="text-lg font-semibold">{copy.quoteBoxHeading}</h2>
            <p className="mt-3 text-muted">{business.pricing.copy}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <PhoneButton size="lg" />
              {business.facebookUrl ? (
                <Button href={business.facebookUrl} size="lg" variant="secondary">
                  {ui.common.facebookCta}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title={copy.byDestinationHeading}
          description={copy.byDestinationDescription}
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <li key={country.slug}>
              <Link
                href={localePath(locale, `/countries/${country.slug}`)}
                className="group flex h-full items-center gap-4 rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand"
              >
                <span className="text-3xl" aria-hidden="true">
                  {country.flag}
                </span>
                <span className="font-semibold group-hover:text-brand">
                  {country.priceLinkLabel}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
