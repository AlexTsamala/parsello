import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/Phone";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";
import { publicImageExists } from "@/lib/assets";

const HERO_IMAGE = "courier-handover.jpg";

export function Hero({ locale }: { locale: Locale }) {
  const { ui, business } = getContent(locale);
  const hasPhoto = publicImageExists(HERO_IMAGE);

  return (
    <section className="border-b border-line bg-surface">
      <div className="container-page grid items-center gap-10 py-14 md:grid-cols-2 md:gap-14 md:py-24">
        <div className="animate-fade-up">
          <h1 className="text-3xl font-bold md:text-5xl">{ui.hero.h1}</h1>

          <p className="mt-5 max-w-lg text-base text-muted md:text-lg">
            {ui.hero.lead(business.shortName)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={localePath(locale, "/contact")} size="lg">
              {ui.hero.ctaSend}
            </Button>
            <Button href={localePath(locale, "/services")} size="lg" variant="secondary">
              {ui.hero.ctaHowItWorks}
            </Button>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted">
            {ui.hero.callPrefix}
            <PhoneLink className="font-semibold text-charcoal" />
          </p>
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-line bg-white md:aspect-square">
          {hasPhoto ? (
            <Image
              src={`/images/${HERO_IMAGE}`}
              alt={ui.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            /* Brand panel until the real photography is added — no visible
               placeholder text ever reaches production (CLAUDE.md §1). */
            <div
              aria-hidden="true"
              className="flex size-full items-center justify-center bg-brand-soft"
            >
              <Image
                src="/images/logo-mark.svg"
                alt=""
                width={120}
                height={120}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
