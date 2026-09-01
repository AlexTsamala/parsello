"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { mainNav, primaryCta } from "@/content/navigation";

/**
 * The only interactive part of the navbar, isolated so the rest of the header
 * stays a Server Component (CLAUDE.md §7).
 */
export function MobileMenu() {
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
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "მენიუს დახურვა" : "მენიუს გახსნა"}
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
        <nav aria-label="მობილური ნავიგაცია">
          <ul className="flex flex-col">
            {mainNav.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

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
          href={primaryCta.href}
          size="lg"
          className="mt-6 w-full"
          onClick={() => setOpen(false)}
        >
          {primaryCta.label}
        </Button>
      </div>
    </div>
  );
}
