import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/ui/Section";
import { posts } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Parcello ბლოგი",
  description:
    "სასარგებლო ინფორმაცია ამანათების გაგზავნის, შეფუთვისა და ევროპის მიმართულებების შესახებ.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <main id="main">
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-16">
          <Breadcrumbs items={[{ href: "/", label: "მთავარი" }, { label: "ბლოგი" }]} />
          <h1 className="mt-6 text-3xl font-bold md:text-5xl">Parcello ბლოგი</h1>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
            სასარგებლო ინფორმაცია ამანათების გაგზავნის, შეფუთვისა და ევროპის მიმართულებების
            შესახებ.
          </p>
        </div>
      </section>

      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-brand"
              >
                <time dateTime={post.publishedAt} className="text-xs text-muted">
                  {new Date(post.publishedAt).toLocaleDateString("ka-GE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="mt-3 text-xl font-bold group-hover:text-brand">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
