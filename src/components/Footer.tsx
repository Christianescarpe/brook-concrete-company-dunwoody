import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';
import { COMPANY_INFO, BLOGS_LIST, SERVICES_LIST, LOCATIONS_LIST } from '@/data/siteData';

export default function Footer() {
  const recentPosts = BLOGS_LIST.slice(0, 3);

  return (
    <footer className="relative bg-[#222933] text-gray-300 overflow-hidden border-t-4 border-amber-500">
      {/* Background worker watermark from the mockup on the right side */}
      <div className="absolute right-0 bottom-0 w-80 md:w-96 h-[400px] opacity-15 pointer-events-none select-none hidden lg:block z-0 text-white">
        <Image
          src="/images/footer-worker.svg"
          alt="Construction Worker"
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: About Us (verbatim from sheet) */}
          <div>
            <div className="text-white font-black text-sm uppercase tracking-widest mb-6 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-500">
              ABOUT US
            </div>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              Brook Concrete Company is a Dunwoody, GA concrete contractor serving residential and commercial property owners throughout Dunwoody, GA, and the northern Atlanta metropolitan area.
            </p>
            {/* 4 Yellow Square Social Buttons like Mockup */}
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center rounded transition-colors"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center rounded transition-colors"
              >
                <TwitterIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center rounded transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center rounded transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Recent Posts (verbatim titles from sheet) */}
          <div>
            <div className="text-white font-black text-sm uppercase tracking-widest mb-6 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-500">
              RECENT POSTS
            </div>
            <ul className="space-y-4 text-xs">
              {recentPosts.map((post) => (
                <li key={post.urlSlug} className="border-b border-gray-700/60 pb-3 last:border-0 last:pb-0">
                  <Link
                    href={post.urlSlug}
                    className="block text-gray-200 hover:text-amber-400 transition-colors font-medium leading-snug mb-1"
                  >
                    {post.pageTitle}
                  </Link>
                  <span className="text-[11px] text-gray-400 block">Brook Concrete • Dunwoody, GA</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details (verbatim from sheet note 8) */}
          <div>
            <div className="text-white font-black text-sm uppercase tracking-widest mb-6 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-500">
              CONTACT US
            </div>
            <ul className="space-y-4 text-xs text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">Address:</span>
                  <span>{COMPANY_INFO.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">Phone:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-amber-400 hover:text-amber-300 font-bold block"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2.5 rounded text-xs uppercase tracking-wider transition-colors shadow-sm pulse-phone"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Column 4: Visible Google Map Embed (mandated by prompt) */}
          <div>
            <div className="text-white font-black text-sm uppercase tracking-widest mb-6 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-500">
              OUR LOCATION
            </div>
            <div className="w-full rounded overflow-hidden border border-gray-700 shadow-xl bg-gray-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3310.743149520343!2d-84.3081191!3d33.9220096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50967baa92d57%3A0xcf013ea7ebdc8eb!2s!5e0!3m2!1sen!2sph!4v1791357395412!5m2!1sen!2sph"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Brook Concrete Company Location Map"
                className="w-full h-[200px] block"
              />
            </div>
          </div>

        </div>

        {/* Quick Links to Services & Service Areas */}
        <div className="mt-12 pt-8 border-t border-gray-700/60 space-y-4 text-xs text-gray-400">
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center">
            <span className="text-amber-400 font-bold uppercase tracking-wider">Services:</span>
            {SERVICES_LIST.map((s) => (
              <Link key={s.urlSlug} href={s.urlSlug} className="hover:text-amber-400 transition-colors">
                {s.pageTitle}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center">
            <span className="text-amber-400 font-bold uppercase tracking-wider">Service Areas:</span>
            {LOCATIONS_LIST.map((l) => (
              <Link key={l.urlSlug} href={l.urlSlug} className="hover:text-amber-400 transition-colors">
                {l.pageTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-footer Copyright Bar */}
      <div className="bg-[#181e26] py-4 border-t border-gray-800 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Link href="/about/" className="hover:text-amber-400 transition-colors">About</Link>
            <Link href="/concrete-services/" className="hover:text-amber-400 transition-colors">Services</Link>
            <Link href="/service-areas/" className="hover:text-amber-400 transition-colors">Locations</Link>
            <Link href="/blog/" className="hover:text-amber-400 transition-colors">Blog</Link>
            <Link href="/gallery/" className="hover:text-amber-400 transition-colors">Gallery</Link>
            <Link href="/contact/" className="hover:text-amber-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
