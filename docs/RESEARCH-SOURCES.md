# Research sources

Every published fact about destination countries traces to a source here. Nothing on the site states a customs rule that isn't in this list.

**Verified:** 2026-09-01 · **Re-check:** these rules change; verify before relying on them commercially.

## The two content layers

The site keeps these strictly separate, in code and in the UI:

| Layer | Where it lives | Who supplies it |
|---|---|---|
| Researched facts about a destination | `src/content/shipping-rules.ts`, `facts[]` in `src/content/countries.ts` | Research, with a source URL on every item |
| What Parcello does / offers / charges | `src/content/business.ts`, `parcello` field per country | The business only — never researched or inferred |

A researched fact describes the world. A Parcello claim describes the business. They must never be blended into one sentence.

## EU-wide rules

| Fact | Source |
|---|---|
| Parcels from non-EU countries clear customs; VAT may apply | [European Commission — Taxation and Customs Union](https://taxation-customs.ec.europa.eu/) |
| €45 gift relief between private individuals; VAT applies to the whole consignment above it | [Irish Revenue — gift consignment rules](https://www.revenue.ie/en/customs/individuals/relief-gifts-low-value/rules-gifts.aspx) (national statement of Council Regulation 1186/2009) |
| Alcohol and tobacco excluded from gift relief for VAT/excise; strict quantity limits for duty relief | [Irish Revenue](https://www.revenue.ie/en/customs/individuals/relief-gifts-low-value/rules-gifts.aspx) |
| €150 duty exemption abolished; €3 flat duty per tariff line from 1 July 2026 until 1 July 2028 | [European Commission](https://commission.europa.eu/news-and-media/news/ensuring-fairness-and-safety-eur3-customs-duty-low-value-parcels-2026-06-29_en), [Council of the EU](https://www.consilium.europa.eu/en/press/press-releases/2026/02/11/council-gives-final-green-light-to-new-customs-duty-rules-for-small-parcels/) |
| Meat and dairy banned from non-EU countries; 2 kg exceptions for honey, infant and medical foods | [Your Europe](https://europa.eu/youreurope/citizens/travel/carry/meat-dairy-animal/index_en.htm) |

## Per country

| Country | Facts published | Source |
|---|---|---|
| Poland | VAT 23%; outside eurozone, uses złoty (PLN) | [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) · [KAS](https://www.gov.pl/web/kas) |
| Germany | VAT 19%; national guidance on animal-origin food imports | [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) · [Zoll](https://www.zoll.de) · [BMLEH](https://www.bmleh.de/EN/topics/consumer-protection/food-hygiene-safety/importation-products-animal-origin.html) |
| France | VAT 20%; euro | [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) · [Douane](https://www.douane.gouv.fr) |
| Hungary | VAT 27% — highest in the EU; outside eurozone, uses forint (HUF) | [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) · [NAV](https://nav.gov.hu) |
| Italy | VAT 22%; euro | [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) · [ADM](https://www.adm.gov.it) |
| Bulgaria | Adopted the euro 1 Jan 2026 at 1 EUR = 1.95583 BGN; sole legal tender since 1 Feb 2026; VAT 20% | [Access2Markets](https://trade.ec.europa.eu/access-to-markets/en/news/bulgaria-adopts-euro-1-january-2026) · [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) |

All customs-authority URLs were checked and return HTTP 200 as of 2026-09-01.

## Deliberately not published

- **Whether the €3 duty applies to private gifts.** The Commission and Council materials frame it around e-commerce and do not state the treatment of gift consignments. The site says the rule mainly concerns e-commerce and does not claim gifts are exempt.
- **Whether the meat/dairy ban applies identically to postal parcels.** The Your Europe page is written for travellers. The site states the prohibition on bringing these goods into the EU and directs readers to the destination's customs authority rather than asserting postal specifics.
- **Country-level delivery times, prices, and prohibited-item lists.** Business information — awaiting Parcello.
