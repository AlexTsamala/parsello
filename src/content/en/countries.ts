import {
  countries,
  type Country,
  type CountryContent,
  type CountrySlug,
} from "../countries";

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
};

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
            body: "It goes on to the recipient you named in Poland.",
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
        heading: "Sending parcels to cities across Poland",
        intro:
          "With Parcello you can send a parcel to cities throughout Poland, including:",
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
          answer: "Delivery time to Poland is 2 weeks.",
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
            body: "It goes on to the recipient you named in Germany.",
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
        heading: "Sending a parcel to cities across Germany",
        intro:
          "Parcels can be sent to destinations throughout Germany, including major cities such as:",
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
          answer:
            "Delivery time depends on the route and the service chosen. We will confirm the expected time with you before your order is finalised.",
        },
        {
          question: "Can I send Georgian products to Germany?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Berlin, Frankfurt or Munich?",
          answer:
            "Yes, and not only those. We send parcels to any city in Germany, wherever it is.",
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
            body: "It goes on to the recipient you named in France.",
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
        heading: "Sending a parcel to cities across France",
        intro:
          "With Parcello you can send a parcel to destinations throughout France, including cities such as:",
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
          answer:
            "Delivery time depends on the route and the service chosen. We will confirm the expected time with you before your order is finalised.",
        },
        {
          question: "Can I send Georgian products to France?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Paris or another city?",
          answer:
            "Send us the recipient's city in France and we will confirm what the service can do.",
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
            body: "It goes on to the recipient you named in Hungary.",
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
        heading: "Sending a parcel to cities across Hungary",
        intro:
          "Parcels can be sent to destinations throughout Hungary, including:",
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
          answer:
            "Delivery time depends on the route and the service chosen. We will confirm the expected time with you before your order is finalised.",
        },
        {
          question: "Can I send Georgian products to Hungary?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Budapest?",
          answer:
            "Send us the recipient's full address in Budapest and we will confirm what the service can do.",
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
            body: "It goes on to the recipient you named in Bulgaria.",
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
        heading: "Sending a parcel to cities across Bulgaria",
        intro:
          "Parcels can be sent to destinations throughout Bulgaria, including cities such as:",
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
          answer:
            "Delivery time depends on the route and the service chosen. We will confirm the expected time with you before your order is finalised.",
        },
        {
          question: "Can I send Georgian products to Bulgaria?",
          answer:
            "Some products can be sent, though restrictions may apply to particular items. Tell us what you would like to send and we will help you check.",
        },
        {
          question: "Can I send a parcel to Sofia or Varna?",
          answer:
            "Send us the recipient's city and full address in Bulgaria and we will confirm what the service can do.",
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
            body: "It goes on to the recipient you named in Czechia.",
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
        heading: "Sending a parcel to cities across Czechia",
        intro:
          "Parcels can be sent to destinations throughout Czechia, including cities such as:",
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
          answer:
            "Delivery time depends on the route and the service chosen. We will confirm the expected time with you before your order is finalised.",
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
            "Send us the recipient's city and full address in Czechia and we will confirm what the service can do.",
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
            body: "It goes on to the recipient you named in Slovakia.",
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
        heading: "Sending a parcel to cities across Slovakia",
        intro:
          "Parcels can be sent to destinations throughout Slovakia, including cities such as:",
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
          answer:
            "Delivery time depends on the route and the service chosen. We will confirm the expected time with you before your order is finalised.",
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
            "Send us the recipient's city and full address in Slovakia and we will confirm what the service can do.",
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
