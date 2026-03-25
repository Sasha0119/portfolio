import { useEffect, useMemo, useState } from 'react'
import { cx, getReducedMotion } from '../utils'

function useScrollSpy(sectionIds, offsetPx = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? 'home')

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (els.length === 0) return

    const handler = () => {
      const y = window.scrollY + offsetPx
      let current = els[0].id
      for (const el of els) {
        if (el.offsetTop <= y) current = el.id
      }
      setActiveId(current)
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [sectionIds, offsetPx])

  return activeId
}

export function Navbar({ navItems, brand, ctas }) {
  const sectionIds = useMemo(() => navItems.map((n) => n.id), [navItems])
  const activeId = useScrollSpy(sectionIds)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      const target = e.target
      if (!(target instanceof HTMLElement)) return
      if (target.closest('[data-nav-link]')) setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [open])

  const scrollToId = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const reduced = getReducedMotion()
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="nav-shell">
      <div className="nav">
        <a className="brand" href="#home" onClick={scrollToId('home')} data-nav-link>
          <span className="brand-mark" aria-hidden="true">
            {brand.mark}
          </span>
          <span className="brand-text">
            <span className="brand-name">{brand.name}</span>
            <span className="brand-role">{brand.role}</span>
          </span>
        </a>

        <nav className={cx('nav-links', open && 'is-open')} aria-label="Asosiy navigatsiya">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={scrollToId(n.id)}
              className={cx('nav-link', activeId === n.id && 'is-active')}
              data-nav-link
              aria-current={activeId === n.id ? 'page' : undefined}
            >
              {n.label}
            </a>
          ))}

          <div className="nav-ctas">
            {ctas.map((c) => (
              <a
                key={c.href}
                className={cx('btn', c.variant === 'primary' ? 'btn-primary' : 'btn-ghost')}
                href={c.href}
                onClick={c.onClick ? c.onClick(scrollToId) : undefined}
                data-nav-link
              >
                {c.label}
              </a>
            ))}
          </div>
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className={cx('hamburger', open && 'is-open')} />
        </button>
      </div>
    </header>
  )
}