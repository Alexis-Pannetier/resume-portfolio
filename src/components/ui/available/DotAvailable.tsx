import React from 'react'
import { t } from 'i18next'

type DotAvailableProps = {
  active?: boolean
  count?: number
  duration?: number
  size?: number
}

export default function DotAvailable({
  active = false,
  count = 1,
  duration = 2,
  size = 100,
}: DotAvailableProps) {
  const dotStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: size,
    width: size,
    borderRadius: '50%',
    animation: 'borderWave ease-in-out 2s infinite',
  }

  return (
    <div title={active ? t('available') : t('unavailable')}>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          style={{
            ...dotStyle,
            animationName: active ? 'dotOn' : 'dotOff',
            animationDuration: `${duration}s`,
            animationDelay: `${(duration / count) * idx}s`,
          }}
        />
      ))}
    </div>
  )
}
