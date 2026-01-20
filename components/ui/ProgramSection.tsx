'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Module {
  title: string;
  duration?: string;
  topics: string[];
}

interface ProgramSectionProps {
  modules: Module[];
  title: string;
  expandAllLabel: string;
  collapseAllLabel: string;
  topicsLabel: string;
}

export default function ProgramSection({
  modules,
  title,
  expandAllLabel,
  collapseAllLabel,
  topicsLabel,
}: ProgramSectionProps) {
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set());
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleModule = (index: number) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedModules(newExpanded);
    setAllExpanded(newExpanded.size === modules.length);
  };

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedModules(new Set());
      setAllExpanded(false);
    } else {
      setExpandedModules(new Set(modules.map((_, i) => i)));
      setAllExpanded(true);
    }
  };

  const isLargeProgram = modules.length > 6;
  const totalTopics = modules.reduce((acc, m) => acc + m.topics.length, 0);

  return (
    <div>
      {/* Header with stats and toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display text-2xl text-text-primary uppercase tracking-wide">
            {title}
          </h2>
          <p className="text-text-muted text-sm mt-1 font-mono">
            {modules.length} modules • {totalTopics} {topicsLabel}
          </p>
        </div>

        <button
          onClick={toggleAll}
          className="flex items-center gap-2 px-4 py-2 border border-cyber-border text-text-secondary hover:border-accent-cyan hover:text-accent-cyan transition-colors font-mono text-sm"
        >
          <span className={cn(
            "transition-transform",
            allExpanded ? "rotate-180" : ""
          )}>
            ▼
          </span>
          {allExpanded ? collapseAllLabel : expandAllLabel}
        </button>
      </div>

      {/* Modules grid/list */}
      <div className={cn(
        "space-y-3",
        isLargeProgram && "grid md:grid-cols-2 gap-4 space-y-0"
      )}>
        {modules.map((module, index) => {
          const isExpanded = expandedModules.has(index);

          return (
            <div
              key={index}
              className={cn(
                "bg-cyber-surface border border-cyber-border transition-all duration-300",
                isExpanded && "border-accent-cyan/30",
                isLargeProgram && "h-fit"
              )}
            >
              {/* Module header - clickable */}
              <button
                onClick={() => toggleModule(index)}
                className="w-full p-4 sm:p-5 flex items-start justify-between gap-4 text-left group"
              >
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <span className="font-mono text-accent-cyan text-sm flex-shrink-0 mt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className={cn(
                      "font-display text-base sm:text-lg uppercase tracking-wide transition-colors",
                      isExpanded ? "text-accent-cyan" : "text-text-primary group-hover:text-accent-cyan"
                    )}>
                      {module.title}
                    </h3>
                    {!isExpanded && (
                      <p className="text-text-muted text-xs mt-1 font-mono">
                        {module.topics.length} {topicsLabel}
                        {module.duration && ` • ${module.duration}`}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  {module.duration && isExpanded && (
                    <span className="font-mono text-xs text-text-muted hidden sm:block">
                      {module.duration}
                    </span>
                  )}
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-accent-cyan text-lg"
                  >
                    ▼
                  </motion.span>
                </div>
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-5 pb-5 pt-0">
                      <div className="border-t border-cyber-border pt-4 ml-8 sm:ml-10">
                        <ul className={cn(
                          "space-y-2",
                          module.topics.length > 8 && "grid sm:grid-cols-2 gap-x-6 gap-y-2 space-y-0"
                        )}>
                          {module.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="text-text-secondary text-sm flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-accent-green mt-1.5 flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Progress indicator for large programs */}
      {isLargeProgram && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {modules.map((_, index) => (
            <button
              key={index}
              onClick={() => toggleModule(index)}
              className={cn(
                "w-2 h-2 transition-all",
                expandedModules.has(index)
                  ? "bg-accent-cyan"
                  : "bg-cyber-border hover:bg-accent-cyan/50"
              )}
              aria-label={`Module ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
