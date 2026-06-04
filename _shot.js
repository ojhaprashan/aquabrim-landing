// Screenshot helper for migration verification.
// Usage: node _shot.js <label>   e.g. node _shot.js baseline
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const label = process.argv[2] || 'shot';
const BASE = 'http://localhost:3001';
const routes = [
  ['home', '/'],
  ['about', '/about'],
  ['service', '/service'],
  ['service-details', '/service-details'],
  ['blog', '/blog'],
  ['blog-details', '/blog-details'],
  ['contact', '/contact'],
  ['privacy-policy', '/privacy-policy'],
];
const OUT = path.join(__dirname, '_shots', label);
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  for (const [name, route] of routes) {
    for (const [vp, w, h] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
      const page = await browser.newPage();
      await page.setViewport({ width: w, height: h });
      try {
        await page.goto(BASE + route, { waitUntil: 'networkidle0', timeout: 60000 });
        // Scroll through the page to trigger wow.js / scroll-reveal animations,
        // then return to top so fullPage captures revealed content.
        await page.evaluate(async () => {
          const step = window.innerHeight * 0.8;
          const total = document.body.scrollHeight;
          for (let y = 0; y < total; y += step) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 200));
          }
          window.scrollTo(0, 0);
          await new Promise(r => setTimeout(r, 400));
        });
        await new Promise(r => setTimeout(r, 800));
        await page.screenshot({ path: path.join(OUT, `${name}-${vp}.png`), fullPage: true });
        console.log('OK', name, vp);
      } catch (e) {
        console.log('FAIL', name, vp, e.message);
      }
      await page.close();
    }
  }
  await browser.close();
})();
