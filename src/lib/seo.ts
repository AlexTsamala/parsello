import type { Metadata } from "next";

import { business, siteUrl } from "@/content/business";

const DEFAULT_OG_IMAGE = "/og-default.jpg"; // TODO: add real branded OG image

type PageMetadataInput = {
  /** Page title without the brand suffix — the template adds it. */
  title: string;
  description: string;
  /** Site-root-relative path, e.g. "/countries/germany". */
  path: string;
  /** Set for blog articles so OG type is correct. */
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

/**
 * Builds page metadata with a canonical URL, Open Graph and Twitter tags.
 * Every page must use this — see CLAUDE.md §6. Do not hand-write Metadata
 * objects, or canonicals drift.
 */
export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();
  const fullTitle = `${title} | ${business.name}`;

  return {
    // Absolute, so the rendered <title> is exactly the one the plan specifies
    // rather than depending on the layout's template resolving.
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: business.name,
      locale: "ka_GE",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: business.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
