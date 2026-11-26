import React from 'react'

export const WhatsAppIcon: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12c0 1.884.535 3.643 1.461 5.134L2.4 21.6l4.602-1.275A9.708 9.708 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M9.42 7.95c-.22-.49-.45-.5-.66-.51h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.06 3.3 5.09 4.49 2.51.99 3.02.79 3.57.74.55-.05 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.6-.91-2.18Z"
      fill="currentColor"
    />
  </svg>
)

export const AmBiotechLogo: React.FC<{ inverted?: boolean }> = ({
  inverted = false,
}) => (
  <span className="inline-flex items-center gap-2.5 select-none">
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
        inverted ? 'bg-sage-card text-forest' : 'bg-forest text-sage-card'
      }`}
    >
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" aria-hidden="true">
        <path
          d="M25 7C15 7 8 13 7 23c1.5 0 3-.1 4.4-.5C19 20.5 24 14.5 25 7Z"
          fill="currentColor"
        />
        <path
          d="M7 25c2.5-6 7.5-11 15-15"
          stroke={inverted ? '#12302F' : '#3E7B4F'}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
    <span
      className={`font-display text-xl sm:text-[22px] font-semibold tracking-tight ${
        inverted ? 'text-white' : 'text-forest'
      }`}
    >
      Am biotech
    </span>
  </span>
)
