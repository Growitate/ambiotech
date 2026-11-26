import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { PLANT_IMAGES } from '../data/images'
import { ABOUT_CONTENT, SITE_INFO, buildWhatsAppUrl } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useMotionSafe } from '../hooks/useMotionSafe'
import { revealContainerVariants, revealItemVariants } from '../utils/motion'
import { BentoCard } from '../components/ui/Card'
import { PlantImage } from '../components/ui/PlantImage'
import { SectionHeader } from '../components/ui/SectionHeader'
import {
  VisualStepDelivery,
  VisualStepHardening,
  VisualStepLabJar,
  VisualStepSelection,
} from '../components/ui/BotanicalVisuals'
import { EnquiryForm } from '../components/features/EnquiryForm'
import { WhatsAppIcon } from '../components/ui/Icons'

const STEP_VISUALS = [
  VisualStepSelection,
  VisualStepLabJar,
  VisualStepHardening,
  VisualStepDelivery,
]

export const AboutPage: React.FC = () => {
  useDocumentMeta({
    title: 'About & Contact | Am biotech Nursery Hosur',
    description:
      'Started ~5 years ago in Hosur by Jeelan. Learn our tissue culture process and reach Am biotech directly via WhatsApp, phone, or quote form.',
  })

  const { prefersReduced } = useMotionSafe()

  return (
    <>
      {/* 1. STORY WITH VISUAL PAIR & MILESTONES */}
      <section aria-labelledby="about-story-heading" className="px-4 sm:px-6 pt-6 sm:pt-10 pb-10">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="type-label text-leaf">About Am biotech</span>
              <h1
                id="about-story-heading"
                className="mt-2 type-h1 font-display font-semibold text-forest"
              >
                {ABOUT_CONTENT.storyLead}
              </h1>
              <p className="mt-3 type-body text-body-text">
                {ABOUT_CONTENT.storyDetail}
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <PlantImage
                image={PLANT_IMAGES.tissueCultureJar}
                mode="photo"
                priority
                sizes="(max-width: 1024px) 45vw, 280px"
                className="w-full rounded-card shadow-forest-md"
              />
              <PlantImage
                image={PLANT_IMAGES.nurseryTrays}
                mode="photo"
                priority
                sizes="(max-width: 1024px) 45vw, 280px"
                className="w-full rounded-card shadow-forest-md mt-4 sm:mt-6"
              />
            </div>
          </div>

          <motion.div
            variants={prefersReduced ? undefined : revealContainerVariants}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {ABOUT_CONTENT.milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                variants={prefersReduced ? undefined : revealItemVariants}
              >
                <BentoCard
                  surface={idx === 1 ? 'sage' : 'white'}
                  className="h-full p-5"
                >
                  <span className="inline-flex rounded-pill bg-forest px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                    {m.year}
                  </span>
                  <h2 className="mt-3 type-h3 font-display font-semibold text-forest">
                    {m.title}
                  </h2>
                  <p className="mt-1 text-sm text-body-text">{m.detail}</p>
                </BentoCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section aria-label="Mission and Vision" className="px-4 sm:px-6 pb-10">
        <div className="mx-auto max-w-container grid grid-cols-1 md:grid-cols-2 gap-5">
          <BentoCard
            surface="sage"
            radius="hero"
            elevation="sm"
            watermark
            className="p-6 sm:p-8"
          >
            <span className="type-label text-leaf">
              {ABOUT_CONTENT.mission.eyebrow}
            </span>
            <h2 className="mt-1.5 type-h2 font-display font-semibold text-forest">
              {ABOUT_CONTENT.mission.title}
            </h2>
            <p className="mt-2 type-body text-body-text">
              {ABOUT_CONTENT.mission.body}
            </p>
          </BentoCard>

          <BentoCard
            surface="blush"
            radius="hero"
            elevation="sm"
            watermark
            className="p-6 sm:p-8"
          >
            <span className="type-label text-accent-deep">
              {ABOUT_CONTENT.vision.eyebrow}
            </span>
            <h2 className="mt-1.5 type-h2 font-display font-semibold text-forest">
              {ABOUT_CONTENT.vision.title}
            </h2>
            <p className="mt-2 type-body text-body-text">
              {ABOUT_CONTENT.vision.body}
            </p>
          </BentoCard>
        </div>
      </section>

      {/* 3. WHY TISSUE CULTURE: 4-STEP STEPPER WITH BOTANICAL SPOT VISUALS */}
      <section aria-labelledby="process-heading" className="section-pad px-4 sm:px-6 pt-2">
        <div className="mx-auto max-w-container">
          <SectionHeader
            titleId="process-heading"
            eyebrow="Why Tissue Culture"
            title="4 steps to healthy plants"
          />

          <motion.ol
            variants={prefersReduced ? undefined : revealContainerVariants}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mt-7 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-11 left-[12%] right-[12%] h-[2px] bg-forest/10 z-0"
            />
            <div
              aria-hidden="true"
              className="md:hidden absolute top-10 bottom-10 left-10 w-[2px] bg-forest/10 z-0"
            />

            {ABOUT_CONTENT.processSteps.map((step, index) => {
              const StepVisual = STEP_VISUALS[index] ?? VisualStepSelection
              return (
                <motion.li
                  key={step.step}
                  variants={prefersReduced ? undefined : revealItemVariants}
                  className="relative z-10"
                >
                  <BentoCard
                    surface="white"
                    className="h-full p-5 flex md:flex-col items-start gap-4"
                  >
                    <div className="flex items-center gap-2.5 shrink-0">
                      <StepVisual className="w-12 h-12" />
                      <span className="type-label text-[11px] text-accent-deep">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="type-h3 font-display font-semibold text-forest">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-body-text">{step.summary}</p>
                    </div>
                  </BentoCard>
                </motion.li>
              )
            })}
          </motion.ol>
        </div>
      </section>

      {/* 4. CONTACT SPLIT LAYOUT */}
      <section
        id="enquiry"
        aria-labelledby="contact-heading"
        className="section-pad px-4 sm:px-6 pt-2"
      >
        <div className="mx-auto max-w-container">
          <SectionHeader
            titleId="contact-heading"
            eyebrow="Contact"
            title="Get a quote"
            subtitle="Call, message on WhatsApp, or use the quick form."
          />

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[68px] items-center gap-3.5 rounded-card bg-forest p-4 text-white shadow-forest-md hover:bg-leaf transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <WhatsAppIcon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-sage-card">
                    WhatsApp
                  </span>
                  <p className="font-display text-lg font-semibold">
                    {SITE_INFO.contact.whatsappDisplay}
                  </p>
                </div>
              </a>

              <a
                href={SITE_INFO.contact.phoneHref}
                className="group flex min-h-[68px] items-center gap-3.5 rounded-card bg-white p-4 text-forest shadow-forest-sm hover:shadow-forest-md transition-shadow focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-card text-leaf">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-body-text">
                    Phone
                  </span>
                  <p className="font-display text-lg font-semibold text-forest">
                    {SITE_INFO.contact.phoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${SITE_INFO.contact.email}`}
                className="group flex min-h-[68px] items-center gap-3.5 rounded-card bg-white p-4 text-forest shadow-forest-sm hover:shadow-forest-md transition-shadow focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush-card text-accent-deep">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-body-text">
                    Email
                  </span>
                  <p className="text-sm font-semibold text-forest break-all">
                    {SITE_INFO.contact.email}
                  </p>
                </div>
              </a>

              <BentoCard
                surface="sage"
                className="p-4 flex items-center gap-3.5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-leaf shadow-sm">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-leaf">
                    Location
                  </span>
                  <p className="font-display text-base font-semibold text-forest">
                    {SITE_INFO.location}
                  </p>
                </div>
              </BentoCard>
            </div>

            <div className="lg:col-span-7">
              <BentoCard
                surface="white"
                radius="hero"
                elevation="md"
                className="p-6 sm:p-8"
              >
                <EnquiryForm />
              </BentoCard>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
