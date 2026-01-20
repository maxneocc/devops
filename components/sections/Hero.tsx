'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import GradientOrb from '@/components/ui/GradientOrb';
import { type Locale } from '@/lib/i18n';
import { motion } from 'framer-motion';

interface HeroProps {
  locale: Locale;
  dict: {
    tagline: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    subtitle2: string;
    cta_individual: string;
    cta_organization: string;
    stats: {
      labs: string;
      courses: string;
      certifications: string;
    };
    scroll: string;
  };
}

export default function Hero({ locale, dict }: HeroProps) {
  const stats = [
    { value: '24/7', label: dict.stats.labs },
    { value: '100+', label: dict.stats.courses },
    { value: '6', label: dict.stats.certifications },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-cyber-deep" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 noise" />

      {/* Gradient Orbs */}
      <GradientOrb color="cyan" size="xl" className="top-[-20%] right-[-10%]" blur={120} />
      <GradientOrb color="green" size="lg" className="bottom-[-10%] left-[-5%]" blur={100} />
      <GradientOrb color="warm" size="md" className="top-[40%] left-[5%]" blur={80} />

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-full h-[2px] bg-accent-cyan/10"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <Container className="relative z-10 py-32">
        <div className="max-w-5xl">
          {/* Terminal prefix */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-accent-green text-sm mb-6 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-accent-green animate-pulse" />
            <span>{dict.tagline}</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-hero text-text-primary mb-6 uppercase tracking-wide"
          >
            {dict.title1}{' '}
            <span className="gradient-text">{dict.title2}</span>
            <br />
            <span className="gradient-text-warm">{dict.title3}</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed"
          >
            {dict.subtitle}
            <br />
            {dict.subtitle2}
          </motion.p>

          {/* Double CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button variant="primary" size="lg" href={`/${locale}/formations`}>
              <span className="mr-2">&gt;</span>
              {dict.cta_individual}
            </Button>
            <Button variant="secondary" size="lg" href={`/${locale}/solutions`}>
              {dict.cta_organization}
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 pt-8 border-t border-cyber-border flex flex-wrap gap-8 md:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <div className="font-display text-4xl md:text-5xl text-accent-cyan group-hover:text-accent-green transition-colors">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-text-muted mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-text-muted">{dict.scroll}</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-accent-cyan to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
