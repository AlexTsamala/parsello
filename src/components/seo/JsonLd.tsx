/**
 * Renders JSON-LD. Server Component — no client JS.
 * The payload comes only from our own typed builders in `@/lib/schema`,
 * never from user input, so serialising it here is safe.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
