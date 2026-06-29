/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Process from './components/Process.tsx';
import Portfolio from './components/Portfolio.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppFloat from './components/WhatsAppFloat.tsx';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('adma-theme');
    return saved === 'dark'; // Default to light mode (false)
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('adma-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('adma-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-500">
      {/* 1. Header/Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Us Section */}
      <About />

      {/* 4. Our Services Section */}
      <Services />

      {/* 5. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 6. Our Process Section */}
      <Process />

      {/* 7. Portfolio Showcase Section */}
      <Portfolio />

      {/* 9. Client Testimonials Section */}
      <Testimonials />

      {/* 10. FAQs Accordion Section */}
      <FAQ />

      {/* 11. Contact & Scheduling Section */}
      <Contact />

      {/* 12. Footer Section */}
      <Footer />

      {/* 13. Dynamic Floating Buttons Overlay */}
      <WhatsAppFloat />
    </div>
  );
}
