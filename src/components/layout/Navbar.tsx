import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";
import { Button } from "@/components/ui/Button";
import { primaryCta } from "@/content/navigation";

/**
 * Desktop nav appears at `lg`, not `md`: six Georgian labels plus the logo and
 * CTA do not fit a 768px row. Below that the hamburger menu takes over.
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <NavLinks />

        <div className="flex items-center gap-1">
          <Button href={primaryCta.href} className="hidden lg:inline-flex">
            {primaryCta.label}
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
