/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            Who We Are
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Asian Digital <span className="gradient-text">Marketing Agency</span>
          </p>
          <div className="h-2 w-20 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Detail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-800 dark:text-slate-100 leading-tight">
              A creative agency uniting technology, design, and conversion strategies.
            </h3>
            
            <p className="font-sans text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Asian Digital Marketing Agency is a creative team of designers, developers, marketers, and AI content specialists dedicated to helping startups and businesses build a strong online presence.
            </p>

            <p className="font-sans text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              We leverage modern architectures, generative AI features, and user-centered design rules to empower enterprises globally. Through analytical insights and fast execution pipelines, we help brands scale with confidence.
            </p>

            {/* Mission Card block */}
            <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/40 dark:border-indigo-900/30 flex items-start gap-4 glass">
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 text-white shrink-0 shadow-lg">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-base text-slate-900 dark:text-white mb-1">
                  Our Mission & Purpose
                </h4>
                <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our mission is to deliver high-quality digital solutions that combine creativity, technology, and marketing expertise.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Features Block - Interactive cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Box 1 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-400 transition duration-305 flex flex-col gap-4 glass">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-display font-black text-xl border border-indigo-200/50 dark:border-indigo-800/30">
                1
              </div>
              <h4 className="font-display font-black text-base text-slate-900 dark:text-white">Startups and SMEs</h4>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                Empowering founders and emerging brands to construct fully professional web ecosystems from scratch.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-purple-400 transition duration-305 flex flex-col gap-4 glass">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-display font-black text-xl border border-purple-200/50 dark:border-purple-800/30">
                2
              </div>
              <h4 className="font-display font-black text-base text-slate-900 dark:text-white">Generative AI Edge</h4>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                Creating high-performing promotional videos, ads and voice tracks using state-of-the-art synthetic pipelines.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 transition duration-305 flex flex-col gap-4 glass">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-display font-black text-xl border border-blue-200/50 dark:border-blue-800/30">
                3
              </div>
              <h4 className="font-display font-black text-base text-slate-900 dark:text-white">Brand Expansion</h4>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                Establishing elegant logo markers, guidelines templates, business cards, and social marketing models.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-400 transition duration-305 flex flex-col gap-4 glass">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-display font-black text-xl border border-emerald-200/50 dark:border-emerald-800/30">
                4
              </div>
              <h4 className="font-display font-black text-base text-slate-900 dark:text-white">Conversion Optimization</h4>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                Driving direct calls-to-action to lead triggers like Google Ads, analytics tunnels, and live WhatsApp chat.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
