import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { PhoneLink } from "@/components/ui/Phone";
import { EnvelopeIcon, LocationPinIcon } from "@/components/ui/icons";
import { business } from "@/content/business";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";

/** Social links render only when the business has supplied them (CLAUDE.md §1). */
const socialCandidates: Array<{ label: string; url: string | null }> = [
  { label: "Facebook", url: business.facebookUrl },
  { label: "Instagram", url: business.instagramUrl },
];

const socials = socialCandidates.filter(
  (social): social is { label: string; url: string } => social.url !== null,
);

export function Footer({ locale }: { locale: Locale }) {
  const { ui, footerNav, countries, business: biz } = getContent(locale);

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-2">
          <Logo locale={locale} inverted />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            {ui.footer.tagline}
          </p>

          <PhoneLink className="mt-5 text-lg font-semibold" />

          {business.email ? (
            <a
              href={`mailto:${business.email}`}
              className="mt-4 flex w-fit items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-brand"
            >
              <EnvelopeIcon className="shrink-0 text-brand" />
              <span>{business.email}</span>
            </a>
          ) : null}

          <address className="mt-4 flex items-start gap-2.5 not-italic text-sm text-white/70">
            <LocationPinIcon className="mt-0.5 shrink-0 text-brand" />
            <span>
              {biz.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </address>

          {socials.length > 0 ? (
            <ul className="mt-5 flex gap-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-brand"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <nav aria-label={ui.aria.footerNav}>
          <h2 className="text-xs font-semibold tracking-[0.14em] text-white/50">
            {ui.footer.pagesHeading}
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={localePath(locale, link.href)}
                  className="text-sm text-white/80 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={ui.aria.footerDestinations}>
          <h2 className="text-xs font-semibold tracking-[0.14em] text-white/50">
            {ui.footer.destinationsHeading}
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {countries.map((country) => (
              <li key={country.slug}>
                <Link
                  href={localePath(locale, `/countries/${country.slug}`)}
                  className="text-sm text-white/80 transition-colors hover:text-brand"
                >
                  {country.footerLinkLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {business.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
