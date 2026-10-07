'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST, PageData, extractH1AndContent } from '@/data/siteData';

interface ServicePageTemplateProps {
  page: PageData;
  heroImage?: string;
}

export default function ServicePageTemplate({
  page,
  heroImage = '/images/driveway-luxury.webp',
}: ServicePageTemplateProps) {
  // Extract H1 for the hero banner and strip duplicate from content body
  const { h1, contentWithoutH1 } = extractH1AndContent(page.htmlContent);
  const displayH1 = h1 || page.pageTitle;

  // All service pages for the sidebar navigation
  const sidebarItems = SERVICES_LIST.filter(s => s.urlSlug !== '/concrete-services/');

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero / Header Banner matching media_1791362571960.jpg */}
      <div className="bg-[#f8f9fa] border-b border-gray-200 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {/* H1 placed on the hero section */}
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
            {displayH1}
          </h1>
          <div className="text-xs text-gray-500 font-medium flex items-center gap-1.5 shrink-0">
            <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <span>|</span>
            <Link href="/concrete-services/" className="hover:text-amber-500 transition-colors">Services</Link>
            <span>|</span>
            <span className="text-slate-800 font-semibold">{page.pageTitle}</span>
          </div>
        </div>
      </div>

      {/* 2. Main 2-Column Section matching media_1791362571960.jpg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Service Navigation Buttons */}
            <div className="flex flex-col space-y-1.5">
              <Link
                href="/concrete-services/"
                className={`w-full text-left px-5 py-3.5 text-xs font-bold tracking-wide transition-all uppercase ${
                  page.urlSlug === '/concrete-services/'
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                    : 'bg-[#f4f6f9] hover:bg-[#eaeef3] text-slate-700'
                }`}
              >
                Concrete Services Overview
              </Link>

              {sidebarItems.map((item) => {
                const isActive = item.urlSlug === page.urlSlug;
                return (
                  <Link
                    key={item.urlSlug}
                    href={item.urlSlug}
                    className={`w-full text-left px-5 py-3.5 text-xs font-bold tracking-wide transition-all uppercase ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                        : 'bg-[#f4f6f9] hover:bg-[#eaeef3] text-slate-700'
                    }`}
                  >
                    {item.pageTitle}
                  </Link>
                );
              })}
            </div>

            {/* CONTACT US Box matching mockup sidebar */}
            <div className="pt-2">
              <div className="text-base font-black text-slate-900 uppercase tracking-wider mb-2 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-amber-500">
                CONTACT US
              </div>
              
              <div className="mt-5 space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-slate-900">Dunwoody Office</span>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-slate-900">Phone:</span>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-slate-700 hover:text-amber-600 font-bold">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone CTA button */}
              <div className="mt-6">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-4 rounded-sm text-xs uppercase tracking-wider transition-colors pulse-phone"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Main Content (8 cols) */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* Featured Image matching right column photo */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 border border-slate-200 rounded-sm">
              <Image
                src={heroImage}
                alt={displayH1}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Exact Content from Spreadsheet with duplicate H1 removed */}
            <div className="article-content text-slate-700 leading-relaxed text-sm sm:text-base">
              <div dangerouslySetInnerHTML={{ __html: contentWithoutH1 }} />
            </div>

            {/* Bottom Yellow CTA Banner matching mockup */}
            <div className="bg-amber-500 text-slate-950 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm shadow-sm">
              <div className="text-center sm:text-left">
                <span className="block text-lg sm:text-xl font-black uppercase tracking-tight text-slate-950">
                  {page.pageTitle}
                </span>
                <span className="text-xs sm:text-sm text-slate-900 font-semibold">
                  Brook Concrete Company • {COMPANY_INFO.phoneDisplay}
                </span>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-black px-6 py-3 rounded-sm text-xs uppercase tracking-wider shrink-0 transition-colors pulse-phone"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 fill-current" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
