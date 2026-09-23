import LegalDocument from '../../components/LegalLayout/LegalDocument'
import { siteData } from '../../data/siteData'

export default function CancellationRefund() {
  return <LegalDocument doc={siteData.legal.cancellation} />
}
