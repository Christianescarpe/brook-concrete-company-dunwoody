const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('parsed_pages.json', 'utf8'));

// Normalize slugs (ensure leading slash and trailing slash handled cleanly)
function normalizeSlug(slug) {
  if (!slug) return '/';
  let s = slug.trim();
  if (!s.startsWith('/')) s = '/' + s;
  return s;
}

const cleanedPages = pages.map(p => {
  return {
    pageTitle: p['Page Title'],
    seoTitle: p['SEO Title'],
    metaDescription: p['Meta Description'],
    urlSlug: normalizeSlug(p['URL Slug']),
    htmlContent: p['Page Content (HTML)'],
    internalAnchors: [
      { text: p['Internal Anchor 1 Text'], url: normalizeSlug(p['Internal Anchor 1 URL']) },
      { text: p['Internal Anchor 2 Text'], url: normalizeSlug(p['Internal Anchor 2 URL']) },
      { text: p['Internal Anchor 3 Text'], url: normalizeSlug(p['Internal Anchor 3 URL']) },
    ].filter(a => a.text && a.url),
    externalAnchor: p['External Anchor Text'] ? {
      text: p['External Anchor Text'],
      url: p['External Anchor URL']
    } : null
  };
});

// Classify pages
const services = cleanedPages.filter(p => {
  const s = p.urlSlug;
  return s !== '/' && s !== '/about/' && s !== '/contact/' && s !== '/gallery/' && s !== '/service-areas/' && !s.startsWith('/service-areas/') && !s.startsWith('/blog/');
});

const locations = cleanedPages.filter(p => {
  return p.urlSlug.startsWith('/service-areas/') && p.urlSlug !== '/service-areas/';
});

const blogs = cleanedPages.filter(p => {
  return p.urlSlug.startsWith('/blog/');
});

const fileContent = `export interface AnchorLink {
  text: string;
  url: string;
}

export interface PageData {
  pageTitle: string;
  seoTitle: string;
  metaDescription: string;
  urlSlug: string;
  htmlContent: string;
  internalAnchors: AnchorLink[];
  externalAnchor: AnchorLink | null;
}

export const COMPANY_INFO = {
  name: "Brook Concrete Company",
  tagline: "Dunwoody, GA",
  phone: "+1 (770) 764-2908",
  phoneRaw: "+17707642908",
  phoneDisplay: "+1 (770) 764-2908",
  address: "1936 Cotillion Dr, Dunwoody, GA 30338, United States",
  addressShort: "1936 Cotillion Dr, Dunwoody, GA",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3310.743149520343!2d-84.3081191!3d33.9220096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50967baa92d57%3A0xcf013ea7ebdc8eb!2s!5e0!3m2!1sen!2sph!4v1791357395412!5m2!1sen!2sph"
};

export const ALL_PAGES: PageData[] = ${JSON.stringify(cleanedPages, null, 2)};

export const SERVICES_LIST: PageData[] = ${JSON.stringify(services, null, 2)};

export const LOCATIONS_LIST: PageData[] = ${JSON.stringify(locations, null, 2)};

export const BLOGS_LIST: PageData[] = ${JSON.stringify(blogs, null, 2)};

export function getPageBySlug(slug: string): PageData | undefined {
  const norm = slug.startsWith('/') ? slug : '/' + slug;
  const withSlash = norm.endsWith('/') ? norm : norm + '/';
  const withoutSlash = norm.endsWith('/') ? norm.slice(0, -1) : norm;
  
  return ALL_PAGES.find(p => p.urlSlug === withSlash || p.urlSlug === withoutSlash || p.urlSlug === norm);
}

export function extractH1AndContent(html: string): { h1: string; contentWithoutH1: string } {
  if (!html) return { h1: '', contentWithoutH1: '' };
  const match = html.match(/<h1[^>]*>(.*?)<\\/h1>/i);
  const h1 = match ? match[1].replace(/<[^>]+>/g, '').trim() : '';
  const contentWithoutH1 = html.replace(/<h1[^>]*>.*?<\\/h1>\\s*/i, '');
  return { h1, contentWithoutH1 };
}
`;

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/siteData.ts', fileContent, 'utf8');
console.log('Successfully generated src/data/siteData.ts');
console.log(`Services: ${services.length}, Locations: ${locations.length}, Blogs: ${blogs.length}, Total: ${cleanedPages.length}`);
