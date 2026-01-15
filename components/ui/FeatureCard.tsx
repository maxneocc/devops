'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  index?: number;
}

const icons: Record<string, React.ReactNode> = {
  path: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  practice: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  online: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  support: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

export default function FeatureCard({
  title,
  description,
  features,
  icon,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative p-6 md:p-8',
        'bg-cyber-surface/50 border border-cyber-border',
        'hover:border-accent-cyan/50 transition-all duration-500',
        'overflow-hidden'
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-accent-cyan to-transparent" />
        <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-accent-cyan to-transparent" />
      </div>

      {/* Icon */}
      <div className="w-12 h-12 mb-6 flex items-center justify-center border border-accent-cyan/30 text-accent-cyan group-hover:bg-accent-cyan/10 transition-colors">
        {icons[icon]}
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-3 tracking-wide uppercase">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-muted mb-6 leading-relaxed">{description}</p>

      {/* Features list */}
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
            <span className="w-1.5 h-1.5 bg-accent-green" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-accent-cyan/5 blur-3xl" />
      </div>
    </motion.div>
  );
}
