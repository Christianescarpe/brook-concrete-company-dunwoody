export const PAGE_IMAGES: Record<string, string> = {
  '/concrete-driveways/': '/images/driveway-luxury.webp',
  '/concrete-driveway-replacement/': '/images/driveway-new.webp',
  '/concrete-patios/': '/images/patio-pavers.webp',
  '/stamped-concrete/': '/images/patio-residential.webp',
  '/decorative-concrete/': '/images/patio-laying.webp',
  '/concrete-walkways/': '/images/walkway-curved.webp',
  '/concrete-steps/': '/images/walkway-laying.webp',
  '/concrete-slabs/': '/images/leveling.webp',
  '/concrete-foundations/': '/images/foundation-pour.webp',
  '/concrete-retaining-walls/': '/images/block-wall.webp',
  '/concrete-pool-decks/': '/images/patio-deck.webp',
  '/concrete-repair/': '/images/concrete-smoothing.webp',
  '/concrete-resurfacing/': '/images/epoxy-resurfacing.webp',
  '/commercial-concrete/': '/images/forms-rebar.webp',
  '/concrete-services/': '/images/hero-2.webp',
  
  // Locations
  '/service-areas/': '/images/driveway-suburban.webp',
  '/service-areas/dunwoody-ga/': '/images/driveway-luxury.webp',
  '/service-areas/sandy-springs-ga/': '/images/patio-residential.webp',
  '/service-areas/brookhaven-ga/': '/images/walkway-curved.webp',
  '/service-areas/chamblee-ga/': '/images/leveling.webp',
  '/service-areas/doraville-ga/': '/images/forms-rebar.webp',
  '/service-areas/peachtree-corners-ga/': '/images/patio-pavers.webp',
  '/service-areas/norcross-ga/': '/images/block-wall.webp',
  '/service-areas/roswell-ga/': '/images/driveway-new.webp',
  '/service-areas/johns-creek-ga/': '/images/patio-deck.webp',

  // Blogs
  '/blog/concrete-driveway-cost/': '/images/driveway-luxury.webp',
  '/blog/driveway-repair-vs-replacement/': '/images/driveway-new.webp',
  '/blog/stamped-concrete-vs-pavers/': '/images/patio-pavers.webp',
  '/blog/concrete-patio-cost/': '/images/patio-residential.webp',
  '/blog/concrete-curing-time/': '/images/fresh-pour.webp',
  '/blog/concrete-slab-thickness/': '/images/leveling.webp',
  '/blog/prevent-concrete-cracks/': '/images/concrete-finishing.webp',

  // Other
  '/about/': '/images/team-review.webp',
  '/contact/': '/images/worker-portrait.webp',
  '/gallery/': '/images/hero-1.webp',
};

export function getImageForSlug(slug: string): string {
  const norm = slug.endsWith('/') ? slug : slug + '/';
  return PAGE_IMAGES[norm] || '/images/hero-2.webp';
}
