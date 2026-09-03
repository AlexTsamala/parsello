import Image from "next/image";

import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section } from "@/components/ui/Section";
import { business } from "@/content/business";
import { services } from "@/content/services";
import { publicImageExists } from "@/lib/assets";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "სერვისები",
  description:
    "Parcello-ს სერვისები — ამანათის გაგზავნა საქართველოდან ევროპაში, ამანათის გამოგზავნა საბერძნეთიდან და პოლონეთიდან საქართველოში, და ონლაინ შოპინგი ევროპიდან.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbSchema([
          { name: "მთავარი", path: "/" },
          { name: "სერვისები", path: "/services" },
        ])}
      />

      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-16">
          <Breadcrumbs items={[{ href: "/", label: "მთავარი" }, { label: "სერვისები" }]} />

          <h1 className="mt-6 max-w-3xl text-3xl font-bold md:text-5xl">
            Parcello-ს სერვისები
          </h1>

          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
            ვაგზავნით ამანათებს საქართველოდან ევროპაში, ვიღებთ ამანათებს საბერძნეთიდან და
            პოლონეთიდან, და გეხმარებით ევროპულ ონლაინ მაღაზიებში შეძენილი ნივთების მიღებაში.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              ამანათის გაგზავნა
            </Button>
            <PhoneButton size="lg" variant="secondary" />
          </div>
        </div>
      </section>

      {/* Overview cards — a quick scan of all three before the detail below. */}
      <Section>
        <ul className="grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const hasPhoto = publicImageExists(service.image);

            return (
              <li key={service.slug} className="reveal">
                <a
                  href={`#${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-brand"
                >
                  {/* Square: the service photos are 1:1, so a 16/10 frame cut
                      roughly a third off the top and bottom. Matching the
                      frame to the source shows each photo whole. */}
                  <div className="relative aspect-square overflow-hidden bg-brand-soft">
                    {hasPhoto ? (
                      <Image
                        src={`/images/${service.image}`}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="flex size-full items-center justify-center"
                      >
                        <Image
                          src="/images/logo-mark.svg"
                          alt=""
                          width={56}
                          height={56}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold tracking-wide text-brand">
                      {service.direction}
                    </span>
                    {/* Not a heading: this is a jump link to the section
                        below, whose <h2> is the real heading for this service.
                        Two identical h2s would duplicate the page outline. */}
                    <span className="mt-2 block text-lg font-bold group-hover:text-brand">
                      {service.title}
                    </span>
                    <p className="mt-3 text-sm text-muted">{service.summary}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Each service in detail, with its own numbered steps. */}
      {services.map((service, index) => (
        <Section
          key={service.slug}
          id={service.slug}
          tone={index % 2 === 0 ? "surface" : "white"}
        >
          <div className="reveal scroll-mt-20">
            <span className="text-sm font-semibold tracking-wide text-brand">
              {service.direction}
            </span>
            <h2 className="mt-2 text-2xl font-bold md:text-4xl">{service.title}</h2>
            <p className="mt-4 max-w-2xl text-muted">{service.summary}</p>

            {service.deliveryTimeGenitive ? (
              <p className="mt-4 text-muted">
                ამანათი ადრესატთან ჩადის გაგზავნიდან{" "}
                <strong className="font-semibold text-charcoal">
                  {service.deliveryTimeGenitive}
                </strong>{" "}
                ვადაში.
              </p>
            ) : null}

            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.steps.map((step, stepIndex) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-line bg-white p-6"
                >
                  <span
                    className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-soft text-base font-bold text-brand"
                    aria-hidden="true"
                  >
                    {stepIndex + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      ))}

      <section className="bg-charcoal text-white">
        <div className="container-page py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold md:text-4xl">რომელი სერვისი გჭირდებათ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            მოგვწერეთ, საიდან სად იგზავნება ამანათი — დანარჩენში ჩვენ დაგეხმარებით.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PhoneButton size="lg" />
            {business.facebookUrl ? (
              <Button href={business.facebookUrl} size="lg" variant="onDark">
                Facebook-ზე მოწერა
              </Button>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
