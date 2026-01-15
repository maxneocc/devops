'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-cyber-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="flex items-center gap-4">
          <span className={cn(
            'font-mono text-sm transition-colors duration-300',
            isOpen ? 'text-accent-cyan' : 'text-text-muted'
          )}>
            {isOpen ? '[-]' : '[+]'}
          </span>
          <span className={cn(
            'text-lg md:text-xl font-medium transition-colors duration-300',
            isOpen ? 'text-accent-cyan' : 'text-text-primary group-hover:text-accent-cyan'
          )}>
            {question}
          </span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 flex items-center justify-center border border-cyber-border group-hover:border-accent-cyan/50 transition-colors"
        >
          <span className="text-accent-cyan text-lg">+</span>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-10 text-text-secondary leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
