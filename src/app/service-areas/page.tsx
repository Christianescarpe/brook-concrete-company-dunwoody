import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/data/siteData';
import { getImageForSlug } from '@/data/imageMap';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Concrete Contractor Service Areas | Brook Concrete',
  description: 'Brook Concrete Company serves Dunwoody, Sandy Springs, Brookhaven, Chamblee, Doraville, Peachtree Corners, Norcross, Roswell, and Johns Creek, GA.',
};

export default function ServiceAreasHubPage() {
  const page = getPageBySlug('/service-areas/');

  if (!page) {
    notFound();
  }

  const heroImage = getImageForSlug('/service-areas/');

  return (
    <LocationPageTemplate
      page={page}
      heroImage={heroImage}
    />
  );
}
