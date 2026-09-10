"use client";

import { usePathname } from "next/navigation";

import {
  localePath,
  locales,
  stripLocale,
  type Locale,
} from "@/content/locales";

/**
 * KA | EN toggle.
 *
 * Client-side because it links to the *current* page in the other language,
 * which means it has to know the current path. Plain anchors, not next/link:
 * the two locales have separate root layouts, so crossing between them is a
 * full document load however it is triggered.
 *
 * Pages that exist in only one language fall back to that language's home
 * page rather than linking to a URL that would 404 — the blog is Georgian-only,
 * so `/blog/…` has no English twin to offer.
 */
const LABELS: Record<Locale, string> = { ka: "ქარ", en: "ENG" };

/** Every path the English site actually builds. */
const TRANSLATED_PREFIXES = [
  "/",
  "/services",
  "/prices",
  "/countries",
  "/what-can-i-send",
  "/faq",
  "/contact",
];

function hasTwin(path: string): boolean {
  if (path === "/") return true;
  return TRANSLATED_PREFIXES.some(
    (prefix) => prefix !== "/" && path.startsWith(prefix),
  );
}

export function LocaleSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const basePath = stripLocale(pathname);
  const twinExists = hasTwin(basePath);

  return (
    <div
      className={["flex items-center gap-1 text-sm", className]
        .filter(Boolean)
        .join(" ")}
    >
      {locales.map((target, index) => {
        const isCurrent = target === locale;
        const href = localePath(target, twinExists ? basePath : "/");

        return (
          <span key={target} className="flex items-center">
            {index > 0 ? (
              <span aria-hidden="true" className="px-1 text-line">
                |
              </span>
            ) : null}

            {isCurrent ? (
              <span aria-current="true" className="font-semibold text-brand">
                {LABELS[target]}
              </span>
            ) : (
              <a
                href={href}
                hrefLang={target}
                className="text-muted transition-colors hover:text-brand"
              >
                {LABELS[target]}
              </a>
            )}
          </span>
        );
      })}
    </div>
  );
}
