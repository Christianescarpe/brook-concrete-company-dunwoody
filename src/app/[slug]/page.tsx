import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPageBySlug, SERVICES_LIST } from '@/data/siteData';
import { getImageForSlug } from '@/data/imageMap';
import ServicePageTemplate from '@/components/ServicePageTemplate';

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

  return {
    title: page.seoTitle,
    description: page.metaDescription,
  };
}

export default function ServicePage({ params }: PageProps) {
  const slug = `/${params.slug}/`;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const heroImage = getImageForSlug(slug);

  return (
    <ServicePageTemplate
      page={page}
      heroImage={heroImage}
    />
  );
}
