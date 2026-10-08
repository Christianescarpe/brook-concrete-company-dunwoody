import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPageBySlug, LOCATIONS_LIST } from '@/data/siteData';
import { getImageForSlug } from '@/data/imageMap';
import LocationPageTemplate from '@/components/LocationPageTemplate';
import { JsonLd, extractFaqsFromHtml } from '@/components/StructuredData';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return LOCATIONS_LIST.map((loc) => ({
    slug: loc.urlSlug.replace('/service-areas/', '').replace(/\/$/, ''),
  }));
}

export function generateMetadata({ params }: LocationPageProps): Metadata {
  const slug = `/service-areas/${params.slug}/`;
  const page = getPageBySlug(slug);

  if (!page) {
    return { title: 'Service Area Not Found' };
  }

  const canonicalUrl = `https://www.concretecontractordunwoody.site/service-areas/${params.slug}/`;

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      type: 'website',
      images: [{ url: getImageForSlug(slug) }],
    },
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const slug = `/service-areas/${params.slug}/`;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const canonicalUrl = `https://www.concretecontractordunwoody.site/service-areas/${params.slug}/`;
  const heroImage = getImageForSlug(slug);
  const faqs = extractFaqsFromHtml(page.htmlContent);

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
      {
        '@type': 'ListItem',
        position: 3,
        name: page.pageTitle,
        item: canonicalUrl,
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `Brook Concrete Company - ${page.pageTitle}`,
    url: canonicalUrl,
    telephone: '+1-770-764-2908',
    image: `https://www.concretecontractordunwoody.site${heroImage}`,
    areaServed: {
      '@type': 'City',
      name: page.pageTitle,
    },
    parentOrganization: {
      '@id': 'https://www.concretecontractordunwoody.site/#business',
    },
  };

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
      <JsonLd schema={[breadcrumbSchema, localBusinessSchema]} />
      {faqSchema && <JsonLd schema={faqSchema} />}
      <LocationPageTemplate
        page={page}
        heroImage={heroImage}
      />
    </>
  );
}
