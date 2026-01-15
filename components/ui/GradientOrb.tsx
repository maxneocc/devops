'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GradientOrbProps {
  color?: 'cyan' | 'green' | 'warm';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
  blur?: number;
}

export default function GradientOrb({
  color = 'cyan',
  size = 'md',
  className,
  animate = true,
  blur = 80,
}: GradientOrbProps) {
  const colors = {
    cyan: 'from-accent-cyan/30 to-transparent',
    green: 'from-accent-green/30 to-transparent',
    warm: 'from-accent-warm/30 to-transparent',
  };

  const sizes = {
    sm: 'w-[200px] h-[200px]',
    md: 'w-[400px] h-[400px]',
    lg: 'w-[600px] h-[600px]',
    xl: 'w-[800px] h-[800px]',
  };

  return (
    <motion.div
      className={cn(
        'absolute rounded-full bg-gradient-radial pointer-events-none',
        colors[color],
        sizes[size],
        className
      )}
      style={{ filter: `blur(${blur}px)` }}
      animate={
        animate
          ? {
              y: [0, -30, 0],
              opacity: [0.4, 0.7, 0.4],
            }
          : undefined
      }
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
