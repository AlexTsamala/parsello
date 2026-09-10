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
    // The Georgian names both directions of the service; English says the same
    // thing without repeating "Europe" twice in one line.
    h1: "Send and receive parcels between Georgia and Europe",
    lead: (brand) =>
      `${brand} makes it simple to send a parcel from Georgia to Europe, and to receive one coming the other way.`,
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

  countryPage: {
    otherDestinations: "Other destinations",
  },

  cookie: {
    body: "We use cookies to understand how visitors use the site. This helps us improve it.",
    decline: "Decline",
    accept: "Accept",
  },

  common: {
    home: "Home",
    sendParcel: "Send a parcel",
    facebookCta: "Message us on Facebook",
  },

  pages: {
    home: {
      metaTitle: "Send parcels from Georgia to Europe",
      metaDescription:
        "Send a parcel from Georgia to Europe simply and conveniently. Parcello offers parcel delivery to countries across Europe.",
    },

    prices: {
      metaTitle: "The cost of sending a parcel",
      metaDescription:
        "How much does it cost to send a parcel from Georgia to Europe? The price depends on the country and the weight — message us and we will calculate it exactly.",
      breadcrumb: "Prices",
      h1: "The cost of sending a parcel",
      howCalculatedHeading: "How is the price worked out?",
      howCalculatedBody:
        "Two things mainly affect the price: which country the parcel is going to, and how much it weighs. Because rates change, we work the price out individually for each order — that way you are never quoted something out of date.",
      whatToSendHeading: "What should you tell us?",
      whatToSendItems: [
        "The destination country and city",
        "The approximate weight of the parcel",
        "What is inside the parcel",
      ],
      quoteBoxHeading: "To get a price",
      byDestinationHeading: "Prices by destination",
      byDestinationDescription:
        "Choose a country and message us — we will calculate the exact price.",
    },

    countries: {
      metaTitle: "Destinations — where we send parcels",
      metaDescription:
        "Parcello sends parcels throughout Europe. See our main destinations and detailed information for each country.",
      breadcrumb: "Destinations",
      h1: "Where do we send parcels?",
      heroAlt: "Parcello parcels in Tbilisi, with the Bridge of Peace behind",
      listHeading: "Main destinations",
      listDescription:
        "Choose a country to read its customs rules and the details of sending there.",
    },

    faq: {
      metaTitle: "Frequently asked questions",
      metaDescription:
        "Answers to common questions about sending a parcel to Europe — price, timings, packing, what you can send, and how to start an order.",
      breadcrumb: "Frequently asked questions",
      h1: "Frequently asked questions",
      lead: "If you cannot find your answer here, get in touch — we will be glad to help.",
      rulesHeading: "European Union customs rules",
      seeAlso: {
        prefix: "See also:",
        whatCanISend: "what you can send",
        conjunction: "and",
        services: "how Parcello works",
        suffix: ".",
      },
      ctaHeading: "Have a question?",
      ctaBody:
        "Call us or message us on Facebook — we will get straight back to you.",
    },

    contact: {
      metaTitle: "Contact us and send a parcel",
      metaDescription:
        "Start sending your parcel with Parcello — call us or message us on Facebook. Tell us the country, the weight and the contents, and we will calculate the exact price.",
      breadcrumb: "Contact",
      h1: "Send a parcel",
      lead: "To send a parcel, call us or message us on Facebook. The details listed below help us give you an exact price quickly.",
      orderDetailsHeading: "What to tell us when you order",
      orderDetails: [
        { label: "First and last name", hint: "Who we should contact" },
        { label: "Phone", hint: "Your contact number" },
        {
          label: "Destination country and city",
          hint: "Where the parcel is going",
        },
        {
          label: "Approximate weight of the parcel",
          hint: "So we can work out the price",
        },
        { label: "Contents of the parcel", hint: "What is in the box" },
        {
          label: "Where the parcel is collected",
          hint: "Whether you hand it to a courier or bring it yourself",
        },
      ],
      channelsHeading: "How to reach us",
      labels: {
        phone: "Phone",
        email: "Email",
        address: "Address",
        workingHours: "Opening hours",
      },
    },

    whatCanISend: {
      metaTitle: "What you can send to Europe",
      metaDescription:
        "What you can send from Georgia to Europe — churchkhela, cheese, tkemali, wine, clothing and personal belongings. Find out the restrictions and the packing rules.",
      breadcrumb: "What you can send",
      h1: "What can you send to Europe?",
      lead: "Georgian produce, clothing, gifts and personal belongings — send them to family, friends and relatives in Europe.",
      heroAlt: "A Parcello parcel, packed and ready to send to Europe",
      prohibitedHeading: "What can't be sent?",
      prohibitedNote:
        "If you are unsure about a particular item, just message us — we will check and let you know.",
      packingHeading: "How should you pack your parcel?",
      ctaHeading: "Ready to send a parcel?",
      ctaBody:
        "Send us the contents of your parcel and the destination country — we will calculate the exact price.",
    },

    services: {
      metaTitle: "Services",
      metaDescription:
        "Parcello's services — sending parcels from Georgia to Europe, sending parcels from Greece and Poland to Georgia, and online shopping from Europe.",
      breadcrumb: "Services",
      h1: "Parcello's services",
      lead: "We send parcels from Georgia to Europe, receive parcels from Greece and Poland, and help you receive items bought from European online shops.",
      deliveryBefore: "The parcel reaches the recipient within",
      deliveryAfter: "of being sent.",
      ctaHeading: "Which service do you need?",
      ctaBody:
        "Tell us where the parcel is going from and to — we will help with the rest.",
    },
  },
};
