import { siteData } from '../../data/siteData'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import NetworkVisual from '../../components/illustrations/NetworkVisual'

export default function Technology() {
  const { technology } = siteData
  return (
    <section className="section tech" id="technology">
      <div className="container">
        <SectionHeading eyebrow={technology.eyebrow} title={technology.title} text={technology.text} light />
        <NetworkVisual nodes={technology.nodes} />
      </div>
    </section>
  )
}
