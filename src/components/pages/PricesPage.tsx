import Link from "next/link";

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
  const { ui, business, countries, getCountry } = getContent(locale);
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
        <div className="mt-8 max-w-2xl overflow-hidden rounded-2xl border border-line">
          <table className="w-full text-left">
            <caption className="sr-only">{copy.ratesHeading}</caption>
            <thead className="bg-surface text-sm text-muted">
              <tr>
                <th scope="col" className="px-5 py-3 font-medium">
                  {copy.countryColumn}
                </th>
                <th scope="col" className="px-5 py-3 text-right font-medium">
                  {ui.common.pricePerKg}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {business.pricing.rates.map((rate) => {
                const country = getCountry(rate.id);

                return (
                  <tr key={rate.id}>
                    <th scope="row" className="px-5 py-3.5 font-medium">
                      <span className="flex items-center gap-3">
                        <span className="text-2xl" aria-hidden="true">
                          {rate.flag}
                        </span>
                        {country ? (
                          <Link
                            href={localePath(locale, `/countries/${country.slug}`)}
                            className="underline decoration-line underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                          >
                            {rate.name}
                          </Link>
                        ) : (
                          rate.name
                        )}
                      </span>
                    </th>
                    <td className="whitespace-nowrap px-5 py-3.5 text-right font-semibold">
                      {rate.perKg} {business.pricing.currency}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
