import AwesomeButton from './base/AwesomeButton'
import GithubImg from '@assets/images/brand/github.png'

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL

export default function GithubButton() {
  return (
    <AwesomeButton href={GITHUB_URL} target="_blank">
      <img src={GithubImg}></img>
    </AwesomeButton>
  )
}
