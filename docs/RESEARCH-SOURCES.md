# Research sources

Every published fact about destination countries traces to a source here. Nothing on the site states a customs rule that isn't in this list.

**Verified:** 2026-09-01 (Czechia and Slovakia: 2026-09-08 · Netherlands: 2026-09-12 · Finland and Sweden: 2026-09-29) · **Re-check:** these rules change; verify before relying on them commercially.

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
| Bulgaria | Adopted the euro 1 Jan 2026 at 1 EUR = 1.95583 BGN; sole legal tender since 1 Feb 2026; VAT 20% | [Access2Markets](https://trade.ec.europa.eu/access-to-markets/en/news/bulgaria-adopts-euro-1-january-2026) · [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) |
| Czechia | Outside the eurozone, uses the koruna (CZK), no euro target date; VAT 21%; diplomatic relations since 1 Jan 1993, Czech embassy in Tbilisi 2000, Georgian embassy in Prague 2006; diaspora association "IVERIA" founded 2014 | [European Commission — Czechia and the euro](https://economy-finance.ec.europa.eu/euro/eu-countries-and-euro/czechia-and-euro_en) · [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) · [MFA Georgia](https://mfa.gov.ge/en/bilateral-relations/cz) · [Embassy of Georgia — diaspora](https://czech.mfa.gov.ge/en/diaspora) |
| Slovakia | Adopted the euro 1 Jan 2009 at 1 EUR = 30.1260 SKK; VAT 23%; diplomatic relations since 1 Jan 1993, Georgian embassy in Bratislava 2006, Slovak embassy in Tbilisi 2014; Feb 2023 cooperation protocol recognising Georgia's European perspective; June 2024 political consultations in Bratislava; direct Kutaisi–Bratislava flights from 12 Jan 2026, four times weekly | [European Commission — Slovakia and the euro](https://economy-finance.ec.europa.eu/euro/eu-countries-and-euro/slovakia-and-euro_en) · [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) · [MFA Georgia](https://mfa.gov.ge/en/bilateral-relations/sk) · [Georgia Today](https://georgiatoday.ge/wizz-air-launches-direct-flights-from-kutaisi-to-bratislava/) |

| Netherlands | Founding eurozone member: euro adopted 1 Jan 1999, notes and coins 1 Jan 2002, fixed rate 1 EUR = 2.20371 NLG, guilder ceased to be legal tender 28 Jan 2002; VAT 21%; diplomatic relations since 22 Apr 1992, Dutch embassy in Georgia 2001, Georgian embassy in The Hague; Rotterdam is the EU's largest freight port, 11.8% of total EU port tonnage in 2024, ahead of Antwerp-Bruges and Hamburg | [European Commission — The Netherlands and the euro](https://economy-finance.ec.europa.eu/euro/eu-countries-and-euro/netherlands-and-euro_en) · [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) · [MFA Georgia](https://mfa.gov.ge/en/bilateral-relations/nl) · [Eurostat — Maritime transport of goods, annual data](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Maritime_transport_of_goods_-_annual_data) |
| Finland | Founding eurozone member: joined the EU 1995, euro adopted 1 Jan 1999, notes and coins 1 Jan 2002, fixed rate 1 EUR = 5.94573 FIM, markka legal tender ended 28 Feb 2002; VAT 25.5%, second-highest in the EU after Hungary; gifts from outside the EU must be customs-cleared by the recipient via Finnish Customs, no VAT or Posti handling fee at €45 or less; diplomatic relations since 8 Jul 1992, Georgian embassy in Helsinki since 2011, Finland represented through a non-resident ambassador in Helsinki | [European Commission — Finland and the euro](https://economy-finance.ec.europa.eu/euro/eu-countries-and-euro/finland-and-euro_en) · [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) · [Posti — Customs clearance of gifts](https://www.posti.fi/en/receiving/customs-clearance/gift-clearance) · [MFA Georgia](https://mfa.gov.ge/en/bilateral-relations/fi) |
| Sweden | EU member since 1995, outside the eurozone: krona (SEK), not in ERM II, no euro target date; VAT 25%; Swedish Customs: gifts from outside the EU are duty- and VAT-free up to a total actual value of SEK 600 when they contain no alcohol or tobacco, and the parcel must clearly state it is a gift, its contents and value, and that sender and recipient are private individuals; diplomatic relations established 1918 (First Democratic Republic of Georgia), re-established 19 Sep 1992, 100th anniversary of the Georgian mission in 2018, Georgian embassy in Stockholm 2006, Swedish embassy in Georgia 2010 | [European Commission — Sweden and the euro](https://economy-finance.ec.europa.eu/euro/eu-countries-and-euro/sweden-and-euro_en) · [Tax Foundation 2026](https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/) · [Tullverket — Receiving a gift from outside the EU](https://www.tullverket.se/en/startpage/private/online/sendingorreceivingagift/receivingagiftfromacountryoutsidetheeu.4.311bf4f016e69d6ea0da91.html) · [MFA Georgia](https://mfa.gov.ge/en/bilateral-relations/se) |

Italy was removed as a destination on 2026-09-08; its page and sources came out with it. The Netherlands was added on 2026-09-12, Finland and Sweden on 2026-09-29.

All customs-authority URLs were checked and return HTTP 200 as of 2026-09-01; the Czechia and Slovakia URLs as of 2026-09-08; the Netherlands URLs as of 2026-09-12; the Finland and Sweden URLs as of 2026-09-29 (tullverket.se refuses scripted `curl` with 403 but serves the page to a browser; its text was read and quoted on that date).

## Deliberately not published

- **Whether the €3 duty applies to private gifts.** The Commission and Council materials frame it around e-commerce and do not state the treatment of gift consignments. The site says the rule mainly concerns e-commerce and does not claim gifts are exempt.
- **Whether the meat/dairy ban applies identically to postal parcels.** The Your Europe page is written for travellers. The site states the prohibition on bringing these goods into the EU and directs readers to the destination's customs authority rather than asserting postal specifics.
- **Country-level delivery times, prices, and prohibited-item lists.** Business information — awaiting Parcello.
- **The size of the Georgian community in the Netherlands.** The Germany and France pages carry a diaspora figure because each has one current official source. For the Netherlands the available figures disagree and are stale (a ~2,000 census count from 2006 against 544 Georgian citizens in 2016, measuring different things), so the Dutch page states no number rather than picking one.
- **Finnish Customs pages directly.** tulli.fi blocks automated access, so the recipient-clearance rule is cited from Posti, Finland's national postal operator, and phrased as Posti's explanation.
- **The size of the Georgian community in Finland or Sweden.** No current official figure was found; neither page states a number.
- **Sweden's rules for multi-item gifts above SEK 600.** Tullverket lets the items worth up to SEK 600 stay exempt, which differs from the general EU wording on the FAQ page ("VAT on the whole consignment"). The Swedish page states only the SEK 600 threshold rather than publish two rules that look contradictory.
- **Air links between Georgia and the Netherlands.** The Slovakia page cites a direct Kutaisi–Bratislava route because it was reported by a named outlet with a start date. The Tbilisi–Amsterdam schedules only turned up on commercial flight aggregators, which change without notice — not a citable source.
