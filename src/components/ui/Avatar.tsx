import DotAvailable from './available/DotAvailable'
import TextAvailable from './available/TextAvailable'
import avatar from '@assets/images/alexis.jpg'

export default function Avatar() {
  const size = 250
  const avatarStyle = {
    borderRadius: '50%',
    border: '1px solid',
    width: size,
    height: size,
  }
  const available = import.meta.env.VITE_I_AM_AVAILABLE === 'true'
  return (
    <div
      className="flex flex-column justify-content-center align-items-center"
      style={{ gap: '6rem' }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={avatar}
          className="primary-hover"
          alt="Photo de profil : Alexis Pannetier"
          fetchPriority="high"
          style={avatarStyle}
        />
        <DotAvailable active={available} size={size} count={2} />
      </div>
      {available && (
        <div className="flex justify-content-center align-items-center">
          <TextAvailable active={available} />
        </div>
      )}
    </div>
  )
}
