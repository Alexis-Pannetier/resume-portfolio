import 'react-vertical-timeline-component/style.min.css'

import VerticalTimeLineElement from './VerticalTimeLineElement'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import experiences from '@assets/constante/experiences.json'

export default function VerticalTimeLine() {
  const StarIcon = () => <></>
  return (
    <>
      <VerticalTimeline>
        {experiences.map((element: any, index: number) => {
          return <VerticalTimeLineElement key={index} state={element} />
        })}
      </VerticalTimeline>
    </>
  )
}
