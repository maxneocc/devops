'use client';

import Container from '@/components/ui/Container';
import FAQItem from '@/components/ui/FAQItem';
import { FAQ_ITEMS } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-36 bg-cyber-surface relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Border accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 border border-cyber-border bg-cyber-deep/50">
            <span className="font-mono text-accent-cyan text-sm">[FAQ]</span>
          </div>

          <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-4">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>

          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have questions? We have answers. If you don&apos;t find what you&apos;re looking
            for, feel free to contact us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* FAQ container */}
          <div className="relative border border-cyber-border bg-cyber-deep/70">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-accent-cyan" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-accent-cyan" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-accent-cyan" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-accent-cyan" />

            {/* Header bar */}
            <div className="px-6 py-4 border-b border-cyber-border flex items-center justify-between">
              <span className="font-mono text-xs text-text-muted">system://help/faq</span>
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-accent-green" />
                <span className="w-2 h-2 bg-accent-cyan" />
              </div>
            </div>

            {/* FAQ items */}
            <div className="p-6">
              {FAQ_ITEMS.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </div>

          {/* Additional help text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="font-mono text-sm text-text-muted">
              <span className="text-accent-green">&gt;</span> Still have questions?{' '}
              <a href="#contact" className="text-accent-cyan hover:underline">
                Contact our support team
              </a>
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
