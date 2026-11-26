import React from 'react'

interface VisualProps {
  className?: string
}

export const VisualLeafShield: React.FC<VisualProps> = ({
  className = 'w-11 h-11',
}) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
    <circle cx="24" cy="24" r="22" fill="#E2E9E0" />
    <path
      d="M24 11l10 4.2v8.1c0 6.5-4.3 12-10 13.7-5.7-1.7-10-7.2-10-13.7v-8.1L24 11Z"
      fill="#FFFFFF"
      stroke="#12302F"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M29.5 18.5c-5 0-9 3.6-9.5 8.8 1.3.1 2.5-.1 3.7-.6 3.5-1.4 5.5-4.4 5.8-8.2Z"
      fill="#3E7B4F"
    />
    <path
      d="M20 29c1.2-3 3.7-5.7 7-7.8"
      stroke="#E2E9E0"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
)

export const VisualBananaBunch: React.FC<VisualProps> = ({
  className = 'w-11 h-11',
}) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
    <circle cx="24" cy="24" r="22" fill="#FFFFFF" />
    <path
      d="M24 11v4"
      stroke="#12302F"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 15c-5 2.5-8 8.5-7 15.5 1 2.2 3.2 2.8 4.4 1.2 1.2-2 1.8-6 2.6-10.7"
      fill="#EBD8D0"
      stroke="#12302F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 15c5 2.5 8 8.5 7 15.5-1 2.2-3.2 2.8-4.4 1.2-1.2-2-1.8-6-2.6-10.7"
      fill="#C26E3E"
      fillOpacity="0.25"
      stroke="#12302F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 15c-1.8 4-2.2 10.5-1 17.5.6 1.5 1.4 1.5 2 0 1.2-7 .8-13.5-1-17.5Z"
      fill="#3E7B4F"
      stroke="#12302F"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

export const VisualUniformSprouts: React.FC<VisualProps> = ({
  className = 'w-11 h-11',
}) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
    <circle cx="24" cy="24" r="22" fill="#FFFFFF" />
    <path
      d="M11 33h26"
      stroke="#12302F"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {[16, 24, 32].map((cx) => (
      <g key={cx}>
        <path
          d={`M${cx} 33v-10`}
          stroke="#12302F"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d={`M${cx} 25c0-3.5-2.8-6-5.5-5.5.2 3.2 2.5 5.5 5.5 5.5Z`}
          fill="#3E7B4F"
        />
        <path
          d={`M${cx} 23c0-3.5 2.8-6 5.5-5.5-.2 3.2-2.5 5.5-5.5 5.5Z`}
          fill="#C26E3E"
          fillOpacity="0.85"
        />
      </g>
    ))}
  </svg>
)

export const VisualFarmerCare: React.FC<VisualProps> = ({
  className = 'w-11 h-11',
}) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
    <circle cx="24" cy="24" r="22" fill="#FFFFFF" fillOpacity="0.14" />
    <circle cx="31" cy="15" r="3.5" fill="#EBD8D0" />
    <path
      d="M24 31V20"
      stroke="#E2E9E0"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M24 22c-4.5 0-7.5-3-7.5-6.8 4 0 7.2 2.7 7.5 6.8Z"
      fill="#3E7B4F"
    />
    <path
      d="M24 24c4.5 0 7.5-3 7.5-6.8-4 0-7.2 2.7-7.5 6.8Z"
      fill="#E2E9E0"
    />
    <path
      d="M14 31.5c2.8 2 6.2 3 10 3s7.2-1 10-3"
      stroke="#EBD8D0"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

export const VisualStepSelection: React.FC<VisualProps> = ({
  className = 'w-12 h-12',
}) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
    <rect width="48" height="48" rx="16" fill="#E2E9E0" />
    <circle cx="22" cy="22" r="9.5" fill="#FFFFFF" stroke="#12302F" strokeWidth="1.6" />
    <path d="M29 29l6.5 6.5" stroke="#12302F" strokeWidth="2.2" strokeLinecap="round" />
    <path
      d="M25.5 18.5c-3.5 0-6.2 2.5-6.5 6 1 .1 2 0 2.9-.5 2.3-1 3.4-3 3.6-5.5Z"
      fill="#3E7B4F"
    />
  </svg>
)

export const VisualStepLabJar: React.FC<VisualProps> = ({
  className = 'w-12 h-12',
}) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
    <rect width="48" height="48" rx="16" fill="#EBD8D0" />
    <rect x="17" y="10" width="14" height="4" rx="2" fill="#12302F" />
    <rect
      x="15"
      y="14"
      width="18"
      height="23"
      rx="5"
      fill="#FFFFFF"
      stroke="#12302F"
      strokeWidth="1.6"
    />
    <path d="M16 30h16v3a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-3Z" fill="#E2E9E0" />
    <path d="M24 30v-8" stroke="#12302F" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 24c-3.2 0-5.2-2-5.2-4.8 2.8 0 5 1.8 5.2 4.8Z" fill="#3E7B4F" />
    <path d="M24 23c3.2 0 5.2-2 5.2-4.8-2.8 0-5 1.8-5.2 4.8Z" fill="#3E7B4F" />
  </svg>
)

export const VisualStepHardening: React.FC<VisualProps> = ({
  className = 'w-12 h-12',
}) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
    <rect width="48" height="48" rx="16" fill="#E2E9E0" />
    <circle cx="34" cy="14" r="3.5" fill="#C26E3E" />
    <path d="M18 28h12l-1.8 9h-8.4L18 28Z" fill="#C26E3E" fillOpacity="0.85" stroke="#12302F" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M24 28V18" stroke="#12302F" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M24 21c-4.5 0-7.5-3-7.5-6.5 4 0 7.2 2.5 7.5 6.5Z" fill="#3E7B4F" />
    <path d="M24 22c4.5 0 7.5-3 7.5-6.5-4 0-7.2 2.5-7.5 6.5Z" fill="#3E7B4F" />
  </svg>
)

export const VisualStepDelivery: React.FC<VisualProps> = ({
  className = 'w-12 h-12',
}) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
    <rect width="48" height="48" rx="16" fill="#EBD8D0" />
    <rect
      x="11"
      y="27"
      width="26"
      height="9"
      rx="3"
      fill="#FFFFFF"
      stroke="#12302F"
      strokeWidth="1.6"
    />
    {[17, 24, 31].map((cx) => (
      <g key={cx}>
        <path d={`M${cx} 27v-7`} stroke="#12302F" strokeWidth="1.5" strokeLinecap="round" />
        <path d={`M${cx} 22c-2.5 0-4-1.8-4-4 2.2 0 3.8 1.5 4 4Z`} fill="#3E7B4F" />
        <path d={`M${cx} 21c2.5 0 4-1.8 4-4-2.2 0-3.8 1.5-4 4Z`} fill="#3E7B4F" />
      </g>
    ))}
  </svg>
)

export const VisualPlantCluster: React.FC<VisualProps> = ({
  className = 'w-12 h-12',
}) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
    <circle cx="24" cy="24" r="22" fill="#E2E9E0" />
    <path d="M24 34V18" stroke="#12302F" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M24 23c-5.5 0-9-3.5-9-8 4.8 0 8.5 3.2 9 8Z" fill="#3E7B4F" />
    <path d="M24 25c5.5 0 9-3.5 9-8-4.8 0-8.5 3.2-9 8Z" fill="#12302F" />
    <path d="M17 34h14" stroke="#C26E3E" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)
