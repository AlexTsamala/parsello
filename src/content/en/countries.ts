import {
  countries,
  type Country,
  type CountryContent,
  type CountrySlug,
} from "../countries";
import { businessEn } from "./business";

/**
 * English destination pages.
 *
 * Only wording lives here. `slug`, `flag`, `updatedAt`, every `source` and
 * every `verifiedOn` are inherited from the Georgian record by the mapping at
 * the bottom of this file, which means:
 *
 *  - the two locales always list the same countries in the same order, and
 *    `relatedCountries()` (which rotates the array positionally) agrees across
 *    languages;
 *  - a researched fact cannot exist in English without the citation its
 *    Georgian twin was verified against (CLAUDE.md §1 rule 11);
 *  - `Record<CountrySlug, …>` makes adding a destination a build error until
 *    it has been translated.
 *
 * These pages must not read as one template with the country name swapped
 * (CLAUDE.md §6). Each carries its own cities, its own currency and VAT
 * position, and its own reason for the route.
 */
type CountryCopy = Pick<
  Country,
  | "name"
  | "nameIn"
  | "linkLabel"
  | "footerLinkLabel"
  | "priceLinkLabel"
  | "factsHeading"
  | "h1"
  | "seoTitle"
  | "seoDescription"
  | "intro"
> & { content: CountryContent };

/** Per-fact English wording, keyed by the fact's stable id. */
const factCopy: Record<string, { title: string; body: string }> = {
  "pl-currency-vat": {
    title: "Currency and VAT",
    body: "Poland is a member of the European Union but is not in the eurozone, and has kept the złoty (PLN) as its national currency. The standard VAT rate is 23%. Customs relief thresholds are set in euro and are converted into złoty.",
  },
  "de-currency-vat": {
    title: "Currency and VAT",
    body: "The standard VAT rate in Germany is 19% — one of the lowest in the European Union. The currency is the euro.",
  },
  "de-food-imports": {
    title: "Rules on bringing in food are published separately",
    body: "Germany's Federal Ministry of Agriculture publishes its own conditions for bringing products of animal origin into the country for personal consumption. It is worth checking that information before sending food.",
  },
  "fr-currency-vat": {
    title: "Currency and VAT",
    body: "The standard VAT rate in France is 20%. The currency is the euro.",
  },
  "hu-currency-vat": {
    title: "The highest VAT rate in the European Union",
    body: "The standard VAT rate in Hungary is 27% — the highest anywhere in the European Union. The country is not in the eurozone and its national currency is the forint (HUF).",
  },
  "bg-euro-2026": {
    title: "Bulgaria has adopted the euro",
    body: "Bulgaria became a member of the eurozone on 1 January 2026 and the euro replaced the lev at a fixed rate of €1 = 1.95583 lev. Since 1 February 2026 the euro has been the country's only legal tender.",
  },
  "bg-vat": {
    title: "VAT rate",
    body: "The standard VAT rate in Bulgaria is 20%.",
  },
  "cz-currency": {
    title: "Czechia is not in the eurozone",
    body: "Czechia is a member of the European Union but is not in the eurozone — its national currency is the Czech koruna (CZK). The country has set no target date for adopting the euro. Because customs relief thresholds are defined in euro, in Czechia they are converted into koruna.",
  },
  "cz-vat": {
    title: "VAT rate",
    body: "The standard VAT rate in Czechia is 21%.",
  },
  "sk-euro": {
    title: "Slovakia uses the euro",
    body: "Slovakia adopted the euro on 1 January 2009. The euro replaced the Slovak koruna at a fixed rate of €1 = 30.1260 koruna. Because EU customs relief thresholds are also set in euro, comparing the value of a consignment against them requires no further conversion.",
  },
  "sk-vat": {
    title: "VAT rate",
    body: "The standard VAT rate in Slovakia is 23%.",
  },
  "nl-euro": {
    title: "The Netherlands is a founding member of the eurozone",
    body: "The Netherlands adopted the euro on 1 January 1999, and euro banknotes and coins entered circulation on 1 January 2002. The euro replaced the Dutch guilder at a fixed rate of €1 = 2.20371 guilders, and the guilder ceased to be legal tender on 28 January 2002. Because EU customs relief thresholds are also set in euro, comparing the value of a consignment against them requires no further conversion.",
  },
  "nl-vat": {
    title: "VAT rate",
    body: "The standard VAT rate in the Netherlands is 21%.",
  },
  "se-currency": {
    title: "Sweden is not in the eurozone",
    body: "Sweden joined the European Union in 1995 but is not a member of the eurozone — its national currency is the Swedish krona (SEK). The krona is not part of the exchange rate mechanism (ERM II), and the country has set no target date for adopting the euro.",
  },
  "se-vat": {
    title: "VAT rate",
    body: "The standard VAT rate in Sweden is 25%.",
  },
  "se-gift-600": {
    title: "The gift relief threshold is SEK 600",
    body: "According to Swedish Customs (Tullverket), a gift received from outside the EU is free of customs duty and VAT if its total actual value is no more than SEK 600 and the parcel contains no alcohol or tobacco. The parcel must clearly state that it is a gift, what it contains and what it is worth, and that both sender and recipient are private individuals.",
  },
  "fi-euro": {
    title: "Finland is a founding member of the eurozone",
    body: "Finland joined the European Union in 1995 and was among the first countries to adopt the euro, on 1 January 1999. Euro banknotes and coins entered circulation on 1 January 2002. The euro replaced the Finnish markka at a fixed rate of €1 = 5.94573 markka, and the markka ceased to be legal tender after 28 February 2002.",
  },
  "fi-vat": {
    title: "The second-highest VAT rate in the European Union",
    body: "The standard VAT rate in Finland is 25.5% — the second-highest in the European Union, after Hungary (27%).",
  },
  "fi-gift-clearance": {
    title: "The recipient handles customs clearance of a gift",
    body: "According to Posti, Finland's national postal operator, a gift arriving from outside the EU must also be cleared through customs, and the recipient does this through the Finnish Customs service. If the gift is worth €45 or less, the recipient pays neither VAT nor Posti's handling fee; above €45, both are payable.",
  },
  "pt-euro": {
    title: "Portugal is a founding member of the eurozone",
    body: "Portugal joined the European Union in 1986 and was among the first countries to adopt the euro, on 1 January 1999. Euro banknotes and coins entered circulation on 1 January 2002. The euro replaced the Portuguese escudo at a fixed rate of €1 = 200.482 escudos, and the period in which both currencies circulated ended on 28 February 2002.",
  },
  "pt-vat": {
    title: "The VAT rate depends on the region",
    body: "The standard VAT rate in mainland Portugal is 23%. Lower rates apply in the country's autonomous regions: 22% in Madeira and 16% in the Azores.",
  },
  "pt-recipient-id": {
    title: "Customs clearance needs a NIF or a passport",
    body: "According to CTT, Portugal's national postal operator, when a parcel from outside the EU is cleared through CTT's portal, the recipient must give either a Portuguese tax number (NIF) or a passport number. There is no need to give both.",
  },
  "lt-euro": {
    title: "Lithuania was the last Baltic state to join the eurozone",
    body: "Lithuania joined the European Union in 2004 and adopted the euro on 1 January 2015 — after Estonia (2011) and Latvia (2014). The euro replaced the Lithuanian litas at a fixed rate of €1 = 3.45280 litas. The Bank of Lithuania exchanges litas banknotes and coins for euro with no time limit.",
  },
  "lt-vat": {
    title: "VAT rate",
    body: "The standard VAT rate in Lithuania is 21%.",
  },
  "lt-gift-declaration": {
    title: "Gifts must be declared too",
    body: "According to Lithuania Post (Lietuvos paštas), a gift sent free of charge from one private person to another from outside the EU must be declared to customs even when it is not taxed. A gift worth no more than €45 is tax-free. The recipient can declare the parcel through Lithuania Post's service, or independently — through Lithuanian Customs or another customs broker.",
  },
  "lv-euro": {
    title: "Latvia has used the euro since 2014",
    body: "Latvia joined the European Union in 2004 and adopted the euro on 1 January 2014. Before that, from 2 May 2005, the Latvian lats took part in the European exchange rate mechanism (ERM II). The euro replaced the lats at a fixed rate of €1 = 0.702804 lats.",
  },
  "lv-vat": {
    title: "VAT rate",
    body: "The standard VAT rate in Latvia is 21%.",
  },
  "lv-declaration": {
    title: "Recipients can declare a parcel themselves",
    body: "According to the State Revenue Service of Latvia (VID), every consignment received from outside the EU must be declared. The recipient can fill in a short import customs declaration themselves in VID's Electronic Declaration System (EDS), or authorise the postal or express delivery company to handle customs clearance for a fee.",
  },
  "ee-euro": {
    title: "Estonia was the first Baltic state to join the eurozone",
    body: "Estonia joined the European Union in 2004 and the eurozone on 1 January 2011 — the first of the Baltic states, ahead of Latvia (2014) and Lithuania (2015). The euro replaced the Estonian kroon at a fixed rate of €1 = 15.6466 kroons. Estonia's central bank (Eesti Pank) exchanges kroon banknotes and coins for euro with no time limit.",
  },
  "ee-vat": {
    title: "VAT has been 24% since July 2025",
    body: "The standard VAT rate in Estonia rose from 22% to 24% in July 2025.",
  },
  "ee-gift": {
    title: "Gifts worth more than €45 are taxed",
    body: "According to Omniva, Estonia's national postal operator, a parcel sent from one private person to another counts as a gift. A gift worth up to €45 is exempt from VAT unless it contains excise goods. A gift worth more than €45 is charged VAT and customs duty, plus a service fee, because a customs agent is involved in clearing it.",
  },
};

/** The same everywhere, Poland included (confirmed 2026-10-09). */
const DELIVERY_TIME_ANSWER = `A parcel reaches the recipient within ${businessEn.deliveryTimeGenitive} of being sent.`;

const SENDABLE_ITEMS = [
  "Clothing and footwear",
  "Gifts",
  "Personal belongings",
  "Household items",
  "Other permitted goods",
];

const copy: Record<CountrySlug, CountryCopy> = {
  poland: {
    name: "Poland",
    nameIn: "Poland",
    linkLabel: "Send a parcel to Poland",
    footerLinkLabel: "Send to Poland",
    priceLinkLabel: "Cost of sending to Poland",
    factsHeading: "What to know before sending to Poland",
    h1: "Send a parcel from Georgia to Poland",
    seoTitle: "Send a parcel to Poland",
    seoDescription:
      "Send and receive parcels between Georgia and Poland — Warsaw, Kraków, Wrocław, Gdańsk, Poznań. Find out the price and start your order with Parcello.",
    intro:
      "Poland is one of the most requested destinations for parcels sent from Georgia. As Poland is a member of the European Union, EU customs rules apply to the consignment — though the country has kept its national currency, which is worth bearing in mind when declaring value.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Poland? Parcello will help you send it simply and conveniently.",
        "Send clothing, gifts, personal belongings and other permitted goods from Georgia to family, friends and relatives in Poland.",
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "For Georgians living in Poland, receiving a parcel sent by family back home is often an important and welcome link. Parcello makes that as straightforward as possible — you hand us the parcel, and we take care of getting it there.",
        ],
        highlight:
          "A simple process, easy communication, and your parcel sent safely to Europe.",
      },
      steps: {
        heading: "How we send parcels to Poland",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Poland and give us the basic details.",
          },
          {
            title: "Prepare your parcel",
            body: "Make sure the items are packed properly and that they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects the parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Poland",
            body: "We take care of the whole transport process.",
          },
          {
            title: "The parcel arrives in Poland",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Poland?",
        intro:
          "You can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items, so send us a description of the contents before you ship and we will help you check whether they can go.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Poland",
        intro:
          "We deliver anywhere in Poland — to big cities as well as small towns and villages. For example:",
        list: ["Warsaw", "Kraków", "Wrocław", "Gdańsk", "Poznań"],
        note: "When you order, you will need to give the recipient's full address and contact details.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Poland?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in Poland to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Poland?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "Can I send Georgian products?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Send us the name of the product and we will help you check, or see the list of permitted items.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Just get in touch and tell us the approximate weight of the parcel, what is inside it, and the address in Poland.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Poland with Parcello",
        body: "Sending a parcel to Europe does not need to be complicated.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Poland.",
      },
    },
  },
  germany: {
    name: "Germany",
    nameIn: "Germany",
    linkLabel: "Send a parcel to Germany",
    footerLinkLabel: "Send to Germany",
    priceLinkLabel: "Cost of sending to Germany",
    factsHeading: "What to know before sending to Germany",
    h1: "Send a parcel from Georgia to Germany",
    seoTitle: "Send a parcel to Germany",
    seoDescription:
      "Send a parcel from Georgia to Germany — Berlin, Frankfurt, Munich, Hamburg, Cologne. Find out the price and start your order with Parcello.",
    intro:
      "Parcels sent from Georgia to Germany are usually going to family or friends. The German customs service publishes its rules for private individuals in detail, which makes it possible to check before you send.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Germany? Parcello will help you send it simply and conveniently — whether it is a gift, personal belongings, clothing or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to Germany",
          body: [
            "Germany is one of the most significant European destinations for Georgia. Diplomatic relations between the two countries were established in 1992, and Germany was the first country in the European Community to recognise an independent Georgia.",
            "For Georgians living in Germany, receiving a parcel from home often means keeping a connection to family, to the house they grew up in, and to the people who stayed behind. As of 2024 more than 40,000 Georgians were living in Germany, which makes this route a particularly important one for Georgian families.",
            "With Parcello you can send permitted personal items, gifts and other goods from Georgia to Germany.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "Georgia and Germany — a connection built over years",
          body: [
            "Georgia and Germany are not linked by geography alone. Economic, educational and cultural cooperation between the two countries has developed over many years.",
            "Germany is one of Georgia's most significant economic partners. In 2023 trade between Georgia and Germany reached €914.8 million, and food products and textiles were among the notable categories exported from Georgia to Germany.",
            "That is why sending a parcel from Georgia to Germany is rarely just moving things from one country to another — more often it is a way of staying connected to family and to home.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Our aim is to make sending an international parcel straightforward for you.",
          "You give us the parcel and the details we need, and we help organise the rest of the process.",
        ],
        highlight:
          "Easy communication, an organised handover, and the journey to Europe managed as one service.",
      },
      steps: {
        heading: "How we send parcels to Germany",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Germany and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Germany",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in Germany",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Germany?",
        intro:
          "With Parcello you can send a range of permitted personal items, for example:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check that it complies.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Germany",
        intro:
          "We deliver anywhere in Germany — to big cities as well as small towns and villages. For example:",
        list: ["Berlin", "Frankfurt", "Munich", "Hamburg", "Cologne"],
        note: "When you order, be sure to give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Germany?",
        body: "The price of a parcel depends on its weight and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the city in Germany to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Germany?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "Can I send Georgian products to Germany?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Berlin, Frankfurt or Munich?",
          answer:
            "Yes, and not only those. We deliver to any city, town or village in Germany, wherever it is.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination in Germany.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Germany with Parcello",
        body: "Send a parcel to family, friends or relatives in Germany, simply and conveniently.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Germany.",
      },
    },
  },
  france: {
    name: "France",
    nameIn: "France",
    linkLabel: "Send a parcel to France",
    footerLinkLabel: "Send to France",
    priceLinkLabel: "Cost of sending to France",
    factsHeading: "What to know before sending to France",
    h1: "Send a parcel from Georgia to France",
    seoTitle: "Send a parcel to France",
    seoDescription:
      "Send a parcel from Georgia to France — Paris, Lyon, Marseille, Strasbourg, Toulouse. Find out the price and start your order with Parcello.",
    intro:
      "The European Union's common customs rules apply when you send a parcel to France. Declaring the value correctly matters — it is what determines whether the recipient is charged VAT.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to France? Parcello will help you send it simply and conveniently — whether it is a gift, personal belongings, clothing or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to France",
          body: [
            "France and Georgia have a long-standing relationship, spanning culture, education, business and other fields. France is also home to a sizeable Georgian community: according to the French Ministry of the Interior, around 14,942 Georgians were living in the country in 2022.",
            "For Georgians living in France, receiving a parcel from home often means keeping a connection to family and to the place they came from.",
            "Whether it is a gift for a family member, clothing, a personal item or other permitted goods, Parcello's aim is to make sending it as straightforward as possible for you.",
            "You give us the parcel and the details we need, and we help organise the process of getting it to France.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "Georgia and France — a connection spanning many years",
          body: [
            "Georgia and France are linked by a political and cultural relationship built over many years. The French Ministry for Europe and Foreign Affairs notes that a significant part of that relationship rests on cultural, scientific and educational cooperation.",
            "The Institut français de Géorgie has operated in Tbilisi since 2002, and since September 2019 the French-Georgian University has been teaching students in computer science, winemaking and agri-food technology.",
            "Connections like these strengthen personal ones too — sending a parcel to family and friends living in France is one of the simplest ways of keeping in touch day to day.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "Our aim is that you know from start to finish where your parcel is and what is needed to send it.",
        ],
        highlight:
          "Parcello brings collection in Georgia, organising transport, and staying in touch with you together into one simple process.",
      },
      steps: {
        heading: "How we send parcels to France",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to France and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for France",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in France",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to France?",
        intro:
          "You can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in France",
        intro:
          "We deliver anywhere in France — to big cities as well as small towns and villages. For example:",
        list: ["Paris", "Lyon", "Marseille", "Strasbourg", "Toulouse"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to France?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in France to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach France?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "Can I send Georgian products to France?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Paris or another city?",
          answer:
            "Yes. We deliver to any city, town or village in France — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in France.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to France with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in France.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to France.",
      },
    },
  },
  hungary: {
    name: "Hungary",
    nameIn: "Hungary",
    linkLabel: "Send a parcel to Hungary",
    footerLinkLabel: "Send to Hungary",
    priceLinkLabel: "Cost of sending to Hungary",
    factsHeading: "What to know before sending to Hungary",
    h1: "Send a parcel from Georgia to Hungary",
    seoTitle: "Send a parcel to Hungary",
    seoDescription:
      "Send a parcel from Georgia to Hungary — Budapest, Debrecen, Szeged, Miskolc, Pécs. Find out the price and start your order with Parcello.",
    intro:
      "The declared value of a consignment matters especially when sending to Hungary: the country applies the highest VAT rate in the European Union, so exceeding the gift relief threshold noticeably increases the cost to the recipient.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Hungary? Parcello will help you send it simply and conveniently — whether it is a gift, personal belongings, clothing or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to Hungary",
          body: [
            "Georgia and Hungary have been working together increasingly closely in recent years. Formal diplomatic relations between the two countries were established in 1992, and cooperation today covers trade, the economy, education, science and culture. The second Georgian-Hungarian intergovernmental summit was held in Budapest in June 2025, a sign of how the relationship has grown in importance.",
            "For Georgians living in Hungary, receiving a parcel from home can be a simple way of staying connected to family and friends.",
            "Whether it is a gift, clothing, personal belongings or other permitted goods, Parcello's aim is to make the whole process of sending it as straightforward as possible for you.",
            "You give us the parcel and the details we need, and we help organise the process of getting it to Hungary.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "Georgia and Hungary — a growing partnership",
          body: [
            "Relations between Georgia and Hungary have become notably more active in recent years. Both countries cooperate on the economy, trade, energy and regional connections, and in 2022 they signed a declaration of strategic partnership.",
            "Education holds a particular place in that relationship. Georgia has taken part in the Stipendium Hungaricum programme since 2016, which gives Georgian students the opportunity to study at Hungarian universities.",
            "So the link between Georgia and Hungary is not confined to business and politics — personal and educational ties between the two countries are developing actively as well.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "Our aim is that communication is easy and that every stage of the process makes sense to you.",
        ],
        highlight:
          "Parcello lets you arrange sending a parcel from Georgia to Hungary and get the information you need, all in one place.",
      },
      steps: {
        heading: "How we send parcels to Hungary",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Hungary and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Hungary",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in Hungary",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Hungary?",
        intro:
          "With Parcello you can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check that it complies.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Hungary",
        intro:
          "We deliver anywhere in Hungary — to big cities as well as small towns and villages. For example:",
        list: ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pécs"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Hungary?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in Hungary to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Hungary?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "Can I send Georgian products to Hungary?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Budapest?",
          answer:
            "Yes. We deliver to any city, town or village in Hungary — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in Hungary.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Hungary with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in Hungary.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Hungary.",
      },
    },
  },
  bulgaria: {
    name: "Bulgaria",
    nameIn: "Bulgaria",
    linkLabel: "Send a parcel to Bulgaria",
    footerLinkLabel: "Send to Bulgaria",
    priceLinkLabel: "Cost of sending to Bulgaria",
    factsHeading: "What to know before sending to Bulgaria",
    h1: "Send a parcel from Georgia to Bulgaria",
    seoTitle: "Send a parcel to Bulgaria",
    seoDescription:
      "Send a parcel from Georgia to Bulgaria — Sofia, Plovdiv, Varna, Burgas. Find out the price and start your order with Parcello.",
    intro:
      "Bulgaria has been through a significant change recently — the country adopted the euro. That matters directly to anyone sending a parcel, because the value of the consignment and the customs relief thresholds are now in the same currency.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Bulgaria? Parcello will help you send it simply and conveniently — whether it is a gift, clothing, personal belongings or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to Bulgaria",
          body: [
            "Georgia and Bulgaria are connected by a long and friendly relationship. Diplomatic relations between the two countries were established in 1992, and cooperation covers trade, the economy, transport, education and culture.",
            "You might need to send a parcel to Bulgaria for family and friends, or to forward personal belongings or gifts.",
            "Parcello's aim is to make that process simple and clear for you — you give us the parcel and the details we need, and we help organise getting it to Bulgaria.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "Georgia and Bulgaria — connected across the Black Sea",
          body: [
            "Georgia and Bulgaria share an important geographical link across the Black Sea. That is why transport and regional connectivity are among the main strands of cooperation between the two countries.",
            "At a meeting held at the Bulgarian Ministry of Foreign Affairs on 16 June 2026, both sides noted that the ferry links between Bulgaria and Georgia will play a significant role in strengthening business contacts and bilateral trade.",
            "Ties between Tbilisi and Sofia are developing too — the two cities have been twinned since 2016. Sofia Square opened in Tbilisi in 2021, and in May 2026 the Tbilisi Garden opened in Sofia.",
            "These connections make the Georgia-Bulgaria route all the more significant for the people and businesses that move between the two countries or deal with each other across them.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "Easy communication matters to us, and so does your knowing what is needed to send your parcel.",
        ],
        highlight:
          "Parcello lets you send a parcel from Georgia to Bulgaria and get the information you need, all in one place.",
      },
      steps: {
        heading: "How we send parcels to Bulgaria",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Bulgaria and give us its approximate weight, its contents and the destination.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Bulgaria",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in Bulgaria",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Bulgaria?",
        intro:
          "With Parcello you can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Bulgaria",
        intro:
          "We deliver anywhere in Bulgaria — to big cities as well as small towns and villages. For example:",
        list: ["Sofia", "Plovdiv", "Varna", "Burgas"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Bulgaria?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in Bulgaria to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Bulgaria?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "Can I send Georgian products to Bulgaria?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Sofia or Varna?",
          answer:
            "Yes. We deliver to any city, town or village in Bulgaria — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in Bulgaria.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Bulgaria with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in Bulgaria.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Bulgaria.",
      },
    },
  },
  czechia: {
    name: "Czechia",
    nameIn: "Czechia",
    linkLabel: "Send a parcel to Czechia",
    footerLinkLabel: "Send to Czechia",
    priceLinkLabel: "Cost of sending to Czechia",
    factsHeading: "What to know before sending to Czechia",
    h1: "Send a parcel from Georgia to Czechia",
    seoTitle: "Send a parcel to Czechia",
    seoDescription:
      "Send a parcel from Georgia to Czechia — Prague, Brno, Ostrava, Plzeň, Liberec. Find out the price and start your order with Parcello.",
    intro:
      "Czechia is a member of the European Union, so EU customs rules apply to a parcel sent there. The country has also kept its national currency, which is worth bearing in mind when declaring the value of a consignment.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Czechia? Parcello will help you send it simply and conveniently — whether it is a gift, clothing, personal belongings or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to Czechia",
          body: [
            "Diplomatic relations between Georgia and Czechia were established on 1 January 1993, immediately after the dissolution of Czechoslovakia. The Czech embassy in Tbilisi opened in 2000, and the Georgian embassy in Prague in 2006.",
            "Over the years a Georgian community has formed in Czechia, principally in Prague. The Georgian diaspora organisation Iveria was formally founded in the country in 2014.",
            "For people in that position, a parcel from Georgia is often a simple way of keeping a connection to family and home — a gift, clothing, personal belongings or other permitted goods.",
            "You give us the parcel and the details we need, and we help organise the process of getting it to Czechia.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "Czechia is in the EU, but its currency is the koruna",
          body: [
            "Czechia is a member of the European Union but is not in the eurozone: payments are made in Czech koruna (CZK), and the country has set no target date for adopting the euro.",
            "In practice that means EU customs reliefs — including the threshold for a gift sent between private individuals — are defined in euro and converted into koruna in Czechia. So both currencies are worth keeping in mind when assessing the value of a consignment.",
            "This is precisely where Czechia differs from neighbouring Slovakia: until 1993 both countries were part of one state, Czechoslovakia, but Slovakia adopted the euro in 2009 while Czechia kept its national currency.",
            "That makes describing a parcel's contents and value accurately particularly important on the Czech route — it helps the customs procedure complete without delay.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "It matters to us that you know in advance what information a consignment needs and how its journey works.",
        ],
        highlight:
          "Parcello helps you organise sending a parcel from Georgia to Czechia — with easy communication and one process managed end to end.",
      },
      steps: {
        heading: "How we send parcels to Czechia",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Czechia and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Czechia",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in Czechia",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Czechia?",
        intro:
          "With Parcello you can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Czechia",
        intro:
          "We deliver anywhere in Czechia — to big cities as well as small towns and villages. For example:",
        list: ["Prague", "Brno", "Ostrava", "Plzeň", "Liberec"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Czechia?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in Czechia to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Czechia?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "Does Czechia use the euro or its own currency?",
          answer:
            "Czechia is not in the eurozone and its national currency is the Czech koruna (CZK). EU customs relief thresholds are set in euro and converted into koruna, so the value of a consignment needs to be stated accurately.",
        },
        {
          question: "Can I send Georgian products to Czechia?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Prague or Brno?",
          answer:
            "Yes. We deliver to any city, town or village in Czechia — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in Czechia.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Czechia with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in Czechia.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Czechia.",
      },
    },
  },
  slovakia: {
    name: "Slovakia",
    nameIn: "Slovakia",
    linkLabel: "Send a parcel to Slovakia",
    footerLinkLabel: "Send to Slovakia",
    priceLinkLabel: "Cost of sending to Slovakia",
    factsHeading: "What to know before sending to Slovakia",
    h1: "Send a parcel from Georgia to Slovakia",
    seoTitle: "Send a parcel to Slovakia",
    seoDescription:
      "Send a parcel from Georgia to Slovakia — Bratislava, Košice, Žilina, Nitra, Prešov. Find out the price and start your order with Parcello.",
    intro:
      "Slovakia is a member of the eurozone, so the value of a consignment and the EU's customs relief thresholds are in the same currency — which makes declaring it simpler.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Slovakia? Parcello will help you send it simply and conveniently — whether it is a gift, clothing, personal belongings or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to Slovakia",
          body: [
            "Diplomatic relations between Georgia and Slovakia were established on 1 January 1993. The Georgian embassy in Bratislava opened in 2006, and the Slovak embassy in Tbilisi in 2014.",
            "In February 2023 the two countries' foreign ministries signed a protocol of cooperation recognising Georgia's European perspective and its aspiration to full membership of Euro-Atlantic structures.",
            "For Georgians living in Slovakia, receiving a parcel from home is often a way of keeping a connection to family and friends.",
            "You give us the parcel and the details we need, and we help organise the process of getting it to Slovakia.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "Georgia and Slovakia — a strengthened direct link",
          body: [
            "Travel between the two countries has grown noticeably in recent years. A direct air link between Kutaisi and Bratislava began operating on 12 January 2026, running four times a week. Bratislava is the only Slovak destination with a direct connection to Kutaisi.",
            "Political dialogue is active too: Georgian-Slovak political consultations were held in Bratislava in June 2024.",
            "Slovakia has been a member of the eurozone since 2009. That is practical for anyone sending a parcel: EU customs relief thresholds are set in euro and the currency in use in the country is also the euro, so a consignment's value is compared against them in a single currency.",
            "Direct connections like these bring the Slovak route closer for the people who deal with each other across the two countries.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "Easy communication matters to us, and so does your knowing what is needed to send your parcel.",
        ],
        highlight:
          "Parcello lets you send a parcel from Georgia to Slovakia and get the information you need, all in one place.",
      },
      steps: {
        heading: "How we send parcels to Slovakia",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Slovakia and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Slovakia",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in Slovakia",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Slovakia?",
        intro:
          "With Parcello you can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Slovakia",
        intro:
          "We deliver anywhere in Slovakia — to big cities as well as small towns and villages. For example:",
        list: ["Bratislava", "Košice", "Žilina", "Nitra", "Prešov"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Slovakia?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in Slovakia to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Slovakia?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "What currency is used in Slovakia?",
          answer:
            "Slovakia adopted the euro on 1 January 2009 and is a member of the eurozone. EU customs relief thresholds are also set in euro, so a consignment's value is compared against them in a single currency.",
        },
        {
          question: "Can I send Georgian products to Slovakia?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Bratislava or Košice?",
          answer:
            "Yes. We deliver to any city, town or village in Slovakia — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in Slovakia.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Slovakia with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in Slovakia.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Slovakia.",
      },
    },
  },
  netherlands: {
    // No article: `name` renders as a standalone breadcrumb crumb and in the
    // FAQ's comma-separated destination list. The article belongs to the
    // sentences below, which is what the whole-phrase fields are for.
    name: "Netherlands",
    nameIn: "the Netherlands",
    linkLabel: "Send a parcel to the Netherlands",
    footerLinkLabel: "Send to the Netherlands",
    priceLinkLabel: "Cost of sending to the Netherlands",
    factsHeading: "What to know before sending to the Netherlands",
    h1: "Send a parcel from Georgia to the Netherlands",
    seoTitle: "Send a parcel to the Netherlands",
    seoDescription:
      "Send a parcel from Georgia to the Netherlands — Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven. Find out the price and start your order with Parcello.",
    intro:
      "The Netherlands is a founding member of the eurozone, so the value of a consignment and the EU's customs relief thresholds are in the same currency — which makes declaring it simpler.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to the Netherlands? Parcello will help you send it simply and conveniently — whether it is a gift, clothing, personal belongings or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to the Netherlands",
          body: [
            "Diplomatic relations between Georgia and the Kingdom of the Netherlands were established on 22 April 1992. The Dutch embassy opened in Georgia in 2001, and Georgia maintains an embassy in The Hague.",
            "For Georgians living in the Netherlands, receiving a parcel from home is often a simple way of keeping a connection to family, friends and the place they came from.",
            "Whether it is a gift, clothing, personal belongings or other permitted goods, Parcello's aim is to make sending it as straightforward as possible for you.",
            "You give us the parcel and the details we need, and we help organise the process of getting it to the Netherlands.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "The Netherlands — one of Europe's main freight hubs",
          body: [
            "The Netherlands is one of Europe's principal trade and transport hubs. Rotterdam is the largest freight port in the European Union — in 2024 it alone accounted for 11.8% of the total gross weight of goods handled across EU ports, with Antwerp-Bruges and Hamburg in second and third place.",
            "That national profile does not change the EU's customs rules: a parcel sent from Georgia goes through the same procedure in the Netherlands as it would in any other member state.",
            "What matters practically to the sender is that the Netherlands is a founding member of the eurozone and the euro is the currency in use. EU customs relief thresholds are set in euro as well, so a consignment's value is compared against them in a single currency.",
            "That is why describing a parcel's contents and value accurately matters on the Dutch route too — it helps the customs procedure complete without delay.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "Easy communication matters to us, and so does your knowing what is needed to send your parcel.",
        ],
        highlight:
          "Parcello lets you send a parcel from Georgia to the Netherlands and get the information you need, all in one place.",
      },
      steps: {
        heading: "How we send parcels to the Netherlands",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to the Netherlands and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for the Netherlands",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in the Netherlands",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to the Netherlands?",
        intro:
          "With Parcello you can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in the Netherlands",
        intro:
          "We deliver anywhere in the Netherlands — to big cities as well as small towns and villages. For example:",
        list: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to the Netherlands?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in the Netherlands to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach the Netherlands?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "What currency is used in the Netherlands?",
          answer:
            "The Netherlands is a founding member of the eurozone and the euro is the currency in use. EU customs relief thresholds are also set in euro, so a consignment's value is compared against them in a single currency.",
        },
        {
          question: "Can I send Georgian products to the Netherlands?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Amsterdam or Rotterdam?",
          answer:
            "Yes. We deliver to any city, town or village in the Netherlands — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in the Netherlands.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to the Netherlands with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in the Netherlands.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to the Netherlands.",
      },
    },
  },
  finland: {
    name: "Finland",
    nameIn: "Finland",
    linkLabel: "Send a parcel to Finland",
    footerLinkLabel: "Send to Finland",
    priceLinkLabel: "Cost of sending to Finland",
    factsHeading: "What to know before sending to Finland",
    h1: "Send a parcel from Georgia to Finland",
    seoTitle: "Send a parcel to Finland",
    seoDescription:
      "Send a parcel from Georgia to Finland — Helsinki, Espoo, Tampere, Vantaa, Oulu, Turku. Find out the price and start your order with Parcello.",
    intro:
      "Two things are worth knowing when sending a parcel to Finland: the country has the second-highest VAT rate in the European Union, and a gift arriving from outside the EU is cleared through customs by the recipient themselves.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Finland? Parcello will help you send it simply and conveniently — whether it is a gift, clothing, personal belongings or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to Finland",
          body: [
            "Diplomatic relations between Georgia and the Republic of Finland were established on 8 July 1992. Georgia's embassy in Helsinki has operated since 2011, while Finland is represented in Georgia from Helsinki, through a non-resident ambassador.",
            "For Georgians living in Finland, receiving a parcel from home is often a simple way of keeping a connection to family, friends and the place they came from.",
            "Whether it is a gift, clothing, personal belongings or other permitted goods, Parcello's aim is to make sending it as straightforward as possible for you.",
            "You give us the parcel and the details we need, and we help organise the process of getting it to Finland.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "Finland — the euro, a high VAT rate, and clearance by the recipient",
          body: [
            "Finland is a founding member of the eurozone and the euro is the currency in use. EU customs relief thresholds are also set in euro, so a consignment's value is compared against them in a single currency.",
            "At the same time, Finland applies the second-highest VAT rate in the European Union — 25.5%. That means exceeding the €45 gift relief threshold costs the recipient noticeably more.",
            "Finland also differs in that a gift arriving from outside the EU is declared for customs clearance by the recipient themselves, through the Finnish Customs service. It helps if the recipient knows in advance what is in the parcel and what it is worth.",
            "That is why describing a parcel's contents and value accurately matters especially on the Finnish route — it helps the customs procedure complete without delay.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "Easy communication matters to us, and so does your knowing what is needed to send your parcel.",
        ],
        highlight:
          "Parcello lets you send a parcel from Georgia to Finland and get the information you need, all in one place.",
      },
      steps: {
        heading: "How we send parcels to Finland",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Finland and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Finland",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in Finland",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Finland?",
        intro:
          "With Parcello you can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Finland",
        intro:
          "We deliver anywhere in Finland — to big cities as well as small towns and villages. For example:",
        list: ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Finland?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in Finland to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Finland?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "Who handles customs clearance for a parcel in Finland?",
          answer:
            "According to Posti, Finland's postal operator, a gift arriving from outside the EU is declared for customs clearance by the recipient, through the Finnish Customs service. No VAT is payable on a gift worth €45 or less.",
        },
        {
          question: "Can I send Georgian products to Finland?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Helsinki or Tampere?",
          answer:
            "Yes. We deliver to any city, town or village in Finland — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in Finland.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Finland with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in Finland.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Finland.",
      },
    },
  },
  sweden: {
    name: "Sweden",
    nameIn: "Sweden",
    linkLabel: "Send a parcel to Sweden",
    footerLinkLabel: "Send to Sweden",
    priceLinkLabel: "Cost of sending to Sweden",
    factsHeading: "What to know before sending to Sweden",
    h1: "Send a parcel from Georgia to Sweden",
    seoTitle: "Send a parcel to Sweden",
    seoDescription:
      "Send a parcel from Georgia to Sweden — Stockholm, Gothenburg, Malmö, Uppsala, Örebro. Find out the price and start your order with Parcello.",
    intro:
      "Sweden is a member of the European Union but not of the eurozone — the Swedish krona is the currency in use. Swedish Customs therefore sets the gift relief threshold in kronor, which is worth bearing in mind when stating a consignment's value.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Sweden? Parcello will help you send it simply and conveniently — whether it is a gift, clothing, personal belongings or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to Sweden",
          body: [
            "Relations between Georgia and the Kingdom of Sweden have a long history, dating back to the First Democratic Republic of Georgia. Diplomatic relations were established in 1918 and re-established on 19 September 1992, and 2018 marked 100 years since Georgia's diplomatic mission to Sweden was founded.",
            "The Georgian embassy in Stockholm opened in 2006, and the Swedish embassy in Georgia in 2010.",
            "For Georgians living in Sweden, receiving a parcel from home is often a simple way of keeping a connection to family, friends and the place they came from.",
            "You give us the parcel and the details we need, and we help organise the process of getting it to Sweden.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "Sweden is in the EU, but its currency is the krona",
          body: [
            "Sweden is a member of the European Union, so EU customs rules apply to a parcel sent from Georgia. The country is not in the eurozone, however, and has set no date for adopting the euro.",
            "In practice, that means Swedish Customs publishes the gift relief threshold in kronor: no customs duty or VAT is charged on a gift whose total value is no more than SEK 600 and which contains no alcohol or tobacco. The standard VAT rate in the country is 25%.",
            "Swedish Customs also stresses that the parcel must clearly state that it is a gift, what it contains and what it is worth.",
            "That is why describing a parcel's contents and value accurately matters especially on the Swedish route — it helps the customs procedure complete without delay.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "Easy communication matters to us, and so does your knowing what is needed to send your parcel.",
        ],
        highlight:
          "Parcello lets you send a parcel from Georgia to Sweden and get the information you need, all in one place.",
      },
      steps: {
        heading: "How we send parcels to Sweden",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Sweden and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Sweden",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in Sweden",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Sweden?",
        intro:
          "With Parcello you can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Sweden",
        intro:
          "We deliver anywhere in Sweden — to big cities as well as small towns and villages. For example:",
        list: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Örebro"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Sweden?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in Sweden to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Sweden?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "What currency is used in Sweden?",
          answer:
            "Sweden is not in the eurozone and uses the Swedish krona (SEK). Swedish Customs also sets the gift relief threshold in kronor — SEK 600.",
        },
        {
          question: "What should a parcel sent as a gift be marked with?",
          answer:
            "According to Swedish Customs, the parcel must clearly state that it is a gift, what it contains and what it is worth, and that both sender and recipient are private individuals.",
        },
        {
          question: "Can I send Georgian products to Sweden?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Stockholm or Gothenburg?",
          answer:
            "Yes. We deliver to any city, town or village in Sweden — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in Sweden.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Sweden with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in Sweden.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Sweden.",
      },
    },
  },
  portugal: {
    name: "Portugal",
    nameIn: "Portugal",
    linkLabel: "Send a parcel to Portugal",
    footerLinkLabel: "Send to Portugal",
    priceLinkLabel: "Cost of sending to Portugal",
    factsHeading: "What to know before sending to Portugal",
    h1: "Send a parcel from Georgia to Portugal",
    seoTitle: "Send a parcel to Portugal",
    seoDescription:
      "Send a parcel from Georgia to Portugal — Lisbon, Porto, Braga, Coimbra, Faro. Find out the price and start your order with Parcello.",
    intro:
      "Portugal is a founding member of the eurozone, but the country does not have a single VAT rate — in Madeira and the Azores it is lower than on the mainland. And when a parcel is cleared through the portal of CTT, the national postal operator, the recipient needs a tax number (NIF) or a passport number.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Portugal? Parcello will help you send it simply and conveniently — whether it is a gift, clothing, personal belongings or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to Portugal",
          body: [
            "Diplomatic relations between Georgia and the Portuguese Republic were established on 23 May 1992. The Georgian embassy in Lisbon opened in 2010, and since 2005 Portugal has been represented in Georgia through its embassy in Turkey.",
            "For Georgians living in Portugal, receiving a parcel from home is often a simple way of keeping a connection to family, friends and the place they came from.",
            "You give us the parcel and the details we need, and we help organise the process of getting it to Portugal.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "What the recipient in Portugal should know",
          body: [
            "Portugal is a member of the European Union, so EU customs rules apply to a parcel sent from Georgia. The country uses the euro, so a consignment's value and the EU customs relief thresholds are in the same currency.",
            "What is particular to Portugal is that when a parcel is cleared through the portal of CTT, the national postal operator, the recipient needs a Portuguese tax number (NIF) or a passport number. CTT also explains that even a gift must always have a value stated — and if the recipient does not know it, they should contact the sender.",
            "According to CTT, a non-commercial parcel between private individuals worth no more than €45 can be claimed as exempt from charges. The standard VAT rate is 23% in mainland Portugal, 22% in Madeira and 16% in the Azores.",
            "That is why it helps if the recipient knows in advance what is in the parcel and what it is worth — it helps the customs procedure complete without delay.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "Easy communication matters to us, and so does your knowing what is needed to send your parcel.",
        ],
        highlight:
          "Parcello lets you send a parcel from Georgia to Portugal and get the information you need, all in one place.",
      },
      steps: {
        heading: "How we send parcels to Portugal",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Portugal and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Portugal",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in Portugal",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Portugal?",
        intro:
          "With Parcello you can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Portugal",
        intro:
          "We deliver anywhere in Portugal — to big cities as well as small towns and villages. For example:",
        list: ["Lisbon", "Porto", "Braga", "Coimbra", "Faro"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Portugal?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in Portugal to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Portugal?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question:
            "What does the recipient in Portugal need to clear a parcel through customs?",
          answer:
            "According to CTT, Portugal's postal operator, a recipient clearing a parcel through its portal must give a Portuguese tax number (NIF) or a passport number. The parcel must always have a value stated, even if it is a gift.",
        },
        {
          question: "Is VAT the same across all of Portugal?",
          answer:
            "No. The standard VAT rate is 23% in mainland Portugal and lower in the autonomous regions: 22% in Madeira and 16% in the Azores.",
        },
        {
          question: "Can I send Georgian products to Portugal?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Lisbon or Porto?",
          answer:
            "Yes. We deliver to any city, town or village in Portugal — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in Portugal.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Portugal with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in Portugal.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Portugal.",
      },
    },
  },
  lithuania: {
    name: "Lithuania",
    nameIn: "Lithuania",
    linkLabel: "Send a parcel to Lithuania",
    footerLinkLabel: "Send to Lithuania",
    priceLinkLabel: "Cost of sending to Lithuania",
    factsHeading: "What to know before sending to Lithuania",
    h1: "Send a parcel from Georgia to Lithuania",
    seoTitle: "Send a parcel to Lithuania",
    seoDescription:
      "Send a parcel from Georgia to Lithuania — Vilnius, Kaunas, Klaipėda, Šiauliai, Panevėžys. Find out the price and start your order with Parcello.",
    intro:
      "Lithuania has used the euro since 2015 — the last of the Baltic states to join the eurozone. And according to Lithuania Post (Lietuvos paštas), a gift received from outside the EU must be declared to customs even when it is not taxed.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Lithuania? Parcello will help you send it simply and conveniently — whether it is a gift, clothing, personal belongings or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to Lithuania",
          body: [
            "Diplomatic relations between Georgia and the Republic of Lithuania were established on 16 September 1994. The Georgian embassy in Lithuania opened in 2004. From 2001 to 2005 Lithuania was represented in Georgia through its embassy in Ukraine, and in 2005 a Lithuanian embassy opened in Georgia as well.",
            "For Georgians living in Lithuania, receiving a parcel from home is often a simple way of keeping a connection to family, friends and the place they came from.",
            "You give us the parcel and the details we need, and we help organise the process of getting it to Lithuania.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "In Lithuania, gifts are declared too",
          body: [
            "Lithuania is a member of the European Union and the eurozone, so EU customs rules apply to a parcel sent from Georgia, and a consignment's value and the customs relief thresholds are in the same currency — the euro.",
            "Lithuania Post (Lietuvos paštas) makes a point of stressing that a gift received from outside the EU must be declared to customs even when it is not taxed. A gift worth up to €45 is tax-free, but it still has to be declared.",
            "The recipient can declare the parcel through Lithuania Post's service, or independently through Lithuanian Customs or another customs broker. According to the post, the parcel is handed over for delivery once the taxes are paid. The standard VAT rate in Lithuania is 21%.",
            "That is why it helps if the recipient knows in advance what is in the parcel and what it is worth — they will need exactly that information when filling in the declaration.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "Easy communication matters to us, and so does your knowing what is needed to send your parcel.",
        ],
        highlight:
          "Parcello lets you send a parcel from Georgia to Lithuania and get the information you need, all in one place.",
      },
      steps: {
        heading: "How we send parcels to Lithuania",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Lithuania and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Lithuania",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in Lithuania",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Lithuania?",
        intro:
          "With Parcello you can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Lithuania",
        intro:
          "We deliver anywhere in Lithuania — to big cities as well as small towns and villages. For example:",
        list: ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Lithuania?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in Lithuania to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Lithuania?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "Does a gift have to be declared in Lithuania?",
          answer:
            "Yes. According to Lithuania Post (Lietuvos paštas), a gift received from outside the EU must be declared to customs even when it is worth up to €45 and is not taxed.",
        },
        {
          question: "Since when has Lithuania used the euro?",
          answer:
            "Lithuania adopted the euro on 1 January 2015, the last of the Baltic states to join the eurozone.",
        },
        {
          question: "Can I send Georgian products to Lithuania?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Vilnius or Kaunas?",
          answer:
            "Yes. We deliver to any city, town or village in Lithuania — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in Lithuania.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Lithuania with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in Lithuania.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Lithuania.",
      },
    },
  },
  latvia: {
    name: "Latvia",
    nameIn: "Latvia",
    linkLabel: "Send a parcel to Latvia",
    footerLinkLabel: "Send to Latvia",
    priceLinkLabel: "Cost of sending to Latvia",
    factsHeading: "What to know before sending to Latvia",
    h1: "Send a parcel from Georgia to Latvia",
    seoTitle: "Send a parcel to Latvia",
    seoDescription:
      "Send a parcel from Georgia to Latvia — Riga, Daugavpils, Liepāja, Jelgava, Jūrmala. Find out the price and start your order with Parcello.",
    intro:
      "Latvia has used the euro since 2014. According to the State Revenue Service of Latvia (VID), every consignment received from outside the EU must be declared — and recipients can do this themselves, online.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Latvia? Parcello will help you send it simply and conveniently — whether it is a gift, clothing, personal belongings or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to Latvia",
          body: [
            "Diplomatic relations between Georgia and the Republic of Latvia were established on 11 March 1993. From 2004 to 2007 Georgia was represented in Latvia through its embassy in Vilnius, and in 2007 the Georgian embassy in Latvia opened. The Latvian embassy in Georgia has operated since 2006 — before that, from 2004 to 2006, Latvia was represented in Georgia through its embassy in Ukraine.",
            "For Georgians living in Latvia, receiving a parcel from home is often a simple way of keeping a connection to family, friends and the place they came from.",
            "You give us the parcel and the details we need, and we help organise the process of getting it to Latvia.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "Two ways to declare a parcel in Latvia",
          body: [
            "Latvia is a member of the European Union and the eurozone: the euro has been the currency since 2014, so a consignment's value and the EU customs relief thresholds are in the same currency.",
            "According to the State Revenue Service of Latvia (VID), every consignment received from outside the EU must be declared — online purchases and gifts alike.",
            "The recipient has two options: fill in a short import declaration themselves in VID's Electronic Declaration System (EDS), or authorise the postal or express delivery company to handle customs clearance for a fee. The standard VAT rate in Latvia is 21%.",
            "That is why it helps if the recipient knows in advance what is in the parcel and what it is worth — if they fill in the declaration themselves, they will need exactly that information.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "Easy communication matters to us, and so does your knowing what is needed to send your parcel.",
        ],
        highlight:
          "Parcello lets you send a parcel from Georgia to Latvia and get the information you need, all in one place.",
      },
      steps: {
        heading: "How we send parcels to Latvia",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Latvia and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Latvia",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in Latvia",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Latvia?",
        intro:
          "With Parcello you can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Latvia",
        intro:
          "We deliver anywhere in Latvia — to big cities as well as small towns and villages. For example:",
        list: ["Riga", "Daugavpils", "Liepāja", "Jelgava", "Jūrmala"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Latvia?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in Latvia to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Latvia?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "Who fills in the customs declaration in Latvia?",
          answer:
            "According to the State Revenue Service of Latvia (VID), the recipient can fill in a short import declaration themselves in VID's Electronic Declaration System (EDS), or authorise the postal or express delivery company to do it for a fee.",
        },
        {
          question: "Since when has Latvia used the euro?",
          answer:
            "Latvia adopted the euro on 1 January 2014. The euro replaced the lats at a fixed rate of €1 = 0.702804 lats.",
        },
        {
          question: "Can I send Georgian products to Latvia?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Riga or Daugavpils?",
          answer:
            "Yes. We deliver to any city, town or village in Latvia — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in Latvia.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Latvia with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in Latvia.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Latvia.",
      },
    },
  },
  estonia: {
    name: "Estonia",
    nameIn: "Estonia",
    linkLabel: "Send a parcel to Estonia",
    footerLinkLabel: "Send to Estonia",
    priceLinkLabel: "Cost of sending to Estonia",
    factsHeading: "What to know before sending to Estonia",
    h1: "Send a parcel from Georgia to Estonia",
    seoTitle: "Send a parcel to Estonia",
    seoDescription:
      "Send a parcel from Georgia to Estonia — Tallinn, Tartu, Narva, Pärnu, Kohtla-Järve. Find out the price and start your order with Parcello.",
    intro:
      "Estonia was the first of the Baltic states to join the eurozone, in 2011. And in July 2025 its standard VAT rate rose from 22% to 24% — worth bearing in mind for anyone receiving a gift worth more than €45.",
    content: {
      intro: [
        "Want to send a parcel from Georgia to Estonia? Parcello will help you send it simply and conveniently — whether it is a gift, clothing, personal belongings or other permitted goods.",
      ],
      narrative: [
        {
          placement: "afterIntro",
          heading: "Sending a parcel from Georgia to Estonia",
          body: [
            "Diplomatic relations between Georgia and the Republic of Estonia were established on 17 June 1992. From 2004 to 2007 Georgia was represented in Estonia through its embassy in Vilnius, and in 2007 a Georgian embassy opened in Estonia as well.",
            "For Georgians living in Estonia, receiving a parcel from home is often a simple way of keeping a connection to family, friends and the place they came from.",
            "You give us the parcel and the details we need, and we help organise the process of getting it to Estonia.",
          ],
        },
        {
          placement: "beforePricing",
          heading: "Estonia — the euro, 24% VAT and the gift threshold",
          body: [
            "Estonia is a member of the European Union and the eurozone, so EU customs rules apply to a parcel sent from Georgia, and a consignment's value and the customs relief thresholds are in euro.",
            "Since July 2025 the standard VAT rate in Estonia has been 24%. That is why going over the €45 gift threshold means a noticeable cost for the recipient.",
            "According to Omniva, a gift worth more than €45 is charged customs duty as well as VAT, plus a service fee — a customs agent is involved in clearing such a consignment. A gift worth up to €45 is exempt from VAT unless it contains excise goods.",
            "That is why describing a parcel's contents and value accurately matters especially on the Estonian route — it helps the customs procedure complete without delay.",
          ],
        },
      ],
      why: {
        heading: "Why Parcello?",
        body: [
          "Sending an international parcel should not be complicated.",
          "Easy communication matters to us, and so does your knowing what is needed to send your parcel.",
        ],
        highlight:
          "Parcello lets you send a parcel from Georgia to Estonia and get the information you need, all in one place.",
      },
      steps: {
        heading: "How we send parcels to Estonia",
        items: [
          {
            title: "Get in touch",
            body: "Tell us you want to send a parcel to Estonia and give us its approximate weight, its contents and the destination city.",
          },
          {
            title: "Prepare your parcel",
            body: "Pack the items securely and make sure they are permitted to be sent.",
          },
          {
            title: "Hand over the parcel",
            body: "Our team collects your parcel by whichever method you have agreed with us.",
          },
          {
            title: "Your parcel sets off for Estonia",
            body: "We take care of organising the transport process.",
          },
          {
            title: "The parcel arrives in Estonia",
            body: businessEn.doorDelivery,
          },
        ],
      },
      sendable: {
        heading: "What can you send to Estonia?",
        intro:
          "With Parcello you can send a range of permitted personal items, including:",
        items: SENDABLE_ITEMS,
        note: "Restrictions apply to some items in international shipping. Before you send, tell us what you would like to put in the parcel and we will help you check.",
        moreHref: "/what-can-i-send",
        moreLabel: "See the full list of permitted items",
      },
      cities: {
        heading:
          "Sending a parcel to any city or village in Estonia",
        intro:
          "We deliver anywhere in Estonia — to big cities as well as small towns and villages. For example:",
        list: ["Tallinn", "Tartu", "Narva", "Pärnu", "Kohtla-Järve"],
        note: "When you order, give the recipient's full address and contact details so the parcel can be processed correctly.",
      },
      pricing: {
        heading: "How much does it cost to send a parcel to Estonia?",
        body: "The cost depends on the weight of the parcel and the rate in force.",
        emphasis:
          "Send us the weight of your parcel and the destination city in Estonia to get the current price.",
      },
      faqs: [
        {
          question: "How long does a parcel take to reach Estonia?",
          answer: DELIVERY_TIME_ANSWER,
        },
        {
          question: "What is the VAT rate in Estonia?",
          answer:
            "The standard VAT rate in Estonia has been 24% since July 2025 — before that it was 22%.",
        },
        {
          question: "What happens if a gift is worth more than €45?",
          answer:
            "According to Omniva, Estonia's postal operator, such a gift is charged VAT and customs duty, plus a service fee, because a customs agent is involved in clearing it.",
        },
        {
          question: "Can I send Georgian products to Estonia?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Tallinn or Tartu?",
          answer:
            "Yes. We deliver to any city, town or village in Estonia — just give us the recipient's full address when you order.",
        },
        {
          question: "How do I start sending a parcel?",
          answer:
            "Get in touch and tell us the approximate weight of the parcel, what is inside it, and the destination city in Estonia.",
        },
      ],
      cta: {
        heading: "Send your parcel from Georgia to Estonia with Parcello",
        body: "Send a gift, personal belongings or other permitted goods to family, friends and relatives in Estonia.",
        emphasis:
          "Message us today and find out the cost of sending your parcel to Estonia.",
      },
    },
  },
};

export const countriesEn: Country[] = countries.map((country) => {
  const translated = copy[country.slug];

  return {
    ...country,
    ...translated,
    // `source` and `verifiedOn` survive because the Georgian fact is spread first.
    facts: country.facts.map((fact) => ({ ...fact, ...factCopy[fact.id] })),
    content: {
      ...translated.content,
      // Narrative citations are positional, so English keeps the same block order.
      narrative: translated.content.narrative?.map((block, index) => ({
        ...block,
        sources: country.content?.narrative?.[index]?.sources,
      })),
    },
  };
});

export const getCountryEn = (slug: string): Country | undefined =>
  countriesEn.find((country) => country.slug === slug);

export function relatedCountriesEn(slug: string, limit = 3): Country[] {
  const index = countriesEn.findIndex((country) => country.slug === slug);
  if (index === -1) return countriesEn.slice(0, limit);
  return [
    ...countriesEn.slice(index + 1),
    ...countriesEn.slice(0, index),
  ].slice(0, limit);
}
