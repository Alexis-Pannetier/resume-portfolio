import AwesomeButton from './base/AwesomeButton'
import GithubImg from '@assets/images/github-logo.png'

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL

export default function GithubButton() {
  return (
    <AwesomeButton href={GITHUB_URL}>
      <img src={GithubImg}></img>
    </AwesomeButton>
  )
}
