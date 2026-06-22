/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Logo from './Logo.tsx';
import { Facebook, Instagram, Linkedin, MessageSquare, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 transition-colors duration-500 relative">
      
      {/* Scroll to Top button built in-footer but floating */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
        <button
          onClick={handleScrollToTop}
          className="p-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl hover:shadow-indigo-500/20 hover:scale-110 active:scale-90 transition-all focus:outline-none cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          
          {/* Logo & Description Column */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
            <Logo className="h-10 text-white animate-pulse" />
            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm font-semibold">
              We help businesses grow through professional websites, AI-generated videos, branding, social media marketing, and creative digital strategies. Our expert team delivers results that increase visibility, engagement, and conversions.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900 hover:bg-indigo-650 text-slate-400 hover:text-white transition"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4 fill-current stroke-0" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900 hover:bg-indigo-650 text-slate-400 hover:text-white transition"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900 hover:bg-indigo-650 text-slate-400 hover:text-white transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 fill-current stroke-0" />
              </a>
              <a
                href="https://wa.me/923458903225"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900 hover:bg-indigo-650 text-slate-400 hover:text-white transition"
                aria-label="WhatsApp Active Line"
              >
                <MessageSquare className="w-4 h-4 fill-current stroke-0" />
              </a>
            </div>
          </div>

          {/* Directory Column 1: Services */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-display font-black text-xs text-white uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs font-bold">
              <li><a href="#services" className="hover:text-indigo-400 transition">Web Design & Dev</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition">Branding Identity Check</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition">Social Media Visuals</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition">AI Video Assets</a></li>
            </ul>
          </div>

          {/* Directory Column 2: Quick Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-display font-black text-xs text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-bold">
              <li><a href="#about" className="hover:text-indigo-400 transition">Who We Are</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-400 transition">Showcase Portfolio</a></li>
              <li><a href="#process" className="hover:text-indigo-400 transition">Our Strategy Work</a></li>
              <li><a href="#team" className="hover:text-indigo-400 transition">Professional Team</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition">FAQ Help</a></li>
            </ul>
          </div>

          {/* Directory Column 3: Company */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-display font-black text-xs text-white uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-bold">
              <li><a href="#contact" className="hover:text-indigo-400 transition">Contact Us</a></li>
              <li><a href="mailto:hello.asiandigital@gmail.com" className="hover:text-indigo-400 transition">Email Support</a></li>
              <li><a href="https://wa.me/923458903225" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Direct Schedule Call</a></li>
              <li><a href="#testimonials" className="hover:text-indigo-400 transition">Review Logs</a></li>
            </ul>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-px bg-slate-900 my-12" />

        {/* Lower tier copyright and legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-bold">
          <p>© {currentYear} Asian Digital Marketing Agency (ADMA). All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-indigo-400 transition">Privacy Policy</a>
            <a href="#hero" className="hover:text-indigo-400 transition">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
