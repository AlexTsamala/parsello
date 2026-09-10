import Image from "next/image";
import Link from "next/link";

import { ui } from "@/content/ui";

/**
 * The Parcello brand lockup: orange cube + "Parcello GEORGIA" wordmark.
 * Do not redesign or recolor it (CLAUDE.md §1 rule 8).
 *
 * On dark backgrounds the wordmark (#151515) would disappear, so `inverted`
 * pairs the cube mark with white text — which is how the mark actually appears
 * on Parcello courier uniforms.
 */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5"
      aria-label={ui.aria.logoHome}
    >
      {inverted ? (
        <>
          <Image
            src="/images/logo-mark.svg"
            alt=""
            width={32}
            height={32}
            aria-hidden="true"
          />
          <span className="leading-none">
            <span className="block text-lg font-bold tracking-tight text-white">
              Parcello
            </span>
            <span className="block text-[10px] font-medium tracking-[0.18em] text-white/60">
              GEORGIA
            </span>
          </span>
        </>
      ) : (
        <Image
          src="/images/logo.svg"
          alt="Parcello Georgia"
          width={97}
          height={35}
          priority
        />
      )}
    </Link>
  );
}
