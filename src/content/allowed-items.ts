/**
 * What customers actually send with Parcello — the business's own list, kept
 * verbatim in meaning (CLAUDE.md §1: Parcello claims come from the business).
 *
 * ⚠️ UNRESOLVED CONFLICT — see docs/OPEN-QUESTIONS.md #15.
 * This list includes cheese and "all kinds of food products". EU rules prohibit
 * importing meat and dairy from non-EU countries, and cap honey at 2 kg
 * (`animal-products` in shipping-rules.ts). Until the business confirms how it
 * handles this in practice, do NOT publish this list on the same page as the
 * animal-products rule, and do not soften or edit the business's list to fit
 * the research. Ask instead.
 */

export type AllowedItem = {
  emoji: string;
  label: string;
  /** Set where an EU rule may affect this category. */
  euNote?: string;
};

export const allowedItems: AllowedItem[] = [
  { emoji: "🍇", label: "ღვინო", euNote: "alcohol: excise and quantity limits apply" },
  { emoji: "🫒", label: "ტყემალი" },
  { emoji: "🧀", label: "ყველი", euNote: "dairy: EU import prohibition — needs clarification" },
  { emoji: "🍯", label: "თაფლი, სუნელები", euNote: "honey: 2 kg limit" },
  { emoji: "🌰", label: "ჩურჩხელა, თხილი, ჩირი" },
  { emoji: "🫓", label: "ყველა სახის პროდუქტი", euNote: "broad food claim — needs clarification" },
  { emoji: "👕", label: "ტანსაცმელი და ფეხსაცმელი" },
  { emoji: "🎁", label: "საჩუქრები და პირადი ნივთები" },
  { emoji: "📚", label: "წიგნები და აქსესუარები" },
  { emoji: "🧴", label: "ყოველდღიური მოხმარების ნივთები" },
];

/** Categories with no EU complication — safe to publish as-is today. */
export const uncontestedItems = allowedItems.filter((item) => !item.euNote);
