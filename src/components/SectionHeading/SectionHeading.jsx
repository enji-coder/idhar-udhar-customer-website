export default function SectionHeading({ eyebrow, title, text, light = false, id }) {
  return (
    <header className={`section-heading${light ? ' is-light' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {text && <p className="lede">{text}</p>}
    </header>
  )
}
