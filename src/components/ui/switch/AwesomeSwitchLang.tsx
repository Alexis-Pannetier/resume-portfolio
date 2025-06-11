import i18n, { LANGUAGES } from '@/src/services/i18n/client'

import AwesomeSwitch from './base/AwesomeSwitch'
import { changeLanguage } from 'i18next'

export default function AwesomeSwitchLang() {
  const currentLang = i18n.resolvedLanguage || LANGUAGES.EN

  const switchLanguage = () => {
    switch (currentLang) {
      case LANGUAGES.EN:
        changeLanguage(LANGUAGES.FR)
        break
      case LANGUAGES.FR:
      default:
        changeLanguage(LANGUAGES.EN)
        break
    }
  }

  return (
    <div>
      <AwesomeSwitch
        label={currentLang}
        onClick={switchLanguage}
      ></AwesomeSwitch>
    </div>
  )
}
