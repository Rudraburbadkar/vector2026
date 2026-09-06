import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <p className="eyebrow">// 404</p>
      <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 8vw, 5rem)' }}>
        LOST IN
        <br />
        <span className="line2">THE WEB</span>
      </h1>
      <p className="section-lede">This thread doesn't lead anywhere. Let's get you back to the center.</p>
      <Link to="/" className="btn btn-primary">
        ← Back to Home
      </Link>
    </div>
  )
}
