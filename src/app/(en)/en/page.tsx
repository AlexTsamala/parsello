/**
 * Placeholder while the English site is built out.
 *
 * Phase 1 only proves the two-root-layout structure compiles and that the
 * Georgian tree is untouched. The real page arrives once the shared page
 * bodies and the English content files exist; Navbar, Footer and the sticky
 * CTA are added to the `(en)` layout at the same time, once they take a locale.
 */
export default function EnHomePlaceholder() {
  return (
    <main id="main" className="container-page py-24">
      <h1 className="text-3xl font-bold md:text-5xl">Parcello Georgia</h1>
      <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
        The English version of this site is being prepared.
      </p>
    </main>
  );
}
