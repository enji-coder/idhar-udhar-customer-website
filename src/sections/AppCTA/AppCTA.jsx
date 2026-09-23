import { siteData } from '../../data/siteData'
import AppButton from '../../components/Button/AppButton'

export default function AppCTA() {
  const { appCta, appLinks } = siteData
  return (
    <section className="cta" id="book">
      <div className="container cta-inner">
        <p className="eyebrow">Book</p>
        <h2>{appCta.title}</h2>
        <p>{appCta.text}</p>
        <div className="cta-actions">
          {appLinks.customerApp ? (
            <AppButton href={appLinks.customerApp}>{appCta.customerLabel}</AppButton>
          ) : (
            <AppButton to="/contact">{appCta.customerLabel}</AppButton>
          )}
          {appLinks.partnerApp ? (
            <AppButton href={appLinks.partnerApp} variant="ghost">
              {appCta.partnerLabel}
            </AppButton>
          ) : (
            <AppButton to="/contact" variant="ghost">
              {appCta.partnerLabel}
            </AppButton>
          )}
        </div>
        {!appLinks.customerApp && !appLinks.partnerApp && <p className="cta-note">{appCta.note}</p>}
      </div>
    </section>
  )
}
