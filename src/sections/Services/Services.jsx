import { siteData } from '../../data/siteData'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Reveal from '../../components/Reveal/Reveal'

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading {...siteData.servicesIntro} />
        <div className="service-grid">
          {siteData.services.map((service, index) => (
            <Reveal key={service.id} className={`service-slot span-${service.span}`} delay={index * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
