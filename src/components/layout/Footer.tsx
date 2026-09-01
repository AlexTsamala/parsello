import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { business } from "@/content/business";
import { footerNav } from "@/content/navigation";
import { countries } from "@/content/countries";

/** Social links render only when the business has supplied them (CLAUDE.md §1). */
const socialCandidates: Array<{ label: string; url: string | null }> = [
  { label: "Facebook", url: business.facebookUrl },
  { label: "Instagram", url: business.instagramUrl },
];

const socials = socialCandidates.filter(
  (social): social is { label: string; url: string } => social.url !== null,
);

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-2">
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            ამანათების გაგზავნა საქართველოდან ევროპის მიმართულებით.
          </p>

          <a
            href={`tel:${business.phone.tel}`}
            className="mt-5 inline-block text-lg font-semibold transition-colors hover:text-brand"
          >
            {business.phone.display}
          </a>

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

        <nav aria-label="ფუტერის ნავიგაცია">
          <h2 className="text-xs font-semibold tracking-[0.14em] text-white/50">გვერდები</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="მიმართულებები">
          <h2 className="text-xs font-semibold tracking-[0.14em] text-white/50">მიმართულებები</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {countries.map((country) => (
              <li key={country.slug}>
                <Link
                  href={`/countries/${country.slug}`}
                  className="text-sm text-white/80 transition-colors hover:text-brand"
                >
                  {country.nameKaIn} გაგზავნა
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
