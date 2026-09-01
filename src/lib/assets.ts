import fs from "node:fs";
import path from "node:path";

/**
 * Brand photography is added to `public/images/` as it becomes available.
 * Pages are statically generated, so this check runs at build time: the moment
 * a real file lands, the image renders; until then the component falls back to
 * a plain brand panel rather than a broken image or visible placeholder text.
 */
export function publicImageExists(fileName: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", "images", fileName));
}
