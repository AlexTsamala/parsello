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

  /** TODO: awaiting business — needed for the contact page and LocalBusiness schema. */
  address: "III კვარტალი II-ა კორპუსი, გრიგოლ რობაქიძის 4, თბილისი, ",

  /** TODO: awaiting business. */
  workingHours: "8 AM – 10 PM",

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
    copy: "ფასის გამოსათვლელად მოგვწერეთ ჩვენს Facebook გვერდზე ან დაგვიკავშირდით ნომერზე 551 23 15 19",
  },

  /**
   * Supplied by the business: 16–21 days.
   * Stored as a string — `16 - 21` was being evaluated as arithmetic (= -5).
   * TODO: confirm whether this range is the same for all six destinations.
   */
  deliveryDays: "16–21",

  /** TODO: awaiting business — do not render limits until set. */
  weightLimit: null as string | null,
} as const;

/** Canonical site origin. TODO: replace once the domain is registered. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://parcello.ge";
