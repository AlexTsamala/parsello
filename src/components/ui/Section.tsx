import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  /** Alternating page rhythm: white by default, light grey to separate blocks. */
  tone?: "white" | "surface" | "dark";
  id?: string;
  className?: string;
};

const tones = {
  white: "bg-white text-charcoal",
  surface: "bg-surface text-charcoal",
  dark: "bg-charcoal text-white",
} as const;

export function Section({ children, tone = "white", id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={[tones[tone], "py-16 md:py-24", className].filter(Boolean).join(" ")}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  title: string;
  description?: string;
  /** Section headings are h2 by default; the page's single h1 lives in the hero. */
  as?: "h1" | "h2";
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  description,
  as: Tag = "h2",
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      <Tag className="text-2xl font-bold md:text-4xl">{title}</Tag>
      {description ? (
        <p className="mt-4 text-base text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
