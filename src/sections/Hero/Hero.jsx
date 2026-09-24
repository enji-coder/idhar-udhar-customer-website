import { motion, useReducedMotion } from 'framer-motion'
import { siteData } from '../../data/siteData'
import { assets } from '../../data/assetData'
import AppButton from '../../components/Button/AppButton'

export default function Hero() {
  const reduce = useReducedMotion()
  const { hero, bookCta, howItWorks } = siteData
  const lines = hero.display?.length ? hero.display : [hero.title]
  const accentIndex = lines.length - 1

  const fade = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="hero" id="home">
      <div className="mesh" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
        <span className="spark spark-1" />
        <span className="spark spark-2" />
        <span className="spark spark-3" />
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.p className="pill" {...fade(0.04)}>
            <span className="ping" aria-hidden="true">
              <i />
            </span>
            <span className="pill-mark" aria-hidden="true" />
            {hero.eyebrow}
          </motion.p>
          <motion.h1 {...fade(0.12)}>
            {lines.map((line, index) =>
              index === accentIndex ? (
                <span key={line} className="accent">
                  {line}
                </span>
              ) : (
                <span key={line}>{line}</span>
              ),
            )}
          </motion.h1>
          <motion.p className="hero-text" {...fade(0.22)}>
            {hero.text}
          </motion.p>
          <motion.div className="hero-actions" {...fade(0.32)}>
            <AppButton to={bookCta.to}>{hero.primaryCta}</AppButton>
            <AppButton to="/#services" variant="secondary">
              {hero.secondaryCta}
            </AppButton>
          </motion.div>
          <motion.ul className="chips" {...fade(0.42)}>
            <li>
              <strong>5</strong>
              <span>Vehicles</span>
            </li>
            <li>
              <strong>4</strong>
              <span>Steps</span>
            </li>
            <li>
              <strong>City</strong>
              <span>Ahmedabad</span>
            </li>
          </motion.ul>
        </div>

        <motion.div
          className="orbit"
          aria-hidden="true"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: reduce ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`ring ring-a${reduce ? ' is-still' : ''}`} />
          <div className={`ring ring-b${reduce ? ' is-still' : ''}`} />
          <img className="orbit-hero" src={assets.heroCenter} alt="" />
          {assets.orbit.map((item, index) => (
            <figure key={item.label} className={`orb orb-${index + 1}`}>
              <img src={item.src} alt="" />
            </figure>
          ))}
        </motion.div>

        <motion.aside className="flow-card" id="how-it-works" aria-label={howItWorks.title} {...fade(0.28)}>
          <p className="flow-kicker">{howItWorks.eyebrow}</p>
          <div className="flow-head">
            <h2>{howItWorks.title}</h2>
            <p>
              <strong>4</strong>
              <span>Steps</span>
            </p>
          </div>
          <ol>
            {howItWorks.steps.map((step) => (
              <li key={step.number}>
                <span>{Number(step.number)}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.aside>
      </div>
    </section>
  )
}
