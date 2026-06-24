// Rewrites references to PNGs that were converted to WebP, using the manifest
// produced by optimize-images.mjs. Matches the path *without* a leading slash so it
// covers all forms: "/assets/x.png", "@/assets/x.png", "../../public/assets/x.png".

import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MANIFEST = path.join(__dirname, ".image-conversions.json");

const SCAN_DIRS = [path.join(ROOT, "src"), path.join(ROOT, "public", "assets", "css")];
const SCAN_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".scss", ".css", ".mdx"]);

async function walk(dir, out = []) {
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const real = path.join(dir, e.name);
    if (e.isDirectory()) await walk(real, out);
    else if (SCAN_EXT.has(path.extname(e.name).toLowerCase())) out.push(real);
  }
  return out;
}

const conv = JSON.parse(await fs.readFile(MANIFEST, "utf8")).map((c) => ({
  from: c.from.replace(/^\//, ""),
  to: c.to.replace(/^\//, ""),
}));

const files = [];
for (const d of SCAN_DIRS) await walk(d, files);

let totalRepl = 0;
const touched = [];
for (const file of files) {
  let text = await fs.readFile(file, "utf8");
  let n = 0;
  for (const { from, to } of conv) {
    if (text.includes(from)) {
      n += text.split(from).length - 1;
      text = text.split(from).join(to);
    }
  }
  if (n > 0) {
    await fs.writeFile(file, text);
    totalRepl += n;
    touched.push(`${path.relative(ROOT, file)}  (${n})`);
  }
}

console.log(`Rewrote ${totalRepl} reference(s) across ${touched.length} file(s):`);
touched.forEach((t) => console.log("  " + t));
