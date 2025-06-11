import AwesomeButton from './base/AwesomeButton'
import linkedinImg from '@assets/images/linkedin-logo.png'

const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL

export default function LinkedinButton() {
  return (
    <AwesomeButton href={LINKEDIN_URL}>
      <img src={linkedinImg}></img>
    </AwesomeButton>
  )
}
