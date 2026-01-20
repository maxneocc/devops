'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import GradientOrb from '@/components/ui/GradientOrb';
import { type Locale } from '@/lib/i18n';
import { motion } from 'framer-motion';

interface B2BTeaserProps {
  locale: Locale;
  dict: {
    tag: string;
    title1: string;
    titleHighlight1: string;
    title2: string;
    titleHighlight2: string;
    items: Array<{ title: string; description: string }>;
    cta: string;
  };
}

export default function B2BTeaser({ locale, dict }: B2BTeaserProps) {
  return (
    <section className="py-20 md:py-28 bg-cyber-surface relative overflow-hidden">
      {/* Background elements */}
      <GradientOrb color="warm" size="lg" className="top-[-20%] right-[-10%]" blur={100} />
      <GradientOrb color="cyan" size="md" className="bottom-[-10%] left-[-5%]" blur={80} />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tag */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-accent-warm" />
            <span className="font-mono text-accent-warm text-sm">{dict.tag}</span>
            <div className="w-12 h-[1px] bg-accent-warm" />
          </div>

          {/* Headline */}
          <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
            {dict.title1}{' '}
            <span className="gradient-text-warm">{dict.titleHighlight1}</span>
            {' '}{dict.title2}{' '}
            <span className="gradient-text-warm">{dict.titleHighlight2}</span> ?
          </h2>

          {/* Value props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {dict.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-6 bg-cyber-deep/50 border border-cyber-border"
              >
                <h3 className="font-display text-lg text-text-primary uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="primary" size="lg" href={`/${locale}/solutions`}>
              <span className="mr-2">&gt;</span>
              {dict.cta}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
