'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { EXTERNAL_LINKS } from '@/lib/constants';
import { type Locale } from '@/lib/i18n';
import Container from '@/components/ui/Container';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';

interface NavbarProps {
  locale: Locale;
  dict: {
    nav: {
      formations: string;
      solutions: string;
      plateforme: string;
      blog: string;
      login: string;
      contact: string;
    };
  };
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: dict.nav.formations, href: `/${locale}/formations` },
    { label: dict.nav.solutions, href: `/${locale}/solutions` },
    { label: dict.nav.plateforme, href: `/${locale}/plateforme` },
    { label: dict.nav.blog, href: `/${locale}/blog` },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-cyber-deep/90 backdrop-blur-xl border-b border-cyber-border'
            : 'bg-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center border border-accent-cyan/50 group-hover:border-accent-cyan transition-colors">
                <span className="font-display text-2xl text-accent-cyan">N</span>
                <div className="absolute inset-0 bg-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl tracking-wider text-text-primary">NEO</span>
                <span className="font-mono text-xs text-accent-cyan ml-2">CYBER.CAMP</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'px-4 py-2 text-sm text-text-secondary',
                      'hover:text-accent-cyan transition-colors',
                      'relative group'
                    )}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-accent-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA & Language */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher currentLocale={locale} variant="dropdown" />
              <a
                href={EXTERNAL_LINKS.app}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors font-mono"
              >
                {dict.nav.login}
              </a>
              <Link
                href={`/${locale}/contact`}
                className="px-5 py-2.5 bg-accent-cyan text-cyber-deep text-sm font-mono uppercase tracking-wider hover:shadow-glow-cyan transition-shadow"
              >
                {dict.nav.contact}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-text-primary hover:text-accent-cyan transition-colors"
              aria-label="Open menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="w-full h-[2px] bg-current" />
                <span className="w-4 h-[2px] bg-current ml-auto" />
                <span className="w-full h-[2px] bg-current" />
              </div>
            </button>
          </div>
        </Container>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        locale={locale}
        dict={dict}
      />
    </>
  );
}
