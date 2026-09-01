import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { mainNav, primaryCta } from "@/content/navigation";

/**
 * Server Component — only the mobile menu ships JavaScript.
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="მთავარი ნავიგაცია" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-charcoal transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Button href={primaryCta.href} className="hidden md:inline-flex">
            {primaryCta.label}
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
