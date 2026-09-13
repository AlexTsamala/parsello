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
    seoTitle: "Sending a parcel to Europe",
    seoDescription:
      "Send a parcel to family, friends or relatives in Europe. Find out how the service works and how to start your order with Parcello.",
    updatedAt: "2026-09-03",
    title: "Sending a parcel to Europe",
    direction: "Georgia → Europe",
    summary:
      "Send a parcel to family, friends or relatives in Europe — Georgian produce, clothing, gifts and personal belongings.",
    body: [
      "Parcello sends parcels from Georgia to any country in Europe. Send Georgian produce, clothing, gifts or personal belongings to family, friends and relatives.",
      "You can hand the parcel to a courier or bring it to our address yourself — whichever suits you better.",
      // Single-source pricing copy, as in the Georgian file.
      businessEn.pricing.dependsOn,
      businessEn.pricing.copy,
    ],
    image: "courier-handover.jpg",
    alt: "A Parcello courier collecting a parcel from a customer",
    steps: howItWorksStepsEn,
    deliveryTimeGenitive: businessEn.deliveryTimeGenitive,
  },
  {
    slug: "receive-from-europe",
    seoTitle: "Sending a parcel to Georgia",
    seoDescription:
      "People in Greece and Poland can send a parcel to Georgia. Find out how to hand your parcel over and how long it takes to arrive.",
    updatedAt: "2026-09-13",
    title: "Sending a parcel to Georgia",
    direction: "Greece and Poland → Georgia",
    summary:
      "People in Greece and Poland can send a parcel to Georgia.",
    image: "parcels-tbilisi.jpg",
    alt: "Parcello parcels in Tbilisi",
    steps: [
      {
        title: "Message us",
        body: "Tell us you want to send a parcel to Georgia, and who the recipient is.",
      },
      {
        title: "Get our warehouse address",
        body: "We reply with the address of our warehouse, where the parcel should be dropped off.",
      },
      {
        title: "Prepare and drop off the parcel",
        body: "Place the items in a cardboard box, write the sender's and recipient's details on it, and bring it to the address we gave you.",
      },
      {
        title: "Receive the parcel in Georgia",
        body: "The parcel goes on to the named recipient in Georgia.",
      },
    ],
    // Confirmed 2026-09-13. Inbound has its own figure, not the outbound 2-3 weeks.
    deliveryTimeGenitive: businessEn.inboundDeliveryTimeGenitive,
  },
  {
    slug: "online-shopping",
    seoTitle: "Online shopping from Europe",
    seoDescription:
      "Buy from European online shops and receive your items in Georgia. Find out how Parcello's online shopping service works.",
    updatedAt: "2026-09-03",
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
    seoTitle: "Commercial freight transport from Europe",
    seoDescription:
      "Commercial freight transport from Europe to Georgia. Import and export for your business — send us the details of your consignment.",
    updatedAt: "2026-09-13",
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
    alt: "A lorry, a container ship and Parcello boxes on a pallet at a port",
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
