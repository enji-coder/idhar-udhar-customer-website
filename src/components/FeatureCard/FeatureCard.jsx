import { assets } from '../../data/assetData'

export default function FeatureCard({ feature }) {
  const src = assets.features[feature.id]
  return (
    <article className="feature-card">
      <span className="card-bar" aria-hidden="true" />
      {src && (
        <div className="feature-visual">
          <img className="feature-art" src={src} alt="" />
        </div>
      )}
      <div>
        <h3>{feature.title}</h3>
        <p>{feature.text}</p>
      </div>
    </article>
  )
}
