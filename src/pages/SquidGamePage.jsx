import EventDetail from '../components/EventDetail'
import { getEventById } from '../data/eventsData'

const event = getEventById('squid-game')

export default function SquidGamePage() {
  return <EventDetail event={event} />
}
