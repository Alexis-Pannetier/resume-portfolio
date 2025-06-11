import avatar from '@assets/images/alexis.jpg'

export default function Avatar() {
  const size = 250
  const avatarStyle = {
    borderRadius: '50%',
    width: size,
    height: size,
  }
  return (
    <img
      src={avatar}
      className="primary-hover"
      alt="Photo de profil : Alexis Pannetier"
      style={avatarStyle}
    />
  )
}
