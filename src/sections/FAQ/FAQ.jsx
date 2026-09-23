import { siteData } from '../../data/siteData'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import FaqList from '../../components/FAQ/FaqList'

export default function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq-grid">
        <SectionHeading {...siteData.faqIntro} />
        <FaqList items={siteData.faqs} />
      </div>
    </section>
  )
}
