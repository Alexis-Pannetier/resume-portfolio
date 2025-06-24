import experiencesData from '@assets/constante/experiences.json'

export type Duration = {
  months: number
  years?: number
}

export enum ExperienceTags {
  CLIENT = 'client',
  PRO = 'pro',
}

export interface ExperienceInterface {
  id: number
  title: string
  society?: string
  place?: string
  projets: number
  startDate?: string
  endDate?: string
  duration?: Duration
  description?: string
  tags?: ExperienceTags[]
}

const experiences: ExperienceInterface[] =
  experiencesData as ExperienceInterface[]

export const getExperiences = (): ExperienceInterface[] => {
  return experiences
}

export const getExperiencesByTags = (
  tags: ExperienceTags[] | null = null
): ExperienceInterface[] => {
  return experiences.filter(
    (exp) =>
      (tags === null || exp.tags?.some((tag) => tags.includes(tag))) &&
      exp.duration?.months
  )
}

export const getTotalMonths = (
  tags: ExperienceTags[] | null = null
): number => {
  return getExperiencesByTags(tags).reduce(
    (sum, exp) => sum + (exp.duration?.months ?? 0),
    0
  )
}

export const getTotalDurationExperiences = (
  tags: ExperienceTags[] | null = null
): Duration => {
  const months = getTotalMonths(tags)
  const years = months ? parseFloat((months / 12).toFixed(1)) : undefined
  return { months, years }
}

export const getTotalProjetExperiences = (
  tags: ExperienceTags[] | null = null
): number => {
  return getExperiencesByTags(tags).reduce(
    (sum, exp) => sum + (exp.projets ?? 0),
    0
  )
}
