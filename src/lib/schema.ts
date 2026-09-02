import { business, siteUrl } from "@/content/business";

/**
 * JSON-LD builders.
 *
 * RULES (CLAUDE.md §1 rule 5): structured data must match what the page
 * visibly says, and may never contain invented information.
 *  - No `Offer`, `price`, or `priceRange` anywhere — pricing is never published.
 *  - `LocalBusiness` (a subtype of Organization) is used now that a real
 *    street address exists. `openingHoursSpecification` is deliberately absent:
 *    the business stated hours (8 AM – 10 PM) but not which days, and schema
 *    requires days — see docs/OPEN-QUESTIONS.md.
 *  - `FAQPage` only on pages that visibly render those exact Q&As.
 *  - `areaServed` is Europe, not the six priority countries (see business.coverage).
 */

const url = (path: string) => new URL(path, siteUrl).toString();

export function organizationSchema() {
  // Typed explicitly: `business` is `as const`, so the inferred element type
  // would be the literal URLs and the predicate below would not narrow.
  const socialLinks: (string | null)[] = [business.facebookUrl, business.instagramUrl];
  const sameAs = socialLinks.filter((link): link is string => link !== null);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url("/#organization"),
    name: business.name,
    url: siteUrl,
    logo: url("/images/logo.svg"),
    image: url("/images/og-default.jpg"),
    description:
      "ამანათების გაგზავნა საქართველოდან ევროპის მიმართულებით.",
    telephone: business.phone.tel,
    areaServed: { "@type": "Place", name: "Europe" },
    ...(business.address
      ? {
          address: {
            "@type": "PostalAddress",
            // The display string ends with the city; schema keeps the city only
            // in addressLocality, so strip it from streetAddress.
            streetAddress: business.address.replace(/,\s*თბილისი\s*$/, ""),
            addressLocality: "თბილისი",
            addressCountry: "GE",
          },
        }
      : {}),
    ...(sameAs.length ? { sameAs } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone.tel,
      contactType: "customer service",
      availableLanguage: ["ka"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": url("/#website"),
    name: business.name,
    url: siteUrl,
    inLanguage: "ka",
    publisher: { "@id": url("/#organization") },
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: url(item.path) } : {}),
    })),
  };
}

/** Only call this from a page that visibly renders these exact questions. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    inLanguage: "ka",
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: url(`/blog/${post.slug}`),
    author: { "@id": url("/#organization") },
    publisher: { "@id": url("/#organization") },
  };
}
