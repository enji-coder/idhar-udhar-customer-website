import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import { siteData } from '../../data/siteData'
import Logo from '../Logo/Logo'
import AppButton from '../Button/AppButton'
import Icon from '../Icon/Icon'

const SECTION_IDS = ['home', 'services', 'how-it-works', 'vehicles', 'about', 'faq']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (location.pathname !== '/') return undefined
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!nodes.length) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-80px 0px -65% 0px', threshold: [0.05, 0.2, 0.5] },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [location.pathname])

  const contactActive = location.pathname === '/contact'

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Primary">
          {siteData.navigation.map((item) => {
            const id = item.to.split('#')[1]
            const current = location.pathname === '/' && active === id
            return (
              <Link key={item.label} to={item.to} aria-current={current ? 'true' : undefined}>
                {item.label}
              </Link>
            )
          })}
          <Link className="nav-contact" to={siteData.contactLink.to} aria-current={contactActive ? 'page' : undefined}>
            {siteData.contactLink.label}
          </Link>
        </nav>
        <div className="nav-actions">
          <AppButton to={siteData.bookCta.to}>{siteData.bookCta.label}</AppButton>
        </div>
        <button
          className="nav-burger"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(true)}
        >
          <Icon name="Menu" />
        </button>
      </div>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ id: 'mobile-nav', className: 'nav-drawer' }}
      >
        <div className="drawer-top">
          <p>Menu</p>
          <button type="button" className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <Icon name="Close" />
          </button>
        </div>
        <nav className="drawer-links" aria-label="Mobile">
          {siteData.navigation.map((item, index) => (
            <Link key={item.label} to={item.to} style={{ animationDelay: `${index * 40}ms` }}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link to={siteData.contactLink.to}>
            <span>08</span>
            {siteData.contactLink.label}
          </Link>
        </nav>
        <div className="drawer-foot">
          <AppButton to={siteData.bookCta.to} onClick={() => setOpen(false)}>
            {siteData.bookCta.label}
          </AppButton>
          <p>{siteData.company.city}</p>
        </div>
      </Drawer>
    </header>
  )
}
