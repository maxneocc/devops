'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
}: ButtonProps) {
  const baseStyles = cn(
    'relative inline-flex items-center justify-center font-mono uppercase tracking-wider',
    'transition-all duration-300 overflow-hidden',
    'border border-transparent'
  );

  const variants = {
    primary: cn(
      'bg-accent-cyan text-cyber-deep',
      'hover:shadow-glow-cyan hover:bg-accent-cyan/90',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
      'before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700'
    ),
    secondary: cn(
      'bg-transparent text-accent-cyan border-accent-cyan/50',
      'hover:border-accent-cyan hover:bg-accent-cyan/10 hover:shadow-glow-cyan'
    ),
    ghost: cn(
      'bg-transparent text-text-secondary',
      'hover:text-accent-cyan hover:bg-cyber-surface'
    ),
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
}
