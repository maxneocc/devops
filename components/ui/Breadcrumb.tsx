'use client';

import Link from 'next/link';
import { type Locale } from '@/lib/i18n';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  homeLabel?: string;
  locale?: Locale;
}

export default function Breadcrumb({ items, homeLabel = 'Home', locale }: BreadcrumbProps) {
  const homeHref = locale ? `/${locale}` : '/';

  return (
    <nav aria-label="Breadcrumb" className="font-mono text-sm">
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link
            href={homeHref}
            className="text-text-muted hover:text-accent-cyan transition-colors"
          >
            {homeLabel}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-text-muted/50">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="text-text-muted hover:text-accent-cyan transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-accent-cyan">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
