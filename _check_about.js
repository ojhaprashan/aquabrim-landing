const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });

  await page.goto('http://localhost:3001/about', { waitUntil: 'networkidle0', timeout: 60000 });

  // Dump the FULL DOM structure under body
  const data = await page.evaluate(() => {
    const body = document.body;
    const dump = (el, depth) => {
      if (depth > 6) return '';
      const indent = '  '.repeat(depth);
      const tag = el.tagName;
      const cls = (el.className?.toString() || '').slice(0, 100);
      const id = el.id || '';
      const r = el.getBoundingClientRect();
      let s = `${indent}<${tag} id="${id}" class="${cls}" w=${Math.round(r.width)} h=${Math.round(r.height)}>\n`;
      if (el.children.length < 30) {
        for (const c of el.children) s += dump(c, depth + 1);
      } else {
        s += `${indent}  ... ${el.children.length} children ...\n`;
      }
      return s;
    };
    return dump(body, 0);
  });
  console.log(data);

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
