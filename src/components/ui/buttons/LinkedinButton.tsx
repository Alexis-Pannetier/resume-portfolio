import AwesomeButton from './base/AwesomeButton'
import linkedinImg from '@assets/images/brand/linkedin.png'

const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL

export default function LinkedinButton() {
  return (
    <AwesomeButton href={LINKEDIN_URL} target="_blank">
      <img src={linkedinImg} alt="LinkedIn logo" aria-label="LinkedIn logo" />
    </AwesomeButton>
  )
}
