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
    minHeight: 800,
    gap: '2rem',
    height: 100,
    width: '100%',
    margin: 'auto',
  }

  const sequence = dataSequence.flatMap((text: string) => [text, delay])
  const longestText = dataSequence.reduce(
    (a, b) => (a.length > b.length ? a : b),
    ''
  )
  return (
    <>
      <div
        style={heroStyle}
        className="flex justify-content-center align-center column"
      >
        <div className="flex justify-content-center fadein">
          <Avatar />
        </div>
        <div>
          <span className="primary title-1 flex justify-content-start fadein">
            {t('hello')},
          </span>
          <h1 className="title w-100 m-auto fadein relative">
            <TypeAnimation
              key={i18n.language}
              sequence={sequence}
              wrapper="span"
              speed={60}
              style={{ position: 'absolute', fontSize: '2em' }}
              repeat={Infinity}
            />
            {/* This span is used to reserve the size of the longest text on responsive */}
            <span
              className="title-1"
              style={{
                opacity: 0,
                pointerEvents: 'none',
                wordBreak: 'break-all',
                whiteSpace: 'normal',
              }}
            >
              {longestText}
            </span>
          </h1>
        </div>
        <div className="flex justify-content-center">
          <CallToActionButton />
        </div>
      </div>
    </>
  )
}
