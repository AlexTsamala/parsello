import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold " +
  "transition-colors duration-200 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover",
  secondary:
    "border border-line bg-white text-charcoal hover:border-charcoal hover:bg-surface",
  ghost: "text-charcoal hover:text-brand",
};

const sizes: Record<Size, string> = {
  // Tall enough to stay thumb-friendly on mobile (CLAUDE.md §7).
  md: "min-h-11 px-5 py-2.5 text-[15px]",
  lg: "min-h-13 px-7 py-3 text-base md:text-[17px]",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** When set, renders a link instead of a button. */
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  "aria-label"?: string;
  /** Only usable from a Client Component. */
  onClick?: () => void;
};

/**
 * Shared CTA button. Renders a real <a> when given `href` and a real <button>
 * otherwise, so it stays keyboard-accessible with no client JS.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
  onClick,
}: ButtonProps) {
  const cls = [base, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    // tel:/mailto:/external links must not go through the router.
    if (/^(https?:|tel:|mailto:)/.test(href)) {
      return (
        <a href={href} className={cls} aria-label={ariaLabel} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
