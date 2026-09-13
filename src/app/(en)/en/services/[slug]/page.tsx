import { notFound } from "next/navigation";

import { ServicePage } from "@/components/pages/ServicePage";
import { getContent } from "@/content";
import { serviceSlugs } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

const locale = "en";

/** Both locales ship the same services, so the slugs come from one list. */
export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getContent(locale).getService(slug);
  if (!service) return {};

  return buildMetadata({
    locale,
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getContent(locale).getService(slug);
  if (!service) notFound();

  return <ServicePage service={service} locale={locale} />;
}
