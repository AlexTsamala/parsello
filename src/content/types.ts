/**
 * Shapes that both locales must satisfy.
 *
 * The Georgian files are the originals and keep their `as const`, which makes
 * their types too narrow to reuse directly (`deliveryTime` would literally be
 * the string "2-3 კვირა", which no English value could ever satisfy). These
 * widened types are what `SiteContent` is built from, so Georgian and English
 * are held to one contract without either constraining the other.
 */

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
  /** Never a number, never a range — quoted on request (CLAUDE.md §1 rule 2). */
  pricing: { model: string; dependsOn: string; copy: string };
  deliveryTime: string;
  /**
   * Georgian genitive, for "… <time> ვადაში". English does not inflect and
   * simply repeats `deliveryTime`; the field exists so one component can
   * render both without knowing which language it is in.
   */
  deliveryTimeGenitive: string;
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
