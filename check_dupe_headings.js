const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('parsed_pages.json', 'utf8'));

pages.forEach(p => {
  const html = p['Page Content (HTML)'];
  // Extract all headings
  const matches = [...html.matchAll(/<(h[1-6])[^>]*>(.*?)<\/\1>/gis)];
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const h1Text = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim().toLowerCase() : '';
  
  matches.forEach(m => {
    const tag = m[1].toLowerCase();
    const text = m[2].replace(/<[^>]+>/g, '').trim().toLowerCase();
    if (tag !== 'h1' && text === h1Text) {
      console.log(`Page "${p['URL Slug']}" has ${tag} duplicate of H1: "${text}"`);
    }
  });
});
