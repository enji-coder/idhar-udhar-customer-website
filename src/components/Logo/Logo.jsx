import { Link } from 'react-router-dom'
import { siteData } from '../../data/siteData'

export default function Logo() {
  const { brandName, logoIncludesWordmark } = siteData.company
  return (
    <Link to="/" className="brand" aria-label={`${brandName} home`}>
      <img src="/assets/logo/logo.svg" alt={logoIncludesWordmark ? brandName : ''} width="42" height="42" />
      {!logoIncludesWordmark && <span className="brand-name">{brandName}</span>}
    </Link>
  )
}
