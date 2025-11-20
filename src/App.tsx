import { initGA, trackPage } from './services/google/analytics.tsx'

import { I18nextProvider } from 'react-i18next'
import MainPage from './components/pages/MainPage.tsx'
import { ParallaxProvider } from 'react-scroll-parallax'
import i18n from '@services/i18n/client.tsx'
import { useEffect } from 'react'

function App() {
  console.log('This is the way !')

  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    trackPage(location.pathname + location.search)
  }, [location])

  return (
    <>
      <ParallaxProvider>
        <I18nextProvider i18n={i18n} defaultNS={'translation'}>
          <MainPage />
        </I18nextProvider>
      </ParallaxProvider>
    </>
  )
}

export default App
