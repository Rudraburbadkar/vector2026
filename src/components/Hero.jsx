import HeroBackdrop from './HeroBackdrop'

export default function Hero() {
  return (
    <header className="hero">
      <HeroBackdrop />

      <div className="hero-content">
        <p className="hero-eyebrow">A.C. Patil College of Engineering</p>
        <h1 className="hero-title">
          VECTOR
          <br />
          <span className="line2">2026</span>
        </h1>
        <p className="hero-tagline">The web awakens. Every thread leads somewhere.</p>
        <div className="hero-buttons">
          <a href="#events" className="btn btn-primary">
            Explore Events
          </a>
          <a href="#register" className="btn btn-outline">
            Register Now
          </a>
        </div>
      </div>

      <div className="scroll-cue">
        <span className="line" />
        Scroll to descend
      </div>
    </header>
  )
}
