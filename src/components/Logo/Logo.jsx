import { Link } from 'react-router-dom'
import { siteData } from '../../data/siteData'
import { assets } from '../../data/assetData'

export default function Logo() {
  const { brandName, logoIncludesWordmark } = siteData.company
  return (
    <Link to="/" className="brand" aria-label={`${brandName} home`}>
      <img src={assets.logo} alt={logoIncludesWordmark ? brandName : ''} />
      {!logoIncludesWordmark && <span className="brand-name">{brandName}</span>}
    </Link>
  )
}
