interface CircularCarouselProps {
  animationTime?: number
  reversDirection?: boolean
  logos: brandLogo[]
  logoRange?: number // between 0.6 and 1.4
  logoSize?: number
  size?: number
  title?: string
}

interface brandLogo {
  src: string
  name: string
  size?: number
}

export default function CircularCarousel({
  animationTime = 60,
  reversDirection = false,
  logos,
  logoRange = 1,
  logoSize = 50,
  size = 160,
}: CircularCarouselProps) {
  const circularCarouselContainerStyle: React.CSSProperties = {
    padding: '14rem 0',
    position: 'relative',
    overflow: 'hidden',
  }
  const circularCarouselStyle = {
    height: size,
    width: size,
    // background: 'var(--primary)',
    borderRadius: `${size / 2}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    animation: `${reversDirection ? 'rotateCounter' : 'rotate'} ${animationTime}s linear infinite`,
  }
  return (
    <div
      className="circular-carousel-container container"
      style={circularCarouselContainerStyle}
    >
      <div
        className="circular-carousel"
        style={{
          ...circularCarouselStyle,
          position: 'relative',
        }}
      >
        {Array.isArray(logos) &&
          logos.map((logo, idx) => {
            const total = logos.length
            const angle = (2 * Math.PI * idx + 42) / total // 42 : answer to life, the universe, and everything
            const radius = size * logoRange // px, adjust as needed
            const centerX = size / 2 // half of minWidth
            const centerY = size / 2 // half of minHeight
            const x = centerX + radius * Math.cos(angle) - logoSize / 2 // half img width
            const y = centerY + radius * Math.sin(angle) - logoSize / 2 // half img height
            return (
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
                  animation: `${reversDirection ? 'rotate' : 'rotateCounter'} ${animationTime}s linear infinite`,
                }}
              />
            )
          })}
      </div>
      {/* <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          height: size,
          width: size,
          transform: 'translate(-50%, -50%)',
        }}
      > */}
      {/* <h2 className="title-3 fadein text-align-center secondary">{title}</h2> */}
      {/* </div> */}
    </div>
  )
}
