"use client";

import { useEffect } from "react";

import { GA_ID, trackEvent } from "@/lib/analytics";

/**
 * One delegated listener for every contact link on the site.
 *
 * GA4's enhanced measurement deliberately ignores `tel:` and `mailto:` clicks,
 * which are the conversions that matter here (CLAUDE.md §10: the phone number
 * is the primary contact). Listening on the document instead of adding
 * `onClick` to each link keeps Phone, Footer and the CTA buttons as server
 * components, and covers links added later without touching this file.
 */
export function ContactClickTracking() {
  useEffect(() => {
    if (!GA_ID) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      const href = link?.getAttribute("href");
      if (!href) return;

      const from = window.location.pathname;

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { page_path: from });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { page_path: from });
      } else if (href.includes("facebook.com")) {
        trackEvent("facebook_click", { page_path: from });
      } else if (href.includes("instagram.com")) {
        trackEvent("instagram_click", { page_path: from });
      } else if (href === "/contact") {
        trackEvent("cta_click", { page_path: from });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
