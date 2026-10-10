/**
 * Shapes that both locales must satisfy.
 *
 * The Georgian files are the originals and keep their `as const`, which makes
 * their types too narrow to reuse directly (`deliveryTime` would literally be
 * the string "2-3 კვირა", which no English value could ever satisfy). These
 * widened types are what `SiteContent` is built from, so Georgian and English
 * are held to one contract without either constraining the other.
 */

/** One row of the published price table. */
export type Rate = {
  /**
   * Stable key. Where the destination has its own country page this is that
   * page's slug, which is how the table and the page find each other.
   */
  id: string;
  flag: string;
  name: string;
  /** GEL per kilogram, exactly as the business gave it. */
  perKg: number;
};

export type BusinessContent = {
  name: string;
  shortName: string;
  phone: { display: string; tel: string };
  facebookUrl: string;
  instagramUrl: string;
  email: string;
  address: {
    lines: readonly string[];
    street: string;
    locality: string;
    countryCode: string;
  };
  workingHours: {
    display: string;
    days: readonly string[];
    opens: string;
    closes: string;
  };
  handover: {
    pickup: boolean;
    dropOff: boolean;
    pickupCities: readonly string[] | null;
  };
  pricing: {
    model: string;
    /**
     * Per-kg rates the business supplied (CLAUDE.md §1 rule 2). A destination
     * that is not listed is quoted on request — never estimate one.
     */
    rates: readonly Rate[];
    /** Written after the amount: "15 ₾", "15 GEL". */
    currency: string;
    dependsOn: string;
    copy: string;
  };
  deliveryTime: string;
  /**
   * Georgian genitive, for "… <time> ვადაში". English does not inflect and
   * simply repeats `deliveryTime`; the field exists so one component can
   * render both without knowing which language it is in.
   */
  deliveryTimeGenitive: string;
  /** Inbound, Europe → Georgia — a different journey from `deliveryTime`. */
  inboundDeliveryTime: string;
  inboundDeliveryTimeGenitive: string;
  /** How the recipient in Europe gets the parcel — courier to the door (2026-10-09). */
  doorDelivery: string;
  /** When parcels leave Georgia — every Sunday (2026-10-10). No cut-off is published. */
  departure: string;
  weightLimit: string | null;
  coverage: { scope: string; priorityNote: string };
  restrictions: {
    prohibited: readonly string[];
    prohibitedSentence: string;
    conditional: string;
    packingLiability: string;
  };
  packaging: readonly string[];
};

export type HowItWorksStep = { title: string; body: string };
