"use client";

import { usePathname } from "next/navigation";

import {
  localePath,
  locales,
  stripLocale,
  type Locale,
} from "@/content/locales";

/**
 * Language switcher — a segmented control, not two links with a divider.
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
type Option = { flag: string; label: string; name: string };

/**
 * A flag is a country, not a language — 🇬🇧 stands for the United Kingdom, not
 * for English, and most of this site's English readers are in neither Britain
 * nor Georgia. The written label is therefore what carries the meaning, and the
 * flag is decorative and `aria-hidden`. Kept because the rest of the site
 * already speaks in flags (the country cards and every country page H1).
 */
const OPTIONS: Record<Locale, Option> = {
  ka: { flag: "🇬🇪", label: "ქარ", name: "ქართული" },
  en: { flag: "🇬🇧", label: "ENG", name: "English" },
};

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
  ariaLabel,
  tone = "light",
  variant = "toggle",
  className,
}: {
  locale: Locale;
  ariaLabel: string;
  /** `onDark` is for the footer, where the surface is charcoal. */
  tone?: "light" | "onDark";
  /**
   * `toggle` shows both languages as a segmented control.
   *
   * `compact` shows only the language you would switch *to*. The Georgian
   * navbar has six long labels plus a CTA and is already full at the 72rem
   * container width — a two-segment control pushes a nav item onto a second
   * line. One button says the same thing in half the width.
   */
  variant?: "toggle" | "compact";
  className?: string;
}) {
  const pathname = usePathname();
  const basePath = stripLocale(pathname);
  const twinExists = hasTwin(basePath);

  const onDark = tone === "onDark";

  const shell = onDark
    ? "border-white/15 bg-white/5"
    : "border-line bg-white";

  const current = onDark
    ? "bg-brand text-white"
    : "bg-brand-soft text-brand";

  const other = onDark
    ? "text-white/70 hover:bg-white/10 hover:text-white"
    : "text-muted hover:bg-surface hover:text-charcoal";

  const base =
    "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm leading-none transition-colors";

  if (variant === "compact") {
    const target = locales.find((code) => code !== locale) ?? locale;
    const option = OPTIONS[target];

    return (
      <a
        href={localePath(target, twinExists ? basePath : "/")}
        hrefLang={target}
        aria-label={option.name}
        title={option.name}
        className={[
          base,
          "border font-semibold",
          onDark
            ? "border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
            : "border-line bg-white text-charcoal hover:border-brand hover:text-brand",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span aria-hidden="true">{option.flag}</span>
        {option.label}
      </a>
    );
  }

  return (
    <nav
      aria-label={ariaLabel}
      className={[
        "inline-flex items-center rounded-lg border p-0.5",
        shell,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {locales.map((target) => {
        const option = OPTIONS[target];
        const isCurrent = target === locale;

        if (isCurrent) {
          return (
            <span
              key={target}
              aria-current="true"
              className={`${base} font-semibold ${current}`}
            >
              <span aria-hidden="true">{option.flag}</span>
              {option.label}
            </span>
          );
        }

        return (
          <a
            key={target}
            href={localePath(target, twinExists ? basePath : "/")}
            hrefLang={target}
            aria-label={option.name}
            className={`${base} ${other}`}
          >
            <span aria-hidden="true">{option.flag}</span>
            {option.label}
          </a>
        );
      })}
    </nav>
  );
}
