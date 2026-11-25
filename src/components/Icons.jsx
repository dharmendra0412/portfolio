import React from 'react';

export function Github({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Linkedin({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function DKLogo({ className = "w-8 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dkGrad" x1="0" y1="0" x2="46" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#65fae0" />
          <stop offset="100%" stopColor="#1ed8b4" />
        </linearGradient>
      </defs>
      {/* D outer stem & bowl */}
      <path
        d="M3 4H13.5C21.2 4 25.5 8.8 25.5 16C25.5 23.2 21.2 28 13.5 28H3V4ZM8.2 8.6V23.4H13.2C17.8 23.4 20.1 20.7 20.1 16C20.1 11.3 17.8 8.6 13.2 8.6H8.2Z"
        fill="url(#dkGrad)"
      />
      {/* Subtle geometric split accent */}
      <path d="M26.5 4H30.5V10.5L26.5 14V4Z" fill="#22dfba" opacity="0.65" />
      <path d="M26.5 28H30.5V21.5L26.5 18V28Z" fill="#22dfba" opacity="0.65" />
      {/* K chevron arms */}
      <path
        d="M37.5 4H43.5L32.8 16L43.8 28H37.6L26.8 16L37.5 4Z"
        fill="url(#dkGrad)"
      />
    </svg>
  );
}

export function PythonLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M11.91 2C6.8 2 7.12 4.21 7.12 4.21l.01 2.29h4.88v.69H5.2S2 6.83 2 11.88c0 5.05 2.79 4.87 2.79 4.87h1.66v-2.34s-.09-2.79 2.75-2.79h4.73s2.66.04 2.66-2.57V4.69S17.01 2 11.91 2zm-2.63 1.56a.88.88 0 110 1.76.88.88 0 010-1.76z"
        fill="#387EB8"
      />
      <path
        d="M12.09 22c5.11 0 4.79-2.21 4.79-2.21l-.01-2.29h-4.88v-.69h6.81S22 17.17 22 12.12c0-5.05-2.79-4.87-2.79-4.87h-1.66v2.34s.09 2.79-2.75 2.79H10.07s-2.66-.04-2.66 2.57v4.36S6.99 22 12.09 22zm2.63-1.56a.88.88 0 110-1.76.88.88 0 010 1.76z"
        fill="#FFE052"
      />
    </svg>
  );
}

export function ReactLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.1" fill="#58C4DC" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.7" stroke="#58C4DC" strokeWidth="1.25" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.7" transform="rotate(60 12 12)" stroke="#58C4DC" strokeWidth="1.25" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.7" transform="rotate(120 12 12)" stroke="#58C4DC" strokeWidth="1.25" />
    </svg>
  );
}

export function FastApiLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#18D6AF" />
      <path d="M12.6 5.2L7.3 13.1H11.5L10.8 18.8L16.7 10.7H12.3L12.6 5.2Z" fill="#041918" />
    </svg>
  );
}

export function MediaPipeLogo({ className = "w-5 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 28 22" fill="none">
      <rect x="2" y="7" width="2.5" height="8" rx="1.2" fill="#26EAC1" />
      <rect x="6.5" y="4" width="2.8" height="14" rx="1.4" fill="#38BDF8" />
      <rect x="11.3" y="2.5" width="3" height="17" rx="1.5" fill="#26EAC1" />
      <rect x="16.3" y="6" width="2.8" height="10" rx="1.4" fill="#14B8A6" />
      <path d="M23.5 3.5V8.5M21 6H26" stroke="#3DEFC7" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function GithubSolid({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}
