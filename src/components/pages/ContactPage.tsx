import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneButton, PhoneLink } from "@/components/ui/Phone";
import { EnvelopeIcon, LocationPinIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";

/**
 * No submission form: there is no backend to deliver one. A form that silently
 * discards messages would be worse than none, so the page routes to the
 * channels that actually work — phone, email and Facebook.
 */
export function ContactPage({ locale }: { locale: Locale }) {
  const { ui, business } = getContent(locale);
  const copy = ui.pages.contact;

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

          <div className="mt-8 flex flex-wrap gap-3">
            <PhoneButton size="lg" />
            {business.facebookUrl ? (
              <Button href={business.facebookUrl} size="lg" variant="secondary">
                {ui.common.facebookCta}
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              {copy.orderDetailsHeading}
            </h2>
            <ul className="mt-6 space-y-4">
              {copy.orderDetails.map((item, index) => (
                <li key={item.label} className="flex gap-4">
                  <span
                    className="inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-brand-soft text-sm font-bold text-brand"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-medium">{item.label}</span>
                    <span className="block text-sm text-muted">
                      {item.hint}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              {copy.channelsHeading}
            </h2>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm font-semibold tracking-wide text-muted">
                  {copy.labels.phone}
                </dt>
                <dd className="mt-1">
                  <PhoneLink className="text-xl font-semibold" />
                </dd>
              </div>

              {business.email ? (
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-muted">
                    {copy.labels.email}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${business.email}`}
                      className="flex w-fit items-center gap-2.5 font-medium transition-colors hover:text-brand"
                    >
                      <EnvelopeIcon className="shrink-0 text-brand" />
                      <span>{business.email}</span>
                    </a>
                  </dd>
                </div>
              ) : null}

              <div>
                <dt className="text-sm font-semibold tracking-wide text-muted">
                  {copy.labels.address}
                </dt>
                <dd className="mt-1">
                  <address className="flex items-start gap-2.5 not-italic font-medium">
                    <LocationPinIcon className="mt-0.5 shrink-0 text-brand" />
                    <span>
                      {business.address.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </address>
                </dd>
              </div>

              {business.workingHours ? (
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-muted">
                    {copy.labels.workingHours}
                  </dt>
                  <dd className="mt-1 font-medium">
                    {business.workingHours.display}
                  </dd>
                </div>
              ) : null}

              {business.facebookUrl ? (
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-muted">
                    Facebook
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={business.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-4 transition-colors hover:text-brand"
                    >
                      {business.name}
                    </a>
                  </dd>
                </div>
              ) : null}

              {business.instagramUrl ? (
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-muted">
                    Instagram
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={business.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-4 transition-colors hover:text-brand"
                    >
                      {business.name}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>

            <p className="mt-8 rounded-xl border border-line bg-surface p-5 text-sm text-muted">
              {business.pricing.copy}
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
