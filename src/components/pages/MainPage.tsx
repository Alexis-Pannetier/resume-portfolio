import CircularCarouselLanguageAndTools from '../ui/circularCarousel/CircularCarouselLanguageAndTools'
import Cursor from '@components/ui/Cursor'
import { Hero } from '@components/Hero'
import Page from '@components/layouts/Page'
import StatisticsNumbers from '../ui/statistics/StatisticsNumbers'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()
  const name = import.meta.env.VITE_FULLNAME
  const dataSequence = [
    `${t('i_am')} ${name}`,
    `${t('i_am')} ${t('job')}`,
    `${t('i_am')} ${t('job_2')}`,
  ]
  const firstName = name.split(' ')[0]

  return (
    <>
      <Page title={firstName}>
        <Cursor />
        <Hero dataSequence={dataSequence} />
        {/* <Skills /> */}
        <StatisticsNumbers />
        <CircularCarouselLanguageAndTools />
      </Page>
    </>
  )
}

export default MainPage
