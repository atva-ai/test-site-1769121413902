import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const headingFont = Poppins({ 
  subsets: ['latin'],
  variable: '--font-heading',
});

const bodyFont = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
});

// SEO metadata - use provided values (already interpolated) or build from company data
const seoTitle = "Nutrigo Natura Agrotech Private Limited - Manufacturer of Indian Spices from Guwahati - Wholesaler | in";
const seoDescription = "Leading Wholesaler of products in , . Year Established: . GST Verified. Contact us for quality products and competitive pricing.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
