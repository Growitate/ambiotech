import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Mail } from 'lucide-react'
import { PRODUCTS } from '../../data/products'
import { buildMailtoUrl, buildWhatsAppUrl, SITE_INFO } from '../../data/site'
import { useMotionSafe } from '../../hooks/useMotionSafe'
import { useToast } from '../../hooks/useToast'
import { Input, Select, Textarea } from '../ui/FormControls'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/Icons'

interface FormValues {
  name: string
  phone: string
  plant: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const PLANT_OPTIONS = [
  ...PRODUCTS.map((p) => ({ value: p.name, label: p.name })),
  { value: 'Multiple / Bulk Mix', label: 'Multiple Plants / Bulk Enquiry' },
]

function normalizePhoneDigits(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2)
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1)
  }
  return digits
}

function validateField(field: keyof FormValues, value: string): string {
  if (field === 'name') {
    if (!value.trim()) return 'Please enter your name'
    if (value.trim().length < 2) return 'Please enter at least 2 characters'
  }
  if (field === 'phone') {
    const digits = normalizePhoneDigits(value)
    if (!digits) return 'Please enter a 10-digit phone number'
    if (digits.length !== 10) return 'Please enter a 10-digit phone number'
  }
  return ''
}

export const EnquiryForm: React.FC<{ defaultPlant?: string }> = ({
  defaultPlant,
}) => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    phone: '',
    plant: defaultPlant ?? PRODUCTS[0].name,
    message: '',
  })
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>(
    {}
  )
  const [errors, setErrors] = useState<FormErrors>({})
  const [shakeCount, setShakeCount] = useState(0)
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null)

  const { prefersReduced } = useMotionSafe()
  const { showToast } = useToast()

  const handleChange = (field: keyof FormValues, nextValue: string) => {
    setValues((prev) => ({ ...prev, [field]: nextValue }))
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, nextValue) || undefined,
      }))
    }
  }

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const err = validateField(field, values[field])
    setErrors((prev) => ({ ...prev, [field]: err || undefined }))
  }

  const composeEnquiryText = () => {
    const cleanPhone = normalizePhoneDigits(values.phone) || values.phone.trim()
    const lines = [
      `Hello Am biotech, I would like a quote.`,
      `Name: ${values.name.trim()}`,
      `Phone: ${cleanPhone}`,
      `Plant: ${values.plant}`,
    ]
    if (values.message.trim()) {
      lines.push(`Details: ${values.message.trim()}`)
    }
    return lines.join('\n')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const nameErr = validateField('name', values.name)
    const phoneErr = validateField('phone', values.phone)
    const nextErrors: FormErrors = {}
    if (nameErr) nextErrors.name = nameErr
    if (phoneErr) nextErrors.phone = phoneErr

    setTouched({ name: true, phone: true, plant: true, message: true })
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setShakeCount((c) => c + 1)
      return
    }

    const messageBody = composeEnquiryText()
    const waHref = buildWhatsAppUrl(messageBody)
    setSubmittedUrl(waHref)
    showToast('Opening WhatsApp with your quote request')
    window.open(waHref, '_blank', 'noopener,noreferrer')
  }

  const mailtoHref = buildMailtoUrl(
    `Plant Quote Enquiry - ${values.plant}`,
    composeEnquiryText()
  )

  return (
    <motion.form
      key={shakeCount}
      onSubmit={handleSubmit}
      noValidate
      animate={
        shakeCount > 0 && !prefersReduced
          ? { x: [0, -8, 8, -6, 6, 0] }
          : undefined
      }
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-5"
    >
      <Input
        id="enquiry-name"
        label="Name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Your full name or farm name"
        required
        value={values.name}
        onChange={(e) => handleChange('name', e.target.value)}
        onBlur={() => handleBlur('name')}
        error={errors.name}
        success={Boolean(touched.name && !errors.name && values.name.trim())}
      />

      <Input
        id="enquiry-phone"
        label="Phone"
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        placeholder="10-digit mobile number"
        required
        value={values.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        onBlur={() => handleBlur('phone')}
        error={errors.phone}
        success={Boolean(touched.phone && !errors.phone && values.phone.trim())}
      />

      <Select
        id="enquiry-plant"
        label="Plant of interest"
        name="plant"
        value={values.plant}
        options={PLANT_OPTIONS}
        onChange={(e) => handleChange('plant', e.target.value)}
      />

      <Textarea
        id="enquiry-message"
        label="Message"
        name="message"
        placeholder="Quantity & location (optional)"
        value={values.message}
        onChange={(e) => handleChange('message', e.target.value)}
      />

      {submittedUrl && (
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          role="status"
          className="rounded-[16px] border border-leaf/30 bg-sage-card/70 p-4 flex items-start gap-3"
        >
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf text-white">
            <Check className="w-4 h-4" aria-hidden="true" />
          </span>
          <div className="text-sm text-forest">
            <p className="font-bold">WhatsApp message prepared</p>
            <p className="mt-0.5 text-body-text">
              If WhatsApp did not open automatically,{' '}
              <a
                href={submittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-leaf underline underline-offset-2"
              >
                tap here to send on WhatsApp
              </a>
              .
            </p>
          </div>
        </motion.div>
      )}

      <div className="flex flex-col gap-3 pt-1">
        <Button
          type="submit"
          variant="whatsapp"
          state={submittedUrl ? 'success' : 'default'}
          className="w-full"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>Get a quote on WhatsApp</span>
        </Button>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-body-text">
          <span>Direct WhatsApp: {SITE_INFO.contact.whatsappDisplay}</span>
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-1.5 font-semibold text-forest hover:text-leaf underline underline-offset-4"
          >
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Prefer email? Send via mail app</span>
          </a>
        </div>
      </div>
    </motion.form>
  )
}
