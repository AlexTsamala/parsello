import { notFound } from "next/navigation";

/**
 * Catches every URL this locale does not define and hands it to the sibling
 * `not-found.tsx`, so the 404 renders inside this locale's layout and language.
 * Without it an unmatched URL reaches `app/not-found.tsx`, which sits outside
 * every root layout and cannot tell which language the visitor was in.
 */
export default function CatchAll() {
  notFound();
}
