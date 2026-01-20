'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import { type Locale } from '@/lib/i18n';
import { motion } from 'framer-motion';

interface WhyNeoProps {
  locale: Locale;
  dict: {
    tag: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    items: Array<{ title: string; description: string }>;
  };
}

export default function WhyNeo({ locale, dict }: WhyNeoProps) {
  return (
    <section className="py-20 md:py-28 bg-cyber-surface relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent-cyan/5 to-transparent" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-accent-cyan" />
              <span className="font-mono text-accent-cyan text-sm">{dict.tag}</span>
            </div>
            <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
              {dict.title}{' '}
              <span className="gradient-text">{dict.titleHighlight}</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              {dict.description}
            </p>

            {/* CTA */}
            <Link
              href={`/${locale}/solutions`}
              className="inline-flex items-center gap-2 font-mono text-accent-cyan hover:text-accent-green transition-colors group"
            >
              <span>&gt;</span>
              <span>{dict.cta}</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>

          {/* Right content - Differentiators grid */}
          <div className="space-y-4">
            {dict.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-start gap-4 p-4 bg-cyber-deep/50 border border-cyber-border hover:border-accent-cyan/30 transition-all duration-300"
              >
                {/* Number */}
                <span className="font-mono text-accent-cyan text-sm shrink-0 w-8">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div>
                  <h3 className="font-display text-lg text-text-primary uppercase tracking-wide mb-1 group-hover:text-accent-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <span className="font-mono text-text-muted/30 group-hover:text-accent-cyan transition-colors ml-auto">
                  &rarr;
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
