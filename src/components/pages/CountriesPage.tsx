import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";
import { publicImageExists } from "@/lib/assets";

const HERO_IMAGE = "parcels-tbilisi.jpg";

export function CountriesPage({ locale }: { locale: Locale }) {
  const { ui, business, countries } = getContent(locale);
  const copy = ui.pages.countries;
  const hasPhoto = publicImageExists(HERO_IMAGE);

  return (
    <main id="main">
      <section className="border-b border-line bg-surface">
        <div className="container-page grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
          <div>
            <Breadcrumbs
              locale={locale}
              items={[
                { href: localePath(locale, "/"), label: ui.common.home },
                { label: copy.breadcrumb },
              ]}
            />

            <h1 className="mt-6 text-3xl font-bold md:text-5xl">{copy.h1}</h1>

            <p className="mt-5 max-w-lg text-base text-muted md:text-lg">
              {business.coverage.scope} {business.coverage.priorityNote}
            </p>

            <div className="mt-8">
              <Button href={localePath(locale, "/contact")} size="lg">
                {ui.common.sendParcel}
              </Button>
            </div>
          </div>

          {hasPhoto ? (
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-line md:aspect-square">
              <Image
                src={`/images/${HERO_IMAGE}`}
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
        <SectionHeading
          title={copy.listHeading}
          description={copy.listDescription}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <li key={country.slug}>
              <Link
                href={localePath(locale, `/countries/${country.slug}`)}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-brand"
              >
                <span className="text-3xl" aria-hidden="true">
                  {country.flag}
                </span>
                <span className="mt-3 font-semibold group-hover:text-brand">
                  {country.linkLabel}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
