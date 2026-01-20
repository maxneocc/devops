'use client';

import Container from '@/components/ui/Container';
import { PARTNERS } from '@/lib/constants';
import { motion } from 'framer-motion';

interface PartnersProps {
  dict: {
    tag: string;
    title: string;
  };
}

export default function Partners({ dict }: PartnersProps) {
  return (
    <section className="py-16 md:py-20 bg-cyber-surface relative overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="font-mono text-accent-cyan text-sm">{dict.tag}</span>
          <p className="text-text-muted text-sm mt-2 uppercase tracking-wider">
            {dict.title}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="h-16 md:h-20 flex items-center justify-center px-4 border border-cyber-border bg-cyber-deep/50 hover:border-accent-cyan/30 transition-all duration-300">
                <span className="font-mono text-text-muted/60 group-hover:text-accent-cyan text-xs md:text-sm transition-colors text-center">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
    </section>
  );
}
