'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { CONTACT_INFO } from '@/lib/constants';
import { type Locale } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
  dict: {
    footer: {
      description: string;
      navigation: string;
      legal: string;
      contact: string;
      contactCta: string;
      copyright: string;
      legalLinks: {
        mentions: string;
        cgv: string;
        cgu: string;
        privacy: string;
      };
    };
    nav: {
      formations: string;
      solutions: string;
      plateforme: string;
      blog: string;
    };
  };
}

export default function Footer({ locale, dict }: FooterProps) {
  const navigationLinks = [
    { label: dict.nav.formations, href: `/${locale}/formations` },
    { label: dict.nav.solutions, href: `/${locale}/solutions` },
    { label: dict.nav.plateforme, href: `/${locale}/plateforme` },
    { label: dict.nav.blog, href: `/${locale}/blog` },
  ];

  const legalLinks = [
    { label: dict.footer.legalLinks.mentions, href: `/${locale}/mentions-legales` },
    { label: dict.footer.legalLinks.cgv, href: `/${locale}/cgv` },
    { label: dict.footer.legalLinks.cgu, href: `/${locale}/cgu` },
    { label: dict.footer.legalLinks.privacy, href: `/${locale}/confidentialite` },
  ];

  return (
    <footer className="relative bg-cyber-surface border-t border-cyber-border overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <Container className="relative">
        <div className="py-16 md:py-20">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href={`/${locale}`} className="inline-flex items-center gap-3 mb-6 group">
                <div className="w-10 h-10 flex items-center justify-center border border-accent-cyan/50 group-hover:border-accent-cyan transition-colors">
                  <span className="font-display text-2xl text-accent-cyan">N</span>
                </div>
                <div>
                  <span className="font-display text-xl tracking-wider text-text-primary">NEO</span>
                  <span className="font-mono text-xs text-accent-cyan ml-2">CYBER.CAMP</span>
                </div>
              </Link>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">
                {dict.footer.description}
              </p>
              <div className="space-y-2 text-sm font-mono">
                <p className="text-text-muted">
                  <span className="text-accent-cyan">&gt;</span> {CONTACT_INFO.address}
                </p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-text-muted hover:text-accent-cyan transition-colors block">
                  <span className="text-accent-cyan">&gt;</span> {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-display text-lg tracking-wider text-text-primary mb-6 uppercase">{dict.footer.navigation}</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-muted text-sm hover:text-accent-cyan transition-colors flex items-center gap-2 group"
                    >
                      <span className="font-mono text-xs text-text-muted/50 group-hover:text-accent-cyan transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-display text-lg tracking-wider text-text-primary mb-6 uppercase">{dict.footer.legal}</h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-muted text-sm hover:text-accent-cyan transition-colors flex items-center gap-2 group"
                    >
                      <span className="font-mono text-xs text-text-muted/50 group-hover:text-accent-cyan transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-display text-lg tracking-wider text-text-primary mb-6 uppercase">{dict.footer.contact}</h4>
              <div className="space-y-4">
                <Link
                  href={`/${locale}/contact`}
                  className="block px-4 py-3 bg-cyber-deep border border-cyber-border hover:border-accent-cyan/50 transition-colors text-center"
                >
                  <span className="font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors">
                    &gt; {dict.footer.contactCta}
                  </span>
                </Link>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={CONTACT_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-cyber-border text-text-muted hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                    aria-label="LinkedIn"
                  >
                    <span className="font-mono text-xs">Li</span>
                  </a>
                  <a
                    href={CONTACT_INFO.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-cyber-border text-text-muted hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                    aria-label="Twitter"
                  >
                    <span className="font-mono text-xs">X</span>
                  </a>
                  <a
                    href={CONTACT_INFO.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-cyber-border text-text-muted hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                    aria-label="YouTube"
                  >
                    <span className="font-mono text-xs">YT</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-cyber-border flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-text-muted text-sm font-mono">
              <span className="text-accent-green">[</span>
              &copy; {new Date().getFullYear()} NEO Cyber Camp
              <span className="text-accent-green">]</span>
              <span className="mx-2 text-text-muted/50">//</span>
              {dict.footer.copyright}
            </p>

            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} variant="inline" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
