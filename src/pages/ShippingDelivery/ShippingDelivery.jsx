import LegalDocument from '../../components/LegalLayout/LegalDocument'
import { siteData } from '../../data/siteData'

export default function ShippingDelivery() {
  return <LegalDocument doc={siteData.legal.delivery} />
}
