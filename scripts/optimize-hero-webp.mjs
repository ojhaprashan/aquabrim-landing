// Resizes the already-WebP hero/banner images down to the size they are
// actually displayed at.
//
// optimize-images.mjs only handles .jpg/.png sources, so these WebP files were
// never touched: they shipped at 1400px wide (~120-145 KB each) into a slot
// that is at most 540 CSS px, which made the hero the LCP bottleneck.
//
// Originals are copied to ./_image_backup first (same convention as
// optimize-images.mjs, outside public/ so they never deploy).
//
// Usage:
//   node scripts/optimize-hero-webp.mjs
//   node scripts/optimize-hero-webp.mjs --restore

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BACKUP = path.join(ROOT, '_image_backup');
const RESTORE = process.argv.includes('--restore');

// rel path under public/  ->  max width to keep (2x the largest CSS slot)
const TARGETS = {
  'assets/home/for homes.webp': 1080,
  'assets/home/for apartments.webp': 1080,
  'assets/home/for industries.webp': 1080,
  'assets/home/home page image.webp': 1080,
  'assets/about/about.webp': 1080,
};

const kb = (b) => `${(b / 1024).toFixed(0)} KB`;

async function run() {
  let before = 0;
  let after = 0;

  for (const [rel, maxWidth] of Object.entries(TARGETS)) {
    const live = path.join(ROOT, 'public', rel);
    const backup = path.join(BACKUP, rel);

    try {
      await fs.access(live);
    } catch {
      console.log(`skip (missing)  ${rel}`);
      continue;
    }

    if (RESTORE) {
      try {
        await fs.copyFile(backup, live);
        console.log(`restored       ${rel}`);
      } catch {
        console.log(`skip (no backup) ${rel}`);
      }
      continue;
    }

    // Back up once; then always work FROM the backup so re-runs don't
    // re-compress an already-compressed file.
    await fs.mkdir(path.dirname(backup), { recursive: true });
    try {
      await fs.access(backup);
    } catch {
      await fs.copyFile(live, backup);
    }

    const src = await fs.readFile(backup);
    const meta = await sharp(src).metadata();

    const out = await sharp(src)
      .resize({ width: Math.min(maxWidth, meta.width || maxWidth), withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toBuffer();

    // Never ship a bigger file than we started with.
    if (out.length >= src.length) {
      console.log(`kept original  ${rel} (${kb(src.length)})`);
      before += src.length;
      after += src.length;
      continue;
    }

    await fs.writeFile(live, out);
    const newMeta = await sharp(out).metadata();
    before += src.length;
    after += out.length;
    console.log(
      `${rel}\n  ${meta.width}x${meta.height} ${kb(src.length)}  ->  ` +
        `${newMeta.width}x${newMeta.height} ${kb(out.length)}`
    );
  }

  if (!RESTORE) {
    console.log(`\ntotal: ${kb(before)} -> ${kb(after)}  (saved ${kb(before - after)})`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
