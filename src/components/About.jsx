const About = () => {
  return (
    <section id="about" className="section-card section-stack">
      <p className="section-kicker">About</p>
      <h2>Building intelligent systems with operational depth</h2>
      <p>
        My work spans product engineering, systems design, and model-aware tooling. I care about secure defaults,
        clean architecture, and products that stay maintainable under real-world constraints.
      </p>
      <p className="about-backstory">
        Backstory: I started by reverse engineering practical systems under pressure, then moved into building
        reliable integrations, automation, and AI-assisted workflows end to end.
      </p>
      <div className="chip-row">
        <span>AI Tooling</span>
        <span>Security Engineering</span>
        <span>Cloud + Infrastructure</span>
        <span>Full Stack Systems</span>
      </div>
    </section>
  )
}

export default About