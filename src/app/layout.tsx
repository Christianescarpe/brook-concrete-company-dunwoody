import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://brookconcretecompany.com'),
  title: {
    default: 'Concrete Contractor Dunwoody GA | Brook Concrete Company',
    template: '%s | Brook Concrete Company',
  },
  description: 'Brook Concrete Company is a Dunwoody, GA concrete contractor for homeowners and businesses. We install and repair driveways, patios, walkways, retaining walls, slabs and commercial flatwork.',
  keywords: ['Concrete Contractor Dunwoody GA', 'Concrete Driveways Dunwoody', 'Concrete Patios', 'Stamped Concrete Dunwoody', 'Driveway Replacement Dunwoody'],
  authors: [{ name: 'Brook Concrete Company' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Brook Concrete Company | Dunwoody, GA',
    description: 'Brook Concrete Company is a Dunwoody, GA concrete contractor for homeowners and businesses. We install and repair driveways, patios, walkways, retaining walls, slabs and commercial flatwork.',
    url: 'https://brookconcretecompany.com',
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
