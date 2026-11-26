import React from 'react'
import { Star } from 'lucide-react'

interface RatingChipProps {
  rating: number | string
  label?: string
  className?: string
  variant?: 'warm' | 'dark'
}

export const RatingChip: React.FC<RatingChipProps> = ({
  rating,
  label,
  className = '',
  variant = 'warm',
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-xs sm:text-[13px] font-semibold tracking-tight ${
        variant === 'dark'
          ? 'bg-white/15 text-white backdrop-blur-sm'
          : 'bg-[#F8F3ED] text-forest border border-forest/10'
      } ${className}`}
    >
      <Star
        className="h-3.5 w-3.5 fill-accent text-accent shrink-0"
        aria-hidden="true"
      />
      <span>{rating}</span>
      {label && <span className="font-normal opacity-85">{label}</span>}
    </span>
  )
}
