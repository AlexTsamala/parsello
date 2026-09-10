import type { HowItWorksStep } from "../types";
import { businessEn } from "./business";

/** Shared by the English homepage and every English country page. */
export const howItWorksStepsEn: HowItWorksStep[] = [
  {
    title: "Order the service",
    body: "Call us or message us on Facebook and agree the details.",
  },
  {
    title: "Prepare your parcel",
    body: "Pack your items so that they are protected in transit.",
  },
  {
    title: "We collect the parcel",
    body: "Hand the parcel to a courier or bring it to us yourself.",
  },
  {
    title: "Your parcel travels to Europe",
    body: `The parcel is sent on to Europe and reaches the recipient within ${businessEn.deliveryTimeGenitive} of being sent.`,
  },
];
