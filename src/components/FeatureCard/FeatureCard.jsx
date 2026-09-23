import { assets } from '../../data/assetData'

export default function FeatureCard({ feature }) {
  const src = assets.features[feature.id]
  return (
    <article className={`feature-card is-${feature.variant}`}>
      {src && <img className="feature-art" src={src} alt="" />}
      <div>
        <h3>{feature.title}</h3>
        <p>{feature.text}</p>
      </div>
      {feature.variant === 'story' && (
        <ol className="micro-steps">
          <li>Pickup</li>
          <li>Vehicle</li>
          <li>Delivery</li>
        </ol>
      )}
    </article>
  )
}
