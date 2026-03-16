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
    logo: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128",
  },
  {
    label: "Substack",
    href: "https://timeundertensors.substack.com",
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

import useScrollReveal from "../hooks/useScrollReveal"

const Connect = () => {
  const ref = useScrollReveal()
  return (
    <section ref={ref} id="connect" className="section-card section-stack scroll-reveal">
      <p className="section-kicker">Connect</p>
      <h2>Let&apos;s build something meaningful</h2>
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