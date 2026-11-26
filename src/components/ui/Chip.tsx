import React from 'react'

interface ChipProps {
  label: string
  active?: boolean
  thumbSrc?: string
  thumbAlt?: string
  isNew?: boolean
  onClick?: () => void
  className?: string
}

export const Chip: React.FC<ChipProps> = ({
  label,
  active = false,
  thumbSrc,
  thumbAlt = '',
  isNew = false,
  onClick,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group relative inline-flex min-h-[48px] items-center gap-2.5 rounded-pill px-4 py-2 text-[15px] font-medium transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2 ${
        active
          ? 'bg-forest text-white shadow-forest-sm'
          : 'bg-white text-forest shadow-forest-sm hover:bg-sage-card/60'
      } ${className}`}
    >
      {thumbSrc && (
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full ${
            active ? 'bg-white/15' : 'bg-canvas'
          }`}
        >
          <img
            src={thumbSrc}
            alt={thumbAlt}
            width={32}
            height={32}
            loading="lazy"
            className="h-7 w-7 object-contain"
          />
        </span>
      )}
      <span className="whitespace-nowrap">{label}</span>
      {isNew && (
        <span className="absolute -top-2.5 right-2 rounded-pill bg-accent-deep px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
          New
        </span>
      )}
    </button>
  )
}
