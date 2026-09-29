import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { localePath, type Locale } from "@/content/locales";
import { notFoundCopy } from "@/content/not-found";

/**
 * 404 inside a locale's own layout — navbar, footer and language all match the
 * part of the site the visitor was in.
 */
export function NotFoundPage({ locale }: { locale: Locale }) {
  const copy = notFoundCopy[locale];

  return (
    <main id="main">
      <section className="bg-surface">
        <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center md:py-24">
          <p className="text-lg font-bold tracking-[0.18em] text-brand">404</p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">
            {copy.heading}
          </h1>
          <p className="mt-5 max-w-lg text-base text-muted md:text-lg">
            {copy.body}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={localePath(locale, "/")} size="lg">
              {copy.homeCta}
            </Button>
            <PhoneButton size="lg" variant="secondary" />
          </div>
        </div>
      </section>
    </main>
  );
}
