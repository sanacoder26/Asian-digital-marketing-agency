/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../types.ts';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute inset-0 dot-grid opacity-[0.05] dark:opacity-[0.11] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            Got Questions?
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </p>
          <div className="h-2 w-20 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Dynamic Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850/80 shadow-sm overflow-hidden transition-all duration-300 glass"
              >
                {/* Header Trigger */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-900/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/20 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5 group-hover:scale-110 duration-200" />
                    <span className="font-display font-black text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition tracking-tight">
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron arrow */}
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-indigo-500' : ''
                    }`}
                  />
                </button>

                {/* Collapsible Answer container */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 pl-14 font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed border-t border-slate-100 dark:border-slate-900/45 font-semibold">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
