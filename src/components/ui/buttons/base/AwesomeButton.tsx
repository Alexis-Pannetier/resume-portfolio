import { useState } from 'react'

interface AwesomeButtonProps {
  className?: string
  children?: React.ReactNode
  href?: string
}

enum pressType {
  LEFT = 'btn-press--left',
  MIDDLE = 'btn-press--middle',
  RIGHT = 'btn-press--right',
  EMPTY = '',
}

export default function AwesomeButton({ children, href }: AwesomeButtonProps) {
  const [state, setState] = useState<pressType>(pressType.EMPTY)

  const handleHoverButton = (side: pressType) => {
    setState(side)
  }

  const button = (
    <>
      <button className={`btn ${state}`}>
        <div
          style={{
            padding: '1rem 2rem',
            position: 'relative',
            borderRadius: 'var(--button-border-radius)',
          }}
        >
          {children}
        </div>
        <div
          className="absolute flex h-100 w-100"
          style={{
            borderRadius: 'var(--button-border-radius)',
            overflow: 'hidden',
          }}
          onMouseLeave={() => handleHoverButton(pressType.EMPTY)}
        >
          <div
            style={{
              flexGrow: 1,
            }}
            onMouseEnter={() => handleHoverButton(pressType.LEFT)}
          ></div>
          <div
            style={{
              flexGrow: 1,
            }}
            onMouseEnter={() => handleHoverButton(pressType.MIDDLE)}
          ></div>
          <div
            style={{
              flexGrow: 1,
            }}
            onMouseEnter={() => handleHoverButton(pressType.RIGHT)}
          ></div>
        </div>
      </button>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        style={{
          borderRadius: 'var(--button-border-radius)',
          textDecoration: 'none',
        }}
      >
        {button}
      </a>
    )
  }

  return <>{button}</>
}
