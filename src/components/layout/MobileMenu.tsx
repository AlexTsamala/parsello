"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/content/locales";
import { isActivePath, type NavLink } from "@/content/navigation";

/**
 * Hamburger menu below `lg`, where the desktop nav is hidden.
 *
 * Links and labels are props, not imports — this component ships to the
 * browser and should not carry both locales' copy with it.
 */
export function MobileMenu({
  links,
  cta,
  labels,
  locale,
}: {
  /** Already locale-prefixed by the server. */
  links: NavLink[];
  cta: NavLink;
  labels: { nav: string; open: string; close: string };
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.open}
        className="inline-flex size-11 items-center justify-center rounded-lg text-charcoal hover:bg-surface"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {open ? (
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white px-5 pb-8 pt-4"
      >
        <nav aria-label={labels.nav}>
          <ul className="flex flex-col">
            {links.map((link) => {
              const isActive = isActivePath(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-12 items-center border-b border-line text-[15px] ${
                      isActive ? "font-semibold text-brand" : "text-charcoal"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button
          href={cta.href}
          size="lg"
          className="mt-6 w-full"
          onClick={() => setOpen(false)}
        >
          {cta.label}
        </Button>

        <div className="mt-6 border-t border-line pt-5">
          <LocaleSwitcher locale={locale} />
        </div>
      </div>
    </div>
  );
}
