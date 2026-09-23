import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon'

export default function AppButton({
  children,
  to,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  showArrow = true,
}) {
  const className = `btn btn-${variant}${disabled ? ' is-disabled' : ''}`
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span className="btn-arrow" aria-hidden="true">
          <Icon name="ArrowOutward" fontSize="small" />
        </span>
      )}
    </>
  )

  if (href && !disabled) {
    const external = href.startsWith('http')
    return (
      <a className={className} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {content}
      </a>
    )
  }

  if (to && !disabled) {
    return (
      <Link className={className} to={to} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
