/**
 * Single source of truth for Parcello business facts.
 *
 * RULES (see CLAUDE.md §1):
 *  - Nothing in this file may be guessed. Unknown values are `null` with a TODO.
 *  - Never publish a price, price range, or per-kg rate. Pricing is quoted on
 *    request only — that is a business decision, not missing data.
 *  - A `null` here means the corresponding UI must be omitted, not filled in.
 */

export const business = {
  name: "Parcello Georgia",
  shortName: "Parcello",

  /** Confirmed. Primary contact across the whole site. */
  phone: {
    display: "551 23 15 19",
    tel: "+995551231519",
  },

  facebookUrl: "https://www.facebook.com/parcellogeorgia",

  /* Tracking params stripped — the fbclid was a share-link artifact, not part of the profile URL. */
  instagramUrl: "https://www.instagram.com/parcellogeorgia",

  /** TODO: awaiting business. */
  email: null as string | null,

  /** Confirmed drop-off address. */
  address: "გრიგოლ რობაქიძის 4, III კვარტალი, II-ა კორპუსი, თბილისი",

  /**
   * Confirmed: every day, 8 AM – 10 PM.
   * Stored structurally because schema.org needs days and 24-hour times, while
   * the page shows Georgian-formatted text.
   */
  workingHours: {
    display: "ყოველდღე, 08:00–22:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "22:00",
  },

  /**
   * Confirmed: both courier pickup and drop-off are available.
   * TODO: which cities/regions pickup covers, and the drop-off address.
   */
  handover: {
    pickup: true,
    dropOff: true,
    pickupCities: null as string[] | null,
  },

  /**
   * Pricing is never published. Any UI that would show a number shows this
   * instead. Import it — do not paraphrase it per page.
   */
  pricing: {
    model: "on-request",
    /** What the price actually depends on — confirmed by the business. */
    dependsOn:
      "ღირებულება დამოკიდებულია იმაზე, თუ რომელ ქვეყანაში აგზავნით ამანათს და რა არის მისი წონა.",
    copy: "მოგვწერეთ ქვეყანა და ამანათის დაახლოებითი წონა — ზუსტ ფასს დაგიანგარიშებთ. დაგვიკავშირდით ნომერზე 551 23 15 19 ან მოგვწერეთ Facebook გვერდზე.",
  },

  /**
   * The business's own published wording is "2–3 კვირა" (from the Facebook FAQ).
   * An earlier note said 16–21 days, which sits inside that range; the weeks
   * phrasing is the customer-facing one, so it is what the site shows.
   */
  deliveryTime: "2-3 კვირა",

  /** TODO: awaiting business — no weight limit has been stated. */
  weightLimit: null as string | null,

  /**
   * Parcello ships across Europe. The six countries in `countries.ts` are
   * PRIORITY destinations and SEO targets — not the limit of the service.
   * Never write copy implying only those six are served.
   */
  coverage: {
    scope: "ვაგზავნით ევროპის მასშტაბით.",
    priorityNote:
      "ქვემოთ ჩამოთვლილია ჩვენი ძირითადი მიმართულებები. თუ თქვენი ქვეყანა სიაში არ არის, დაგვიკავშირდით — გაგზავნას შევათანხმებთ.",
  },

  /** Confirmed restrictions. Only what the business has actually stated. */
  restrictions: {
    /** Not sent at all. Nominative — use this for lists. */
    prohibited: ["მედიკამენტები"],
    /**
     * Ready-made sentence. Georgian inflects the noun (მედიკამენტები →
     * მედიკამენტებს), so a sentence cannot be built by concatenating a suffix
     * onto the list. Write the sentence here; never assemble it in JSX.
     */
    prohibitedSentence: "არ ვაგზავნით მედიკამენტებს.",
    /** Accepted, but with a condition the customer must meet. */
    conditional:
      "მინის ნივთები სათანადოდ უნდა იყოს შეფუთული, რომ ტრანსპორტირებისას არ დაზიანდეს.",
    /** Liability disclaimer, in the business's own terms. */
    packingLiability: "შეფუთვაზე პასუხისმგებლობას არ ვიღებთ.",
  },

  /** How the customer must prepare a parcel — confirmed by the business. */
  packaging: [
    "ნივთები მოათავსეთ მუყაოს ყუთში.",
    "ყუთზე მიუთითეთ გამგზავნის სახელი, გვარი და ტელეფონის ნომერი.",
    "ყუთზე მიუთითეთ მიმღების ზუსტი მისამართი.",
  ],
} as const;

/** Canonical site origin. TODO: replace once the domain is registered. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://parcello.ge";
