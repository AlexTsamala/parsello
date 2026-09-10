/**
 * Interface copy — everything that is chrome rather than business content.
 *
 * These strings used to sit inline in JSX. They live here so the English site
 * can supply its own without forking a single component: `src/content/en/ui.ts`
 * satisfies this same `UiStrings` type, so a string that is added here and not
 * there fails the build rather than shipping Georgian text on an English page.
 *
 * Business facts do not belong in this file — they belong in `business.ts`.
 */

export type Benefit = { title: string; body: string };

export type UiStrings = {
  skipToContent: string;

  aria: {
    mainNav: string;
    mobileNav: string;
    footerNav: string;
    footerDestinations: string;
    breadcrumb: string;
    openMenu: string;
    closeMenu: string;
    logoHome: string;
    cookieBanner: string;
    /** Whole phrase — the number is interpolated, never the grammar. */
    callNumber: (phone: string) => string;
  };

  hero: {
    h1: string;
    /** Brand name is interpolated, not concatenated — word order differs. */
    lead: (brand: string) => string;
    ctaSend: string;
    ctaHowItWorks: string;
    callPrefix: string;
    imageAlt: string;
  };

  trust: {
    heading: string;
    description: string;
    benefits: Benefit[];
  };

  howItWorks: {
    heading: string;
    description: string;
    allServices: string;
  };

  countriesSection: {
    heading: string;
  };

  pricingSection: {
    heading: string;
    facebookCta: string;
  };

  faqSection: {
    heading: string;
    allFaqs: string;
  };

  finalCta: {
    heading: string;
    body: string;
    cta: string;
  };

  footer: {
    tagline: string;
    pagesHeading: string;
    destinationsHeading: string;
  };

  countryFacts: {
    /** Frames the researched layer as external rules, not Parcello's terms. */
    intro: string;
  };

  cookie: {
    body: string;
    decline: string;
    accept: string;
  };
};

export const ui: UiStrings = {
  skipToContent: "გადასვლა მთავარ კონტენტზე",

  aria: {
    mainNav: "მთავარი ნავიგაცია",
    mobileNav: "მობილური ნავიგაცია",
    footerNav: "ფუტერის ნავიგაცია",
    footerDestinations: "მიმართულებები",
    breadcrumb: "ნავიგაციის გზა",
    openMenu: "მენიუს გახსნა",
    closeMenu: "მენიუს დახურვა",
    logoHome: "Parcello Georgia — მთავარი გვერდი",
    cookieBanner: "ქუქი-ფაილების შეტყობინება",
    callNumber: (phone) => `დარეკვა ნომერზე ${phone}`,
  },

  hero: {
    h1: "ამანათების გაგზავნა და მიღება ევროპიდან",
    lead: (brand) =>
      `${brand} გეხმარებათ ამანათის მარტივად გაგზავნაში საქართველოდან ევროპის მიმართულებით და ევროპიდან მიღებაში.`,
    ctaSend: "ამანათის გაგზავნა",
    ctaHowItWorks: "როგორ მუშაობს?",
    callPrefix: "დაგვირეკეთ:",
    imageAlt: "Parcello-ს კურიერი ამანათს იბარებს მომხმარებლისგან",
  },

  trust: {
    heading: "რატომ Parcello?",
    description:
      "ევროპაში ამანათის გაგზავნა შეიძლება რთულად ჩანდეს, მაგრამ Parcello-ს მიზანია პროცესი თქვენთვის მაქსიმალურად მარტივი გახადოს.",
    benefits: [
      {
        title: "სწრაფი კომუნიკაცია",
        body: "თქვენს კითხვებსა და შეკვეთაზე სწრაფად ვპასუხობთ ტელეფონით ან Facebook-ზე.",
      },
      {
        title: "მარტივი პროცესი",
        body: "ამანათის გაგზავნა რამდენიმე გასაგები ნაბიჯით სრულდება.",
      },
      {
        title: "კურიერი ან ჩაბარება",
        body: "ამანათი შეგიძლიათ კურიერს გადააბაროთ ან თავად ჩააბაროთ — როგორც თქვენთვის მოსახერხებელია.",
      },
      {
        title: "ევროპის მიმართულებები",
        body: "ამანათებს ვაგზავნით მთელი ევროპის მასშტაბით  — ძირითადი მიმართულებებით და მათ მიღმაც.",
      },
    ],
  },

  howItWorks: {
    heading: "როგორ მუშაობს Parcello?",
    description: "ოთხი ნაბიჯი შეკვეთიდან ამანათის გამგზავრებამდე.",
    allServices: "ყველა სერვისი",
  },

  countriesSection: {
    heading: "სად ვაგზავნით ამანათებს?",
  },

  pricingSection: {
    heading: "ამანათის გაგზავნის ფასი",
    facebookCta: "Facebook-ზე მოწერა",
  },

  faqSection: {
    heading: "ხშირად დასმული კითხვები",
    allFaqs: "ყველა კითხვა და პასუხი",
  },

  finalCta: {
    heading: "გსურთ ამანათის გაგზავნა ევროპაში?",
    body: "დაიწყეთ შეკვეთა Parcello-სთან — დაგვირეკეთ ან მოგვწერეთ Facebook-ზე.",
    cta: "ამანათის გაგზავნა",
  },

  footer: {
    tagline: "ამანათების გაგზავნა საქართველოდან ევროპის მიმართულებით.",
    pagesHeading: "გვერდები",
    destinationsHeading: "მიმართულებები",
  },

  countryFacts: {
    intro:
      "ქვემოთ მოცემულია ევროკავშირის ოფიციალური წესები, რომლებიც ამანათის მიღებაზე მოქმედებს. ეს Parcello-ს პირობები არ არის.",
  },

  cookie: {
    body: "ვიყენებთ ქუქი-ფაილებს, რომ გავიგოთ როგორ სარგებლობენ ვიზიტორები საიტით. ეს გვეხმარება საიტის გაუმჯობესებაში.",
    decline: "უარი",
    accept: "ვეთანხმები",
  },
};
