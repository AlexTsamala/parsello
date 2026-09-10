import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

/**
 * `animal-products` is withheld here for the same reason as on country pages —
 * docs/OPEN-QUESTIONS.md #15. Remove the filter once the business answers.
 */
const WITHHELD_FACT_IDS = new Set(["animal-products"]);

export function FaqPage({ locale }: { locale: Locale }) {
  const { ui, business, faqs, euImportRules } = getContent(locale);
  const copy = ui.pages.faq;
  const rules = euImportRules.filter((fact) => !WITHHELD_FACT_IDS.has(fact.id));

  return (
    <main id="main">
      <JsonLd
        data={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: ui.common.home, path: localePath(locale, "/") },
            { name: copy.breadcrumb, path: localePath(locale, "/faq") },
          ]),
        ]}
      />
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
        <div className="max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold marker:hidden">
                <h2 className="text-base font-semibold">{item.question}</h2>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-transform group-open:rotate-180"
                >
                  <path
                    d="m6 9 6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="pb-5 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl font-bold md:text-3xl">{copy.rulesHeading}</h2>
        <p className="mt-3 max-w-2xl text-muted">{ui.countryFacts.intro}</p>

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {rules.map((fact) => (
            <li
              key={fact.id}
              className="rounded-xl border border-line bg-white p-6"
            >
              <h3 className="font-semibold">{fact.title}</h3>
              <p className="mt-2 text-sm text-muted">{fact.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-muted">
          {copy.seeAlso.prefix}{" "}
          <Link
            href={localePath(locale, "/what-can-i-send")}
            className="text-charcoal underline underline-offset-4 hover:text-brand"
          >
            {copy.seeAlso.whatCanISend}
          </Link>{" "}
          {copy.seeAlso.conjunction}{" "}
          <Link
            href={localePath(locale, "/services")}
            className="text-charcoal underline underline-offset-4 hover:text-brand"
          >
            {copy.seeAlso.services}
          </Link>
          {copy.seeAlso.suffix}
        </p>
      </Section>

      <section className="bg-charcoal text-white">
        <div className="container-page py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold md:text-4xl">{copy.ctaHeading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{copy.ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneButton size="lg" />
            {business.facebookUrl ? (
              <Button href={business.facebookUrl} size="lg" variant="onDark">
                {ui.common.facebookCta}
              </Button>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
