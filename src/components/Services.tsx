/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Laptop, Megaphone, Palette, Sparkles, Cpu, Award, CheckCircle2 } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../types.ts';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  'web-design': Laptop,
  'digital-marketing': Megaphone,
  'branding': Award,
  'social-design': Sparkles,
  'ai-content': Cpu,
  'graphic-design': Palette,
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const colors = [
    'from-indigo-500/20 to-blue-500/10 border-indigo-500/20',
    'from-purple-500/20 to-violet-500/10 border-purple-500/20',
    'from-blue-500/20 to-indigo-500/10 border-blue-500/20',
    'from-pink-500/20 to-purple-500/10 border-pink-500/20',
    'from-violet-500/20 to-blue-500/10 border-violet-500/20',
    'from-indigo-600/20 to-purple-600/10 border-indigo-600/30',
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-500 relative">
      <div className="absolute inset-0 dot-grid opacity-[0.06] dark:opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h2 className="font-display font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            Our Expertise
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Comprehensive <span className="gradient-text">Digital Services</span>
          </p>
          <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed font-semibold">
            We deliver results that increase visibility, engagement, and conversions utilizing our multi-disciplinary engineering and visual specialists.
          </p>
          <div className="h-2 w-20 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((service, index) => {
            const IconComponent = iconMap[service.id] || Sparkles;
            const isHovered = hoveredIndex === service.id;
            const gradColor = colors[index % colors.length];

            const isWebDev = service.id === 'web-design';
            const targetPhone = isWebDev ? '923121167784' : '923458903225';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(service.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between glass`}
              >
                {/* Background active color glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`} />

                <div className="relative z-10 flex flex-col gap-5">
                  {/* Title & description */}
                  <div>
                    <h3 className="font-display font-black text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2.5">
                      {service.description}
                    </p>
                  </div>

                  {/* Checklist Items */}
                  <div className="grid grid-cols-1 gap-2 py-4 border-t border-slate-100 dark:border-slate-900 group-hover:border-indigo-500/10 transition">
                    {service.items.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 group-hover:text-indigo-400 shrink-0" />
                        <span className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition">
                          {sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom line action button inside the card leading to consultation */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-50 dark:border-slate-900 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
                    Core Campaign
                  </span>
                  <a
                    href={`https://wa.me/${targetPhone}?text=Hello%20ADMA%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans font-bold text-indigo-600 group-hover:text-indigo-500 dark:text-indigo-400 flex items-center gap-1 hover:underline decoration-indigo-500"
                  >
                    <span>Request Service</span>
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
