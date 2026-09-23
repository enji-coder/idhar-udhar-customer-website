import LegalDocument from '../../components/LegalLayout/LegalDocument'
import { siteData } from '../../data/siteData'

export default function PrivacyPolicy() {
  return <LegalDocument doc={siteData.legal.privacy} />
}
