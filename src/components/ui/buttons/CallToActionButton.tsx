import AwesomeButton from './base/AwesomeButton'
import { t } from 'i18next'

export default function CallToActionButton() {
  return (
    <AwesomeButton href="#circular-carousel-languages-and-tools">
      {t('see_more')}
    </AwesomeButton>
  )
}
