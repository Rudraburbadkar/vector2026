import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import WebSceneBackdrop from './components/WebSceneBackdrop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import SquidGamePage from './pages/SquidGamePage'
import TreasureHuntPage from './pages/TreasureHuntPage'
import CodeFusionAIPage from './pages/CodeFusionAIPage'
import NotFoundPage from './pages/NotFoundPage'

/** Scrolls to the top on route change, or to a hash target (e.g. #register) when present. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target page has rendered.
      const id = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
      return () => clearTimeout(id)
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <WebSceneBackdrop />
      <div className="grain" />
      <div className="vignette" />

      <ScrollManager />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/squid-game" element={<SquidGamePage />} />
        <Route path="/treasure-hunt" element={<TreasureHuntPage />} />
        <Route path="/code-fusion-ai" element={<CodeFusionAIPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  )
}
