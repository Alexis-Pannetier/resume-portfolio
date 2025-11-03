import React from 'react'
import { useTranslation } from 'react-i18next'

type TextAvailableProps = {
  active?: boolean
  size?: number
}

export default function TextAvailable({ active = false }: TextAvailableProps) {
  const { t } = useTranslation()

  const textStyle: React.CSSProperties = {
    color: active ? 'var(--available)' : 'var(--unavailable)',
    maxWidth: '250px',
  }

  return (
    <div className="title-5 text-align-center" style={textStyle}>
      {active ? t('available') : t('unavailable')}
    </div>
  )
}
