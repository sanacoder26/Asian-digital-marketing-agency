import React from 'react';

interface WhatsAppIconProps {
  className?: string;
}

export default function WhatsAppIcon({ className = 'w-4 h-4' }: WhatsAppIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3.25A8.75 8.75 0 0 0 5.1 16.4L4.25 19.75l3.38-1.02A8.75 8.75 0 1 0 12 3.25Z"
        fill="#25D366"
      />
      <path
        d="M9.2 8.4c.3-.6.7-1 1.3-1.1.2-.1.5-.1.7 0l.5.4c.2.2.3.4.2.7-.1.3-.2.5-.5.7-.2.2-.3.4-.2.6.3.7.9 1.3 1.6 1.7.4.2.6.1.8-.1.2-.2.4-.4.7-.5.2-.1.5-.1.7.1l.4.4c.2.2.2.5 0 .7-.4.6-.9 1-1.4 1.3-.8.4-1.7.6-2.6.5-1.1-.2-2.1-.8-2.8-1.8-.7-1-.9-2.2-.7-3.4.2-.8.5-1.3.8-1.7Z"
        fill="white"
      />
    </svg>
  );
}
