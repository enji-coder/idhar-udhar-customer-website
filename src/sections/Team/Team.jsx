import { siteData } from '../../data/siteData'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import TeamCard from '../../components/TeamCard/TeamCard'

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <SectionHeading {...siteData.teamIntro} />
        <div className="team-grid">
          {siteData.team.map((member) => (
            <TeamCard key={member.designation} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
