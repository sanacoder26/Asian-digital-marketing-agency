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
      <div className="flex items-center justify-center rounded-2xl bg-slate-950/95 p-2.5 shadow-lg ring-1 ring-indigo-400/30 dark:bg-white/95 dark:ring-slate-200/70">
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cyberD" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <radialGradient id="cyberGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="50%" cy="50%" r="45" fill="url(#cyberGlow)" />
          <path d="M38 25 H55 C70 25, 78 35, 78 50 C78 65, 70 75, 55 75 H38 V25Z" stroke="url(#cyberD)" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M38 42 V58" stroke="url(#cyberD)" strokeWidth="6" strokeLinecap="round" className="stroke-indigo-400 dark:stroke-indigo-500" />
          <path d="M50 38 C58 38, 62 42, 62 50 C62 58, 58 62, 50 62" stroke="url(#cyberD)" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col justify-center">
          <div className="font-display font-bold tracking-[0.24em] text-xl leading-none flex items-center">
            <span className="text-slate-900 dark:text-slate-950">A</span>
            <span className="text-indigo-600 dark:text-indigo-500 font-extrabold mx-[1px]">D</span>
            <span className="text-slate-900 dark:text-slate-950">M</span>
            <span className="text-slate-900 dark:text-slate-950">A</span>
          </div>

          <span className="font-sans text-[7px] uppercase tracking-[0.25em] font-semibold text-slate-600 dark:text-slate-700 leading-none mt-1 whitespace-nowrap">
            Asian Digital Marketing Agency
          </span>
        </div>
      )}
    </div>
  );
}
