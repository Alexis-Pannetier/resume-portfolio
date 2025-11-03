export type ParallaxLanguageAndToolsProps = {}

import { ParallaxProps, useParallax } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'

import ParallaxGroupLanguageAndTools from './ParallaxGroupLanguageAndTools'
import angularLogo from '@assets/images/brand/angular.svg'
import { brandLogo } from '@/src/types/brandLogo'
import cssLogo from '@assets/images/brand/css.svg'
import dockerLogo from '@assets/images/brand/docker.svg'
import figmaLogo from '@assets/images/brand/figma.svg'
import gitLogo from '@assets/images/brand/git.svg'
import htmlLogo from '@assets/images/brand/html.svg'
import { isMedium } from '@/src/services/screenSize'
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
import vscodeLogo from '@assets/images/brand/vscode.svg'
import wordpressLogo from '@assets/images/brand/wordpress.svg'

export default function ParallaxLanguageAndTools({}: ParallaxLanguageAndToolsProps) {
  type parallaxLogo = brandLogo & { parallax?: ParallaxProps }

  const languageLogos: parallaxLogo[] = [
    {
      name: 'HTML',
      src: htmlLogo,
      parallax: { speed: 10, translateX: ['50px', '-300px', 'easeIn'] },
    },
    {
      name: 'CSS',
      src: cssLogo,
      parallax: { speed: 20, translateX: ['50px', '-150px', 'easeIn'] },
    },
    {
      name: 'Javascript',
      src: jsLogo,
      parallax: { speed: 30, translateX: ['0px', '0px', 'easeIn'] },
    },
    {
      name: 'Typescript',
      src: tsLogo,
      parallax: { speed: 20, translateX: ['-50px', '150px', 'easeIn'] },
    },
    {
      name: 'PHP',
      src: phpLogo,
      parallax: { speed: 10, translateX: ['-50px', '300px', 'easeIn'] },
    },
  ]

  const frameworkLogos: parallaxLogo[] = [
    { name: 'Laravel', src: laravelLogo },
    { name: 'Symfony', src: symfonyLogo },
    { name: 'React', src: reactLogo },
    { name: 'Angular', src: angularLogo },
  ]

  const toolLogos: parallaxLogo[] = [
    { name: 'Git', src: gitLogo },
    { name: 'VSCode', src: vscodeLogo },
    { name: 'Postman', src: postmanLogo },
    { name: 'Figma', src: figmaLogo },
  ]

  const databaseLogos: parallaxLogo[] = [
    {
      name: 'Mysql',
      src: mysqlLogo,
      parallax: {
        translateY: ['100px', '100px'],
        translateX: ['200px', '-300px', 'easeOut'],
      },
    },
    {
      name: 'Postgresql',
      src: postgresqlLogo,
      parallax: {
        translateX: ['-200px', '300px', 'easeOut'],
      },
    },
  ]

  const cmsLogos: parallaxLogo[] = [
    {
      name: 'Wordpress',
      src: wordpressLogo,
      parallax: {
        translateY: ['100px', '100px'],
        translateX: ['200px', '-300px', 'easeOut'],
      },
    },
    {
      name: 'Shopify',
      src: shopifyLogo,
      parallax: {
        translateX: ['-200px', '300px', 'easeOut'],
      },
    },
  ]

  const platformLogos: parallaxLogo[] = [
    {
      name: 'Docker',
      src: dockerLogo,
      parallax: {
        translateY: ['100px', '100px'],
        translateX: ['200px', '-300px', 'easeOut'],
      },
    },
    {
      name: 'Kubernetes',
      src: kubernetesLogo,
      parallax: {
        translateX: ['-200px', '300px', 'easeOut'],
      },
    },
  ]

  const ParallaxContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '4rem',
    height: 2000,
    margin: '10rem auto',
  }

  const parallaxWheelStyle: React.CSSProperties = {
    width: '100%',
    gap: '4rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  const parallaxColumnStyle: React.CSSProperties = {
    width: '100%',
    gap: '0rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  }

  const frameworkParallax = useParallax<HTMLDivElement>({
    rotate: [30, -30],
  })
  const toolsParallax = useParallax<HTMLDivElement>({
    rotate: [-30, 30],
  })

  const [isSmall, setIsSmall] = useState(!isMedium())

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(!isMedium())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isSmall) {
    parallaxWheelStyle.flexDirection = 'column'
  }

  return (
    <div className="container" style={ParallaxContainerStyle}>
      <ParallaxGroupLanguageAndTools logos={languageLogos} angleOffset={42} />
      <div style={parallaxWheelStyle}>
        <div ref={frameworkParallax.ref} className="spinner">
          <ParallaxGroupLanguageAndTools logos={frameworkLogos} />
        </div>
        <div ref={toolsParallax.ref} className="spinner">
          <ParallaxGroupLanguageAndTools logos={toolLogos} />
        </div>
      </div>
      <div style={parallaxColumnStyle}>
        <ParallaxGroupLanguageAndTools logos={databaseLogos} />
        <ParallaxGroupLanguageAndTools logos={cmsLogos} />
        <ParallaxGroupLanguageAndTools logos={platformLogos} />
      </div>
    </div>
  )
}
