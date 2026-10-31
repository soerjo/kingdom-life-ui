import type { Metadata } from 'next';

import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import { getLocale } from 'next-intl/server';

import { defaultLocale } from '@/i18n/request';
import { Providers } from '@/providers';

import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kingdom Life Church — In the House of GOD, We Flourish',
  description: 'Gereja Kontemporer yang Berpusat pada Kristus. Membangun Generasi yang Berakar Kuat & Bertumbuh.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Kingdom Life Church — In the House of GOD, We Flourish',
    description: 'Gereja Kontemporer yang Berpusat pada Kristus. Membangun Generasi yang Berakar Kuat & Bertumbuh.',
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'Kingdom Life Church Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingdom Life Church — In the House of GOD, We Flourish',
    description: 'Gereja Kontemporer yang Berpusat pada Kristus. Membangun Generasi yang Berakar Kuat & Bertumbuh.',
    images: ['/images/logo.png'],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let locale: string = defaultLocale;

  try {
    locale = await getLocale();
  } catch {
    // Fallback during static generation or when outside request context
  }

  return (
    <html suppressHydrationWarning className="h-full antialiased scroll-smooth" lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} font-sans min-h-full flex flex-col`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
