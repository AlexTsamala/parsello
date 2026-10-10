import { business, type RateId } from "../business";
import type { BusinessContent } from "../types";

/** Country names for the price table; the rates themselves are inherited. */
const rateNames: Record<RateId, string> = {
  greece: "Greece",
  poland: "Poland",
  germany: "Germany",
  hungary: "Hungary",
  czechia: "Czechia",
  slovakia: "Slovakia",
  austria: "Austria",
  lithuania: "Lithuania",
  latvia: "Latvia",
  estonia: "Estonia",
  france: "France",
  belgium: "Belgium",
  netherlands: "Netherlands",
  sweden: "Sweden",
  norway: "Norway",
  denmark: "Denmark",
  finland: "Finland",
  portugal: "Portugal",
  bulgaria: "Bulgaria",
  "great-britain": "Great Britain",
  ireland: "Ireland",
};

/**
 * English business copy.
 *
 * Everything factual is spread from the Georgian record rather than retyped:
 * phone, email, socials, opening times, the country code, and the pickup /
 * drop-off flags all have exactly one definition on the site. Only wording is
 * overridden below, so the two locales cannot drift into disagreeing about the
 * business itself.
 *
 * This is a TRANSLATION, not a rewrite. Nothing here may claim anything the
 * Georgian copy does not already claim — no speed, no guarantee, no insurance,
 * and no price beyond the inherited rates (CLAUDE.md §1 rules 2 and 4).
 */
export const businessEn: BusinessContent = {
  ...business,

  address: {
    ...business.address,
    lines: ["4 Grigol Robakidze Avenue", "Tbilisi, Georgia"],
    street: "4 Grigol Robakidze Avenue",
    locality: "Tbilisi",
  },

  workingHours: {
    ...business.workingHours,
    display: "Every day, 08:00–22:00",
  },

  pricing: {
    ...business.pricing,
    rates: business.pricing.rates.map((rate) => ({
      ...rate,
      name: rateNames[rate.id],
    })),
    currency: "GEL",
    dependsOn:
      "The cost depends on which country you are sending the parcel to and how much it weighs.",
    copy: "Send us the destination country and the approximate weight of your parcel and we will calculate the exact price for you. Call us on +995 551 23 15 19 or message us on Facebook.",
  },

  deliveryTime: "2–3 weeks",
  // English does not inflect; the genitive field simply repeats the base form.
  deliveryTimeGenitive: "2–3 weeks",

  inboundDeliveryTime: "2 weeks",
  inboundDeliveryTimeGenitive: "2 weeks",

  doorDelivery:
    "A courier delivers the parcel to the recipient's door, at the address you gave.",

  departure: "Parcels leave Georgia every Sunday.",

  coverage: {
    scope: "We send parcels anywhere in Europe.",
    priorityNote: "Our main destinations are listed below.",
  },

  restrictions: {
    prohibited: ["Medicines", "Items prohibited by law"],
    prohibitedSentence:
      "We do not send medicines, or any items prohibited by law",
    conditional:
      "Glassware must be packed properly so that it is not damaged in transit.",
    packingLiability: "We do not take responsibility for packing.",
  },

  packaging: [
    "Place your items in a cardboard box.",
    "Write the sender's first name, last name and phone number on the box.",
    "Write the recipient's full address on the box.",
  ],
};
