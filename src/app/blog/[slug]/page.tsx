import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowLeft, ArrowRight, HardHat } from 'lucide-react';
import { getPageBySlug, BLOGS_LIST, COMPANY_INFO, extractH1AndContent } from '@/data/siteData';
import { getImageForSlug } from '@/data/imageMap';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOGS_LIST.map((post) => ({
    slug: post.urlSlug.replace('/blog/', '').replace(/\/$/, ''),
  }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const slug = `/blog/${params.slug}/`;
  const post = getPageBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const slug = `/blog/${params.slug}/`;
  const post = getPageBySlug(slug);

  if (!post) {
    notFound();
  }

  const { h1, contentWithoutH1 } = extractH1AndContent(post.htmlContent);
  const displayH1 = h1 || post.pageTitle;

  const heroImage = getImageForSlug(slug);
  const otherPosts = BLOGS_LIST.filter(p => p.urlSlug !== slug);

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
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-semibold">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <span>/</span>
              <Link href="/blog/" className="hover:text-amber-400">Blog</Link>
              <span>/</span>
              <span className="text-amber-400 truncate">{post.pageTitle}</span>
            </div>

            {/* Single H1 in hero section */}
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase leading-tight">
              {displayH1}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article (8 cols) */}
          <main className="lg:col-span-8 space-y-8">
            <div className="relative h-72 sm:h-96 w-full rounded overflow-hidden shadow-sm border border-slate-200">
              <Image
                src={heroImage}
                alt={displayH1}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Content with duplicate H1 stripped */}
            <div className="bg-white rounded p-8 sm:p-10 shadow-sm border border-slate-200">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: contentWithoutH1 }}
              />
            </div>

            {/* Bottom Phone CTA */}
            <div className="bg-amber-500 text-slate-950 rounded p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <div className="text-xl font-black uppercase mb-1">
                  Brook Concrete Company
                </div>
                <p className="text-sm text-slate-900 font-medium">
                  {COMPANY_INFO.addressShort}
                </p>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-black px-6 py-3.5 rounded text-xs uppercase tracking-wider shrink-0 transition-colors pulse-phone"
              >
                <Phone className="w-4 h-4 text-amber-400 fill-current" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </main>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Phone Card */}
            <div className="bg-[#1f2631] text-white rounded p-6 shadow-md border-t-4 border-amber-500">
              <div className="text-lg font-black text-white uppercase mb-3">
                Brook Concrete Company
              </div>
              <div className="text-xs text-gray-300 space-y-2 mb-6">
                <p><strong>Address:</strong> {COMPANY_INFO.address}</p>
                <p><strong>Phone:</strong> {COMPANY_INFO.phoneDisplay}</p>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 px-4 rounded text-xs uppercase tracking-wider transition-colors pulse-phone"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Other Blog Articles */}
            <div className="bg-white rounded border border-slate-200 p-6 shadow-sm">
              <div className="font-black text-slate-900 text-base uppercase tracking-wider mb-4 pb-2 border-b-2 border-amber-500">
                Recent Posts
              </div>
              <div className="space-y-4">
                {otherPosts.map((other) => (
                  <div key={other.urlSlug} className="group border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <Link
                      href={other.urlSlug}
                      className="font-bold text-slate-800 group-hover:text-amber-600 text-xs leading-snug block mb-1 transition-colors"
                    >
                      {other.pageTitle}
                    </Link>
                    <span className="text-[11px] text-amber-600 font-semibold group-hover:underline inline-flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Return to blog */}
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>

          </aside>
        </div>
      </section>
    </div>
  );
}
