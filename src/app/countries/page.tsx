import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/content/business";
import { countries } from "@/content/countries";
import { buildMetadata } from "@/lib/seo";
import { publicImageExists } from "@/lib/assets";

const HERO_IMAGE = "parcels-tbilisi.jpg";

export const metadata = buildMetadata({
  title: "მიმართულებები — სად ვაგზავნით ამანათებს",
  description:
    "Parcello ამანათებს ევროპის მასშტაბით აგზავნის. გაეცანით ძირითად მიმართულებებს და თითოეული ქვეყნის დეტალურ ინფორმაციას.",
  path: "/countries",
});

export default function CountriesPage() {
  const hasPhoto = publicImageExists(HERO_IMAGE);

  return (
    <main id="main">
      <section className="border-b border-line bg-surface">
        <div className="container-page grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
          <div>
            <Breadcrumbs
              items={[
                { href: "/", label: "მთავარი" },
                { label: "მიმართულებები" },
              ]}
            />

            <h1 className="mt-6 text-3xl font-bold md:text-5xl">
              სად ვაგზავნით ამანათებს?
            </h1>

            <p className="mt-5 max-w-lg text-base text-muted md:text-lg">
              {business.coverage.scope} {business.coverage.priorityNote}
            </p>

            <div className="mt-8">
              <Button href="/contact" size="lg">
                ამანათის გაგზავნა
              </Button>
            </div>
          </div>

          {hasPhoto ? (
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-line md:aspect-square">
              <Image
                src={`/images/${HERO_IMAGE}`}
                alt="Parcello-ს ამანათები თბილისში, მშვიდობის ხიდის ფონზე"
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
          title="ძირითადი მიმართულებები"
          description="აირჩიეთ ქვეყანა და გაეცანით საბაჟო წესებსა და გაგზავნის დეტალებს."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <li key={country.slug}>
              <Link
                href={`/countries/${country.slug}`}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-brand"
              >
                <span className="text-3xl" aria-hidden="true">
                  {country.flag}
                </span>
                <span className="mt-3 font-semibold group-hover:text-brand">
                  {country.nameKaIn} ამანათის გაგზავნა
                </span>
                <span className="mt-2 text-sm text-muted">
                  დღგ {country.vatRate} · {country.currency}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
