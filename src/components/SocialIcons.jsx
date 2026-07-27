import React from 'react';

export const IconGithub = ({ size = 20, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const IconLinkedin = ({ size = 20, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const IconInstagram = ({ size = 20, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const BadgeClaude = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" fill="#d97706" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="3" />
    <path d="M50 20L58 38L78 42L63 56L67 76L50 66L33 76L37 56L22 42L42 38L50 20Z" fill="#f59e0b" />
    <text x="50" y="90" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">CLAUDE</text>
  </svg>
);

export const BadgeCKAD = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" fill="#326ce5" fillOpacity="0.15" stroke="#326ce5" strokeWidth="3" />
    <polygon points="50,22 75,36 75,64 50,78 25,64 25,36" fill="none" stroke="#326ce5" strokeWidth="3" />
    <text x="50" y="55" textAnchor="middle" fill="#38bdf8" fontSize="16" fontWeight="bold" fontFamily="monospace">CKAD</text>
  </svg>
);

export const BadgeCKA = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" fill="#0284c7" fillOpacity="0.15" stroke="#0284c7" strokeWidth="3" />
    <polygon points="50,22 75,36 75,64 50,78 25,64 25,36" fill="none" stroke="#38bdf8" strokeWidth="3" />
    <text x="50" y="55" textAnchor="middle" fill="#38bdf8" fontSize="18" fontWeight="bold" fontFamily="monospace">CKA</text>
  </svg>
);

export const BadgeAWS = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" fill="#ff9900" fillOpacity="0.15" stroke="#ff9900" strokeWidth="3" />
    <path d="M30 45Q50 65 70 45" fill="none" stroke="#ff9900" strokeWidth="4" strokeLinecap="round" />
    <path d="M64 45L70 45L68 52" fill="none" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" />
    <text x="50" y="38" textAnchor="middle" fill="#ff9900" fontSize="16" fontWeight="bold">AWS</text>
  </svg>
);

export const BadgeTerraform = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" fill="#844fba" fillOpacity="0.15" stroke="#844fba" strokeWidth="3" />
    <path d="M32 30L48 39V57L32 48V30Z" fill="#844fba" />
    <path d="M52 39L68 30V48L52 57V39Z" fill="#c084fc" />
    <path d="M52 61L68 52V70L52 79V61Z" fill="#844fba" />
    <text x="50" y="90" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="bold">TERRAFORM</text>
  </svg>
);
