import { experiences } from "../data/experience"

const ExperiencePage = () => {
  return (
    <section className="section-card section-stack">
      <a href="#experience" className="experience-page__back">
        ← Back to Experience
      </a>
      <p className="section-kicker">Experience</p>
      <h1>The full story</h1>

      <div className="timeline timeline--full">
        {experiences.map((entry) => (
          <article key={entry.id} className="timeline-entry">
            <div className="timeline-entry__period">{entry.period}</div>
            <div className="timeline-entry__content">
              <h2>{entry.title}</h2>
              <p className="timeline-entry__org">
                {entry.org} • {entry.location}
              </p>
              <p>{entry.story}</p>
              <ul>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperiencePage
