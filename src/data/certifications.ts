import type { CertificationBadge } from '../types'

/**
 * TODO: Replace these placeholder certification/quality badges with exact
 * registration numbers, DBT/NCS-TCP lab accreditation, or nursery certificates.
 */
export const CERTIFICATIONS: CertificationBadge[] = [
  {
    id: 'cert-1',
    title: 'Lab-Indexed Stock',
    // TODO: Add exact certification/testing body code
    subtitle: 'Virus-screened cultures',
    codePlaceholder: 'TODO: Cert #01',
    iconName: 'microscope',
  },
  {
    id: 'cert-2',
    title: 'Registered Nursery',
    // TODO: Add horticulture department registration number
    subtitle: 'Hosur hardened batches',
    codePlaceholder: 'TODO: Reg #02',
    iconName: 'shield',
  },
  {
    id: 'cert-3',
    title: '98%+ Survival QA',
    // TODO: Verify exact batch survival audit figure
    subtitle: 'Strong root-ball grade',
    codePlaceholder: 'TODO: Batch QA',
    iconName: 'sprout',
  },
]
