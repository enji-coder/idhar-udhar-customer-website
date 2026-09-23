import { siteData } from '../../data/siteData'
import Icon from '../../components/Icon/Icon'
import Reveal from '../../components/Reveal/Reveal'

export default function Trust() {
  return (
    <section className="trust" aria-label="What you can expect">
      <div className="container">
        <p className="trust-kicker">Focused on {siteData.company.city}</p>
        <h2 className="sr-only">What you can expect</h2>
        <div className="trust-panel">
          {siteData.trust.map((item, index) => (
            <Reveal key={item.id} className="trust-item" delay={index * 0.06}>
              <span className="icon-badge" aria-hidden="true">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
