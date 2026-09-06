import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children in a div that fades/slides into view the first time it
 * crosses into the viewport. Mirrors the original site's `.reveal` /
 * `.reveal.in` scroll-triggered animation, implemented as a reusable hook
 * instead of a global IntersectionObserver over the DOM.
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsIn(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal${isIn ? ' in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
