import { siteData } from '../../data/siteData'

export default function WhyIdharUdhar() {
  const { why } = siteData
  return (
    <section className="section why" id="why">
      <div className="container why-grid">
        <header className="section-heading">
          <p className="eyebrow">{why.eyebrow}</p>
          <h2>{why.title}</h2>
          <p className="lede">{why.text}</p>
        </header>
        <ol className="principles">
          {why.principles.map((item) => (
            <li key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
