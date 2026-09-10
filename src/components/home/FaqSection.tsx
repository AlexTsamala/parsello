import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { FaqItem } from "@/content/faq";
import { ui } from "@/content/ui";

/**
 * Native <details>/<summary> — accessible and keyboard-operable with zero
 * client JavaScript (CLAUDE.md §7).
 */
export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <Section id="faq">
      <SectionHeading title={ui.faqSection.heading} />

      <div className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold marker:hidden">
              {item.question}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="shrink-0 text-muted transition-transform group-open:rotate-180"
              >
                <path
                  d="m6 9 6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <p className="pb-5 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>

      <div className="mt-8">
        <Button href="/faq" variant="secondary">
          {ui.faqSection.allFaqs}
        </Button>
      </div>
    </Section>
  );
}
