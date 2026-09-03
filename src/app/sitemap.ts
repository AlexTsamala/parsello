import type { MetadataRoute } from "next";

import { posts } from "@/content/blog";
import { siteUrl } from "@/content/business";
import { countries } from "@/content/countries";

type StaticPage = {
  path: string;
  updatedAt: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticPages: StaticPage[] = [
  {
    path: "/",
    updatedAt: "2026-09-03",
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    path: "/countries",
    updatedAt: "2026-09-02",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/prices",
    updatedAt: "2026-09-02",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services",
    updatedAt: "2026-09-03",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/what-can-i-send",
    updatedAt: "2026-09-02",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/faq",
    updatedAt: "2026-09-03",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/contact",
    updatedAt: "2026-09-02",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/blog",
    updatedAt: "2026-09-02",
    changeFrequency: "weekly",
    priority: 0.6,
  },
];

/** ISO dates sort lexicographically, so the newest is the string maximum. */
function newest(dates: string[]): string {
  return dates.reduce((latest, date) => (date > latest ? date : latest), "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, siteUrl).toString();

  /** An index page is at least as fresh as the newest entry it lists. */
  const childDates: Record<string, string> = {
    "/countries": newest(countries.map((country) => country.updatedAt)),
    "/blog": newest(posts.map((post) => post.publishedAt)),
  };

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: url(page.path),
    lastModified: newest([page.updatedAt, childDates[page.path] ?? ""]),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const countryEntries: MetadataRoute.Sitemap = countries.map((country) => ({
    url: url(`/countries/${country.slug}`),
    lastModified: country.updatedAt,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: post.publishedAt,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...countryEntries, ...blogEntries];
}
