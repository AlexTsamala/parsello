import { notFound } from "next/navigation";

import { CountryPage } from "@/components/pages/CountryPage";
import { getContent } from "@/content";
import { countrySlugs } from "@/content/countries";
import { buildMetadata } from "@/lib/seo";

const locale = "en";

/** Both locales ship the same destinations, so the slugs come from one list. */
export function generateStaticParams() {
  return countrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getContent(locale).getCountry(slug);
  if (!country) return {};

  return buildMetadata({
    locale,
    title: country.seoTitle,
    description: country.seoDescription,
    path: `/countries/${country.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getContent(locale).getCountry(slug);
  if (!country) notFound();

  return <CountryPage country={country} locale={locale} />;
}
