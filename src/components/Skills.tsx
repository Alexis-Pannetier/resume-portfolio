import VerticalTimeLine from './ui/VerticalTimeLine'

export default function Skills() {
  const heroStyle = {
    height: '100%',
    width: '100%',
    margin: 'auto',
  }
  return (
    <>
      <div style={heroStyle}>
        <VerticalTimeLine />
      </div>
    </>
  )
}
