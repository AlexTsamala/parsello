import { Button } from "@/components/ui/Button";
import { MobilePhoneIcon } from "@/components/ui/icons";
import { business } from "@/content/business";

/**
 * The phone number always renders the same way: an orange mobile icon followed
 * by the full international number. Use these instead of writing
 * `business.phone.display` into markup, so the format cannot drift.
 */

export function PhoneButton({
  size = "md",
  variant = "primary",
  className,
}: {
  size?: "md" | "lg";
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Button href={`tel:${business.phone.tel}`} size={size} variant={variant} className={className}>
      <MobilePhoneIcon className={variant === "primary" ? "text-white" : "text-brand"} />
      {business.phone.display}
    </Button>
  );
}

export function PhoneLink({ className }: { className?: string }) {
  return (
    <a
      href={`tel:${business.phone.tel}`}
      className={[
        "inline-flex items-center gap-2.5 transition-colors hover:text-brand",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <MobilePhoneIcon className="shrink-0 text-brand" />
      {business.phone.display}
    </a>
  );
}
