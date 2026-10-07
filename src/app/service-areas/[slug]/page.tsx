import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPageBySlug, LOCATIONS_LIST } from '@/data/siteData';
import { getImageForSlug } from '@/data/imageMap';
import LocationPageTemplate from '@/components/LocationPageTemplate';

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

  return {
    title: page.seoTitle,
    description: page.metaDescription,
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const slug = `/service-areas/${params.slug}/`;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const heroImage = getImageForSlug(slug);

  return (
    <LocationPageTemplate
      page={page}
      heroImage={heroImage}
    />
  );
}
