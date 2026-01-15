'use client';

import Container from '@/components/ui/Container';
import GradientOrb from '@/components/ui/GradientOrb';
import Button from '@/components/ui/Button';
import { motion, useInView, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(value * eased));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
    </span>
  );
}

export default function JobStats() {
  return (
    <section className="py-32 md:py-48 bg-cyber-deep relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <GradientOrb color="cyan" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" blur={150} />
      <GradientOrb color="green" size="lg" className="top-[20%] right-[10%]" blur={120} />

      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent"
            style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2], x: ['-10%', '10%', '-10%'] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-accent-green/30 bg-cyber-surface/50"
          >
            <span className="w-2 h-2 bg-accent-green animate-pulse" />
            <span className="font-mono text-accent-green text-sm">[GLOBAL_DEMAND]</span>
          </motion.div>

          {/* Main number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="font-display text-[clamp(4rem,15vw,12rem)] leading-none tracking-tight">
              <span className="gradient-text">
                <AnimatedNumber value={3500000} />
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-2xl md:text-4xl text-text-primary uppercase tracking-wide mb-6">
            people are needed in cybersecurity
          </h2>

          {/* Description */}
          <p className="text-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            The cybersecurity industry faces a massive talent shortage. With the right
            skills, you can secure a rewarding career in one of the fastest-growing
            fields in tech.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="primary" size="lg" href="#contact">
              <span className="mr-2">&gt;</span>
              Start your journey
            </Button>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-20 grid grid-cols-3 gap-8 border-t border-cyber-border pt-10"
          >
            {[
              { value: '350%', label: 'Job Growth Rate' },
              { value: '$120K', label: 'Avg. Salary' },
              { value: '0%', label: 'Unemployment' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-accent-cyan mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
