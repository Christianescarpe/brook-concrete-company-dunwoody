const fs = require('fs');
const path = require('path');

const srcDir = 'D:\\images\\construction images';
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Map key images to readable names for easy usage across the site
const imageMappings = {
  // Hero and General
  'hero-1.webp': 'workers-pouring-concrete-for-a-construction-projec-2026-01-05-01-11-28-utc.webp',
  'hero-2.webp': 'workman-smoothing-fresh-cement-on-construction-pro-2026-03-09-03-26-04-utc.webp',
  'hero-3.webp': 'concrete-truck-with-pouring-cement-during-to-resid-2026-01-09-09-10-30-utc.webp',
  'excavator.png': 'yellow-excavator.png',
  'roller.webp': 'yellow-road-roller-compacting-fresh-black-asphalt-2026-05-21-16-54-30-utc.webp',

  // Driveways
  'driveway-luxury.webp': 'luxury-house-concrete-driveway.webp',
  'driveway-new.webp': 'they-are-making-a-new-concrete-driveway.webp',
  'driveway-suburban.webp': 'attractive-home-with-garage-lawn-and-concrete-dri-2026-01-07-23-06-43-utc.webp',
  'driveway-paving.webp': 'man-laying-cobblestones-for-driveway-construction-2026-03-24-04-05-24-utc.webp',

  // Patios & Pavers
  'patio-pavers.webp': 'concrete-pavers-installation-in-a-backyard-patio-p-2026-03-25-03-23-37-utc.webp',
  'patio-residential.webp': 'landscaper-building-residential-patio-made-from-co-2026-03-24-03-45-02-utc.webp',
  'patio-laying.webp': 'worker-laying-pavers-for-a-new-outdoor-patio-2026-03-20-02-17-29-utc.webp',
  'patio-hammer.webp': 'bricklayer-using-hammer-to-lay-pavers-for-patio-2026-03-18-06-57-27-utc.webp',
  'patio-deck.webp': 'deck-supports-with-level-on-patio-construction-2026-03-25-04-00-47-utc.webp',

  // Walkways & Steps
  'walkway-laying.webp': 'construction-worker-laying-stones-for-a-walkway-2026-03-20-03-30-19-utc.webp',
  'walkway-curved.webp': 'curved-concrete-sidewalk-under-construction-in-urb-2026-01-09-08-29-30-utc.webp',
  'walkway-brick.webp': 'craftsman-laying-brick-pavers-for-a-walkway-2026-03-25-00-39-03-utc.webp',
  'sidewalk-pour.webp': 'concrete-pouring-for-a-sidewalk-construction-proje-2026-01-09-10-43-44-utc.webp',

  // Finishing & Pouring & Slabs
  'concrete-smoothing.webp': 'concrete-worker-smoothing-surface-outside-on-a-sun-2026-03-09-03-26-18-utc.webp',
  'concrete-finishing.webp': 'worker-smoothing-wet-concrete-with-trowel-outdoors-2026-04-13-02-28-05-utc.webp',
  'fresh-pour.webp': 'fresh-concrete-being-poured-at-a-construction-site-2026-03-25-01-21-38-utc.webp',
  'leveling.webp': 'construction-worker-leveling-fresh-concrete-at-an-2026-08-12-18-38-41-utc.webp',

  // Walls & Foundations & Commercial
  'block-wall.webp': 'construction-worker-building-a-concrete-block-wall-2026-03-24-23-57-35-utc.webp',
  'foundation-pour.webp': 'construction-workers-pouring-concrete-into-a-found-2026-03-23-22-41-16-utc.webp',
  'forms-rebar.webp': 'construction-site-concrete-structure-with-rebar-su-2026-03-20-03-29-58-utc.webp',
  'protective-coating.webp': 'applying-protective-coating-to-concrete-brick-wall-2026-03-17-07-15-59-utc.webp',
  'epoxy-resurfacing.webp': 'applying-epoxy-resin-to-a-floor-with-spiked-shoes-2026-03-17-17-13-34-utc.webp',
  'concrete-cleaning.webp': 'concrete-surface-cleaning-with-pressure-washer-too-2026-03-24-23-46-01-utc.webp',
  
  // Team & Architect
  'team-planning.webp': 'architect-engineer-and-teamwork-with-blueprint-fr-2026-01-09-10-27-52-utc.webp',
  'team-review.webp': 'architects-reviewing-plans-and-model-at-workplace-2026-01-09-11-10-08-utc.webp',
  'worker-portrait.webp': 'construction-worker-handling-concrete-on-a-job-sit-2026-04-13-02-38-34-utc.webp'
};

let copied = 0;
for (const [targetName, srcName] of Object.entries(imageMappings)) {
  const src = path.join(srcDir, srcName);
  const dest = path.join(destDir, targetName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    copied++;
  } else {
    console.warn('Source file not found:', srcName);
  }
}

console.log(`Successfully copied ${copied} images to public/images/`);
