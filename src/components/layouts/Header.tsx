import { LANGUAGES } from '@services/i18n/client'
import { changeLanguage } from 'i18next'

export default function Header() {
  const headerStyle = {
    backgroundColor: 'var(--dark)',
    padding: '1rem',
  }
  return (
    <div style={headerStyle}>
      <button onClick={() => changeLanguage(LANGUAGES.FR)}>fr</button>
      <button onClick={() => changeLanguage(LANGUAGES.EN)}>en</button>
    </div>
  )
}
