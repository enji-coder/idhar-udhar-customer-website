import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { siteData } from '../../data/siteData'
import { assets } from '../../data/assetData'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import AppButton from '../../components/Button/AppButton'
import Icon from '../../components/Icon/Icon'

const EMPTY = { name: '', phone: '', email: '', message: '', website: '' }

function validPhone(value) {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 13
}

export default function Contact({ embedded = false }) {
  const { company, contact, socialLinks } = siteData
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (form.website) {
      setStatus('')
      return
    }
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!validPhone(form.phone)) next.phone = 'Enter a phone number with at least 10 digits.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email or leave it blank.'
    if (form.message.trim().length < 10) next.message = 'Please add a short message.'
    setErrors(next)
    if (Object.keys(next).length) {
      setStatus('')
      return
    }
    if (!company.email) {
      setStatus(contact.formNote)
      return
    }
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || '—'}\n\n${form.message}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('IDHAR UDHAR enquiry')}&body=${encodeURIComponent(body)}`
    setStatus(`Your email app should open a message to ${company.email}. If it does not, write to that address directly.`)
    setForm(EMPTY)
  }

  const email = company.email?.trim()
  const phone = company.phone?.trim()
  const address = company.address?.trim()
  const hours = company.supportHours?.trim()

  return (
    <section className="section contact" id={embedded ? undefined : 'contact'}>
      <div className="container contact-grid">
        <div>
          {!embedded && <SectionHeading eyebrow={contact.eyebrow} title={contact.title} text={contact.text} />}
          {embedded && <h2>Send a message</h2>}
          {embedded && <p className="lede">{contact.text}</p>}
          <dl className="contact-facts">
            <div>
              <dt>Brand</dt>
              <dd>{company.brandName}</dd>
            </div>
            <div>
              <dt>Company</dt>
              <dd>{company.legalName}</dd>
            </div>
            <div>
              <dt>City</dt>
              <dd>{company.city}</dd>
            </div>
            {email && (
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${email}`}>{email}</a>
                </dd>
              </div>
            )}
            {phone && (
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${phone}`}>{phone}</a>
                </dd>
              </div>
            )}
            {address && (
              <div>
                <dt>Address</dt>
                <dd>
                  {address.split('\n').map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            )}
            {hours && (
              <div>
                <dt>Support hours</dt>
                <dd>{hours}</dd>
              </div>
            )}
          </dl>
          {(email || phone) && (
            <div className="contact-actions">
              {email && (
                <AppButton href={`mailto:${email}`} variant="secondary" showArrow={false}>
                  <Icon name="MailOutline" fontSize="small" /> Email
                </AppButton>
              )}
              {phone && (
                <AppButton href={`tel:${phone}`} variant="secondary" showArrow={false}>
                  <Icon name="PhoneOutlined" fontSize="small" /> Phone
                </AppButton>
              )}
            </div>
          )}
          <SocialRow links={socialLinks} />
        </div>
        <div>
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <TextField label="Full name" name="name" value={form.name} onChange={onChange} required fullWidth autoComplete="name" error={Boolean(errors.name)} helperText={errors.name || ' '} />
            <TextField label="Phone" name="phone" value={form.phone} onChange={onChange} required fullWidth autoComplete="tel" error={Boolean(errors.phone)} helperText={errors.phone || ' '} />
            <TextField label="Email" name="email" value={form.email} onChange={onChange} fullWidth autoComplete="email" error={Boolean(errors.email)} helperText={errors.email || ' '} />
            <TextField label="Message" name="message" value={form.message} onChange={onChange} required fullWidth multiline minRows={4} error={Boolean(errors.message)} helperText={errors.message || ' '} />
            <label className="hp">
              Website
              <input name="website" value={form.website} onChange={onChange} tabIndex={-1} autoComplete="off" />
            </label>
            {!email && <p className="form-banner">{contact.formNote}</p>}
            <AppButton type="submit" showArrow={false}>
              Send message
            </AppButton>
            <p className="form-status" role="status">
              {status}
            </p>
          </form>
          <div className="map-card">
            {company.mapEmbedUrl ? (
              <iframe title="Map showing the business location" src={company.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <div className="map-placeholder">
                <img className="map-art" src={assets.contactPin} alt="" />
                <p>
                  <Icon name="PlaceOutlined" fontSize="small" /> Registered address
                </p>
                <span>
                  {(address || company.city).split('\n').map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialRow({ links }) {
  const items = [
    ['instagram', 'Instagram'],
    ['facebook', 'Facebook'],
    ['linkedin', 'LinkedIn'],
    ['x', 'X'],
  ].filter(([key]) => links[key])
  if (!items.length) return null
  return (
    <ul className="contact-socials">
      {items.map(([key, label]) => (
        <li key={key}>
          <a href={links[key]} target="_blank" rel="noreferrer">
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
