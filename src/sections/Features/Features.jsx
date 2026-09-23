import { siteData } from '../../data/siteData'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import FeatureCard from '../../components/FeatureCard/FeatureCard'

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <SectionHeading {...siteData.featuresIntro} />
        <div className="feature-grid">
          {siteData.features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
