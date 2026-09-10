import Link from "next/link";

import { ui } from "@/content/ui";

export type Crumb = { href?: string; label: string };

/** Visible breadcrumbs; BreadcrumbList JSON-LD is added in Phase 9. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label={ui.aria.breadcrumb} className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-brand">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-charcoal">
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <span aria-hidden="true" className="text-line">
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
