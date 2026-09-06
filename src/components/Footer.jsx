import { Link } from 'react-router-dom'
import { events, CONTACT_EMAIL } from '../data/eventsData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>VECTOR 2026</h4>
          <p>Every thread leads somewhere.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#events">Events</a></li>
            <li><a href="/#register">Register</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Events</h4>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <Link to={event.path}>{event.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          <p>A.C. Patil College of Engineering</p>
          <p>Kharghar, Navi Mumbai</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 VECTOR. All rights reserved.</p>
      </div>
    </footer>
  )
}
