import PropTypes from "prop-types"

const ProjectDetail = ({ project }) => {
  if (!project) {
    return (
      <section className="section-card section-stack">
        <h2>Project not found</h2>
        <p>The project page you requested does not exist.</p>
        <a href="#projects">Back to projects</a>
      </section>
    )
  }

  const { title, subtitle, summary, impact, tags, logoUrl, logoAlt, websiteUrl, codeUrl, proprietary, sections } = project

  return (
    <section className="project-detail section-card section-stack">
      <a href="#projects" className="project-detail__back">
        ← Back to Projects
      </a>
      <div className="project-detail__hero">
        <img src={logoUrl} alt={logoAlt} className="project-detail__logo" />
        <div>
          <p className="section-kicker">Project</p>
          <h1>{title}</h1>
          <p className="project-detail__subtitle">{subtitle}</p>
        </div>
      </div>

      <p>{summary}</p>
      <div className="project-detail__impact">
        <strong>Impact:</strong> {impact}
      </div>

      <div className="chip-row">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <section className="project-detail__section">
        <h2>Challenge</h2>
        <p>{sections.challenge}</p>
      </section>

      <section className="project-detail__section">
        <h2>What I Built</h2>
        <p>{sections.build}</p>
      </section>

      <section className="project-detail__section">
        <h2>Outcomes</h2>
        <p>{sections.outcomes}</p>
      </section>

      <div className="project-detail__links">
        {websiteUrl ? (
          <a href={websiteUrl} target="_blank" rel="noreferrer">
            Public Website
          </a>
        ) : null}
        {codeUrl ? (
          <a href={codeUrl} target="_blank" rel="noreferrer">
            Public Code
          </a>
        ) : (
          <span className="project-detail__proprietary-note">Code is proprietary</span>
        )}
        {proprietary ? <span className="project-detail__proprietary-note">Proprietary build</span> : null}
      </div>
    </section>
  )
}

ProjectDetail.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    summary: PropTypes.string,
    impact: PropTypes.string,
    logoUrl: PropTypes.string,
    logoAlt: PropTypes.string,
    websiteUrl: PropTypes.string,
    codeUrl: PropTypes.string,
    proprietary: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
    sections: PropTypes.shape({
      challenge: PropTypes.string,
      build: PropTypes.string,
      outcomes: PropTypes.string,
    }),
  }),
}

export default ProjectDetail
