import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/data/siteData';
import { getImageForSlug } from '@/data/imageMap';
import LocationPageTemplate from '@/components/LocationPageTemplate';
import { JsonLd, extractFaqsFromHtml } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Concrete Contractor Service Areas | Brook Concrete',
  description: 'Brook Concrete Company serves Dunwoody, Sandy Springs, Brookhaven, Chamblee, Doraville, Peachtree Corners, Norcross, Roswell, and Johns Creek, GA.',
  alternates: {
    canonical: 'https://www.concretecontractordunwoody.site/service-areas/',
  },
  openGraph: {
    title: 'Concrete Contractor Service Areas | Brook Concrete',
    description: 'Brook Concrete Company serves Dunwoody, Sandy Springs, Brookhaven, Chamblee, Doraville, Peachtree Corners, Norcross, Roswell, and Johns Creek, GA.',
    url: 'https://www.concretecontractordunwoody.site/service-areas/',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.concretecontractordunwoody.site/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Service Areas',
      item: 'https://www.concretecontractordunwoody.site/service-areas/',
    },
  ],
};

export default function ServiceAreasHubPage() {
  const page = getPageBySlug('/service-areas/');

  if (!page) {
    notFound();
  }

  const heroImage = getImageForSlug('/service-areas/');
  const faqs = extractFaqsFromHtml(page.htmlContent);

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  } : null;

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      {faqSchema && <JsonLd schema={faqSchema} />}
      <LocationPageTemplate
        page={page}
        heroImage={heroImage}
      />
    </>
  );
}
