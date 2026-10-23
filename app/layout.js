import './globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { profile } from '@/data/profile';

const openSans = localFont({
  src: [
    { path: './fonts/OpenSans-Variable.woff2', weight: '300 800', style: 'normal' },
    { path: './fonts/OpenSans-Variable-Italic.woff2', weight: '300 800', style: 'italic' },
  ],
  variable: '--font-open-sans',
  display: 'swap',
});

const comfortaa = localFont({
  src: [{ path: './fonts/Comfortaa-Variable.woff2', weight: '300 700', style: 'normal' }],
  variable: '--font-comfortaa',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const description = `${profile.name} is a ${profile.title.toLowerCase()} with ${profile.yearsExperience} years in demand planning, logistics analytics and inventory optimization across CPG, infrastructure and global distribution.`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    profile.name,
    'Supply Chain Analyst',
    'Demand Planning',
    'S&OP',
    'Logistics Analytics',
    'Inventory Optimization',
    'SAP IBP',
    'Power BI',
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  openGraph: {
    type: 'profile',
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description,
  },
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${comfortaa.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JavaScript runs */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
