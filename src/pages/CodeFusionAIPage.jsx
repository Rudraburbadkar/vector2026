import EventDetail from '../components/EventDetail'
import { getEventById } from '../data/eventsData'

const event = getEventById('code-fusion-ai')

export default function CodeFusionAIPage() {
  return <EventDetail event={event} />
}
