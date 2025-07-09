import { Parallax } from 'react-scroll-parallax'
import { parallaxLogo } from '@/src/types/parallaxLogo'

export type ParallaxGroupLanguageAndToolsProps = {
  angleOffset?: number
  logos: parallaxLogo[]
  logoRange?: number
  logoSize?: number
  size?: number
}

export default function ParallaxGroupLanguageAndTools({
  angleOffset = 0,
  logos,
  logoRange = 0.38,
  logoSize = 80,
  size = 250,
}: ParallaxGroupLanguageAndToolsProps) {
  const ParallaxContainerStyle: React.CSSProperties = {
    // backgroundColor: 'green',
    position: 'relative',
    display: 'flex',
    height: `${size}px`,
    width: `${size}px`,
  }

  return (
    <div style={ParallaxContainerStyle}>
      {Array.isArray(logos) &&
        logos.map((logo, idx) => {
          const total = logos.length
          const angle = (2 * Math.PI * idx + angleOffset) / total
          const radius = size * logoRange // px, adjust as needed
          const centerX = size / 2 // half of minWidth
          const centerY = size / 2 // half of minHeight
          const x = centerX + radius * Math.cos(angle) - logoSize / 2 // half img width
          const y = centerY + radius * Math.sin(angle) - logoSize / 2 // half img height
          return (
            <Parallax {...logo?.parallax}>
              <img
                key={idx}
                src={logo.src}
                alt={`logo ${logo.name}`}
                title={logo.name}
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  scale: logo.size,
                  height: `${logoSize}px`,
                  width: `${logoSize}px`,
                  transition: 'all 0.3s',
                }}
              />
            </Parallax>
          )
        })}
    </div>
  )
}
