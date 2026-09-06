import EventDetail from '../components/EventDetail'
import { getEventById } from '../data/eventsData'

const event = getEventById('treasure-hunt')

export default function TreasureHuntPage() {
  return <EventDetail event={event} />
}
