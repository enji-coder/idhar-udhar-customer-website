import { useState } from 'react'
import Icon from '../Icon/Icon'

export default function TeamCard({ member }) {
  const [failed, setFailed] = useState(false)
  const initials = member.designation
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')

  return (
    <article className="team-card">
      <div className="team-photo">
        {failed ? (
          <span className="team-fallback" aria-hidden="true">
            {initials}
          </span>
        ) : (
          <img
            src={member.image}
            alt=""
            width="280"
            height="280"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <h3>{member.name}</h3>
      <p className="team-role">{member.designation}</p>
      {member.description && <p>{member.description}</p>}
      {member.linkedin && (
        <a className="team-link" href={member.linkedin} target="_blank" rel="noreferrer">
          <Icon name="LinkedIn" fontSize="small" /> LinkedIn
        </a>
      )}
    </article>
  )
}
