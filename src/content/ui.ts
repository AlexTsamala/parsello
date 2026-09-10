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

  countryPage: {
    otherDestinations: string;
  };

  cookie: {
    body: string;
    decline: string;
    accept: string;
  };

  /** Labels reused across several pages, so they cannot drift apart. */
  common: {
    home: string;
    sendParcel: string;
    facebookCta: string;
  };

  pages: {
    home: Meta;
    prices: Meta & {
      breadcrumb: string;
      h1: string;
      howCalculatedHeading: string;
      howCalculatedBody: string;
      whatToSendHeading: string;
      whatToSendItems: string[];
      quoteBoxHeading: string;
      byDestinationHeading: string;
      byDestinationDescription: string;
    };
    countries: Meta & {
      breadcrumb: string;
      h1: string;
      heroAlt: string;
      listHeading: string;
      listDescription: string;
    };
    faq: Meta & {
      breadcrumb: string;
      h1: string;
      lead: string;
      rulesHeading: string;
      /** "See also: <a>…</a> and <a>…</a>." — split so word order can differ. */
      seeAlso: {
        prefix: string;
        whatCanISend: string;
        conjunction: string;
        services: string;
        suffix: string;
      };
      ctaHeading: string;
      ctaBody: string;
    };
    contact: Meta & {
      breadcrumb: string;
      h1: string;
      lead: string;
      orderDetailsHeading: string;
      orderDetails: { label: string; hint: string }[];
      channelsHeading: string;
      labels: {
        phone: string;
        email: string;
        address: string;
        workingHours: string;
      };
    };
    whatCanISend: Meta & {
      breadcrumb: string;
      h1: string;
      lead: string;
      heroAlt: string;
      prohibitedHeading: string;
      prohibitedNote: string;
      packingHeading: string;
      ctaHeading: string;
      ctaBody: string;
    };
    services: Meta & {
      breadcrumb: string;
      h1: string;
      lead: string;
      /**
       * Wraps a bolded delivery time: `<before> <strong>2–3 weeks</strong>
       * <after>`. Two halves rather than one template because the time sits in
       * the middle of the Georgian sentence and near the end of the English one.
       */
      deliveryBefore: string;
      deliveryAfter: string;
      ctaHeading: string;
      ctaBody: string;
    };
  };
};

/** Every page carries its own title and description (CLAUDE.md §6). */
export type Meta = { metaTitle: string; metaDescription: string };

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

  countryPage: {
    otherDestinations: "სხვა მიმართულებები",
  },

  cookie: {
    body: "ვიყენებთ ქუქი-ფაილებს, რომ გავიგოთ როგორ სარგებლობენ ვიზიტორები საიტით. ეს გვეხმარება საიტის გაუმჯობესებაში.",
    decline: "უარი",
    accept: "ვეთანხმები",
  },

  common: {
    home: "მთავარი",
    sendParcel: "ამანათის გაგზავნა",
    facebookCta: "Facebook-ზე მოწერა",
  },

  pages: {
    home: {
      metaTitle: "ამანათების გაგზავნა ევროპაში",
      metaDescription:
        "გაგზავნეთ ამანათი საქართველოდან ევროპაში მარტივად და კომფორტულად. Parcello გთავაზობთ ამანათების გაგზავნის სერვისს ევროპის სხვადასხვა ქვეყანაში.",
    },

    prices: {
      metaTitle: "ამანათის გაგზავნის ფასი",
      metaDescription:
        "რამდენი ღირს ამანათის გაგზავნა საქართველოდან ევროპაში? ფასი დამოკიდებულია ქვეყანასა და წონაზე — მოგვწერეთ და ზუსტ ფასს დაგიანგარიშებთ.",
      breadcrumb: "ფასები",
      h1: "ამანათის გაგზავნის ფასი",
      howCalculatedHeading: "როგორ ითვლება ფასი?",
      howCalculatedBody:
        "ფასზე ორი ძირითადი რამ მოქმედებს: რომელ ქვეყანაში იგზავნება ამანათი და რამდენია მისი წონა. ვინაიდან ტარიფები იცვლება, ფასს თითოეული შეკვეთისთვის ინდივიდუალურად ვთვლით — ასე თავიდან ავიცილებთ მოძველებულ ინფორმაციას.",
      whatToSendHeading: "რა მოგვწეროთ?",
      whatToSendItems: [
        "დანიშნულების ქვეყანა და ქალაქი",
        "ამანათის დაახლოებითი წონა",
        "ამანათის შიგთავსი",
      ],
      quoteBoxHeading: "ფასის გასაგებად",
      byDestinationHeading: "ფასი მიმართულების მიხედვით",
      byDestinationDescription:
        "აირჩიეთ ქვეყანა და მოგვწერეთ — ზუსტ ფასს დაგიანგარიშებთ.",
    },

    countries: {
      metaTitle: "მიმართულებები — სად ვაგზავნით ამანათებს",
      metaDescription:
        "Parcello ამანათებს ევროპის მასშტაბით აგზავნის. გაეცანით ძირითად მიმართულებებს და თითოეული ქვეყნის დეტალურ ინფორმაციას.",
      breadcrumb: "მიმართულებები",
      h1: "სად ვაგზავნით ამანათებს?",
      heroAlt: "Parcello-ს ამანათები თბილისში, მშვიდობის ხიდის ფონზე",
      listHeading: "ძირითადი მიმართულებები",
      listDescription:
        "აირჩიეთ ქვეყანა და გაეცანით საბაჟო წესებსა და გაგზავნის დეტალებს.",
    },

    faq: {
      metaTitle: "ხშირად დასმული კითხვები",
      metaDescription:
        "პასუხები ხშირად დასმულ კითხვებზე ევროპაში ამანათის გაგზავნაზე — ფასი, ვადები, შეფუთვა, დასაშვები ნივთები და შეკვეთის დაწყება.",
      breadcrumb: "ხშირად დასმული კითხვები",
      h1: "ხშირად დასმული კითხვები",
      lead: "თუ პასუხს ვერ იპოვით, დაგვიკავშირდით — სიამოვნებით დაგეხმარებით.",
      rulesHeading: "ევროკავშირის საბაჟო წესები",
      seeAlso: {
        prefix: "იხილეთ ასევე:",
        whatCanISend: "რისი გაგზავნა შეიძლება",
        conjunction: "და",
        services: "როგორ მუშაობს Parcello",
        suffix: ".",
      },
      ctaHeading: "გაქვთ კითხვა?",
      ctaBody: "დაგვირეკეთ ან მოგვწერეთ Facebook-ზე — ჩვენ მაშინვე გიპასუხებთ.",
    },

    contact: {
      metaTitle: "კონტაქტი და ამანათის გაგზავნა",
      metaDescription:
        "დაიწყეთ ამანათის გაგზავნა Parcello-სთან — დაგვირეკეთ ან მოგვწერეთ Facebook-ზე. მოგვწერეთ ქვეყანა, წონა და შიგთავსი, და ზუსტ ფასს დაგიანგარიშებთ.",
      breadcrumb: "კონტაქტი",
      h1: "ამანათის გაგზავნა",
      lead: "ამანათის გასაგზავნად დაგვირეკეთ ან მოგვწერეთ Facebook-ზე. ქვემოთ ჩამოთვლილი ინფორმაცია დაგვეხმარება, რომ ზუსტი ფასი მალევე გითხრათ.",
      orderDetailsHeading: "რა მოგვწეროთ შეკვეთისას",
      orderDetails: [
        { label: "სახელი და გვარი", hint: "ვისთან დავუკავშირდეთ" },
        { label: "ტელეფონი", hint: "თქვენი საკონტაქტო ნომერი" },
        {
          label: "დანიშნულების ქვეყანა და ქალაქი",
          hint: "სად იგზავნება ამანათი",
        },
        { label: "ამანათის დაახლოებითი წონა", hint: "ფასის დასათვლელად" },
        { label: "ამანათის შიგთავსი", hint: "რა ნივთებია ყუთში" },
        {
          label: "ამანათის აღების ადგილი",
          hint: "კურიერს გადააბარებთ თუ თავად ჩააბარებთ",
        },
      ],
      channelsHeading: "საკონტაქტო არხები",
      labels: {
        phone: "ტელეფონი",
        email: "ელ. ფოსტა",
        address: "მისამართი",
        workingHours: "სამუშაო საათები",
      },
    },

    whatCanISend: {
      metaTitle: "რისი გაგზავნა შეიძლება ევროპაში",
      metaDescription:
        "რა ნივთების გაგზავნა შეიძლება საქართველოდან ევროპაში — ჩურჩხელა, ყველი, ტყემალი, ღვინო, ტანსაცმელი და პირადი ნივთები. გაიგეთ შეზღუდვები და შეფუთვის წესები.",
      breadcrumb: "რისი გაგზავნა შეიძლება",
      h1: "რისი გაგზავნა შეიძლება ევროპაში?",
      lead: "ქართული პროდუქტი, ტანსაცმელი, საჩუქრები და პირადი ნივთები — გაუგზავნეთ ოჯახს, მეგობრებსა და ახლობლებს ევროპაში.",
      heroAlt: "Parcello-ს ამანათი, მზად ევროპაში გასაგზავნად",
      prohibitedHeading: "რისი გაგზავნა არ შეიძლება?",
      prohibitedNote:
        "თუ ეჭვი გაქვთ კონკრეტულ ნივთზე, უბრალოდ მოგვწერეთ — გადავამოწმებთ და გიპასუხებთ.",
      packingHeading: "როგორ შევფუთოთ ამანათი?",
      ctaHeading: "გსურთ ამანათის გაგზავნა?",
      ctaBody:
        "მოგვწერეთ ამანათის შიგთავსი და დანიშნულების ქვეყანა — ზუსტ ფასს დაგიანგარიშებთ.",
    },

    services: {
      metaTitle: "სერვისები",
      metaDescription:
        "Parcello-ს სერვისები — ამანათის გაგზავნა საქართველოდან ევროპაში, ამანათის გამოგზავნა საბერძნეთიდან და პოლონეთიდან საქართველოში, და ონლაინ შოპინგი ევროპიდან.",
      breadcrumb: "სერვისები",
      h1: "Parcello-ს სერვისები",
      lead: "ვაგზავნით ამანათებს საქართველოდან ევროპაში, ვიღებთ ამანათებს საბერძნეთიდან და პოლონეთიდან, და გეხმარებით ევროპულ ონლაინ მაღაზიებში შეძენილი ნივთების მიღებაში.",
      deliveryBefore: "ამანათი ადრესატთან ჩადის გაგზავნიდან",
      deliveryAfter: "ვადაში.",
      ctaHeading: "რომელი სერვისი გჭირდებათ?",
      ctaBody:
        "მოგვწერეთ, საიდან სად იგზავნება ამანათი — დანარჩენში ჩვენ დაგეხმარებით.",
    },
  },
};
