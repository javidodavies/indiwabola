import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Script } from 'next/script';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Indiwabola World Cup Hub 2026',
  description: 'Your Ultimate FIFA World Cup 2026 Destination',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50 min-h-screen">
        <Header />
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
          crossorigin="anonymous"
          strategy="lazy"
        />
        <Script
          id="ga-script"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}