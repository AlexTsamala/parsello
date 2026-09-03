import { business } from "./business";

/** Shared by the homepage and every country page — one source, no drift. */
export const howItWorksSteps = [
  {
    title: "შეუკვეთე მომსახურება",
    body: "დაგვიკავშირდით ტელეფონით ან მოგვწერეთ Facebook-ზე და შეათანხმეთ დეტალები.",
  },
  {
    title: "მოამზადე ამანათი",
    body: "შეფუთეთ ნივთები ისე, რომ ტრანსპორტირებისას დაცული იყოს.",
  },
  {
    title: "ჩვენ ვიღებთ ამანათს",
    body: "ამანათს კურიერს გადააბარებთ ან თავად ჩააბარებთ.",
  },
  {
    title: "ამანათი მიემგზავრება ევროპაში",
    body: `ამანათი ევროპის მიმართულებით იგზავნება და ადრესატთან ჩადის გაგზავნიდან ${business.deliveryTimeGenitive} ვადაში.`,
  },
];
