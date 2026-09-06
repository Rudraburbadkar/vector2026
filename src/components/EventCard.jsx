import { Link } from 'react-router-dom'
import { REGISTER_FORM_URL } from '../data/eventsData'

const NODE_CLASS = {
  'squid-game': 'n-squid',
  'treasure-hunt': 'n-treasure',
  'code-fusion-ai': 'n-code'
}

export default function EventCard({ event }) {
  return (
    <div className={`event-node ${NODE_CLASS[event.id]}`}>
      <span className="event-index">{event.index}</span>
      <span className="tag">{event.tag}</span>
      <h3>{event.title}</h3>
      <p>{event.shortDescription}</p>
      <dl className="event-quickfacts">
        <div className="qf-row">
          <dt>Entry Fee</dt>
          <dd>{event.entryFee}</dd>
        </div>
        <div className="qf-row">
          <dt>Venue</dt>
          <dd>{event.venue}</dd>
        </div>
        <div className="qf-row">
          <dt>Date</dt>
          <dd>{event.date} · {event.time}</dd>
        </div>
      </dl>
      <div className="node-actions">
        <a className="btn btn-primary btn-small" href={REGISTER_FORM_URL} target="_blank" rel="noopener noreferrer">
          Register Now
        </a>
        <Link className="node-link" to={event.path}>
          Event Details →
        </Link>
      </div>
    </div>
  )
}
