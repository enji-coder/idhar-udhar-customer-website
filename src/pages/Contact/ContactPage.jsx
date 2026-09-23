import Seo from '../../components/Seo/Seo'
import PageHero from '../../components/PageHero/PageHero'
import Contact from '../../sections/Contact/Contact'
import { siteData } from '../../data/siteData'

export default function ContactPage() {
  const { company } = siteData
  return (
    <>
      <Seo
        title={`Contact | ${company.brandName}`}
        description="Contact IDHAR UDHAR, a product of Swiftsendinnovation, for local delivery support in Ahmedabad."
        path="/contact"
      />
      <PageHero
        title="Contact"
        lede="Questions about a booking, a business delivery, or this website. IDHAR UDHAR is a product of Swiftsendinnovation."
      />
      <Contact embedded />
    </>
  )
}
