import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Ambient 3D spider-web backdrop, fixed behind all page content.
 * Ported from the original js/web-scene.js into a self-contained React
 * component: builds several layered "orb webs" receding into the
 * distance, dollies the camera through them on scroll, and lets the
 * whole web tilt gently toward the cursor.
 */
export default function WebSceneBackdrop() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0b0a0e, 0.028)

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 400)
    camera.position.set(0, 0, 40)

    const webGroup = new THREE.Group()
    scene.add(webGroup)

    const threadMat = new THREE.LineBasicMaterial({
      color: 0xe9e4d6,
      transparent: true,
      opacity: 0.16
    })

    function buildOrbWeb(radius, spokes, rings, z, jitter) {
      const group = new THREE.Group()

      // spokes
      const spokeGeo = new THREE.BufferGeometry()
      const spokeVerts = []
      for (let s = 0; s < spokes; s++) {
        const a = (s / spokes) * Math.PI * 2
        const dir = new THREE.Vector3(Math.cos(a), Math.sin(a), 0)
        spokeVerts.push(0, 0, 0)
        const jr = radius + (Math.random() - 0.5) * jitter
        spokeVerts.push(dir.x * jr, dir.y * jr, 0)
      }
      spokeGeo.setAttribute('position', new THREE.Float32BufferAttribute(spokeVerts, 3))
      group.add(new THREE.LineSegments(spokeGeo, threadMat))

      // spiral rings connecting spokes
      for (let r = 1; r <= rings; r++) {
        const ringRadius = (radius / rings) * r
        const ringVerts = []
        for (let s2 = 0; s2 < spokes; s2++) {
          const a1 = (s2 / spokes) * Math.PI * 2
          const a2 = ((s2 + 1) / spokes) * Math.PI * 2
          const rr1 = ringRadius + (Math.random() - 0.5) * jitter * 0.5
          const rr2 = ringRadius + (Math.random() - 0.5) * jitter * 0.5
          ringVerts.push(Math.cos(a1) * rr1, Math.sin(a1) * rr1, (Math.random() - 0.5) * jitter * 0.3)
          ringVerts.push(Math.cos(a2) * rr2, Math.sin(a2) * rr2, (Math.random() - 0.5) * jitter * 0.3)
        }
        const ringGeo = new THREE.BufferGeometry()
        ringGeo.setAttribute('position', new THREE.Float32BufferAttribute(ringVerts, 3))
        const ringMat = threadMat.clone()
        ringMat.opacity = 0.1 + (r / rings) * 0.1
        group.add(new THREE.LineSegments(ringGeo, ringMat))
      }

      group.position.z = z
      group.userData.sway = Math.random() * Math.PI * 2
      return group
    }

    const webs = []
    const count = window.innerWidth < 760 ? 4 : 6
    for (let i = 0; i < count; i++) {
      const z = -i * 30
      const w = buildOrbWeb(26 + i * 4, 14 + i, 5, z, 3.5)
      w.position.x = (i % 2 === 0 ? -1 : 1) * (6 + i * 2)
      w.position.y = (i % 3 === 0 ? 1 : -1) * (4 + i)
      webGroup.add(w)
      webs.push(w)
    }

    // Event marker nodes — three glowing points for the three events.
    function makeGlowSprite(color) {
      const size = 128
      const cnv = document.createElement('canvas')
      cnv.width = cnv.height = size
      const ctx = cnv.getContext('2d')
      const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
      grad.addColorStop(0, color)
      grad.addColorStop(0.35, color)
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, size, size)
      const tex = new THREE.CanvasTexture(cnv)
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })
      const sprite = new THREE.Sprite(mat)
      sprite.scale.set(6, 6, 1)
      return sprite
    }

    const markerColors = ['rgba(255,60,88,0.9)', 'rgba(255,206,107,0.9)', 'rgba(169,139,255,0.9)']
    const markerPositions = [
      new THREE.Vector3(-10, 4, -20),
      new THREE.Vector3(9, -6, -55),
      new THREE.Vector3(-6, -3, -95)
    ]
    const markers = markerPositions.map((pos, idx) => {
      const sp = makeGlowSprite(markerColors[idx])
      sp.position.copy(pos)
      scene.add(sp)
      return sp
    })

    // Interaction state
    const mouse = { x: 0, y: 0 }
    let targetRotX = 0
    let targetRotY = 0
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    let scrollFrac = 0
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scrollFrac = max > 0 ? window.scrollY / max : 0
    }
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    const totalDepth = (count - 1) * 30
    let frameId

    function animate() {
      frameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      if (!reduceMotion) {
        targetRotX += (mouse.y * 0.12 - targetRotX) * 0.04
        targetRotY += (mouse.x * 0.16 - targetRotY) * 0.04
        webGroup.rotation.x = targetRotX
        webGroup.rotation.y = targetRotY

        webs.forEach((w) => {
          w.rotation.z = Math.sin(t * 0.08 + w.userData.sway) * 0.05
        })

        markers.forEach((m, i) => {
          m.material.rotation = t * 0.2
          m.scale.setScalar(6 + Math.sin(t * 1.4 + i) * 0.5)
        })
      }

      camera.position.z = 40 - scrollFrac * (totalDepth + 30)
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02
      camera.position.y += (-mouse.y * 1.2 - camera.position.y) * 0.02
      camera.lookAt(0, 0, camera.position.z - 20)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      threadMat.dispose()
      webs.forEach((w) => {
        w.children.forEach((line) => {
          line.geometry.dispose()
          line.material.dispose()
        })
      })
      markers.forEach((m) => {
        m.material.map?.dispose()
        m.material.dispose()
      })
    }
  }, [])

  return <canvas id="web-scene" ref={canvasRef} />
}
