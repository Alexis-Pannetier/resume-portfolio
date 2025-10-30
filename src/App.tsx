import { Component } from 'react'
import { I18nextProvider } from 'react-i18next'
import MainPage from './components/pages/MainPage.tsx'
import { ParallaxProvider } from 'react-scroll-parallax'
import i18n from '@services/i18n/client.tsx'

class App extends Component {
  render() {
    console.log('This is the way !')
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
}

export default App
