import {
  getExperiencesByTags,
  getTotalDurationExperiences,
  getTotalProjetExperiences,
} from '@services/experiencesService.ts'
import { useEffect, useState } from 'react'

import StatisticNumber from './base/StatisticNumber'
import { isSmall } from '@/src/services/screenSize'
import { useTranslation } from 'react-i18next'

export default function StatisticsNumbers() {
  const { t } = useTranslation()

  const years_experiences: number = getTotalDurationExperiences().years ?? 0
  const client_experiences: number = getExperiencesByTags().length
  const projets_experiences: number = getTotalProjetExperiences()
  const statistics = [
    { id: 1, value: years_experiences, label: t('years_experiences') },
    { id: 2, value: client_experiences, label: t('clients') },
    { id: 3, value: projets_experiences, label: t('projects') },
  ]

  const [isSmallScreen, setIsSmallScreen] = useState(isSmall())

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(isSmall())
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  let StatisticsNumbersStyle: React.CSSProperties = {
    margin: '10rem auto',
    flexDirection: isSmallScreen ? 'row' : 'column',
    gap: '2rem',
  }

  return (
    <div
      className="container flex flex-wrap justify-content-space-around align-items-center"
      style={StatisticsNumbersStyle}
    >
      {statistics.map((stat) => (
        <div
          key={stat.id}
          style={{
            flex: '1 1 100px',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <StatisticNumber value={stat.value} label={stat.label} />
        </div>
      ))}
    </div>
  )
}
