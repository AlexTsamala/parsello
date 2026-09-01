import type { ResearchedFact } from "@/content/shipping-rules";

/**
 * Renders the RESEARCHED layer only — official import rules, each with its
 * source. Framed visibly as external information so a reader can tell a customs
 * rule from a Parcello claim (CLAUDE.md §1 rule 10). Never render a Parcello
 * claim through this component.
 */
export function CountryFacts({
  facts,
  countryNameIn,
}: {
  facts: ResearchedFact[];
  /** Already inflected, e.g. "პოლონეთში" — never build this by appending "ში". */
  countryNameIn: string;
}) {
  if (facts.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold md:text-3xl">
        რა უნდა იცოდეთ {countryNameIn} გაგზავნამდე
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        ქვემოთ მოცემულია ევროკავშირის ოფიციალური წესები, რომლებიც ამანათის მიღებაზე
        მოქმედებს. ეს Parcello-ს პირობები არ არის — თითოეულ პუნქტს ახლავს პირველწყარო.
      </p>

      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {facts.map((fact) => (
          <li
            key={fact.id}
            className="rounded-xl border border-line bg-white p-6"
          >
            <h3 className="font-semibold">{fact.title}</h3>
            <p className="mt-2 text-sm text-muted">{fact.body}</p>
            <a
              href={fact.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs text-muted underline underline-offset-4 transition-colors hover:text-brand"
            >
              წყარო: {fact.source.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
