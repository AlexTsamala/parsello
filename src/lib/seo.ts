import type { Metadata } from "next";

import { business, siteUrl } from "@/content/business";
import { publicImageExists } from "@/lib/assets";

const OG_IMAGE_FILE = "og-default.jpg";
const ogImage = publicImageExists(OG_IMAGE_FILE)
  ? `/images/${OG_IMAGE_FILE}`
  : null;

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
