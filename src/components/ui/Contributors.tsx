import contributorsData from '@/package.json'

type Contributor = {
  name: string
  github: string
}

export default function Contributors() {
  const contributorsList: Contributor[] = contributorsData.contributors || []
  return (
    <>
      {contributorsList.map((contributor: Contributor, index: number) => (
        <span key={index}>
          <a
            href={contributor.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contributor.name}
          </a>
          {index < contributorsList.length - 1 && ', '}
        </span>
      ))}
    </>
  )
}
