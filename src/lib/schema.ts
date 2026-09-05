import { business, siteUrl } from "@/content/business";

const url = (path: string) => new URL(path, siteUrl).toString();

export function organizationSchema() {
  const socialLinks: (string | null)[] = [
    business.facebookUrl,
    business.instagramUrl,
  ];
  const sameAs = socialLinks.filter((link): link is string => link !== null);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url("/#organization"),
    name: business.name,
    url: siteUrl,
    logo: url("/images/logo.svg"),
    image: url("/images/og-default.jpg"),
    description: "ამანათების გაგზავნა საქართველოდან ევროპის მიმართულებით.",
    telephone: business.phone.tel,
    ...(business.email ? { email: business.email } : {}),
    areaServed: { "@type": "Place", name: "Europe" },
    ...(business.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.street,
            addressLocality: business.address.locality,
            addressCountry: business.address.countryCode,
          },
        }
      : {}),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...business.workingHours.days],
        opens: business.workingHours.opens,
        closes: business.workingHours.closes,
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone.tel,
      ...(business.email ? { email: business.email } : {}),
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
