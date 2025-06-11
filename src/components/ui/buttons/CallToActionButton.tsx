import AwesomeButton from './base/AwesomeButton'
import { t } from 'i18next'

export default function CallToActionButton() {
  return <AwesomeButton href="#about">{t('see_more')}</AwesomeButton>
}
