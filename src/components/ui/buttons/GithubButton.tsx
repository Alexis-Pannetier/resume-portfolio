import AwesomeButton from './base/AwesomeButton'
import GithubImg from '@assets/images/brand/github.png'
import { trackButtonClick } from '@/src/services/google/analytics'

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL

export default function GithubButton() {
  const handleClick = () => {
    trackButtonClick('Github Button')
  }
  return (
    <AwesomeButton href={GITHUB_URL} target="_blank" onClick={handleClick}>
      <img src={GithubImg} alt="Github logo" aria-label="Github logo" />
    </AwesomeButton>
  )
}
