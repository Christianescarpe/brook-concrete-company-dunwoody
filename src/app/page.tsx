import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Phone,
  MapPin,
  ArrowRight,
  HardHat,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_INFO, LOCATIONS_LIST, getPageBySlug, extractH1AndContent } from '@/data/siteData';
import ProjectGallery from '@/components/ProjectGallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import { JsonLd, extractFaqsFromHtml } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Concrete Contractor Dunwoody GA',
  description: 'Brook Concrete Company is a Dunwoody, GA concrete contractor for driveways, patios, stamped concrete and repairs. Call for a free estimate.',
  alternates: {
    canonical: 'https://www.concretecontractordunwoody.site/',
  },
  openGraph: {
    title: 'Concrete Contractor Dunwoody GA',
    description: 'Brook Concrete Company is a Dunwoody, GA concrete contractor for driveways, patios, stamped concrete and repairs. Call for a free estimate.',
    url: 'https://www.concretecontractordunwoody.site/',
    siteName: 'Brook Concrete Company',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  const homeData = getPageBySlug('/')!;
  const { h1, contentWithoutH1 } = extractH1AndContent(homeData?.htmlContent || '');
  const displayH1 = h1 || 'Concrete Contractor in Dunwoody, GA';
  const faqs = extractFaqsFromHtml(homeData?.htmlContent || '');

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
    <div className="bg-white text-slate-900">
      {faqSchema && <JsonLd schema={faqSchema} />}
      {/* =========================================================================
          1. HERO SECTION (Dark charcoal background, double worker silhouette, single H1)
          ========================================================================= */}
      <section className="relative bg-[#222933] text-white overflow-hidden pt-16 pb-20 md:py-24 border-b border-gray-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-1.webp"
            alt={displayH1}
            fill
            priority
            className="object-cover object-center opacity-25 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c222b] via-[#222933]/90 to-transparent" />
        </div>

        {/* Double Worker Silhouette from Mockup (Right Side) */}
        <div className="absolute right-4 md:right-12 bottom-0 w-[340px] md:w-[460px] lg:w-[540px] h-[360px] md:h-[480px] lg:h-[540px] text-gray-200 pointer-events-none hidden md:block z-10 select-none">
          <Image
            src="/images/hero-workers.svg"
            alt="Construction Builders"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Tagline / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/15 border border-amber-500/40 rounded-full text-amber-400 font-black text-xs uppercase tracking-widest mb-4">
              <HardHat className="w-3.5 h-3.5" />
              <span>Brook Concrete Company • Dunwoody, GA</span>
            </div>

            {/* The single H1 on the hero section matching the sheet exactly */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-5 uppercase">
              {displayH1}
            </h1>

            {/* Subtext verbatim from sheet intro */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              Welcome to Brook Concrete Company, your dependable local concrete contractor serving residential and commercial property owners throughout Dunwoody, GA, and the northern Atlanta metropolitan area.
            </p>

            {/* CTA Phone Button (Click-to-call only, strictly from sheet) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded text-sm sm:text-base uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all pulse-phone"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <Link
                href="/concrete-services/"
                className="inline-flex items-center justify-center gap-2 bg-[#2d3748] hover:bg-[#374254] text-white font-bold px-6 py-4 rounded text-sm uppercase tracking-wider border border-gray-600 transition-all"
              >
                <span>Concrete Services</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center gap-2 mt-12">
              <span className="w-3 h-3 rounded-full bg-amber-500 block shadow-sm ring-2 ring-amber-400/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-600 block" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-600 block" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. YELLOW HIGHLIGHT RIBBON BAR
          ========================================================================= */}
      <section className="bg-amber-500 text-slate-950 py-5 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="font-black text-sm sm:text-base md:text-lg uppercase tracking-wide">
              Brook Concrete Company • Comprehensive Concrete Services in Dunwoody, GA
            </span>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="bg-slate-950 hover:bg-slate-800 text-white font-black px-6 py-2.5 rounded text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shrink-0 shadow"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span>Call {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED 3-CARD SERVICES SHOWCASE (Cards use div to avoid duplicate headings)
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Custom Residential Driveways (From Sheet) */}
            <div className="bg-[#f9fafb] rounded border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/driveway-luxury.webp"
                  alt="Custom Residential Driveways"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2.5">
                    Custom Residential Driveways
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Installing high-performance driveways engineered to support heavy vehicle loads while elevating curb appeal.
                  </p>
                </div>
                <div>
                  <Link
                    href="/concrete-driveways/"
                    className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-colors shadow-sm"
                  >
                    View Driveways
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Outdoor Living Patios (From Sheet) */}
            <div className="bg-[#f9fafb] rounded border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/patio-deck.webp"
                  alt="Outdoor Living Patios"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2.5">
                    Outdoor Living Patios
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Creating inviting, elegant backyard environments featuring smooth trowel finishes, brushed textures, or decorative stamping.
                  </p>
                </div>
                <div>
                  <Link
                    href="/concrete-patios/"
                    className="inline-block bg-[#222933] hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-colors shadow-sm"
                  >
                    View Patios
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Stamped and Decorative Concrete (From Sheet) */}
            <div className="bg-[#f9fafb] rounded border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/patio-pavers.webp"
                  alt="Stamped and Decorative Concrete"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2.5">
                    Stamped &amp; Decorative Concrete
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Transforming standard concrete into breathtaking surfaces replicating slate, cobblestone, brick, flagstone, or timber planks.
                  </p>
                </div>
                <div>
                  <Link
                    href="/stamped-concrete/"
                    className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-colors shadow-sm"
                  >
                    View Stamped
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. LATEST PROJECTS (Unique H2)
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#222933] text-white border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              LATEST PROJECTS
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-3" />
          </div>

          <ProjectGallery />
        </div>
      </section>

      {/* =========================================================================
          5. WHY CHOOSE US ACCORDION & LATEST ARTICLES
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <WhyChooseUs />
        </div>
      </section>

      {/* =========================================================================
          6. STATS / FACTS BANNER
          ========================================================================= */}
      <section className="py-14 md:py-16 bg-[#1f2631] text-white border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-snug mb-3">
                Meticulous Craftsmanship on Every Job Site
              </div>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                When you need solid structural flatwork, beautiful decorative hardscapes, or reliable restorative repairs, our seasoned team brings unmatched dedication and premium materials to every pour.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-3 gap-3 sm:gap-6">
              <div className="border-2 border-amber-500 rounded p-4 text-center bg-[#252e3b]">
                <div className="w-9 h-9 mx-auto mb-2 text-amber-400 flex items-center justify-center">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">15</div>
                <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">
                  Concrete Services
                </div>
              </div>

              <div className="border-2 border-amber-500 rounded p-4 text-center bg-[#252e3b]">
                <div className="w-9 h-9 mx-auto mb-2 text-amber-400 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">9</div>
                <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">
                  Cities Served
                </div>
              </div>

              <div className="border-2 border-amber-500 rounded p-4 text-center bg-[#252e3b]">
                <div className="w-9 h-9 mx-auto mb-2 text-amber-400 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">
                  Free Estimates
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. COMPLETE VERBATIM SPREADSHEET CONTENT (The single, primary source of all section headings)
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="bg-[#fafbfc] rounded-lg p-6 sm:p-12 border border-slate-200 shadow-sm">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: contentWithoutH1 }}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. AREAS WE PROUDLY SERVE GRID (Links to all 9 locations)
          ========================================================================= */}
      <section className="py-16 bg-[#f8f9fb] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
              DUNWOODY &amp; SURROUNDING COMMUNITIES
            </div>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-3" />
            <p className="text-xs sm:text-sm text-slate-600">
              Reliable concrete services across Dunwoody and north Atlanta communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {LOCATIONS_LIST.map((loc) => (
              <Link
                key={loc.urlSlug}
                href={loc.urlSlug}
                className="flex items-center justify-between p-4 bg-white rounded border border-slate-200 hover:border-amber-500 hover:bg-amber-50/20 transition-all group shadow-sm"
              >
                <span className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-800 group-hover:text-amber-600">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{loc.pageTitle}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FINAL PHONE CTA BANNER (Call button only)
          ========================================================================= */}
      <section className="py-16 bg-amber-500 text-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <div className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-3">
            Ready To Start Your Concrete Project?
          </div>
          <p className="text-xs sm:text-base text-slate-950 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
            Contact Brook Concrete Company today to schedule your complimentary consultation and site evaluation in Dunwoody, GA.
          </p>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-3 bg-slate-950 hover:bg-slate-900 text-white font-black px-8 py-4 rounded text-sm sm:text-base uppercase tracking-wider shadow-xl transition-all pulse-phone"
          >
            <Phone className="w-5 h-5 text-amber-400 fill-current" />
            <span>Call {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
