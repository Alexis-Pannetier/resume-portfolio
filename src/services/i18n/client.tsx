import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslation from './locales/en/translation.json'
import frTranslation from './locales/fr/translation.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export enum LANGUAGES {
  EN = 'en',
  FR = 'fr',
}

export const fallbackLanguage = LANGUAGES.FR

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: fallbackLanguage,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
