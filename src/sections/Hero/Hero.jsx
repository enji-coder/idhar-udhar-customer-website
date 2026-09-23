import { motion, useReducedMotion } from 'framer-motion'
import { siteData } from '../../data/siteData'
import { assets } from '../../data/assetData'
import AppButton from '../../components/Button/AppButton'
import HeroScene from '../../components/illustrations/HeroScene'
import Icon from '../../components/Icon/Icon'

const PANEL_ICONS = ['Inventory2Outlined', 'LocalShippingOutlined']

export default function Hero() {
  const reduce = useReducedMotion()
  const { hero, bookCta, services, trust } = siteData
  const lines = hero.display?.length ? hero.display : [hero.title]
  const featured = services[0]
  const dockPoints = trust.slice(0, 3)

  const fade = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...fade(0.05)}>
            {hero.eyebrow}
          </motion.p>
          <motion.h1 {...fade(0.14)}>
            {lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </motion.h1>
          <motion.p className="hero-text" {...fade(0.28)}>
            {hero.text}
          </motion.p>
          <motion.div className="hero-actions" {...fade(0.4)}>
            <AppButton to={bookCta.to}>{hero.primaryCta}</AppButton>
            <AppButton to="/#services" variant="secondary">
              {hero.secondaryCta}
            </AppButton>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: reduce ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroScene />
          <motion.aside
            className="status-panel"
            aria-label="Illustrated delivery status"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="status-head">
              <p>
                <i />
                Delivery
              </p>
              <strong>{hero.cards[2]?.title || 'On the way'}</strong>
            </div>
            <div className="status-track" aria-hidden="true">
              <span />
            </div>
            {hero.cards.slice(0, 2).map((card, index) => (
              <article key={card.title} className="status-card">
                <span className="icon-badge" aria-hidden="true">
                  <Icon name={PANEL_ICONS[index]} />
                </span>
                <div>
                  <small>{index === 0 ? 'Pickup' : 'Vehicle'}</small>
                  <strong>{card.title}</strong>
                  <span>{card.text}</span>
                </div>
              </article>
            ))}
            <p className="status-done">
              <Icon name="FactCheckOutlined" fontSize="small" />
              {hero.cards[3]?.title || 'Delivered'}. {hero.cards[3]?.text}
            </p>
          </motion.aside>
        </motion.div>
      </div>

      <div className="container">
        <motion.div className="hero-dock" {...fade(0.55)}>
          <div className="dock-service">
            <div className="dock-visual" aria-hidden="true">
              <img src={assets.services['local-parcel']} alt="" />
            </div>
            <div>
              <h2>{featured.title}</h2>
              <p>{featured.text}</p>
            </div>
          </div>
          <ul className="dock-points">
            {dockPoints.map((item) => (
              <li key={item.id}>
                <Icon name={item.icon} fontSize="small" />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <AppButton to={bookCta.to}>{hero.primaryCta}</AppButton>
        </motion.div>
      </div>
    </section>
  )
}
