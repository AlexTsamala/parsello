"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import {
  localePath,
  locales,
  stripLocale,
  type Locale,
} from "@/content/locales";

/**
 * Language switcher — a segmented control, not links with dividers.
 *
 * Client-side because it links to the *current* page in the other language,
 * which means it has to know the current path. Plain anchors, not next/link:
 * the two locales have separate root layouts, so crossing between them is a
 * full document load however it is triggered.
 *
 * Pages that exist in only one language fall back to that language's home
 * page rather than linking to a URL that would 404 — the blog is Georgian-only,
 * so `/blog/…` has no English or Russian twin to offer.
 */
type Option = { flag: string | null; label: string; name: string };

/**
 * A flag is a country, not a language — 🇬🇧 stands for the United Kingdom, not
 * for English, and most of this site's English readers are in neither Britain
 * nor Georgia. The written label is therefore what carries the meaning, and the
 * flag is decorative and `aria-hidden`. Kept because the rest of the site
 * already speaks in flags (the country cards and every country page H1).
 *
 * Russian has no flag, by the business's choice: the audience is Russian
 * speakers living in Georgia, and a Russian flag there reads as a statement
 * about a country rather than a pointer to a language.
 */
const OPTIONS: Record<Locale, Option> = {
  ka: { flag: "🇬🇪", label: "ქარ", name: "ქართული" },
  en: { flag: "🇬🇧", label: "ENG", name: "English" },
  ru: { flag: null, label: "РУС", name: "Русский" },
};

/** Every path the English and Russian sites actually build. */
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
   * `compact` shows only the current language, as a button that opens the
   * others. The Georgian navbar has six long labels plus a CTA and is already
   * full at the 72rem container width — a three-segment control pushes a nav
   * item onto a second line. One button says the same thing in a third of the
   * width.
   */
  variant?: "toggle" | "compact";
  className?: string;
}) {
  const pathname = usePathname();
  const basePath = stripLocale(pathname);
  const twinExists = hasTwin(basePath);
  const hrefFor = (target: Locale) =>
    localePath(target, twinExists ? basePath : "/");

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
    return (
      <CompactSwitcher
        locale={locale}
        ariaLabel={ariaLabel}
        hrefFor={hrefFor}
        onDark={onDark}
        base={base}
        className={className}
      />
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
              <Flag flag={option.flag} />
              {option.label}
            </span>
          );
        }

        return (
          <a
            key={target}
            href={hrefFor(target)}
            hrefLang={target}
            aria-label={option.name}
            className={`${base} ${other}`}
          >
            <Flag flag={option.flag} />
            {option.label}
          </a>
        );
      })}
    </nav>
  );
}

function Flag({ flag }: { flag: string | null }) {
  return flag ? <span aria-hidden="true">{flag}</span> : null;
}

/**
 * Disclosure button: the current language, opening a short list of the others.
 *
 * Closes on Escape (returning focus to the button), on a click outside, and
 * when focus leaves the widget, so keyboard users are never left with an open
 * menu behind them.
 */
function CompactSwitcher({
  locale,
  ariaLabel,
  hrefFor,
  onDark,
  base,
  className,
}: {
  locale: Locale;
  ariaLabel: string;
  hrefFor: (target: Locale) => string;
  onDark: boolean;
  base: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const option = OPTIONS[locale];

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={["relative", className].filter(Boolean).join(" ")}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className={[
          base,
          "border font-semibold",
          onDark
            ? "border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
            : "border-line bg-white text-charcoal hover:border-brand hover:text-brand",
        ].join(" ")}
      >
        {/* No flag here: the Georgian navbar has no width to spare, and the
            flag is decorative — the label carries the meaning. */}
        {option.label}
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <ul
        id={menuId}
        hidden={!open}
        className="absolute right-0 top-full z-50 mt-1 min-w-full rounded-lg border border-line bg-white p-1 shadow-sm"
      >
        {locales
          .filter((target) => target !== locale)
          .map((target) => {
            const item = OPTIONS[target];
            return (
              <li key={target}>
                <a
                  href={hrefFor(target)}
                  hrefLang={target}
                  lang={target}
                  className={`${base} w-full whitespace-nowrap text-charcoal hover:bg-surface hover:text-brand`}
                >
                  <Flag flag={item.flag} />
                  {item.name}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
