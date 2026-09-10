/**
 * Locale primitives.
 *
 * Georgian is the primary language and lives at the site root; English is
 * served under `/en`. That asymmetry is deliberate — every Georgian URL was
 * already indexed, and prefixing them would have forced a site-wide 301
 * migration on an SEO-driven site.
 */

export const locales = ["ka", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ka";

/** BCP 47 tags, for `<html lang>` and hreflang. */
export const htmlLang: Record<Locale, string> = { ka: "ka", en: "en" };

/** Open Graph locale identifiers. */
export const ogLocale: Record<Locale, string> = { ka: "ka_GE", en: "en_US" };

/**
 * Turns a locale-agnostic site path into the path for `locale`.
 *
 * Always pass the unprefixed path — `localePath("en", "/faq")`, never
 * `localePath("en", "/en/faq")`.
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Inverse of `localePath` — strips a locale prefix if present.
 *
 * Used for active-nav matching, so `/en/faq` highlights the same item as
 * `/faq`, and by the language switcher to find the current page's twin.
 */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(`/${locale}`.length);
    }
  }
  return pathname;
}

/** Which locale a pathname belongs to. */
export function localeFromPath(pathname: string): Locale {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return defaultLocale;
}
