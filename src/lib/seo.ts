import type { Metadata } from "next";

import { getContent } from "@/content";
import { business, siteUrl } from "@/content/business";
import {
  defaultLocale,
  localePath,
  locales,
  ogLocale,
  type Locale,
} from "@/content/locales";
import { publicImageExists } from "@/lib/assets";

const OG_IMAGE_FILE = "og-default.jpg";
const ogImage = publicImageExists(OG_IMAGE_FILE)
  ? `/images/${OG_IMAGE_FILE}`
  : null;

type PageMetadataInput = {
  /** Page title without the brand suffix — the template adds it. */
  title: string;
  description: string;
  /**
   * Locale-agnostic site path, e.g. "/countries/germany". Never pass a path
   * that already carries a locale prefix — the prefix is added per language so
   * the hreflang alternates can be generated from one value.
   */
  path: string;
  locale: Locale;
  /** Set for blog articles so OG type is correct. */
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
  /**
   * Set false for pages that exist in one language only — the blog is
   * Georgian-only, and pointing hreflang at a URL that does not exist is worse
   * than omitting the tag.
   */
  translated?: boolean;
};

function absolute(locale: Locale, path: string): string {
  return new URL(localePath(locale, path), siteUrl).toString();
}

/**
 * Builds page metadata with a canonical URL, hreflang alternates, Open Graph
 * and Twitter tags.
 */
export function buildMetadata({
  title,
  description,
  path,
  locale,
  type = "website",
  publishedTime,
  noIndex = false,
  translated = true,
}: PageMetadataInput): Metadata {
  const url = absolute(locale, path);
  const fullTitle = `${title} | ${business.name}`;

  const languages = translated
    ? {
        ...Object.fromEntries(
          locales.map((code) => [code, absolute(code, path)]),
        ),
        // Georgian is the primary language, so it is what an unmatched
        // visitor should land on.
        "x-default": absolute(defaultLocale, path),
      }
    : undefined;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: business.name,
      locale: ogLocale[locale],
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(ogImage
        ? {
            images: [
              { url: ogImage, width: 1200, height: 630, alt: business.name },
            ],
          }
        : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: fullTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

/**
 * Metadata for a static page, read from that locale's own copy.
 *
 * Keeps the two route files for a page from having to repeat a title and
 * description that already live in the content files.
 */
export function pageMetadata(
  locale: Locale,
  key: keyof ReturnType<typeof getContent>["ui"]["pages"],
  path: string,
): Metadata {
  const { metaTitle, metaDescription } = getContent(locale).ui.pages[key];

  return buildMetadata({
    locale,
    title: metaTitle,
    description: metaDescription,
    path,
  });
}
