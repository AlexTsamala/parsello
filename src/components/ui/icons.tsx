/** Shared line icons. Colour comes from `currentColor` — wrap in `text-brand`. */

type IconProps = { className?: string; size?: number };

export function MobilePhoneIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="6.5"
        y="2"
        width="11"
        height="20"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10.75 18.25h2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EnvelopeIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m3.5 7.5 7.35 5.1a2 2 0 0 0 2.3 0l7.35-5.1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LocationPinIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 10.5c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 0 1 16 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.4" r="2.9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
