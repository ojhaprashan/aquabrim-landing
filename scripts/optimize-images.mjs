// Content-aware image optimizer.
//   - JPG/JPEG          -> recompressed JPEG in place (same filename, no ref change)
//   - PNG w/ alpha       -> losslessly recompressed PNG in place (no ref change)
//   - PNG opaque (photos)-> converted to WebP (.webp sibling), original .png deleted
//                           (conversion recorded in scripts/.image-conversions.json for ref rewrite)
//
// Originals are backed up to ./_image_backup (outside public/, so they never deploy)
// and all work is done FROM the backup, so the script is safe to re-run.
//
// Usage:
//   node scripts/optimize-images.mjs             # full run
//   node scripts/optimize-images.mjs --only foo  # only paths containing "foo"
//   node scripts/optimize-images.mjs --restore   # restore originals + remove generated .webp

import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ASSETS = path.join(ROOT, "public", "assets");
const BACKUP = path.join(ROOT, "_image_backup");
const MANIFEST = path.join(__dirname, ".image-conversions.json");

const args = process.argv.slice(2);
const getArg = (n) => (args.indexOf(n) !== -1 ? args[args.indexOf(n) + 1] : undefined);
const ONLY = getArg("--only");
const RESTORE = args.includes("--restore");

const exts = new Set([".jpg", ".jpeg", ".png"]);
const fmt = (b) => (b / 1024 < 1024 ? `${(b / 1024).toFixed(0)} KB` : `${(b / 1048576).toFixed(2)} MB`);

function maxEdgeFor(rel) {
  const p = rel.toLowerCase();
  if (p.includes("logo")) return 360;
  if (p.includes(`${path.sep}home${path.sep}`) || p.includes("/home/")) return 1920;
  return 1400;
}

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const real = path.join(dir, e.name);
    if (e.isDirectory()) await walk(real, out);
    else if (exts.has(path.extname(e.name).toLowerCase())) out.push(real);
  }
  return out;
}

async function restore() {
  let files;
  try { files = await walk(BACKUP); } catch { console.log("No backup found."); return; }
  for (const src of files) await fs.copyFile(src, path.join(ASSETS, path.relative(BACKUP, src)));
  // remove generated webp recorded in manifest
  try {
    const conv = JSON.parse(await fs.readFile(MANIFEST, "utf8"));
    for (const c of conv) {
      const webpAbs = path.join(ROOT, "public", c.to.replace(/^\//, ""));
      await fs.rm(webpAbs, { force: true });
    }
  } catch {}
  console.log(`Restored ${files.length} originals; removed generated .webp files.`);
}

async function main() {
  if (RESTORE) return restore();

  let files = await walk(ASSETS).then((f) => f.filter((x) => !x.toLowerCase().endsWith(".webp")));
  if (ONLY) files = files.filter((f) => f.toLowerCase().includes(ONLY.toLowerCase()));

  const conversions = [];
  let before = 0, after = 0;

  for (const file of files) {
    const rel = path.relative(ASSETS, file);
    const backupPath = path.join(BACKUP, rel);
    try { await fs.access(backupPath); }
    catch { await fs.mkdir(path.dirname(backupPath), { recursive: true }); await fs.copyFile(file, backupPath); }

    const srcBuf = await fs.readFile(backupPath);
    const origSize = srcBuf.length;
    const ext = path.extname(file).toLowerCase();
    const maxEdge = maxEdgeFor(rel);
    const meta = await sharp(srcBuf).metadata();

    let pipe = sharp(srcBuf).rotate();
    if ((meta.width && meta.width > maxEdge) || (meta.height && meta.height > maxEdge))
      pipe = pipe.resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true });

    let label, outFile, outBuf;
    if (ext === ".png" && !meta.hasAlpha) {
      // Opaque photo saved as PNG -> WebP, and drop the original PNG.
      outBuf = await pipe.webp({ quality: 80, effort: 5 }).toBuffer();
      outFile = file.replace(/\.png$/i, ".webp");
      await fs.writeFile(outFile, outBuf);
      await fs.rm(file, { force: true });
      const assetRel = path.relative(path.join(ROOT, "public"), file).split(path.sep).join("/");
      conversions.push({ from: "/" + assetRel, to: "/" + assetRel.replace(/\.png$/i, ".webp") });
      label = "-> webp";
    } else if (ext === ".png") {
      // Transparent PNG -> lossless recompress (keep crisp), in place.
      outBuf = await pipe.png({ compressionLevel: 9, effort: 9 }).toBuffer();
      const finalBuf = outBuf.length < origSize ? outBuf : srcBuf;
      await fs.writeFile(file, finalBuf);
      outBuf = finalBuf; label = "png";
    } else {
      // JPEG -> recompress, in place.
      outBuf = await pipe.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
      const finalBuf = outBuf.length < origSize ? outBuf : srcBuf;
      await fs.writeFile(file, finalBuf);
      outBuf = finalBuf; label = "jpg";
    }

    before += origSize; after += outBuf.length;
    const pct = origSize ? Math.round((1 - outBuf.length / origSize) * 100) : 0;
    console.log(`${rel.padEnd(44)} ${label.padEnd(7)} ${fmt(origSize).padStart(9)} -> ${fmt(outBuf.length).padStart(9)}  (-${pct}%)`);
  }

  await fs.writeFile(MANIFEST, JSON.stringify(conversions, null, 2));
  console.log("\n----------------------------------------------");
  console.log(`Processed ${files.length} images, ${conversions.length} PNG->WebP conversions.`);
  console.log(`Total: ${fmt(before)} -> ${fmt(after)}  (-${before ? Math.round((1 - after / before) * 100) : 0}%)`);
  console.log(`Manifest: ${path.relative(ROOT, MANIFEST)}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
