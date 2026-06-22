/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Clock, MessageSquare, AlertCircle, Sparkles, CheckCircle, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    representative: 'Our Team', // Fixed/Pre-assigned Coordinator
    clientName: '',
    email: '',
    whatsapp: '',
    company: '',
    service: 'Web Design & Development',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    'Web Design & Development',
    'Digital Marketing',
    'Branding',
    'Social Media Design',
    'AI Content Creation',
    'Graphic Design'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.clientName.trim()) newErrors.clientName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is required';
    } else if (!/^[0-9+\s-]{8,20}$/.test(formData.whatsapp.replace(/\D/g, ''))) {
      newErrors.whatsapp = 'Please provide a valid phone/WhatsApp number';
    }
    if (!formData.message.trim()) newErrors.message = 'Please type a short description of your requirements';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Pre-formats the form results and opens WhatsApp
  const routeToWhatsApp = (buttonType: 'quote' | 'call') => {
    if (!validate()) return;

    const leadHeading = buttonType === 'quote' ? 'ADMA FREE QUOTE REQUEST' : 'ADMA SCHEDULE CALL REQUEST';
    
    const waText = `*${leadHeading}*
------------------------------
*Coordinator Assignee:* ${formData.representative}
*Client Name:* ${formData.clientName}
*Email:* ${formData.email}
*Active Phone/WhatsApp:* ${formData.whatsapp}
*Company/Brand:* ${formData.company || 'Not Specified'}
*Service Required:* ${formData.service}
*Estimated Budget:* ${formData.budget}
*Message detail:* ${formData.message}`;

    const isWebDev = formData.service === 'Web Design & Development';
    const targetPhoneNumber = isWebDev ? '923121167784' : '923458903225';
    const waUrl = `https://wa.me/${targetPhoneNumber}?text=${encodeURIComponent(waText)}`;
    
    // Open in separate browser window/tab
    window.open(waUrl, '_blank');
    setIsSuccess(true);

    // Reset inputs
    setFormData({
      representative: 'Our Team',
      clientName: '',
      email: '',
      whatsapp: '',
      company: '',
      service: 'Web Design & Development',
      budget: '$1,000 - $3,000',
      message: ''
    });

    setTimeout(() => {
      setIsSuccess(false);
    }, 7000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      
      {/* Background neon dots */}
      <div className="absolute inset-0 dot-grid opacity-[0.05] dark:opacity-[0.12] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            Get in touch
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Consult with Our <span className="gradient-text">Team</span>
          </p>
          <div className="h-2 w-20 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left info column: Office Hours, WhatsApp */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
              Start building your premium brand presence today.
            </h3>
            
            <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
              Have questions or ready to launch a high-performance marketing campaign? Send your credentials to Our Team. We review specifications instantly and connect directly via WhatsApp to discuss deployment routes.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              
              {/* WhatsApp direct block */}
              <div className="p-6 rounded-3xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100/35 dark:border-indigo-900/30 flex items-center gap-5 group hover:border-indigo-500/30 transition glass">
                <div className="p-3.5 rounded-xl bg-emerald-500 text-white shadow-md">
                  <Phone className="w-5 h-5 fill-current stroke-0" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">
                    WhatsApp Only Support
                  </span>
                  <a
                    href="https://wa.me/923458903225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-display font-black text-lg text-slate-800 dark:text-slate-100 hover:text-indigo-500 dark:hover:text-indigo-400 mt-1"
                  >
                    +92 345 8903225
                  </a>
                </div>
              </div>

              {/* Office Hours block */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 flex items-center gap-5 glass">
                <div className="p-3.5 rounded-xl bg-indigo-600 text-white shadow-md">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">
                    Office Hours
                  </span>
                  <p className="font-display font-black text-sm text-slate-800 dark:text-slate-100 mt-1.5 leading-none">
                    9am to 9pm (Monday to Saturday)
                  </p>
                  <p className="text-xs text-slate-400 font-bold font-sans mt-2">
                    Closed on Sundays
                  </p>
                </div>
              </div>

              {/* Email support block */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 flex items-center gap-5 group hover:border-indigo-500/30 transition glass">
                <div className="p-3.5 rounded-xl bg-blue-600 text-white shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">
                    Email Support
                  </span>
                  <a
                    href="mailto:hello.asiandigital@gmail.com"
                    className="block font-display font-black text-sm sm:text-base text-slate-800 dark:text-slate-100 hover:text-indigo-500 dark:hover:text-indigo-400 mt-1"
                  >
                    hello.asiandigital@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right column: Interactive form */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900 p-8 sm:p-10 rounded-3xl shadow-xl glass">
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-400 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                <div>
                  <span className="block font-sans font-bold text-sm">Request Processed!</span>
                  <span className="text-xs block mt-1">
                    We've opened a WhatsApp window containing your formatted specifications. Click "send" inside WhatsApp to deliver details directly to Our Team.
                  </span>
                </div>
              </motion.div>
            )}

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              {/* Coordinator selection row */}
              <div>
                <label className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400 mb-2">
                  Assignee Coordinator
                </label>
                <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl select-none">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300">
                    Our Team (Active)
                  </span>
                </div>
              </div>

              {/* Client Name Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="clientName" className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 bg-white dark:bg-slate-950 border rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none transition focus:border-indigo-500/80 ${
                      errors.clientName ? 'border-red-500' : 'border-slate-250 dark:border-slate-850'
                    }`}
                  />
                  {errors.clientName && (
                    <p className="flex items-center gap-1 text-[10px] text-red-500 mt-1.5 font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.clientName}</span>
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3 bg-white dark:bg-slate-950 border rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none transition focus:border-indigo-500/80 ${
                      errors.email ? 'border-red-500' : 'border-slate-250 dark:border-slate-850'
                    }`}
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1 text-[10px] text-red-500 mt-1.5 font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Whatsapp & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="whatsapp" className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400 mb-2">
                    WhatsApp Nominee * (Only WhatsApp)
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+92 3--"
                    className={`w-full px-4 py-3 bg-white dark:bg-slate-950 border rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none transition focus:border-indigo-500/80 ${
                      errors.whatsapp ? 'border-red-500' : 'border-slate-250 dark:border-slate-850'
                    }`}
                  />
                  {errors.whatsapp && (
                    <p className="flex items-center gap-1 text-[10px] text-red-500 mt-1.5 font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.whatsapp}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400 mb-2">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your corporate brand"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-850 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none transition focus:border-indigo-500/80"
                  />
                </div>
              </div>

              {/* Service Required dropdown & Budget Select dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-850 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none transition focus:border-indigo-500/80"
                  >
                    {servicesList.map((srv) => (
                      <option key={srv} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400 mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-850 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none transition focus:border-indigo-500/80"
                  >
                    {budgetRanges.map((bgt) => (
                      <option key={bgt} value={bgt}>{bgt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label htmlFor="message" className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400 mb-2">
                  Explain your requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your brand/campaign specs..."
                  className={`w-full px-4 py-3 bg-white dark:bg-slate-950 border rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 outline-none transition focus:border-indigo-500/80 ${
                    errors.message ? 'border-red-500' : 'border-slate-250 dark:border-slate-850'
                  }`}
                />
                {errors.message && (
                  <p className="flex items-center gap-1 text-[10px] text-red-500 mt-1.5 font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* High-Contrast Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 pt-4">
                {/* Button 1: Quote */}
                <button
                  type="button"
                  onClick={() => routeToWhatsApp('quote')}
                  className="flex-1 py-4 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-bold rounded-xl shadow-lg hover:shadow-indigo-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-indigo-200" />
                  <span>Get Free Quote</span>
                </button>

                {/* Button 2: Call */}
                <button
                  type="button"
                  onClick={() => routeToWhatsApp('call')}
                  className="flex-1 py-4 px-6 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-slate-100 font-sans font-bold rounded-xl border border-slate-700/50 hover:shadow-xl active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  <span>Schedule a Call</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
