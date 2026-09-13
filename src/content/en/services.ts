import type { Service } from "../services";
import { businessEn } from "./business";
import { howItWorksStepsEn } from "./how-it-works";

/**
 * English wording for the four confirmed services.
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
  {
    slug: "commercial-freight",
    title: "Commercial freight",
    direction: "Europe → Georgia",
    summary:
      "Parcello transports commercial freight from Europe to Georgia.",
    body: [
      "Our team has many years of experience in the industry and works to get your cargo to its destination safely, efficiently and on schedule.",
      "If your business needs to import or export goods, we will tailor the service to your requirements.",
      "If you are interested, send us the details of your consignment or call us — and we will get back to you.",
    ],
    image: "commercial-freight.jpg",
    alt: "A customer holding a Parcello-branded box",
    steps: [
      {
        title: "Send us the details",
        body: "Tell us where the cargo is being sent from, what kind it is, and roughly what volume and weight it has.",
      },
      {
        title: "We get back to you",
        body: "We go through your requirements and come back with terms suited to your business.",
      },
      {
        title: "We collect the cargo",
        body: "The cargo is handed to our team in Europe by the method agreed with us.",
      },
      {
        title: "The cargo arrives in Georgia",
        body: "We take care of organising transport through to the destination.",
      },
    ],
    deliveryTimeGenitive: null,
  },
];

export const getServiceEn = (slug: string): Service | undefined =>
  servicesEn.find((service) => service.slug === slug);
