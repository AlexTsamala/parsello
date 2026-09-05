export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? null;

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

export function trackEvent(
  name: string,
  params?: Record<string, string>,
): void {
  window.gtag?.("event", name, params);
}
