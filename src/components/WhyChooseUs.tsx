'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, User, ArrowRight } from 'lucide-react';
import { BLOGS_LIST } from '@/data/siteData';

const whyItems = [
  {
    title: 'Thorough Subgrade Groundwork',
    content: 'Longevity starts from the subgrade up. We perform thorough grading and mechanical sub-base compaction, using high-grade crushed stone base materials to eliminate settlement pockets.',
  },
  {
    title: 'Total Transparency & Clear Written Estimates',
    content: 'Our written estimates clearly detail concrete thickness, reinforcement specifications, control joint placement, and job timelines. There are never unexpected surprises or hidden line items.',
  },
  {
    title: 'Clean, Respectful Job Sites',
    content: 'We maintain a clean, organized job site, treating your home, landscaping, and neighboring boundaries with utmost respect throughout demolition, pouring, and curing phases.',
  },
  {
    title: 'North Georgia Soil & Climate Durability',
    content: 'Our specialized concrete solutions are designed specifically to withstand regional soil expansion and moisture shifts, guaranteeing that your installation remains stable and crack-resistant for decades to come.',
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number>(1);
  const latestArticles = BLOGS_LIST.slice(0, 3);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left Column: WHY HOMEOWNERS AND BUSINESSES CHOOSE BROOK CONCRETE COMPANY */}
      <div>
        <div className="mb-6">
          <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
            WHY CHOOSE BROOK CONCRETE COMPANY
          </div>
          <div className="w-12 h-1 bg-amber-500 mt-2" />
        </div>

        <div className="space-y-3">
          {whyItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="rounded overflow-hidden border border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className={`w-full text-left px-5 py-3.5 flex items-center justify-between font-extrabold text-xs sm:text-sm tracking-wide transition-colors ${
                    isOpen
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-[#f3f4f6] text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-90 text-slate-950 stroke-[3]' : 'text-slate-600'
                      }`}
                    />
                    <span>{item.title}</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 bg-white text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: LATEST ARTICLES */}
      <div>
        <div className="mb-6">
          <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
            LATEST ARTICLES
          </div>
          <div className="w-12 h-1 bg-amber-500 mt-2" />
        </div>

        <div className="space-y-4">
          {latestArticles.map((article, idx) => {
            const dateNum = 24 - idx * 3;

            return (
              <div
                key={article.urlSlug}
                className="flex items-start gap-4 p-4 bg-white rounded border border-slate-200 hover:border-amber-500 hover:shadow-sm transition-all group"
              >
                {/* Date Square Badge matching mockup */}
                <div className="w-16 h-16 shrink-0 bg-[#e5e7eb] group-hover:bg-amber-500 transition-colors rounded flex flex-col items-center justify-center text-slate-800 group-hover:text-slate-950 font-black text-center select-none">
                  <span className="text-lg leading-none">{dateNum}</span>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold">OCT</span>
                </div>

                {/* Article Info */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={article.urlSlug}
                    className="font-extrabold text-slate-900 group-hover:text-amber-600 text-xs sm:text-sm leading-snug block mb-1.5 transition-colors"
                  >
                    {article.pageTitle}
                  </Link>

                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-amber-500" />
                      <span>Brook Concrete</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-500" />
                      <span>Dunwoody, GA</span>
                    </span>
                  </div>

                  <Link
                    href={article.urlSlug}
                    className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-amber-600 group-hover:text-amber-700"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
