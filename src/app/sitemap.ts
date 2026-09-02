import type { MetadataRoute } from "next";

import { posts } from "@/content/blog";
import { siteUrl } from "@/content/business";
import { countries } from "@/content/countries";

/**
 * Generated, never hand-maintained (CLAUDE.md §6). New countries and blog posts
 * appear here automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, siteUrl).toString();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: url("/countries"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/prices"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/how-it-works"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/what-can-i-send"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: url("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  const countryPages: MetadataRoute.Sitemap = countries.map((country) => ({
    url: url(`/countries/${country.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...countryPages, ...blogPages];
}
