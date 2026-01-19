import type { Metadata } from 'next';
import { Bebas_Neue, Sora, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import '../globals.css';
import { ANALYTICS, isAnalyticsConfigured } from '@/lib/constants';
import { locales, type Locale, isValidLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  preload: true,
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false, // Lazy load - used sparingly for accents
  fallback: ['Consolas', 'Monaco', 'monospace'],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!isValidLocale(locale)) {
    return {};
  }

  const dict = await getDictionary(locale);

  return {
    title: {
      default: dict.metadata.title,
      template: `%s | NEO Cyber Camp`,
    },
    description: dict.metadata.description,
    keywords: locale === 'fr'
      ? ['cybersécurité', 'formation', 'certification', 'ISC2', 'Stormshield', 'LPIC', 'e-learning', 'labs virtuels', 'France']
      : ['cybersecurity', 'training', 'certification', 'ISC2', 'Stormshield', 'LPIC', 'e-learning', 'virtual labs'],
    authors: [{ name: 'NEO Cyber Camp' }],
    creator: 'NEO Cyber Camp',
    publisher: 'NEO Cyber Camp',
    metadataBase: new URL('https://neocc.co'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'fr': '/fr',
        'en': '/en',
      },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `https://neocc.co/${locale}`,
      siteName: 'NEO Cyber Camp',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'NEO Cyber Camp',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ['/og-image.jpg'],
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
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  const analyticsStatus = isAnalyticsConfigured();

  return (
    <html lang={params.locale} className={`${bebasNeue.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Google Analytics 4 - Only loads when properly configured */}
        {analyticsStatus.ga4 && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ANALYTICS.ga4Id}');
              `}
            </Script>
          </>
        )}

        {/* Crisp Chat - Only loads when properly configured */}
        {analyticsStatus.crisp && (
          <Script id="crisp-chat" strategy="afterInteractive">
            {`
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="${ANALYTICS.crispId}";
              (function(){
                var d=document;
                var s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `}
          </Script>
        )}
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
