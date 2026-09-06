import { useEffect, useRef } from 'react'

// Small set of coding / AI / logic glyphs that drift up through the hero,
// standing in for the "building things" side of VECTOR.
const GLYPHS = ['</>', '{ }', '01', '10', 'AI', '=>', '#!', '[ ]', 'if()', '&&', '01', '{;}']
const COLORS = ['#ff3c58', '#ffce6b', '#a98bff', '#e9e4d6']

export default function HeroBackdrop() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    const particles = []

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function seed() {
      particles.length = 0
      const count = width < 640 ? 14 : width < 1100 ? 20 : 30
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          size: 11 + Math.random() * 11,
          speed: 0.12 + Math.random() * 0.3,
          drift: (Math.random() - 0.5) * 0.22,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 0.1 + Math.random() * 0.24,
          twinkle: Math.random() * Math.PI * 2
        })
      }
    }

    resize()
    seed()

    let frameId
    function frame(t) {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.y -= p.speed
        p.x += p.drift
        if (p.y < -24) {
          p.y = height + 24
          p.x = Math.random() * width
        }
        if (p.x < -24) p.x = width + 24
        if (p.x > width + 24) p.x = -24

        const flicker = 0.6 + Math.sin(t * 0.0015 + p.twinkle) * 0.4
        ctx.font = `${p.size}px "JetBrains Mono", monospace`
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(p.alpha * flicker, 0)
        ctx.fillText(p.glyph, p.x, p.y)
      })
      ctx.globalAlpha = 1
      frameId = requestAnimationFrame(frame)
    }

    if (reduceMotion) {
      frame(0)
    } else {
      frameId = requestAnimationFrame(frame)
    }

    const onResize = () => {
      resize()
      seed()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="hero-backdrop" aria-hidden="true">
      <span className="hb-shard hb-shard-1" />
      <span className="hb-shard hb-shard-2" />
      <span className="hb-shard hb-shard-3" />
      <span className="hb-shard hb-shard-4" />
      <span className="hb-halftone" />
      <span className="hb-scanline" />
      <canvas ref={canvasRef} className="hb-glyphs" />
    </div>
  )
}
