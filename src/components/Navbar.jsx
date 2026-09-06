import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/squid-game', label: 'Squid Game' },
  { to: '/treasure-hunt', label: 'Technical Treasure Hunt' },
  { to: '/code-fusion-ai', label: 'Code Fusion AI' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const goToRegister = () => {
    if (location.pathname === '/') {
      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#register')
    }
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <NavLink to="/" className="nav-logo">
          <span>V</span>ECTOR 2026
        </NavLink>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className={`nav-menu${open ? ' open' : ''}`} id="navMenu">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <button className="nav-link cta-link" onClick={goToRegister}>
              Register
            </button>
          </li>
        </ul>
      </nav>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
    </>
  )
}
