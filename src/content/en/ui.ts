import type { UiStrings } from "../ui";

/**
 * English interface copy.
 *
 * Typed as `UiStrings`, so anything added to the Georgian file and not
 * translated here is a build error rather than a Georgian string on an
 * English page.
 */
export const uiEn: UiStrings = {
  skipToContent: "Skip to main content",

  aria: {
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    footerNav: "Footer navigation",
    footerDestinations: "Destinations",
    breadcrumb: "Breadcrumb",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    logoHome: "Parcello Georgia — home page",
    cookieBanner: "Cookie notice",
    callNumber: (phone) => `Call ${phone}`,
  },

  hero: {
    h1: "Send parcels to Europe and receive them from Europe",
    lead: (brand) =>
      `${brand} makes it simple to send a parcel from Georgia to Europe, and to receive one from Europe.`,
    ctaSend: "Send a parcel",
    ctaHowItWorks: "How does it work?",
    callPrefix: "Call us:",
    imageAlt: "A Parcello courier collecting a parcel from a customer",
  },

  trust: {
    heading: "Why Parcello?",
    description:
      "Sending a parcel to Europe can look complicated. Parcello's aim is to make the process as straightforward as possible for you.",
    benefits: [
      {
        title: "Quick to reply",
        body: "We answer your questions and your order quickly, by phone or on Facebook.",
      },
      {
        title: "A simple process",
        body: "Sending a parcel takes just a few clear steps.",
      },
      {
        title: "Courier or drop-off",
        body: "Hand your parcel to a courier or bring it to us yourself — whichever suits you.",
      },
      {
        title: "Destinations across Europe",
        body: "We send parcels throughout Europe — to our main destinations and beyond them.",
      },
    ],
  },

  howItWorks: {
    heading: "How does Parcello work?",
    description: "Four steps, from your order to your parcel setting off.",
    allServices: "All services",
  },

  countriesSection: {
    heading: "Where do we send parcels?",
  },

  pricingSection: {
    heading: "The cost of sending a parcel",
    facebookCta: "Message us on Facebook",
  },

  faqSection: {
    heading: "Frequently asked questions",
    allFaqs: "All questions and answers",
  },

  finalCta: {
    heading: "Ready to send a parcel to Europe?",
    body: "Start your order with Parcello — call us or message us on Facebook.",
    cta: "Send a parcel",
  },

  footer: {
    tagline: "Sending parcels from Georgia to destinations across Europe.",
    pagesHeading: "Pages",
    destinationsHeading: "Destinations",
  },

  countryFacts: {
    intro:
      "Below are the official European Union rules that apply when a parcel is received. These are not Parcello's own terms.",
  },

  cookie: {
    body: "We use cookies to understand how visitors use the site. This helps us improve it.",
    decline: "Decline",
    accept: "Accept",
  },
};
