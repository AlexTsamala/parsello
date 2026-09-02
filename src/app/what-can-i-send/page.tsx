import Image from "next/image";

import { CategoryRow } from "@/components/sendable/CategoryRow";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section } from "@/components/ui/Section";
import { sendableCategories } from "@/content/allowed-items";
import { business } from "@/content/business";
import { publicImageExists } from "@/lib/assets";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const HERO_IMAGE = "what-you-can-send.jpg";
const PACKING_IMAGE = "parcel-packed.jpg";

export const metadata = buildMetadata({
  title: "რისი გაგზავნა შეიძლება ევროპაში",
  description:
    "რა ნივთების გაგზავნა შეიძლება საქართველოდან ევროპაში — ჩურჩხელა, ყველი, ტყემალი, ღვინო, ტანსაცმელი და პირადი ნივთები. გაიგეთ შეზღუდვები და შეფუთვის წესები.",
  path: "/what-can-i-send",
});

export default function WhatCanISendPage() {
  const heroImage = publicImageExists(HERO_IMAGE) ? HERO_IMAGE : null;
  const packingImage = publicImageExists(PACKING_IMAGE) ? PACKING_IMAGE : null;

  return (
    <main id="main">
      <JsonLd
        data={breadcrumbSchema([
          { name: "მთავარი", path: "/" },
          { name: "რისი გაგზავნა შეიძლება", path: "/what-can-i-send" },
        ])}
      />

      <section className="border-b border-line bg-surface">
        <div className="container-page grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
          <div className="animate-fade-up">
            <Breadcrumbs
              items={[
                { href: "/", label: "მთავარი" },
                { label: "რისი გაგზავნა შეიძლება" },
              ]}
            />

            <h1 className="mt-6 text-3xl font-bold md:text-5xl">
              რისი გაგზავნა შეიძლება ევროპაში?
            </h1>

            <p className="mt-5 max-w-lg text-base text-muted md:text-lg">
              ქართული პროდუქტი, ტანსაცმელი, საჩუქრები და პირადი ნივთები —
              გაუგზავნეთ ოჯახს, მეგობრებსა და ახლობლებს ევროპაში.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                ამანათის გაგზავნა
              </Button>
              <PhoneButton size="lg" variant="secondary" />
            </div>
          </div>

          {heroImage ? (
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-line md:aspect-square">
              <Image
                src={`/images/${heroImage}`}
                alt="Parcello-ს ამანათი, მზად ევროპაში გასაგზავნად"
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
              რისი გაგზავნა არ შეიძლება?
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
            <p className="mt-5 text-muted">
              თუ ეჭვი გაქვთ კონკრეტულ ნივთზე, უბრალოდ მოგვწერეთ — გადავამოწმებთ
              და გიპასუხებთ.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-2xl font-bold md:text-3xl">
              როგორ შევფუთოთ ამანათი?
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

            {packingImage ? (
              <div className="relative mt-6 aspect-3/4 max-w-56 overflow-hidden rounded-xl border border-line">
                <Image
                  src={`/images/${packingImage}`}
                  alt="შეფუთული ამანათი, მზად გასაგზავნად"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        </div>
      </Section>

      <section className="bg-charcoal text-white">
        <div className="container-page py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold md:text-4xl">
            გსურთ ამანათის გაგზავნა?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            მოგვწერეთ ამანათის შიგთავსი და დანიშნულების ქვეყანა — ზუსტ ფასს
            დაგიანგარიშებთ.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneButton size="lg" />
            {business.facebookUrl ? (
              <Button
                href={business.facebookUrl}
                size="lg"
                variant="onDark"
              >
                Facebook-ზე მოწერა
              </Button>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
