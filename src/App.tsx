import { Component } from 'react'
import { I18nextProvider } from 'react-i18next'
import MainPage from './components/pages/MainPage.tsx'
// import { defineConfig } from 'vite'
import i18n from './services/i18n/client.tsx'
// import dotenv from 'dotenv'
// dotenv.config({ path: `src/environments/.env` })

// dotenv.config({ path: `./src/environments/.env.${process.env.NODE_ENV}` })
// export const config = defineConfig({
//   envDir: './environments/.env',
// })

class App extends Component {
  render() {
    return (
      <>
        <I18nextProvider i18n={i18n} defaultNS={'translation'}>
          <MainPage />
        </I18nextProvider>
      </>
    )
  }
}

export default App
