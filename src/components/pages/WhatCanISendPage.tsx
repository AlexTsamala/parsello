import Image from "next/image";

import { CategoryRow } from "@/components/sendable/CategoryRow";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";
import { publicImageExists } from "@/lib/assets";
import { breadcrumbSchema } from "@/lib/schema";

/** A real packed box is the most persuasive image on this page, so it leads. */
const HERO_IMAGE = "parcel-packed.jpg";

export function WhatCanISendPage({ locale }: { locale: Locale }) {
  const { ui, business, sendableCategories } = getContent(locale);
  const copy = ui.pages.whatCanISend;
  const heroImage = publicImageExists(HERO_IMAGE) ? HERO_IMAGE : null;

  return (
    <main id="main">
      <JsonLd
        data={breadcrumbSchema([
          { name: ui.common.home, path: localePath(locale, "/") },
          {
            name: copy.breadcrumb,
            path: localePath(locale, "/what-can-i-send"),
          },
        ])}
      />

      <section className="border-b border-line bg-surface">
        <div className="container-page grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
          <div className="animate-fade-up">
            <Breadcrumbs
              locale={locale}
              items={[
                { href: localePath(locale, "/"), label: ui.common.home },
                { label: copy.breadcrumb },
              ]}
            />

            <h1 className="mt-6 text-3xl font-bold md:text-5xl">{copy.h1}</h1>

            <p className="mt-5 max-w-lg text-base text-muted md:text-lg">
              {copy.lead}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={localePath(locale, "/contact")} size="lg">
                {ui.common.sendParcel}
              </Button>
              <PhoneButton size="lg" variant="secondary" />
            </div>
          </div>

          {heroImage ? (
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-line md:aspect-square">
              <Image
                src={`/images/${heroImage}`}
                alt={copy.heroAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      <Section>
        <div className="space-y-16 md:space-y-24">
          {sendableCategories.map((category, index) => (
            <CategoryRow
              key={category.slug}
              category={category}
              flip={index % 2 === 1}
            />
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="reveal">
            <h2 className="text-2xl font-bold md:text-3xl">
              {copy.prohibitedHeading}
            </h2>
            <p className="mt-4 text-muted">
              {business.restrictions.prohibitedSentence}
            </p>
            <p className="mt-3 text-muted">
              {business.restrictions.conditional}
            </p>
            <p className="mt-3 text-sm text-muted">
              {business.restrictions.packingLiability}
            </p>
            <p className="mt-5 text-muted">{copy.prohibitedNote}</p>
          </div>

          <div className="reveal">
            <h2 className="text-2xl font-bold md:text-3xl">
              {copy.packingHeading}
            </h2>
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
        </div>
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
