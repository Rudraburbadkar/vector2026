import Reveal from './Reveal'
import EventCard from './EventCard'
import { events } from '../data/eventsData'

export default function EventsSection() {
  return (
    <section className="section" id="events">
      <div className="section-inner">
        <p className="eyebrow">// Event Nodes</p>
        <h2 className="section-heading">Explore All Events</h2>
        <p className="section-lede">Three challenges. Three ways to prove what you can do.</p>
      </div>
      <Reveal className="section-inner events-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Reveal>
    </section>
  )
}
