'use client';

import Container from '@/components/ui/Container';
import FeatureCard from '@/components/ui/FeatureCard';
import { FEATURES } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-36 bg-cyber-deep relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent-cyan" />
            <span className="font-mono text-accent-cyan text-sm">[FEATURES]</span>
          </div>
          <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-4">
            Everything you need to{' '}
            <span className="gradient-text">succeed</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Our platform provides all the tools and resources you need to build a
            successful career in cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
