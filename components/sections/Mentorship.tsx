'use client';

import Container from '@/components/ui/Container';
import GradientOrb from '@/components/ui/GradientOrb';
import { motion } from 'framer-motion';

export default function Mentorship() {
  return (
    <section className="py-24 md:py-36 bg-cyber-surface relative overflow-hidden">
      <GradientOrb color="warm" size="lg" className="bottom-[10%] left-[-15%]" blur={120} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-accent-cyan" />
              <span className="font-mono text-accent-cyan text-sm">[MENTORSHIP]</span>
            </div>

            <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
              Expert mentorship and{' '}
              <span className="gradient-text">live webinars</span>
            </h2>

            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Get guidance from industry professionals who have been in your shoes.
              Our mentors are here to help you navigate your cybersecurity journey.
            </p>

            <ul className="space-y-4">
              {[
                'One-on-one mentorship sessions',
                'Weekly live Q&A webinars',
                'Career guidance and resume reviews',
                'Direct access to industry experts',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 text-text-primary"
                >
                  <span className="w-6 h-6 flex items-center justify-center border border-accent-cyan text-accent-cyan font-mono text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual - Team Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              {[
                { role: 'SEC_OPS', level: 'SENIOR' },
                { role: 'PEN_TEST', level: 'LEAD' },
                { role: 'THREAT_INT', level: 'EXPERT' },
                { role: 'NET_SEC', level: 'SENIOR' },
                { role: 'MALWARE', level: 'ANALYST' },
                { role: 'INCIDENT', level: 'RESP' },
              ].map((mentor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group aspect-square border border-cyber-border bg-cyber-deep hover:border-accent-cyan/50 transition-colors"
                >
                  <div className="h-full flex flex-col items-center justify-center p-4">
                    {/* Avatar placeholder */}
                    <div className="w-12 h-12 border border-accent-cyan/30 flex items-center justify-center mb-3 group-hover:border-accent-cyan transition-colors">
                      <span className="font-mono text-accent-cyan text-lg">{mentor.role[0]}</span>
                    </div>
                    <span className="font-mono text-[10px] text-text-muted text-center">{mentor.role}</span>
                    <span className="font-mono text-[9px] text-accent-green">{mentor.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connection lines decoration */}
            <div className="absolute -inset-4 border border-cyber-border pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-4 h-[1px] bg-accent-cyan -translate-x-full" />
            <div className="absolute top-1/2 right-0 w-4 h-[1px] bg-accent-cyan translate-x-full" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
