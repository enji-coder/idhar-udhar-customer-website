import { assets } from '../../data/assetData'

export default function ServiceCard({ service }) {
  const src = assets.services[service.id]
  return (
    <article className="service-card">
      <span className="card-bar" aria-hidden="true" />
      {src && (
        <div className="service-visual">
          <img className="service-mark" src={src} alt="" />
        </div>
      )}
      <div>
        <h3>{service.title}</h3>
        <p>{service.text}</p>
      </div>
    </article>
  )
}
