'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import Container from '@/components/ui/Container';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
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
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center border border-accent-cyan/50 group-hover:border-accent-cyan transition-colors">
                <span className="font-display text-2xl text-accent-cyan">N</span>
                <div className="absolute inset-0 bg-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl tracking-wider text-text-primary">NEO</span>
                <span className="font-mono text-xs text-accent-cyan ml-2">CYBER.CAMP</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className={cn(
                    'px-4 py-2 text-sm text-text-secondary',
                    'hover:text-accent-cyan transition-colors',
                    'relative group'
                  )}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-accent-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>
              ))}
            </div>

            {/* CTA & Language */}
            <div className="hidden lg:flex items-center gap-4">
              <select className="bg-transparent text-text-muted text-sm font-mono border border-cyber-border px-3 py-2 focus:outline-none focus:border-accent-cyan/50 cursor-pointer hover:border-accent-cyan/30 transition-colors">
                <option value="en" className="bg-cyber-deep">EN</option>
                <option value="fr" className="bg-cyber-deep">FR</option>
              </select>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-accent-cyan text-cyber-deep text-sm font-mono uppercase tracking-wider hover:shadow-glow-cyan transition-shadow"
              >
                Get Started
              </a>
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

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
