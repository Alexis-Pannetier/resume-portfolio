import { isLarge, isMedium, isSmall } from '@/src/services/screenSize'
import { useEffect, useState } from 'react'

import CircularCarousel from './base/CircularCarousel'
import angularLogo from '@assets/images/brand/angular.svg'
import ansibleLogo from '@assets/images/brand/ansible.svg'
import cssLogo from '@assets/images/brand/css.svg'
import dockerLogo from '@assets/images/brand/docker.svg'
import figmaLogo from '@assets/images/brand/figma.svg'
import gitLogo from '@assets/images/brand/git.svg'
import htmlLogo from '@assets/images/brand/html.svg'
import jsLogo from '@assets/images/brand/javascript.svg'
import kubernetesLogo from '@assets/images/brand/kubernetes.svg'
import laravelLogo from '@assets/images/brand/laravel.svg'
import mysqlLogo from '@assets/images/brand/mysql.svg'
import phpLogo from '@assets/images/brand/php.svg'
import postgresqlLogo from '@assets/images/brand/postgresql.svg'
import postmanLogo from '@assets/images/brand/postman.svg'
import reactLogo from '@assets/images/brand/react.svg'
import shopifyLogo from '@assets/images/brand/shopify.svg'
import symfonyLogo from '@assets/images/brand/symfony.svg'
import tsLogo from '@assets/images/brand/typescript.webp'
import { useTranslation } from 'react-i18next'
import vscodeLogo from '@assets/images/brand/vscode.svg'
import wordpressLogo from '@assets/images/brand/wordpress.svg'

interface CircularCarouselLanguageAndToolsProps {}

interface brandLogo {
  src: string
  name: string
  size?: number
}

function setCircularCaroussel() {
  if (isLarge()) {
    return { logoSize: 80, size: 340 }
  } else if (isMedium()) {
    return { logoSize: 70, size: 280 }
  } else if (isSmall()) {
    return { logoSize: 60, size: 220 }
  } else {
    return { logoSize: 50, size: 160 }
  }
}

export default function CircularCarouselLanguageAndTools({}: CircularCarouselLanguageAndToolsProps) {
  const { t } = useTranslation()
  const languageAndToolLogos: brandLogo[] = [
    { name: 'HTML', src: htmlLogo },
    { name: 'CSS', src: cssLogo },
    { name: 'Javascript', src: jsLogo },
    { name: 'Typescript', src: tsLogo },
    { name: 'PHP', src: phpLogo },
    { name: 'Laravel', src: laravelLogo },
    { name: 'Symfony', src: symfonyLogo },
    { name: 'React', src: reactLogo },
    { name: 'Angular', src: angularLogo },
    { name: 'Docker', src: dockerLogo },
    { name: 'Kubernetes', src: kubernetesLogo },
    { name: 'Ansible', src: ansibleLogo },
    { name: 'Mysql', src: mysqlLogo },
    { name: 'Postgresql', src: postgresqlLogo },
    { name: 'Git', src: gitLogo },
    { name: 'VSCode', src: vscodeLogo },
    { name: 'Postman', src: postmanLogo },
    { name: 'Figma', src: figmaLogo },
    { name: 'Wordpress', src: wordpressLogo },
    { name: 'Shopify', src: shopifyLogo },
  ]

  const [config, setConfig] = useState(setCircularCaroussel())

  useEffect(() => {
    const handleResize = () => {
      setConfig(setCircularCaroussel())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      id="circular-carousel-languages-and-tools"
      style={{ margin: '10rem 0' }}
    >
      <CircularCarousel
        logos={languageAndToolLogos}
        {...config}
        title={t('languages_and_tools')}
      />
    </div>
  )
}
