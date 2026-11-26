import React from 'react'
import { Link } from 'react-router-dom'
import { Check, Loader2 } from 'lucide-react'

export type ButtonVariant =
  | 'primary'
  | 'whatsapp'
  | 'light'
  | 'outline'
  | 'secondary'
  | 'icon-round'

export type ButtonVisualState = 'default' | 'loading' | 'success'

interface BaseButtonProps {
  variant?: ButtonVariant
  state?: ButtonVisualState
  className?: string
  children?: React.ReactNode
  disabled?: boolean
}

type AnchorOrLinkProps =
  | ({
      as?: 'button'
      to?: never
      href?: never
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      as: 'a'
      href: string
      to?: never
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({
      as: 'link'
      to: string
      href?: never
    } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)

export type ButtonProps = BaseButtonProps & AnchorOrLinkProps

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-pill bg-forest px-7 py-3 text-[15px] sm:text-base font-semibold text-white shadow-forest-sm hover:bg-[#1a4341] hover:shadow-forest-md active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none',
  whatsapp:
    'inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-pill bg-leaf px-7 py-3 text-[15px] sm:text-base font-semibold text-white shadow-forest-sm hover:bg-[#326641] hover:shadow-forest-md active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none',
  light:
    'inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-pill bg-white px-7 py-3 text-[15px] sm:text-base font-semibold text-forest shadow-forest-sm hover:bg-sage-card active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none',
  outline:
    'inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-pill border border-forest/25 bg-white/80 px-6 py-3 text-[15px] sm:text-base font-semibold text-forest hover:border-forest hover:bg-white active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none',
  secondary:
    'inline-flex min-h-[48px] items-center gap-2 px-1 py-2 text-[15px] sm:text-base font-semibold text-forest underline decoration-2 underline-offset-[6px] decoration-forest/70 hover:text-accent-deep hover:decoration-accent-deep active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none',
  'icon-round':
    'inline-flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-pill bg-forest text-white shadow-forest-sm hover:bg-leaf hover:shadow-forest-md active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none',
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'primary',
    state = 'default',
    className = '',
    children,
    disabled = false,
    ...rest
  } = props

  const classes = `transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2 ${VARIANT_CLASSES[variant]} ${className}`

  const innerContent = (
    <>
      {state === 'loading' && (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
      )}
      {state === 'success' && (
        <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
      )}
      {children}
    </>
  )

  if (rest.as === 'link') {
    const { as: _as, to, ...linkProps } = rest
    return (
      <Link to={to} className={classes} {...linkProps}>
        {innerContent}
      </Link>
    )
  }

  if (rest.as === 'a') {
    const { as: _as, href, ...anchorProps } = rest
    return (
      <a href={href} className={classes} {...anchorProps}>
        {innerContent}
      </a>
    )
  }

  const { as: _as, type = 'button', ...buttonProps } = rest as {
    as?: 'button'
  } & React.ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button
      type={type}
      disabled={disabled || state === 'loading'}
      aria-busy={state === 'loading' || undefined}
      className={classes}
      {...buttonProps}
    >
      {innerContent}
    </button>
  )
}
