import { projects } from "../data/projects"
import useScrollReveal from "../hooks/useScrollReveal"

const Projects = () => {
  const ref = useScrollReveal()
  return (
    <section ref={ref} id="projects" className="section-card section-stack scroll-reveal">
      <p className="section-kicker">Projects</p>
      <h2>Selected builds</h2>
      <div className="project-grid">
        {projects.map(({ slug, title, subtitle, tags }, index) => (
          <article key={slug} className="project-card">
            <a
              href={`#/projects/${slug}`}
              className="project-card__overlay-link"
              aria-label={`Open ${title}`}
            />
            <span className="project-card__num">{String(index + 1).padStart(2, "0")}</span>
            <div className="project-card__body">
              <h3 className="project-card__title">{title}</h3>
              <p className="project-card__subtitle">{subtitle}</p>
              <div className="project-card__tags">
                {tags.map((tag) => (
                  <span key={`${slug}-${tag}`} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="project-card__arrow" aria-hidden="true">&#8594;</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
