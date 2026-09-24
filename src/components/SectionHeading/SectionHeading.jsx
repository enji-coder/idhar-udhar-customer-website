export default function SectionHeading({ eyebrow, title, text, light = false, id, center = true }) {
  return (
    <header className={`section-heading${light ? ' is-light' : ''}${center ? ' is-center' : ''}`}>
      {eyebrow && <p className="pill">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {text && <p className="lede">{text}</p>}
    </header>
  )
}
