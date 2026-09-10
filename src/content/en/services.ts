import type { Service } from "../services";
import { businessEn } from "./business";
import { howItWorksStepsEn } from "./how-it-works";

/**
 * English wording for the three confirmed services.
 *
 * As in the Georgian file, the steps describe only what each service is by
 * definition. Anything operational that the business has not confirmed — how a
 * parcel is handed over abroad, how a customer obtains a forwarding address,
 * where parcels are collected in Georgia, and inbound delivery times — is left
 * out rather than guessed (docs/OPEN-QUESTIONS.md #16–#18). `image` and
 * `deliveryTimeGenitive` mirror the Georgian record exactly; only the outbound
 * route has a published time.
 */
export const servicesEn: Service[] = [
  {
    slug: "send-to-europe",
    title: "Sending a parcel to Europe",
    direction: "Georgia → Europe",
    summary:
      "Send a parcel to family, friends or relatives in Europe — Georgian produce, clothing, gifts and personal belongings.",
    image: "courier-handover.jpg",
    alt: "A Parcello courier collecting a parcel from a customer",
    steps: howItWorksStepsEn,
    deliveryTimeGenitive: businessEn.deliveryTimeGenitive,
  },
  {
    slug: "receive-from-europe",
    title: "Sending a parcel to Georgia",
    direction: "Greece and Poland → Georgia",
    summary:
      "People in Greece and Poland can send a parcel to Georgia.",
    image: "parcels-tbilisi.jpg",
    alt: "Parcello parcels in Tbilisi",
    steps: [
      {
        title: "Get in touch",
        body: "Tell us where the parcel is being sent from and who the recipient in Georgia is.",
      },
      {
        title: "Prepare the parcel",
        body: "Place the items in a cardboard box and write the sender's and recipient's details on it.",
      },
      {
        title: "Hand the parcel over",
        body: "You pass the parcel to our team by the method agreed with us.",
      },
      {
        title: "Receive the parcel in Georgia",
        body: "The parcel goes on to the named recipient in Georgia.",
      },
    ],
    deliveryTimeGenitive: null,
  },
  {
    slug: "online-shopping",
    title: "Online shopping from Europe",
    direction: "European online shops → Georgia",
    summary:
      "Buy from European online shops and receive your items in Georgia.",
    image: "what-you-can-send.jpg",
    alt: "Items bought online — clothing, footwear and accessories",
    steps: [
      {
        title: "Get your address",
        body: "Get in touch and we will give you the address to have your online order sent to.",
      },
      {
        title: "Order online",
        body: "Choose your items in the online shop and give that address as the delivery address.",
      },
      {
        title: "We receive the order",
        body: "Once the order arrives, we prepare the parcel for its journey to Georgia.",
      },
      {
        title: "Receive the parcel in Georgia",
        body: "The parcel arrives in Georgia and is handed over to you.",
      },
    ],
    deliveryTimeGenitive: null,
  },
];

export const getServiceEn = (slug: string): Service | undefined =>
  servicesEn.find((service) => service.slug === slug);
