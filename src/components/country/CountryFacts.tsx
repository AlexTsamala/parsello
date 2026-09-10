import type { ResearchedFact } from "@/content/shipping-rules";

/**
 * Renders the RESEARCHED layer only — official import rules. Framed visibly as
 * external information so a reader can tell a customs rule from a Parcello
 * claim (CLAUDE.md §1 rule 10). Never render a Parcello claim through this
 * component.
 *
 * `fact.source` is deliberately NOT rendered — the business asked for citation
 * links off the page. The data stays so every fact remains traceable; see
 * docs/RESEARCH-SOURCES.md.
 */
export function CountryFacts({
  facts,
  heading,
  intro,
}: {
  facts: ResearchedFact[];
  /**
   * The finished heading, e.g. "რა უნდა იცოდეთ პოლონეთში გაგზავნამდე".
   *
   * Passed whole rather than assembled here from a country name: Georgian
   * needs the locative and English reverses the word order, so there is no
   * one composition this component could perform for both.
   */
  heading: string;
  intro: string;
}) {
  if (facts.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold md:text-3xl">{heading}</h2>
      <p className="mt-3 max-w-2xl text-muted">{intro}</p>

      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {facts.map((fact) => (
          <li
            key={fact.id}
            className="rounded-xl border border-line bg-white p-6"
          >
            <h3 className="font-semibold">{fact.title}</h3>
            <p className="mt-2 text-sm text-muted">{fact.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
