import { experiences } from "../data/experience"
import useScrollReveal from "../hooks/useScrollReveal"

const Experience = () => {
  const ref = useScrollReveal()
  return (
    <section ref={ref} id="experience" className="section-card section-stack scroll-reveal">
      <div className="experience-header">
        <div>
          <p className="section-kicker">Experience</p>
          <h2>Where I've worked</h2>
        </div>
        <a href="#/experience" className="experience-header__link">
          Open full story
        </a>
      </div>

      <div className="timeline">
        {experiences.map((entry) => (
          <article key={entry.id} className="timeline-entry">
            <div className="timeline-entry__period">{entry.period}</div>
            <div className="timeline-entry__content">
              <h3>{entry.title}</h3>
              <p className="timeline-entry__org">
                {entry.org} • {entry.location}
              </p>
              <p>{entry.story}</p>
              <ul>
                {entry.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
