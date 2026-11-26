import React, { useState } from 'react'
import type { ProductImageAsset } from '../../types'

interface PlantImageProps {
  image: ProductImageAsset
  className?: string
  imgClassName?: string
  priority?: boolean
  sizes?: string
  mode?: 'cutout' | 'photo'
}

export const PlantImage: React.FC<PlantImageProps> = ({
  image,
  className = '',
  imgClassName = '',
  priority = false,
  sizes = '(max-width: 768px) 80vw, 320px',
  mode = 'cutout',
}) => {
  const [loaded, setLoaded] = useState(false)

  if (mode === 'photo') {
    return (
      <div
        className={`relative overflow-hidden select-none ${className}`}
        style={{
          aspectRatio: `${image.width} / ${image.height}`,
          backgroundColor: image.blurColor,
        }}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          } ${imgClassName}`}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden select-none ${className}`}
      style={{
        aspectRatio: `${image.width} / ${image.height}`,
      }}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-[14%] rounded-full blur-2xl transition-opacity duration-500 ${
          loaded ? 'opacity-20' : 'opacity-65 animate-pulse'
        }`}
        style={{ backgroundColor: image.blurColor }}
      />
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setLoaded(true)}
        className={`relative z-10 h-full w-full object-contain drop-shadow-[0_14px_20px_rgba(18,48,47,0.14)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
        } ${imgClassName}`}
      />
    </div>
  )
}
