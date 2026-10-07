'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Menu, X, ChevronDown, Wrench, Search, HardHat } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';
import { COMPANY_INFO, SERVICES_LIST, LOCATIONS_LIST } from '@/data/siteData';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-md">
      {/* 1. TOP UTILITY BAR (Light gray bar matching mockup top row) */}
      <div className="bg-[#f3f4f6] text-slate-600 text-xs py-2 px-4 sm:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Social Icons on Left */}
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">Follow Us:</span>
            <div className="flex items-center gap-2.5 text-slate-500">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-amber-600 transition-colors">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-amber-600 transition-colors">
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-amber-600 transition-colors">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-amber-600 transition-colors">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right side contact cue */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-slate-500">Dunwoody's Dedicated Concrete Contractor</span>
            <span className="text-slate-300">|</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-slate-800 hover:text-amber-600 font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN LOGO & CONTACT WIDGETS ROW (Clean White, exactly like mockup) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
          <div className="w-12 h-12 bg-amber-500 rounded flex items-center justify-center text-slate-950 shadow-sm group-hover:bg-amber-400 transition-colors">
            <HardHat className="w-7 h-7" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-none">
              <span>BROOK</span>
              <span className="text-amber-500 ml-1.5">CONCRETE</span>
            </div>
            <div className="text-[11px] font-extrabold tracking-widest text-slate-500 uppercase mt-1">
              Dunwoody, GA
            </div>
          </div>
        </Link>

        {/* Contact Widgets (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* Phone Widget */}
          <div className="flex items-center gap-3 border-r border-slate-200 pr-6">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold block">Call Us Today</span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="font-black text-slate-900 text-sm hover:text-amber-600 transition-colors"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Location Widget */}
          <div className="flex items-center gap-3 border-r border-slate-200 pr-6">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
              <MapPin className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-xs">
              <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold block">Office Location</span>
              <span className="font-bold text-slate-900 text-sm block">1936 Cotillion Dr</span>
              <span className="text-slate-500 text-[11px]">Dunwoody, GA 30338</span>
            </div>
          </div>

          {/* CTA Phone Button */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded text-sm uppercase tracking-wider shadow-sm hover:shadow transition-all pulse-phone shrink-0"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Header CTA + Hamburger */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="bg-amber-500 text-slate-950 font-black px-3.5 py-2 rounded text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 hover:text-amber-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. PRIMARY NAVIGATION BAR (Dark Charcoal `#222933` matching mockup) */}
      <nav className="bg-[#222933] text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="hidden lg:flex items-center justify-between">
            <ul className="flex items-center font-bold text-[13px] tracking-wider uppercase">
              <li>
                <Link
                  href="/"
                  className={`inline-block py-4 px-5 transition-colors ${
                    isActive('/') && pathname === '/'
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-gray-200 hover:text-amber-400 hover:bg-[#1a2028]'
                  }`}
                >
                  HOME
                </Link>
              </li>

              {/* Services Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/concrete-services/"
                  className={`inline-flex items-center gap-1 py-4 px-5 transition-colors ${
                    pathname.includes('/concrete-') && pathname !== '/concrete-services/'
                      ? 'text-amber-400'
                      : 'text-gray-200 hover:text-amber-400 hover:bg-[#1a2028]'
                  }`}
                >
                  <span>SERVICES</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>

                {servicesOpen && (
                  <div className="absolute left-0 top-full w-80 bg-[#1a2028] text-gray-200 shadow-2xl py-2 z-50 border-t-2 border-amber-500 max-h-[480px] overflow-y-auto">
                    <Link
                      href="/concrete-services/"
                      className="block px-4 py-2.5 font-bold text-amber-400 hover:bg-amber-500 hover:text-slate-950 text-xs uppercase tracking-wider border-b border-gray-800"
                    >
                      All Concrete Services
                    </Link>
                    {SERVICES_LIST.filter(s => s.urlSlug !== '/concrete-services/').map((service) => (
                      <Link
                        key={service.urlSlug}
                        href={service.urlSlug}
                        className="block px-4 py-2 text-xs hover:bg-[#222933] hover:text-amber-400 transition-colors border-b border-gray-800/40"
                      >
                        {service.pageTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Service Areas Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <Link
                  href="/service-areas/"
                  className={`inline-flex items-center gap-1 py-4 px-5 transition-colors ${
                    isActive('/service-areas')
                      ? 'text-amber-400'
                      : 'text-gray-200 hover:text-amber-400 hover:bg-[#1a2028]'
                  }`}
                >
                  <span>AREAS WE SERVE</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>

                {locationsOpen && (
                  <div className="absolute left-0 top-full w-80 bg-[#1a2028] text-gray-200 shadow-2xl py-2 z-50 border-t-2 border-amber-500 max-h-[480px] overflow-y-auto">
                    <Link
                      href="/service-areas/"
                      className="block px-4 py-2.5 font-bold text-amber-400 hover:bg-amber-500 hover:text-slate-950 text-xs uppercase tracking-wider border-b border-gray-800"
                    >
                      Service Areas Overview
                    </Link>
                    {LOCATIONS_LIST.map((loc) => (
                      <Link
                        key={loc.urlSlug}
                        href={loc.urlSlug}
                        className="block px-4 py-2 text-xs hover:bg-[#222933] hover:text-amber-400 transition-colors border-b border-gray-800/40"
                      >
                        {loc.pageTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/gallery/"
                  className={`inline-block py-4 px-5 transition-colors ${
                    isActive('/gallery')
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-gray-200 hover:text-amber-400 hover:bg-[#1a2028]'
                  }`}
                >
                  PROJECTS
                </Link>
              </li>

              <li>
                <Link
                  href="/blog/"
                  className={`inline-block py-4 px-5 transition-colors ${
                    isActive('/blog')
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-gray-200 hover:text-amber-400 hover:bg-[#1a2028]'
                  }`}
                >
                  BLOG
                </Link>
              </li>

              <li>
                <Link
                  href="/about/"
                  className={`inline-block py-4 px-5 transition-colors ${
                    isActive('/about')
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-gray-200 hover:text-amber-400 hover:bg-[#1a2028]'
                  }`}
                >
                  ABOUT US
                </Link>
              </li>

              <li>
                <Link
                  href="/contact/"
                  className={`inline-block py-4 px-5 transition-colors ${
                    isActive('/contact')
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-gray-200 hover:text-amber-400 hover:bg-[#1a2028]'
                  }`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* Right side search or phone link */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="hidden xl:flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors py-2 px-3 bg-[#1a2028] rounded border border-gray-700"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <button
                type="button"
                aria-label="Search"
                className="p-2.5 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1a2028] border-t border-gray-800 text-white px-4 py-4 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded font-bold hover:bg-amber-500 hover:text-slate-950"
            >
              HOME
            </Link>
            <Link
              href="/about/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded font-bold hover:bg-amber-500 hover:text-slate-950"
            >
              ABOUT US
            </Link>
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between py-2 px-3 rounded font-bold hover:bg-[#222933]"
              >
                <span>SERVICES</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 py-1 space-y-1">
                  <Link
                    href="/concrete-services/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs text-amber-400 font-bold"
                  >
                    All Services
                  </Link>
                  {SERVICES_LIST.filter(s => s.urlSlug !== '/concrete-services/').map((service) => (
                    <Link
                      key={service.urlSlug}
                      href={service.urlSlug}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs text-gray-300 hover:text-amber-400"
                    >
                      {service.pageTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="w-full flex items-center justify-between py-2 px-3 rounded font-bold hover:bg-[#222933]"
              >
                <span>AREAS WE SERVE</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {locationsOpen && (
                <div className="pl-4 py-1 space-y-1">
                  <Link
                    href="/service-areas/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs text-amber-400 font-bold"
                  >
                    All Service Areas
                  </Link>
                  {LOCATIONS_LIST.map((loc) => (
                    <Link
                      key={loc.urlSlug}
                      href={loc.urlSlug}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs text-gray-300 hover:text-amber-400"
                    >
                      {loc.pageTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/gallery/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded font-bold hover:bg-amber-500 hover:text-slate-950"
            >
              PROJECTS
            </Link>
            <Link
              href="/blog/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded font-bold hover:bg-amber-500 hover:text-slate-950"
            >
              BLOG
            </Link>
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded font-bold hover:bg-amber-500 hover:text-slate-950"
            >
              CONTACT
            </Link>
            <div className="pt-3 border-t border-gray-800">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full bg-amber-500 text-slate-950 font-black py-3 rounded text-center block uppercase tracking-wider text-sm shadow-md"
              >
                Call {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
