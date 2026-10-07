import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, HardHat } from 'lucide-react';
import { getPageBySlug, COMPANY_INFO, extractH1AndContent } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Contact Brook Concrete Company | Dunwoody, GA',
  description: 'Ready to start your concrete project? Contact Brook Concrete Company for a free estimate in Dunwoody, GA.',
};

export default function ContactPage() {
  const page = getPageBySlug('/contact/');
  const { h1, contentWithoutH1 } = extractH1AndContent(page?.htmlContent || '');
  const displayH1 = h1 || 'Contact Brook Concrete Company in Dunwoody, GA';

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
              <span className="text-amber-400 font-bold">Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Phone CTA Card (Phone button only, no contact form per instruction) */}
        <div className="bg-[#1f2631] text-white rounded-lg p-8 sm:p-10 shadow-lg border-t-4 border-amber-500">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-2xl font-black tracking-tight text-white uppercase mb-2">
                Brook Concrete Company
              </div>
              <div className="text-xs text-gray-300 space-y-1">
                <p><strong>Address:</strong> {COMPANY_INFO.address}</p>
                <p><strong>Phone:</strong> {COMPANY_INFO.phoneDisplay}</p>
              </div>
            </div>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded text-xs uppercase tracking-wider shrink-0 transition-all pulse-phone shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md">
          <div className="bg-[#222933] text-white py-3 px-5 text-xs font-bold uppercase tracking-wider flex items-center justify-between">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Location Map</span>
            </span>
            <span className="text-gray-400">{COMPANY_INFO.addressShort}</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3310.743149520343!2d-84.3081191!3d33.9220096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50967baa92d57%3A0xcf013ea7ebdc8eb!2s!5e0!3m2!1sen!2sph!4v1791357395412!5m2!1sen!2sph"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Brook Concrete Company Google Map"
            className="w-full h-[380px] block"
          />
        </div>

        {/* Full Sheet Content with duplicate H1 removed */}
        <div className="bg-white rounded-lg p-8 sm:p-12 shadow-sm border border-slate-200">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: contentWithoutH1 }}
          />
        </div>

      </section>
    </div>
  );
}
