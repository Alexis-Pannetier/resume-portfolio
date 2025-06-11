import AwesomeSwitchLang from '../ui/switch/AwesomeSwitchLang'

export default function Header() {
  const headerStyle = {
    backgroundColor: 'var(--dark)',
    marginTop: '0.5rem',
    width: '100%',
    borderRadius: '10rem',
  }
  return (
    <div className="container" style={headerStyle}>
      <div style={{ padding: '0.5rem' }}>
        <AwesomeSwitchLang />
      </div>
    </div>
  )
}
