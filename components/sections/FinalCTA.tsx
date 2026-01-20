'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { type Locale } from '@/lib/i18n';
import { motion } from 'framer-motion';

interface FinalCTAProps {
  locale: Locale;
  dict: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    trust: {
      eu: string;
      gdpr: string;
      partners: string;
    };
  };
}

export default function FinalCTA({ locale, dict }: FinalCTAProps) {
  return (
    <section className="py-20 md:py-28 bg-cyber-deep relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Gradient accents */}
      <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent-green to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
            {dict.title} <span className="gradient-text">{dict.titleHighlight}</span> ?
          </h2>

          {/* Subtext */}
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            {dict.subtitle}
          </p>

          {/* Double CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href={`/${locale}/formations`}>
              <span className="mr-2">&gt;</span>
              {dict.cta1}
            </Button>
            <Button variant="secondary" size="lg" href={`/${locale}/contact`}>
              {dict.cta2}
            </Button>
          </div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-cyber-border"
          >
            <p className="font-mono text-xs text-text-muted">
              <span className="text-accent-green">&gt;</span> {dict.trust.eu}
              <span className="mx-2 text-text-muted/50">|</span>
              <span className="text-accent-green">&gt;</span> {dict.trust.gdpr}
              <span className="mx-2 text-text-muted/50">|</span>
              <span className="text-accent-green">&gt;</span> {dict.trust.partners}
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
