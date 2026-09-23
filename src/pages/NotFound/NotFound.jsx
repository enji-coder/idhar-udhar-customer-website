import { Link } from 'react-router-dom'
import Seo from '../../components/Seo/Seo'
import PageHero from '../../components/PageHero/PageHero'
import { siteData } from '../../data/siteData'

export default function NotFound() {
  return (
    <>
      <Seo
        title={`Page not found | ${siteData.company.brandName}`}
        description="This page is not part of the IDHAR UDHAR website."
        path="/404"
      />
      <PageHero title="Page not found" lede="That address is not on this website." />
      <div className="container not-found">
        <Link to="/">Back to home</Link>
      </div>
    </>
  )
}
