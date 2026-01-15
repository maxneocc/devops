import type { Metadata } from 'next';
import { Bebas_Neue, Sora, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NEO Cyber Camp - Become a Cybersecurity Professional',
  description: 'An all-in-one platform to learn and practice cybersecurity, available 24/7 with just an internet connection. Start your direct path to a cybersecurity career.',
  keywords: ['cybersecurity', 'training', 'certification', 'online learning', 'cyber camp'],
  openGraph: {
    title: 'NEO Cyber Camp - Become a Cybersecurity Professional',
    description: 'An all-in-one platform to learn and practice cybersecurity, available 24/7.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
