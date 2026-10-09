import type { Rate } from "@/content/types";

/** One entry per price, cheapest first, countries in the order the business gave. */
export function groupByPrice(rates: readonly Rate[]): [number, Rate[]][] {
  const tiers = new Map<number, Rate[]>();
  for (const rate of rates) {
    tiers.set(rate.perKg, [...(tiers.get(rate.perKg) ?? []), rate]);
  }
  return [...tiers].sort(([a], [b]) => a - b);
}

/**
 * "Poland, Germany — 15 ₾; France — 18 ₾" for prose such as the FAQ answer.
 * Only names in the nominative and numbers, so no word gets declined.
 */
export function formatRateTiers(rates: readonly Rate[], currency: string): string {
  return groupByPrice(rates)
    .map(
      ([perKg, tier]) =>
        `${tier.map((rate) => rate.name).join(", ")} — ${perKg} ${currency}`,
    )
    .join("; ");
}
