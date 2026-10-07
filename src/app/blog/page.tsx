import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, HardHat } from 'lucide-react';
import { BLOGS_LIST, COMPANY_INFO } from '@/data/siteData';
import { getImageForSlug } from '@/data/imageMap';

export const metadata: Metadata = {
  title: 'Blog | Brook Concrete Dunwoody',
  description: 'Articles and guides from Brook Concrete Company in Dunwoody, GA.',
};

export default function BlogHubPage() {
  return (
    <div className="bg-[#fbfcfd]">
      {/* Banner with Worker Silhouette */}
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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-xs uppercase tracking-widest mb-2">
              <HardHat className="w-3.5 h-3.5" />
              <span>Brook Concrete Company</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
              Blog &amp; Knowledge Base
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Dunwoody, GA Concrete Articles, Cost Guides &amp; Engineering Tips
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS_LIST.map((post) => {
            const img = getImageForSlug(post.urlSlug);
            return (
              <article
                key={post.urlSlug}
                className="bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={img}
                    alt={post.pageTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-3 leading-snug">
                    <Link href={post.urlSlug}>
                      {post.pageTitle}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.metaDescription}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={post.urlSlug}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-700"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Phone Strip */}
        <div className="mt-16 bg-[#222933] text-white rounded p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t-4 border-amber-500">
          <div>
            <div className="text-xl font-black uppercase text-white mb-1">
              Brook Concrete Company
            </div>
            <p className="text-sm text-gray-300">
              {COMPANY_INFO.address}
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded text-xs uppercase tracking-wider shrink-0 transition-colors pulse-phone"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
