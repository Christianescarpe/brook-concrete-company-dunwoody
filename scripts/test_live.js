const https = require('https');
const fs = require('fs');
const path = require('path');

const sitemap = fs.readFileSync(path.join(__dirname, '../public/sitemap.xml'), 'utf8');
const locRegex = /<loc>(.*?)<\/loc>/g;
const urls = [];
let m;
while ((m = locRegex.exec(sitemap)) !== null) {
  urls.push(m[1]);
}

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const canonicalMatch = data.match(/<link rel="canonical" href="([^"]+)"/i);
        const hasNoindex = data.includes('noindex');
        const hasSchema = data.includes('application/ld+json');
        resolve({
          url,
          status: res.statusCode,
          canonical: canonicalMatch ? canonicalMatch[1] : 'NOT FOUND',
          canonicalMatch: canonicalMatch ? canonicalMatch[1] === url : false,
          noindex: hasNoindex,
          schema: hasSchema
        });
      });
    }).on('error', err => resolve({ url, error: err.message }));
  });
}

(async () => {
  console.log(`Auditing all ${urls.length} sitemap URLs live...`);
  let passed = 0;
  for (const u of urls) {
    const res = await checkUrl(u);
    const ok = res.status === 200 && !res.noindex && res.canonicalMatch && res.schema;
    if (ok) passed++;
    console.log(`[${res.status === 200 ? 'PASS' : 'FAIL'}] HTTP ${res.status} | Canonical: ${res.canonicalMatch ? 'MATCH' : 'MISMATCH (' + res.canonical + ')'} | NoIndex: ${res.noindex} | Schema: ${res.schema} | ${res.url}`);
  }
  console.log(`\nAudit complete: ${passed}/${urls.length} URLs passed all checks.`);
})();
