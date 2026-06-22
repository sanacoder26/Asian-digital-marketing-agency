/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Search, Palette, Code, Rocket } from 'lucide-react';
import { AGENCY_PROCESS } from '../types.ts';

const icons = [Search, Palette, Code, Rocket];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute inset-0 dot-grid opacity-[0.06] dark:opacity-[0.14] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h2 className="font-display font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            Our Strategy
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            How We Deliver <span className="gradient-text">Results</span>
          </p>
          <div className="h-2 w-20 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Dynamic Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AGENCY_PROCESS.map((p, idx) => {
            const IconComponent = icons[idx] || Search;
            return (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850/80 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between glass"
              >
                <div>
                  {/* Step Code Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-black text-indigo-600 dark:text-indigo-400">
                      Step {p.step}
                    </span>
                    <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-650 group-hover:text-white transition duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Info */}
                  <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {p.desc}
                  </p>
                </div>

                {/* Decorative bottom glow */}
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-6 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
