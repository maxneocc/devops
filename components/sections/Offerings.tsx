'use client';

import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';

interface OfferingsProps {
  dict: {
    tag: string;
    title: string;
    titleHighlight: string;
    title2: string;
    items: {
      formations: { title: string; description: string; features: string[] };
      labs: { title: string; description: string; features: string[] };
      certifications: { title: string; description: string; features: string[] };
    };
  };
}

const iconMap: Record<string, JSX.Element> = {
  formations: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  labs: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  certifications: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
};

export default function Offerings({ dict }: OfferingsProps) {
  const offerings = [
    { key: 'formations' as const, ...dict.items.formations },
    { key: 'labs' as const, ...dict.items.labs },
    { key: 'certifications' as const, ...dict.items.certifications },
  ];

  return (
    <section className="py-20 md:py-28 bg-cyber-deep relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent-cyan" />
            <span className="font-mono text-accent-cyan text-sm">{dict.tag}</span>
            <div className="w-12 h-[1px] bg-accent-cyan" />
          </div>
          <h2 className="font-display text-section text-text-primary uppercase tracking-wide">
            {dict.title}{' '}
            <span className="gradient-text">{dict.titleHighlight}</span>{' '}
            {dict.title2}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-cyber-surface border border-cyber-border p-8 hover:border-accent-cyan/50 transition-all duration-300"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent-cyan/30 group-hover:border-accent-cyan transition-colors" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent-cyan/30 group-hover:border-accent-cyan transition-colors" />

              {/* Icon */}
              <div className="text-accent-cyan mb-6 group-hover:text-accent-green transition-colors">
                {iconMap[offering.key]}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-text-primary uppercase tracking-wide mb-3">
                {offering.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary mb-6">
                {offering.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {offering.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                    <span className="text-accent-green font-mono">&gt;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
