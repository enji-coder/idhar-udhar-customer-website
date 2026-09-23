import { Link } from 'react-router-dom'

export default function PageHero({ title, lede }) {
  return (
    <header className="page-hero">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <h1>{title}</h1>
        {lede && <p>{lede}</p>}
      </div>
    </header>
  )
}
