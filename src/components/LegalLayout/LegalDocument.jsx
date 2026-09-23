import { siteData } from '../../data/siteData'
import PageHero from '../PageHero/PageHero'
import Seo from '../Seo/Seo'

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function LegalDocument({ doc }) {
  const { company } = siteData
  return (
    <>
      <Seo title={`${doc.title} | ${company.brandName}`} description={doc.lede} path={doc.path} />
      <PageHero title={doc.title} lede={doc.lede} />
      <article className="legal">
        <div className="container legal-wrap">
          <p className="legal-meta">Last updated {doc.updated}</p>
          <nav className="legal-toc" aria-label="On this page">
            {doc.sections.map((section) => (
              <a key={section.heading} href={`#${slug(section.heading)}`}>
                {section.heading}
              </a>
            ))}
          </nav>
          {doc.notice && <p className="legal-notice">{doc.notice}</p>}
          {(company.gstin || company.cin || company.address || company.grievanceOfficer) && (
            <dl className="legal-facts">
              {company.address && (
                <>
                  <dt>Registered address</dt>
                  <dd>{company.address}</dd>
                </>
              )}
              {company.gstin && (
                <>
                  <dt>GSTIN</dt>
                  <dd>{company.gstin}</dd>
                </>
              )}
              {company.cin && (
                <>
                  <dt>CIN</dt>
                  <dd>{company.cin}</dd>
                </>
              )}
              {company.grievanceOfficer && (
                <>
                  <dt>Grievance officer</dt>
                  <dd>{company.grievanceOfficer}</dd>
                </>
              )}
            </dl>
          )}
          {doc.sections.map((section) => (
            <section key={section.heading} id={slug(section.heading)}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  )
}
