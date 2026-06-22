/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, MessageCircle, ArrowUpRight } from 'lucide-react';
import heroImg from '../assets/images/hero_marketing_team_1782144063718.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20 transition-colors duration-500"
    >
      {/* Dot Grid Background over the whole hero */}
      <div className="absolute inset-0 dot-grid opacity-15 dark:opacity-35 pointer-events-none" />

      {/* Dynamic decorative backdrop shapes */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-indigo-500/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Texts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Soft Indigo / Blue pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200/50 dark:border-indigo-800/20 w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              <span className="text-xs font-sans font-extrabold tracking-wider text-indigo-800 dark:text-indigo-300 uppercase">
                Premium Marketing Excellence
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-[4.5rem] text-slate-900 dark:text-white leading-[1.05] tracking-tight">
              Grow Your Business with{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">
                Creative Digital Solutions
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-sans text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              We help businesses grow through professional websites, AI-generated videos, branding, and strategies that deliver results. Boost your conversions in 2026 with our expert team.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              {/* WhatsApp consultation */}
              <a
                href="https://wa.me/923458903225?text=Hello%20ADMA%2C%20I'd%20love%20to%20schedule%20a%20free%20consultation%20with%20your%20team%20about%20my%20business%20campaign."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-bold text-base rounded-full shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 scale-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book via WhatsApp</span>
              </a>

              {/* View Portfolio */}
              <a
                href="https://portfolio-pro-liart-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/80 hover:bg-white dark:bg-slate-900/80 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 font-sans font-bold text-base rounded-full shadow-md scale-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200/80 dark:border-slate-800/60">
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">+45%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider font-semibold">Growth</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">500+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider font-semibold">Happy Clients</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400">AI Powered</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider font-semibold">Strategy</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Visual Glassmorphism Card Frame with dot-grid pattern behind it */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-3xl opacity-15 blur-2xl animate-pulse" />
            
            <div className="relative p-3 rounded-[2.5rem] bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-white dark:border-slate-800 shadow-2xl overflow-hidden w-full max-w-lg aspect-[16/10] sm:aspect-[16/9] lg:max-w-none glass">
              <div className="absolute inset-0 dot-grid opacity-10" />
              
              <img
                src={heroImg}
                alt="Asian Digital Marketing Team Collaboration Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[1.8rem] filter brightness-[0.98] dark:brightness-[1.02] contrast-[1.02] shadow-inner transition hover:scale-105 duration-700 relative z-10"
              />

              {/* Floating micro indicators overlaying the illustration */}
              <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xl border border-slate-100 dark:border-slate-800/80 flex items-center gap-3 z-25">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" className="opacity-25" />
                    <path d="M12 2 a 10 10 0 0 1 10 10" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white leading-none">AI Video Engine</span>
                  <span className="text-[10px] text-indigo-500 font-mono mt-1 block">● Active Rendering</span>
                </div>
              </div>

              <div className="absolute top-6 right-6 p-3.5 rounded-xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xl border border-slate-100 dark:border-slate-800/80 flex items-center gap-2.5 z-25">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
                </span>
                <span className="text-[10px] font-mono text-slate-700 dark:text-slate-300 tracking-wide uppercase font-bold">
                  Campaign ROI x4.8
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
