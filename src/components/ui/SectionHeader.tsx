import React from 'react'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleId?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
  titleId,
}) => {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment} ${className}`}>
      <span className="type-label text-accent-deep">{eyebrow}</span>
      <h2 id={titleId} className="type-h2 font-display font-semibold text-forest">
        {title}
      </h2>
      {subtitle && (
        <p className="type-body text-body-text">{subtitle}</p>
      )}
    </div>
  )
}
