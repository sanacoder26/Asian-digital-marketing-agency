/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { TRUST_PILLARS } from '../types.ts';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            Why Partner With Us
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Our Commitment to <span className="gradient-text">Excellence</span>
          </p>
          <div className="h-2 w-20 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Bento Grid Features Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/20 shadow-sm flex flex-col gap-4 group hover:bg-gradient-to-tr hover:from-indigo-50/20 hover:to-purple-50/20 dark:hover:from-indigo-950/20 dark:hover:to-indigo-950/10 hover:shadow-lg hover:border-indigo-500/15 transition-all duration-300 glass"
            >
              {/* Checkmark badge */}
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200/50 dark:border-emerald-800/30 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-transparent transition-all">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>

              {/* Detail Texts */}
              <div>
                <h4 className="font-display font-black text-base text-slate-900 dark:text-white">
                  {pillar.title}
                </h4>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-semibold">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big visually pleasant badge at the bottom */}
        <div className="mt-16 p-8 rounded-[2rem] bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 text-white relative overflow-hidden shadow-xl">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute left-10 top-0 -translate-y-12 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <p className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight">
                Ready to take your digital results to the next level?
              </p>
              <p className="font-sans text-sm text-indigo-100 mt-2 max-w-xl">
                Book a face-to-face consultation directly on WhatsApp today. Let’s collaborate and sketch an active digital strategy mapping direct success.
              </p>
            </div>
            <a
              href="https://wa.me/923458903225?text=Hello%20ADMA%20team%2C%20I'd%20love%20to%20get%20started%20on%20building%20my%20new%20digital%20campaign%20with%20your%20pillars."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-indigo-800 hover:bg-slate-50 font-sans font-bold rounded-full text-base shrink-0 shadow-lg hover:shadow-indigo-900/20 active:scale-95 transition"
            >
              Consult with our Team
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
