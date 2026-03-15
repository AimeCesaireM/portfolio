/**
 * Compact terminal-style projects section.
 * © 2024-2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

const works = [
  {
    title: "Kip (Quip)",
    subtitle: "AI-powered learning platform",
    tags: ["FastAPI", "React", "TypeScript", "Ollama"],
    link: "https://github.com/TimeUnderTensors/Quip",
    demo: "https://github.com/TimeUnderTensors/Quip",
    logo: "https://cdn.simpleicons.org/github",
    logoAlt: "GitHub",
  },
  {
    title: "Ampere",
    subtitle: "IT ops platform for small teams",
    tags: ["Tauri", "React", "Fastify", "PostgreSQL"],
    link: "https://github.com/TimeUnderTensors/ampere",
    demo: "https://github.com/TimeUnderTensors/ampere",
    logo: "https://cdn.simpleicons.org/github",
    logoAlt: "GitHub",
  },
  {
    title: "vec2vec",
    subtitle: "embedding-space translation research",
    tags: ["GANs", "PyTorch", "Embeddings", "ML Research"],
    link: "https://github.com/AimeCesaireM/vec2vec",
    demo: "https://vec2vec.github.io/",
    logo: "https://www.google.com/s2/favicons?domain=vec2vec.github.io&sz=128",
    logoAlt: "vec2vec website",
  },
  {
    title: "Mammoth Rumble",
    subtitle: "decentralized voting platform",
    tags: ["Solidity", "Web3", "React", "Ethers"],
    link: "https://github.com/AimeCesaireM/Decentralized-Voting",
    logo: "https://cdn.simpleicons.org/github",
    logoAlt: "GitHub",
  },
  {
    title: "Madame Saville",
    subtitle: "market intelligence tool",
    tags: ["Regression", "Data Science", "Python", "Flask"],
    link: "https://github.com/AimeCesaireM/madame_saville",
    demo: "https://www.loom.com/share/709ba366e40d4b27af0e8161769bac28?sid=854c5a84-433b-46a9-83c3-8cd7419f5551",
    logo: "https://cdn.simpleicons.org/github",
    logoAlt: "GitHub",
  },
  {
    title: "Foodback",
    subtitle: "LLM-powered food waste management",
    tags: ["LLMs", "Express.js", "Hugging Face", "Computer Vision"],
    link: "https://github.com/AimeCesaireM/foodback",
    logo: "https://cdn.simpleicons.org/github",
    logoAlt: "GitHub",
  },
  {
    title: "Intelligent Pacman bots",
    subtitle: "competitive search agents",
    tags: ["Adversarial Search", "Q-Learning", "Python"],
    link: "https://github.com/AimeCesaireM/AI-Projects",
    logo: "https://cdn.simpleicons.org/github",
    logoAlt: "GitHub",
  },
  {
    title: "Phase1",
    subtitle: "steganography detector",
    tags: ["Steganography", "Java", "Swing"],
    link: "https://github.com/AimeCesaireM/Steganography-Detector",
    demo: "https://sourceforge.net/projects/steganography-detector/",
    logo: "https://www.google.com/s2/favicons?domain=sourceforge.net&sz=128",
    logoAlt: "SourceForge",
  },
  {
    title: "energive",
    subtitle: "statistical attack on the Vigenère cipher",
    tags: ["Cryptanalysis", "Number Theory", "Python"],
    link: "https://github.com/AimeCesaireM/ecc-cryptography",
    demo: "https://sourceforge.net/projects/enervige/",
    logo: "https://www.google.com/s2/favicons?domain=sourceforge.net&sz=128",
    logoAlt: "SourceForge",
  },
  {
    title: "Soccer Data Analytics",
    subtitle: "predictive modeling for EPL",
    tags: ["Machine Learning", "Regression Models", "Python"],
    link: "https://github.com/AimeCesaireM/PremierLeagueMLProject",
    logo: "https://cdn.simpleicons.org/github",
    logoAlt: "GitHub",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="terminal-section project-section">
      <p className="terminal-line terminal-line--command">visitor@portfolio:~$ ls projects/</p>
      <p className="terminal-line terminal-line--accent"># selected projects</p>
      <div className="project-grid">
        {works.map(({ title, subtitle, tags, link, demo, logo, logoAlt }) => (
          <article key={title} className="project-card">
            <div className="project-card__header">
              <img src={logo} alt={logoAlt} className="project-card__logo" loading="lazy" />
              <div>
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__subtitle">{subtitle}</p>
              </div>
            </div>
            <div className="project-card__tags">
              {tags.map((tag) => (
                <span key={`${title}-${tag}`} className="project-card__tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-card__links">
              <a href={link} target="_blank" rel="noreferrer">
                code
              </a>
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer">
                  website
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects