import { experiences } from "../data/experience"

const ExperiencePage = () => {
  return (
    <section className="section-card section-stack">
      <a href="#experience" className="experience-page__back">
        ← Back to Experience
      </a>
      <p className="section-kicker">Experience Story</p>
      <h1>Journey through engineering, teaching, and systems building</h1>
      <p>
        This timeline is a narrative view of my work across product engineering, applied AI, and education. It is
        structured to read as a story while preserving concrete outcomes.
      </p>

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
