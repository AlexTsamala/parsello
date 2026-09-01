import Image from "next/image";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { allowedItems } from "@/content/allowed-items";
import { business } from "@/content/business";
import { publicImageExists } from "@/lib/assets";
import { buildMetadata } from "@/lib/seo";

const HERO_IMAGE = "what-you-can-send.jpg";

export const metadata = buildMetadata({
  title: "რისი გაგზავნა შეიძლება ევროპაში",
  description:
    "რა ნივთების გაგზავნა შეიძლება საქართველოდან ევროპაში ამანათით — ტანსაცმელი, საჩუქრები, პირადი ნივთები და სხვა. გაიგეთ შეზღუდვები და შეფუთვის წესები.",
  path: "/what-can-i-send",
});

/**
 * The business's own list of what customers send, published as the shareable
 * link they hand to customers who ask (plan §42).
 *
 * The EU animal-products rule is deliberately NOT on this page — see
 * docs/OPEN-QUESTIONS.md #15. Do not add it, and do not edit the list to agree
 * with it, until the business has answered.
 */
export default function WhatCanISendPage() {
  const hasPhoto = publicImageExists(HERO_IMAGE);

  return (
    <main id="main">
      <section className="border-b border-line bg-surface">
        <div className="container-page grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
          <div>
            <Breadcrumbs
              items={[{ href: "/", label: "მთავარი" }, { label: "რისი გაგზავნა შეიძლება" }]}
            />

            <h1 className="mt-6 text-3xl font-bold md:text-5xl">
              რისი გაგზავნა შეიძლება ევროპაში?
            </h1>

            <p className="mt-5 max-w-lg text-base text-muted md:text-lg">
              ამანათით შეგიძლიათ გაუგზავნოთ ოჯახის წევრებს, მეგობრებსა და ახლობლებს
              ქართული პროდუქტები, ტანსაცმელი, საჩუქრები და პირადი ნივთები.
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
                alt="ამანათში ჩასალაგებელი ნივთები — ტანსაცმელი, ფეხსაცმელი, წიგნები და აქსესუარები"
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
          title="რას აგზავნიან ჩვენი მომხმარებლები"
          description="ყველაზე ხშირად გაგზავნილი ნივთების კატეგორიები."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allowedItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-4 rounded-xl border border-line bg-white p-5"
            >
              <span className="text-2xl" aria-hidden="true">
                {item.emoji}
              </span>
              <span className="font-medium">{item.label}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-muted">
          ზოგიერთ ნივთზე მოქმედებს შეზღუდვები, ამიტომ ამანათის გაგზავნამდე მოგვწერეთ მისი
          შიგთავსი და დაგეხმარებით გადაამოწმოთ, შესაძლებელია თუ არა მისი გაგზავნა.
        </p>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">რისი გაგზავნა არ შეიძლება?</h2>
            <p className="mt-4 text-muted">
              არ ვაგზავნით {business.restrictions.prohibited.join(", ")}-ს.
            </p>
            <p className="mt-3 text-muted">{business.restrictions.conditional}</p>
            <p className="mt-3 text-sm text-muted">
              {business.restrictions.packingLiability}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold md:text-3xl">როგორ შევფუთოთ ამანათი?</h2>
            <ol className="mt-4 space-y-3">
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
          <h2 className="text-2xl font-bold md:text-4xl">გსურთ ამანათის გაგზავნა?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            მოგვწერეთ ამანათის შიგთავსი და დანიშნულების ქვეყანა — ზუსტ ფასს დაგიანგარიშებთ.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={`tel:${business.phone.tel}`} size="lg">
              {business.phone.display}
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
    </main>
  );
}
