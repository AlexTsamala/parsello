import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/content/business";
import { countries } from "@/content/countries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ამანათის გაგზავნის ფასი",
  description:
    "რამდენი ღირს ამანათის გაგზავნა საქართველოდან ევროპაში? ფასი დამოკიდებულია ქვეყანასა და წონაზე — მოგვწერეთ და ზუსტ ფასს დაგიანგარიშებთ.",
  path: "/prices",
});

/**
 * NO PRICES — ever, anywhere on this page (CLAUDE.md §1 rule 2). Pricing is
 * quoted on request. Do not add example figures, ranges, or a calculator.
 */
export default function PricesPage() {
  return (
    <main id="main">
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-16">
          <Breadcrumbs items={[{ href: "/", label: "მთავარი" }, { label: "ფასები" }]} />
          <h1 className="mt-6 max-w-3xl text-3xl font-bold md:text-5xl">
            ამანათის გაგზავნის ფასი
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
            {business.pricing.dependsOn}
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">როგორ ითვლება ფასი?</h2>
            <p className="mt-4 text-muted">
              ფასზე ორი ძირითადი რამ მოქმედებს: რომელ ქვეყანაში იგზავნება ამანათი და რამდენია
              მისი წონა. ვინაიდან ტარიფები იცვლება, ფასს თითოეული შეკვეთისთვის ინდივიდუალურად
              ვთვლით — ასე თავიდან ავიცილებთ მოძველებულ ინფორმაციას.
            </p>

            <h2 className="mt-10 text-2xl font-bold md:text-3xl">რა მოგვწეროთ?</h2>
            <ul className="mt-4 space-y-2.5">
              {[
                "დანიშნულების ქვეყანა და ქალაქი",
                "ამანათის დაახლოებითი წონა",
                "ამანათის შიგთავსი",
              ].map((item) => (
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
          </div>

          <div className="rounded-2xl border border-line bg-surface p-7">
            <h2 className="text-lg font-semibold">ფასის გასაგებად</h2>
            <p className="mt-3 text-muted">{business.pricing.copy}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <PhoneButton size="lg" />
              {business.facebookUrl ? (
                <Button href={business.facebookUrl} size="lg" variant="secondary">
                  Facebook-ზე მოწერა
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="ფასი მიმართულების მიხედვით"
          description="აირჩიეთ ქვეყანა და მოგვწერეთ — ზუსტ ფასს დაგიანგარიშებთ."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <li key={country.slug}>
              <Link
                href={`/countries/${country.slug}`}
                className="group flex h-full items-center gap-4 rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand"
              >
                <span className="text-3xl" aria-hidden="true">
                  {country.flag}
                </span>
                <span className="font-semibold group-hover:text-brand">
                  {country.priceLinkLabel}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
