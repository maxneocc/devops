'use client';

import Container from '@/components/ui/Container';
import GradientOrb from '@/components/ui/GradientOrb';
import { motion } from 'framer-motion';

export default function VMLabs() {
  return (
    <section id="courses" className="py-24 md:py-36 bg-cyber-surface relative overflow-hidden">
      <GradientOrb color="cyan" size="lg" className="top-[10%] right-[-20%]" blur={120} />

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
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="font-mono text-accent-green text-sm">[VM_LABS]</span>
            </div>

            <h2 className="font-display text-section text-text-primary uppercase tracking-wide mb-6">
              Virtual machine labs{' '}
              <span className="gradient-text">in your browser</span>
            </h2>

            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Access realistic cybersecurity environments directly from your browser.
              No software installation required - just connect and start practicing.
            </p>

            <ul className="space-y-4">
              {[
                'Real-world attack and defense scenarios',
                'Updated regularly with current threats',
                'Instant access from any device',
                'Safe environment to practice',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 text-text-primary"
                >
                  <span className="w-6 h-6 flex items-center justify-center border border-accent-green text-accent-green font-mono text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative border border-cyber-border bg-cyber-deep glow-cyan overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-cyber-border bg-cyber-surface/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent-warm" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-accent-green" />
                </div>
                <span className="font-mono text-xs text-text-muted ml-4">neo@cyber-lab:~</span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm space-y-2">
                <p className="text-accent-cyan">$ nmap -sV 192.168.1.1</p>
                <p className="text-accent-green">Starting Nmap 7.94 ( https://nmap.org )</p>
                <p className="text-text-muted">Nmap scan report for 192.168.1.1</p>
                <p className="text-text-muted">Host is up (0.00032s latency).</p>
                <p className="text-text-secondary mt-4">PORT    STATE SERVICE  VERSION</p>
                <p className="text-text-primary">22/tcp  <span className="text-accent-green">open</span>  ssh      OpenSSH 8.9</p>
                <p className="text-text-primary">80/tcp  <span className="text-accent-green">open</span>  http     Apache 2.4.54</p>
                <p className="text-text-primary">443/tcp <span className="text-accent-green">open</span>  ssl/http nginx 1.22</p>
                <p className="text-text-primary">3306/tcp <span className="text-accent-warm">filtered</span> mysql</p>
                <p className="text-accent-cyan mt-4 cursor-blink">$ </p>
              </div>

              {/* Scanline overlay */}
              <div className="absolute inset-0 scanlines pointer-events-none opacity-20" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
