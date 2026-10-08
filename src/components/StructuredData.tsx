import React from 'react';

export function extractFaqsFromHtml(html: string): Array<{ question: string; answer: string }> {
  if (!html) return [];
  const faqMatch = html.match(/<h2>(?:Frequently Asked Questions|FAQ)<\/h2>([\s\S]*?)(?:<h2>|$)/i);
  if (!faqMatch) return [];
  const faqSection = faqMatch[1];
  const items: Array<{ question: string; answer: string }> = [];
  const qRegex = /<h3>(.*?)<\/h3>\s*<p>(.*?)<\/p>/gi;
  let m;
  while ((m = qRegex.exec(faqSection)) !== null) {
    const q = m[1].replace(/<[^>]+>/g, '').trim();
    const a = m[2].replace(/<[^>]+>/g, '').trim();
    if (q && a) {
      items.push({ question: q, answer: a });
    }
  }
  return items;
}

export function JsonLd({ schema }: { schema: Record<string, any> | Array<Record<string, any>> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const BASE_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://www.concretecontractordunwoody.site/#business',
  name: 'Brook Concrete Company',
  legalName: 'Brook Concrete Company',
  url: 'https://www.concretecontractordunwoody.site/',
  telephone: '+1-770-764-2908',
  email: 'contact@concretecontractordunwoody.site',
  priceRange: '$$',
  image: 'https://www.concretecontractordunwoody.site/images/hero-1.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1936 Cotillion Dr',
    addressLocality: 'Dunwoody',
    addressRegion: 'GA',
    postalCode: '30338',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.9220096,
    longitude: -84.3081191,
  },
  areaServed: [
    { '@type': 'City', name: 'Dunwoody' },
    { '@type': 'City', name: 'Sandy Springs' },
    { '@type': 'City', name: 'Brookhaven' },
    { '@type': 'City', name: 'Chamblee' },
    { '@type': 'City', name: 'Doraville' },
    { '@type': 'City', name: 'Peachtree Corners' },
    { '@type': 'City', name: 'Norcross' },
    { '@type': 'City', name: 'Roswell' },
    { '@type': 'City', name: 'Johns Creek' },
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.concretecontractordunwoody.site/#website',
  url: 'https://www.concretecontractordunwoody.site/',
  name: 'Brook Concrete Company',
  publisher: {
    '@id': 'https://www.concretecontractordunwoody.site/#business',
  },
};
