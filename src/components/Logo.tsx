/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "h-9", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon part - Recreating the sleek letter D outline in the ADMA logo */}
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cyberD" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="silverLetter" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="silverLetterLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
          <radialGradient id="cyberGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow effect for background behind custom letter D */}
        <circle cx="50%" cy="50%" r="45" fill="url(#cyberGlow)" className="hidden dark:block animate-pulse-glow" />

        {/* Recreating ADMA outer curved cyber glow lines */}
        <path d="M15 85 C 30 92, 70 92, 85 85" stroke="url(#cyberD)" strokeWidth="2" strokeLinecap="round" className="opacity-70" />
        <path d="M10 15 C 20 8, 80 8, 90 15" stroke="url(#cyberD)" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />

        {/* Stylized Modern Letter D */}
        <path 
          d="M38 25 H55 C70 25, 78 35, 78 50 C78 65, 70 75, 55 75 H38 V25Z" 
          stroke="url(#cyberD)" 
          strokeWidth="10" 
          strokeLinejoin="round" 
          strokeLinecap="round" 
        />
        {/* Cutout/gap in vertical line characteristic of ADMA styled D */}
        <path 
          d="M38 42 V58" 
          stroke="url(#cyberD)" 
          strokeWidth="6" 
          strokeLinecap="round" 
          className="stroke-indigo-400 dark:stroke-indigo-300"
        />
        <path 
          d="M50 38 C58 38, 62 42, 62 50 C62 58, 58 62, 50 62" 
          stroke="url(#cyberD)" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
        />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col justify-center">
          {/* Logo Main Acronym Text */}
          <div className="font-display font-bold tracking-widest text-2xl leading-none flex items-center">
            <span className="text-slate-800 dark:text-slate-200">A</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-extrabold mx-[1px]">D</span>
            <span className="text-slate-800 dark:text-slate-200">M</span>
            <span className="text-slate-800 dark:text-slate-200">A</span>
          </div>

          {/* Subheading under Logo */}
          <span className="font-sans text-[7px] uppercase tracking-[0.25em] font-medium text-slate-500 dark:text-slate-400 leading-none mt-1 whitespace-nowrap">
            Asian Digital Marketing Agency
          </span>
        </div>
      )}
    </div>
  );
}
