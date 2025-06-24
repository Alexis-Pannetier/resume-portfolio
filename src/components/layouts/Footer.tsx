import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  // const CURRENT_YEAR = new Date().getFullYear()
  const footerStyle = {
    height: '100%',
    width: '100%',
    margin: 'auto',
  }
  return (
    <div
      className="flex justify-content-center align-center column container text-align-center"
      style={footerStyle}
    >
      <div className="line-behind fadein"></div>
      <div
        className="title-4 margin-auto"
        style={{ margin: '10rem auto', gap: '2em' }}
      >
        {t('thanks_for_scrolling')}
      </div>
      <div className="flex justify-content-center align-items-center row margin-auto">
        {/* {t('developped_with')}
        {CURRENT_YEAR},{t('all_rights_reserved')} */}
      </div>
    </div>
  )
}
