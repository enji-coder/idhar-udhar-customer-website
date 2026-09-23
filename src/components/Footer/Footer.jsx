import { Link } from 'react-router-dom'
import { siteData } from '../../data/siteData'
import Logo from '../Logo/Logo'
import { SocialGlyph } from '../Icon/Icon'

const SOCIALS = [
  { key: 'instagram', name: 'Instagram', label: 'Instagram' },
  { key: 'facebook', name: 'Facebook', label: 'Facebook' },
  { key: 'linkedin', name: 'LinkedIn', label: 'LinkedIn' },
  { key: 'x', name: 'x', label: 'X' },
]

export default function Footer() {
  const { company, footer, socialLinks } = siteData
  const activeSocials = SOCIALS.filter((item) => socialLinks[item.key])

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{footer.blurb}</p>
          {activeSocials.length > 0 && (
            <div className="socials">
              {activeSocials.map((item) => (
                <a key={item.key} href={socialLinks[item.key]} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <SocialGlyph name={item.name} />
                </a>
              ))}
            </div>
          )}
        </div>
        {footer.columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container footer-base">
        <p>
          © {company.year} {company.brandName}
        </p>
        <p>A product/business of {company.legalName}</p>
      </div>
    </footer>
  )
}
