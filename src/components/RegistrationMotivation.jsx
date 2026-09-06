import Reveal from './Reveal'
import { REGISTER_FORM_URL } from '../data/eventsData'

export default function RegistrationMotivation() {
  return (
    <section className="section register" id="register">
      <Reveal as="div" className="section-inner">
        <h2 className="section-heading register-heading">DON'T JUST ATTEND. TAKE THE CHALLENGE.</h2>
        <p className="section-lede">
          Step beyond the classroom, test your skills, compete with your peers, and turn your ideas into
          something worth showing.
        </p>
        <div className="register-form-wrap">
          <a className="btn btn-primary" href={REGISTER_FORM_URL} target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </div>
        <p className="register-note">Replace the link above with your live Google Form before launch.</p>
      </Reveal>
    </section>
  )
}
