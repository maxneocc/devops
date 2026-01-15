'use client';

import { NAV_LINKS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="block py-4 text-xl text-text-primary hover:text-accent-cyan transition-colors border-b border-cyber-border/50 flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-text-muted group-hover:text-accent-cyan transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Language Selector */}
            <div className="relative px-6 pt-4">
              <select className="w-full bg-cyber-deep text-text-primary border border-cyber-border px-4 py-3 font-mono focus:outline-none focus:border-accent-cyan/50">
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative px-6 pt-6"
            >
              <a
                href="#contact"
                onClick={onClose}
                className="block w-full py-4 bg-accent-cyan text-cyber-deep text-center font-mono uppercase tracking-wider hover:shadow-glow-cyan transition-shadow"
              >
                Get Started
              </a>
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
