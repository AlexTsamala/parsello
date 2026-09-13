import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";
import type { Service } from "@/content/services";
import { publicImageExists } from "@/lib/assets";
import { breadcrumbSchema } from "@/lib/schema";

/**
 * One service, at its own URL.
 *
 * Split out from the `/services` hub on 2026-09-13: a fragment like
 * `/services#commercial-freight` is not a separate URL to a search engine, so
 * four services shared one title, one description and one row in Search
 * Console. The hub now links here rather than scrolling, and carries only the
 * summary — the steps and prose live on this page alone, so the two do not
 * compete as duplicate content.
 */
export function ServicePage({
  service,
  locale,
}: {
  service: Service;
  locale: Locale;
}) {
  const { ui, business, services } = getContent(locale);
  const copy = ui.pages.services;
  const hasPhoto = publicImageExists(service.image);

  const others = services.filter((other) => other.slug !== service.slug);

  return (
    <main id="main">
      <JsonLd
        data={breadcrumbSchema([
          { name: ui.common.home, path: localePath(locale, "/") },
          { name: copy.breadcrumb, path: localePath(locale, "/services") },
          {
            name: service.title,
            path: localePath(locale, `/services/${service.slug}`),
          },
        ])}
      />

      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-16">
          <Breadcrumbs
            locale={locale}
            items={[
              { href: localePath(locale, "/"), label: ui.common.home },
              {
                href: localePath(locale, "/services"),
                label: copy.breadcrumb,
              },
              { label: service.title },
            ]}
          />

          <div className="mt-6 grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="text-sm font-semibold tracking-wide text-brand">
                {service.direction}
              </span>

              <h1 className="mt-2 text-3xl font-bold md:text-5xl">
                {service.title}
              </h1>

              <p className="mt-5 text-base text-muted md:text-lg">
                {service.summary}
              </p>

              {service.deliveryTimeGenitive ? (
                <p className="mt-4 text-muted">
                  {copy.deliveryBefore}{" "}
                  <strong className="font-semibold text-charcoal">
                    {service.deliveryTimeGenitive}
                  </strong>{" "}
                  {copy.deliveryAfter}
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={localePath(locale, "/contact")} size="lg">
                  {ui.common.sendParcel}
                </Button>
                <PhoneButton size="lg" variant="secondary" />
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-2xl bg-brand-soft">
              {hasPhoto ? (
                <Image
                  src={`/images/${service.image}`}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex size-full items-center justify-center"
                >
                  <Image
                    src="/images/logo-mark.svg"
                    alt=""
                    width={72}
                    height={72}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {service.body?.length ? (
        <Section>
          <div className="reveal max-w-2xl">
            {service.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-muted first:mt-0">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone={service.body?.length ? "surface" : "white"}>
        <div className="reveal">
          <h2 className="text-2xl font-bold md:text-4xl">
            {copy.stepsHeading}
          </h2>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((step, index) => (
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
        </div>
      </Section>

      {/* Hub-and-spoke internal linking (CLAUDE.md §6). */}
      <Section tone={service.body?.length ? "white" : "surface"}>
        <div className="reveal">
          <h2 className="text-2xl font-bold md:text-3xl">
            {copy.otherServices}
          </h2>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={localePath(locale, `/services/${other.slug}`)}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand"
                >
                  <span className="text-xs font-semibold tracking-wide text-brand">
                    {other.direction}
                  </span>
                  <span className="mt-2 text-lg font-bold group-hover:text-brand">
                    {other.title}
                  </span>
                  <p className="mt-3 text-sm text-muted">{other.summary}</p>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8">
            <Link
              href={localePath(locale, "/services")}
              className="text-sm font-semibold text-brand hover:underline"
            >
              {copy.backToServices}
            </Link>
          </p>
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
