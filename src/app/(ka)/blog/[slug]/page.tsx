import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { Section } from "@/components/ui/Section";
import {
  getPost,
  posts,
  type InlineLink,
  type Paragraph,
} from "@/content/blog";
import { publicImageExists } from "@/lib/assets";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
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
    // Georgian-only: no English twin exists, so no hreflang alternates.
    locale: "ka",
    translated: false,
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
  });
}

const linkClass =
  "font-medium text-charcoal underline underline-offset-4 transition-colors hover:text-brand";

function TextLink({ href, label }: InlineLink) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={linkClass}>
        {label}
      </Link>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={linkClass}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}

function RichText({ value }: { value: Paragraph }) {
  if (typeof value === "string") return value;
  return value.map((part, index) =>
    typeof part === "string" ? part : <TextLink key={index} {...part} />,
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const image =
    post.image && publicImageExists(post.image.file) ? post.image : null;
  const faqs = post.sections.flatMap((section) => section.faqs ?? []);

  return (
    <main id="main">
      <JsonLd
        data={[
          articleSchema({ ...post, image: image?.file }),
          breadcrumbSchema([
            { name: "მთავარი", path: "/" },
            { name: "ბლოგი", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(faqs.length ? [faqSchema(faqs)] : []),
        ]}
      />
      <article>
        <section className="border-b border-line bg-surface">
          <div className="container-page py-10 md:py-16">
            <Breadcrumbs
              locale="ka"
              items={[
                { href: "/", label: "მთავარი" },
                { href: "/blog", label: "ბლოგი" },
                { label: post.title },
              ]}
            />
            <div
              className={
                image ? "mt-6 grid items-center gap-10 md:grid-cols-2" : "mt-6"
              }
            >
              <div>
                <h1 className="max-w-3xl text-3xl font-bold md:text-5xl">
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

              {image ? (
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-brand-soft">
                  <Image
                    src={`/images/${image.file}`}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <Section>
          <div className="max-w-3xl">
            {post.intro?.map((paragraph, index) => (
              <p key={index} className="mt-4 text-muted first:mt-0">
                <RichText value={paragraph} />
              </p>
            ))}

            {post.sections.map((section) => (
              <div key={section.heading} className="mt-10 first:mt-0">
                <h2 className="text-2xl font-bold md:text-3xl">
                  {section.heading}
                </h2>

                {section.body.map((paragraph, index) => (
                  <p key={index} className="mt-4 text-muted">
                    <RichText value={paragraph} />
                  </p>
                ))}

                {section.list?.length ? (
                  <ul className="mt-5 space-y-2.5">
                    {section.list.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
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
                        <span>
                          <RichText value={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.steps?.map((step) => (
                  <div key={step.heading} className="mt-8">
                    <h3 className="text-lg font-bold md:text-xl">
                      {step.heading}
                    </h3>
                    {step.body.map((paragraph, index) => (
                      <p key={index} className="mt-3 text-muted">
                        <RichText value={paragraph} />
                      </p>
                    ))}
                  </div>
                ))}

                {section.outro?.map((paragraph, index) => (
                  <p key={index} className="mt-6 text-muted">
                    <RichText value={paragraph} />
                  </p>
                ))}

                {section.faqs?.map((faq) => (
                  <div key={faq.question} className="mt-8">
                    <h3 className="text-lg font-bold md:text-xl">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-muted">{faq.answer}</p>
                  </div>
                ))}
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
            დაიწყეთ ამანათის გაგზავნა Parcello-სთან — დაგვირეკეთ ან მოგვწერეთ
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
