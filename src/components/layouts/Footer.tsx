// import { changeLanguage } from 'i18next'

import Contributors from '@components/ui/Contributors'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const CURRENT_YEAR = new Date().getFullYear()
  return (
    <div className="text-align-center" style={{ padding: '4rem 0 1rem 0' }}>
      {t('developped_with')} {t('developped_by')} <Contributors />{' '}
      {CURRENT_YEAR}, {t('all_rights_reserved')}
    </div>
  )
}
