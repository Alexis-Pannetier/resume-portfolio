import {
  getExperiencesByTags,
  getTotalDurationExperiences,
  getTotalProjetExperiences,
} from '@services/experiencesService.ts'

import StatisticNumber from './base/StatisticNumber'
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

  const StatisticsNumbersStyle = {
    margin: '10rem auto',
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
            flex: '1',
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
