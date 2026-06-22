/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Filter } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../types.ts';

type CategoryType = 'All' | 'Websites' | 'Branding' | 'Social Media' | 'AI Videos' | 'Marketing Campaigns' | 'Content Writing';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');

  const categories: CategoryType[] = [
    'All',
    'Websites',
    'Branding',
    'Social Media',
    'AI Videos',
    'Marketing Campaigns',
    'Content Writing'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            Our Case Studies
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Our Portfolio & <span className="gradient-text">Success Stories</span>
          </p>
          <div className="h-2 w-20 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-sans font-black text-xs sm:text-sm tracking-wide transition-all outline-none ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white hover:bg-slate-100 text-slate-600 dark:bg-slate-950 dark:hover:bg-slate-900 dark:text-slate-300 border border-slate-200 dark:border-slate-800/80 glass'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Staggered Portfolio Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 glass"
                >
                  <div>
                    {/* Project Photo Wrapper */}
                    <div className="relative aspect-[3/2] overflow-hidden border-b border-slate-200 dark:border-slate-800">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 duration-500"
                        loading="lazy"
                      />
                      {/* Category overlay label */}
                      <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-sans font-extrabold uppercase tracking-widest text-white bg-slate-900/90 backdrop-blur-md rounded-full shadow-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Information Context */}
                    <div className="p-6">
                      {/* Project title */}
                      <h3 className="font-display font-black text-base text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2.5 font-semibold">
                        {project.description}
                      </p>

                      {/* Tag list */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[9px] font-mono font-bold text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-200/45 dark:border-slate-800/45"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact request item click leading to WhatsApp */}
                  <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-900/60 flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-wider font-bold text-slate-400">
                      ADMA Showcase
                    </span>
                    <a
                      href={`https://wa.me/923458903225?text=Hello%20ADMA%2C%20I'd%20love%20to%20build%20a%20project%20similar%20to%20your%20case-study%3A%20${encodeURIComponent(project.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-sans font-black text-indigo-600 hover:text-indigo-505 dark:text-indigo-400"
                    >
                      <span>Inquire Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
