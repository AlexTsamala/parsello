import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/content/business";
import type { Country } from "@/content/countries";

type NarrativeBlock = NonNullable<Country["content"]>["narrative"];

/**
 * A prose block. Any external fact stated here carries its source, so a reader
 * can tell a researched claim from a Parcello one.
 */
function Narrative({
  blocks,
  tone,
}: {
  blocks: NonNullable<NarrativeBlock>;
  tone: "white" | "surface";
}) {
  return (
    <>
      {blocks.map((block) => (
        <Section key={block.heading} tone={tone}>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold md:text-3xl">{block.heading}</h2>
            {block.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-muted">
                {paragraph}
              </p>
            ))}

            {block.sources?.length ? (
              <p className="mt-6 text-xs text-muted">
                წყაროები:{" "}
                {block.sources.map((source, index) => (
                  <span key={source.url}>
                    {index > 0 ? ", " : ""}
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 transition-colors hover:text-brand"
                    >
                      {source.label}
                    </a>
                  </span>
                ))}
              </p>
            ) : null}
          </div>
        </Section>
      ))}
    </>
  );
}

/**
 * Renders a country page from business-written copy (`country.content`).
 * Parcello claims render in site voice; researched rules render separately
 * through <CountryFacts />, and any external fact stated inside a narrative
 * block carries its source (CLAUDE.md §1 rule 10).
 */
export function RichCountrySections({ country }: { country: Country }) {
  const content = country.content;
  if (!content) return null;

  const afterIntro = content.narrative?.filter((b) => b.placement === "afterIntro") ?? [];
  const beforePricing =
    content.narrative?.filter((b) => b.placement === "beforePricing") ?? [];

  return (
    <>
      {afterIntro.length ? <Narrative blocks={afterIntro} tone="surface" /> : null}

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">{content.why.heading}</h2>
          {content.why.body.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-muted">
              {paragraph}
            </p>
          ))}
          <p className="mt-6 border-s-4 border-brand ps-5 text-lg font-semibold">
            {content.why.highlight}
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title={content.steps.heading} />

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.steps.items.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-line bg-white p-6">
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
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{content.sendable.heading}</h2>
            <p className="mt-4 text-muted">{content.sendable.intro}</p>

            <ul className="mt-6 space-y-2.5">
              {content.sendable.items.map((item) => (
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

            <p className="mt-6 text-sm text-muted">{content.sendable.note}</p>

            {content.sendable.moreHref ? (
              <Link
                href={content.sendable.moreHref}
                className="mt-4 inline-block font-semibold text-charcoal underline underline-offset-4 transition-colors hover:text-brand"
              >
                {content.sendable.moreLabel}
              </Link>
            ) : null}
          </div>

          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{content.cities.heading}</h2>
            <p className="mt-4 text-muted">{content.cities.intro}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {content.cities.list.map((city) => (
                <li
                  key={city}
                  className="rounded-lg border border-line bg-surface px-3.5 py-2 text-sm font-medium"
                >
                  {city}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-muted">{content.cities.note}</p>
          </div>
        </div>
      </Section>

      {beforePricing.length ? <Narrative blocks={beforePricing} tone="surface" /> : null}

      <Section tone={beforePricing.length ? "white" : "surface"}>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <SectionHeading title={content.pricing.heading} description={content.pricing.body} />

          <div className="rounded-2xl border border-line bg-white p-7">
            <p className="font-semibold">{content.pricing.emphasis}</p>

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
    </>
  );
}

export function RichCountryCta({ country }: { country: Country }) {
  const content = country.content;
  if (!content) return null;

  return (
    <section className="bg-charcoal text-white">
      <div className="container-page py-16 text-center md:py-20">
        <h2 className="mx-auto max-w-3xl text-2xl font-bold md:text-4xl">
          {content.cta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">{content.cta.body}</p>
        <p className="mx-auto mt-2 max-w-xl font-semibold">{content.cta.emphasis}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact" size="lg">
            ამანათის შეკვეთა
          </Button>
          {business.facebookUrl ? (
            <Button
              href={business.facebookUrl}
              size="lg"
              variant="secondary"
              className="border-white/25 bg-transparent text-white hover:border-white hover:bg-white/10"
            >
              Facebook-ზე მოწერა
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
