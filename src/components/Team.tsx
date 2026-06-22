/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Send, MessageSquare } from 'lucide-react';
import { TEAM_MEMBERS } from '../types.ts';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.05] dark:opacity-[0.11] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h2 className="font-display font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            Our Professionals
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Meet the Creative <span className="gradient-text">Minds at ADMA</span>
          </p>
          <div className="h-2 w-20 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => {
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-150 dark:border-slate-850/80 p-5 hover:bg-white dark:hover:bg-slate-950 hover:shadow-xl hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between glass"
              >
                {/* Visual Avatar frame */}
                <div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl mb-5 shadow-sm border border-slate-200/40 dark:border-slate-800/30">
                    <img
                      src={member.avatarUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Social links overlay inside photo */}
                    <div className="absolute bottom-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                      {member.linkedinUrl.includes('wa.me') ? (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white dark:bg-slate-950 text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 font-bold shadow-md hover:scale-110 active:scale-95 transition"
                          aria-label={`Contact ${member.name} on WhatsApp`}
                        >
                          <MessageSquare className="w-4 h-4 fill-current stroke-1" />
                        </a>
                      ) : (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white dark:bg-slate-950 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 font-bold shadow-md hover:scale-110 active:scale-95 transition"
                          aria-label={`${member.name} LinkedIn Profile`}
                        >
                          <Linkedin className="w-4 h-4 fill-current stroke-0" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Identity detail */}
                  <div>
                    <h3 className="font-display font-black text-lg text-slate-900 dark:text-white leading-snug">
                      {member.name}
                    </h3>
                    <p className="font-mono text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 mt-2">
                      {member.position}
                    </p>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3.5 font-semibold">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Direct quick line */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900/60 flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold tracking-wide text-slate-400">
                    Active ADMA Team
                  </span>
                  <a
                    href={`https://wa.me/923458903225?text=Hi%20there%20ADMA%2C%20I'd%20like%20to%20message%20your%20${encodeURIComponent(member.position)}%20role.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
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
