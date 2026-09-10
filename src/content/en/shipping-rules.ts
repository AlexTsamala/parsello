import { euImportRules, type ResearchedFact } from "../shipping-rules";

/**
 * English wording for the researched EU import rules.
 *
 * PROVENANCE (CLAUDE.md §1 rules 10 and 11): only `title` and `body` are
 * translated. `source` and `verifiedOn` are inherited from the Georgian record
 * by the mapping below, so an English fact physically cannot exist without the
 * citation its Georgian twin was checked against, and re-verifying one date
 * updates both languages at once.
 *
 * These describe the world, not Parcello. Keep them that way in translation —
 * "the EU charges VAT" must never become "we handle VAT for you".
 */
type FactCopy = { title: string; body: string };

const copy: Record<string, FactCopy> = {
  "customs-clearance": {
    title: "Parcels go through customs",
    body: "Georgia is not a member of the European Union, so a parcel sent to Europe goes through customs when it enters the EU. The recipient may be charged value added tax (VAT) and, in some cases, customs duty as well.",
  },
  "gift-relief-45": {
    title: "Gifts under €45 are exempt",
    body: "When one private individual sends a parcel to another for personal or family use and its value does not exceed €45, the consignment is exempt from customs duty and VAT. The relief applies only to occasional, non-commercial gifts — a birthday parcel, for example. If the value exceeds €45, VAT is charged on the whole consignment.",
  },
  "duty-july-2026": {
    title: "A new rule applies from 1 July 2026",
    body: "The European Union has abolished the customs duty exemption for consignments valued under €150. In its place, from 1 July 2026 a flat customs duty of €3 applies, calculated per tariff line rather than per parcel. The rule is aimed primarily at consignments from online shopping and is temporary — it runs until 1 July 2028.",
  },
  "animal-products": {
    title: "Meat and dairy are prohibited",
    body: "Bringing meat and dairy products into the European Union from outside it is prohibited, to prevent the spread of animal diseases. Small quantities are excepted: up to 2 kg of honey and other products of animal origin that are neither meat nor dairy, and up to 2 kg of infant food and food required for medical reasons. Undeclared products are liable to be seized and destroyed.",
  },
  "alcohol-tobacco": {
    title: "Separate rules apply to alcohol and tobacco",
    body: "Gift relief does not fully cover alcohol and tobacco: VAT and excise duty are charged on these products regardless. Relief from customs duty applies only to strictly limited quantities — 50 cigarettes, or one litre of spirits, for example.",
  },
};

export const euImportRulesEn: ResearchedFact[] = euImportRules.map((fact) => ({
  ...fact,
  ...copy[fact.id],
}));
