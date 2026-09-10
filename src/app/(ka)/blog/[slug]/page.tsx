import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section } from "@/components/ui/Section";
import { getPost, posts } from "@/content/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main id="main">
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "მთავარი", path: "/" },
            { name: "ბლოგი", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <article>
        <section className="border-b border-line bg-surface">
          <div className="container-page py-10 md:py-16">
            <Breadcrumbs
              items={[
                { href: "/", label: "მთავარი" },
                { href: "/blog", label: "ბლოგი" },
                { label: post.title },
              ]}
            />
            <h1 className="mt-6 max-w-3xl text-3xl font-bold md:text-5xl">
              {post.title}
            </h1>
            <time
              dateTime={post.publishedAt}
              className="mt-5 block text-sm text-muted"
            >
              {new Date(post.publishedAt).toLocaleDateString("ka-GE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </section>

        <Section>
          <div className="max-w-3xl">
            {post.sections.map((section) => (
              <div key={section.heading} className="mt-10 first:mt-0">
                <h2 className="text-2xl font-bold md:text-3xl">
                  {section.heading}
                </h2>

                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-muted">
                    {paragraph}
                  </p>
                ))}

                {section.list?.length ? (
                  <ul className="mt-5 space-y-2.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-brand"
                        >
                          <path
                            d="m5 13 4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        <Section tone="surface">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold">იხილეთ ასევე</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {post.related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center rounded-lg border border-line bg-white px-5 py-4 font-medium transition-colors hover:border-brand hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </article>

      <section className="bg-charcoal text-white">
        <div className="container-page py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold md:text-4xl">
            გსურთ ამანათის გაგზავნა?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            დაიწყეთ ამანათს გაგზავნა Parcello-სთან — დაგვირეკეთ ან მოგვწერეთ
            Facebook-ზე.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg">
              ამანათის გაგზავნა
            </Button>
            <PhoneButton size="lg" variant="onDark" />
          </div>
        </div>
      </section>
    </main>
  );
}
