import { Button } from "@/components/ui/Button";
import { business } from "@/content/business";
import { primaryCta } from "@/content/navigation";

/**
 * Mobile-only sticky bar so ordering and calling are always one tap away
 * (plan §6, §26). Hidden from md upwards, where the navbar CTA is visible.
 */
export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 py-3 backdrop-blur-sm md:hidden">
      <div className="flex gap-2">
        <Button href={primaryCta.href} className="flex-1">
          {primaryCta.label}
        </Button>
        <Button
          href={`tel:${business.phone.tel}`}
          variant="secondary"
          aria-label={`დარეკვა ნომერზე ${business.phone.display}`}
          className="px-4"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
