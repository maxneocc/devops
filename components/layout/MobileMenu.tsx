'use client';

import Link from 'next/link';
import { EXTERNAL_LINKS } from '@/lib/constants';
import { type Locale } from '@/lib/i18n';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
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

export default function MobileMenu({ isOpen, onClose, locale, dict }: MobileMenuProps) {
  const navLinks = [
    { label: dict.nav.formations, href: `/${locale}/formations` },
    { label: dict.nav.solutions, href: `/${locale}/solutions` },
    { label: dict.nav.plateforme, href: `/${locale}/plateforme` },
    { label: dict.nav.blog, href: `/${locale}/blog` },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-cyber-deep/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-cyber-surface border-l border-cyber-border z-50"
          >
            {/* Scanlines effect */}
            <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

            {/* Header */}
            <div className="relative flex items-center justify-between p-6 border-b border-cyber-border">
              <span className="font-mono text-accent-cyan text-sm">[MENU]</span>
              <button
                onClick={onClose}
                className="p-2 text-text-secondary hover:text-accent-cyan transition-colors font-mono"
                aria-label="Close menu"
              >
                [X]
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="relative p-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-4 text-xl text-text-primary hover:text-accent-cyan transition-colors border-b border-cyber-border/50 flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-text-muted group-hover:text-accent-cyan transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Language Switcher */}
            <div className="relative px-6 pt-4">
              <LanguageSwitcher currentLocale={locale} variant="inline" />
            </div>

            {/* Login Link */}
            <div className="relative px-6 pt-4">
              <a
                href={EXTERNAL_LINKS.app}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center text-text-secondary hover:text-accent-cyan transition-colors font-mono border border-cyber-border"
              >
                {dict.nav.login} &rarr;
              </a>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative px-6 pt-4"
            >
              <Link
                href={`/${locale}/contact`}
                onClick={onClose}
                className="block w-full py-4 bg-accent-cyan text-cyber-deep text-center font-mono uppercase tracking-wider hover:shadow-glow-cyan transition-shadow"
              >
                {dict.nav.contact}
              </Link>
            </motion.div>

            {/* Terminal decoration */}
            <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-text-muted/50">
              <p>&gt; system.ready</p>
              <p className="cursor-blink">&gt; awaiting_input</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
