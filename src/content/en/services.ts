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
    updatedAt: "2026-11-20",
    title: "Sending a parcel to Europe",
    direction: "Georgia → Europe",
    summary:
      "Send a parcel to family, friends or relatives in Europe — Georgian produce, clothing, gifts and personal belongings.",
    body: [
      "Parcello sends parcels from Georgia to any country in Europe. Send Georgian produce, clothing, gifts or personal belongings to family, friends and relatives.",
      "You can hand the parcel to a courier or bring it to our address yourself — whichever suits you better.",
      `${businessEn.departure} ${businessEn.doorDelivery}`,
      // Single-source pricing copy, as in the Georgian file.
      businessEn.pricing.dependsOn,
      businessEn.pricing.copy,
    ],
    image: "courier-handover.jpg",
    alt: "A Parcello courier collecting a parcel from a customer",
    steps: howItWorksStepsEn,
    deliveryTimeGenitive: businessEn.deliveryTimeGenitive,
    transportMode: businessEn.transportMode,
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
    seoTitle: "Freight transport to Europe and to Georgia",
    seoDescription:
      "Freight transport from Georgia to Europe and from Europe to Georgia — 1–2 tonnes, collected from anywhere in Georgia and delivered to the door.",
    updatedAt: "2026-11-20",
    title: "Commercial freight",
    direction: "Georgia ⇄ Europe",
    summary:
      "Parcello transports commercial freight from Georgia to Europe and from Europe to Georgia.",
    body: [
      "Our team has many years of experience in the industry and works to get your cargo to its destination safely, efficiently and on schedule.",
      "From Georgia to Europe we mostly ship consignments of 1–2 tonnes: pallets, commercial goods, furniture and personal belongings when you move house, and Georgian products in bulk.",
      "We collect the cargo from anywhere in Georgia — your home, office or warehouse. Parcello prepares the export and customs documents.",
      "Freight leaves Georgia once every two weeks, on a Sunday, together with the parcels, and is delivered to the door anywhere in Europe, about 2–3 weeks after it is sent.",
      "If your business needs to import or export goods, we will tailor the service to your requirements.",
      "If you are interested, send us the details of your consignment or call us — and we will get back to you.",
    ],
    image: "commercial-freight.jpg",
    alt: "A lorry, a container ship and Parcello boxes on a pallet at a port",
    steps: [
      {
        title: "Send us the details",
        body: "Message or call us: tell us what you are sending, roughly how much it weighs and how big it is, where we should collect it and where it is going.",
      },
      {
        title: "Get an individual price",
        body: "We price each consignment individually.",
      },
      {
        title: "We collect the cargo",
        body: "Freight leaving Georgia is collected from anywhere in the country; freight from Europe is handed to our team by the method agreed with us.",
      },
      {
        title: "The cargo reaches its destination",
        body: "We prepare the export and customs documents and organise transport to the destination. In Europe, we deliver the cargo to the recipient's door.",
      },
    ],
    deliveryTimeGenitive: null,
  },
];

export const getServiceEn = (slug: string): Service | undefined =>
  servicesEn.find((service) => service.slug === slug);
