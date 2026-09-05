import Script from "next/script";

import { CONSENT_KEY, GA_ID } from "@/lib/analytics";

/**
 * EEA + UK + Switzerland. Google resolves the visitor's region from their IP on
 * its own servers, so a region-scoped default gives EU visitors cookie-free
 * analytics with no geolocation code here — and keeps the site fully static.
 */
const CONSENT_REQUIRED_REGIONS = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "IS",
  "LI",
  "NO",
  "GB",
  "CH",
];

/**
 * Consent Mode v2 defaults, set before gtag.js loads.
 *
 * Advertising signals stay denied everywhere — the site runs no ads and never
 * should start collecting for them by accident. Only `analytics_storage` is
 * ever granted, and only where the visitor's region allows it or they agreed.
 */
const consentDefaults = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;

gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  region: ${JSON.stringify(CONSENT_REQUIRED_REGIONS)}
});

gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'granted'
});

try {
  var choice = window.localStorage.getItem('${CONSENT_KEY}');
  if (choice === 'granted' || choice === 'denied') {
    gtag('consent', 'update', { analytics_storage: choice });
  }
} catch (e) {}
`;

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: consentDefaults }} />

      <Script
        id="ga-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`gtag('js', new Date()); gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
