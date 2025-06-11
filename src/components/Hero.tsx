import Avatar from './ui/Avatar'
import CallToActionButton from './ui/buttons/CallToActionButton'
import { TypeAnimation } from 'react-type-animation'
import { useTranslation } from 'react-i18next'

type HeroProps = {
  dataSequence: string[]
  delay?: number
}

export const Hero = ({ delay = 1500, dataSequence }: HeroProps) => {
  const { i18n, t } = useTranslation()
  const heroStyle = {
    maxWidth: 900,
    minHeight: 900,
    height: '100px',
    width: '100%',
    margin: 'auto',
  }

  const sequence = dataSequence.flatMap((text: string) => [text, delay])

  return (
    <>
      <div
        style={heroStyle}
        className="flex justify-content-center align-center column"
      >
        <div className="flex justify-content-center">{/* <Avatar /> */}</div>
        <span className="primary title-1 flex justify-content-start fadein">
          {t('hello')},
        </span>
        <h1 className="column title w-100 m-auto fadein">
          <TypeAnimation
            key={i18n.language}
            sequence={sequence}
            wrapper="span"
            speed={60}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
          />
        </h1>
        <div className="flex justify-content-center">
          <CallToActionButton />
        </div>
      </div>
    </>
  )
}
