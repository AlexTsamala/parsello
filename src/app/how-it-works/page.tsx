import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/content/business";
import { countries } from "@/content/countries";
import { howItWorksSteps } from "@/content/how-it-works";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "როგორ მუშაობს Parcello",
  description:
    "როგორ გავაგზავნოთ ამანათი საქართველოდან ევროპაში — ოთხი ნაბიჯი შეკვეთიდან გამგზავნამდე, შეფუთვის წესები და რა უნდა მიუთითოთ ყუთზე.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <main id="main">
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-16">
          <Breadcrumbs
            items={[{ href: "/", label: "მთავარი" }, { label: "როგორ მუშაობს" }]}
          />
          <h1 className="mt-6 max-w-3xl text-3xl font-bold md:text-5xl">
            როგორ მუშაობს Parcello?
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
            ამანათის გაგზავნა საქართველოდან ევროპაში რამდენიმე მარტივი ნაბიჯისგან შედგება.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              ამანათის გაგზავნა
            </Button>
            <Button href={`tel:${business.phone.tel}`} size="lg" variant="secondary">
              {business.phone.display}
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading title="გაგზავნის ნაბიჯები" />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-line bg-white p-6">
              <span
                className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-soft text-base font-bold text-brand"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h2 className="mt-4 text-lg font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">როგორ შევფუთოთ ამანათი?</h2>
            <ol className="mt-6 space-y-3">
              {business.packaging.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span
                    className="inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-brand-soft text-sm font-bold text-brand"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span className="text-muted">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold md:text-3xl">რაზე უნდა მიაქციოთ ყურადღება</h2>
            <p className="mt-6 text-muted">
              {business.restrictions.prohibitedSentence}
            </p>
            <p className="mt-3 text-muted">{business.restrictions.conditional}</p>
            <p className="mt-3 text-sm text-muted">{business.restrictions.packingLiability}</p>
            <Link
              href="/what-can-i-send"
              className="mt-5 inline-block font-semibold text-charcoal underline underline-offset-4 transition-colors hover:text-brand"
            >
              იხილეთ დასაშვები ნივთების სია
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="სად ვაგზავნით"
          description={`${business.coverage.scope} ${business.coverage.priorityNote}`}
        />
        <ul className="mt-8 flex flex-wrap gap-3">
          {countries.map((country) => (
            <li key={country.slug}>
              <Link
                href={`/countries/${country.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
              >
                <span aria-hidden="true">{country.flag}</span>
                {country.nameKaIn} გაგზავნა
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
