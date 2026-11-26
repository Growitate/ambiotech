import React from 'react'
import { Leaf } from 'lucide-react'
import type { PartnerLogo } from '../../types'
import { useMotionSafe } from '../../hooks/useMotionSafe'

interface MarqueeProps {
  items: PartnerLogo[]
  label?: string
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  label = 'Trusted nursery & grower network',
}) => {
  const { prefersReduced } = useMotionSafe()

  const LogoPill = ({ item }: { item: PartnerLogo }) => (
    <div className="inline-flex shrink-0 items-center gap-2.5 rounded-pill bg-white px-5 py-2.5 shadow-forest-sm">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sage-card text-leaf">
        <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold text-forest whitespace-nowrap">
        {item.name}
      </span>
    </div>
  )

  return (
    <div aria-label={label} className="w-full">
      {prefersReduced ? (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {items.map((item) => (
            <LogoPill key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="relative overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max gap-4 animate-marquee">
            <div className="flex shrink-0 items-center gap-4">
              {items.map((item) => (
                <LogoPill key={`a-${item.id}`} item={item} />
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-4" aria-hidden="true">
              {items.map((item) => (
                <LogoPill key={`b-${item.id}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
