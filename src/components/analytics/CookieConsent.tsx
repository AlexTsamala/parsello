"use client";

import { useSyncExternalStore } from "react";

import {
  GA_ID,
  readConsent,
  subscribeConsent,
  writeConsent,
  type ConsentChoice,
} from "@/lib/analytics";

/**
 * The server cannot read localStorage, so it renders as though the visitor has
 * already answered. React swaps in the real value right after hydration —
 * which is the point of `useSyncExternalStore`, and avoids both a hydration
 * mismatch and a banner flashing at people who dismissed it.
 */
const serverSnapshot = (): ConsentChoice => "denied";

/**
 * Shown to every visitor, once, until they answer.
 *
 * Consent Mode (see GoogleAnalytics.tsx) already blocks analytics cookies for
 * EU visitors before this renders, so the banner asks rather than assumes —
 * and declining leaves GA in its cookie-free state.
 */
export function CookieConsent({
  labels,
}: {
  labels: { region: string; body: string; decline: string; accept: string };
}) {
  const consent = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    serverSnapshot,
  );

  // No tag configured means no cookies, so there is nothing to ask about.
  if (!GA_ID || consent !== null) return null;

  return (
    <div
      role="region"
      aria-label={labels.region}
      className="fixed inset-x-0 bottom-20 z-50 px-4 lg:bottom-4"
    >
      <div className="container-page">
        <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 shadow-lg sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            {labels.body}
          </p>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => writeConsent("denied")}
              className="rounded-lg border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-charcoal"
            >
              {labels.decline}
            </button>
            <button
              type="button"
              onClick={() => writeConsent("granted")}
              className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              {labels.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
