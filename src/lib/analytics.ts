/**
 * Google Analytics 4.
 *
 * The whole feature is inert until `NEXT_PUBLIC_GA_ID` is set in the
 * environment: no script, no cookies, no consent banner. Nothing here reads or
 * sends business data — only page paths and which contact link was clicked.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? null;

/** Where the visitor's answer is kept. Their browser only — never sent to us. */
export const CONSENT_KEY = "parcello-analytics-consent";

export type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function readConsent(): ConsentChoice | null {
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    // Private mode and blocked storage both throw. No stored answer, so ask.
    return null;
  }
}

const consentListeners = new Set<() => void>();

/** Lets the banner read consent as external state (`useSyncExternalStore`). */
export function subscribeConsent(onChange: () => void): () => void {
  consentListeners.add(onChange);
  return () => {
    consentListeners.delete(onChange);
  };
}

export function writeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // The choice still applies to this page view; it just is not remembered.
  }
  window.gtag?.("consent", "update", { analytics_storage: choice });
  consentListeners.forEach((listener) => listener());
}

/** No-op until the tag loads, so callers never have to check. */
export function trackEvent(
  name: string,
  params?: Record<string, string>,
): void {
  window.gtag?.("event", name, params);
}
