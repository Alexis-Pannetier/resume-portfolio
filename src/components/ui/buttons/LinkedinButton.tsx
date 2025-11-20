import AwesomeButton from './base/AwesomeButton'
import linkedinImg from '@assets/images/brand/linkedin.png'
import { trackButtonClick } from '@/src/services/google/analytics'

const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL

export default function LinkedinButton() {
  const handleClick = () => {
    trackButtonClick('Linkedin Button')
  }
  return (
    <AwesomeButton href={LINKEDIN_URL} target="_blank" onClick={handleClick}>
      <img src={linkedinImg} alt="LinkedIn logo" aria-label="LinkedIn logo" />
    </AwesomeButton>
  )
}
