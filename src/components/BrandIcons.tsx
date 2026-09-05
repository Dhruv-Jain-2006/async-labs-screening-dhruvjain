import React from 'react';

/**
 * Harmoniq 8-ray starburst/asterisk logo mark
 */
export function HarmoniqLogoMark({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      {/* 8 radiating lines with rounded ends from center */}
      <line x1="12" y1="2" x2="12" y2="8" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="2" y1="12" x2="8" y2="12" />
      <line x1="16" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
    </svg>
  );
}

/**
 * Slack official multi-color icon
 */
export function SlackIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 127 127" className={className}>
      <path
        d="M27.2 80c0 7.4-6 13.4-13.4 13.4S.4 87.4.4 80s6-13.4 13.4-13.4h13.4v13.4zm6.7 0c0-7.4 6-13.4 13.4-13.4s13.4 6 13.4 13.4v33.5c0 7.4-6 13.4-13.4 13.4s-13.4-6-13.4-13.4V80z"
        fill="#E01E5A"
      />
      <path
        d="M47.3 27.2c-7.4 0-13.4-6-13.4-13.4S39.9.4 47.3.4s13.4 6 13.4 13.4v13.4H47.3zm0 6.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4H13.8c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4h33.5z"
        fill="#36C5F0"
      />
      <path
        d="M99.8 47.3c0-7.4 6-13.4 13.4-13.4s13.4 6 13.4 13.4-6 13.4-13.4 13.4H99.8V47.3zm-6.7 0c0 7.4-6 13.4-13.4 13.4s-13.4-6-13.4-13.4V13.8c0-7.4 6-13.4 13.4-13.4s13.4 6 13.4 13.4v33.5z"
        fill="#2EB67D"
      />
      <path
        d="M79.7 99.8c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4-13.4-6-13.4-13.4V99.8h13.4zm0-6.7c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4h33.5c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4H79.7z"
        fill="#ECB22E"
      />
    </svg>
  );
}

/**
 * Google official "G" 4-color icon
 */
export function GoogleIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

/**
 * Webflow blue "W" icon (as seen at apex in reference)
 */
export function WebflowIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M18.8 8.1c-.8 0-1.5.3-2.1.8-.3-1.4-1.5-2.4-3-2.4-.9 0-1.7.4-2.2 1-.3-.6-1-1-1.7-1-.6 0-1.1.3-1.4.7V6.8H6.5v10.4h1.9v-5.8c0-1.1.9-2 2-2s2 .9 2 2v5.8h1.9v-5.8c0-1.1.9-2 2-2s2 .9 2 2v5.8h1.9V11c0-1.6-1.3-2.9-2.9-2.9z"
        fill="#146EF5"
      />
      {/* Authentic Webflow W vector */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.16 7.42l-5.63 10.37h-3.41l2.58-5.32-3.16-5.05h3.63l1.37 2.76 1.6-2.76h3.02zM12.98 7.42l-2.65 10.37H6.92L4.04 7.42h3.38l1.45 5.86 1.76-5.86h2.35zM5.38 7.42L3.19 17.79H.84L0 7.42h2.7l.48 5.75L4.54 7.42h.84z"
        fill="#146EF5"
      />
    </svg>
  );
}

/**
 * Reddit official Snoo orange icon
 */
export function RedditIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="11" fill="#FF4500" />
      {/* Snoo face silhouette */}
      <path
        d="M19 12.3c0-.8-.6-1.4-1.4-1.4-.4 0-.8.2-1 .5-1-.7-2.3-1.2-3.8-1.3l.6-3.1 2.2.5c0 .6.5 1.1 1.2 1.1.7 0 1.2-.5 1.2-1.2 0-.7-.5-1.2-1.2-1.2-.5 0-.9.3-1.1.7l-2.5-.5c-.2 0-.4.1-.4.3l-.8 3.6c-1.6.1-3 .6-4 1.3-.2-.3-.6-.5-1.1-.5-.8 0-1.4.6-1.4 1.4 0 .5.3.9.6 1.2-.1.3-.1.6-.1.9 0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4c0-.3 0-.6-.1-.9.4-.3.7-.7.7-1.2zm-9.3.2c0-.5.4-.9.9-.9.5 0 .9.4.9.9 0 .5-.4.9-.9.9-.5 0-.9-.4-.9-.9zm4.7 2.8c-.8.6-2.1.6-2.9 0-.2-.1-.2-.3-.1-.4.1-.2.3-.2.4-.1.6.4 1.6.4 2.2 0 .1-.1.3-.1.4.1.1.1.1.3 0 .4zm-.1-1.9c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9.5 0 .9.4.9.9 0 .5-.4.9-.9.9z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Twitter classic blue bird icon (as shown in reference)
 */
export function TwitterIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#1D9BF0">
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
    </svg>
  );
}

/**
 * Microsoft Teams official icon
 */
export function TeamsIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      {/* Rear user avatar */}
      <path
        d="M16.5 6a2 2 0 100-4 2 2 0 000 4z"
        fill="#7B83EB"
      />
      <path
        d="M19.5 8h-5a1.5 1.5 0 00-1.5 1.5v3.8c.6.4 1.3.7 2 .7h2.8c1.2 0 2.2-1 2.2-2.2V9.5A1.5 1.5 0 0019.5 8z"
        fill="#7B83EB"
      />
      {/* Main user avatar */}
      <circle cx="9.5" cy="4.5" r="2.5" fill="#5059C9" />
      <path
        d="M13.5 8.5h-8A2 2 0 003.5 10.5v3.8c0 2.3 1.9 4.2 4.2 4.2h1.8v3.2c0 .4.5.7.8.4l3.5-3.6h.2a2 2 0 002-2v-6a2 2 0 00-2-2z"
        fill="#464EB8"
      />
      {/* Front "T" square tile */}
      <rect x="2" y="8" width="9.5" height="9.5" rx="2" fill="#5059C9" />
      {/* Letter T */}
      <path
        d="M4.5 10.8h4.5M6.75 10.8v4.2"
        stroke="#FFFFFF"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Async Labs geometric interlocking triangle logo mark
 */
export function AsyncLabsMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 36" fill="none" className={className}>
      {/* Outer upper-left diagonal bar */}
      <path
        d="M15 5.5L8.5 16.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Bottom-left chevron & base */}
      <path
        d="M10 14L3.5 25.5H15"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Main apex & right leg */}
      <path
        d="M21.5 5.5L34 27H27"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Upper left apex line */}
      <path
        d="M21.5 5.5L17.5 12.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Crossbar */}
      <path
        d="M14.5 19H26.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Async Labs complete brand lockup: Icon mark + "async" + "L Λ B S"
 */
export function AsyncLabsLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 text-neutral-950 ${className}`}>
      <AsyncLabsMark className="w-8 h-8 sm:w-9 sm:h-9 text-neutral-950 transition-transform group-hover:scale-105 duration-200 shrink-0" />
      <div className="flex flex-col justify-center select-none">
        <span className="text-xl sm:text-2xl font-bold tracking-tight leading-none text-neutral-950 font-['DM_Sans']">
          async
        </span>
        <span className="text-[9px] sm:text-[10px] font-normal tracking-[0.44em] leading-tight text-neutral-800 mt-1 pl-0.5 font-['DM_Sans'] uppercase">
          L Λ B S
        </span>
      </div>
    </div>
  );
}
