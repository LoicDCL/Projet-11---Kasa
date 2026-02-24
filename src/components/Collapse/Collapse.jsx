import { useEffect, useRef, useState } from 'react'
import './Collapse.scss'

export default function Collapse({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [maxHeight, setMaxHeight] = useState(defaultOpen ? 'none' : '0px')
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    if (isOpen) {
      const h = el.scrollHeight
      setMaxHeight(`${h}px`)

      const t = setTimeout(() => setMaxHeight('none'), 220)
      return () => clearTimeout(t)
    } else {
      if (maxHeight === 'none') {
        const h = el.scrollHeight
        setMaxHeight(`${h}px`)
        requestAnimationFrame(() => setMaxHeight('0px'))
      } else {
        setMaxHeight('0px')
      }
    }
  }, [isOpen])

  const toggle = () => setIsOpen((v) => !v)

  return (
    <div className={`collapse ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="collapse__header"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>
        <span className="collapse__chevron" aria-hidden="true">╲╱</span>
      </button>

      <div
        className="collapse__panel"
        style={{ maxHeight }}
        aria-hidden={!isOpen}
      >
        <div className="collapse__content" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  )
}
