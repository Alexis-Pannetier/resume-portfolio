import SchoolIcon from '@mui/icons-material/School'
import StarIcon from '@mui/icons-material/Star'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import WorkIcon from '@mui/icons-material/Work'

enum experienceType {
  PRO = 'pro',
  SCHOOL = 'school',
  STAR = 'star',
}

export type VerticalTimeLineElementProps = {
  state: {
    date?: string
    title?: string
    society?: string
    description?: string
    startDate?: string
    endDate?: string
    tags?: string[]
    type?: experienceType
  }
}

export default function VerticalTimeLineElement({
  state,
}: VerticalTimeLineElementProps) {
  const icon = () => {
    switch (state.type) {
      case experienceType.PRO:
        return <WorkIcon />
      case experienceType.SCHOOL:
        return <SchoolIcon />
      case experienceType.STAR:
      default:
        return <StarIcon />
    }
  }

  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'var(--dark)', color: 'var(--white)' }}
      contentArrowStyle={{ borderRight: `7px solid var(--primary)` }}
      date={state.date}
      iconStyle={{ background: 'var(--secondary)', color: 'var(--primary)' }}
      icon={icon()}
    >
      <h3 className="vertical-timeline-element-title primary">{state.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{state.society}</h4>
      <p>{state.description}</p>
    </VerticalTimelineElement>
  )
}
