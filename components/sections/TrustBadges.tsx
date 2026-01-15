'use client';

import Container from '@/components/ui/Container';
import { PARTNERS } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function TrustBadges() {
  return (
    <section className="py-20 md:py-28 bg-cyber-surface relative overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-accent-cyan text-sm">[PARTNERS]</span>
          <p className="text-text-muted text-sm mt-2 uppercase tracking-wider">
            Trusted by leading organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="h-20 flex items-center justify-center px-6 border border-cyber-border bg-cyber-deep/50 hover:border-accent-cyan/30 transition-all duration-300">
                <span className="font-mono text-text-muted/60 group-hover:text-accent-cyan text-sm transition-colors text-center">
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
