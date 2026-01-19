'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, type Locale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  variant?: 'dropdown' | 'inline';
}

export default function LanguageSwitcher({ currentLocale, variant = 'inline' }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Remove current locale from pathname to get the base path
  const getPathWithoutLocale = () => {
    const segments = pathname.split('/');
    if (locales.includes(segments[1] as Locale)) {
      return '/' + segments.slice(2).join('/');
    }
    return pathname;
  };

  const basePath = getPathWithoutLocale();

  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-2 font-mono text-sm">
        {locales.map((locale, index) => (
          <span key={locale} className="flex items-center">
            {index > 0 && <span className="text-text-muted/50 mx-2">|</span>}
            <Link
              href={`/${locale}${basePath}`}
              className={
                locale === currentLocale
                  ? 'text-accent-cyan'
                  : 'text-text-muted hover:text-accent-cyan transition-colors'
              }
            >
              {locale.toUpperCase()}
            </Link>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <select
        value={currentLocale}
        onChange={(e) => {
          const newLocale = e.target.value as Locale;
          window.location.href = `/${newLocale}${basePath}`;
        }}
        className="bg-transparent text-text-muted text-sm font-mono border border-cyber-border px-3 py-2 focus:outline-none focus:border-accent-cyan/50 cursor-pointer hover:border-accent-cyan/30 transition-colors appearance-none pr-8"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale} className="bg-cyber-deep">
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
        ▼
      </span>
    </div>
  );
}
