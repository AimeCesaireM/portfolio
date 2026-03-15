/**
 * Terminal-style connect section.
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/AimeCesaireM",
    desc: "code, experiments, and shipped prototypes",
    logo: "https://cdn.simpleicons.org/github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aime-cesaire-mugishawayo/",
    desc: "career updates and collaborations",
    logo: "https://cdn.simpleicons.org/linkedin",
  },
  {
    label: "Substack",
    href: "https://aimecesaire.substack.com",
    desc: "systems, AI, and security writing",
    logo: "https://cdn.simpleicons.org/substack",
  },
  {
    label: "Handshake",
    href: "https://amherst.joinhandshake.com/profiles/33363579",
    desc: "campus recruiting + opportunities",
    logo: "https://www.google.com/s2/favicons?domain=joinhandshake.com&sz=128",
  },
  {
    label: "Email",
    href: "mailto:amugishawayo25@amherst.edu",
    desc: "direct reach-out",
    logo: "https://cdn.simpleicons.org/gmail",
  },
]

const Connect = () => {
  return (
    <section id="connect" className="terminal-section connect-section">
      <p className="terminal-line terminal-line--command">visitor@portfolio:~$ open connect --all</p>
      <p className="terminal-line terminal-line--accent"># connect</p>
      <div className="connect-grid">
        {socialLinks.map(({ label, href, desc, logo }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="connect-card">
            <img src={logo} alt={`${label} logo`} className="connect-card__logo" loading="lazy" />
            <span className="connect-card__label">{label}</span>
            <span className="connect-card__desc">{desc}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Connect