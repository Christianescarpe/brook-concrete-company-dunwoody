'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  category: 'driveways' | 'patios' | 'stamped' | 'slabs' | 'commercial';
  categoryLabel: string;
  image: string;
  link: string;
}

const allProjects: ProjectItem[] = [
  {
    id: 1,
    title: 'Residential Concrete Driveway',
    category: 'driveways',
    categoryLabel: 'DRIVEWAYS',
    image: '/images/driveway-luxury.webp',
    link: '/concrete-driveways/',
  },
  {
    id: 2,
    title: 'Custom Backyard Concrete Patio',
    category: 'patios',
    categoryLabel: 'PATIOS',
    image: '/images/patio-deck.webp',
    link: '/concrete-patios/',
  },
  {
    id: 3,
    title: 'Stamped Concrete Pool Deck',
    category: 'stamped',
    categoryLabel: 'STAMPED',
    image: '/images/patio-pavers.webp',
    link: '/stamped-concrete/',
  },
  {
    id: 4,
    title: 'Commercial Concrete Slabs & Foundations',
    category: 'commercial',
    categoryLabel: 'COMMERCIAL',
    image: '/images/fresh-pour.webp',
    link: '/commercial-concrete/',
  },
  {
    id: 5,
    title: 'Reinforced Concrete Foundation Slab',
    category: 'slabs',
    categoryLabel: 'SLABS',
    image: '/images/foundation-pour.webp',
    link: '/concrete-slabs/',
  },
  {
    id: 6,
    title: 'Curved Concrete Walkway & Steps',
    category: 'driveways',
    categoryLabel: 'WALKWAYS',
    image: '/images/walkway-curved.webp',
    link: '/concrete-walkways/',
  },
];

const categories = [
  { key: 'all', label: 'ALL PROJECTS' },
  { key: 'driveways', label: 'DRIVEWAYS' },
  { key: 'patios', label: 'PATIOS' },
  { key: 'stamped', label: 'STAMPED' },
  { key: 'slabs', label: 'SLABS' },
  { key: 'commercial', label: 'COMMERCIAL' },
];

export default function ProjectGallery() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filtered = activeTab === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === activeTab);

  const displayList = filtered.slice(0, 4);

  return (
    <div className="w-full">
      {/* Category Filter Tabs (styled exactly like the mockup filter row) */}
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mb-10 border-b border-gray-700/80 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveTab(cat.key)}
            className={`px-4 sm:px-6 py-2.5 text-xs font-black uppercase tracking-wider transition-all rounded-sm ${
              activeTab === cat.key
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-gray-300 hover:text-amber-400 hover:bg-[#28323f]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 4-Item Grid matching the mockup (with 1 prominent yellow highlight card) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {displayList.map((proj, idx) => {
          // In the mockup, the 3rd card is featured with bright yellow background!
          const isFeatured = idx === 2;

          if (isFeatured) {
            return (
              <div
                key={proj.id}
                className="relative bg-amber-500 rounded p-8 flex flex-col justify-center items-center text-center shadow-lg group hover:bg-amber-400 transition-all min-h-[300px]"
              >
                <div className="w-14 h-14 rounded-full bg-slate-950/15 border-2 border-slate-950/20 flex items-center justify-center text-slate-950 mb-5 group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-900/80 mb-2">
                  DUNWOODY, GA
                </span>
                <div className="text-xl font-black text-slate-950 uppercase tracking-tight mb-4 leading-snug">
                  {proj.title}
                </div>
                <Link
                  href={proj.link}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-slate-950 text-white px-5 py-2.5 rounded shadow hover:bg-slate-900 transition-colors"
                >
                  <span>View Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          }

          return (
            <div
              key={proj.id}
              className="group relative bg-[#1c222b] rounded overflow-hidden shadow border border-gray-800 flex flex-col min-h-[300px]"
            >
              <div className="relative h-full min-h-[220px] w-full overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Overlay on hover with search icon & title */}
                <div className="absolute inset-0 bg-[#222933]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mb-3">
                    <Search className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="text-base font-black text-white uppercase tracking-tight mb-2">
                    {proj.title}
                  </div>
                  <span className="text-xs text-amber-400 font-bold mb-4">
                    Dunwoody, GA
                  </span>
                  <Link
                    href={proj.link}
                    className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-4 py-2 rounded uppercase tracking-wider transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="p-4 bg-[#222933] border-t border-gray-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-amber-400 uppercase block">
                    {proj.categoryLabel}
                  </span>
                  <span className="font-bold text-gray-200 text-xs truncate max-w-[170px] block">
                    {proj.title}
                  </span>
                </div>
                <Link
                  href={proj.link}
                  className="text-amber-400 hover:text-amber-300 font-bold text-xs"
                >
                  →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
