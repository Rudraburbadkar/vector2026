import Hero from '../components/Hero'
import EventsSection from '../components/EventsSection'
import RegistrationMotivation from '../components/RegistrationMotivation'
import Countdown from '../components/Countdown'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Countdown />
      <EventsSection />
      <RegistrationMotivation />
    </>
  )
}
