/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* Animated breathing pulse rings around the icon */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

      {/* Floating Button anchor */}
      <a
        href="https://wa.me/923458903225?text=Hello%20ADMA%20team%2C%20I'm%20exploring%20your%20website%20and%20interested%20in%20reaching%20out%20about%20your%20marketing%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl scale-100 hover:scale-110 duration-200 active:scale-95 group"
        aria-label="Direct Chat on WhatsApp"
      >
        {/* SVG WhatsApp icon */}
        <svg 
          className="w-8 h-8 fill-current stroke-0" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.019-5.11-2.88-6.973C16.63 1.91 14.15 1.88 11.517 1.88c-5.44 0-9.866 4.418-9.87 9.856l1.35 1.348-.829 3.028 3.102-.814zm11.233-5.304c-.31-.155-1.838-.907-2.12-.1-1-.284-.44-.31-.62-.057-.184.254-.725.908-.888 1.093-.162.184-.325.207-.635.051-.31-.155-1.31-.482-2.494-1.537-.92-.818-1.54-1.83-1.72-2.138-.18-.309-.018-.475.137-.629.14-.139.31-.36.465-.54.155-.18.207-.31.31-.515.103-.206.052-.386-.026-.541-.078-.155-.724-1.745-.992-2.39-.262-.63-.529-.54-.725-.55-.188-.01-.403-.01-.62-.01-.216 0-.568.082-.865.407-.297.324-1.135 1.11-1.135 2.707 0 1.596 1.162 3.137 1.324 3.355.162.216 2.288 3.494 5.542 4.9.774.335 1.38.535 1.85.684.778.247 1.488.212 2.048.129.624-.093 1.838-.752 2.098-1.442.26-.69.26-1.282.183-1.407-.078-.125-.284-.207-.595-.362z" />
        </svg>

        {/* Floating tooltip displayed on hover */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-[10px] sm:text-xs font-sans font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
          How can we help? Chat now!
        </div>
      </a>
    </div>
  );
}
