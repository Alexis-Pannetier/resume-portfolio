import GithubButton from './ui/buttons/GithubButton'
import LinkedinButton from './ui/buttons/LinkedinButton'

export default function Contact() {
  const contactStyle = {
    height: '100%',
    width: '100%',
    margin: 'auto',
  }
  return (
    <>
      <div className="flex align-center column container" style={contactStyle}>
        <div className="line-behind fadein">
          <h2
            className="title-1 text-align-center primary margin-auto"
            style={{ backgroundColor: 'var(--background)' }}
          >
            Contact
          </h2>
        </div>
        <div
          className="flex justify-content-center flex-wrap"
          style={{ margin: '10rem auto', gap: '2em' }}
        >
          <GithubButton />
          <LinkedinButton />
        </div>
      </div>
    </>
  )
}
