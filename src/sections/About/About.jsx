import { siteData } from '../../data/siteData'

export default function About() {
  const { about, company } = siteData
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <header className="section-heading">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.title}</h2>
        </header>
        <div className="about-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <aside className="company-plate">
            <p>{company.brandName}</p>
            <strong>A product/business of {company.legalName}</strong>
            <span>{company.city}</span>
          </aside>
        </div>
      </div>
    </section>
  )
}
