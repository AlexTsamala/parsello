import Link from "next/link";
import { notFound } from "next/navigation";

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
import { business } from "@/content/business";
import { countries, getCountry, relatedCountries } from "@/content/countries";
import { featuredFaqs } from "@/content/faq";
import { howItWorksSteps } from "@/content/how-it-works";
import { euImportRules } from "@/content/shipping-rules";
import { ui } from "@/content/ui";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const WITHHELD_FACT_IDS = new Set(["animal-products"]);

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) return {};

  return buildMetadata({
    title: country.seoTitle,
    description: country.seoDescription,
    path: `/countries/${country.slug}`,
  });
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();

  const related = relatedCountries(country.slug);
  const facts = [...country.facts, ...euImportRules].filter(
    (fact) => !WITHHELD_FACT_IDS.has(fact.id),
  );

  const content = country.content;
  const introParagraphs = content ? content.intro : [country.intro];
  const faqItems = content?.faqs.length ? content.faqs : featuredFaqs;

  return (
    <main id="main">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "მთავარი", path: "/" },
            { name: "მიმართულებები", path: "/countries" },
            { name: country.name, path: `/countries/${country.slug}` },
          ]),

          faqSchema(faqItems),
        ]}
      />
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-16">
          <Breadcrumbs
            items={[
              { href: "/", label: "მთავარი" },
              { href: "/countries", label: "მიმართულებები" },
              { label: country.name },
            ]}
          />

          <h1 className="mt-6 max-w-3xl text-3xl font-bold md:text-5xl">
            {country.h1}
            <span aria-hidden="true" className="ms-3 whitespace-nowrap">
              🇬🇪 → {country.flag}
            </span>
          </h1>

          {introParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-2xl text-base text-muted md:text-lg"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              ამანათის გაგზავნა
            </Button>
            <PhoneButton size="lg" variant="secondary" />
          </div>
        </div>
      </section>

      {content ? (
        <RichCountrySections country={country} />
      ) : (
        <>
          <Section>
            <SectionHeading
              title={`როგორ ვაგზავნით ამანათს ${country.nameIn}`}
              description="პროცესი ყველა მიმართულებისთვის ერთნაირად მარტივია."
            />

            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorksSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-line bg-white p-6"
                >
                  <span
                    className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-soft text-base font-bold text-brand"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-sm text-muted">
              იხილეთ დეტალურად:{" "}
              <Link
                href="/services"
                className="text-charcoal underline underline-offset-4 hover:text-brand"
              >
                როგორ მუშაობს Parcello
              </Link>
            </p>
          </Section>

          <Section tone="surface">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <SectionHeading
                title={`${country.nameIn} ამანათის გაგზავნის ფასი`}
                description={business.pricing.dependsOn}
              />

              <div className="rounded-2xl border border-line bg-white p-7">
                <p>{business.pricing.copy}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PhoneButton size="lg" />
                  {business.facebookUrl ? (
                    <Button
                      href={business.facebookUrl}
                      size="lg"
                      variant="secondary"
                    >
                      Facebook-ზე მოწერა
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </Section>
        </>
      )}

      <Section>
        <CountryFacts
          facts={facts}
          heading={country.factsHeading}
          intro={ui.countryFacts.intro}
        />
      </Section>

      <FaqSection items={faqItems} />

      <Section tone="surface">
        <SectionHeading
          title="სხვა მიმართულებები"
          description={business.coverage.priorityNote}
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/countries/${item.slug}`}
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

      {content ? (
        <RichCountryCta country={country} />
      ) : (
        <section className="bg-charcoal text-white">
          <div className="container-page py-16 text-center md:py-20">
            <h2 className="text-2xl font-bold md:text-4xl">
              გსურთ ამანათის გაგზავნა {country.nameIn}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              დაიწყეთ შეკვეთა Parcello-სთან — დაგვირეკეთ ან მოგვწერეთ
              Facebook-ზე.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" size="lg">
                ამანათის გაგზავნა
              </Button>
              <PhoneButton size="lg" variant="onDark" />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
