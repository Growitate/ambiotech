import React from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

interface FieldWrapperProps {
  id: string
  label: string
  required?: boolean
  error?: string
  success?: boolean
  hint?: string
  children: React.ReactNode
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
  id,
  label,
  required,
  error,
  success,
  hint,
  children,
}) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center justify-between gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-forest">
        {label}
        {required && (
          <span className="ml-1 text-accent-deep" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {success && !error && (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-leaf">
          <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
          Looks good
        </span>
      )}
    </div>
    {children}
    {hint && !error && (
      <p id={`${id}-hint`} className="text-xs text-body-text">
        {hint}
      </p>
    )}
    {error && (
      <p
        id={`${id}-error`}
        role="alert"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#B33A2B]"
      >
        <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>{error}</span>
      </p>
    )}
  </div>
)

function controlStateClasses(error?: string, success?: boolean): string {
  if (error) {
    return 'border-[#B33A2B] bg-[#FFF8F7] focus:border-[#B33A2B] focus:ring-2 focus:ring-[#B33A2B]/20'
  }
  if (success) {
    return 'border-leaf bg-white focus:border-leaf focus:ring-2 focus:ring-leaf/20'
  }
  return 'border-forest/20 bg-white hover:border-forest/40 focus:border-forest focus:ring-2 focus:ring-forest/15'
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
  success?: boolean
  hint?: string
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  required,
  error,
  success,
  hint,
  className = '',
  ...props
}) => (
  <FieldWrapper
    id={id}
    label={label}
    required={required}
    error={error}
    success={success}
    hint={hint}
  >
    <input
      id={id}
      required={required}
      aria-invalid={Boolean(error)}
      aria-describedby={
        error ? `${id}-error` : hint ? `${id}-hint` : undefined
      }
      className={`min-h-[48px] w-full rounded-input border px-4 py-3 text-base text-forest placeholder:text-body-text/60 transition-colors disabled:bg-canvas disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none ${controlStateClasses(
        error,
        success
      )} ${className}`}
      {...props}
    />
  </FieldWrapper>
)

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string
  label: string
  error?: string
  success?: boolean
  hint?: string
  options: Array<{ value: string; label: string }>
}

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  required,
  error,
  success,
  hint,
  options,
  className = '',
  ...props
}) => (
  <FieldWrapper
    id={id}
    label={label}
    required={required}
    error={error}
    success={success}
    hint={hint}
  >
    <select
      id={id}
      required={required}
      aria-invalid={Boolean(error)}
      aria-describedby={
        error ? `${id}-error` : hint ? `${id}-hint` : undefined
      }
      className={`min-h-[48px] w-full rounded-input border px-4 py-3 text-base text-forest transition-colors disabled:bg-canvas disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none ${controlStateClasses(
        error,
        success
      )} ${className}`}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </FieldWrapper>
)

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label: string
  error?: string
  success?: boolean
  hint?: string
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  required,
  error,
  success,
  hint,
  className = '',
  rows = 3,
  ...props
}) => (
  <FieldWrapper
    id={id}
    label={label}
    required={required}
    error={error}
    success={success}
    hint={hint}
  >
    <textarea
      id={id}
      rows={rows}
      required={required}
      aria-invalid={Boolean(error)}
      aria-describedby={
        error ? `${id}-error` : hint ? `${id}-hint` : undefined
      }
      className={`min-h-[96px] w-full rounded-input border px-4 py-3 text-base text-forest placeholder:text-body-text/60 transition-colors disabled:bg-canvas disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none resize-y ${controlStateClasses(
        error,
        success
      )} ${className}`}
      {...props}
    />
  </FieldWrapper>
)
