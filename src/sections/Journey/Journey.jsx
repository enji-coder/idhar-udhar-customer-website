import { siteData } from '../../data/siteData'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import CityMap from '../../components/illustrations/CityMap'
import Reveal from '../../components/Reveal/Reveal'

export default function Journey() {
  const { city, serviceAreas } = siteData
  return (
    <section className="section city" id="ahmedabad" aria-labelledby="city-title">
      <div className="container city-grid">
        <Reveal>
          <SectionHeading id="city-title" eyebrow={city.eyebrow} title={city.title} text={city.text} />
          <ul className="city-notes">
            {city.cards.map((card) => (
              <li key={card.label}>
                <strong>{card.label}</strong>
                <span>{card.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <CityMap />
          <p className="map-note">{city.mapNote}</p>
        </Reveal>
      </div>
      <div className="container city-ahmedabad">
        <Reveal>
          <h2>{city.ahmedabadTitle}</h2>
          <p className="lede">{city.ahmedabadText}</p>
          <ul className="area-list">
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
