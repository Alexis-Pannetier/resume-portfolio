import AwesomeSwitchLang from '../ui/switch/AwesomeSwitchLang'

interface HeaderProps {
  height?: string
  title?: string
}

export default function Header({
  title = 'Unamed',
  height = '80px',
}: HeaderProps) {
  const headerStyle: React.CSSProperties = {
    backgroundColor: 'var(--shadow-color)',
    height: height,
    position: 'fixed',
    overflow: 'hidden',
    zIndex: 10,
  }

  const headerNavStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    boxSizing: 'border-box',
    top: 0,
  }

  console.log('This is the way !')

  return (
    <div className="w-100" style={headerStyle}>
      <nav
        className="container flex justify-space-between align-center"
        style={headerNavStyle}
      >
        <a
          href="/"
          className="title-5 primary"
          style={{ textDecoration: 'none' }}
        >
          {title}
        </a>
        <AwesomeSwitchLang />
      </nav>
    </div>
  )
}
