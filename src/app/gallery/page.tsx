import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, HardHat } from 'lucide-react';
import { getPageBySlug, COMPANY_INFO, extractH1AndContent } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Concrete Project Gallery | Brook Concrete Dunwoody',
  description: 'See examples of the concrete work Brook Concrete Company completes for homes and businesses in Dunwoody, GA and nearby communities.',
};

export default function GalleryPage() {
  const page = getPageBySlug('/gallery/');
  const { h1, contentWithoutH1 } = extractH1AndContent(page?.htmlContent || '');
  const displayH1 = h1 || 'Concrete Project Gallery | Dunwoody, GA';

  const photos = [
    { src: '/images/driveway-luxury.webp', title: 'Concrete Driveway' },
    { src: '/images/driveway-new.webp', title: 'Driveway Replacement' },
    { src: '/images/patio-residential.webp', title: 'Concrete Patio' },
    { src: '/images/patio-pavers.webp', title: 'Stamped & Decorative Concrete' },
    { src: '/images/walkway-curved.webp', title: 'Concrete Walkway' },
    { src: '/images/concrete-smoothing.webp', title: 'Concrete Repair & Resurfacing' },
  ];

  return (
    <div className="bg-[#fbfcfd]">
      {/* Banner with H1 & Worker Silhouette */}
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
              <span className="text-amber-400 font-bold">Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded overflow-hidden shadow-sm border border-slate-200"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-3 text-center border-t border-slate-100 font-bold text-xs text-slate-800">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Full Sheet HTML Content with duplicate H1 removed */}
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
            Dunwoody, GA • {COMPANY_INFO.addressShort}
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
