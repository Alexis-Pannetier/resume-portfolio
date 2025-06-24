import CircularCarouselLanguageAndTools from '../ui/circularCarousel/CircularCarouselLanguageAndTools'
import Contact from '../Contact'
import Cursor from '@components/ui/Cursor'
import { Hero } from '@components/Hero'
import Page from '@components/layouts/Page'
import Skills from '@components/Skills'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()
  const name = 'Alexis Pannetier'
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
        <CircularCarouselLanguageAndTools />
        <Contact />
      </Page>
    </>
  )
}

export default MainPage
