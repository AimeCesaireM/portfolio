import { projects } from "../data/projects"

const Projects = () => {
  return (
    <section id="projects" className="section-card section-stack">
      <p className="section-kicker">Projects</p>
      <h2>Selected builds</h2>
      <div className="project-grid">
        {projects.map(({ slug, title, subtitle, tags, impact, logoUrl, logoAlt }, index) => (
          <article key={title} className="project-card">
            <a href={`#/projects/${slug}`} className="project-card__overlay-link" aria-label={`Open ${title}`} />
            <div className="project-card__header">
              <span className="project-card__badge">{String(index + 1).padStart(2, "0")}</span>
              <img src={logoUrl} alt={logoAlt} className="project-card__logo" loading="lazy" />
              <div>
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__subtitle">{subtitle}</p>
              </div>
            </div>
            <p className="project-card__impact">{impact}</p>
            <div className="project-card__tags">
              {tags.map((tag) => (
                <span key={`${title}-${tag}`} className="project-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects