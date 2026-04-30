import useScrollReveal from "../hooks/useScrollReveal"

const Hero = () => {
  const ref = useScrollReveal()
  return (
    <section ref={ref} id="home" className="hero-section section-card scroll-reveal">
      <p className="hero-section__subtitle">Systems Builder &mdash; Security Explorer &mdash; AI Tinkerer</p>
      <h1>
        Aime<br />
        Cesaire
      </h1>
      <p className="hero-section__text">
        Building resilient software across AI, security, and infrastructure, with a strong bias
        for practical execution and measurable outcomes.
      </p>
      <div className="hero-section__actions">
        <a href="/portfolio/other/Aime_Cesaire_resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
        <a href="https://timeundertensors.substack.com" target="_blank" rel="noreferrer">
          Substack
        </a>
      </div>
    </section>
  )
}

export default Hero
