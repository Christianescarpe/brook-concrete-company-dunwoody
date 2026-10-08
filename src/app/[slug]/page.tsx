import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPageBySlug, SERVICES_LIST } from '@/data/siteData';
import { getImageForSlug } from '@/data/imageMap';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { JsonLd, extractFaqsFromHtml } from '@/components/StructuredData';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.urlSlug.replace(/^\/|\/$/g, ''),
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = `/${params.slug}/`;
  const page = getPageBySlug(slug);

  if (!page) {
    return { title: 'Page Not Found' };
  }

  const canonicalUrl = `https://www.concretecontractordunwoody.site/${params.slug}/`;

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

export default function ServicePage({ params }: PageProps) {
  const slug = `/${params.slug}/`;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const canonicalUrl = `https://www.concretecontractordunwoody.site/${params.slug}/`;
  const heroImage = getImageForSlug(slug);
  const faqs = extractFaqsFromHtml(page.htmlContent);

  const breadcrumbsList = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.concretecontractordunwoody.site/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Concrete Services',
      item: 'https://www.concretecontractordunwoody.site/concrete-services/',
    },
  ];

  if (params.slug !== 'concrete-services') {
    breadcrumbsList.push({
      '@type': 'ListItem',
      position: 3,
      name: page.pageTitle,
      item: canonicalUrl,
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbsList,
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.pageTitle,
    description: page.metaDescription,
    url: canonicalUrl,
    provider: {
      '@id': 'https://www.concretecontractordunwoody.site/#business',
    },
    areaServed: {
      '@type': 'City',
      name: 'Dunwoody, GA',
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
      <JsonLd schema={[breadcrumbSchema, serviceSchema]} />
      {faqSchema && <JsonLd schema={faqSchema} />}
      <ServicePageTemplate
        page={page}
        heroImage={heroImage}
      />
    </>
  );
}
