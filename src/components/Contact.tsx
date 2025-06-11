import GithubButton from './ui/buttons/GithubButton'
import LinkedinButton from './ui/buttons/LinkedinButton'

export default function Contact() {
  return (
    <>
      <div className="flex justify-content-center" style={{ gap: '2em' }}>
        <GithubButton />
        <LinkedinButton />
      </div>
    </>
  )
}
