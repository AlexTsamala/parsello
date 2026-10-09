import Link from "next/link";

import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";
import { groupByPrice } from "@/lib/rates";

/**
 * The per-kg rates, one row per price (CLAUDE.md §1 rule 2). Used on /prices
 * and the homepage; destinations with their own page link to it.
 */
export function RateTable({ locale }: { locale: Locale }) {
  const { ui, business, getCountry } = getContent(locale);
  const copy = ui.pages.prices;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <table className="w-full text-left">
        <caption className="sr-only">{copy.ratesHeading}</caption>
        <thead className="bg-surface text-sm text-muted">
          <tr>
            <th scope="col" className="px-5 py-3 font-medium">
              {ui.common.pricePerKg}
            </th>
            <th scope="col" className="px-5 py-3 font-medium">
              {copy.countriesColumn}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {groupByPrice(business.pricing.rates).map(([perKg, rates]) => (
            <tr key={perKg} className="align-top">
              <th
                scope="row"
                className="whitespace-nowrap px-5 py-4 text-xl font-bold"
              >
                {perKg} {business.pricing.currency}
              </th>
              <td className="px-5 py-4">
                <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                  {rates.map((rate) => {
                    const country = getCountry(rate.id);

                    return (
                      <li
                        key={rate.id}
                        className="flex items-center gap-2 whitespace-nowrap"
                      >
                        <span className="text-xl" aria-hidden="true">
                          {rate.flag}
                        </span>
                        {country ? (
                          <Link
                            href={localePath(locale, `/countries/${country.slug}`)}
                            className="underline decoration-line underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                          >
                            {rate.name}
                          </Link>
                        ) : (
                          rate.name
                        )}
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
