import { motion, useReducedMotion } from 'framer-motion'
import { siteData } from '../../data/siteData'
import { assets } from '../../data/assetData'
import SectionHeading from '../../components/SectionHeading/SectionHeading'

export default function HowItWorks() {
  const reduce = useReducedMotion()
  const { howItWorks } = siteData
  return (
    <section className="section steps-section" id="how-it-works">
      <div className="container">
        <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} text={howItWorks.text} />
        <div className="steps-wrap">
          <motion.span
            className="steps-line"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 1.2, ease: 'easeInOut' }}
          />
          <ol className="steps">
            {howItWorks.steps.map((step, index) => (
              <li key={step.number}>
                {assets.howItWorks[index] && (
                  <img className="step-art" src={assets.howItWorks[index]} alt="" />
                )}
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
