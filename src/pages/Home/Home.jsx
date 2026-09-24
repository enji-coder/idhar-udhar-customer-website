import Seo from '../../components/Seo/Seo'
import Hero from '../../sections/Hero/Hero'
import Services from '../../sections/Services/Services'
import Vehicles from '../../sections/Vehicles/Vehicles'
import Features from '../../sections/Features/Features'
import ProductExperience from '../../sections/ProductExperience/ProductExperience'
import Technology from '../../sections/Technology/Technology'
import WhyIdharUdhar from '../../sections/WhyIdharUdhar/WhyIdharUdhar'
import About from '../../sections/About/About'
import Journey from '../../sections/Journey/Journey'
import Team from '../../sections/Team/Team'
import FAQ from '../../sections/FAQ/FAQ'
import Contact from '../../sections/Contact/Contact'
import AppCTA from '../../sections/AppCTA/AppCTA'
import { siteData } from '../../data/siteData'

export default function Home() {
  return (
    <>
      <Seo title={siteData.seo.title} description={siteData.seo.description} path="/" />
      <Hero />
      <Services />
      <Vehicles />
      <Features />
      <ProductExperience />
      <Technology />
      <WhyIdharUdhar />
      <About />
      <Journey />
      <Team />
      <FAQ />
      <Contact />
      <AppCTA />
    </>
  )
}
