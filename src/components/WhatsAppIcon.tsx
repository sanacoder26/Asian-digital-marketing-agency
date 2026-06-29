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
        d="M12 3a9 9 0 0 0-7.6 13.8L3 21l4.2-1.4A9 9 0 1 0 12 3Z"
        fill="currentColor"
      />
      <path
        d="M8.8 8.2c.2-.4.4-.7.8-.8.2-.1.4-.1.6 0l.5.4c.2.2.3.4.2.7-.1.3-.2.5-.5.7-.2.2-.3.4-.2.6.3.6.8 1.1 1.4 1.4.3.1.5 0 .7-.2.2-.2.4-.4.7-.5.2-.1.5-.1.7.1l.4.4c.2.2.2.5 0 .7-.4.5-.9.9-1.4 1.2-.6.3-1.2.4-1.9.3-1.2-.2-2.2-.9-3-2-.8-1.1-1.2-2.3-1-3.6.1-.7.3-1.4.7-2 .2-.3.4-.5.7-.6Z"
        fill="white"
      />
    </svg>
  );
}
