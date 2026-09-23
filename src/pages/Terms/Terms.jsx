import LegalDocument from '../../components/LegalLayout/LegalDocument'
import { siteData } from '../../data/siteData'

export default function Terms() {
  return <LegalDocument doc={siteData.legal.terms} />
}
