const pages = JSON.parse(require('fs').readFileSync('parsed_pages.json', 'utf8'));

let missingCount = 0;
pages.forEach((p, i) => {
  const content = p['Page Content (HTML)'] || '';
  const a1 = p['Internal Anchor 1 Text'];
  const u1 = p['Internal Anchor 1 URL'];
  const a2 = p['Internal Anchor 2 Text'];
  const u2 = p['Internal Anchor 2 URL'];
  const a3 = p['Internal Anchor 3 Text'];
  const u3 = p['Internal Anchor 3 URL'];
  const ext = p['External Anchor Text'];
  const extU = p['External Anchor URL'];

  const hasA1 = u1 ? content.includes(u1) : true;
  const hasA2 = u2 ? content.includes(u2) : true;
  const hasA3 = u3 ? content.includes(u3) : true;
  const hasExt = extU ? content.includes(extU) : true;

  if (!hasA1 || !hasA2 || !hasA3 || !hasExt) {
    console.log(`Page ${i + 1} [${p['Page Title']}]: hasA1=${hasA1}, hasA2=${hasA2}, hasA3=${hasA3}, hasExt=${hasExt}`);
    missingCount++;
  }
});

console.log(`Anchor check finished. Pages with missing anchor links: ${missingCount}`);
