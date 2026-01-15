'use client';

import Container from '@/components/ui/Container';
import { FOOTER_LINKS, CONTACT_INFO, PARTNERS } from '@/lib/constants';

export default function Footer() {
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
              <a href="#" className="inline-flex items-center gap-3 mb-6 group">
                <div className="w-10 h-10 flex items-center justify-center border border-accent-cyan/50 group-hover:border-accent-cyan transition-colors">
                  <span className="font-display text-2xl text-accent-cyan">N</span>
                </div>
                <div>
                  <span className="font-display text-xl tracking-wider text-text-primary">NEO</span>
                  <span className="font-mono text-xs text-accent-cyan ml-2">CYBER.CAMP</span>
                </div>
              </a>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">
                Your direct path to a cybersecurity career. Learn from anywhere, practice anytime.
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

            {/* Company Links */}
            <div>
              <h4 className="font-display text-lg tracking-wider text-text-primary mb-6 uppercase">Company</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-accent-cyan transition-colors flex items-center gap-2 group"
                    >
                      <span className="font-mono text-xs text-text-muted/50 group-hover:text-accent-cyan transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-display text-lg tracking-wider text-text-primary mb-6 uppercase">Resources</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.resources.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-accent-cyan transition-colors flex items-center gap-2 group"
                    >
                      <span className="font-mono text-xs text-text-muted/50 group-hover:text-accent-cyan transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-display text-lg tracking-wider text-text-primary mb-6 uppercase">Legal</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.legal.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-accent-cyan transition-colors flex items-center gap-2 group"
                    >
                      <span className="font-mono text-xs text-text-muted/50 group-hover:text-accent-cyan transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-cyber-border flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-text-muted text-sm font-mono">
              <span className="text-accent-green">[</span>
              &copy; {new Date().getFullYear()} NEO Cyber Camp
              <span className="text-accent-green">]</span>
              <span className="mx-2 text-text-muted/50">//</span>
              All rights reserved
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-cyber-border text-text-muted hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                  aria-label={social}
                >
                  <span className="font-mono text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
