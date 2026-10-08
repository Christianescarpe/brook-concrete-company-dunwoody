import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, HardHat } from 'lucide-react';
import { getPageBySlug, COMPANY_INFO, extractH1AndContent } from '@/data/siteData';
import { JsonLd } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'About Brook Concrete Company',
  description: 'Brook Concrete Company is a Dunwoody, GA concrete contractor dedicated to building durable, good-looking concrete for homes and businesses.',
  alternates: {
    canonical: 'https://www.concretecontractordunwoody.site/about/',
  },
  openGraph: {
    title: 'About Brook Concrete Company',
    description: 'Brook Concrete Company is a Dunwoody, GA concrete contractor dedicated to building durable, good-looking concrete for homes and businesses.',
    url: 'https://www.concretecontractordunwoody.site/about/',
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
      name: 'About Us',
      item: 'https://www.concretecontractordunwoody.site/about/',
    },
  ],
};

export default function AboutPage() {
  const page = getPageBySlug('/about/');
  const { h1, contentWithoutH1 } = extractH1AndContent(page?.htmlContent || '');
  const displayH1 = h1 || 'About Brook Concrete Company';

  return (
    <div className="bg-[#fbfcfd]">
      <JsonLd schema={breadcrumbSchema} />
      {/* 1. Header Banner with H1 & Worker Silhouette */}
      <section className="relative bg-[#222933] text-white py-14 md:py-20 border-b border-gray-800 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 md:w-96 h-[300px] opacity-15 pointer-events-none hidden md:block z-0 text-white select-none">
          <Image
            src="/images/footer-worker.svg"
            alt="Construction Worker"
            fill
            className="object-contain object-bottom"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-xs uppercase tracking-widest mb-2">
                <HardHat className="w-3.5 h-3.5" />
                <span>Brook Concrete Company</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                {displayH1}
              </h1>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-amber-400 font-bold">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Section (duplicate H1 stripped) */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="relative h-80 sm:h-[400px] rounded overflow-hidden shadow-sm border border-slate-200">
          <Image
            src="/images/team-review.webp"
            alt={displayH1}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Exact Sheet Content with duplicate H1 removed */}
        <div className="bg-white rounded-lg p-8 sm:p-12 shadow-sm border border-slate-200">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: contentWithoutH1 }}
          />
        </div>

        {/* Phone CTA Banner */}
        <div className="bg-amber-500 text-slate-950 rounded-lg p-8 text-center shadow-md">
          <div className="text-2xl font-black uppercase mb-2">
            Brook Concrete Company
          </div>
          <p className="text-sm text-slate-900 max-w-lg mx-auto mb-6 font-medium">
            1936 Cotillion Dr, Dunwoody, GA 30338, United States
          </p>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-black px-8 py-3.5 rounded text-xs uppercase tracking-wider transition-colors pulse-phone"
          >
            <Phone className="w-4 h-4 text-amber-400 fill-current" />
            <span>Call {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
