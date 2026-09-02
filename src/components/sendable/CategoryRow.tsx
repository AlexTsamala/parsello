import Image from "next/image";

import type { SendableCategory } from "@/content/allowed-items";
import { publicImageExists } from "@/lib/assets";

/**
 * One alternating photo/text row. Photo side swaps each row via `flip`.
 * The reveal is CSS-only (see `.reveal` in globals.css) — no client JS.
 */
export function CategoryRow({
  category,
  flip,
}: {
  category: SendableCategory;
  flip: boolean;
}) {
  const hasPhoto = category.image ? publicImageExists(category.image) : false;

  return (
    <div className="reveal grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className={flip ? "md:order-2" : undefined}>
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-line bg-brand-soft">
          {hasPhoto ? (
            <Image
              src={`/images/${category.image}`}
              alt={category.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          ) : (
            /* Brand panel until the photo lands — never placeholder text. */
            <div
              aria-hidden="true"
              className="flex size-full items-center justify-center"
            >
              <Image src="/images/logo-mark.svg" alt="" width={72} height={72} />
            </div>
          )}
        </div>
      </div>

      <div className={flip ? "md:order-1" : undefined}>
        <h2 className="text-2xl font-bold md:text-3xl">{category.title}</h2>
        <p className="mt-4 text-muted">{category.body}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {category.items.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-line bg-white px-3.5 py-2 text-sm font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
