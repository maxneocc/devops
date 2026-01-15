'use client';

import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';

export default function VideoCourses() {
  return (
    <section className="py-24 md:py-36 bg-cyber-deep relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative border border-cyber-border bg-cyber-surface overflow-hidden">
              {/* Video player mockup */}
              <div className="aspect-video relative">
                {/* Thumbnail grid pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-deep via-cyber-surface to-cyber-deep" />
                <div className="absolute inset-0 bg-grid opacity-30" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 border-2 border-accent-cyan flex items-center justify-center bg-cyber-deep/80 hover:bg-accent-cyan/10 transition-colors group"
                  >
                    <svg className="w-8 h-8 text-accent-cyan ml-1 group-hover:text-accent-green transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.button>
                </div>

                {/* Video info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-cyber-deep/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-xs text-accent-cyan">[MODULE_01]</p>
                      <p className="text-text-primary text-sm">Introduction to Network Security</p>
                    </div>
                    <span className="font-mono text-xs text-text-muted">24:35</span>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-3 h-1 bg-cyber-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '35%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-accent-cyan to-accent-green"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-accent-cyan" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-accent-green" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-accent-warm" />
              <span className="font-mono text-accent-warm text-sm">[VIDEO_COURSES]</span>
            </div>

            <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
              HD video courses with{' '}
              <span className="gradient-text-warm">lifetime access</span>
            </h2>

            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Learn at your own pace with professionally produced video courses.
              Watch, rewatch, and practice until you master each concept.
            </p>

            <ul className="space-y-4">
              {[
                'Expert instructors from the industry',
                'Regularly updated content',
                'Downloadable resources and cheat sheets',
                'Certificate of completion',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 text-text-primary"
                >
                  <span className="text-accent-green font-mono">&gt;</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
