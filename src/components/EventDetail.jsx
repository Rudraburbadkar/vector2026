import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { REGISTER_FORM_URL } from '../data/eventsData'

export default function EventDetail({ event }) {
  return (
    <div style={{ '--accent': event.accentVar, '--accent-glow': event.accentGlowVar }}>
      <section className="event-banner">
        <div className="event-banner-inner">
          <p className="event-banner-eyebrow">NODE {event.index} · {event.tag}</p>
          <h1 className="event-banner-title">{event.title}</h1>
          <p className="event-banner-tagline">{event.tagline}</p>
        </div>
      </section>

      <main className="event-container">
        <Reveal className="event-meta-bar">
          <div className="event-meta-item">
            <span className="m-label">DATE</span>
            <span className="m-value">{event.date}</span>
          </div>
          <div className="event-meta-item">
            <span className="m-label">TIME</span>
            <span className="m-value">{event.time}</span>
          </div>
          <div className="event-meta-item">
            <span className="m-label">VENUE</span>
            <span className="m-value">{event.venue}</span>
          </div>
          <div className="event-meta-item">
            <span className="m-label">ENTRY FEE</span>
            <span className="m-value">{event.entryFee}</span>
          </div>
        </Reveal>

        <Reveal as="section" className="event-section">
          <p className="eyebrow">// Event Introduction</p>
          <h2 className="section-heading">{event.introHeading}</h2>
          <p className="event-description">{event.description}</p>
        </Reveal>

        <Reveal as="section" className="event-section">
          <p className="eyebrow">// Teaser</p>
          <div className="teaser-box">
            <span className="t-label">SEALED INTEL</span>
            <p>"{event.teaser}"</p>
          </div>
        </Reveal>

        <Reveal as="section" className="event-section">
          <p className="eyebrow">// Format</p>
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>
            Team / Individual
          </h2>
          <p className="event-description">
            Team event. {event.teamSize} members per team, open to all departments.
          </p>
          <div className="entry-fee-box">
            <div className="fee-item">
              <span className="num">{event.teamSize}</span>
              <span className="label">TEAM SIZE</span>
            </div>
            <div className="fee-item">
              <span className="num">{event.feePerTeam}</span>
              <span className="label">PER TEAM</span>
            </div>
            <div className="fee-item">
              <span className="num">{event.topPrize}</span>
              <span className="label">TOP PRIZE</span>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="event-section">
          <p className="eyebrow">// Public Rules</p>
          <ul className="rules-list">
            {event.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="event-section">
          <p className="eyebrow">// {event.stagesHeading}</p>
          <div className="rounds-grid">
            {event.stages.map((stage) => (
              <div className="round-card" key={stage.title}>
                <h3>{stage.title}</h3>
                {stage.meta.map(([label, value]) => (
                  <p key={label}>
                    <strong>{label}:</strong> {value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="event-section">
          <p className="eyebrow">// Eligibility</p>
          <ul className="eligibility-list">
            {event.eligibility.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="event-cta">
          <h2>{event.ctaHeading}</h2>
          <a className="btn btn-primary" href={REGISTER_FORM_URL} target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </Reveal>

        <Reveal className="back-to-home">
          <Link to="/" className="btn btn-outline">
            ← Back to Home
          </Link>
        </Reveal>
      </main>
    </div>
  )
}
