import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd, BASE_BUSINESS_SCHEMA, WEBSITE_SCHEMA } from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.concretecontractordunwoody.site'),
  title: {
    default: 'Concrete Contractor Dunwoody GA',
    template: '%s',
  },
  description: 'Brook Concrete Company is a Dunwoody, GA concrete contractor for homeowners and businesses. We install and repair driveways, patios, walkways, retaining walls, slabs and commercial flatwork.',
  keywords: ['Concrete Contractor Dunwoody GA', 'Concrete Driveways Dunwoody', 'Concrete Patios', 'Stamped Concrete Dunwoody', 'Driveway Replacement Dunwoody'],
  authors: [{ name: 'Brook Concrete Company' }],
  alternates: {
    canonical: 'https://www.concretecontractordunwoody.site/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Brook Concrete Company | Dunwoody, GA',
    description: 'Brook Concrete Company is a Dunwoody, GA concrete contractor for homeowners and businesses. We install and repair driveways, patios, walkways, retaining walls, slabs and commercial flatwork.',
    url: 'https://www.concretecontractordunwoody.site/',
    siteName: 'Brook Concrete Company',
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: 'P7gEBdRljsW0S6ftaijhGpJ2FSD4vIErr3cE3Y3LRZ0',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd schema={[BASE_BUSINESS_SCHEMA, WEBSITE_SCHEMA]} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#fbfcfd] text-slate-800">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
