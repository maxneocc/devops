'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { TRAINING_PREVIEW } from '@/lib/constants';
import { type Locale } from '@/lib/i18n';
import { motion } from 'framer-motion';

interface TrainingPreviewProps {
  locale: Locale;
  dict: {
    tag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
    certification: string;
  };
}

export default function TrainingPreview({ locale, dict }: TrainingPreviewProps) {
  return (
    <section className="py-20 md:py-28 bg-cyber-deep relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent-cyan" />
            <span className="font-mono text-accent-cyan text-sm">{dict.tag}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-2">
                {dict.title} <span className="gradient-text">{dict.titleHighlight}</span>
              </h2>
              <p className="text-text-secondary max-w-xl">
                {dict.subtitle}
              </p>
            </div>
            <Button variant="secondary" href={`/${locale}/formations`}>
              {dict.cta}
            </Button>
          </div>
        </motion.div>

        {/* Training cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_PREVIEW.map((training, index) => (
            <motion.a
              key={training.slug}
              href={`/${locale}/formations/${training.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-cyber-surface border border-cyber-border hover:border-accent-cyan/50 transition-all duration-300 block"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="p-6">
                {/* Partner badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-accent-cyan uppercase">
                    {training.partner}
                  </span>
                  <span className="font-mono text-xs text-text-muted bg-cyber-deep px-2 py-1">
                    {training.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-text-primary uppercase tracking-wide mb-2 group-hover:text-accent-cyan transition-colors">
                  {training.title}
                </h3>

                {/* Certification badge */}
                <p className="text-text-secondary text-sm mb-4">
                  {dict.certification} {training.certification}
                </p>

                {/* Info row */}
                <div className="flex items-center justify-between pt-4 border-t border-cyber-border">
                  <span className="font-mono text-xs text-text-muted">
                    {training.duration}
                  </span>
                  <span className="font-display text-lg text-accent-green">
                    {training.price.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US')} &euro;
                  </span>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-4 right-4 font-mono text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                &rarr;
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
