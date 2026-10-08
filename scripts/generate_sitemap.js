const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, '../parsed_pages.json'), 'utf8'));

const BASE_URL = 'https://www.concretecontractordunwoody.site';
const TODAY = '2026-10-08';

const urls = [];

// Homepage
urls.push({
  loc: `${BASE_URL}/`,
  lastmod: TODAY,
  changefreq: 'weekly',
  priority: '1.0'
});

// Blog Hub
urls.push({
  loc: `${BASE_URL}/blog/`,
  lastmod: TODAY,
  changefreq: 'weekly',
  priority: '0.8'
});

pages.forEach(p => {
  let slug = p['URL Slug'];
  if (!slug || slug === '/') return;
  if (!slug.startsWith('/')) slug = '/' + slug;
  if (!slug.endsWith('/')) slug = slug + '/';

  const fullUrl = `${BASE_URL}${slug}`;
  if (urls.some(u => u.loc === fullUrl)) return;

  let priority = '0.8';
  let changefreq = 'weekly';

  if (slug.startsWith('/blog/')) {
    priority = '0.7';
    changefreq = 'monthly';
  } else if (slug === '/about/' || slug === '/contact/' || slug === '/gallery/') {
    priority = '0.7';
    changefreq = 'monthly';
  } else if (slug === '/concrete-services/' || slug === '/service-areas/') {
    priority = '0.9';
    changefreq = 'weekly';
  }

  urls.push({
    loc: fullUrl,
    lastmod: TODAY,
    changefreq: changefreq,
    priority: priority
  });
});

const xmlLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
];

urls.forEach(u => {
  xmlLines.push('  <url>');
  xmlLines.push(`    <loc>${u.loc}</loc>`);
  xmlLines.push(`    <lastmod>${u.lastmod}</lastmod>`);
  xmlLines.push(`    <changefreq>${u.changefreq}</changefreq>`);
  xmlLines.push(`    <priority>${u.priority}</priority>`);
  xmlLines.push('  </url>');
});

xmlLines.push('</urlset>');
xmlLines.push('');

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, xmlLines.join('\n'), 'utf8');
console.log(`Generated public/sitemap.xml successfully with ${urls.length} URLs.`);
