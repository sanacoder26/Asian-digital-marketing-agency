/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../types.ts';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CLIENT_TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CLIENT_TESTIMONIALS.length) % CLIENT_TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CLIENT_TESTIMONIALS.length);
  };

  const activeTestimonial = CLIENT_TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute inset-0 dot-grid opacity-[0.05] dark:opacity-[0.11] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            Real Feedback
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            What Our <span className="gradient-text">Clients Say</span>
          </p>
          <div className="h-2 w-20 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Carousel Slider Card Layout */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-slate-905 border border-slate-150 dark:border-slate-850/80 shadow-lg relative flex flex-col items-center text-center gap-6 glass"
            >
              {/* Giant quotation visual mark */}
              <Quote className="absolute top-6 left-6 w-16 h-16 text-indigo-500/10 dark:text-indigo-400/5 rotate-180 pointer-events-none" />

              {/* Company & ratings */}
              <div className="flex flex-col items-center gap-2">
                {/* Score Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      className={`w-4 h-4 ${
                        sIdx < activeTestimonial.rating
                          ? 'text-amber-400 fill-current'
                          : 'text-slate-200 dark:text-slate-800'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-sans font-extrabold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                  {activeTestimonial.company}
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="font-sans text-slate-700 dark:text-slate-300 text-base sm:text-lg italic leading-relaxed max-w-2xl font-semibold">
                "{activeTestimonial.text}"
              </blockquote>

              {/* Divider lines */}
              <div className="h-0.5 w-12 bg-indigo-500" />

              {/* User Bio info */}
              <div className="flex items-center gap-4">
                <img
                  src={activeTestimonial.photoUrl}
                  alt={activeTestimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover shadow-md border border-white dark:border-slate-800"
                />
                <div className="text-left">
                  <span className="block font-display font-black text-sm text-slate-900 dark:text-white leading-none">
                    {activeTestimonial.name}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans mt-1 block font-bold">
                    Verified Global Partner
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slider Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-350 shadow-md hover:shadow-lg dark:border dark:border-slate-800 hover:text-indigo-500 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Slider Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-350 shadow-md hover:shadow-lg dark:border dark:border-slate-800 hover:text-indigo-500 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {CLIENT_TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === idx ? 'w-6 bg-indigo-650' : 'w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
